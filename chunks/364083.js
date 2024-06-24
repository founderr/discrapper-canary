t.d(n, {
  P: function() {
    return d
  }
});
var a = t(470079),
  r = t(392711),
  s = t.n(r),
  i = t(442837),
  l = t(77498),
  o = t(308083);

function c(e) {
  var n;
  return null !== (n = o.gQ.get(e)) && void 0 !== n ? n : 0
}

function d() {
  let e = (0, i.e7)([l.Z], () => l.Z.games),
    n = a.useMemo(() => s()(e).map(e => ({
      value: e.id,
      label: e.name
    })).sortBy(e => {
      let {
        value: n
      } = e;
      return c(n)
    }).reverse().value(), [e]),
    t = a.useCallback((e, n) => c(n.item.value) - c(e.item.value), []);
  return {
    options: n,
    matchSorterOptions: a.useMemo(() => ({
      baseSort: t,
      keys: ["label"]
    }), [t])
  }
}