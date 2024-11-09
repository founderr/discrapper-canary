n.d(t, {
    Z: function () {
        return l;
    },
    r: function () {
        return u;
    }
}),
    n(411104),
    n(47120);
var r = n(192379),
    i = n(134158),
    a = n(924428),
    s = n(151973);
let o = Object.freeze({
    spacerTop: 0,
    totalHeight: 0,
    items: [],
    isSidebarVisible: !1
});
function l(e) {
    let { sections: t, sectionHeight: n, rowHeight: l, footerHeight: u, sidebarHeight: c, listHeaderHeight: d, chunkSize: f = 256, paddingTop: _ = 0, paddingBottom: h = 0, getScrollerState: p, getAnchorId: m } = e,
        g = (0, a.Z)(),
        E = (0, r.useRef)(o),
        [v] = (0, r.useState)(() => new i.Z()),
        {
            dirty: I,
            chunkStart: S,
            chunkEnd: T,
            forceUpdateOnChunkChange: b
        } = (0, s.Z)({
            chunkSize: f,
            getScrollerState: p,
            forceUpdate: g
        }),
        { items: y } = E.current,
        A = null,
        { scrollTop: N } = p();
    for (let e of y) {
        if (0 === N) break;
        if ('footer' === e.type || 'header' === e.type || null == e.anchorId) continue;
        let t = 'row' === e.type ? e.row : void 0;
        if (e.offsetTop >= N) {
            A = {
                id: e.anchorId,
                section: e.section,
                row: t,
                scrollOffset: e.offsetTop - N
            };
            break;
        }
    }
    let C = (0, r.useMemo)(() => {
            let e = Math.max(0, S * f);
            return null != c && e < c;
        }, [f, S, c]),
        R = (0, r.useMemo)(
            () =>
                I > 0
                    ? E.current
                    : (v.mergeProps({
                          sectionHeight: n,
                          rowHeight: l,
                          footerHeight: u,
                          listHeaderHeight: d,
                          paddingBottom: h,
                          paddingTop: _,
                          sections: t,
                          getAnchorId: m
                      }),
                      v.compute(Math.max(0, S * f), T * f)),
            [I, S, T, n, l, u, d, h, _, t, v, f, m]
        );
    return (
        (0, r.useLayoutEffect)(() => void (E.current = R)),
        {
            ...R,
            listComputer: v,
            forceUpdateOnChunkChange: b,
            anchor: A,
            isSidebarVisible: C
        }
    );
}
function u(e) {
    let { scrollerRef: t, anchor: n, getScrollerState: i, listComputer: a, getAnchorId: s, totalHeight: o } = e;
    (0, r.useLayoutEffect)(() => {
        let { current: e } = t,
            { scrollTop: r } = i();
        if (null == n || null == n.row || null == e || null == s || 0 === r) return;
        let o = (t) => {
            if (t < 0 || t >= a.sections[n.section] || s(n.section, n.row) !== n.id) return !1;
            let [i] = a.computeScrollPosition(n.section, t),
                o = i - n.scrollOffset;
            return r !== o && (e.scrollTop = o), !0;
        };
        if (!o(n.row)) !o(n.row - 1) && o(n.row + 1);
    }, [o]);
}
