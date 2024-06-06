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
  _ = s("816124");
let T = {
  mass: 1,
  tension: 200,
  friction: 30,
  clamp: !0,
  easing: E.default.Easing.bezier(.15, 0, .25, 1),
  duration: 1600
};
(l = a || (a = {})).GO_TO_SLIDE = "GO_TO_SLIDE", l.NEXT = "NEXT", l.PREVIOUS = "PREVIOUS";
let x = e => {
    let {
      currentSlideIndex: t,
      numSlides: s,
      onNext: a,
      onPrevious: l,
      onIndicatorClick: r,
      className: i,
      paginationButtonClassName: o
    } = e, c = u()(_.paginationButton, o);
    return (0, n.jsxs)("div", {
      className: u()(_.controls, i),
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
        className: _.paginationIndicatorContainer,
        children: C()(s, e => (0, n.jsx)(m.Button, {
          look: m.Button.Looks.BLANK,
          size: m.Button.Sizes.NONE,
          onClick: () => r(e),
          className: u()(_.paginationIndicatorButton, {
            [_.selected]: e === t
          }),
          "aria-label": I.default.Messages.PAGINATION_SLIDE_LABEL.format({
            pageNumber: e + 1
          }),
          children: (0, n.jsx)("div", {
            className: u()(_.paginationIndicator, {
              [_.selected]: e === t
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
      delay: I,
      initialPaused: L = !1,
      unidirectional: N = !1,
      analyticsLocations: b
    } = e, {
      trackSlideView: R,
      trackPagination: v
    } = (0, h.useSlideCarouselAnalytics)(t, b), [A, P] = (0, r.useState)(0), [O, j] = (0, r.useState)(!1), [y, M] = (0, r.useState)(!1), k = i().useCallback(() => M(!0), []), B = i().useCallback(() => M(!1), []), D = (0, p.useStateFromStores)([g.default], () => g.default.isFocused()), F = null != I && !L && !y && D, U = i().useCallback(e => (s.length + A + e) % s.length, [s, A]), H = i().useCallback(d()((e, t, a) => {
      null != a && (null == o || o(s[e], t, e, a), v(e, A, l(e), l(t))), j("GO_TO_SLIDE" === a), null == c || c(s[e], t, e), P(e)
    }, 500), [s, o, c]);
    return (0, r.useEffect)(() => {
      R(A, l(A))
    }, [R, A, l]), (0, r.useEffect)(() => {
      if (F) {
        let e = U(1),
          t = setInterval(() => H(e, A), I);
        return () => clearInterval(t)
      }
    }, [F, I, A, U, H]), (0, n.jsxs)("div", {
      className: u()(_.carouselContainer, f),
      onMouseEnter: k,
      onMouseLeave: B,
      children: [(0, n.jsx)(m.Slides, {
        activeSlide: String(A),
        springConfig: null != S ? S : T,
        directionOverride: N && !O ? "forwards" : void 0,
        fadeInOut: !0,
        children: s.map((e, t) => (0, n.jsx)(m.Slide, {
          id: String(t),
          children: (0, n.jsx)("div", {
            className: u()(_.carousel),
            children: a(e, t)
          })
        }, String(t)))
      }), s.length > 1 && (0, n.jsx)(x, {
        className: C,
        paginationButtonClassName: E,
        currentSlideIndex: A,
        numSlides: s.length,
        onNext: () => {
          H(U(1), A, "NEXT")
        },
        onPrevious: () => {
          H(U(-1), A, "PREVIOUS")
        },
        onIndicatorClick: e => {
          H(e, A, "GO_TO_SLIDE")
        }
      })]
    })
  }