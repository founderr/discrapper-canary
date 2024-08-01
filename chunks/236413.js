t.d(n, {
  Ar: function() {
return C;
  },
  DO: function() {
return _;
  },
  Fn: function() {
return f;
  },
  Jq: function() {
return T;
  },
  QO: function() {
return N;
  },
  Vb: function() {
return g;
  },
  YN: function() {
return p;
  },
  ZF: function() {
return O;
  },
  ep: function() {
return S;
  },
  km: function() {
return A;
  },
  nC: function() {
return I;
  },
  vo: function() {
return E;
  }
}), t(47120), t(411104);
var r = t(581364),
  i = t(314897),
  o = t(866830),
  l = t(539573),
  u = t(727072),
  a = t(85960),
  s = t(273504),
  c = t(689938);
let d = (e, n) => ''.concat(e, '-').concat(n, '-new-rule'),
  _ = e => (null == e ? void 0 : e.triggerType) === s.fX.KEYWORD,
  E = e => (null == e ? void 0 : e.triggerType) === s.fX.ML_SPAM,
  f = e => (null == e ? void 0 : e.triggerType) === s.fX.DEFAULT_KEYWORD_LIST,
  I = e => (null == e ? void 0 : e.triggerType) === s.fX.MENTION_SPAM,
  T = e => (null == e ? void 0 : e.triggerType) === s.fX.USER_PROFILE;

function S(e, n) {
  let t = a.I6[n],
r = (0, a.jp)(n, e),
l = {
  id: d(e, n),
  name: t.getDefaultRuleName(),
  guildId: e,
  eventType: t.eventType,
  triggerType: n,
  triggerMetadata: r,
  enabled: !0,
  creatorId: i.default.getId(),
  actions: (0, o.qR)(t),
  position: 0,
  exemptChannels: new Set(),
  exemptRoles: new Set()
};
  if (g(l))
throw Error(c.Z.Messages.GUILD_AUTOMOD_NEW_RULE_ERROR);
  let s = (0, u.mY)(e, n);
  return s > 0 && (l.name += ' '.concat(s + 1)), l;
}

function A(e, n) {
  if (e.length > n)
throw Error(c.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_TOO_MANY_KEYWORDS.format({
  limit: n
}));
  e.forEach(e => {
if (e.length > s.hu || e.length < s.Vk)
  throw new l.V6(c.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_INVALID_KEYWORD_LENGTH.format({
    keyword: e,
    max: s.hu,
    min: s.Vk
  }));
  });
}

function N(e) {
  if (_(e)) {
var n, t;
let r = null !== (n = e.triggerMetadata.keywordFilter) && void 0 !== n ? n : [],
  i = null !== (t = e.triggerMetadata.regexPatterns) && void 0 !== t ? t : [];
if (0 === r.length && 0 === i.length)
  throw Error(c.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_NO_KEYWORDS_OR_REGEX);
A(r, s.RH), ! function(e) {
  if (e.length > s.VW)
    throw Error(c.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_TOO_MANY_REGEX.format({
      limit: s.VW
    }));
  e.forEach(e => {
    if (e.length > s.aj || e.length < s.uE)
      throw new l.uS(c.Z.Messages.GUILD_AUTOMOD_REGEX_ERROR_INVALID_REGEX_LENGTH.format({
        regex: e,
        max: s.aj,
        min: s.uE
      }));
  });
}(i);
  }
  if (0 === e.actions.length)
throw Error(c.Z.Messages.GUILD_AUTOMOD_ERROR_NO_ACTIONS);
}

function g(e) {
  var n;
  return (0, r.BH)(null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : 'INVALID_SNOWFLAKE');
}

function p(e) {
  switch (e) {
case s.q4.MESSAGE_SEND:
  return c.Z.Messages.GUILD_AUTOMOD_EVENT_TYPE_MESSAGE_SEND;
case s.q4.GUILD_MEMBER_JOIN_OR_UPDATE:
  return c.Z.Messages.GUILD_AUTOMOD_EVENT_TYPE_GUILD_MEMBER_JOIN_OR_UPDATE;
default:
  return c.Z.Messages.GUILD_AUTOMOD_UNKNOWN;
  }
}

function O(e) {
  switch (e) {
case s.jj.BLOCK_MESSAGE:
  return c.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
case s.jj.FLAG_TO_CHANNEL:
  return c.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
case s.jj.USER_COMMUNICATION_DISABLED:
  return c.Z.Messages.GUILD_AUTOMOD_ACTIONS_USER_COMMUNICATION_DISABLED;
case s.jj.QUARANTINE_USER:
  return c.Z.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER;
default:
  return c.Z.Messages.GUILD_AUTOMOD_UNKNOWN;
  }
}

function C(e) {
  switch (e) {
case s.fX.KEYWORD:
  return c.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME;
case s.fX.ML_SPAM:
  return c.Z.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_NAME;
case s.fX.DEFAULT_KEYWORD_LIST:
  return c.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_FILTER_NAME;
case s.fX.MENTION_SPAM:
  return c.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_NAME;
case s.fX.USER_PROFILE:
  return c.Z.Messages.GUILD_AUTOMOD_USER_PROFILE_FILTER_NAME;
default:
  return c.Z.Messages.GUILD_AUTOMOD_UNKNOWN;
  }
}