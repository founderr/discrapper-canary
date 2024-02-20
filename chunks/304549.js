"use strict";
n.r(t), n.d(t, {
  createMasonryListScroller: function() {
    return d
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  s = n.n(r),
  a = n("414456"),
  o = n.n(a),
  l = n("718776"),
  u = n("462977"),
  c = n("38879");

function d(e, t, n) {
  let a = (0, u.getScrollbarSpecs)(e),
    d = new Map,
    p = new n(e => {
      e.forEach(e => {
        var t;
        let {
          target: n
        } = e;
        null === (t = d.get(n)) || void 0 === t || t(e)
      })
    });
  return (0, r.forwardRef)(function(n, h) {
    let {
      onScroll: f,
      dir: E = "ltr",
      sections: _,
      columns: m,
      getItemKey: S,
      getItemHeight: g,
      getSectionHeight: T,
      chunkSize: I,
      renderSection: v,
      renderItem: C,
      getSectionProps: A,
      itemGutter: R,
      removeEdgeItemGutters: N,
      sectionGutter: y,
      padding: O,
      paddingVertical: D,
      paddingHorizontal: b,
      fade: P = !1,
      className: L,
      style: M,
      ...U
    } = n, w = s.useRef(null), k = s.useRef(null), [G, x] = s.useState(!1), {
      scrollerRef: F,
      scrollerState: V,
      getScrollerState: B
    } = (0, u.useCachedScrollerState)();
    (0, u.usePaddingFixes)({
      scrollerRef: F,
      className: L,
      specs: a,
      orientation: "vertical",
      dir: E
    });
    let {
      forceUpdateOnChunkChange: H,
      coordsMap: j,
      gridData: Y,
      visibleSections: W,
      totalHeight: K,
      forceUpdate: z,
      masonryComputer: q
    } = (0, u.useVirtualizedMasonryState)({
      sections: _,
      columns: m,
      getItemKey: S,
      getItemHeight: g,
      getSectionHeight: T,
      chunkSize: I,
      itemGutter: R,
      removeEdgeItemGutters: N,
      sectionGutter: y,
      padding: O,
      paddingVertical: D,
      paddingHorizontal: b,
      getScrollerState: B,
      dir: E
    }), Q = (0, r.useCallback)(function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
      e > V.current.dirty && (V.current.dirty = e, 2 === e ? z() : H(1))
    }, [H, V, z]), X = (0, u.useScrollSpring)(F), Z = (0, r.useCallback)(() => q.itemGrid, [q]), J = (0, r.useCallback)(() => q.coordsMap, [q]), $ = s.useCallback(() => Q(), [Q]);
    (0, u.useResizeObserverSubscription)({
      ref: F,
      key: "container",
      onUpdate: $,
      resizeObserver: p,
      listenerMap: d
    }), (0, r.useImperativeHandle)(h, () => ({
      getScrollerNode: () => F.current,
      getItemGrid: Z,
      getCoordsMap: J,
      getScrollerState: B,
      ...(0, u.getAnimatedScrollHelpers)(F, B, X)
    }), [F, B, Z, X, J]);
    let ee = (0, r.useCallback)(e => {
      Q(1), null == w.current ? x(!0) : clearTimeout(w.current), w.current = setTimeout(() => {
        w.current = null, x(!1)
      }, 200), null != f && f(e)
    }, [f, Q]);
    return (0, i.jsx)("div", {
      ref: F,
      onScroll: ee,
      className: o(L, {
        [e]: !0,
        [t]: P,
        [c.scrolling]: G
      }),
      style: (0, u.getMergedOrientationStyles)(M),
      ...U,
      children: (0, r.useMemo)(() => (0, i.jsx)(l.FocusRingScope, {
        containerRef: k,
        children: (0, i.jsx)("div", {
          style: {
            height: K
          },
          className: c.content,
          ref: k,
          children: Object.keys(W).map(e => {
            let t = (0, u.getMasonryListSectionIndex)(e),
              n = j[e],
              r = W[e],
              s = j[(0, u.getMasonryListSectionHeaderKey)(t)],
              a = null == A ? void 0 : A(t);
            return null != n && null != r ? (0, i.jsxs)("div", {
              style: n,
              ...a,
              children: [null != v && null != s && v(t, s, e), r.map(e => {
                let [t, n, i] = e, r = j[t];
                return null != r ? C(n, i, r, t, Y) : null
              })]
            }, e) : null
          })
        })
      }), [W, C, v, j, K, A, Y])
    })
  })
}