n.d(t, {
    Z: function () {
        return c;
    },
    r: function () {
        return d;
    }
});
var r = n(411104);
var i = n(47120);
var a = n(470079),
    o = n(134158),
    s = n(924428),
    l = n(151973);
let u = Object.freeze({
    spacerTop: 0,
    totalHeight: 0,
    items: [],
    isSidebarVisible: !1
});
function c(e) {
    let { sections: t, sectionHeight: n, rowHeight: r, footerHeight: i, sidebarHeight: c, listHeaderHeight: d, chunkSize: _ = 256, paddingTop: E = 0, paddingBottom: f = 0, getScrollerState: h, getAnchorId: p } = e,
        m = (0, s.Z)(),
        I = (0, a.useRef)(u),
        [T] = (0, a.useState)(() => new o.Z()),
        {
            dirty: g,
            chunkStart: S,
            chunkEnd: A,
            forceUpdateOnChunkChange: v
        } = (0, l.Z)({
            chunkSize: _,
            getScrollerState: h,
            forceUpdate: m
        }),
        { items: N } = I.current,
        O = null,
        { scrollTop: R } = h();
    for (let e of N) {
        if (0 === R) break;
        if ('footer' === e.type || 'header' === e.type || null == e.anchorId) continue;
        let t = 'row' === e.type ? e.row : void 0;
        if (e.offsetTop >= R) {
            O = {
                id: e.anchorId,
                section: e.section,
                row: t,
                scrollOffset: e.offsetTop - R
            };
            break;
        }
    }
    let C = (0, a.useMemo)(() => {
            let e = Math.max(0, S * _);
            return null != c && e < c;
        }, [_, S, c]),
        y = (0, a.useMemo)(
            () =>
                g > 0
                    ? I.current
                    : (T.mergeProps({
                          sectionHeight: n,
                          rowHeight: r,
                          footerHeight: i,
                          listHeaderHeight: d,
                          paddingBottom: f,
                          paddingTop: E,
                          sections: t,
                          getAnchorId: p
                      }),
                      T.compute(Math.max(0, S * _), A * _)),
            [g, S, A, n, r, i, d, f, E, t, T, _, p]
        );
    return (
        (0, a.useLayoutEffect)(() => void (I.current = y)),
        {
            ...y,
            listComputer: T,
            forceUpdateOnChunkChange: v,
            anchor: O,
            isSidebarVisible: C
        }
    );
}
function d(e) {
    let { scrollerRef: t, anchor: n, getScrollerState: r, listComputer: i, getAnchorId: o, totalHeight: s } = e;
    (0, a.useLayoutEffect)(() => {
        let { current: e } = t,
            { scrollTop: a } = r();
        if (null == n || null == n.row || null == e || null == o || 0 === a) return;
        let s = (t) => {
            if (t < 0 || t >= i.sections[n.section] || o(n.section, n.row) !== n.id) return !1;
            let [r] = i.computeScrollPosition(n.section, t),
                s = r - n.scrollOffset;
            return a !== s && (e.scrollTop = s), !0;
        };
        if (!s(n.row)) !s(n.row - 1) && s(n.row + 1);
    }, [s]);
}
