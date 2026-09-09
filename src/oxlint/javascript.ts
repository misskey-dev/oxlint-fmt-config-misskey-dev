import { defineConfig } from 'oxlint';

import { stylisticRules } from './stylistic.js';

import type { OxlintConfig, DummyRuleMap } from 'oxlint';

export const jsRules: DummyRuleMap = {
	// TODO: path aliasを使わないとwarnする
	// 'no-restricted-imports': ['warn', {
	// 	'patterns': [
	// 	],
	// }],
	eqeqeq: ['error', 'always', { null: 'ignore' }],
	'no-var': ['error'],
	'prefer-arrow-callback': ['error'],
	'no-throw-literal': ['error'],
	'no-param-reassign': ['warn'],
	'no-constant-condition': ['warn'],
	'no-empty-pattern': ['warn'],
	'no-async-promise-executor': ['error'],
	'no-useless-escape': ['off'],
	'no-control-regex': ['warn'],
	'no-empty': ['warn'],
	'no-inner-declarations': ['off'],
	'no-sparse-arrays': ['off'],
	'import/no-default-export': ['warn'],
	// migrated to oxfmt
	// 'import/order': ['warn', {
	// 	'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
	// }],
};

export function jsConfig(enableStylistic = true): OxlintConfig {
	return defineConfig({
		...(enableStylistic ? {
			jsPlugins: ['@stylistic/eslint-plugin'],
		} : {}),
		overrides: [
			{
				files: ['**/*.js', '**/*.jsx'],
				rules: {
					...jsRules,
					...(enableStylistic ? stylisticRules : {}),
				},
			},
		],
	});
}
