"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("47120");
var i = n("470079"),
  r = n("663507"),
  s = n("924428"),
  a = n("151973");
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
  let {
    sections: t,
    columns: n,
    getItemKey: l,
    getItemHeight: u,
    getSectionHeight: d,
    chunkSize: _ = 250,
    getScrollerState: c,
    maxBufferWidth: E,
    itemGutter: I,
    removeEdgeItemGutters: T,
    sectionGutter: f,
    padding: S,
    paddingVertical: h,
    paddingHorizontal: A,
    dir: m
  } = e, N = (0, s.default)(), p = (0, i.useRef)(o), [O] = (0, i.useState)(() => new r.default), C = c(), R = Math.min(null != E ? E : 1 / 0, C.offsetWidth), g = null != E ? Math.max(0, C.offsetWidth - E) : 0, {
    dirty: L,
    chunkStart: v,
    chunkEnd: D,
    forceUpdateOnChunkChange: M
  } = (0, a.default)({
    chunkSize: _,
    getScrollerState: c,
    forceUpdate: N
  });
  return p.current = (0, i.useMemo)(() => L > 0 ? p.current : (O.mergeProps({
    sections: t,
    columns: n,
    getItemKey: l,
    getItemHeight: u,
    getSectionHeight: d,
    bufferWidth: R,
    itemGutter: I,
    removeEdgeItemGutters: T,
    sectionGutter: f,
    padding: S,
    paddingVertical: h,
    paddingHorizontal: A,
    marginLeft: g / 2,
    dir: m
  }), O.computeVisibleSections(Math.max(0, v * _), D * _), O.getState()), [L, O, t, n, l, u, d, v, D, _, I, T, f, S, h, A, R, m]), {
    ...p.current,
    masonryComputer: O,
    forceUpdateOnChunkChange: M,
    forceUpdate: N
  }
}