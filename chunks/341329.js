"use strict";
let n;
l.r(t), l.d(t, {
  default: function() {
    return J
  }
}), l("222007");
var a = l("803182"),
  i = l("811022"),
  u = l("95410"),
  d = l("913144"),
  s = l("404118"),
  r = l("819689"),
  o = l("115718"),
  c = l("689988"),
  f = l("408062"),
  E = l("619443"),
  C = l("582713"),
  h = l("233069"),
  g = l("982108"),
  N = l("42203"),
  _ = l("305961"),
  A = l("660478"),
  m = l("18494"),
  I = l("162771"),
  T = l("718517"),
  S = l("519841"),
  p = l("787336"),
  L = l("49111"),
  M = l("724210"),
  R = l("782340");
let v = new i.default("MessageManager");

function O(e) {
  let {
    guildId: t,
    channelId: l,
    messageId: a,
    forceFetch: i,
    isPreload: d,
    jumpType: s,
    skipLocalFetch: c,
    logFailures: C
  } = e;
  if (null == l) {
    C && v.log("Skipping fetch because channelId is null");
    return
  }
  if ((0, M.isStaticChannelRoute)(l)) {
    C && v.log("Skipping fetch because channelId is a static route");
    return
  }
  let h = N.default.getChannel(l);
  if ((null == h ? void 0 : h.type) === L.ChannelTypes.GUILD_STORE || (null == h ? void 0 : h.type) != null && L.ChannelTypesSets.GUILD_THREADS_ONLY.has(h.type)) {
    C && v.log("Skipping fetch because channel is a forum/store");
    return
  }
  let g = f.default.getOrCreate(l);
  S.AttachmentLinkRefreshExperiment.getCurrentConfig({
    location: "fetch_messages"
  }).enabled && g.some(p.messageHasExpiredAttachmentUrl) && (v.log("Found expired attachment link, clearing messages"), f.default.clear(l), g = f.default.getOrCreate(l)), null != g.jumpTargetId && null == a && (g = g.mutate({
    jumpTargetId: null,
    jumped: !1,
    jumpType: o.JumpTypes.ANIMATED
  }), f.default.commit(g)), null != g.focusTargetId && null == a && (g = g.mutate({
    focusTargetId: null
  }), f.default.commit(g));
  let m = i;
  if (!d || E.default.isConnected() || g.loadingMore ? g.loadingMore || g.ready && !g.cached ? null != a ? m = !0 : C && v.log("Skipping fetch because no other conditions matched") : null == t || null != _.default.getGuild(t) ? m = !0 : C && v.log("Skipping fetch we are connected and have loaded messages") : m = !0, m) {
    if (f.default.commit(g.mutate({
        loadingMore: !0
      })), null != a) r.default.jumpToMessage({
      channelId: l,
      messageId: a,
      flash: !0,
      isPreload: d,
      skipLocalFetch: c,
      jumpType: s
    });
    else if ((null == h ? void 0 : h.isThread()) && function(e) {
        if (A.default.hasOpenedThread(e)) return !1;
        if (null == n) {
          var t;
          n = null !== (t = u.default.get(P, {})) && void 0 !== t ? t : {}
        }
        if (e in n) return !1;
        n[e] = Date.now();
        let l = Date.now() - D;
        for (let e in n) n[e] < l && delete n[e];
        return u.default.set(P, n), !0
      }(l)) v.log("Jumping to start of thread ".concat(h.id)), r.default.fetchMessages({
      channelId: l,
      limit: L.MAX_MESSAGES_PER_CHANNEL,
      jump: {
        messageId: l,
        flash: !1
      },
      isPreload: d,
      skipLocalFetch: c
    });
    else if ((null == h ? void 0 : h.isThread()) && A.default.hasTrackedUnread(h.id) && !g.ready) {
      let e = A.default.getTrackedAckMessageId(h.id);
      v.log("Jumping to most recent message in thread ".concat(h.id, " - ").concat(e)), r.default.fetchMessages({
        channelId: l,
        limit: L.MAX_MESSAGES_PER_CHANNEL,
        jump: {
          messageId: e,
          flash: !1,
          offset: 1
        },
        isPreload: d,
        skipLocalFetch: c
      })
    } else r.default.fetchMessages({
      channelId: l,
      limit: L.MAX_MESSAGES_PER_CHANNEL,
      isPreload: d,
      skipLocalFetch: c,
      jump: {
        jumpType: o.JumpTypes.ANIMATED
      }
    })
  }
}
let D = 90 * T.default.Millis.DAY,
  P = "viewedThreadIds";

function b() {
  let e = m.default.getChannelId();
  if (null != e) {
    let l = N.default.getChannel(e);
    if (null != l) {
      var t;
      let e = (0, a.matchPath)(location.pathname, {
        path: L.Routes.CHANNEL(":guild", ":channel", ":message"),
        exact: !0
      });
      O({
        guildId: l.getGuildId(),
        channelId: l.id,
        messageId: null == e ? void 0 : null === (t = e.params) || void 0 === t ? void 0 : t.message
      }), k(l.getGuildId(), l.id)
    }
  }
}

