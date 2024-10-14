import * as esbuild from 'esbuild';
import { readdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const lambdasDir = join(__dirname, 'lambdas');
const lambdaFunctions = readdirSync(lambdasDir);

async function build() {
  for (const func of lambdaFunctions) {
    const entryPoint = join(lambdasDir, func, 'src', 'index.ts');
    const outfile = join(lambdasDir, func, 'dist', 'index.js');

    try {
      await esbuild.build({
        entryPoints: [entryPoint],
        bundle: true,
        outfile: outfile,
        platform: 'node',
        target: 'es2020',
        format: 'esm',
      });

      console.log(`Built ${func}`);
    } catch (error) {
      console.error(`Error building ${func}:`, error);
      process.exit(1);
    }
  }
}

build();
