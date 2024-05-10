"use strict";
a.r(t), a.d(t, {
  useClanSetupGameSelectableSearch: function() {
    return d
  }
});
var n = a("470079"),
  r = a("392711"),
  s = a.n(r),
  i = a("442837"),
  l = a("77498"),
  o = a("308083");

function c(e) {
  var t;
  return null !== (t = o.HOISTED_SEARCH_APPLICATION_IDS_BY_PRIORITY.get(e)) && void 0 !== t ? t : 0
}

function d() {
  let e = (0, i.useStateFromStores)([l.default], () => s()(l.default.games).map(e => ({
      value: e.id,
      label: e.name
    })).sortBy(e => {
      let {
        value: t
      } = e;
      return c(t)
    }).reverse().value(), []),
    t = n.useCallback((e, t) => c(t.item.value) - c(e.item.value), []);
  return {
    options: e,
    matchSorterOptions: n.useMemo(() => ({
      baseSort: t,
      keys: ["label"]
    }), [t])
  }
}