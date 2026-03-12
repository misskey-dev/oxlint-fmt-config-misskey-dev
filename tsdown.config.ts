import { defineConfig } from 'tsdown';

export default defineConfig([{
	entry: 'src/index.ts',
	outDir: 'built',
	dts: true,
}, {
	entry: 'src/oxlint/index.ts',
	outDir: 'built/oxlint',
	dts: true,
}]);
