"use strict";
n.r(t), n("724458");
var r, i = n("442837"),
  s = n("570140"),
  l = n("673750"),
  u = n("786761"),
  o = n("592125"),
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
let E = {},
  g = 0,
  h = {},
  I = {},
  p = (e, t) => {
    let n = (0, l.getFailedMessageId)(e),
      r = {
        id: n,
        isBlockedEdit: (0, l.isMessageDataEdit)(e),
        messageData: e,
        errorMessage: (0, c.getAutomodErrorMessage)(e, t)
      };
    E[n] = r, g++
  },
  T = e => E[e],
  C = e => {
    null != E[e] && delete E[e], g++
  };

function m(e) {
  let {
    messageData: t,
    errorResponseBody: n
  } = e;
  return p(t, n), !0
}

function R(e) {
  var t;
  let {
    channelId: n,
    messages: r
  } = e, i = null === (t = o.default.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId();
  if (null == i) return !1;
  let s = I[i],
    l = r.reduce((e, t) => {
      var n;
      return t.type === S.MessageTypes.AUTO_MODERATION_ACTION && (null === (n = t.embeds) || void 0 === n ? void 0 : n.some(e => {
        let {
          type: t
        } = e;
        return t === S.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
      })) ? null == e || -1 === d.default.compare(e, t.id) ? t.id : void 0 : e
    }, s);
  return null != l && I[i] !== l && (I[i] = l, !0)
}
class N extends(r = i.default.PersistedStore) {
  initialize(e) {
    this.waitFor(a.default), null != e && (E = e.automodFailedMessages, h = e.mentionRaidDetectionByGuild)
  }
  getState() {
    return {
      automodFailedMessages: E,
      mentionRaidDetectionByGuild: h,
      lastIncidentAlertMessage: I
    }
  }
  getMessage(e) {
    var t;
    return null == e ? null : null !== (t = T(e)) && void 0 !== t ? t : null
  }
  getMessagesVersion() {
    return g
  }
  getMentionRaidDetected(e) {
    var t;
    return null !== (t = h[e]) && void 0 !== t ? t : null
  }
  getLastIncidentAlertMessage(e) {
    var t;
    return null !== (t = I[e]) && void 0 !== t ? t : null
  }
}
_(N, "displayName", "GuildAutomodMessageStore"), _(N, "persistKey", "GuildAutomodMessages"), t.default = new N(s.default, {
  CONNECTION_OPEN: function(e) {
    return E = {}, g++, !0
  },
  LOAD_MESSAGES_SUCCESS: R,
  LOCAL_MESSAGES_LOADED: R,
  MESSAGE_CREATE: function(e) {
    let {
      guildId: t,
      message: n
    } = e;
    if (null == t || n.type !== S.MessageTypes.AUTO_MODERATION_ACTION) return !1;
    let r = (0, u.createMessageRecord)(n);
    return !!(0, f.isAutomodMessageRecord)(r) && !!(0, f.isAutomodNotification)(r) && (I[t] = r.id, !0)
  },
  MESSAGE_SEND_FAILED_AUTOMOD: m,
  MESSAGE_EDIT_FAILED_AUTOMOD: m,
  REMOVE_AUTOMOD_MESSAGE_NOTICE: function(e) {
    let {
      messageId: t
    } = e;
    return C(t), !0
  },
  MESSAGE_END_EDIT: function(e) {
    let {
      response: t
    } = e;
    if ((null == t ? void 0 : t.body) == null || t.body.code === S.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) return !1;
    let n = t.body.id;
    if (null == n) return !1;
    C(n)
  },
  AUTO_MODERATION_MENTION_RAID_DETECTION: function(e) {
    let {
      guildId: t,
      decisionId: n,
      suspiciousMentionActivityUntil: r
    } = e;
    return h[t] = {
      guildId: t,
      decisionId: n,
      suspiciousMentionActivityUntil: r
    }, !0
  },
  AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function(e) {
    let {
      guildId: t
    } = e;
    return delete h[t], !0
  }
})