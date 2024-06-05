"use strict";
n.r(t), n.d(t, {
  AutomodTriggerCategory: function() {
    return o
  },
  AutomodTriggerConfigFlags: function() {
    return r
  },
  checkTriggerTypeForFlag: function() {
    return _
  },
  getAvailableActionTypes: function() {
    return c
  },
  getDefaultTriggerMetadataForTriggerType: function() {
    return N
  },
  triggerConfigs: function() {
    return E
  },
  useAvailableTriggerTypes: function() {
    return O
  },
  validateRuleByTriggerConfigOrThrow: function() {
    return I
  }
}), n("47120"), n("789020"), n("411104"), n("724458");
var r, o, i, u, a = n("470079"),
  l = n("467319"),
  s = n("676317"),
  T = n("273504"),
  d = n("689938");
(i = r || (r = {})).NEW = "new", i.RECOMMENDED = "recommended", i.BETA = "beta", i.ALPHA = "alpha";
let E = {
  [T.AutomodTriggerType.SPAM_LINK]: {
    getDefaultRuleName: () => d.default.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME,
    type: T.AutomodTriggerType.SPAM_LINK,
    eventType: T.AutomodEventType.MESSAGE_SEND,
    perGuildMaxCount: 0,
    availableActionTypes: new Set,
    flags: new Set,
    defaultActionTypes: new Set
  },
  [T.AutomodTriggerType.KEYWORD]: {
    getDefaultRuleName: () => d.default.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME,
    type: T.AutomodTriggerType.KEYWORD,
    eventType: T.AutomodEventType.MESSAGE_SEND,
    perGuildMaxCount: 6,
    availableActionTypes: new Set([T.AutomodActionType.BLOCK_MESSAGE, T.AutomodActionType.FLAG_TO_CHANNEL, T.AutomodActionType.USER_COMMUNICATION_DISABLED]),
    flags: new Set,
    defaultActionTypes: new Set([T.AutomodActionType.BLOCK_MESSAGE])
  },
  [T.AutomodTriggerType.ML_SPAM]: {
    getDefaultRuleName: () => d.default.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_NAME,
    type: T.AutomodTriggerType.ML_SPAM,
    eventType: T.AutomodEventType.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([T.AutomodActionType.BLOCK_MESSAGE, T.AutomodActionType.FLAG_TO_CHANNEL]),
    flags: new Set([]),
    defaultActionTypes: new Set([T.AutomodActionType.BLOCK_MESSAGE])
  },
  [T.AutomodTriggerType.DEFAULT_KEYWORD_LIST]: {
    getDefaultRuleName: () => d.default.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_FILTER_NAME,
    type: T.AutomodTriggerType.DEFAULT_KEYWORD_LIST,
    eventType: T.AutomodEventType.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([T.AutomodActionType.BLOCK_MESSAGE, T.AutomodActionType.FLAG_TO_CHANNEL]),
    flags: new Set([]),
    defaultActionTypes: new Set([T.AutomodActionType.BLOCK_MESSAGE])
  },
  [T.AutomodTriggerType.MENTION_SPAM]: {
    getDefaultRuleName: () => d.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_NAME,
    type: T.AutomodTriggerType.MENTION_SPAM,
    eventType: T.AutomodEventType.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([T.AutomodActionType.BLOCK_MESSAGE, T.AutomodActionType.FLAG_TO_CHANNEL, T.AutomodActionType.USER_COMMUNICATION_DISABLED]),
    flags: new Set([]),
    defaultActionTypes: new Set([T.AutomodActionType.BLOCK_MESSAGE])
  },
  [T.AutomodTriggerType.USER_PROFILE]: {
    getDefaultRuleName: () => d.default.Messages.GUILD_AUTOMOD_USER_PROFILE_FILTER_NAME,
    type: T.AutomodTriggerType.USER_PROFILE,
    eventType: T.AutomodEventType.GUILD_MEMBER_JOIN_OR_UPDATE,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([T.AutomodActionType.QUARANTINE_USER, T.AutomodActionType.FLAG_TO_CHANNEL]),
    flags: new Set([]),
    defaultActionTypes: new Set([T.AutomodActionType.QUARANTINE_USER])
  },
  [T.AutomodTriggerType.SERVER_POLICY]: {
    getDefaultRuleName: () => d.default.Messages.GUILD_AUTOMOD_SERVER_POLICY_FILTER_NAME,
    type: T.AutomodTriggerType.SERVER_POLICY,
    eventType: T.AutomodEventType.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([T.AutomodActionType.FLAG_TO_CHANNEL]),
    flags: new Set(["alpha"]),
    defaultActionTypes: new Set
  }
};
(u = o || (o = {})).MEMBERS = "members", u.CONTENT = "content";
let A = {
    members: [E[T.AutomodTriggerType.USER_PROFILE]],
    content: [E[T.AutomodTriggerType.SERVER_POLICY], E[T.AutomodTriggerType.MENTION_SPAM], E[T.AutomodTriggerType.ML_SPAM], E[T.AutomodTriggerType.DEFAULT_KEYWORD_LIST], E[T.AutomodTriggerType.KEYWORD]]
  },
  _ = (e, t) => E[e].flags.has(t);

function c(e) {
  return Array.from(E[e].availableActionTypes)
}

function I(e, t) {
  let {
    id: n,
    eventType: r,
    triggerType: o,
    actions: i
  } = e, u = E[o];
  if (t.filter(e => n !== e.id && e.triggerType === o).length > u.perGuildMaxCount) throw Error("You have exceeded the maximum number of rules of type ".concat(o));
  if (i.some(e => !u.availableActionTypes.has(e.type))) throw Error("You have provided an action that is not available for this trigger type");
  if (r !== u.eventType) throw Error("You have provided an event type that is not available for this trigger type")
}

function O(e) {
  let t = (0, s.useIsUserProfileRuleEnabled)(e);
  return a.useMemo(() => Object.keys(A).reduce((e, n) => {
    let r = A[n].filter(e => e.type !== T.AutomodTriggerType.SERVER_POLICY && (e.type !== T.AutomodTriggerType.USER_PROFILE || !!t) && e.perGuildMaxCount > 0).map(e => e.type);
    return e[n] = r, e
  }, {
    members: [],
    content: []
  }), [t])
}

function N(e, t) {
  let n = (0, l.isInMentionRaidExperiment)(t);
  switch (e) {
    case T.AutomodTriggerType.DEFAULT_KEYWORD_LIST:
      return {
        allowList: [], presets: []
      };
    case T.AutomodTriggerType.USER_PROFILE:
    case T.AutomodTriggerType.KEYWORD:
      return {
        keywordFilter: [], regexPatterns: [], allowList: []
      };
    case T.AutomodTriggerType.MENTION_SPAM:
      return {
        mentionTotalLimit: T.MENTION_SPAM_LIMIT_DEFAULT, mentionRaidProtectionEnabled: n
      };
    case T.AutomodTriggerType.ML_SPAM:
    case T.AutomodTriggerType.SERVER_POLICY:
    default:
      return
  }
}