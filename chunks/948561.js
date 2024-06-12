"use strict";
n.r(t), n.d(t, {
  MAX_TIMEOUT_FOR_JITTER: function() {
    return D
  },
  MESSAGE_SCAN_TIMEOUT: function() {
    return v
  }
}), n("47120"), n("724458");
var i = n("952639"),
  r = n.n(i),
  s = n("605906"),
  a = n.n(s),
  o = n("286379"),
  l = n("570140"),
  u = n("147913"),
  d = n("786761"),
  _ = n("797614"),
  c = n("869765"),
  E = n("314897"),
  I = n("433355"),
  T = n("592125"),
  f = n("375954"),
  S = n("944486"),
  h = n("914010"),
  A = n("709054"),
  m = n("93735"),
  N = n("522664"),
  p = n("651530"),
  O = n("163268"),
  C = n("735020"),
  R = n("774863"),
  g = n("981631"),
  L = n("526761");
let v = 3e3,
  D = 800,
  M = {};

function y(e) {
  return "".concat(e.channel_id, ":").concat(e.id)
}

function P() {
  Object.values(M).forEach(e => {
    let {
      timeout: t
    } = e;
    clearTimeout(t)
  }), M = {}
}

function U(e, t) {
  if (null == e.id || null == e.channel_id) return !1;
  let n = y(e);
  if (null != M[n]) {
    let {
      timeout: i
    } = M[n];
    return clearTimeout(i),
      function(e, t) {
        let {
          setAt: n
        } = M[y(e)];
        if (t === O.TimeoutCancelSource.UPDATE) {
          var i, r;
          let t = null !== (i = e.attachments) && void 0 !== i ? i : [],
            n = null !== (r = e.embeds) && void 0 !== r ? r : [],
            s = t.filter(e => (0, O.isMediaObscured)({
              type: O.ObscuredMediaTypes.Attachment,
              media: e
            }, !0)),
            a = n.filter(e => (0, O.isMediaObscured)({
              type: O.ObscuredMediaTypes.Embed,
              media: e
            }, !0));
          (0, O.trackExplicitMediaScanComplete)({
            messageId: e.id,
            channelId: e.channel_id,
            numOfAttachments: t.length,
            numOfEmbeds: n.length,
            numOfExplicitAttachments: s.length,
            numOfExplicitEmbeds: a.length
          })
        }(0, O.trackScanTiming)(n, t)
      }(e, t), delete M[n], !0
  }
  return !1
}
let b = (e, t) => {
  if (0 !== e.length) {
    if (t) {
      (0, N.sendMultiChannelMessagesForScanning)(e);
      return
    }(0, N.sendMessagesForScanning)(e[0].channel_id, e.map(e => e.id))
  }
};

function G(e, t) {
  let {
    forceBatchScan: n = !1,
    jitter: i = !1
  } = null != t ? t : {}, r = (null == t ? void 0 : t.isMessageUpdate) ? e.filter(m.hasUnscannedAttachmentsOrEmbedsForTimeout) : e;
  r.forEach(e => {
    let t = y(e);
    null == M[t] && (_.default.increment({
      name: o.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE
    }), M[t] = {
      setAt: Date.now(),
      timeout: setTimeout(() => {
        ! function(e) {
          if (U(e, O.TimeoutCancelSource.TIMEOUT)) {
            let t = f.default.getMessage(e.channel_id, e.id),
              {
                attachmentIds: n,
                embedIds: i
              } = (0, m.getUnscannedAttachmentsAndEmbedIdsForTimeout)(t);
            (0, O.trackScanningTimedOut)({
              channelId: e.channel_id,
              messageId: e.id,
              attachmentIds: n,
              embedIds: i
            }), l.default.dispatch({
              type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT",
              messageId: e.id,
              channelId: e.channel_id
            })
          }
        }(e)
      }, v)
    })
  });
  let s = n || new Set(r.map(e => e.channel_id)).size > 1;
  i ? setTimeout(() => {
    b(r.filter(e => null != M[y(e)]), s)
  }, Math.random() * D) : b(r, s)
}

