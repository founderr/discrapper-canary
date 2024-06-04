"use strict";
a.r(t), a.d(t, {
  SlideCarousel: function() {
    return v
  }
}), a("47120");
var s, l, r = a("735250"),
  n = a("470079"),
  i = a.n(n),
  o = a("120356"),
  c = a.n(o),
  u = a("954955"),
  d = a.n(u),
  f = a("717888"),
  C = a.n(f),
  p = a("82923"),
  m = a("481060"),
  g = a("570140"),
  E = a("259580"),
  h = a("689938"),
  b = a("816124");
let x = {
  mass: 1,
  tension: 200,
  friction: 30,
  clamp: !0,
  easing: p.default.Easing.bezier(.15, 0, .25, 1),
  duration: 1600
};
(l = s || (s = {})).GO_TO_SLIDE = "GO_TO_SLIDE", l.NEXT = "NEXT", l.PREVIOUS = "PREVIOUS";
let S = e => {
    let {
      currentSlideIndex: t,
      numSlides: a,
      onNext: s,
      onPrevious: l,
      onIndicatorClick: n,
      className: i,
      paginationButtonClassName: o
    } = e, u = c()(b.paginationButton, o);
    return (0, r.jsxs)("div", {
      className: c()(b.controls, i),
      children: [(0, r.jsx)(m.Button, {
        look: m.Button.Looks.BLANK,
        className: u,
        onClick: l,
        "aria-label": h.default.Messages.PAGINATION_PREVIOUS,
        children: (0, r.jsx)(E.default, {
          className: b.paginationButtonIcon,
          direction: E.default.Directions.LEFT
        })
      }), (0, r.jsx)("div", {
        className: b.paginationIndicatorContainer,
        children: C()(a, e => (0, r.jsx)(m.Button, {
          look: m.Button.Looks.BLANK,
          size: m.Button.Sizes.NONE,
          onClick: () => n(e),
          className: c()(b.paginationIndicatorButton, {
            [b.selected]: e === t
          }),
          "aria-label": h.default.Messages.PAGINATION_SLIDE_LABEL.format({
            pageNumber: e + 1
          }),
          children: (0, r.jsx)("div", {
            className: c()(b.paginationIndicator, {
              [b.selected]: e === t
            })
          })
        }, "slide-indicator-".concat(e)))
      }), (0, r.jsx)(m.Button, {
        look: m.Button.Looks.BLANK,
        className: u,
        onClick: s,
        "aria-label": h.default.Messages.PAGINATION_NEXT,
        children: (0, r.jsx)(E.default, {
          className: b.paginationButtonIcon,
          direction: E.default.Directions.RIGHT
        })
      })]
    })
  },
  v = e => {
    let {
      items: t,
      renderItem: a,
      onIntentionalChange: s,
      onChangeItem: l,
      className: o,
      controlsClassName: u,
      paginationButtonClassName: f,
      delay: C,
      initialPaused: p = !1,
      springConfig: E
    } = e, [h, v] = (0, n.useState)(0), [I, L] = (0, n.useState)(p), T = (0, n.useCallback)(e => {
      let {
        focused: t
      } = e;
      return L(!t)
    }, []);
    i().useEffect(() => (g.default.subscribe("WINDOW_FOCUS", T), () => {
      g.default.unsubscribe("WINDOW_FOCUS", T)
    }), [T]);
    let N = i().useCallback(() => L(!0), []),
      _ = i().useCallback(() => L(!1), []),
      y = i().useCallback(e => (t.length + h + e) % t.length, [t, h]),
      j = i().useCallback(d()((e, a, r) => {
        null != r && (null == s || s(t[e], a, e, r)), null == l || l(t[e], a, e), v(e)
      }, 1e3), [t, s, l]);
    return (0, n.useEffect)(() => {
      if (!p && !I && null != C) {
        let e = y(1),
          t = setInterval(() => j(e, h), C);
        return () => clearInterval(t)
      }
    }, [p, I, C, h, y, j]), (0, r.jsxs)("div", {
      className: c()(b.carouselContainer, o),
      onMouseEnter: N,
      onMouseLeave: _,
      children: [(0, r.jsx)(m.Slides, {
        activeSlide: String(h),
        springConfig: null != E ? E : x,
        fadeInOut: !0,
        children: t.map((e, t) => (0, r.jsx)(m.Slide, {
          id: String(t),
          children: (0, r.jsx)("div", {
            className: c()(b.carousel),
            children: a(e, t)
          })
        }, String(t)))
      }), t.length > 1 && (0, r.jsx)(S, {
        className: u,
        paginationButtonClassName: f,
        currentSlideIndex: h,
        numSlides: t.length,
        onNext: () => {
          j(y(1), h, "NEXT")
        },
        onPrevious: () => {
          j(y(11), h, "PREVIOUS")
        },
        onIndicatorClick: e => {
          j(e, h, "GO_TO_SLIDE")
        }
      })]
    })
  }