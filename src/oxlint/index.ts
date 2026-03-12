import { defineConfig } from 'oxlint';

import { jsConfig } from './javascript.js';
import { tsConfig } from './typescript.js';

import type { OxlintConfig } from 'oxlint';

interface MisskeyDevOxlintConfigOptions {
	features?: {
		/** Defaults to true */
		js?: boolean;
		/** Defaults to true */
		ts?: boolean;
		/** Defaults to true */
		stylistic?: boolean;
	};
	overrides?: Partial<OxlintConfig>;
}

function defineMisskeyDevOxlintConfig(opts: MisskeyDevOxlintConfigOptions = {}): OxlintConfig {
	return defineConfig({
		...opts.overrides,
		extends: [
			...((opts.features?.js ?? true) ? [jsConfig(opts.features?.stylistic)] : []),
			...((opts.features?.ts ?? true) ? [tsConfig(opts.features?.stylistic)] : []),
			...(opts.overrides?.extends ?? []),
		],
	});
}

export { defineMisskeyDevOxlintConfig };

export type { MisskeyDevOxlintConfigOptions };
