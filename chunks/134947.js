"use strict";
n.r(t), n.d(t, {
  useTrackThreadBrowserTab: function() {
    return g
  },
  useActiveThreads: function() {
    return E
  },
  useActiveGuildThreads: function() {
    return I
  },
  useArchivedThreads: function() {
    return A
  }
}), n("222007");
var a = n("884691"),
  l = n("917351"),
  r = n.n(l),
  s = n("446674"),
  i = n("404607"),
  u = n("42203"),
  o = n("957255"),
  d = n("660478"),
  c = n("449008"),
  f = n("299039"),
  C = n("689275"),
  h = n("821343"),
  p = n("755624"),
  v = n("263024"),
  m = n("487269"),
  S = n("843455");

function g() {
  a.useEffect(() => {
    (0, m.trackThreadBrowserTab)()
  }, [])
}

function E(e) {
  let t = function(e) {
      let t = (0, s.useStateFromStoresArray)([o.default, C.default, u.default], () => r(C.default.getThreadsForParent(e.guild_id, e.id)).values().map(e => {
        let {
          id: t
        } = e;
        return u.default.getChannel(t)
      }).filter(c.isNotNullish).filter(e => o.default.can(S.Permissions.VIEW_CHANNEL, e)).map(e => e.id).value(), [e.guild_id, e.id]);
      return a.useMemo(() => r(t).sort((e, t) => f.default.compare(d.default.lastMessageId(e), d.default.lastMessageId(t))).reverse().value(), [t])
    }(e),
    [n, l] = (0, s.useStateFromStores)([p.default], () => r.partition(t, e => p.default.hasJoined(e)), [t], s.statesWillNeverBeEqual);
  return {
    joinedThreadIds: n,
    unjoinedThreadIds: l
  }
}

function I(e) {
  let t = (0, s.useStateFromStoresArray)([o.default, C.default, u.default], () => r(C.default.getThreadsForGuild(e)).values().map(e => r.values(e)).flatten().map(e => {
    let {
      id: t
    } = e;
    return u.default.getChannel(t)
  }).filter(c.isNotNullish).filter(e => o.default.can(S.Permissions.VIEW_CHANNEL, e)).map(e => e.id).value(), [e]);
  return a.useMemo(() => r(t).sort((e, t) => f.default.compare(d.default.lastMessageId(e), d.default.lastMessageId(t))).reverse().value(), [t])
}

function A(e, t, n) {
  let {
    canLoadMore: l,
    loading: d,
    nextOffset: c,
    isInitialLoad: f
  } = (0, s.useStateFromStoresObject)([h.default], () => ({
    loading: h.default.isLoading(e.id, t, n),
    isInitialLoad: h.default.isInitialLoad,
    canLoadMore: h.default.canLoadMore,
    nextOffset: h.default.nextOffset
  })), C = a.useCallback(() => {
    o.default.can(S.Permissions.READ_MESSAGE_HISTORY, e) && v.default.loadArchivedThreads(e.guild_id, e.id, t, n, c)
  }, [e, t, n, c]);
  a.useEffect(() => {
    f && C()
  }, [e.id, t, n, f]), a.useEffect(() => {
    i.default.resort(e.id)
  }, [e.id]);
  let p = (0, s.useStateFromStoresArray)([h.default, u.default, o.default], () => r(h.default.getThreads(e.id, t, n)).filter(e => {
    let t = u.default.getChannel(e);
    return null != t && o.default.can(S.Permissions.VIEW_CHANNEL, t)
  }).value());
  return {
    threadIds: p,
    canLoadMore: l,
    loading: d || f,
    loadMore: C
  }
}