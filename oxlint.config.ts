import { defineMisskeyDevOxlintConfig } from './built/index.mjs';

export default defineMisskeyDevOxlintConfig({
	overrides: {
		ignorePatterns: [
			// Ignore generated files
			'built/**/*',
		],
	},
});
