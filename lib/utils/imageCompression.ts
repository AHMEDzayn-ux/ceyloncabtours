import imageCompression from 'browser-image-compression';

/**
 * Image Compression Utilities
 * Client-side image compression before upload to Supabase
 */

export interface CompressionOptions {
  maxSizeMB?: number;
  maxWidthOrHeight?: number;
  useWebWorker?: boolean;
  fileType?: string;
  initialQuality?: number;
}

const DEFAULT_OPTIONS: CompressionOptions = {
  maxSizeMB: 0.5, // 500KB max
  maxWidthOrHeight: 1920,
  useWebWorker: true,
  fileType: 'image/webp',
  initialQuality: 0.8,
};

/**
 * Compress a single image file
 */
export async function compressImage(
  file: File,
  options: CompressionOptions = {}
): Promise<File> {
  try {
    const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
    const compressedFile = await imageCompression(file, mergedOptions);

    // Rename to .webp extension if converting format
    if (mergedOptions.fileType === 'image/webp' && !file.name.endsWith('.webp')) {
      const newName = file.name.replace(/\.[^/.]+$/, '.webp');
      return new File([compressedFile], newName, { type: 'image/webp' });
    }

    return compressedFile;
  } catch (error) {
    console.error('Image compression failed:', error);
    throw new Error('Failed to compress image');
  }
}

/**
 * Compress multiple image files
 */
export async function compressMultipleImages(
  files: FileList | File[],
  options: CompressionOptions = {}
): Promise<File[]> {
  const fileArray = Array.from(files);

  const compressionPromises = fileArray.map((file) =>
    compressImage(file, options)
  );

  return await Promise.all(compressionPromises);
}

/**
 * Validate image file type
 */
export function isValidImageFile(file: File): boolean {
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  return validTypes.includes(file.type);
}

/**
 * Validate image file size (before compression)
 */
export function isFileSizeValid(file: File, maxSizeMB: number = 10): boolean {
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  return file.size <= maxSizeBytes;
}

/**
 * Get file size in human-readable format
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}
