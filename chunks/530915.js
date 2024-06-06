"use strict";
s.r(t), s.d(t, {
  SlideCarousel: function() {
    return _
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
  h = s("689938"),
  I = s("816124");
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
    } = e, c = u()(I.paginationButton, o);
    return (0, n.jsxs)("div", {
      className: u()(I.controls, i),
      children: [(0, n.jsx)(m.Button, {
        look: m.Button.Looks.BLANK,
        className: c,
        onClick: l,
        "aria-label": h.default.Messages.PAGINATION_PREVIOUS,
        children: (0, n.jsx)(S.default, {
          className: I.paginationButtonIcon,
          direction: S.default.Directions.LEFT
        })
      }), (0, n.jsx)("div", {
        className: I.paginationIndicatorContainer,
        children: C()(s, e => (0, n.jsx)(m.Button, {
          look: m.Button.Looks.BLANK,
          size: m.Button.Sizes.NONE,
          onClick: () => r(e),
          className: u()(I.paginationIndicatorButton, {
            [I.selected]: e === t
          }),
          "aria-label": h.default.Messages.PAGINATION_SLIDE_LABEL.format({
            pageNumber: e + 1
          }),
          children: (0, n.jsx)("div", {
            className: u()(I.paginationIndicator, {
              [I.selected]: e === t
            })
          })
        }, "slide-indicator-".concat(e)))
      }), (0, n.jsx)(m.Button, {
        look: m.Button.Looks.BLANK,
        className: c,
        onClick: a,
        "aria-label": h.default.Messages.PAGINATION_NEXT,
        children: (0, n.jsx)(S.default, {
          className: I.paginationButtonIcon,
          direction: S.default.Directions.RIGHT
        })
      })]
    })
  },
  _ = e => {
    let {
      items: t,
      renderItem: s,
      onIntentionalChange: a,
      onChangeItem: l,
      className: o,
      controlsClassName: c,
      paginationButtonClassName: f,
      springConfig: C,
      delay: E,
      initialPaused: S = !1,
      unidirectional: h = !1
    } = e, [_, N] = (0, r.useState)(0), [L, b] = (0, r.useState)(!1), [v, R] = (0, r.useState)(!1), A = i().useCallback(() => R(!0), []), P = i().useCallback(() => R(!1), []), O = (0, p.useStateFromStores)([g.default], () => g.default.isFocused()), j = null != E && !S && !v && O, y = i().useCallback(e => (t.length + _ + e) % t.length, [t, _]), M = i().useCallback(d()((e, s, n) => {
      null != n && (null == a || a(t[e], s, e, n)), b("GO_TO_SLIDE" === n), null == l || l(t[e], s, e), N(e)
    }, 500), [t, a, l]);
    return (0, r.useEffect)(() => {
      if (j) {
        let e = y(1),
          t = setInterval(() => M(e, _), E);
        return () => clearInterval(t)
      }
    }, [j, E, _, y, M]), (0, n.jsxs)("div", {
      className: u()(I.carouselContainer, o),
      onMouseEnter: A,
      onMouseLeave: P,
      children: [(0, n.jsx)(m.Slides, {
        activeSlide: String(_),
        springConfig: null != C ? C : T,
        directionOverride: h && !L ? "forwards" : void 0,
        fadeInOut: !0,
        children: t.map((e, t) => (0, n.jsx)(m.Slide, {
          id: String(t),
          children: (0, n.jsx)("div", {
            className: u()(I.carousel),
            children: s(e, t)
          })
        }, String(t)))
      }), t.length > 1 && (0, n.jsx)(x, {
        className: c,
        paginationButtonClassName: f,
        currentSlideIndex: _,
        numSlides: t.length,
        onNext: () => {
          M(y(1), _, "NEXT")
        },
        onPrevious: () => {
          M(y(11), _, "PREVIOUS")
        },
        onIndicatorClick: e => {
          M(e, _, "GO_TO_SLIDE")
        }
      })]
    })
  }