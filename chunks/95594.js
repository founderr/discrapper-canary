"use strict";
n.d(t, {
  Z: function() {
    return l
  }
}), n(47120);
var i = n(470079),
  r = n(663507),
  s = n(924428),
  o = n(151973);
let a = Object.freeze({
  coordsMap: {},
  visibleSections: {},
  totalHeight: 0,
  gridData: {
    boundaries: [],
    coordinates: {}
  }
});

function l(e) {
  let {
    sections: t,
    columns: n,
    getItemKey: l,
    getItemHeight: u,
    getSectionHeight: _,
    chunkSize: c = 250,
    getScrollerState: d,
    maxBufferWidth: E,
    itemGutter: I,
    removeEdgeItemGutters: T,
    sectionGutter: h,
    padding: f,
    paddingVertical: S,
    paddingHorizontal: A,
    dir: N
  } = e, m = (0, s.Z)(), O = (0, i.useRef)(a), [R] = (0, i.useState)(() => new r.ZP), p = d(), g = Math.min(null != E ? E : 1 / 0, p.offsetWidth), C = null != E ? Math.max(0, p.offsetWidth - E) : 0, {
    dirty: v,
    chunkStart: L,
    chunkEnd: D,
    forceUpdateOnChunkChange: M
  } = (0, o.Z)({
    chunkSize: c,
    getScrollerState: d,
    forceUpdate: m
  });
  return O.current = (0, i.useMemo)(() => v > 0 ? O.current : (R.mergeProps({
    sections: t,
    columns: n,
    getItemKey: l,
    getItemHeight: u,
    getSectionHeight: _,
    bufferWidth: g,
    itemGutter: I,
    removeEdgeItemGutters: T,
    sectionGutter: h,
    padding: f,
    paddingVertical: S,
    paddingHorizontal: A,
    marginLeft: C / 2,
    dir: N
  }), R.computeVisibleSections(Math.max(0, L * c), D * c), R.getState()), [v, R, t, n, l, u, _, L, D, c, I, T, h, f, S, A, g, N]), {
    ...O.current,
    masonryComputer: R,
    forceUpdateOnChunkChange: M,
    forceUpdate: m
  }
}