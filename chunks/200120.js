"use strict";
n.r(t), n.d(t, {
  useActiveKeywordFiltersCacheKey: function() {
    return a
  }
}), n("653041");
var i = n("470079"),
  r = n("592204"),
  s = n("712950");
let a = () => {
  let {
    profanity: e,
    sexualContent: t,
    slurs: n
  } = (0, s.useKeywordFilterSettings)(), a = (0, r.useIsEligibleForKeywordFiltering)({
    location: "use-should-filter-keywords"
  });
  return i.useMemo(() => {
    let i = [];
    return a ? (e && i.push("profanity"), t && i.push("sexualContent"), n && i.push("slurs"), i.join(":")) : null
  }, [e, t, n, a])
}