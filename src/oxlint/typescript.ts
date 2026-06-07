import { defineConfig } from 'oxlint';

import { jsRules } from './javascript.js';
import { stylisticRules } from './stylistic.js';
import { corsaStylisticBehaviors } from './corsa-stylistic.js';

import type { DummyRuleMap } from 'oxlint';

export const tsRules: DummyRuleMap = {
	/* typescript-eslint では enforce に対応してないっぽい
	'@typescript-eslint/lines-between-class-members': ['error', {
		enforce: [{
			blankLine: 'always',
			prev: 'method',
			next: '*',
		}],
	}],
	*/
	// migrated to oxfmt or stylistic
	// '@typescript-eslint/func-call-spacing': ['error', 'never'],
	'typescript/no-explicit-any': ['warn'],
	'no-unused-vars': ['warn'],
	'typescript/no-unnecessary-condition': ['warn'],
	'typescript/no-require-imports': ['warn', { allowAsImport: true }],
	'typescript/no-inferrable-types': ['warn'],
	'typescript/no-non-null-assertion': ['warn'],
	'typescript/explicit-function-return-type': ['off'],
	'typescript/no-misused-promises': ['warn', { checksVoidReturn: false }],
	'typescript/consistent-type-imports': 'off',
	'typescript/prefer-nullish-coalescing': ['warn'],
	// Not implemented yet - use tsgolint or eslint
	// 'typescript/naming-convention': [
	// 	'error',
	// 	{
	// 		'selector': 'typeLike',
	// 		'format': ['PascalCase'],
	// 	},
	// 	{
	// 		'selector': 'typeParameter',
	// 		'format': [],
	// 	},
	// ],
};

export type TsLintOptions = {
	enableStylistic?: boolean;
	enableCorsaStylistic?: boolean;
};

export function tsConfig(options: TsLintOptions = {}) {
	const { enableStylistic = true, enableCorsaStylistic = false } = options;

	if (enableStylistic && enableCorsaStylistic) {
		throw new Error('Enabling both enableStylistic and enableCorsaStylistic at the same time is not allowed.');
	}

	console.log(corsaStylisticBehaviors);

	return defineConfig({
		...(enableStylistic ? {
			jsPlugins: ['@stylistic/eslint-plugin'],
		} : {}),
		options: {
			typeAware: true,
		},
		overrides: [
			{
				files: ['**/*.ts', '**/*.tsx'],
				rules: {
					...jsRules,
					...tsRules,
					...(enableStylistic ? stylisticRules : {}),
					...(enableCorsaStylistic ? corsaStylisticBehaviors : {}),
				},
			},
		],
	});
}
