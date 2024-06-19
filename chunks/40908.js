t.d(s, {
  Z: function() {
    return r
  }
}), t(47120);
var n = t(470079),
  i = t(304445),
  a = t(997383);
let l = [];

function r(e) {
  let {
    visible: s,
    autocompleterResultTypes: t,
    autocompleterOptions: r,
    autocompleterBeforeCreateSearchContext: o
  } = e, [c, E] = n.useState(""), [d, _] = n.useState(l), T = n.useCallback((e, s) => {
    "" === (s = s.trim()).trim() ? _(l) : _(e)
  }, []);
  n.useEffect(() => i.Z.addRouteChangeListener(() => {
    E("")
  }), []);
  let [S] = n.useState(() => new a.Z(T, t, void 0, r));
  return n.useEffect(() => {
    s ? (null == o || o(S), S.createSearchContext()) : (S.clean(), E(""))
  }, [s, S, o]), {
    queryResults: d,
    query: c,
    updateQuery: n.useCallback(e => {
      E(e), S.search(e)
    }, [S])
  }
}