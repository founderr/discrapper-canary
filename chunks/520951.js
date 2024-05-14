"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var a = n("470079"),
  l = n("442837"),
  s = n("162461"),
  i = n("71585"),
  r = n("561308");
let o = [],
  u = new Set;

function d(e) {
  let t = (0, l.useStateFromStores)([i.default], () => (0, s.isEligibleForImpressionCapping)("useFilterImpressionCappedContent") ? i.default.getImpressionCappedItemIds() : u, [e]);
  return a.useMemo(() => null == e ? o : e.filter(e => !!(0, r.isEntryActive)(e) || !t.has(e.id)), [e, t])
}