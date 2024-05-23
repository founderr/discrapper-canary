"use strict";
n.r(t), n.d(t, {
  useShouldFilterKeywords: function() {
    return a
  }
});
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
  return i.useMemo(() => a && (e || t || n), [e, t, n, a])
}