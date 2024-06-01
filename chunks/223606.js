"use strict";
n.r(t), n("724458");
var i, r = n("442837"),
  s = n("570140"),
  l = n("673750"),
  o = n("786761"),
  u = n("592125"),
  a = n("375954"),
  d = n("709054"),
  c = n("539573"),
  f = n("825829"),
  S = n("981631");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let p = {},
  E = 0,
  g = {},
  I = {},
  h = (e, t) => {
    let n = (0, l.getFailedMessageId)(e),
      i = {
        id: n,
        isBlockedEdit: (0, l.isMessageDataEdit)(e),
        messageData: e,
        errorMessage: (0, c.getAutomodErrorMessage)(e, t)
      };
    p[n] = i, E++
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
  return h(t, n), !0
}

function R(e) {
  var t;
  let {
    channelId: n,
    messages: i
  } = e, r = null === (t = u.default.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId();
  if (null == r) return !1;
  let s = I[r],
    l = i.reduce((e, t) => {
      var n;
      return t.type === S.MessageTypes.AUTO_MODERATION_ACTION && (null === (n = t.embeds) || void 0 === n ? void 0 : n.some(e => {
        let {
          type: t
        } = e;
        return t === S.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
      })) ? null == e || -1 === d.default.compare(e, t.id) ? t.id : void 0 : e
    }, s);
  return null != l && I[r] !== l && (I[r] = l, !0)
}
class N extends(i = r.default.PersistedStore) {
  initialize(e) {
    this.waitFor(a.default), null != e && (p = e.automodFailedMessages, g = e.mentionRaidDetectionByGuild)
  }
  getState() {
    return {
      automodFailedMessages: p,
      mentionRaidDetectionByGuild: g,
      lastIncidentAlertMessage: I
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
    return null !== (t = g[e]) && void 0 !== t ? t : null
  }
  getLastIncidentAlertMessage(e) {
    var t;
    return null !== (t = I[e]) && void 0 !== t ? t : null
  }
}
_(N, "displayName", "GuildAutomodMessageStore"), _(N, "persistKey", "GuildAutomodMessages"), t.default = new N(s.default, {
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
    let i = (0, o.createMessageRecord)(n);
    return !!(0, f.isAutomodMessageRecord)(i) && !!(0, f.isAutomodNotification)(i) && (I[t] = i.id, !0)
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
      suspiciousMentionActivityUntil: i
    } = e;
    return g[t] = {
      guildId: t,
      decisionId: n,
      suspiciousMentionActivityUntil: i
    }, !0
  },
  AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function(e) {
    let {
      guildId: t
    } = e;
    return delete g[t], !0
  }
})