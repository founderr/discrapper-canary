"use strict";
let a;
n.r(t), n.d(t, {
  default: function() {
    return J
  }
}), n("222007");
var i = n("803182"),
  l = n("811022"),
  d = n("95410"),
  u = n("913144"),
  s = n("404118"),
  r = n("819689"),
  o = n("115718"),
  c = n("689988"),
  f = n("408062"),
  g = n("619443"),
  E = n("582713"),
  p = n("233069"),
  _ = n("982108"),
  m = n("42203"),
  h = n("305961"),
  S = n("660478"),
  v = n("18494"),
  C = n("162771"),
  I = n("718517"),
  A = n("519841"),
  T = n("787336"),
  N = n("49111"),
  y = n("724210"),
  D = n("782340");
let M = new l.default("MessageManager");

function R(e) {
  let {
    guildId: t,
    channelId: n,
    messageId: i,
    forceFetch: l,
    isPreload: u,
    jumpType: s,
    skipLocalFetch: c,
    logFailures: E
  } = e;
  if (null == n) {
    E && M.log("Skipping fetch because channelId is null");
    return
  }
  if ((0, y.isStaticChannelRoute)(n)) {
    E && M.log("Skipping fetch because channelId is a static route");
    return
  }
  let p = m.default.getChannel(n);
  if ((null == p ? void 0 : p.type) === N.ChannelTypes.GUILD_STORE || (null == p ? void 0 : p.type) != null && N.ChannelTypesSets.GUILD_THREADS_ONLY.has(p.type)) {
    E && M.log("Skipping fetch because channel is a forum/store");
    return
  }
  let _ = f.default.getOrCreate(n);
  A.AttachmentLinkRefreshExperiment.getCurrentConfig({
    location: "fetch_messages"
  }).enabled && _.some(T.messageHasExpiredAttachmentUrl) && (M.log("Found expired attachment link, clearing messages"), f.default.clear(n), _ = f.default.getOrCreate(n)), null != _.jumpTargetId && null == i && (_ = _.mutate({
    jumpTargetId: null,
    jumped: !1,
    jumpType: o.JumpTypes.ANIMATED
  }), f.default.commit(_)), null != _.focusTargetId && null == i && (_ = _.mutate({
    focusTargetId: null
  }), f.default.commit(_));
  let v = l;
  if (!u || g.default.isConnected() || _.loadingMore ? _.loadingMore || _.ready && !_.cached ? null != i ? v = !0 : E && M.log("Skipping fetch because no other conditions matched") : null == t || null != h.default.getGuild(t) ? v = !0 : E && M.log("Skipping fetch we are connected and have loaded messages") : v = !0, v) {
    if (f.default.commit(_.mutate({
        loadingMore: !0
      })), null != i) r.default.jumpToMessage({
      channelId: n,
      messageId: i,
      flash: !0,
      isPreload: u,
      skipLocalFetch: c,
      jumpType: s
    });
    else if ((null == p ? void 0 : p.isThread()) && function(e) {
        if (S.default.hasOpenedThread(e)) return !1;
        if (null == a) {
          var t;
          a = null !== (t = d.default.get(b, {})) && void 0 !== t ? t : {}
        }
        if (e in a) return !1;
        a[e] = Date.now();
        let n = Date.now() - L;
        for (let e in a) a[e] < n && delete a[e];
        return d.default.set(b, a), !0
      }(n)) M.log("Jumping to start of thread ".concat(p.id)), r.default.fetchMessages({
      channelId: n,
      limit: N.MAX_MESSAGES_PER_CHANNEL,
      jump: {
        messageId: n,
        flash: !1
      },
      isPreload: u,
      skipLocalFetch: c
    });
    else if ((null == p ? void 0 : p.isThread()) && S.default.hasTrackedUnread(p.id) && !_.ready) {
      let e = S.default.getTrackedAckMessageId(p.id);
      M.log("Jumping to most recent message in thread ".concat(p.id, " - ").concat(e)), r.default.fetchMessages({
        channelId: n,
        limit: N.MAX_MESSAGES_PER_CHANNEL,
        jump: {
          messageId: e,
          flash: !1,
          offset: 1
        },
        isPreload: u,
        skipLocalFetch: c
      })
    } else r.default.fetchMessages({
      channelId: n,
      limit: N.MAX_MESSAGES_PER_CHANNEL,
      isPreload: u,
      skipLocalFetch: c,
      jump: {
        jumpType: o.JumpTypes.ANIMATED
      }
    })
  }
}
let L = 90 * I.default.Millis.DAY,
  b = "viewedThreadIds";

function O() {
  let e = v.default.getChannelId();
  if (null != e) {
    let n = m.default.getChannel(e);
    if (null != n) {
      var t;
      let e = (0, i.matchPath)(location.pathname, {
        path: N.Routes.CHANNEL(":guild", ":channel", ":message"),
        exact: !0
      });
      R({
        guildId: n.getGuildId(),
        channelId: n.id,
        messageId: null == e ? void 0 : null === (t = e.params) || void 0 === t ? void 0 : t.message
      }), G(n.getGuildId(), n.id)
    }
  }
}

