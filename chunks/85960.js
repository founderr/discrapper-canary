t.d(n, {
  I6: function() {
return _;
  },
  V9: function() {
return I;
  },
  Z6: function() {
return S;
  },
  jp: function() {
return A;
  },
  r5: function() {
return f;
  },
  vT: function() {
return r;
  },
  vh: function() {
return i;
  },
  yU: function() {
return T;
  }
}), t(47120), t(789020), t(411104), t(724458);
var r, i, o, l, u = t(470079),
  a = t(467319),
  s = t(676317),
  c = t(273504),
  d = t(689938);
(o = r || (r = {})).NEW = 'new', o.RECOMMENDED = 'recommended', o.BETA = 'beta', o.ALPHA = 'alpha';
let _ = {
  [c.fX.SPAM_LINK]: {
getDefaultRuleName: () => d.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME,
type: c.fX.SPAM_LINK,
eventType: c.q4.MESSAGE_SEND,
perGuildMaxCount: 0,
availableActionTypes: new Set(),
flags: new Set(),
defaultActionTypes: new Set()
  },
  [c.fX.KEYWORD]: {
getDefaultRuleName: () => d.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME,
type: c.fX.KEYWORD,
eventType: c.q4.MESSAGE_SEND,
perGuildMaxCount: 6,
availableActionTypes: new Set([
  c.jj.BLOCK_MESSAGE,
  c.jj.FLAG_TO_CHANNEL,
  c.jj.USER_COMMUNICATION_DISABLED
]),
flags: new Set(),
defaultActionTypes: new Set([c.jj.BLOCK_MESSAGE])
  },
  [c.fX.ML_SPAM]: {
getDefaultRuleName: () => d.Z.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_NAME,
type: c.fX.ML_SPAM,
eventType: c.q4.MESSAGE_SEND,
perGuildMaxCount: 1,
availableActionTypes: new Set([
  c.jj.BLOCK_MESSAGE,
  c.jj.FLAG_TO_CHANNEL
]),
flags: new Set([]),
defaultActionTypes: new Set([c.jj.BLOCK_MESSAGE])
  },
  [c.fX.DEFAULT_KEYWORD_LIST]: {
getDefaultRuleName: () => d.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_FILTER_NAME,
type: c.fX.DEFAULT_KEYWORD_LIST,
eventType: c.q4.MESSAGE_SEND,
perGuildMaxCount: 1,
availableActionTypes: new Set([
  c.jj.BLOCK_MESSAGE,
  c.jj.FLAG_TO_CHANNEL
]),
flags: new Set([]),
defaultActionTypes: new Set([c.jj.BLOCK_MESSAGE])
  },
  [c.fX.MENTION_SPAM]: {
getDefaultRuleName: () => d.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_NAME,
type: c.fX.MENTION_SPAM,
eventType: c.q4.MESSAGE_SEND,
perGuildMaxCount: 1,
availableActionTypes: new Set([
  c.jj.BLOCK_MESSAGE,
  c.jj.FLAG_TO_CHANNEL,
  c.jj.USER_COMMUNICATION_DISABLED
]),
flags: new Set([]),
defaultActionTypes: new Set([c.jj.BLOCK_MESSAGE])
  },
  [c.fX.USER_PROFILE]: {
getDefaultRuleName: () => d.Z.Messages.GUILD_AUTOMOD_USER_PROFILE_FILTER_NAME,
type: c.fX.USER_PROFILE,
eventType: c.q4.GUILD_MEMBER_JOIN_OR_UPDATE,
perGuildMaxCount: 1,
availableActionTypes: new Set([
  c.jj.QUARANTINE_USER,
  c.jj.FLAG_TO_CHANNEL
]),
flags: new Set([]),
defaultActionTypes: new Set([c.jj.QUARANTINE_USER])
  },
  [c.fX.SERVER_POLICY]: {
getDefaultRuleName: () => d.Z.Messages.GUILD_AUTOMOD_SERVER_POLICY_FILTER_NAME,
type: c.fX.SERVER_POLICY,
eventType: c.q4.MESSAGE_SEND,
perGuildMaxCount: 1,
availableActionTypes: new Set([c.jj.FLAG_TO_CHANNEL]),
flags: new Set(['alpha']),
defaultActionTypes: new Set()
  }
};
(l = i || (i = {})).MEMBERS = 'members', l.CONTENT = 'content';
let E = {
members: [_[c.fX.USER_PROFILE]],
content: [
  _[c.fX.SERVER_POLICY],
  _[c.fX.MENTION_SPAM],
  _[c.fX.ML_SPAM],
  _[c.fX.DEFAULT_KEYWORD_LIST],
  _[c.fX.KEYWORD]
]
  },
  f = (e, n) => _[e].flags.has(n);

function I(e) {
  return Array.from(_[e].availableActionTypes);
}

function T(e, n) {
  let {
id: t,
eventType: r,
triggerType: i,
actions: o
  } = e, l = _[i];
  if (n.filter(e => t !== e.id && e.triggerType === i).length > l.perGuildMaxCount)
throw Error('You have exceeded the maximum number of rules of type '.concat(i));
  if (o.some(e => !l.availableActionTypes.has(e.type)))
throw Error('You have provided an action that is not available for this trigger type');
  if (r !== l.eventType)
throw Error('You have provided an event type that is not available for this trigger type');
}

function S(e) {
  let n = (0, s.oA)(e);
  return u.useMemo(() => Object.keys(E).reduce((e, t) => {
let r = E[t].filter(e => e.type !== c.fX.SERVER_POLICY && (e.type !== c.fX.USER_PROFILE || !!n) && e.perGuildMaxCount > 0).map(e => e.type);
return e[t] = r, e;
  }, {
members: [],
content: []
  }), [n]);
}

function A(e, n) {
  let t = (0, a.H)(n);
  switch (e) {
case c.fX.DEFAULT_KEYWORD_LIST:
  return {
    allowList: [],
      presets: []
  };
case c.fX.USER_PROFILE:
case c.fX.KEYWORD:
  return {
    keywordFilter: [],
      regexPatterns: [],
      allowList: []
  };
case c.fX.MENTION_SPAM:
  return {
    mentionTotalLimit: c.Ic,
      mentionRaidProtectionEnabled: t
  };
case c.fX.ML_SPAM:
case c.fX.SERVER_POLICY:
default:
  return;
  }
}