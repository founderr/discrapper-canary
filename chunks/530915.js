"use strict";
s.r(t), s.d(t, {
  SlideCarousel: function() {
    return L
  }
}), s("47120");
var a, l, n = s("735250"),
  r = s("470079"),
  i = s.n(r),
  o = s("120356"),
  u = s.n(o),
  c = s("954955"),
  d = s.n(c),
  f = s("717888"),
  C = s.n(f),
  E = s("82923"),
  p = s("442837"),
  m = s("481060"),
  g = s("451478"),
  S = s("259580"),
  h = s("305271"),
  I = s("689938"),
  T = s("816124");
let x = {
  mass: 1,
  tension: 200,
  friction: 30,
  clamp: !0,
  easing: E.default.Easing.bezier(.15, 0, .25, 1),
  duration: 1600
};
(l = a || (a = {})).GO_TO_SLIDE = "GO_TO_SLIDE", l.NEXT = "NEXT", l.PREVIOUS = "PREVIOUS";
let _ = e => {
    let {
      currentSlideIndex: t,
      numSlides: s,
      onNext: a,
      onPrevious: l,
      onIndicatorClick: r,
      className: i,
      paginationButtonClassName: o
    } = e, c = u()(T.paginationButton, o);
    return (0, n.jsxs)("div", {
      className: u()(T.controls, i),
      children: [(0, n.jsx)(m.Button, {
        look: m.Button.Looks.FILLED,
        color: m.Button.Colors.PRIMARY,
        className: c,
        onClick: l,
        "aria-label": I.default.Messages.PAGINATION_PREVIOUS,
        children: (0, n.jsx)(S.default, {
          direction: S.default.Directions.LEFT
        })
      }), (0, n.jsx)("div", {
        className: T.paginationIndicatorContainer,
        children: C()(s, e => (0, n.jsx)(m.Button, {
          look: m.Button.Looks.BLANK,
          size: m.Button.Sizes.NONE,
          onClick: () => r(e),
          className: u()(T.paginationIndicatorButton, {
            [T.selected]: e === t
          }),
          "aria-label": I.default.Messages.PAGINATION_SLIDE_LABEL.format({
            pageNumber: e + 1
          }),
          children: (0, n.jsx)("div", {
            className: u()(T.paginationIndicator, {
              [T.selected]: e === t
            })
          })
        }, "slide-indicator-".concat(e)))
      }), (0, n.jsx)(m.Button, {
        look: m.Button.Looks.FILLED,
        color: m.Button.Colors.PRIMARY,
        className: c,
        onClick: a,
        "aria-label": I.default.Messages.PAGINATION_NEXT,
        children: (0, n.jsx)(S.default, {
          direction: S.default.Directions.RIGHT
        })
      })]
    })
  },
  L = e => {
    let {
      carouselId: t,
      items: s = [],
      renderItem: a,
      getItemId: l,
      onIntentionalChange: o,
      onChangeItem: c,
      className: f,
      controlsClassName: C,
      paginationButtonClassName: E,
      springConfig: S,
      analyticsLocations: I,
      delay: L,
      initialPaused: N = !1,
      unidirectional: b = !1
    } = e, {
      trackSlideView: R
    } = (0, h.useSlideCarouselAnalytics)(t, I), [v, A] = (0, r.useState)(0), [P, O] = (0, r.useState)(!1), [j, y] = (0, r.useState)(!1), M = i().useCallback(() => y(!0), []), k = i().useCallback(() => y(!1), []), B = (0, p.useStateFromStores)([g.default], () => g.default.isFocused()), D = null != L && !N && !j && B, F = i().useCallback(e => (s.length + v + e) % s.length, [s, v]), U = i().useCallback(d()((e, t, a) => {
      null != a && (null == o || o(s[e], t, e, a)), O("GO_TO_SLIDE" === a), null == c || c(s[e], t, e), A(e)
    }, 500), [s, o, c]);
    return (0, r.useEffect)(() => {
      R(v, l(v))
    }, [R, v, l]), (0, r.useEffect)(() => {
      if (D) {
        let e = F(1),
          t = setInterval(() => U(e, v), L);
        return () => clearInterval(t)
      }
    }, [D, L, v, F, U]), (0, n.jsxs)("div", {
      className: u()(T.carouselContainer, f),
      onMouseEnter: M,
      onMouseLeave: k,
      children: [(0, n.jsx)(m.Slides, {
        activeSlide: String(v),
        springConfig: null != S ? S : x,
        directionOverride: b && !P ? "forwards" : void 0,
        fadeInOut: !0,
        children: s.map((e, t) => (0, n.jsx)(m.Slide, {
          id: String(t),
          children: (0, n.jsx)("div", {
            className: u()(T.carousel),
            children: a(e, t)
          })
        }, String(t)))
      }), s.length > 1 && (0, n.jsx)(_, {
        className: C,
        paginationButtonClassName: E,
        currentSlideIndex: v,
        numSlides: s.length,
        onNext: () => {
          U(F(1), v, "NEXT")
        },
        onPrevious: () => {
          U(F(-1), v, "PREVIOUS")
        },
        onIndicatorClick: e => {
          U(e, v, "GO_TO_SLIDE")
        }
      })]
    })
  }