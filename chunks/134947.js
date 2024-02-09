"use strict";
n.r(t), n.d(t, {
  useTrackThreadBrowserTab: function() {
    return S
  },
  useActiveThreads: function() {
    return g
  },
  useActiveGuildThreads: function() {
    return E
  },
  useArchivedThreads: function() {
    return M
  }
}), n("222007");
var a = n("884691"),
  r = n("917351"),
  l = n.n(r),
  i = n("446674"),
  s = n("404607"),
  u = n("42203"),
  o = n("957255"),
  d = n("660478"),
  c = n("449008"),
  f = n("299039"),
  h = n("689275"),
  C = n("821343"),
  p = n("755624"),
  v = n("263024"),
  m = n("487269"),
  I = n("843455");

function S() {
  a.useEffect(() => {
    (0, m.trackThreadBrowserTab)()
  }, [])
}

function g(e) {
  let t = function(e) {
      let t = (0, i.useStateFromStoresArray)([o.default, h.default, u.default], () => l(h.default.getThreadsForParent(e.guild_id, e.id)).values().map(e => {
        let {
          id: t
        } = e;
        return u.default.getChannel(t)
      }).filter(c.isNotNullish).filter(e => o.default.can(I.Permissions.VIEW_CHANNEL, e)).map(e => e.id).value(), [e.guild_id, e.id]);
      return a.useMemo(() => l(t).sort((e, t) => f.default.compare(d.default.lastMessageId(e), d.default.lastMessageId(t))).reverse().value(), [t])
    }(e),
    [n, r] = (0, i.useStateFromStores)([p.default], () => l.partition(t, e => p.default.hasJoined(e)), [t], i.statesWillNeverBeEqual);
  return {
    joinedThreadIds: n,
    unjoinedThreadIds: r
  }
}

function E(e) {
  let t = (0, i.useStateFromStoresArray)([o.default, h.default, u.default], () => l(h.default.getThreadsForGuild(e)).values().map(e => l.values(e)).flatten().map(e => {
    let {
      id: t
    } = e;
    return u.default.getChannel(t)
  }).filter(c.isNotNullish).filter(e => o.default.can(I.Permissions.VIEW_CHANNEL, e)).map(e => e.id).value(), [e]);
  return a.useMemo(() => l(t).sort((e, t) => f.default.compare(d.default.lastMessageId(e), d.default.lastMessageId(t))).reverse().value(), [t])
}

function M(e, t, n) {
  let {
    canLoadMore: r,
    loading: d,
    nextOffset: c,
    isInitialLoad: f
  } = (0, i.useStateFromStoresObject)([C.default], () => ({
    loading: C.default.isLoading(e.id, t, n),
    isInitialLoad: C.default.isInitialLoad,
    canLoadMore: C.default.canLoadMore,
    nextOffset: C.default.nextOffset
  })), h = a.useCallback(() => {
    o.default.can(I.Permissions.READ_MESSAGE_HISTORY, e) && v.default.loadArchivedThreads(e.guild_id, e.id, t, n, c)
  }, [e, t, n, c]);
  a.useEffect(() => {
    f && h()
  }, [e.id, t, n, f]), a.useEffect(() => {
    s.default.resort(e.id)
  }, [e.id]);
  let p = (0, i.useStateFromStoresArray)([C.default, u.default, o.default], () => l(C.default.getThreads(e.id, t, n)).filter(e => {
    let t = u.default.getChannel(e);
    return null != t && o.default.can(I.Permissions.VIEW_CHANNEL, t)
  }).value());
  return {
    threadIds: p,
    canLoadMore: r,
    loading: d || f,
    loadMore: h
  }
}