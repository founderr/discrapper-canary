n.d(t, {
  s: function() {
    return h
  }
}), n(47120);
var l = n(470079),
  a = n(442837),
  i = n(38618),
  s = n(51596),
  r = n(516373),
  c = n(314897),
  o = n(580005),
  u = n(987509),
  d = n(601565),
  _ = n(41837);

function h(e) {
  let {
    searchText: t,
    targetDestination: n,
    selectedDestinations: h,
    originDestination: E
  } = e, f = (0, a.e7)([c.default], () => c.default.getId()), S = l.useMemo(() => ({
    searchOptions: {
      blacklist: new Set(["user:".concat(f)]),
      frecencyBoosters: !0,
      userFilters: null
    }
  }), [f]), {
    search: I,
    query: g,
    results: A
  } = (0, d.Z)(S), p = l.useMemo(() => (function(e) {
    let {
      query: t,
      queryMode: n
    } = (0, s.F_)(e), l = _.M, a = null;
    return null != n && _.M.includes(n) && (l = [n], a = n), {
      query: t,
      queryMode: a,
      resultTypes: l
    }
  })(t), [t]), {
    queryMode: m
  } = p, [b, C] = l.useState(null != h ? h : []);
  l.useLayoutEffect(() => {
    let {
      query: e,
      resultTypes: t
    } = p;
    I({
      query: e,
      resultTypes: t
    }), C(null != h ? h : [])
  }, [I, p]), (0, r.D)();
  let L = (0, a.e7)([o.Z], () => o.Z.getFrequentlyWithoutFetchingLatest()),
    N = (0, a.e7)([i.Z], () => i.Z.isConnected()),
    T = "" !== g;
  return l.useMemo(() => (0, u.ZP)({
    results: A,
    hasQuery: T,
    queryMode: m,
    targetDestination: n,
    frequentChannels: L,
    selectedDestinations: h,
    pinnedDestinations: b,
    originDestination: E,
    isConnected: N
  }), [A, T, m, n, L, h, b, E, N])
}