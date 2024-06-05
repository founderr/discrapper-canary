"use strict";
s.r(t), s.d(t, {
  SlideCarousel: function() {
    return v
  }
}), s("47120");
var a, l, r = s("735250"),
  n = s("470079"),
  i = s.n(n),
  o = s("120356"),
  c = s.n(o),
  u = s("954955"),
  d = s.n(u),
  f = s("717888"),
  C = s.n(f),
  p = s("82923"),
  m = s("481060"),
  g = s("570140"),
  E = s("259580"),
  h = s("689938"),
  b = s("816124");
let x = {
  mass: 1,
  tension: 200,
  friction: 30,
  clamp: !0,
  easing: p.default.Easing.bezier(.15, 0, .25, 1),
  duration: 1600
};
(l = a || (a = {})).GO_TO_SLIDE = "GO_TO_SLIDE", l.NEXT = "NEXT", l.PREVIOUS = "PREVIOUS";
let S = e => {
    let {
      currentSlideIndex: t,
      numSlides: s,
      onNext: a,
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
        children: C()(s, e => (0, r.jsx)(m.Button, {
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
        onClick: a,
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
      renderItem: s,
      onIntentionalChange: a,
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
      j = i().useCallback(d()((e, s, r) => {
        null != r && (null == a || a(t[e], s, e, r)), null == l || l(t[e], s, e), v(e)
      }, 1e3), [t, a, l]);
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
            children: s(e, t)
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