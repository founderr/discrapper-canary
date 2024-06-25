"use strict";
s.d(t, {
  U: function() {
    return L
  }
}), s(47120);
var n, r, a = s(735250),
  i = s(470079),
  l = s(120356),
  o = s.n(l),
  c = s(954955),
  u = s.n(c),
  d = s(717888),
  C = s.n(d),
  f = s(82923),
  p = s(442837),
  g = s(481060),
  E = s(451478),
  m = s(259580),
  h = s(305271),
  x = s(689938),
  I = s(247564);
let _ = {
  mass: 1,
  tension: 200,
  friction: 30,
  clamp: !0,
  easing: f.ZP.Easing.bezier(.15, 0, .25, 1),
  duration: 1e3
};
(r = n || (n = {})).GO_TO_SLIDE = "GO_TO_SLIDE", r.NEXT = "NEXT", r.PREVIOUS = "PREVIOUS";
let T = e => {
    let {
      currentSlideIndex: t,
      numSlides: s,
      onNext: n,
      onPrevious: r,
      onIndicatorClick: i,
      className: l,
      paginationButtonClassName: c
    } = e, u = o()(I.paginationButton, c);
    return (0, a.jsxs)("div", {
      className: o()(I.controls, l),
      children: [(0, a.jsx)(g.Button, {
        look: g.Button.Looks.FILLED,
        color: g.Button.Colors.PRIMARY,
        className: u,
        onClick: r,
        "aria-label": x.Z.Messages.PAGINATION_PREVIOUS,
        children: (0, a.jsx)(m.Z, {
          direction: m.Z.Directions.LEFT
        })
      }), (0, a.jsx)("div", {
        className: I.paginationIndicatorContainer,
        children: C()(s, e => (0, a.jsx)(g.Button, {
          look: g.Button.Looks.BLANK,
          size: g.Button.Sizes.NONE,
          onClick: () => i(e),
          className: o()(I.paginationIndicatorButton, {
            [I.selected]: e === t
          }),
          "aria-label": x.Z.Messages.PAGINATION_SLIDE_LABEL.format({
            pageNumber: e + 1
          }),
          children: (0, a.jsx)("div", {
            className: o()(I.paginationIndicator, {
              [I.selected]: e === t
            })
          })
        }, "slide-indicator-".concat(e)))
      }), (0, a.jsx)(g.Button, {
        look: g.Button.Looks.FILLED,
        color: g.Button.Colors.PRIMARY,
        className: u,
        onClick: n,
        "aria-label": x.Z.Messages.PAGINATION_NEXT,
        children: (0, a.jsx)(m.Z, {
          direction: m.Z.Directions.RIGHT
        })
      })]
    })
  },
  L = e => {
    let {
      carouselId: t,
      items: s = [],
      renderItem: n,
      getItemId: r,
      onIntentionalChange: l,
      onChangeItem: c,
      className: d,
      controlsClassName: C,
      paginationButtonClassName: f,
      springConfig: m,
      delay: x,
      initialPaused: L = !1,
      unidirectional: N = !1,
      analyticsLocations: S
    } = e, {
      trackSlideView: b,
      trackPagination: v
    } = (0, h.X)(t, S), [O, Z] = (0, i.useState)(0), [A, R] = (0, i.useState)(!1), [j, P] = (0, i.useState)(!1), M = i.useCallback(() => P(!0), []), k = i.useCallback(() => P(!1), []), y = (0, p.e7)([E.Z], () => E.Z.isFocused()), B = null != x && !L && !j && y, F = i.useCallback(e => (s.length + O + e) % s.length, [s, O]), D = i.useCallback(u()((e, t, n) => {
      null != n && (null == l || l(s[e], t, e, n), v(e, O, r(e), r(t))), R("GO_TO_SLIDE" === n), null == c || c(s[e], t, e), Z(e)
    }, 200), [s, l, c]);
    return (0, i.useEffect)(() => {
      b(O, r(O))
    }, [b, O, r]), (0, i.useEffect)(() => {
      if (B) {
        let e = F(1),
          t = setInterval(() => D(e, O), x);
        return () => clearInterval(t)
      }
    }, [B, x, O, F, D]), (0, a.jsxs)("div", {
      className: o()(I.carouselContainer, d),
      onMouseEnter: M,
      onMouseLeave: k,
      children: [(0, a.jsx)(g.Slides, {
        activeSlide: String(O),
        springConfig: null != m ? m : _,
        directionOverride: N && !A ? "forwards" : void 0,
        fadeInOut: !0,
        children: s.map((e, t) => (0, a.jsx)(g.Slide, {
          id: String(t),
          children: (0, a.jsx)("div", {
            className: o()(I.carousel),
            children: n(e, t)
          })
        }, String(t)))
      }), s.length > 1 && (0, a.jsx)(T, {
        className: C,
        paginationButtonClassName: f,
        currentSlideIndex: O,
        numSlides: s.length,
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