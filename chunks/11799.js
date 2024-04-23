"use strict";
n.r(t), n.d(t, {
  useDesktopNotificationCenterItemsLoader: function() {
    return E
  }
}), n("47120");
var s = n("470079"),
  l = n("442837"),
  a = n("45114"),
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
      withMentions: E = !1,
      initialPageSize: _
    } = e, m = (0, l.useStateFromStores)([d.default], () => d.default.shouldReload()), T = s.useRef(!1), [I, p] = s.useState(!1), {
      initialized: h,
      loading: N,
      items: S,
      hasMore: C,
      cursor: A,
      errored: g
    } = (0, l.useStateFromStoresObject)([u.default], () => ({
      initialized: u.default.initialized,
      loading: u.default.loading,
      items: u.default.items,
      hasMore: u.default.hasMore,
      cursor: u.default.cursor,
      errored: u.default.errored
    })), {
      roleFilter: M,
      everyoneFilter: R
    } = (0, l.useStateFromStoresObject)([r.default], () => ({
      everyoneFilter: r.default.everyoneFilter,
      roleFilter: r.default.roleFilter
    }));
    s.useEffect(() => ((0, o.setNotificationCenterActive)(!0), () => (0, o.setNotificationCenterActive)(!1)), []), s.useEffect(() => {
      h && t && (0, a.ackUserFeature)(c.ReadStateTypes.NOTIFICATION_CENTER)
    }, [t, h]);
    let v = (0, i.default)();
    s.useEffect(() => () => {
      f ? !v() && (g || S.length > 100) && (0, o.resetNotificationCenter)() : n && S.length > 100 && (0, o.resetNotificationCenter)()
    }, [n, S, f, v, g]), s.useEffect(() => {
      let e = m && t;
      (!h || e) && (0, o.fetchNotificationCenterItems)({
        limit: null != _ ? _ : E ? 8 : 20,
        with_mentions: E,
        roles_filter: M,
        everyone_filter: R
      })
    }, [h, m, t, E, M, R, _]);
    let O = s.useCallback(async e => {
      !T.current && h && C && null != A && (e || !g) && (T.current = !0, p(!0), await (0, o.fetchNotificationCenterItems)({
        after: A,
        with_mentions: E,
        roles_filter: M,
        everyone_filter: R,
        limit: E ? 8 : 20
      }, () => {
        T.current = !1
      }), p(!1))
    }, [h, C, A, g, E, M, R]);
    return {
      initialized: h,
      loading: N,
      items: S,
      hasMore: C,
      loadMore: O,
      loadingMore: I,
      setReadNotifItemToAcked: e => {
        !e.acked && (e.acked = !0)
      },
      errored: g
    }
  },
  E = () => {
    let {
      initialized: e,
      loading: t,
      items: n,
      hasMore: s,
      loadMore: l
    } = f({
      isFocused: !0,
      isDesktop: !0
    });
    return {
      initialized: e,
      loading: t,
      items: n.filter(e => "notification-center-item" === e.kind),
      hasMore: s,
      loadMore: l
    }
  }