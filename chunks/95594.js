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
    let { sections: t, columns: n, getItemKey: l, getItemHeight: u, getSectionHeight: c, chunkSize: d = 250, getScrollerState: f, maxBufferWidth: _, itemGutter: p, removeEdgeItemGutters: h, sectionGutter: m, padding: g, paddingVertical: E, paddingHorizontal: v, dir: b } = e,
        I = (0, a.Z)(),
        T = (0, r.useRef)(o),
        [S] = (0, r.useState)(() => new i.ZP()),
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
            forceUpdate: I
        });
    return (
        (T.current = (0, r.useMemo)(
            () =>
                C > 0
                    ? T.current
                    : (S.mergeProps({
                          sections: t,
                          columns: n,
                          getItemKey: l,
                          getItemHeight: u,
                          getSectionHeight: c,
                          bufferWidth: A,
                          itemGutter: p,
                          removeEdgeItemGutters: h,
                          sectionGutter: m,
                          padding: g,
                          paddingVertical: E,
                          paddingHorizontal: v,
                          marginLeft: N / 2,
                          dir: b
                      }),
                      S.computeVisibleSections(Math.max(0, R * d), O * d),
                      S.getState()),
            [C, S, t, n, l, u, c, R, O, d, p, h, m, g, E, v, A, b]
        )),
        {
            ...T.current,
            masonryComputer: S,
            forceUpdateOnChunkChange: D,
            forceUpdate: I
        }
    );
}