function w(e) {
  let t = R.default.validContentScanVersion;
  return e.reduce((e, n) => {
    var i, r, s, a, o, l, u, d;
    null == e[n.channel_id] && (e[n.channel_id] = {
      numOfAttachments: 0,
      numOfAttachmentsPendingScan: 0,
      numOfEmbeds: 0,
      numOfEmbedsPendingScan: 0
    });
    let _ = e[n.channel_id];
    return _.numOfAttachments += null !== (o = null === (i = n.attachments) || void 0 === i ? void 0 : i.length) && void 0 !== o ? o : 0, _.numOfEmbeds += null !== (l = null === (r = n.embeds) || void 0 === r ? void 0 : r.length) && void 0 !== l ? l : 0, _.numOfAttachmentsPendingScan += null !== (u = null === (s = n.attachments) || void 0 === s ? void 0 : s.filter(e => (0, m.shouldScanAttachment)(e, t)).length) && void 0 !== u ? u : 0, _.numOfEmbedsPendingScan += null !== (d = null == n ? void 0 : null === (a = n.embeds) || void 0 === a ? void 0 : a.filter(e => (0, m.shouldScanEmbed)(e, t)).length) && void 0 !== d ? d : 0, {
      ...e,
      [n.channel_id]: _
    }
  }, {})
}

function k(e, t) {
  let {
    messagesPendingScan: n,
    attributesByChannelId: i
  } = function(e) {
    let t = e.filter(e => (0, m.hasAttachmentsOrEmbeds)(e) && (0, O.shouldRedactExplicitContent)(e)),
      n = e.map(e => {
        if (null != e && "referenced_message" in e && null != e.referenced_message && (0, m.hasAttachmentsOrEmbeds)(e.referenced_message) && (0, O.shouldRedactExplicitContent)(e.referenced_message)) return e.referenced_message
      }).filter(function(e) {
        return null != e
      });
    n.length > 0 && (t = [...t, ...n]);
    let i = a()(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id);
    return {
      messagesPendingScan: i.filter(e => (0, m.hasAttachmentsOrEmbedsRequiringScan)(e)),
      attributesByChannelId: w(i)
    }
  }(e);
  return A.default.entries(i).forEach(e => {
    let [t, n] = e;
    (0, O.trackExplicitMediaRedactableMessagedLoaded)({
      channelId: t,
      numOfAttachments: n.numOfAttachments,
      numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
      numOfEmbeds: n.numOfEmbeds,
      numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
    })
  }), !!(n.length > 0) && (G(n, t), !0)
}

function B(e) {
  var t, n, i, r, s, a;
  let {
    message: o
  } = e;
  if (!(0, p.isEligibleForExplicitMediaRedaction)() || null == o.channel_id || null == o.id || (null === (t = o.author) || void 0 === t ? void 0 : t.id) === E.default.getId() || null == o.embeds && null == o.attachments || (null === (n = o.embeds) || void 0 === n ? void 0 : n.length) === 0 && (null === (i = o.attachments) || void 0 === i ? void 0 : i.length) === 0) return !1;
  if (!(0, m.hasUnscannedAttachmentsOrEmbedsForTimeout)(o)) {
    let e = null !== (a = null !== (s = f.default.getMessage(o.channel_id, o.id)) && void 0 !== s ? s : C.default.getMessage(o.id, o.channel_id)) && void 0 !== a ? a : null === (r = c.default.getMessage(o.channel_id, o.id)) || void 0 === r ? void 0 : r.message;
    null != e && !(0, m.hasUnscannedAttachmentsOrEmbedsForTimeout)((0, d.updateMessageRecord)(e, o)) && U(e, O.TimeoutCancelSource.UPDATE)
  }
  let l = S.default.getChannelId(),
    u = I.default.getCurrentSidebarChannelId(l);
  if (!(o.channel_id === l || o.channel_id === u)) return !1;
  let _ = f.default.getMessage(o.channel_id, o.id);
  return null != _ && k([_], {
    isMessageUpdate: !0
  })
}

function x(e) {
  var t, n;
  let {
    channelId: i,
    message: r,
    optimistic: s,
    isPushNotification: a
  } = e;
  if (!(0, p.isEligibleForExplicitMediaRedaction)() || s || a || null == i || (null === (t = r.author) || void 0 === t ? void 0 : t.id) === E.default.getId()) return !1;
  let o = S.default.getChannelId(),
    l = I.default.getCurrentSidebarChannelId(o),
    u = i === o || i === l,
    d = T.default.getChannel(i);
  if (!u) return !1;
  let _ = null === (n = null == d ? void 0 : d.isPrivate()) || void 0 === n || n,
    c = (null == d ? void 0 : d.memberCount) == null || (null == d ? void 0 : d.memberCount) > 100;
  return k([r], {
    jitter: _ && c
  })
}

