n.d(t, {
    t: function () {
        return l;
    }
});
var r = n(192379),
    i = n(611144),
    a = n(2052),
    s = n(691251),
    o = n(98528);
let l = (e) => {
    let { columnCounts: t, stickersGrid: n, stickersListRef: l, store: u, gridNavigatorId: c, setInspectedStickerPosition: d, onGridItemSelect: f } = e,
        _ = (0, a.O)(),
        h = r.useCallback(
            (e) => {
                f(e, _);
            },
            [f, _]
        ),
        p = r.useCallback(
            (e, t) => {
                d(e, t, s.u.GRID_NAVIGATOR_EVENT);
            },
            [d]
        ),
        {
            gridDispatch: m,
            getItemProps: g,
            getRowProps: E,
            gridContainerProps: v,
            handleGridContainerKeyDown: I,
            isUsingKeyboardNavigation: S
        } = (0, o.VO)({
            columnCounts: t,
            gridNavigatorId: c,
            itemGrid: n,
            itemList: l,
            onGridNavigatorItemSelect: h,
            onGridNavigatorPositionChange: p
        });
    return (
        r.useEffect(
            () =>
                u.useStore.subscribe(
                    (e) => {
                        if (null == e) return;
                        let { columnIndex: t, rowIndex: n, source: r } = e;
                        r !== s.u.GRID_NAVIGATOR_EVENT &&
                            m({
                                type: i.s.SET_FOCUSED_POSITION,
                                x: t,
                                y: n
                            });
                    },
                    (e) => e.inspectedExpressionPosition
                ),
            [m, u]
        ),
        {
            getItemProps: g,
            getRowProps: E,
            gridContainerProps: v,
            handleGridContainerKeyDown: I,
            isUsingKeyboardNavigation: S
        }
    );
};
