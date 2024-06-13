"use strict";
n.r(t), n("47120");
var u, l, r, a, i = n("512722"),
  o = n.n(i),
  s = n("442837"),
  d = n("570140"),
  f = n("344185"),
  c = n("592125"),
  m = n("306680");
let g = {},
  S = new Set;
class h extends(u = s.default.Store) {
  initialize() {
    this.waitFor(f.default, c.default, m.default)
  }
  getCount(e) {
    return g[e]
  }
  getThreadIdsMissingCounts(e, t) {
    return o()(f.default.hasLoaded(e), "must wait for THREAD_LIST_SYNC before calling this"), t.filter(e => !(e in g) && !S.has(e))
  }
}
a = "ForumPostUnreadCountStore", (r = "displayName") in(l = h) ? Object.defineProperty(l, r, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[r] = a, t.default = new h(d.default, {
  CONNECTION_OPEN: function() {
    g = {}, S = new Set
  },
  THREAD_CREATE: function(e) {
    let {
      channel: t,
      isNewlyCreated: n
    } = e;
    if (!n || !f.default.hasLoaded(t.guild_id)) return !1;
    g[t.id] = 0
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      optimistic: n,
      isPushNotification: u
    } = e;
    if (n || u || !(t in g)) return !1;
    g[t]++
  },
  FORUM_UNREADS: function(e) {
    let {
      threads: t
    } = e;
    t.forEach(e => {
      null != e.count && (g[e.threadId] = e.count)
    })
  },
  MESSAGE_ACK: function(e) {
    let {
      channelId: t
    } = e;
    if (!(t in g)) {
      let e = c.default.getChannel(t),
        n = c.default.getChannel(null == e ? void 0 : e.parent_id);
      if (!(null == n ? void 0 : n.isForumLikeChannel())) return !1
    }
    g[t] = m.default.getUnreadCount(t)
  },
  REQUEST_FORUM_UNREADS: function(e) {
    let {
      threads: t
    } = e;
    t.forEach(e => {
      let {
        threadId: t
      } = e;
      return S.add(t)
    })
  }
})