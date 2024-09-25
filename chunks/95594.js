n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(663507),
    o = n(924428),
    s = n(151973);
let l = Object.freeze({
    coordsMap: {},
    visibleSections: {},
    totalHeight: 0,
    gridData: {
        boundaries: [],
        coordinates: {}
    }
});
function u(e) {
    let { sections: t, columns: n, getItemKey: r, getItemHeight: u, getSectionHeight: c, chunkSize: d = 250, getScrollerState: _, maxBufferWidth: E, itemGutter: f, removeEdgeItemGutters: h, sectionGutter: p, padding: m, paddingVertical: I, paddingHorizontal: T, dir: g } = e,
        S = (0, o.Z)(),
        A = (0, i.useRef)(l),
        [v] = (0, i.useState)(() => new a.ZP()),
        N = _(),
        O = Math.min(null != E ? E : 1 / 0, N.offsetWidth),
        R = null != E ? Math.max(0, N.offsetWidth - E) : 0,
        {
            dirty: C,
            chunkStart: y,
            chunkEnd: b,
            forceUpdateOnChunkChange: L
        } = (0, s.Z)({
            chunkSize: d,
            getScrollerState: _,
            forceUpdate: S
        });
    return (
        (A.current = (0, i.useMemo)(
            () =>
                C > 0
                    ? A.current
                    : (v.mergeProps({
                          sections: t,
                          columns: n,
                          getItemKey: r,
                          getItemHeight: u,
                          getSectionHeight: c,
                          bufferWidth: O,
                          itemGutter: f,
                          removeEdgeItemGutters: h,
                          sectionGutter: p,
                          padding: m,
                          paddingVertical: I,
                          paddingHorizontal: T,
                          marginLeft: R / 2,
                          dir: g
                      }),
                      v.computeVisibleSections(Math.max(0, y * d), b * d),
                      v.getState()),
            [C, v, t, n, r, u, c, y, b, d, f, h, p, m, I, T, O, g]
        )),
        {
            ...A.current,
            masonryComputer: v,
            forceUpdateOnChunkChange: L,
            forceUpdate: S
        }
    );
}