function y() {
  let {
    isPreload: e,
    skipLocalFetch: t,
    logFailures: l
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = m.default.getChannelId();
  if (null != n) {
    let a = N.default.getChannel(n);
    null != a ? ((0, h.isTextChannel)(a.type) ? O({
      guildId: a.getGuildId(),
      channelId: a.id,
      isPreload: e,
      skipLocalFetch: t,
      logFailures: l
    }) : l && v.log("Skipping fetch because the selected channel is not a text channel"), k(a.getGuildId(), a.id)) : l && v.log("Skipping fetch because channel is null")
  } else l && v.log("Skipping fetch because there is no selected channel")
}

function G(e) {
  let {
    guildId: t,
    channelId: l,
    messageId: n,
    jumpType: a
  } = e;
  O({
    guildId: t,
    channelId: l,
    messageId: n,
    jumpType: a
  }), k(t, l)
}

function H(e) {
  let {
    guildId: t,
    channelId: l
  } = e;
  O({
    guildId: t,
    channelId: l
  })
}

function k(e, t) {
  let l = g.default.getCurrentSidebarChannelId(t);
  if (null == l) return;
  let n = g.default.getCurrentSidebarMessageId(t);
  O({
    guildId: e,
    channelId: l,
    messageId: n
  })
}

function U() {
  let e = m.default.getChannelId(),
    t = I.default.getGuildId();
  if (null == t || null == e) return;
  let l = g.default.getSidebarState(e);
  (null == l ? void 0 : l.type) !== C.SidebarType.VIEW_CHANNEL && k(t, e)
}

function w(e) {
  let {
    guildId: t,
    channelId: l,
    context: n
  } = e;
  n === L.CURRENT_APP_CONTEXT && (O({
    guildId: t,
    channelId: l
  }), k(t, l))
}

function V(e) {
  let {
    channel: t,
    messageId: l
  } = e, n = t.guild_id;
  null != n && m.default.getChannelId(n) === t.id && O({
    guildId: n,
    channelId: t.id,
    messageId: l
  })
}

function j(e) {
  let {
    channelId: t
  } = e;
  r.default.fetchMessages({
    channelId: t,
    limit: L.MAX_MESSAGES_PER_CHANNEL
  })
}

function x(e) {
  let {
    response: t
  } = e;
  if (null == t || null == t.body) return null;
  if (t.body.code === L.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
    let e = t.body.retry_after;
    null != e && s.default.show({
      title: R.default.Messages.RATE_LIMITED,
      body: R.default.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({
        retryAfterMinutes: Math.ceil(e / 60)
      })
    })
  }
}
let F = {};

function W(e) {
  var t;
  let {
    channelId: l,
    jump: n,
    isStale: a,
    isPreview: i = !1
  } = e;
  if (i) return;
  let u = null !== (t = F[l]) && void 0 !== t ? t : 0;
  if (Date.now() - u < 10 * T.default.Millis.SECOND) return;
  F[l] = Date.now();
  let d = m.default.getChannelId(),
    s = g.default.getCurrentSidebarChannelId(d),
    o = l === d || l === s;
  a && E.default.isConnected() && o && r.default.fetchMessages({
    channelId: l,
    limit: L.MAX_MESSAGES_PER_CHANNEL,
    jump: n
  })
}

function X(e) {
  let {
    channelId: t,
    messageRecord: l
  } = e;
  null != l && d.default.dispatch({
    type: "MESSAGE_SEND_FAILED",
    channelId: t,
    messageId: l.id
  })
}

function Y(e) {
  let {
    state: t
  } = e;
  if ("active" !== t) return !1;
  let l = m.default.getChannelId();
  if (null == l) return !1;
  r.default.fetchNewLocalMessages(l, L.MAX_MESSAGES_PER_CHANNEL)
}
class Z extends c.default {
  _initialize() {
    d.default.subscribe("CONNECTION_OPEN", b)
  }
  _terminate() {
    d.default.unsubscribe("CONNECTION_OPEN", b)
  }
  constructor(...e) {
    super(...e), this.fetchMessages = O, this.loadSelectedChannelIfNecessary = y, this.stores = new Map().set(g.default, U), this.actions = {
      APP_STATE_UPDATE: Y,
      OVERLAY_INITIALIZE: b,
      CHANNEL_SELECT: G,
      VOICE_CHANNEL_SELECT: H,
      THREAD_CREATE: V,
      THREAD_LIST_SYNC: () => y(),
      CHANNEL_CREATE: V,
      CHANNEL_PRELOAD: w,
      THREAD_CREATE_LOCAL: j,
      GUILD_CREATE: () => y(),
      MESSAGE_END_EDIT: x,
      LOAD_MESSAGES_SUCCESS: W,
      UPLOAD_FAIL: X,
      CHANNEL_DELETE: () => y(),
      THREAD_DELETE: () => y()
    }
  }
}
var J = new Z