import { defineConfig } from 'oxlint';

import { jsConfig } from './javascript.js';
import type { JsLintOptions } from './javascript.js';
import { tsConfig } from './typescript.js';
import type { TsLintOptions } from './typescript.js';
import { corsaStylisticRulesets } from './corsa-stylistic.js';

import type { OxlintConfig } from 'oxlint';

interface MisskeyDevOxlintConfigOptions {
	features?: {
		/** Defaults to true */
		js?: boolean;
		/** Defaults to true */
		ts?: boolean;
		/** Defaults to true */
		stylistic?: boolean;
		/** Defaults to false - This is an experimental feature and can be removed in the future. Using `stylistic` and `experimentalCorsaStylistic` at the same time is not possible. */
		experimentalCorsaStylistic?: boolean;
	};
	overrides?: Partial<OxlintConfig>;
}

function defineMisskeyDevOxlintConfig(opts: MisskeyDevOxlintConfigOptions = {}): OxlintConfig {
	const additonalFeatureFlags: JsLintOptions & TsLintOptions = {
		enableStylistic: opts.features?.stylistic ?? true,
		enableCorsaStylistic: opts.features?.experimentalCorsaStylistic ?? false,
	};

	return defineConfig({
		...opts.overrides,
		...(additonalFeatureFlags.enableCorsaStylistic ? {
			jsPlugins: ['corsa-oxlint/stylistic'],
			settings: {
				corsaStylistic: {
					rules: corsaStylisticRulesets,
				},
			},
		} : {}),
		extends: [
			...((opts.features?.js ?? true) ? [jsConfig(additonalFeatureFlags)] : []),
			...((opts.features?.ts ?? true) ? [tsConfig(additonalFeatureFlags)] : []),
			...(opts.overrides?.extends ?? []),
		],
	});
}

export { defineMisskeyDevOxlintConfig };
export { jsRules as oxlintJsRules } from './javascript.js';
export { tsRules as oxlintTsRules } from './typescript.js';
export { stylisticRules as oxlintStylisticRules } from './stylistic.js';
export { corsaStylisticRules as oxlintCorsaStylisticRules } from './corsa-stylistic.js';

export type { MisskeyDevOxlintConfigOptions };
