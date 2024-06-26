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
    paddingHorizontal: N,
    dir: A
  } = e, m = (0, s.Z)(), O = (0, i.useRef)(a), [p] = (0, i.useState)(() => new r.ZP), R = d(), g = Math.min(null != E ? E : 1 / 0, R.offsetWidth), C = null != E ? Math.max(0, R.offsetWidth - E) : 0, {
    dirty: v,
    chunkStart: L,
    chunkEnd: D,
    forceUpdateOnChunkChange: M
  } = (0, o.Z)({
    chunkSize: c,
    getScrollerState: d,
    forceUpdate: m
  });
  return O.current = (0, i.useMemo)(() => v > 0 ? O.current : (p.mergeProps({
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
    paddingHorizontal: N,
    marginLeft: C / 2,
    dir: A
  }), p.computeVisibleSections(Math.max(0, L * c), D * c), p.getState()), [v, p, t, n, l, u, _, L, D, c, I, T, h, f, S, N, g, A]), {
    ...O.current,
    masonryComputer: p,
    forceUpdateOnChunkChange: M,
    forceUpdate: m
  }
}