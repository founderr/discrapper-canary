"use strict";
n.r(t), n("724458");
var i, r = n("442837"),
  l = n("570140"),
  s = n("673750"),
  u = n("786761"),
  o = n("592125"),
  a = n("375954"),
  d = n("709054"),
  c = n("539573"),
  f = n("825829"),
  S = n("981631");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = {},
  g = 0,
  h = {},
  p = {},
  C = (e, t) => {
    let n = (0, s.getFailedMessageId)(e),
      i = {
        id: n,
        isBlockedEdit: (0, s.isMessageDataEdit)(e),
        messageData: e,
        errorMessage: (0, c.getAutomodErrorMessage)(e, t)
      };
    _[n] = i, g++
  },
  I = e => _[e],
  T = e => {
    null != _[e] && delete _[e], g++
  };

function m(e) {
  let {
    messageData: t,
    errorResponseBody: n
  } = e;
  return C(t, n), !0
}

function R(e) {
  var t;
  let {
    channelId: n,
    messages: i
  } = e, r = null === (t = o.default.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId();
  if (null == r) return !1;
  let l = p[r],
    s = i.reduce((e, t) => {
      var n;
      return t.type === S.MessageTypes.AUTO_MODERATION_ACTION && (null === (n = t.embeds) || void 0 === n ? void 0 : n.some(e => {
        let {
          type: t
        } = e;
        return t === S.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
      })) ? null == e || -1 === d.default.compare(e, t.id) ? t.id : void 0 : e
    }, l);
  return null != s && p[r] !== s && (p[r] = s, !0)
}
class N extends(i = r.default.PersistedStore) {
  initialize(e) {
    this.waitFor(a.default), null != e && (_ = e.automodFailedMessages, h = e.mentionRaidDetectionByGuild)
  }
  getState() {
    return {
      automodFailedMessages: _,
      mentionRaidDetectionByGuild: h,
      lastIncidentAlertMessage: p
    }
  }
  getMessage(e) {
    var t;
    return null == e ? null : null !== (t = I(e)) && void 0 !== t ? t : null
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
    return null !== (t = p[e]) && void 0 !== t ? t : null
  }
}
E(N, "displayName", "GuildAutomodMessageStore"), E(N, "persistKey", "GuildAutomodMessages"), t.default = new N(l.default, {
  CONNECTION_OPEN: function(e) {
    return _ = {}, g++, !0
  },
  LOAD_MESSAGES_SUCCESS: R,
  LOCAL_MESSAGES_LOADED: R,
  MESSAGE_CREATE: function(e) {
    let {
      guildId: t,
      message: n
    } = e;
    if (null == t || n.type !== S.MessageTypes.AUTO_MODERATION_ACTION) return !1;
    let i = (0, u.createMessageRecord)(n);
    return !!(0, f.isAutomodMessageRecord)(i) && !!(0, f.isAutomodNotification)(i) && (p[t] = i.id, !0)
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
    return h[t] = {
      guildId: t,
      decisionId: n,
      suspiciousMentionActivityUntil: i
    }, !0
  },
  AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function(e) {
    let {
      guildId: t
    } = e;
    return delete h[t], !0
  }
})