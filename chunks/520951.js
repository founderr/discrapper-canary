n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var i = n(192379),
    l = n(442837),
    r = n(162461),
    a = n(71585),
    s = n(146282),
    o = n(561308);
let c = new Set();
function d(e) {
    let t = (0, l.e7)(
        [a.Z, s.Z],
        () => {
            let e = s.Z.getDebugImpressionCappingDisabled();
            return !(0, r.wm)('useFilterImpressionCappedContent') || e ? c : a.Z.getImpressionCappedItemIds();
        },
        [e]
    );
    return i.useMemo(() => {
        if (null == e)
            return {
                entries: e,
                filteredIds: c
            };
        let n = new Set();
        return {
            entries: e.filter((e) => !!(0, o.kr)(e) || !t.has(e.id) || (n.add(e.id), !1)),
            filteredIds: n
        };
    }, [e, t]);
}
