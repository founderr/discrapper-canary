n.d(t, {
  Z: function() {
    return u
  }
}), n(47120);
var l = n(470079),
  i = n(442837),
  s = n(162461),
  a = n(71585),
  r = n(146282),
  o = n(561308);
let c = new Set;

function u(e) {
  let t = (0, i.e7)([a.Z, r.Z], () => {
    let e = r.Z.getDebugImpressionCappingDisabled();
    return !(0, s.wm)("useFilterImpressionCappedContent") || e ? c : a.Z.getImpressionCappedItemIds()
  }, [e]);
  return l.useMemo(() => {
    if (null == e) return {
      entries: e,
      filteredIds: c
    };
    let n = new Set;
    return {
      entries: e.filter(e => !!(0, o.kr)(e) || !t.has(e.id) || (n.add(e.id), !1)),
      filteredIds: n
    }
  }, [e, t])
}