n.d(t, {
  y6: function() {
    return _
  }
}), n(47120);
var s = n(470079),
  i = n(442837),
  l = n(45114),
  a = n(733427),
  r = n(455199),
  o = n(833592),
  c = n(140155),
  u = n(774807),
  d = n(490897);
let E = e => {
    let {
      isFocused: t,
      navigatedAway: n,
      isDesktop: E,
      withMentions: _ = !1,
      initialPageSize: I
    } = e, T = (0, i.e7)([u.Z], () => u.Z.shouldReload()), m = s.useRef(!1), [N, h] = s.useState(!1), {
      initialized: C,
      loading: S,
      items: A,
      hasMore: g,
      cursor: p,
      errored: f
    } = (0, i.cj)([c.Z], () => ({
      initialized: c.Z.initialized,
      loading: c.Z.loading,
      items: c.Z.items,
      hasMore: c.Z.hasMore,
      cursor: c.Z.cursor,
      errored: c.Z.errored
    })), {
      roleFilter: R,
      everyoneFilter: O
    } = (0, i.cj)([r.Z], () => ({
      everyoneFilter: r.Z.everyoneFilter,
      roleFilter: r.Z.roleFilter
    }));
    s.useEffect(() => ((0, o.Vk)(!0), () => (0, o.Vk)(!1)), []), s.useEffect(() => {
      C && t && (0, l.FT)(d.W.NOTIFICATION_CENTER)
    }, [t, C]);
    let M = (0, a.Z)();
    s.useEffect(() => () => {
      E ? !M() && (f || A.length > 100) && (0, o.jF)() : n && A.length > 100 && (0, o.jF)()
    }, [n, A, E, M, f]), s.useEffect(() => {
      let e = T && t;
      (!C || e) && (0, o.jk)({
        limit: null != I ? I : _ ? 8 : 20,
        with_mentions: _,
        roles_filter: R,
        everyone_filter: O
      })
    }, [C, T, t, _, R, O, I]);
    let x = s.useCallback(async e => {
      !m.current && C && g && null != p && (e || !f) && (m.current = !0, h(!0), await (0, o.jk)({
        after: p,
        with_mentions: _,
        roles_filter: R,
        everyone_filter: O,
        limit: _ ? 8 : 20
      }, () => {
        m.current = !1
      }), h(!1))
    }, [C, g, p, f, _, R, O]);
    return {
      initialized: C,
      loading: S,
      items: A,
      hasMore: g,
      loadMore: x,
      loadingMore: N,
      setReadNotifItemToAcked: e => {
        !e.acked && (e.acked = !0)
      },
      errored: f
    }
  },
  _ = () => {
    let {
      initialized: e,
      loading: t,
      items: n,
      hasMore: s,
      loadMore: i
    } = E({
      isFocused: !0,
      isDesktop: !0
    });
    return {
      initialized: e,
      loading: t,
      items: n.filter(e => "notification-center-item" === e.kind),
      hasMore: s,
      loadMore: i
    }
  }