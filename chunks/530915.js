"use strict";
t.d(s, {
  U: function() {
    return N
  }
}), t(47120);
var n, a, r = t(735250),
  l = t(470079),
  i = t(120356),
  o = t.n(i),
  c = t(954955),
  u = t.n(c),
  d = t(717888),
  C = t.n(d),
  E = t(82923),
  f = t(442837),
  m = t(481060),
  p = t(451478),
  g = t(259580),
  h = t(305271),
  I = t(689938),
  _ = t(816124);
let x = {
  mass: 1,
  tension: 200,
  friction: 30,
  clamp: !0,
  easing: E.ZP.Easing.bezier(.15, 0, .25, 1),
  duration: 1e3
};
(a = n || (n = {})).GO_TO_SLIDE = "GO_TO_SLIDE", a.NEXT = "NEXT", a.PREVIOUS = "PREVIOUS";
let T = e => {
    let {
      currentSlideIndex: s,
      numSlides: t,
      onNext: n,
      onPrevious: a,
      onIndicatorClick: l,
      className: i,
      paginationButtonClassName: c
    } = e, u = o()(_.paginationButton, c);
    return (0, r.jsxs)("div", {
      className: o()(_.controls, i),
      children: [(0, r.jsx)(m.Button, {
        look: m.Button.Looks.FILLED,
        color: m.Button.Colors.PRIMARY,
        className: u,
        onClick: a,
        "aria-label": I.Z.Messages.PAGINATION_PREVIOUS,
        children: (0, r.jsx)(g.Z, {
          direction: g.Z.Directions.LEFT
        })
      }), (0, r.jsx)("div", {
        className: _.paginationIndicatorContainer,
        children: C()(t, e => (0, r.jsx)(m.Button, {
          look: m.Button.Looks.BLANK,
          size: m.Button.Sizes.NONE,
          onClick: () => l(e),
          className: o()(_.paginationIndicatorButton, {
            [_.selected]: e === s
          }),
          "aria-label": I.Z.Messages.PAGINATION_SLIDE_LABEL.format({
            pageNumber: e + 1
          }),
          children: (0, r.jsx)("div", {
            className: o()(_.paginationIndicator, {
              [_.selected]: e === s
            })
          })
        }, "slide-indicator-".concat(e)))
      }), (0, r.jsx)(m.Button, {
        look: m.Button.Looks.FILLED,
        color: m.Button.Colors.PRIMARY,
        className: u,
        onClick: n,
        "aria-label": I.Z.Messages.PAGINATION_NEXT,
        children: (0, r.jsx)(g.Z, {
          direction: g.Z.Directions.RIGHT
        })
      })]
    })
  },
  N = e => {
    let {
      carouselId: s,
      items: t = [],
      renderItem: n,
      getItemId: a,
      onIntentionalChange: i,
      onChangeItem: c,
      className: d,
      controlsClassName: C,
      paginationButtonClassName: E,
      springConfig: g,
      delay: I,
      initialPaused: N = !1,
      unidirectional: S = !1,
      analyticsLocations: L
    } = e, {
      trackSlideView: b,
      trackPagination: v
    } = (0, h.X)(s, L), [O, A] = (0, l.useState)(0), [Z, R] = (0, l.useState)(!1), [j, P] = (0, l.useState)(!1), M = l.useCallback(() => P(!0), []), k = l.useCallback(() => P(!1), []), B = (0, f.e7)([p.Z], () => p.Z.isFocused()), y = null != I && !N && !j && B, F = l.useCallback(e => (t.length + O + e) % t.length, [t, O]), D = l.useCallback(u()((e, s, n) => {
      null != n && (null == i || i(t[e], s, e, n), v(e, O, a(e), a(s))), R("GO_TO_SLIDE" === n), null == c || c(t[e], s, e), A(e)
    }, 200), [t, i, c]);
    return (0, l.useEffect)(() => {
      b(O, a(O))
    }, [b, O, a]), (0, l.useEffect)(() => {
      if (y) {
        let e = F(1),
          s = setInterval(() => D(e, O), I);
        return () => clearInterval(s)
      }
    }, [y, I, O, F, D]), (0, r.jsxs)("div", {
      className: o()(_.carouselContainer, d),
      onMouseEnter: M,
      onMouseLeave: k,
      children: [(0, r.jsx)(m.Slides, {
        activeSlide: String(O),
        springConfig: null != g ? g : x,
        directionOverride: S && !Z ? "forwards" : void 0,
        fadeInOut: !0,
        children: t.map((e, s) => (0, r.jsx)(m.Slide, {
          id: String(s),
          children: (0, r.jsx)("div", {
            className: o()(_.carousel),
            children: n(e, s)
          })
        }, String(s)))
      }), t.length > 1 && (0, r.jsx)(T, {
        className: C,
        paginationButtonClassName: E,
        currentSlideIndex: O,
        numSlides: t.length,
        onNext: () => {
          D(F(1), O, "NEXT")
        },
        onPrevious: () => {
          D(F(-1), O, "PREVIOUS")
        },
        onIndicatorClick: e => {
          D(e, O, "GO_TO_SLIDE")
        }
      })]
    })
  }