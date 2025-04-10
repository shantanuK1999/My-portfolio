const fs = require('fs');
const path = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');

const distPath = './dist/futuristic-portfolio/browser';

function obfuscateJSFiles(dirPath) {
    fs.readdirSync(dirPath).forEach(file => {
        const fullPath = path.join(dirPath, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            obfuscateJSFiles(fullPath); // recursively obfuscate subfolders
        } else if (file.endsWith('.js')) {
            const code = fs.readFileSync(fullPath, 'utf-8');
            const obfuscatedCode = JavaScriptObfuscator.obfuscate(code, {
                compact: true,
                controlFlowFlattening: true,
                deadCodeInjection: true,
                stringArray: true,
                stringArrayEncoding: ['rc4'],
                stringArrayThreshold: 0.75,
            }).getObfuscatedCode();

            fs.writeFileSync(fullPath, obfuscatedCode, 'utf-8');
            console.log(`✅ Obfuscated: ${fullPath}`);
        }
    });
}

obfuscateJSFiles(distPath);
