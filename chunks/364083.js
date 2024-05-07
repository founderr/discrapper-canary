"use strict";
s.r(t), s.d(t, {
  useClanSetupGameSelectableSearch: function() {
    return u
  }
});
var a = s("470079"),
  n = s("392711"),
  i = s.n(n),
  E = s("442837"),
  l = s("77498"),
  _ = s("308083");

function r(e) {
  var t;
  return null !== (t = _.HOISTED_SEARCH_APPLICATION_IDS_BY_PRIORITY.get(e)) && void 0 !== t ? t : 0
}

function u() {
  let e = (0, E.useStateFromStores)([l.default], () => i()(l.default.games).map(e => ({
      value: e.id,
      label: e.name
    })).sortBy(e => {
      let {
        value: t
      } = e;
      return r(t)
    }).reverse().value(), []),
    t = a.useCallback((e, t) => r(t.item.value) - r(e.item.value), []);
  return {
    options: e,
    matchSorterOptions: a.useMemo(() => ({
      baseSort: t,
      keys: ["label"]
    }), [t])
  }
}