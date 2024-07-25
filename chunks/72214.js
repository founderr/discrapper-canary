n.d(t, {
  s: function() {
return f;
  }
}), n(47120);
var l = n(470079),
  a = n(442837),
  i = n(38618),
  s = n(51596),
  r = n(516373),
  c = n(314897),
  u = n(580005),
  o = n(987509),
  d = n(601565),
  _ = n(41837);

function f(e) {
  let {
searchText: t,
targetDestination: n,
selectedDestinations: f,
originDestination: h,
includeMissingDMs: E = !1
  } = e, g = (0, a.e7)([c.default], () => c.default.getId()), S = l.useMemo(() => ({
searchOptions: {
  blacklist: new Set(['user:'.concat(g)]),
  frecencyBoosters: !0,
  userFilters: null
}
  }), [g]), {
search: I,
query: A,
results: p
  } = (0, d.Z)(S), m = l.useMemo(() => function(e) {
let {
  query: t,
  queryMode: n
} = (0, s.F_)(e), l = _.M, a = null;
return null != n && _.M.includes(n) && (l = [n], a = n), {
  query: t,
  queryMode: a,
  resultTypes: l
};
  }(t), [t]), {
queryMode: C
  } = m, [L, b] = l.useState(null != f ? f : []);
  l.useLayoutEffect(() => {
let {
  query: e,
  resultTypes: t
} = m;
I({
  query: e,
  resultTypes: t
}), b(null != f ? f : []);
  }, [
I,
m
  ]), (0, r.D)();
  let N = (0, a.e7)([u.Z], () => u.Z.getFrequentlyWithoutFetchingLatest()),
T = (0, a.e7)([i.Z], () => i.Z.isConnected()),
Z = '' !== A;
  return l.useMemo(() => (0, o.ZP)({
results: p,
hasQuery: Z,
queryMode: C,
targetDestination: n,
frequentChannels: N,
selectedDestinations: f,
pinnedDestinations: L,
originDestination: h,
includeMissingDMs: E,
isConnected: T
  }), [
p,
Z,
C,
n,
N,
f,
L,
h,
E,
T
  ]);
}