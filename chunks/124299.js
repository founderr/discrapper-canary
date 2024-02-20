"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007"), n("424973");
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("446662"),
  l = n("699706");
let u = r.memo(r.forwardRef((e, t) => {
  let {
    onScroll: n,
    onResize: s,
    listPadding: u = [0, 0, 0, 0],
    renderRow: c,
    renderSection: d,
    renderSectionHeader: p,
    renderSectionFooter: h,
    renderListHeader: f,
    rowCount: E,
    rowCountBySection: _,
    rowHeight: m,
    sectionMarginBottom: S,
    sectionHeaderHeight: g,
    sectionFooterHeight: T,
    listHeaderHeight: I,
    stickyHeaders: v = !1,
    className: C,
    hideScrollbar: A = !1,
    fade: R = !1,
    initialScrollTop: N = 0,
    role: y = "list"
  } = e, [O, D] = r.useState(-1), [b, P] = r.useState(-1), L = r.useRef(null), M = r.useRef(0), U = r.useRef(-1);
  r.useLayoutEffect(() => {
    var e;
    let t = null === (e = L.current) || void 0 === e ? void 0 : e.getScrollerNode();
    null != t && (t.scrollTop = N)
  }, []);
  let w = r.useCallback(() => {
      let e = "function" == typeof I ? I() : I;
      return null == e ? 0 : e
    }, [I]),
    k = r.useCallback((e, t, n) => "function" == typeof m ? m(n, {
      sectionIndex: e,
      sectionRowIndex: t
    }) : m, [m]),
    G = r.useCallback(e => {
      let t = "function" == typeof g ? g(e) : g;
      return null == t ? 0 : t
    }, [g]),
    x = r.useCallback(e => {
      let t = "function" == typeof T ? T(e) : T;
      return null == t ? 0 : t
    }, [T]),
    F = r.useCallback(e => {
      let t = "function" == typeof S ? S(e) : S;
      return null == t ? 0 : t
    }, [S]),
    V = r.useRef([]),
    B = r.useRef([]),
    {
      totalHeight: H,
      rowDescriptors: j,
      sectionDescriptors: Y
    } = r.useMemo(() => {
      let e = 0,
        t = null != _,
        n = t ? _.length : 1,
        i = u[0],
        r = [],
        s = [];
      i += w();
      for (let a = 0; a < n; a++) {
        let n = t ? _[a] : E,
          o = (null == _ ? void 0 : _[a]) !== 0;
        s[a] = {
          firstRowIndex: e,
          offset: {
            top: i,
            bottom: -1
          }
        }, i += G(a);
        for (let t = 0; t < n; t++) {
          let n = o ? k(a, t, e) : 0,
            s = i + n,
            l = {
              top: i,
              bottom: s
            };
          r[e] = {
            sectionIndex: a,
            offset: l
          }, i = s, e++
        }
        i += x(a) + F(a), s[a].offset.bottom = i
      }
      return {
        totalHeight: i += u[2],
        rowDescriptors: r,
        sectionDescriptors: s
      }
    }, [k, x, G, F, u, E, _, w]);
  V.current = Y, B.current = j;
  let W = r.useCallback(() => {
    var e;
    let t = null === (e = L.current) || void 0 === e ? void 0 : e.getScrollerNode();
    if (null == t) return;
    let {
      offsetWidth: n,
      offsetHeight: i,
      scrollTop: r
    } = t;
    P(i), D(r), null == s || s({
      width: n,
      height: i
    })
  }, [s]);
  r.useLayoutEffect(() => {
    -1 === b && W()
  }, [b, W]), r.useEffect(() => {
    var e;
    let t = null === (e = L.current) || void 0 === e ? void 0 : e.getScrollerNode(),
      n = null == t ? void 0 : t.ownerDocument.defaultView;
    if (null == t || null == n) return;
    let i = new n.ResizeObserver(W);
    return i.observe(t), () => i.disconnect()
  }, [W]);
  let K = r.useCallback(() => {
    var e;
    let t = null === (e = L.current) || void 0 === e ? void 0 : e.getScrollerNode();
    null != t && (window.cancelAnimationFrame(U.current), U.current = window.requestAnimationFrame(() => {
      let {
        scrollTop: e
      } = t;
      M.current = e, null == n || n(e), D(e)
    }))
  }, [n]);
  r.useImperativeHandle(t, () => ({
    scrollTo: function(e) {
      var t;
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
          animate: i = !1
        } = n;
      null === (t = L.current) || void 0 === t || t.scrollTo({
        to: e,
        animate: i
      })
    },
    scrollRowIntoView: function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
          animate: n = !1,
          offset: i = 0
        } = t,
        r = B.current[e];
      null != r && window.requestAnimationFrame(() => {
        var t, s;
        let {
          sectionIndex: a,
          offset: {
            top: o,
            bottom: l
          }
        } = r, u = G(a), c = o - (v ? u : 0) - i <= M.current, d = l + i >= M.current + b;
        if (c) {
          let r = M.current + u - o,
            s = v ? M.current - r : o;
          null === (t = L.current) || void 0 === t || t.scrollTo({
            to: 0 === e ? 0 : s - i,
            animate: n
          })
        } else if (d) {
          let e = l - (M.current + b);
          null === (s = L.current) || void 0 === s || s.scrollTo({
            to: M.current + e + i,
            animate: n
          })
        }
      })
    },
    scrollToSectionTop: function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
          animate: n = !1,
          offset: i = 0
        } = t,
        r = V.current[e];
      null != r && window.requestAnimationFrame(() => {
        var t;
        null === (t = L.current) || void 0 === t || t.scrollTo({
          to: (0 === e ? 0 : r.offset.top) + i,
          animate: n
        })
      })
    },
    getListDimensions: () => ({
      height: b,
      totalHeight: H
    }),
    getSectionDescriptors: () => V.current,
    getRowDescriptors: () => B.current,
    getScrollerNode: () => {
      var e;
      return null === (e = L.current) || void 0 === e ? void 0 : e.getScrollerNode()
    },
    scrollIntoViewNode: e => {
      var t;
      return null === (t = L.current) || void 0 === t ? void 0 : t.scrollIntoViewNode({
        node: e
      })
    }
  }), [G, v, H, b]);
  let {
    visibleItems: z,
    listOffset: q
  } = r.useMemo(() => {
    if (-1 === b || -1 === O) return {
      visibleItems: null,
      listOffset: 0
    };
    let e = O + b,
      t = 0,
      n = u[0],
      i = [],
      r = w();
    null != f && O < r ? i.push(f()) : n += r;
    for (let r = 0; r < Y.length; r++) {
      let s = Y[r],
        {
          firstRowIndex: a,
          offset: {
            top: o,
            bottom: l
          }
        } = s,
        u = l - o;
      if (0 === u) continue;
      let f = G(r),
        E = x(r),
        _ = F(r);
      if (l <= O) n = l;
      else if (l > O && o < e) {
        t = a;
        let s = [],
          l = 0,
          m = 0,
          S = o + f,
          g = S >= O && o <= e;
        for (null != p && (v || g) && s.push(p(r)), !g && !v && (n += f); l + f + E < u - _;) {
          let i = k(r, m, t),
            a = o + l + f,
            u = a + i;
          if (u <= O) n = u - (v ? f : 0);
          else if (u > O && a < e) s.push(c(t, {
            sectionIndex: r,
            sectionRowIndex: m
          }));
          else break;
          l += i, m++, t++
        }
        let T = o + f + l,
          I = T + E,
          C = I >= O && T <= e;
        null != h && C && s.push(h(r)), null != d ? i.push(d(r, s)) : i = [...i, ...s]
      } else break
    }
    return {
      visibleItems: i,
      listOffset: n
    }
  }, [k, x, G, F, u, c, d, h, p, O, Y, v, f, w, b]), Q = r.useMemo(() => {
    var e, t, n;
    return {
      top: q,
      right: null !== (e = null == u ? void 0 : u[1]) && void 0 !== e ? e : 0,
      bottom: null !== (t = null == u ? void 0 : u[2]) && void 0 !== t ? t : 0,
      left: null !== (n = null == u ? void 0 : u[3]) && void 0 !== n ? n : 0
    }
  }, [q, u]), X = r.useMemo(() => ({
    height: H
  }), [H]), Z = A ? o.AdvancedScrollerNone : o.AdvancedScrollerThin;
  return (0, i.jsxs)(Z, {
    fade: R,
    className: a(l.scroller, C),
    ref: L,
    onScroll: K,
    children: [(0, i.jsx)("div", {
      role: y,
      className: l.listItems,
      style: Q,
      children: z
    }), (0, i.jsx)("div", {
      className: l.listHeight,
      style: X
    })]
  })
}));
var c = u