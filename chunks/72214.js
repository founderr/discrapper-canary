"use strict";
l.r(t), l.d(t, {
  useShareSearchResults: function() {
    return A
  }
}), l("47120");
var s = l("470079"),
  a = l("442837"),
  n = l("38618"),
  i = l("51596"),
  u = l("516373"),
  r = l("314897"),
  o = l("580005"),
  d = l("987509"),
  c = l("601565"),
  f = l("41837");

function A(e) {
  let {
    searchText: t,
    targetDestination: l,
    selectedDestinations: A,
    originDestination: _
  } = e, E = (0, a.useStateFromStores)([r.default], () => r.default.getId()), p = s.useMemo(() => ({
    searchOptions: {
      blacklist: new Set(["user:".concat(E)]),
      frecencyBoosters: !0,
      userFilters: null
    }
  }), [E]), {
    search: I,
    query: S,
    results: h
  } = (0, c.default)(p), m = s.useMemo(() => (function(e) {
    let {
      query: t,
      queryMode: l
    } = (0, i.getQuickSwitcherOptions)(e), s = f.ALLOWED_TYPES, a = null;
    return null != l && f.ALLOWED_TYPES.includes(l) && (s = [l], a = l), {
      query: t,
      queryMode: a,
      resultTypes: s
    }
  })(t), [t]), {
    queryMode: T
  } = m, [g, y] = s.useState(null != A ? A : []);
  s.useLayoutEffect(() => {
    let {
      query: e,
      resultTypes: t
    } = m;
    I({
      query: e,
      resultTypes: t
    }), y(null != A ? A : [])
  }, [I, m]), (0, u.useFrecencySettings)();
  let C = (0, a.useStateFromStores)([o.default], () => o.default.getFrequentlyWithoutFetchingLatest()),
    N = (0, a.useStateFromStores)([n.default], () => n.default.isConnected()),
    L = "" !== S;
  return s.useMemo(() => (0, d.default)({
    results: h,
    hasQuery: L,
    queryMode: T,
    targetDestination: l,
    frequentChannels: C,
    selectedDestinations: A,
    pinnedDestinations: g,
    originDestination: _,
    isConnected: N
  }), [h, L, T, l, C, A, g, _, N])
}