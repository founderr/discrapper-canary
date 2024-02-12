"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("808653");
var i = n("249654"),
  r = n("446674"),
  l = n("913144"),
  s = n("979911"),
  u = n("692038"),
  o = n("42203"),
  a = n("377253"),
  d = n("600798"),
  c = n("201131"),
  f = n("49111");
let S = {},
  E = 0,
  _ = {},
  h = {},
  g = (e, t) => {
    let n = (0, s.getFailedMessageId)(e),
      i = {
        id: n,
        isBlockedEdit: (0, s.isMessageDataEdit)(e),
        messageData: e,
        errorMessage: (0, d.getAutomodErrorMessage)(e, t)
      };
    S[n] = i, E++
  },
  p = e => S[e],
  C = e => {
    let t = S[e];
    null != t && delete S[e], E++
  };

function I(e) {
  let {
    messageData: t,
    errorResponseBody: n
  } = e;
  return g(t, n), !0
}

function m(e) {
  var t;
  let {
    channelId: n,
    messages: r
  } = e, l = null === (t = o.default.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId();
  if (null == l) return !1;
  let s = h[l],
    u = r.reduce((e, t) => {
      var n;
      let r = t.type === f.MessageTypes.AUTO_MODERATION_ACTION;
      if (!r) return e;
      let l = null === (n = t.embeds) || void 0 === n ? void 0 : n.some(e => {
        let {
          type: t
        } = e;
        return t === f.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
      });
      return l ? null == e || -1 === i.default.compare(e, t.id) ? t.id : void 0 : e
    }, s);
  return null != u && h[l] !== u && (h[l] = u, !0)
}
class T extends r.default.PersistedStore {
  initialize(e) {
    this.waitFor(a.default), null != e && (S = e.automodFailedMessages, _ = e.mentionRaidDetectionByGuild)
  }
  getState() {
    return {
      automodFailedMessages: S,
      mentionRaidDetectionByGuild: _,
      lastIncidentAlertMessage: h
    }
  }
  getMessage(e) {
    var t;
    return null == e ? null : null !== (t = p(e)) && void 0 !== t ? t : null
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
T.displayName = "GuildAutomodMessageStore", T.persistKey = "GuildAutomodMessages";
var v = new T(l.default, {
  CONNECTION_OPEN: function(e) {
    return S = {}, E++, !0
  },
  LOAD_MESSAGES_SUCCESS: m,
  LOCAL_MESSAGES_LOADED: m,
  MESSAGE_CREATE: function(e) {
    let {
      guildId: t,
      message: n
    } = e;
    if (null == t || n.type !== f.MessageTypes.AUTO_MODERATION_ACTION) return !1;
    let i = (0, u.createMessageRecord)(n);
    return !!(0, c.isAutomodMessageRecord)(i) && !!(0, c.isAutomodNotification)(i) && (h[t] = i.id, !0)
  },
  MESSAGE_SEND_FAILED_AUTOMOD: I,
  MESSAGE_EDIT_FAILED_AUTOMOD: I,
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
    if ((null == t ? void 0 : t.body) == null || t.body.code === f.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) return !1;
    let n = t.body.id;
    if (null == n) return !1;
    C(n)
  },
  AUTO_MODERATION_MENTION_RAID_DETECTION: function(e) {
    let {
      guildId: t,
      decisionId: n,
      suspiciousMentionActivityUntil: i
    } = e;
    return _[t] = {
      guildId: t,
      decisionId: n,
      suspiciousMentionActivityUntil: i
    }, !0
  },
  AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function(e) {
    let {
      guildId: t
    } = e;
    return delete _[t], !0
  }
})