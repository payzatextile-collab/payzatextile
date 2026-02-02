import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './public/images';
const outputDir = './public/images-hq';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Get all jpg files
const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.jpg'));

console.log(`Re-optimizing ${files.length} images with higher quality...`);

// First copy back originals from downloads
const originalDir = 'C:\\Users\\atabe\\Downloads\\wetransfer__f4a8992-edit-jpg_2026-02-02_1148';

for (const file of files) {
    const originalPath = path.join(originalDir, file);
    const outputPath = path.join(outputDir, file);

    if (fs.existsSync(originalPath)) {
        try {
            await sharp(originalPath)
                .resize(2400, null, {
                    withoutEnlargement: true,
                    fit: 'inside'
                })
                .jpeg({ quality: 92, progressive: true })
                .toFile(outputPath);

            const inputStats = fs.statSync(originalPath);
            const outputStats = fs.statSync(outputPath);
            const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

            console.log(`${file}: ${(inputStats.size / 1024 / 1024).toFixed(1)}MB -> ${(outputStats.size / 1024).toFixed(0)}KB (${savings}% savings)`);
        } catch (err) {
            console.error(`Error processing ${file}:`, err.message);
        }
    }
}

console.log('Done! Moving high-quality images to public/images...');

// Replace with high quality versions
for (const file of files) {
    const hqPath = path.join(outputDir, file);
    const targetPath = path.join(inputDir, file);

    if (fs.existsSync(hqPath)) {
        fs.unlinkSync(targetPath);
        fs.renameSync(hqPath, targetPath);
    }
}

// Remove temp directory
fs.rmdirSync(outputDir);

console.log('All images optimized with high quality!');
