n.d(t, {
  s: function() {
    return _
  }
}), n(47120);
var l = n(470079),
  a = n(442837),
  s = n(38618),
  i = n(51596),
  r = n(516373),
  u = n(314897),
  o = n(580005),
  c = n(987509),
  d = n(601565),
  E = n(41837);

function _(e) {
  let {
    searchText: t,
    targetDestination: n,
    selectedDestinations: _,
    originDestination: h
  } = e, S = (0, a.e7)([u.default], () => u.default.getId()), f = l.useMemo(() => ({
    searchOptions: {
      blacklist: new Set(["user:".concat(S)]),
      frecencyBoosters: !0,
      userFilters: null
    }
  }), [S]), {
    search: g,
    query: A,
    results: I
  } = (0, d.Z)(f), p = l.useMemo(() => (function(e) {
    let {
      query: t,
      queryMode: n
    } = (0, i.F_)(e), l = E.M, a = null;
    return null != n && E.M.includes(n) && (l = [n], a = n), {
      query: t,
      queryMode: a,
      resultTypes: l
    }
  })(t), [t]), {
    queryMode: C
  } = p, [m, N] = l.useState(null != _ ? _ : []);
  l.useLayoutEffect(() => {
    let {
      query: e,
      resultTypes: t
    } = p;
    g({
      query: e,
      resultTypes: t
    }), N(null != _ ? _ : [])
  }, [g, p]), (0, r.D)();
  let T = (0, a.e7)([o.Z], () => o.Z.getFrequentlyWithoutFetchingLatest()),
    L = (0, a.e7)([s.Z], () => s.Z.isConnected()),
    b = "" !== A;
  return l.useMemo(() => (0, c.ZP)({
    results: I,
    hasQuery: b,
    queryMode: C,
    targetDestination: n,
    frequentChannels: T,
    selectedDestinations: _,
    pinnedDestinations: m,
    originDestination: h,
    isConnected: L
  }), [I, b, C, n, T, _, m, h, L])
}