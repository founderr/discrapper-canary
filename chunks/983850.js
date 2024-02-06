"use strict";
n.r(t), n.d(t, {
  MESSAGE_SCAN_TIMEOUT: function() {
    return C
  },
  MAX_TIMEOUT_FOR_JITTER: function() {
    return A
  },
  default: function() {
    return X
  }
}), n("222007"), n("808653");
var i = n("345570"),
  s = n.n(i),
  r = n("452016"),
  a = n.n(r),
  o = n("913144"),
  l = n("689988"),
  u = n("692038"),
  d = n("256572"),
  c = n("271938"),
  f = n("982108"),
  _ = n("42203"),
  h = n("377253"),
  g = n("18494"),
  m = n("162771"),
  E = n("695681"),
  p = n("457971"),
  v = n("447435"),
  S = n("533222"),
  T = n("49111"),
  I = n("397336");
let C = 3e3,
  A = 800,
  y = {};

function N(e) {
  return "".concat(e.channel_id, ":").concat(e.id)
}

function R() {
  Object.values(y).forEach(e => {
    let {
      timeout: t
    } = e;
    clearTimeout(t)
  }), y = {}
}

function D(e, t) {
  if (null == e.id || null == e.channel_id) return;
  let n = N(e);
  if (null != y[n]) {
    let {
      timeout: i
    } = y[n];
    return function(e, t) {
      let n = N(e),
        {
          setAt: i
        } = y[n];
      if (t === v.TimeoutCancelSource.UPDATE) {
        var s, r;
        let t = null !== (s = e.attachments) && void 0 !== s ? s : [],
          n = null !== (r = e.embeds) && void 0 !== r ? r : [],
          i = t.filter(e => (0, v.isMediaObscured)({
            type: v.ObscuredMediaTypes.Attachment,
            media: e
          }, !0)),
          a = n.filter(e => (0, v.isMediaObscured)({
            type: v.ObscuredMediaTypes.Embed,
            media: e
          }, !0));
        (0, v.trackExplicitMediaScanComplete)({
          messageId: e.id,
          channelId: e.channel_id,
          numOfAttachments: t.length,
          numOfEmbeds: n.length,
          numOfExplicitAttachments: i.length,
          numOfExplicitEmbeds: a.length
        })
      }(0, v.trackScanTiming)(i, t)
    }(e, t), clearTimeout(i), delete y[n], !0
  }
  return !1
}
let O = (e, t) => {
  if (0 !== e.length) {
    if (t) {
      (0, E.sendMultiChannelMessagesForScanning)(e);
      return
    }(0, E.sendMessagesForScanning)(e[0].channel_id, e.map(e => e.id))
  }
};

function P(e, t) {
  let {
    forceBatchScan: n = !1,
    jitter: i = !1
  } = null != t ? t : {};
  e.forEach(e => {
    let t = N(e);
    null == y[t] && (y[t] = {
      setAt: Date.now(),
      timeout: setTimeout(() => {
        ! function(e) {
          if (D(e, v.TimeoutCancelSource.TIMEOUT)) {
            let t = h.default.getMessage(e.channel_id, e.id),
              {
                attachmentIds: n,
                embedIds: i
              } = w(t);
            (0, v.trackScanningTimedOut)({
              channelId: e.channel_id,
              messageId: e.id,
              attachmentIds: n,
              embedIds: i
            }), o.default.dispatch({
              type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT",
              messageId: e.id,
              channelId: e.channel_id
            })
          }
        }(e)
      }, C)
    })
  });
  let s = n || new Set(e.map(e => e.channel_id)).size > 1;
  i ? setTimeout(() => {
    let t = e.filter(e => null != y[N(e)]);
    O(t, s)
  }, Math.random() * A) : O(e, s)
}
let b = e => null == e.content_scan_version || e.content_scan_version < 1,
  L = e => {
    var t, n, i, s, r, a, o, l;
    let u = null != (l = e).content_scan_version ? l.content_scan_version : null != l.contentScanVersion ? l.contentScanVersion : null;
    return !((null === (t = e.video) || void 0 === t ? void 0 : t.width) === 0 && (null === (n = e.video) || void 0 === n ? void 0 : n.height) === 0 || (null === (i = e.thumbnail) || void 0 === i ? void 0 : i.width) === 0 && (null === (s = e.thumbnail) || void 0 === s ? void 0 : s.height) === 0 || (null === (r = e.image) || void 0 === r ? void 0 : r.width) === 0 && (null === (a = e.image) || void 0 === a ? void 0 : a.height) === 0 || "images" in e && (null === (o = e.images) || void 0 === o ? void 0 : o.some(e => 0 === e.width && 0 === e.height))) && (null == u || u < 1)
  };

