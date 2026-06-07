import { corsaStylisticPlugin, implementedStylisticRuleNames } from 'corsa-oxlint/stylistic';
import { stylisticRules } from './stylistic.js';
import type { DummyRuleMap, DummyRule, AllowWarnDeny } from 'oxlint';

const prefix = corsaStylisticPlugin.meta?.name ?? 'oxlint-plugin-corsa-stylistic';

export const corsaStylisticRules: DummyRuleMap = Object.fromEntries(Object.entries(stylisticRules)
	.map<[string, DummyRule]>(([ruleName, ruleConfig]) => {
		const name = ruleName.replace('@stylistic/', `${prefix}/`);
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		return [name, ruleConfig!];
	})
	.filter(([ruleName]) => (implementedStylisticRuleNames as readonly string[]).includes(ruleName.replace(`${prefix}/`, ''))));

export const corsaStylisticRulesets = Object.fromEntries(Object.entries(corsaStylisticRules)
	.map(([ruleName, ruleConfig]) => {
		const [_behavior, ...options] = Array.isArray(ruleConfig) ? ruleConfig : [''];
		return [ruleName.replace(`${prefix}/`, ''), options];
	}));

export const corsaStylisticBehaviors: DummyRuleMap = Object.fromEntries(Object.entries(corsaStylisticRules)
	.map(([ruleName, ruleConfig]) => {
		const [behavior] = Array.isArray(ruleConfig) ? ruleConfig : [ruleConfig];
		return [ruleName, behavior as AllowWarnDeny];
	}));
