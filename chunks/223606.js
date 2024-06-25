t(724458);
var i, r = t(442837),
  l = t(570140),
  o = t(673750),
  u = t(786761),
  s = t(592125),
  a = t(375954),
  c = t(709054),
  d = t(539573),
  _ = t(825829),
  f = t(981631);

function E(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e
}
let I = {},
  g = 0,
  S = {},
  p = {},
  m = (e, n) => {
    let t = (0, o.hc)(e),
      i = {
        id: t,
        isBlockedEdit: (0, o.Bz)(e),
        messageData: e,
        errorMessage: (0, d.uF)(e, n)
      };
    I[t] = i, g++
  },
  C = e => I[e],
  T = e => {
    null != I[e] && delete I[e], g++
  };

function N(e) {
  let {
    messageData: n,
    errorResponseBody: t
  } = e;
  return m(n, t), !0
}

function A(e) {
  var n;
  let {
    channelId: t,
    messages: i
  } = e, r = null === (n = s.Z.getChannel(t)) || void 0 === n ? void 0 : n.getGuildId();
  if (null == r) return !1;
  let l = p[r],
    o = i.reduce((e, n) => {
      var t;
      return n.type === f.uaV.AUTO_MODERATION_ACTION && (null === (t = n.embeds) || void 0 === t ? void 0 : t.some(e => {
        let {
          type: n
        } = e;
        return n === f.hBH.AUTO_MODERATION_NOTIFICATION
      })) ? null == e || -1 === c.default.compare(e, n.id) ? n.id : void 0 : e
    }, l);
  return null != o && p[r] !== o && (p[r] = o, !0)
}
class v extends(i = r.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(a.Z), null != e && (I = e.automodFailedMessages, S = e.mentionRaidDetectionByGuild)
  }
  getState() {
    return {
      automodFailedMessages: I,
      mentionRaidDetectionByGuild: S,
      lastIncidentAlertMessage: p
    }
  }
  getMessage(e) {
    var n;
    return null == e ? null : null !== (n = C(e)) && void 0 !== n ? n : null
  }
  getMessagesVersion() {
    return g
  }
  getMentionRaidDetected(e) {
    var n;
    return null !== (n = S[e]) && void 0 !== n ? n : null
  }
  getLastIncidentAlertMessage(e) {
    var n;
    return null !== (n = p[e]) && void 0 !== n ? n : null
  }
}
E(v, "displayName", "GuildAutomodMessageStore"), E(v, "persistKey", "GuildAutomodMessages"), n.Z = new v(l.Z, {
  CONNECTION_OPEN: function(e) {
    return I = {}, g++, !0
  },
  LOAD_MESSAGES_SUCCESS: A,
  LOCAL_MESSAGES_LOADED: A,
  MESSAGE_CREATE: function(e) {
    let {
      guildId: n,
      message: t
    } = e;
    if (null == n || t.type !== f.uaV.AUTO_MODERATION_ACTION) return !1;
    let i = (0, u.e5)(t);
    return !!(0, _.nY)(i) && !!(0, _.OP)(i) && (p[n] = i.id, !0)
  },
  MESSAGE_SEND_FAILED_AUTOMOD: N,
  MESSAGE_EDIT_FAILED_AUTOMOD: N,
  REMOVE_AUTOMOD_MESSAGE_NOTICE: function(e) {
    let {
      messageId: n
    } = e;
    return T(n), !0
  },
  MESSAGE_END_EDIT: function(e) {
    let {
      response: n
    } = e;
    if ((null == n ? void 0 : n.body) == null || n.body.code === f.evJ.AUTOMOD_MESSAGE_BLOCKED) return !1;
    let t = n.body.id;
    if (null == t) return !1;
    T(t)
  },
  AUTO_MODERATION_MENTION_RAID_DETECTION: function(e) {
    let {
      guildId: n,
      decisionId: t,
      suspiciousMentionActivityUntil: i
    } = e;
    return S[n] = {
      guildId: n,
      decisionId: t,
      suspiciousMentionActivityUntil: i
    }, !0
  },
  AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function(e) {
    let {
      guildId: n
    } = e;
    return delete S[n], !0
  }
})