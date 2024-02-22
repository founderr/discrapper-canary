"use strict";
let l;
n.r(t), n.d(t, {
  default: function() {
    return B
  }
}), n("222007");
var a = n("803182"),
  i = n("811022"),
  u = n("95410"),
  d = n("913144"),
  r = n("404118"),
  s = n("819689"),
  o = n("115718"),
  f = n("689988"),
  c = n("408062"),
  E = n("619443"),
  C = n("582713"),
  g = n("233069"),
  p = n("982108"),
  _ = n("42203"),
  h = n("305961"),
  N = n("660478"),
  A = n("18494"),
  m = n("162771"),
  I = n("718517"),
  T = n("519841"),
  S = n("787336"),
  v = n("49111"),
  L = n("724210"),
  M = n("782340");
let R = new i.default("MessageManager");

function b(e) {
  let {
    guildId: t,
    channelId: n,
    messageId: a,
    forceFetch: i,
    isPreload: d,
    jumpType: r,
    skipLocalFetch: f,
    logFailures: C
  } = e;
  if (null == n) {
    C && R.log("Skipping fetch because channelId is null");
    return
  }
  if ((0, L.isStaticChannelRoute)(n)) {
    C && R.log("Skipping fetch because channelId is a static route");
    return
  }
  let g = _.default.getChannel(n);
  if ((null == g ? void 0 : g.type) === v.ChannelTypes.GUILD_STORE || (null == g ? void 0 : g.type) != null && v.ChannelTypesSets.GUILD_THREADS_ONLY.has(g.type)) {
    C && R.log("Skipping fetch because channel is a forum/store");
    return
  }
  let p = c.default.getOrCreate(n);
  T.AttachmentLinkRefreshExperiment.getCurrentConfig({
    location: "fetch_messages"
  }).enabled && p.some(S.messageHasExpiredAttachmentUrl) && (R.log("Found expired attachment link, clearing messages"), c.default.clear(n), p = c.default.getOrCreate(n)), null != p.jumpTargetId && null == a && (p = p.mutate({
    jumpTargetId: null,
    jumped: !1,
    jumpType: o.JumpTypes.ANIMATED
  }), c.default.commit(p)), null != p.focusTargetId && null == a && (p = p.mutate({
    focusTargetId: null
  }), c.default.commit(p));
  let A = i;
  if (!d || E.default.isConnected() || p.loadingMore ? p.loadingMore || p.ready && !p.cached ? null != a ? A = !0 : C && R.log("Skipping fetch because no other conditions matched") : null == t || null != h.default.getGuild(t) ? A = !0 : C && R.log("Skipping fetch we are connected and have loaded messages") : A = !0, A) {
    if (c.default.commit(p.mutate({
        loadingMore: !0
      })), null != a) s.default.jumpToMessage({
      channelId: n,
      messageId: a,
      flash: !0,
      isPreload: d,
      skipLocalFetch: f,
      jumpType: r
    });
    else if ((null == g ? void 0 : g.isThread()) && function(e) {
        if (N.default.hasOpenedThread(e)) return !1;
        if (null == l) {
          var t;
          l = null !== (t = u.default.get(O, {})) && void 0 !== t ? t : {}
        }
        if (e in l) return !1;
        l[e] = Date.now();
        let n = Date.now() - D;
        for (let e in l) l[e] < n && delete l[e];
        return u.default.set(O, l), !0
      }(n)) R.log("Jumping to start of thread ".concat(g.id)), s.default.fetchMessages({
      channelId: n,
      limit: v.MAX_MESSAGES_PER_CHANNEL,
      jump: {
        messageId: n,
        flash: !1
      },
      isPreload: d,
      skipLocalFetch: f
    });
    else if ((null == g ? void 0 : g.isThread()) && N.default.hasTrackedUnread(g.id) && !p.ready) {
      let e = N.default.getTrackedAckMessageId(g.id);
      R.log("Jumping to most recent message in thread ".concat(g.id, " - ").concat(e)), s.default.fetchMessages({
        channelId: n,
        limit: v.MAX_MESSAGES_PER_CHANNEL,
        jump: {
          messageId: e,
          flash: !1,
          offset: 1
        },
        isPreload: d,
        skipLocalFetch: f
      })
    } else s.default.fetchMessages({
      channelId: n,
      limit: v.MAX_MESSAGES_PER_CHANNEL,
      isPreload: d,
      skipLocalFetch: f,
      jump: {
        jumpType: o.JumpTypes.ANIMATED
      }
    })
  }
}
let D = 90 * I.default.Millis.DAY,
  O = "viewedThreadIds";

function P() {
  let e = A.default.getChannelId();
  if (null != e) {
    let n = _.default.getChannel(e);
    if (null != n) {
      var t;
      let e = (0, a.matchPath)(location.pathname, {
        path: v.Routes.CHANNEL(":guild", ":channel", ":message"),
        exact: !0
      });
      b({
        guildId: n.getGuildId(),
        channelId: n.id,
        messageId: null == e ? void 0 : null === (t = e.params) || void 0 === t ? void 0 : t.message
      }), k(n.getGuildId(), n.id)
    }
  }
}

