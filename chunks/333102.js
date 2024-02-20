"use strict";
n.r(t), n.d(t, {
  createManagedReactiveScroller: function() {
    return c
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("718776"),
  l = n("942005"),
  u = n("766361");

function c(e, t) {
  let n = new Map,
    s = new t(e => {
      e.forEach(e => {
        var t;
        let {
          target: i
        } = e;
        null === (t = n.get(i)) || void 0 === t || t(e)
      })
    });
  return r.forwardRef(function(t, c) {
    let {
      children: d,
      className: p,
      onResize: h,
      contentClassName: f,
      onScroll: E,
      dir: _ = "ltr",
      fade: m = !1,
      customTheme: S = !1,
      style: g,
      ...T
    } = t, I = r.useRef(null), v = r.useRef(null), [C, A] = r.useState(!1), {
      scrollerRef: R,
      getScrollerState: N
    } = (0, l.useUncachedScrollerState)(), y = (0, l.useScrollSpring)(R);
    r.useImperativeHandle(c, () => ({
      getScrollerNode: () => R.current,
      isScrolling: () => null != I.current,
      getScrollerState: N,
      ...(0, l.getAnimatedScrollHelpers)(R, N, y)
    }), [R, N, y]);
    let O = r.useCallback(e => {
      null == I.current ? A(!0) : clearTimeout(I.current), I.current = setTimeout(() => {
        I.current = null, A(!1)
      }, 200), null != E && E(e)
    }, [E]);
    return r.useEffect(() => () => clearTimeout(I.current), []), (0, l.useResizeObserverSubscription)({
      ref: R,
      key: "container",
      onUpdate: h,
      resizeObserver: s,
      listenerMap: n
    }), (0, l.useResizeObserverSubscription)({
      ref: v,
      key: "content",
      onUpdate: h,
      resizeObserver: s,
      listenerMap: n
    }), (0, i.jsx)("div", {
      ref: R,
      className: a(p, {
        [u.fade]: m,
        [u.customTheme]: S,
        [e]: !0,
        [u.managedReactiveScroller]: !0,
        [u.scrolling]: C && m
      }),
      style: g,
      dir: _,
      onScroll: O,
      ...T,
      children: (0, i.jsx)(o.FocusRingScope, {
        containerRef: v,
        children: (0, i.jsxs)("div", {
          ref: v,
          className: a(f, u.content),
          children: [d, C && (0, i.jsx)("div", {
            className: u.pointerCover
          })]
        })
      })
    })
  })
}