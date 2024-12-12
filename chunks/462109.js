r.d(n, {
    t: function () {
        return u;
    }
});
var i = r(192379),
    a = r(611144),
    s = r(2052),
    o = r(691251),
    l = r(98528);
let u = (e) => {
    let { columnCounts: n, stickersGrid: r, stickersListRef: u, store: c, gridNavigatorId: d, setInspectedStickerPosition: f, onGridItemSelect: _ } = e,
        h = (0, s.O)(),
        p = i.useCallback(
            (e) => {
                _(e, h);
            },
            [_, h]
        ),
        m = i.useCallback(
            (e, n) => {
                f(e, n, o.u.GRID_NAVIGATOR_EVENT);
            },
            [f]
        ),
        {
            gridDispatch: g,
            getItemProps: E,
            getRowProps: v,
            gridContainerProps: I,
            handleGridContainerKeyDown: T,
            isUsingKeyboardNavigation: b
        } = (0, l.VO)({
            columnCounts: n,
            gridNavigatorId: d,
            itemGrid: r,
            itemList: u,
            onGridNavigatorItemSelect: p,
            onGridNavigatorPositionChange: m
        });
    return (
        i.useEffect(
            () =>
                c.subscribe(
                    (e) => e.inspectedExpressionPosition,
                    (e) => {
                        if (null == e) return;
                        let { columnIndex: n, rowIndex: r, source: i } = e;
                        i !== o.u.GRID_NAVIGATOR_EVENT &&
                            g({
                                type: a.s.SET_FOCUSED_POSITION,
                                x: n,
                                y: r
                            });
                    }
                ),
            [g, c]
        ),
        {
            getItemProps: E,
            getRowProps: v,
            gridContainerProps: I,
            handleGridContainerKeyDown: T,
            isUsingKeyboardNavigation: b
        }
    );
};
