-- Ceylon Cabs Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- GALLERY ITEMS TABLE
-- =====================================================
CREATE TABLE gallery_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tour_slug TEXT NOT NULL,              -- References static tour data (e.g., 'sigiriya-dambulla')
  tour_name TEXT NOT NULL,              -- Display name for the tour
  description TEXT,                     -- Brief tour description for gallery
  images JSONB NOT NULL DEFAULT '[]',   -- Array of {url: string, caption?: string, order: number}
  display_order INTEGER DEFAULT 0,      -- Order in gallery display
  is_featured BOOLEAN DEFAULT false,    -- Show on homepage gallery preview
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- REVIEWS TABLE
-- =====================================================
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  content TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  location TEXT,                        -- Optional: where reviewer is from
  approved BOOLEAN DEFAULT false,       -- Admin approval required
  created_at TIMESTAMPTZ DEFAULT NOW(),
  approved_at TIMESTAMPTZ,
  approved_by UUID REFERENCES auth.users(id)
);

-- =====================================================
-- INDEXES FOR PERFORMANCE
-- =====================================================
CREATE INDEX idx_gallery_tour_slug ON gallery_items(tour_slug);
CREATE INDEX idx_gallery_featured ON gallery_items(is_featured) WHERE is_featured = true;
CREATE INDEX idx_gallery_display_order ON gallery_items(display_order);
CREATE INDEX idx_reviews_approved ON reviews(approved) WHERE approved = true;
CREATE INDEX idx_reviews_created ON reviews(created_at DESC);

-- =====================================================
-- ROW LEVEL SECURITY (RLS)
-- =====================================================
ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Public can READ all gallery items
CREATE POLICY "Public can view gallery items"
  ON gallery_items FOR SELECT
  USING (true);

-- Public can READ only approved reviews
CREATE POLICY "Public can view approved reviews"
  ON reviews FOR SELECT
  USING (approved = true);

-- Anyone can INSERT reviews (pending approval)
CREATE POLICY "Anyone can submit reviews"
  ON reviews FOR INSERT
  WITH CHECK (approved = false);

-- Authenticated users (admin) can do everything on gallery_items
CREATE POLICY "Admin full access to gallery"
  ON gallery_items
  FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Authenticated users (admin) can do everything on reviews
CREATE POLICY "Admin full access to reviews"
  ON reviews
  FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- =====================================================
-- STORAGE BUCKET FOR GALLERY IMAGES
-- =====================================================
INSERT INTO storage.buckets (id, name, public)
VALUES ('gallery-images', 'gallery-images', true);

-- Storage policies
CREATE POLICY "Public can view gallery images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'gallery-images');

CREATE POLICY "Authenticated users can upload gallery images"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'gallery-images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update gallery images"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'gallery-images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete gallery images"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'gallery-images' AND auth.role() = 'authenticated');

-- =====================================================
-- UPDATED_AT TRIGGER
-- =====================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_gallery_items_updated_at
    BEFORE UPDATE ON gallery_items
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- SAMPLE DATA (Optional - for testing)
-- =====================================================
-- INSERT INTO gallery_items (tour_slug, tour_name, description, images, is_featured) VALUES
-- ('sigiriya-dambulla', 'Sigiriya & Dambulla', 'Ancient cities tour with breathtaking views', 
--  '[{"url": "/images/destinations/sigiriya-1.jpg", "order": 0}]', true);

-- INSERT INTO reviews (name, content, rating, location, approved) VALUES
-- ('John Smith', 'Amazing service! Driver was professional and punctual.', 5, 'Australia', true);
