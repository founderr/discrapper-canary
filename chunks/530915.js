"use strict";
t.d(s, {
  U: function() {
    return N
  }
}), t(47120);
var n, a, r = t(735250),
  i = t(470079),
  l = t(120356),
  o = t.n(l),
  c = t(954955),
  u = t.n(c),
  d = t(717888),
  C = t.n(d),
  f = t(82923),
  E = t(442837),
  p = t(481060),
  g = t(451478),
  m = t(259580),
  x = t(305271),
  h = t(689938),
  I = t(247564);
let _ = {
  mass: 1,
  tension: 200,
  friction: 30,
  clamp: !0,
  easing: f.ZP.Easing.bezier(.15, 0, .25, 1),
  duration: 1e3
};
(a = n || (n = {})).GO_TO_SLIDE = "GO_TO_SLIDE", a.NEXT = "NEXT", a.PREVIOUS = "PREVIOUS";
let T = e => {
    let {
      currentSlideIndex: s,
      numSlides: t,
      onNext: n,
      onPrevious: a,
      onIndicatorClick: i,
      className: l,
      paginationButtonClassName: c
    } = e, u = o()(I.paginationButton, c);
    return (0, r.jsxs)("div", {
      className: o()(I.controls, l),
      children: [(0, r.jsx)(p.Button, {
        look: p.Button.Looks.FILLED,
        color: p.Button.Colors.PRIMARY,
        className: u,
        onClick: a,
        "aria-label": h.Z.Messages.PAGINATION_PREVIOUS,
        children: (0, r.jsx)(m.Z, {
          direction: m.Z.Directions.LEFT
        })
      }), (0, r.jsx)("div", {
        className: I.paginationIndicatorContainer,
        children: C()(t, e => (0, r.jsx)(p.Button, {
          look: p.Button.Looks.BLANK,
          size: p.Button.Sizes.NONE,
          onClick: () => i(e),
          className: o()(I.paginationIndicatorButton, {
            [I.selected]: e === s
          }),
          "aria-label": h.Z.Messages.PAGINATION_SLIDE_LABEL.format({
            pageNumber: e + 1
          }),
          children: (0, r.jsx)("div", {
            className: o()(I.paginationIndicator, {
              [I.selected]: e === s
            })
          })
        }, "slide-indicator-".concat(e)))
      }), (0, r.jsx)(p.Button, {
        look: p.Button.Looks.FILLED,
        color: p.Button.Colors.PRIMARY,
        className: u,
        onClick: n,
        "aria-label": h.Z.Messages.PAGINATION_NEXT,
        children: (0, r.jsx)(m.Z, {
          direction: m.Z.Directions.RIGHT
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
      onIntentionalChange: l,
      onChangeItem: c,
      className: d,
      controlsClassName: C,
      paginationButtonClassName: f,
      springConfig: m,
      delay: h,
      initialPaused: N = !1,
      unidirectional: L = !1,
      analyticsLocations: S
    } = e, {
      trackSlideView: b,
      trackPagination: v
    } = (0, x.X)(s, S), [O, A] = (0, i.useState)(0), [Z, R] = (0, i.useState)(!1), [j, P] = (0, i.useState)(!1), M = i.useCallback(() => P(!0), []), k = i.useCallback(() => P(!1), []), B = (0, E.e7)([g.Z], () => g.Z.isFocused()), y = null != h && !N && !j && B, F = i.useCallback(e => (t.length + O + e) % t.length, [t, O]), D = i.useCallback(u()((e, s, n) => {
      null != n && (null == l || l(t[e], s, e, n), v(e, O, a(e), a(s))), R("GO_TO_SLIDE" === n), null == c || c(t[e], s, e), A(e)
    }, 200), [t, l, c]);
    return (0, i.useEffect)(() => {
      b(O, a(O))
    }, [b, O, a]), (0, i.useEffect)(() => {
      if (y) {
        let e = F(1),
          s = setInterval(() => D(e, O), h);
        return () => clearInterval(s)
      }
    }, [y, h, O, F, D]), (0, r.jsxs)("div", {
      className: o()(I.carouselContainer, d),
      onMouseEnter: M,
      onMouseLeave: k,
      children: [(0, r.jsx)(p.Slides, {
        activeSlide: String(O),
        springConfig: null != m ? m : _,
        directionOverride: L && !Z ? "forwards" : void 0,
        fadeInOut: !0,
        children: t.map((e, s) => (0, r.jsx)(p.Slide, {
          id: String(s),
          children: (0, r.jsx)("div", {
            className: o()(I.carousel),
            children: n(e, s)
          })
        }, String(s)))
      }), t.length > 1 && (0, r.jsx)(T, {
        className: C,
        paginationButtonClassName: f,
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