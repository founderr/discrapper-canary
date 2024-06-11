"use strict";
l.r(t), l.d(t, {
  default: function() {
    return i
  }
}), l("47120");
var s = l("470079"),
  a = l("207561"),
  n = l("212819");

function i(e) {
  let {
    searchOptions: t
  } = e, [l, i] = s.useState({
    results: [],
    query: ""
  }), u = (0, a.useLazyValue)(() => {
    let e = new n.default((e, t) => {
      i({
        results: e,
        query: t
      })
    });
    return e.setLimit(20), e.search(""), e
  });
  return s.useEffect(() => () => u.destroy(), [u]), s.useEffect(() => {
    null != t && t !== u.options && u.setOptions(t)
  }, [u, t]), {
    search: s.useCallback(e => {
      var t, l;
      let {
        query: s,
        resultTypes: a
      } = e;
      if (null == u.resultTypes || (t = a, l = u.resultTypes, !(t.length === l.size && t.every(e => l.has(e))))) u.setResultTypes(a), u.setLimit(1 === a.length ? 50 : 20);
      u.search("" === s.trim() ? "" : s)
    }, [u]),
    ...l
  }
}