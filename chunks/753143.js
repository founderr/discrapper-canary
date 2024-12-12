r.d(n, {
    Z: function () {
        return d;
    },
    r: function () {
        return f;
    }
});
var i = r(411104);
var a = r(47120);
var s = r(192379),
    o = r(134158),
    l = r(924428),
    u = r(151973);
let c = Object.freeze({
    spacerTop: 0,
    totalHeight: 0,
    items: [],
    isSidebarVisible: !1
});
function d(e) {
    let { sections: n, sectionHeight: r, rowHeight: i, footerHeight: a, sidebarHeight: d, listHeaderHeight: f, chunkSize: _ = 256, paddingTop: h = 0, paddingBottom: p = 0, getScrollerState: m, getAnchorId: g } = e,
        E = (0, l.Z)(),
        v = (0, s.useRef)(c),
        [I] = (0, s.useState)(() => new o.Z()),
        {
            dirty: T,
            chunkStart: b,
            chunkEnd: y,
            forceUpdateOnChunkChange: S
        } = (0, u.Z)({
            chunkSize: _,
            getScrollerState: m,
            forceUpdate: E
        }),
        { items: A } = v.current,
        N = null,
        { scrollTop: C } = m();
    for (let e of A) {
        if (0 === C) break;
        if ('footer' === e.type || 'header' === e.type || null == e.anchorId) continue;
        let n = 'row' === e.type ? e.row : void 0;
        if (e.offsetTop >= C) {
            N = {
                id: e.anchorId,
                section: e.section,
                row: n,
                scrollOffset: e.offsetTop - C
            };
            break;
        }
    }
    let R = (0, s.useMemo)(() => {
            let e = Math.max(0, b * _);
            return null != d && e < d;
        }, [_, b, d]),
        O = (0, s.useMemo)(
            () =>
                T > 0
                    ? v.current
                    : (I.mergeProps({
                          sectionHeight: r,
                          rowHeight: i,
                          footerHeight: a,
                          listHeaderHeight: f,
                          paddingBottom: p,
                          paddingTop: h,
                          sections: n,
                          getAnchorId: g
                      }),
                      I.compute(Math.max(0, b * _), y * _)),
            [T, b, y, r, i, a, f, p, h, n, I, _, g]
        );
    return (
        (0, s.useLayoutEffect)(() => void (v.current = O)),
        {
            ...O,
            listComputer: I,
            forceUpdateOnChunkChange: S,
            anchor: N,
            isSidebarVisible: R
        }
    );
}
function f(e) {
    let { scrollerRef: n, anchor: r, getScrollerState: i, listComputer: a, getAnchorId: o, totalHeight: l } = e;
    (0, s.useLayoutEffect)(() => {
        let { current: e } = n,
            { scrollTop: s } = i();
        if (null == r || null == r.row || null == e || null == o || 0 === s) return;
        let l = (n) => {
            if (n < 0 || n >= a.sections[r.section] || o(r.section, r.row) !== r.id) return !1;
            let [i] = a.computeScrollPosition(r.section, n),
                l = i - r.scrollOffset;
            return s !== l && (e.scrollTop = l), !0;
        };
        if (!l(r.row)) !l(r.row - 1) && l(r.row + 1);
    }, [l]);
}
