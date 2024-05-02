"use strict";
n.r(t), n.d(t, {
  useClanSetupGameSelectableSearch: function() {
    return d
  }
});
var a = n("470079"),
  s = n("392711"),
  l = n.n(s),
  i = n("442837"),
  r = n("77498"),
  o = n("308083");

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
    t = a.useCallback((e, t) => u(t.item.value) - u(e.item.value), []);
  return {
    options: e,
    matchSorterOptions: a.useMemo(() => ({
      baseSort: t,
      keys: ["label"]
    }), [t])
  }
}