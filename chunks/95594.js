n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var r = n(192379),
    i = n(663507),
    a = n(924428),
    s = n(151973);
let o = Object.freeze({
    coordsMap: {},
    visibleSections: {},
    totalHeight: 0,
    gridData: {
        boundaries: [],
        coordinates: {}
    }
});
function l(e) {
    let { sections: t, columns: n, getItemKey: l, getItemHeight: u, getSectionHeight: c, chunkSize: d = 250, getScrollerState: f, maxBufferWidth: _, itemGutter: h, removeEdgeItemGutters: p, sectionGutter: m, padding: g, paddingVertical: E, paddingHorizontal: v, dir: I } = e,
        S = (0, a.Z)(),
        b = (0, r.useRef)(o),
        [T] = (0, r.useState)(() => new i.ZP()),
        y = f(),
        A = Math.min(null != _ ? _ : 1 / 0, y.offsetWidth),
        N = null != _ ? Math.max(0, y.offsetWidth - _) : 0,
        {
            dirty: C,
            chunkStart: R,
            chunkEnd: O,
            forceUpdateOnChunkChange: D
        } = (0, s.Z)({
            chunkSize: d,
            getScrollerState: f,
            forceUpdate: S
        });
    return (
        (b.current = (0, r.useMemo)(
            () =>
                C > 0
                    ? b.current
                    : (T.mergeProps({
                          sections: t,
                          columns: n,
                          getItemKey: l,
                          getItemHeight: u,
                          getSectionHeight: c,
                          bufferWidth: A,
                          itemGutter: h,
                          removeEdgeItemGutters: p,
                          sectionGutter: m,
                          padding: g,
                          paddingVertical: E,
                          paddingHorizontal: v,
                          marginLeft: N / 2,
                          dir: I
                      }),
                      T.computeVisibleSections(Math.max(0, R * d), O * d),
                      T.getState()),
            [C, T, t, n, l, u, c, R, O, d, h, p, m, g, E, v, A, I]
        )),
        {
            ...b.current,
            masonryComputer: T,
            forceUpdateOnChunkChange: D,
            forceUpdate: S
        }
    );
}
