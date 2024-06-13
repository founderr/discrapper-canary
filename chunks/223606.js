"use strict";
n.r(t), n("724458");
var r, i = n("442837"),
  l = n("570140"),
  s = n("673750"),
  o = n("786761"),
  u = n("592125"),
  a = n("375954"),
  c = n("709054"),
  d = n("539573"),
  f = n("825829"),
  S = n("981631");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let p = {},
  E = 0,
  _ = {},
  h = {},
  I = (e, t) => {
    let n = (0, s.getFailedMessageId)(e),
      r = {
        id: n,
        isBlockedEdit: (0, s.isMessageDataEdit)(e),
        messageData: e,
        errorMessage: (0, d.getAutomodErrorMessage)(e, t)
      };
    p[n] = r, E++
  },
  C = e => p[e],
  T = e => {
    null != p[e] && delete p[e], E++
  };

function m(e) {
  let {
    messageData: t,
    errorResponseBody: n
  } = e;
  return I(t, n), !0
}

function R(e) {
  var t;
  let {
    channelId: n,
    messages: r
  } = e, i = null === (t = u.default.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId();
  if (null == i) return !1;
  let l = h[i],
    s = r.reduce((e, t) => {
      var n;
      return t.type === S.MessageTypes.AUTO_MODERATION_ACTION && (null === (n = t.embeds) || void 0 === n ? void 0 : n.some(e => {
        let {
          type: t
        } = e;
        return t === S.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
      })) ? null == e || -1 === c.default.compare(e, t.id) ? t.id : void 0 : e
    }, l);
  return null != s && h[i] !== s && (h[i] = s, !0)
}
class N extends(r = i.default.PersistedStore) {
  initialize(e) {
    this.waitFor(a.default), null != e && (p = e.automodFailedMessages, _ = e.mentionRaidDetectionByGuild)
  }
  getState() {
    return {
      automodFailedMessages: p,
      mentionRaidDetectionByGuild: _,
      lastIncidentAlertMessage: h
    }
  }
  getMessage(e) {
    var t;
    return null == e ? null : null !== (t = C(e)) && void 0 !== t ? t : null
  }
  getMessagesVersion() {
    return E
  }
  getMentionRaidDetected(e) {
    var t;
    return null !== (t = _[e]) && void 0 !== t ? t : null
  }
  getLastIncidentAlertMessage(e) {
    var t;
    return null !== (t = h[e]) && void 0 !== t ? t : null
  }
}
g(N, "displayName", "GuildAutomodMessageStore"), g(N, "persistKey", "GuildAutomodMessages"), t.default = new N(l.default, {
  CONNECTION_OPEN: function(e) {
    return p = {}, E++, !0
  },
  LOAD_MESSAGES_SUCCESS: R,
  LOCAL_MESSAGES_LOADED: R,
  MESSAGE_CREATE: function(e) {
    let {
      guildId: t,
      message: n
    } = e;
    if (null == t || n.type !== S.MessageTypes.AUTO_MODERATION_ACTION) return !1;
    let r = (0, o.createMessageRecord)(n);
    return !!(0, f.isAutomodMessageRecord)(r) && !!(0, f.isAutomodNotification)(r) && (h[t] = r.id, !0)
  },
  MESSAGE_SEND_FAILED_AUTOMOD: m,
  MESSAGE_EDIT_FAILED_AUTOMOD: m,
  REMOVE_AUTOMOD_MESSAGE_NOTICE: function(e) {
    let {
      messageId: t
    } = e;
    return T(t), !0
  },
  MESSAGE_END_EDIT: function(e) {
    let {
      response: t
    } = e;
    if ((null == t ? void 0 : t.body) == null || t.body.code === S.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) return !1;
    let n = t.body.id;
    if (null == n) return !1;
    T(n)
  },
  AUTO_MODERATION_MENTION_RAID_DETECTION: function(e) {
    let {
      guildId: t,
      decisionId: n,
      suspiciousMentionActivityUntil: r
    } = e;
    return _[t] = {
      guildId: t,
      decisionId: n,
      suspiciousMentionActivityUntil: r
    }, !0
  },
  AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function(e) {
    let {
      guildId: t
    } = e;
    return delete _[t], !0
  }
})