function y() {
  let {
    isPreload: e,
    skipLocalFetch: t,
    logFailures: n
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, l = A.default.getChannelId();
  if (null != l) {
    let a = _.default.getChannel(l);
    null != a ? ((0, g.isTextChannel)(a.type) ? b({
      guildId: a.getGuildId(),
      channelId: a.id,
      isPreload: e,
      skipLocalFetch: t,
      logFailures: n
    }) : n && R.log("Skipping fetch because the selected channel is not a text channel"), k(a.getGuildId(), a.id)) : n && R.log("Skipping fetch because channel is null")
  } else n && R.log("Skipping fetch because there is no selected channel")
}

function G(e) {
  let {
    guildId: t,
    channelId: n,
    messageId: l,
    jumpType: a
  } = e;
  b({
    guildId: t,
    channelId: n,
    messageId: l,
    jumpType: a
  }), k(t, n)
}

function H(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  b({
    guildId: t,
    channelId: n
  })
}

function k(e, t) {
  let n = p.default.getCurrentSidebarChannelId(t);
  if (null == n) return;
  let l = p.default.getCurrentSidebarMessageId(t);
  b({
    guildId: e,
    channelId: n,
    messageId: l
  })
}

function U() {
  let e = A.default.getChannelId(),
    t = m.default.getGuildId();
  if (null == t || null == e) return;
  let n = p.default.getSidebarState(e);
  (null == n ? void 0 : n.type) !== C.SidebarType.VIEW_CHANNEL && k(t, e)
}

function w(e) {
  let {
    guildId: t,
    channelId: n,
    context: l
  } = e;
  l === v.CURRENT_APP_CONTEXT && (b({
    guildId: t,
    channelId: n
  }), k(t, n))
}

function V(e) {
  let {
    channel: t,
    messageId: n
  } = e, l = t.guild_id;
  null != l && A.default.getChannelId(l) === t.id && b({
    guildId: l,
    channelId: t.id,
    messageId: n
  })
}

function W(e) {
  let {
    channelId: t
  } = e;
  s.default.fetchMessages({
    channelId: t,
    limit: v.MAX_MESSAGES_PER_CHANNEL
  })
}

function x(e) {
  let {
    response: t
  } = e;
  if (null == t || null == t.body) return null;
  if (t.body.code === v.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
    let e = t.body.retry_after;
    null != e && r.default.show({
      title: M.default.Messages.RATE_LIMITED,
      body: M.default.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({
        retryAfterMinutes: Math.ceil(e / 60)
      })
    })
  }
}
let F = {};

function j(e) {
  var t;
  let {
    channelId: n,
    jump: l,
    isStale: a,
    isPreview: i = !1
  } = e;
  if (i) return;
  let u = null !== (t = F[n]) && void 0 !== t ? t : 0;
  if (Date.now() - u < 10 * I.default.Millis.SECOND) return;
  F[n] = Date.now();
  let d = A.default.getChannelId(),
    r = p.default.getCurrentSidebarChannelId(d),
    o = n === d || n === r;
  a && E.default.isConnected() && o && s.default.fetchMessages({
    channelId: n,
    limit: v.MAX_MESSAGES_PER_CHANNEL,
    jump: l
  })
}

function X(e) {
  let {
    channelId: t,
    messageRecord: n
  } = e;
  null != n && d.default.dispatch({
    type: "MESSAGE_SEND_FAILED",
    channelId: t,
    messageId: n.id
  })
}

function Y(e) {
  let {
    state: t
  } = e;
  if ("active" !== t) return !1;
  let n = A.default.getChannelId();
  if (null == n) return !1;
  s.default.fetchNewLocalMessages(n, v.MAX_MESSAGES_PER_CHANNEL)
}
class Z extends f.default {
  _initialize() {
    d.default.subscribe("CONNECTION_OPEN", P)
  }
  _terminate() {
    d.default.unsubscribe("CONNECTION_OPEN", P)
  }
  constructor(...e) {
    super(...e), this.fetchMessages = b, this.loadSelectedChannelIfNecessary = y, this.stores = new Map().set(p.default, U), this.actions = {
      APP_STATE_UPDATE: Y,
      OVERLAY_INITIALIZE: P,
      CHANNEL_SELECT: G,
      VOICE_CHANNEL_SELECT: H,
      THREAD_CREATE: V,
      THREAD_LIST_SYNC: () => y(),
      CHANNEL_CREATE: V,
      CHANNEL_PRELOAD: w,
      THREAD_CREATE_LOCAL: W,
      GUILD_CREATE: () => y(),
      MESSAGE_END_EDIT: x,
      LOAD_MESSAGES_SUCCESS: j,
      UPLOAD_FAIL: X,
      CHANNEL_DELETE: () => y(),
      THREAD_DELETE: () => y()
    }
  }
}
var B = new Z