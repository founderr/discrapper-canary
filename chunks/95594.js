n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var r = n(470079),
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
    let { sections: t, columns: n, getItemKey: l, getItemHeight: u, getSectionHeight: c, chunkSize: d = 250, getScrollerState: _, maxBufferWidth: E, itemGutter: f, removeEdgeItemGutters: h, sectionGutter: p, padding: I, paddingVertical: m, paddingHorizontal: T, dir: S } = e,
        g = (0, a.Z)(),
        A = (0, r.useRef)(o),
        [N] = (0, r.useState)(() => new i.ZP()),
        R = _(),
        O = Math.min(null != E ? E : 1 / 0, R.offsetWidth),
        v = null != E ? Math.max(0, R.offsetWidth - E) : 0,
        {
            dirty: C,
            chunkStart: L,
            chunkEnd: y,
            forceUpdateOnChunkChange: D
        } = (0, s.Z)({
            chunkSize: d,
            getScrollerState: _,
            forceUpdate: g
        });
    return (
        (A.current = (0, r.useMemo)(
            () =>
                C > 0
                    ? A.current
                    : (N.mergeProps({
                          sections: t,
                          columns: n,
                          getItemKey: l,
                          getItemHeight: u,
                          getSectionHeight: c,
                          bufferWidth: O,
                          itemGutter: f,
                          removeEdgeItemGutters: h,
                          sectionGutter: p,
                          padding: I,
                          paddingVertical: m,
                          paddingHorizontal: T,
                          marginLeft: v / 2,
                          dir: S
                      }),
                      N.computeVisibleSections(Math.max(0, L * d), y * d),
                      N.getState()),
            [C, N, t, n, l, u, c, L, y, d, f, h, p, I, m, T, O, S]
        )),
        {
            ...A.current,
            masonryComputer: N,
            forceUpdateOnChunkChange: D,
            forceUpdate: g
        }
    );
}
