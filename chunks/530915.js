"use strict";
s.r(t), s.d(t, {
  SlideCarousel: function() {
    return x
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
  p = s("481060"),
  m = s("570140"),
  g = s("259580"),
  h = s("689938"),
  S = s("816124");
let I = {
  mass: 1,
  tension: 200,
  friction: 30,
  clamp: !0,
  easing: E.default.Easing.bezier(.15, 0, .25, 1),
  duration: 1600
};
(l = a || (a = {})).GO_TO_SLIDE = "GO_TO_SLIDE", l.NEXT = "NEXT", l.PREVIOUS = "PREVIOUS";
let T = e => {
    let {
      currentSlideIndex: t,
      numSlides: s,
      onNext: a,
      onPrevious: l,
      onIndicatorClick: r,
      className: i,
      paginationButtonClassName: o
    } = e, c = u()(S.paginationButton, o);
    return (0, n.jsxs)("div", {
      className: u()(S.controls, i),
      children: [(0, n.jsx)(p.Button, {
        look: p.Button.Looks.BLANK,
        className: c,
        onClick: l,
        "aria-label": h.default.Messages.PAGINATION_PREVIOUS,
        children: (0, n.jsx)(g.default, {
          className: S.paginationButtonIcon,
          direction: g.default.Directions.LEFT
        })
      }), (0, n.jsx)("div", {
        className: S.paginationIndicatorContainer,
        children: C()(s, e => (0, n.jsx)(p.Button, {
          look: p.Button.Looks.BLANK,
          size: p.Button.Sizes.NONE,
          onClick: () => r(e),
          className: u()(S.paginationIndicatorButton, {
            [S.selected]: e === t
          }),
          "aria-label": h.default.Messages.PAGINATION_SLIDE_LABEL.format({
            pageNumber: e + 1
          }),
          children: (0, n.jsx)("div", {
            className: u()(S.paginationIndicator, {
              [S.selected]: e === t
            })
          })
        }, "slide-indicator-".concat(e)))
      }), (0, n.jsx)(p.Button, {
        look: p.Button.Looks.BLANK,
        className: c,
        onClick: a,
        "aria-label": h.default.Messages.PAGINATION_NEXT,
        children: (0, n.jsx)(g.default, {
          className: S.paginationButtonIcon,
          direction: g.default.Directions.RIGHT
        })
      })]
    })
  },
  x = e => {
    let {
      items: t,
      renderItem: s,
      onIntentionalChange: a,
      onChangeItem: l,
      className: o,
      controlsClassName: c,
      paginationButtonClassName: f,
      delay: C,
      initialPaused: E = !1,
      springConfig: g
    } = e, [h, x] = (0, r.useState)(0), [_, N] = (0, r.useState)(E), b = (0, r.useCallback)(e => {
      let {
        focused: t
      } = e;
      return N(!t)
    }, []);
    i().useEffect(() => (m.default.subscribe("WINDOW_FOCUS", b), () => {
      m.default.unsubscribe("WINDOW_FOCUS", b)
    }), [b]);
    let L = i().useCallback(() => N(!0), []),
      v = i().useCallback(() => N(!1), []),
      R = i().useCallback(e => (t.length + h + e) % t.length, [t, h]),
      A = i().useCallback(d()((e, s, n) => {
        null != n && (null == a || a(t[e], s, e, n)), null == l || l(t[e], s, e), x(e)
      }, 1e3), [t, a, l]);
    return (0, r.useEffect)(() => {
      if (!E && !_ && null != C) {
        let e = R(1),
          t = setInterval(() => A(e, h), C);
        return () => clearInterval(t)
      }
    }, [E, _, C, h, R, A]), (0, n.jsxs)("div", {
      className: u()(S.carouselContainer, o),
      onMouseEnter: L,
      onMouseLeave: v,
      children: [(0, n.jsx)(p.Slides, {
        activeSlide: String(h),
        springConfig: null != g ? g : I,
        fadeInOut: !0,
        children: t.map((e, t) => (0, n.jsx)(p.Slide, {
          id: String(t),
          children: (0, n.jsx)("div", {
            className: u()(S.carousel),
            children: s(e, t)
          })
        }, String(t)))
      }), t.length > 1 && (0, n.jsx)(T, {
        className: c,
        paginationButtonClassName: f,
        currentSlideIndex: h,
        numSlides: t.length,
        onNext: () => {
          A(R(1), h, "NEXT")
        },
        onPrevious: () => {
          A(R(11), h, "PREVIOUS")
        },
        onIndicatorClick: e => {
          A(e, h, "GO_TO_SLIDE")
        }
      })]
    })
  }