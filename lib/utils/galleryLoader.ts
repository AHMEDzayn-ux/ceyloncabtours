import fs from "fs";
import path from "path";

export interface GalleryImage {
  src: string;
  alt: string;
}

/**
 * Load all images from the public/images/gallery directory
 * Supports: .jpg, .jpeg, .png, .webp, .gif
 */
export function loadGalleryImages(): GalleryImage[] {
  const galleryPath = path.join(process.cwd(), "public", "images", "gallery");

  // Create directory if it doesn't exist
  if (!fs.existsSync(galleryPath)) {
    return [];
  }

  const files = fs.readdirSync(galleryPath);

  const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

  const images = files
    .filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    })
    .sort() // Sort alphabetically
    .map((file) => {
      // Generate alt text from filename (remove extension and replace hyphens/underscores with spaces)
      const altText = path
        .basename(file, path.extname(file))
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

      return {
        src: `/images/gallery/${file}`,
        alt: altText,
      };
    });

  return images;
}