function M(e) {
  let {
    attachmentIds: t,
    embedIds: n
  } = w(e);
  return t.length > 0 || n.length > 0
}

function U(e) {
  let t = e.reduce((e, t) => {
    var n, i, s, r, a, o, l, u;
    null == e[t.channel_id] && (e[t.channel_id] = {
      numOfAttachments: 0,
      numOfAttachmentsPendingScan: 0,
      numOfEmbeds: 0,
      numOfEmbedsPendingScan: 0
    });
    let d = e[t.channel_id];
    return d.numOfAttachments += null !== (a = null === (n = t.attachments) || void 0 === n ? void 0 : n.length) && void 0 !== a ? a : 0, d.numOfEmbeds += null !== (o = null === (i = t.embeds) || void 0 === i ? void 0 : i.length) && void 0 !== o ? o : 0, d.numOfAttachmentsPendingScan += null !== (l = null === (s = t.attachments) || void 0 === s ? void 0 : s.filter(b).length) && void 0 !== l ? l : 0, d.numOfEmbedsPendingScan += null !== (u = null == t ? void 0 : null === (r = t.embeds) || void 0 === r ? void 0 : r.filter(L).length) && void 0 !== u ? u : 0, {
      ...e,
      [t.channel_id]: d
    }
  }, {});
  return t
}

function k(e) {
  return null != e && (null != e.attachments && e.attachments.length > 0 || null != e.embeds && e.embeds.length > 0)
}

