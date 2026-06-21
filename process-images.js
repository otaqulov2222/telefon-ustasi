const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const inputDir = path.join(__dirname, '..', 'section 1', 'images');
const outputDir = path.join(__dirname, 'public', 'sequence', 'section1');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all files
const files = fs.readdirSync(inputDir).filter(f => f.startsWith('ezgif-frame-') && f.endsWith('.jpg')).sort();
const totalFrames = files.length;
const targetFrames = 90;

console.log(`Found ${totalFrames} frames. Processing to ${targetFrames} frames...`);

for (let i = 0; i < targetFrames; i++) {
  // Map index from 0..89 to 0..120
  const originalIndex = Math.floor(i * (totalFrames - 1) / (targetFrames - 1));
  const inputFile = path.join(inputDir, files[originalIndex]);
  const outputFile = path.join(outputDir, `frame_${i}.webp`);
  
  // Convert to webp with q=80 to keep sizes low
  const cmd = `ffmpeg -y -i "${inputFile}" -c:v libwebp -q:v 80 "${outputFile}"`;
  execSync(cmd, { stdio: 'ignore' });
  if (i % 10 === 0) console.log(`Processed ${i}/${targetFrames}`);
}

console.log('Done!');
