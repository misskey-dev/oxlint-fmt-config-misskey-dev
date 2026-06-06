import { implementedStylisticRuleNames } from 'corsa-oxlint/stylistic';
import { stylisticRules } from './stylistic.js';
import type { DummyRuleMap, DummyRule } from 'oxlint';

export const stylisticRuleMap: DummyRuleMap = Object.fromEntries(Object.entries(stylisticRules)
	.map<[string, DummyRule]>(([ruleName, ruleConfig]) => {
		const name = ruleName.replace('@stylistic/', 'stylistic/');
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		return [name, ruleConfig!];
	})
	.filter(([ruleName]) => (implementedStylisticRuleNames as readonly string[]).includes(ruleName.replace('stylistic/', ''))));
