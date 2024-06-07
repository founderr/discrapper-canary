"use strict";
n.r(t), n.d(t, {
  createMasonryListScroller: function() {
    return _
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n.n(r),
  a = n("120356"),
  o = n.n(a),
  l = n("84735"),
  u = n("562701"),
  d = n("689197");

function _(e, t, n) {
  let a = (0, u.getScrollbarSpecs)(e),
    _ = new Map,
    c = new n(e => {
      e.forEach(e => {
        var t;
        let {
          target: n
        } = e;
        null === (t = _.get(n)) || void 0 === t || t(e)
      })
    });
  return (0, r.forwardRef)(function(n, E) {
    let {
      onScroll: I,
      dir: T = "ltr",
      sections: f,
      columns: S,
      getItemKey: h,
      getItemHeight: A,
      getSectionHeight: m,
      chunkSize: N,
      renderSection: p,
      renderItem: O,
      getSectionProps: C,
      itemGutter: R,
      removeEdgeItemGutters: g,
      sectionGutter: L,
      padding: v,
      paddingVertical: D,
      paddingHorizontal: M,
      fade: y = !1,
      className: P,
      style: U,
      maxContentWidth: b,
      ...G
    } = n, w = s().useRef(null), k = s().useRef(null), [B, V] = s().useState(!1), {
      scrollerRef: x,
      scrollerState: F,
      getScrollerState: H
    } = (0, u.useCachedScrollerState)();
    (0, u.usePaddingFixes)({
      scrollerRef: x,
      className: P,
      specs: a,
      orientation: "vertical",
      dir: T
    });
    let {
      forceUpdateOnChunkChange: Y,
      coordsMap: j,
      gridData: W,
      visibleSections: K,
      totalHeight: z,
      forceUpdate: Z,
      masonryComputer: X
    } = (0, u.useVirtualizedMasonryState)({
      sections: f,
      columns: S,
      getItemKey: h,
      getItemHeight: A,
      getSectionHeight: m,
      chunkSize: N,
      itemGutter: R,
      removeEdgeItemGutters: g,
      sectionGutter: L,
      padding: v,
      paddingVertical: D,
      paddingHorizontal: M,
      getScrollerState: H,
      dir: T,
      maxBufferWidth: b
    }), Q = (0, r.useCallback)(function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
      e > F.current.dirty && (F.current.dirty = e, 2 === e ? Z() : Y(1))
    }, [Y, F, Z]), q = (0, u.useScrollSpring)(x), J = (0, r.useCallback)(() => X.itemGrid, [X]), $ = (0, r.useCallback)(() => X.coordsMap, [X]), ee = s().useCallback(() => Q(), [Q]);
    (0, u.useResizeObserverSubscription)({
      ref: x,
      key: "container",
      onUpdate: ee,
      resizeObserver: c,
      listenerMap: _
    }), (0, r.useImperativeHandle)(E, () => ({
      getScrollerNode: () => x.current,
      getItemGrid: J,
      getCoordsMap: $,
      getScrollerState: H,
      ...(0, u.getAnimatedScrollHelpers)(x, H, q)
    }), [x, H, J, q, $]);
    let et = (0, r.useCallback)(e => {
      Q(1), null == w.current ? V(!0) : clearTimeout(w.current), w.current = setTimeout(() => {
        w.current = null, V(!1)
      }, 200), null != I && I(e)
    }, [I, Q]);
    return (0, i.jsx)("div", {
      ref: x,
      onScroll: et,
      className: o()(P, {
        [e]: !0,
        [t]: y,
        [d.scrolling]: B
      }),
      style: (0, u.getMergedOrientationStyles)(U),
      ...G,
      children: (0, r.useMemo)(() => (0, i.jsx)(l.FocusRingScope, {
        containerRef: k,
        children: (0, i.jsx)("div", {
          style: {
            height: z
          },
          className: d.content,
          ref: k,
          children: Object.keys(K).map(e => {
            let t = (0, u.getMasonryListSectionIndex)(e),
              n = j[e],
              r = K[e],
              s = j[(0, u.getMasonryListSectionHeaderKey)(t)],
              a = null == C ? void 0 : C(t);
            return null != n && null != r ? (0, i.jsxs)("div", {
              style: n,
              ...a,
              children: [null != p && null != s && p(t, s, e), r.map(e => {
                let [t, n, i] = e, r = j[t];
                return null != r ? O(n, i, r, t, W) : null
              })]
            }, e) : null
          })
        })
      }), [K, O, p, j, z, C, W])
    })
  })
}