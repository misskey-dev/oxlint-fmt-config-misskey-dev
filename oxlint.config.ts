import { defineMisskeyDevOxlintConfig } from './built/index.mjs';

export default defineMisskeyDevOxlintConfig({
	features: {
		stylistic: false,
		experimentalCorsaStylistic: true,
	},
	overrides: {
		ignorePatterns: [
			// Ignore generated files
			'built/**/*',
		],
	},
});