function V(e) {
  let {
    channelId: t,
    messages: n
  } = e;
  if (!(0, p.isEligibleForExplicitMediaRedaction)() || null == t || null == n) return !1;
  let i = S.default.getChannelId(),
    r = I.default.getCurrentSidebarChannelId(i);
  return (t === i || t === r) && k(n)
}

function F(e) {
  let {
    messages: t
  } = e;
  if (!(0, p.isEligibleForExplicitMediaRedaction)() || null == t) return !1;
  let n = r()(t);
  return k(a()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id))
}

function H(e) {
  let {
    guildId: t,
    threads: n
  } = e;
  return !!(null != n && (0, p.isEligibleForExplicitMediaRedaction)()) && h.default.getGuildId() === t && k(A.default.keys(n).map(e => n[e].first_message))
}

function Y(e) {
  let {
    guildId: t,
    firstMessages: n
  } = e;
  return !!(null != n && (0, p.isEligibleForExplicitMediaRedaction)()) && h.default.getGuildId() === t && k(n, {
    forceBatchScan: !0
  })
}

function j(e) {
  let {
    channelId: t
  } = e;
  return !!(null != t && (0, p.isEligibleForExplicitMediaRedaction)()) && t === S.default.getChannelId() && z(t)
}

function W(e) {
  let {
    settings: t,
    local: n
  } = e;
  if (!(0, p.isEligibleForExplicitMediaRedaction)() || !n || t.type !== L.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
  let i = S.default.getChannelId();
  return null != i && z(i)
}

function K(e) {
  let {
    channelId: t,
    chatOpen: n
  } = e;
  return !!(0, p.isEligibleForExplicitMediaRedaction)() && !!n && z(t)
}

function z(e) {
  let t = f.default.getMessages(e);
  return 0 !== t.length && function(e) {
    let {
      messagesPendingScan: t,
      attributesByChannelId: n
    } = function(e) {
      let t = e.filter(e => (0, m.hasAttachmentsOrEmbeds)(e) && (0, O.shouldRedactExplicitContent)(e)),
        n = e.map(e => {
          if (g.MessageTypesWithLazyLoadedReferences.has(e.type) && null != e.messageReference) {
            let t = c.default.getMessageByReference(e.messageReference);
            if (t.state === c.ReferencedMessageState.LOADED && null != t.message && (0, m.hasAttachmentsOrEmbeds)(t.message) && (0, O.shouldRedactExplicitContent)(t.message)) return t.message
          }
        }).filter(function(e) {
          return null != e
        });
      n.length > 0 && (t = [...t, ...n]);
      let i = a()(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id);
      return {
        messagesPendingScan: i.filter(e => (0, m.hasAttachmentsOrEmbedsRequiringScan)(e)),
        attributesByChannelId: w(i)
      }
    }(e);
    return A.default.entries(n).forEach(e => {
      let [t, n] = e;
      (0, O.trackExplicitMediaRedactableMessagedLoaded)({
        channelId: t,
        numOfAttachments: n.numOfAttachments,
        numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
        numOfEmbeds: n.numOfEmbeds,
        numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
      })
    }), !!(t.length > 0) && (G(t), !0)
  }(t)
}
class Z extends u.default {
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      LOAD_MESSAGES_SUCCESS: V,
      LOAD_FORUM_POSTS: H,
      LOAD_THREADS_SUCCESS: Y,
      LOAD_ARCHIVED_THREADS_SUCCESS: Y,
      MESSAGE_CREATE: x,
      MESSAGE_UPDATE: B,
      LOGOUT: P,
      SEARCH_FINISH: F,
      MOD_VIEW_SEARCH_FINISH: F,
      CHANNEL_SELECT: j,
      LOAD_PINNED_MESSAGES_SUCCESS: F,
      USER_SETTINGS_PROTO_UPDATE: W,
      CHANNEL_RTC_UPDATE_CHAT_OPEN: K
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.default = new Z