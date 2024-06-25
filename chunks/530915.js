"use strict";
n.d(t, {
  U: function() {
    return v
  }
}), n(47120);
var r, a, i = n(735250),
  o = n(470079),
  s = n(120356),
  c = n.n(s),
  l = n(954955),
  d = n.n(l),
  u = n(717888),
  p = n.n(u),
  f = n(82923),
  g = n(442837),
  _ = n(481060),
  C = n(451478),
  b = n(259580),
  m = n(305271),
  h = n(689938),
  x = n(247564);
let I = {
  mass: 1,
  tension: 200,
  friction: 30,
  clamp: !0,
  easing: f.ZP.Easing.bezier(.15, 0, .25, 1),
  duration: 1e3
};
(a = r || (r = {})).GO_TO_SLIDE = "GO_TO_SLIDE", a.NEXT = "NEXT", a.PREVIOUS = "PREVIOUS";
let E = e => {
    let {
      currentSlideIndex: t,
      numSlides: n,
      onNext: r,
      onPrevious: a,
      onIndicatorClick: o,
      className: s,
      paginationButtonClassName: l
    } = e, d = c()(x.paginationButton, l);
    return (0, i.jsxs)("div", {
      className: c()(x.controls, s),
      children: [(0, i.jsx)(_.Button, {
        look: _.Button.Looks.FILLED,
        color: _.Button.Colors.PRIMARY,
        className: d,
        onClick: a,
        "aria-label": h.Z.Messages.PAGINATION_PREVIOUS,
        children: (0, i.jsx)(b.Z, {
          direction: b.Z.Directions.LEFT
        })
      }), (0, i.jsx)("div", {
        className: x.paginationIndicatorContainer,
        children: p()(n, e => (0, i.jsx)(_.Button, {
          look: _.Button.Looks.BLANK,
          size: _.Button.Sizes.NONE,
          onClick: () => o(e),
          className: c()(x.paginationIndicatorButton, {
            [x.selected]: e === t
          }),
          "aria-label": h.Z.Messages.PAGINATION_SLIDE_LABEL.format({
            pageNumber: e + 1
          }),
          children: (0, i.jsx)("div", {
            className: c()(x.paginationIndicator, {
              [x.selected]: e === t
            })
          })
        }, "slide-indicator-".concat(e)))
      }), (0, i.jsx)(_.Button, {
        look: _.Button.Looks.FILLED,
        color: _.Button.Colors.PRIMARY,
        className: d,
        onClick: r,
        "aria-label": h.Z.Messages.PAGINATION_NEXT,
        children: (0, i.jsx)(b.Z, {
          direction: b.Z.Directions.RIGHT
        })
      })]
    })
  },
  v = e => {
    let {
      carouselId: t,
      items: n = [],
      renderItem: r,
      getItemId: a,
      onIntentionalChange: s,
      onChangeItem: l,
      className: u,
      controlsClassName: p,
      paginationButtonClassName: f,
      springConfig: b,
      delay: h,
      initialPaused: v = !1,
      unidirectional: S = !1,
      analyticsLocations: T
    } = e, {
      trackSlideView: L,
      trackPagination: N
    } = (0, m.X)(t, T), [O, j] = (0, o.useState)(0), [B, R] = (0, o.useState)(!1), [k, A] = (0, o.useState)(!1), P = o.useCallback(() => A(!0), []), Z = o.useCallback(() => A(!1), []), y = (0, g.e7)([C.Z], () => C.Z.isFocused()), M = null != h && !v && !k && y, w = o.useCallback(e => (n.length + O + e) % n.length, [n, O]), D = o.useCallback(d()((e, t, r) => {
      null != r && (null == s || s(n[e], t, e, r), N(e, O, a(e), a(t))), R("GO_TO_SLIDE" === r), null == l || l(n[e], t, e), j(e)
    }, 200), [n, s, l]);
    return (0, o.useEffect)(() => {
      L(O, a(O))
    }, [L, O, a]), (0, o.useEffect)(() => {
      if (M) {
        let e = w(1),
          t = setInterval(() => D(e, O), h);
        return () => clearInterval(t)
      }
    }, [M, h, O, w, D]), (0, i.jsxs)("div", {
      className: c()(x.carouselContainer, u),
      onMouseEnter: P,
      onMouseLeave: Z,
      children: [(0, i.jsx)(_.Slides, {
        activeSlide: String(O),
        springConfig: null != b ? b : I,
        directionOverride: S && !B ? "forwards" : void 0,
        fadeInOut: !0,
        children: n.map((e, t) => (0, i.jsx)(_.Slide, {
          id: String(t),
          children: (0, i.jsx)("div", {
            className: c()(x.carousel),
            children: r(e, t)
          })
        }, String(t)))
      }), n.length > 1 && (0, i.jsx)(E, {
        className: p,
        paginationButtonClassName: f,
        currentSlideIndex: O,
        numSlides: n.length,
        onNext: () => {
          D(w(1), O, "NEXT")
        },
        onPrevious: () => {
          D(w(-1), O, "PREVIOUS")
        },
        onIndicatorClick: e => {
          D(e, O, "GO_TO_SLIDE")
        }
      })]
    })
  }