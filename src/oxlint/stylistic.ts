import type { DummyRuleMap } from 'oxlint';

export const stylisticRules: DummyRuleMap = {
	'@stylistic/array-bracket-spacing': ['error', 'never'],
	'@stylistic/arrow-spacing': ['error', {
		'before': true,
		'after': true,
	}],
	'@stylistic/brace-style': ['error', '1tbs', {
		'allowSingleLine': true,
	}],
	'@stylistic/comma-dangle': ['warn', 'always-multiline'],
	'@stylistic/comma-spacing': ['error', { 'before': false, 'after': true }],
	'@stylistic/eol-last': ['error', 'always'],
	'@stylistic/key-spacing': ['error', {
		'beforeColon': false,
		'afterColon': true,
	}],
	'@stylistic/keyword-spacing': ['error', {
		'before': true,
		'after': true,
	}],
	'@stylistic/indent': ['warn', 'tab', {
		'SwitchCase': 1,
		'MemberExpression': 1,
		'flatTernaryExpressions': true,
		'ArrayExpression': 'first',
		'ObjectExpression': 'first',
	}],
	'@stylistic/lines-between-class-members': 'off',
	'@stylistic/no-multi-spaces': ['error'],
	'@stylistic/no-multiple-empty-lines': ['error', { 'max': 1 }],
	'@stylistic/object-curly-spacing': ['error', 'always'],
	'@stylistic/padded-blocks': ['error', 'never'],
	'@stylistic/nonblock-statement-body-position': ['error', 'beside'],
	'@stylistic/padding-line-between-statements': [
		'error',
		{ 'blankLine': 'always', 'prev': 'function', 'next': '*' },
		{ 'blankLine': 'always', 'prev': '*', 'next': 'function' },
	],
	'@stylistic/quotes': ['warn', 'single'],
	'@stylistic/semi': ['error', 'always'],
	'@stylistic/semi-spacing': ['error', { 'before': false, 'after': true }],
	'@stylistic/space-before-blocks': ['error', 'always'],
	'@stylistic/space-infix-ops': ['error'],
};
