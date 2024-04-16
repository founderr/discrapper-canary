"use strict";
a.r(t), a.d(t, {
  useClanSetupGameSelectableSearch: function() {
    return d
  }
});
var n = a("470079"),
  s = a("392711"),
  l = a.n(s),
  i = a("442837"),
  r = a("77498"),
  o = a("308083");

function u(e) {
  var t;
  return null !== (t = o.HOISTED_SEARCH_APPLICATION_IDS_BY_PRIORITY.get(e)) && void 0 !== t ? t : 0
}

function d() {
  let e = (0, i.useStateFromStores)([r.default], () => l()(r.default.games).map(e => ({
      value: e.id,
      label: e.name
    })).sortBy(e => {
      let {
        value: t
      } = e;
      return u(t)
    }).reverse().value(), []),
    t = n.useCallback((e, t) => u(t.item.value) - u(e.item.value), []);
  return {
    options: e,
    matchSorterOptions: n.useMemo(() => ({
      baseSort: t,
      keys: ["label"]
    }), [t])
  }
}