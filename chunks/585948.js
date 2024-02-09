"use strict";
n.r(t), n.d(t, {
  useKeyboardNavigation: function() {
    return o
  }
});
var l = n("884691"),
  i = n("880317"),
  a = n("997289"),
  s = n("246511"),
  r = n("45961");
let o = e => {
  let {
    columnCounts: t,
    stickersGrid: n,
    stickersListRef: o,
    store: u,
    gridNavigatorId: d,
    setInspectedStickerPosition: c,
    onGridItemSelect: f
  } = e, p = (0, a.useAnalyticsContext)(), m = l.useCallback(e => {
    f(e, p)
  }, [f, p]), h = l.useCallback((e, t) => {
    c(e, t, s.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT)
  }, [c]), {
    gridDispatch: E,
    getItemProps: S,
    getRowProps: g,
    gridContainerProps: C,
    handleGridContainerKeyDown: T,
    isUsingKeyboardNavigation: v
  } = (0, r.useExpressionPickerGridKeyboardNavigation)({
    columnCounts: t,
    gridNavigatorId: d,
    itemGrid: n,
    itemList: o,
    onGridNavigatorItemSelect: m,
    onGridNavigatorPositionChange: h
  });
  return l.useEffect(() => u.useStore.subscribe(e => {
    if (null == e) return;
    let {
      columnIndex: t,
      rowIndex: n,
      source: l
    } = e;
    l !== s.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT && E({
      type: i.GridActionType.SET_FOCUSED_POSITION,
      x: t,
      y: n
    })
  }, e => e.inspectedExpressionPosition), [E, u]), {
    getItemProps: S,
    getRowProps: g,
    gridContainerProps: C,
    handleGridContainerKeyDown: T,
    isUsingKeyboardNavigation: v
  }
}