function w(e) {
  var t, n, i, s, r, a, o, l;
  let u = null !== (r = null == e ? void 0 : null === (t = e.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== r ? r : 0,
    d = null !== (a = null == e ? void 0 : null === (n = e.embeds) || void 0 === n ? void 0 : n.length) && void 0 !== a ? a : 0;
  if (0 === u && 0 === d) return {
    attachmentIds: [],
    embedIds: []
  };
  let c = null !== (o = null == e ? void 0 : null === (i = e.attachments) || void 0 === i ? void 0 : i.filter(b)) && void 0 !== o ? o : [],
    f = null !== (l = null == e ? void 0 : null === (s = e.embeds) || void 0 === s ? void 0 : s.filter(L)) && void 0 !== l ? l : [];
  return {
    attachmentIds: c.map(e => e.id).filter(Boolean),
    embedIds: f.map((e, t) => "embed_".concat(t)).filter(Boolean)
  }
}

function V(e, t) {
  let {
    messagesPendingScan: n,
    attributesByChannelId: i
  } = function(e) {
    let t = e.filter(e => k(e) && (0, v.shouldRedactExplicitContent)(e)),
      n = e.map(e => {
        if (null != e && "referenced_message" in e && null != e.referenced_message && k(e.referenced_message) && (0, v.shouldRedactExplicitContent)(e)) return e.referenced_message
      }).filter(function(e) {
        return null != e
      });
    n.length > 0 && (t = [...t, ...n]);
    let i = a(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
      s = i.filter(e => M(e));
    return {
      messagesPendingScan: s,
      attributesByChannelId: U(i)
    }
  }(e);
  return Object.entries(i).forEach(e => {
    let [t, n] = e;
    (0, v.trackExplicitMediaRedactableMessagedLoaded)({
      channelId: t,
      numOfAttachments: n.numOfAttachments,
      numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
      numOfEmbeds: n.numOfEmbeds,
      numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
    })
  }), !!(n.length > 0) && (P(n, t), !0)
}

function G(e) {
  var t, n, i, s;
  let {
    message: r
  } = e;
  if (!(0, p.isEligibleForExplicitMediaRedaction)() || null == r.channel_id || null == r.id || (null === (t = r.author) || void 0 === t ? void 0 : t.id) === c.default.getId() || null == r.embeds && null == r.attachments) return !1;
  if (!M(r)) {
    let e = null !== (s = null !== (i = h.default.getMessage(r.channel_id, r.id)) && void 0 !== i ? i : S.default.getMessage(r.id, r.channel_id)) && void 0 !== s ? s : null === (n = d.default.getMessage(r.channel_id, r.id)) || void 0 === n ? void 0 : n.message;
    null != e && !M((0, u.updateMessageRecord)(e, r)) && D(e, v.TimeoutCancelSource.UPDATE)
  }
  let a = g.default.getChannelId(),
    o = f.default.getCurrentSidebarChannelId(a),
    l = r.channel_id === a || r.channel_id === o;
  if (!l) return !1;
  let _ = h.default.getMessage(r.channel_id, r.id);
  return null != _ && V([_])
}

function F(e) {
  var t, n;
  let {
    channelId: i,
    message: s,
    optimistic: r,
    isPushNotification: a
  } = e;
  if (!(0, p.isEligibleForExplicitMediaRedaction)() || r || a || null == i || (null === (t = s.author) || void 0 === t ? void 0 : t.id) === c.default.getId()) return !1;
  let o = g.default.getChannelId(),
    l = f.default.getCurrentSidebarChannelId(o),
    u = i === o || i === l,
    d = _.default.getChannel(i);
  if (!u) return !1;
  let h = null === (n = null == d ? void 0 : d.isPrivate()) || void 0 === n || n,
    m = (null == d ? void 0 : d.memberCount) == null || (null == d ? void 0 : d.memberCount) > 100;
  return V([s], {
    jitter: h && m
  })
}

function x(e) {
  let {
    channelId: t,
    messages: n
  } = e;
  if (!(0, p.isEligibleForExplicitMediaRedaction)() || null == t || null == n) return !1;
  let i = g.default.getChannelId(),
    s = f.default.getCurrentSidebarChannelId(i),
    r = t === i || t === s;
  return !!r && V(n)
}

function B(e) {
  let {
    messages: t
  } = e;
  if (!(0, p.isEligibleForExplicitMediaRedaction)() || null == t) return !1;
  let n = s(t),
    i = a(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id);
  return V(i)
}

function H(e) {
  let {
    guildId: t,
    threads: n
  } = e;
  if (null == n || !(0, p.isEligibleForExplicitMediaRedaction)()) return !1;
  let i = m.default.getGuildId() === t;
  if (!i) return !1;
  let s = Object.keys(n).map(e => n[e].first_message);
  return V(s)
}

function Y(e) {
  let {
    guildId: t,
    firstMessages: n
  } = e;
  if (null == n || !(0, p.isEligibleForExplicitMediaRedaction)()) return !1;
  let i = m.default.getGuildId() === t;
  return !!i && V(n, {
    forceBatchScan: !0
  })
}

function j(e) {
  let {
    channelId: t
  } = e;
  if (null == t || !(0, p.isEligibleForExplicitMediaRedaction)()) return !1;
  let n = t === g.default.getChannelId();
  return !!n && z(t)
}

function W(e) {
  let {
    settings: t,
    local: n
  } = e;
  if (!(0, p.isEligibleForExplicitMediaRedaction)() || !n || t.type !== I.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
  let i = g.default.getChannelId();
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
  let t = h.default.getMessages(e);
  return 0 !== t.length && function(e) {
    let {
      messagesPendingScan: t,
      attributesByChannelId: n
    } = function(e) {
      let t = e.filter(e => k(e) && (0, v.shouldRedactExplicitContent)(e)),
        n = e.map(e => {
          if (T.MessageTypesWithLazyLoadedReferences.has(e.type) && null != e.messageReference) {
            let t = d.default.getMessageByReference(e.messageReference);
            if (t.state === d.ReferencedMessageState.LOADED && null != t.message && k(t.message) && (0, v.shouldRedactExplicitContent)(e)) return t.message
          }
        }).filter(function(e) {
          return null != e
        });
      n.length > 0 && (t = [...t, ...n]);
      let i = a(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
        s = i.filter(e => M(e));
      return {
        messagesPendingScan: s,
        attributesByChannelId: U(i)
      }
    }(e);
    return Object.entries(n).forEach(e => {
      let [t, n] = e;
      (0, v.trackExplicitMediaRedactableMessagedLoaded)({
        channelId: t,
        numOfAttachments: n.numOfAttachments,
        numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
        numOfEmbeds: n.numOfEmbeds,
        numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
      })
    }), !!(t.length > 0) && (P(t), !0)
  }(t)
}
class q extends l.default {
  constructor(...e) {
    super(...e), this.actions = {
      LOAD_MESSAGES_SUCCESS: x,
      LOAD_FORUM_POSTS: H,
      LOAD_THREADS_SUCCESS: Y,
      LOAD_ARCHIVED_THREADS_SUCCESS: Y,
      MESSAGE_CREATE: F,
      MESSAGE_UPDATE: G,
      LOGOUT: R,
      SEARCH_FINISH: B,
      CHANNEL_SELECT: j,
      LOAD_PINNED_MESSAGES_SUCCESS: B,
      USER_SETTINGS_PROTO_UPDATE: W,
      CHANNEL_RTC_UPDATE_CHAT_OPEN: K
    }
  }
}
var X = new q