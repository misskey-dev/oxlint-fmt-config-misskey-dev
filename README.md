# `@misskey-dev/oxlint-fmt-config`

This package provides configuration for `oxlint` used in Misskey development.

`oxfmt` configuration is not included yet, as it is now using stylistic eslint rules for formatting. However, the directory structure of this package is designed to accommodate adding oxfmt configurations in the future.

## Usage

Install the package:

```bash
pnpm add -D @misskey-dev/oxlint-fmt-config
```

Create `oxlint.config.ts` in the root of your project with the following content:

```ts
import { defineMisskeyDevOxlintConfig } from '@misskey-dev/oxlint-fmt-config';

export default defineMisskeyDevOxlintConfig({
	// Disable specific rulesets
	features: {
		stylistic: false,
	},

	// Override the default config
	overrides: {
		ignorePatterns: [
			'built/**/*',
		],
	},
});
```

## License

MIT
