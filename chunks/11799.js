"use strict";
n.r(t), n.d(t, {
  useDesktopNotificationCenterItemsLoader: function() {
    return h
  }
}), n("47120");
var a = n("470079"),
  l = n("442837"),
  s = n("45114"),
  i = n("733427"),
  r = n("455199"),
  o = n("833592"),
  u = n("140155"),
  d = n("774807"),
  c = n("490897");
let f = e => {
    let {
      isFocused: t,
      navigatedAway: n,
      isDesktop: f,
      withMentions: h = !1,
      initialPageSize: E
    } = e, m = (0, l.useStateFromStores)([d.default], () => d.default.shouldReload()), p = a.useRef(!1), [g, S] = a.useState(!1), {
      initialized: N,
      loading: _,
      items: T,
      hasMore: I,
      cursor: C,
      errored: A
    } = (0, l.useStateFromStoresObject)([u.default], () => ({
      initialized: u.default.initialized,
      loading: u.default.loading,
      items: u.default.items,
      hasMore: u.default.hasMore,
      cursor: u.default.cursor,
      errored: u.default.errored
    })), {
      roleFilter: v,
      everyoneFilter: M
    } = (0, l.useStateFromStoresObject)([r.default], () => ({
      everyoneFilter: r.default.everyoneFilter,
      roleFilter: r.default.roleFilter
    }));
    a.useEffect(() => ((0, o.setNotificationCenterActive)(!0), () => (0, o.setNotificationCenterActive)(!1)), []), a.useEffect(() => {
      N && t && (0, s.ackUserFeature)(c.ReadStateTypes.NOTIFICATION_CENTER)
    }, [t, N]);
    let R = (0, i.default)();
    a.useEffect(() => () => {
      f ? !R() && (A || T.length > 100) && (0, o.resetNotificationCenter)() : n && T.length > 100 && (0, o.resetNotificationCenter)()
    }, [n, T, f, R, A]), a.useEffect(() => {
      let e = m && t;
      (!N || e) && (0, o.fetchNotificationCenterItems)({
        limit: null != E ? E : h ? 8 : 20,
        with_mentions: h,
        roles_filter: v,
        everyone_filter: M
      })
    }, [N, m, t, h, v, M, E]);
    let x = a.useCallback(async e => {
      !p.current && N && I && null != C && (e || !A) && (p.current = !0, S(!0), await (0, o.fetchNotificationCenterItems)({
        after: C,
        with_mentions: h,
        roles_filter: v,
        everyone_filter: M,
        limit: h ? 8 : 20
      }, () => {
        p.current = !1
      }), S(!1))
    }, [N, I, C, A, h, v, M]);
    return {
      initialized: N,
      loading: _,
      items: T,
      hasMore: I,
      loadMore: x,
      loadingMore: g,
      setReadNotifItemToAcked: e => {
        !e.acked && (e.acked = !0)
      },
      errored: A
    }
  },
  h = () => {
    let {
      initialized: e,
      loading: t,
      items: n,
      hasMore: a,
      loadMore: l
    } = f({
      isFocused: !0,
      isDesktop: !0
    });
    return {
      initialized: e,
      loading: t,
      items: n.filter(e => "notification-center-item" === e.kind),
      hasMore: a,
      loadMore: l
    }
  }