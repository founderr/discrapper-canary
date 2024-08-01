t(724458);
var r, i = t(442837),
  o = t(570140),
  l = t(673750),
  u = t(786761),
  a = t(592125),
  s = t(375954),
  c = t(709054),
  d = t(539573),
  _ = t(825829),
  E = t(981631);

function f(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[n] = t, e;
}
let I = {},
  T = 0,
  S = {},
  A = {},
  N = (e, n) => {
let t = (0, l.hc)(e),
  r = {
    id: t,
    isBlockedEdit: (0, l.Bz)(e),
    messageData: e,
    errorMessage: (0, d.uF)(e, n)
  };
I[t] = r, T++;
  },
  g = e => I[e],
  p = e => {
null != I[e] && delete I[e], T++;
  };

function O(e) {
  let {
messageData: n,
errorResponseBody: t
  } = e;
  return N(n, t), !0;
}

function C(e) {
  var n;
  let {
channelId: t,
messages: r
  } = e, i = null === (n = a.Z.getChannel(t)) || void 0 === n ? void 0 : n.getGuildId();
  if (null == i)
return !1;
  let o = A[i],
l = r.reduce((e, n) => {
  var t;
  return n.type === E.uaV.AUTO_MODERATION_ACTION && (null === (t = n.embeds) || void 0 === t ? void 0 : t.some(e => {
    let {
      type: n
    } = e;
    return n === E.hBH.AUTO_MODERATION_NOTIFICATION;
  })) ? null == e || -1 === c.default.compare(e, n.id) ? n.id : void 0 : e;
}, o);
  return null != l && A[i] !== l && (A[i] = l, !0);
}
class M extends(r = i.ZP.PersistedStore) {
  initialize(e) {
this.waitFor(s.Z), null != e && (I = e.automodFailedMessages, S = e.mentionRaidDetectionByGuild);
  }
  getState() {
return {
  automodFailedMessages: I,
  mentionRaidDetectionByGuild: S,
  lastIncidentAlertMessage: A
};
  }
  getMessage(e) {
var n;
return null == e ? null : null !== (n = g(e)) && void 0 !== n ? n : null;
  }
  getMessagesVersion() {
return T;
  }
  getMentionRaidDetected(e) {
var n;
return null !== (n = S[e]) && void 0 !== n ? n : null;
  }
  getLastIncidentAlertMessage(e) {
var n;
return null !== (n = A[e]) && void 0 !== n ? n : null;
  }
}
f(M, 'displayName', 'GuildAutomodMessageStore'), f(M, 'persistKey', 'GuildAutomodMessages'), n.Z = new M(o.Z, {
  CONNECTION_OPEN: function(e) {
return I = {}, T++, !0;
  },
  LOAD_MESSAGES_SUCCESS: C,
  LOCAL_MESSAGES_LOADED: C,
  MESSAGE_CREATE: function(e) {
let {
  guildId: n,
  message: t
} = e;
if (null == n || t.type !== E.uaV.AUTO_MODERATION_ACTION)
  return !1;
let r = (0, u.e5)(t);
return !!(0, _.nY)(r) && !!(0, _.OP)(r) && (A[n] = r.id, !0);
  },
  MESSAGE_SEND_FAILED_AUTOMOD: O,
  MESSAGE_EDIT_FAILED_AUTOMOD: O,
  REMOVE_AUTOMOD_MESSAGE_NOTICE: function(e) {
let {
  messageId: n
} = e;
return p(n), !0;
  },
  MESSAGE_END_EDIT: function(e) {
let {
  response: n
} = e;
if ((null == n ? void 0 : n.body) == null || n.body.code === E.evJ.AUTOMOD_MESSAGE_BLOCKED)
  return !1;
let t = n.body.id;
if (null == t)
  return !1;
p(t);
  },
  AUTO_MODERATION_MENTION_RAID_DETECTION: function(e) {
let {
  guildId: n,
  decisionId: t,
  suspiciousMentionActivityUntil: r
} = e;
return S[n] = {
  guildId: n,
  decisionId: t,
  suspiciousMentionActivityUntil: r
}, !0;
  },
  AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function(e) {
let {
  guildId: n
} = e;
return delete S[n], !0;
  }
});