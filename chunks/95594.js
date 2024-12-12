r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(663507),
    o = r(924428),
    l = r(151973);
let u = Object.freeze({
    coordsMap: {},
    visibleSections: {},
    totalHeight: 0,
    gridData: {
        boundaries: [],
        coordinates: {}
    }
});
function c(e) {
    let { sections: n, columns: r, getItemKey: i, getItemHeight: c, getSectionHeight: d, chunkSize: f = 250, getScrollerState: _, maxBufferWidth: h, itemGutter: p, removeEdgeItemGutters: m, sectionGutter: g, padding: E, paddingVertical: v, paddingHorizontal: I, dir: T } = e,
        b = (0, o.Z)(),
        y = (0, a.useRef)(u),
        [S] = (0, a.useState)(() => new s.ZP()),
        A = _(),
        N = Math.min(null != h ? h : 1 / 0, A.offsetWidth),
        C = null != h ? Math.max(0, A.offsetWidth - h) : 0,
        {
            dirty: R,
            chunkStart: O,
            chunkEnd: D,
            forceUpdateOnChunkChange: L
        } = (0, l.Z)({
            chunkSize: f,
            getScrollerState: _,
            forceUpdate: b
        });
    return (
        (y.current = (0, a.useMemo)(
            () =>
                R > 0
                    ? y.current
                    : (S.mergeProps({
                          sections: n,
                          columns: r,
                          getItemKey: i,
                          getItemHeight: c,
                          getSectionHeight: d,
                          bufferWidth: N,
                          itemGutter: p,
                          removeEdgeItemGutters: m,
                          sectionGutter: g,
                          padding: E,
                          paddingVertical: v,
                          paddingHorizontal: I,
                          marginLeft: C / 2,
                          dir: T
                      }),
                      S.computeVisibleSections(Math.max(0, O * f), D * f),
                      S.getState()),
            [R, S, n, r, i, c, d, O, D, f, p, m, g, E, v, I, N, T]
        )),
        {
            ...y.current,
            masonryComputer: S,
            forceUpdateOnChunkChange: L,
            forceUpdate: b
        }
    );
}