function P() {
  let {
    isPreload: e,
    skipLocalFetch: t,
    logFailures: n
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = v.default.getChannelId();
  if (null != a) {
    let i = m.default.getChannel(a);
    null != i ? ((0, p.isTextChannel)(i.type) ? R({
      guildId: i.getGuildId(),
      channelId: i.id,
      isPreload: e,
      skipLocalFetch: t,
      logFailures: n
    }) : n && M.log("Skipping fetch because the selected channel is not a text channel"), G(i.getGuildId(), i.id)) : n && M.log("Skipping fetch because channel is null")
  } else n && M.log("Skipping fetch because there is no selected channel")
}

function w(e) {
  let {
    guildId: t,
    channelId: n,
    messageId: a,
    jumpType: i
  } = e;
  R({
    guildId: t,
    channelId: n,
    messageId: a,
    jumpType: i
  }), G(t, n)
}

function U(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  R({
    guildId: t,
    channelId: n
  })
}

function G(e, t) {
  let n = _.default.getCurrentSidebarChannelId(t);
  if (null == n) return;
  let a = _.default.getCurrentSidebarMessageId(t);
  R({
    guildId: e,
    channelId: n,
    messageId: a
  })
}

function F() {
  let e = v.default.getChannelId(),
    t = C.default.getGuildId();
  if (null == t || null == e) return;
  let n = _.default.getSidebarState(e);
  (null == n ? void 0 : n.type) !== E.SidebarType.VIEW_CHANNEL && G(t, e)
}

function V(e) {
  let {
    guildId: t,
    channelId: n,
    context: a
  } = e;
  a === N.CURRENT_APP_CONTEXT && (R({
    guildId: t,
    channelId: n
  }), G(t, n))
}

function k(e) {
  let {
    channel: t,
    messageId: n
  } = e, a = t.guild_id;
  null != a && v.default.getChannelId(a) === t.id && R({
    guildId: a,
    channelId: t.id,
    messageId: n
  })
}

function x(e) {
  let {
    channelId: t
  } = e;
  r.default.fetchMessages({
    channelId: t,
    limit: N.MAX_MESSAGES_PER_CHANNEL
  })
}

function H(e) {
  let {
    response: t
  } = e;
  if (null == t || null == t.body) return null;
  if (t.body.code === N.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
    let e = t.body.retry_after;
    null != e && s.default.show({
      title: D.default.Messages.RATE_LIMITED,
      body: D.default.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({
        retryAfterMinutes: Math.ceil(e / 60)
      })
    })
  }
}
let W = {};

function q(e) {
  var t;
  let {
    channelId: n,
    jump: a,
    isStale: i,
    isPreview: l = !1
  } = e;
  if (l) return;
  let d = null !== (t = W[n]) && void 0 !== t ? t : 0;
  if (Date.now() - d < 10 * I.default.Millis.SECOND) return;
  W[n] = Date.now();
  let u = v.default.getChannelId(),
    s = _.default.getCurrentSidebarChannelId(u),
    o = n === u || n === s;
  i && g.default.isConnected() && o && r.default.fetchMessages({
    channelId: n,
    limit: N.MAX_MESSAGES_PER_CHANNEL,
    jump: a
  })
}

function B(e) {
  let {
    channelId: t,
    messageRecord: n
  } = e;
  null != n && u.default.dispatch({
    type: "MESSAGE_SEND_FAILED",
    channelId: t,
    messageId: n.id
  })
}

function j(e) {
  let {
    state: t
  } = e;
  if ("active" !== t) return !1;
  let n = v.default.getChannelId();
  if (null == n) return !1;
  r.default.fetchNewLocalMessages(n, N.MAX_MESSAGES_PER_CHANNEL)
}
class K extends c.default {
  _initialize() {
    u.default.subscribe("CONNECTION_OPEN", O)
  }
  _terminate() {
    u.default.unsubscribe("CONNECTION_OPEN", O)
  }
  constructor(...e) {
    super(...e), this.fetchMessages = R, this.loadSelectedChannelIfNecessary = P, this.stores = new Map().set(_.default, F), this.actions = {
      APP_STATE_UPDATE: j,
      OVERLAY_INITIALIZE: O,
      CHANNEL_SELECT: w,
      VOICE_CHANNEL_SELECT: U,
      THREAD_CREATE: k,
      THREAD_LIST_SYNC: () => P(),
      CHANNEL_CREATE: k,
      CHANNEL_PRELOAD: V,
      THREAD_CREATE_LOCAL: x,
      GUILD_CREATE: () => P(),
      MESSAGE_END_EDIT: H,
      LOAD_MESSAGES_SUCCESS: q,
      UPLOAD_FAIL: B,
      CHANNEL_DELETE: () => P(),
      THREAD_DELETE: () => P()
    }
  }
}
var J = new K