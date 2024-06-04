"use strict";
l.r(t), l.d(t, {
  SlideCarousel: function() {
    return E
  }
}), l("47120");
var a = l("735250"),
  s = l("470079"),
  r = l.n(s),
  n = l("120356"),
  i = l.n(n),
  o = l("717888"),
  c = l.n(o),
  u = l("481060"),
  d = l("570140"),
  f = l("259580"),
  C = l("689938"),
  p = l("816124");
let m = {
    GO_TO_SLIDE: "go to slide",
    NEXT: "next"
  },
  g = e => {
    let {
      currentSlideIndex: t,
      numSlides: l,
      onNext: s,
      onPrevious: r,
      onIndicatorClick: n,
      className: o,
      paginationButtonClassName: d
    } = e, m = i()(p.paginationButton, d);
    return (0, a.jsxs)("div", {
      className: i()(p.controls, o),
      children: [(0, a.jsx)(u.Button, {
        look: u.Button.Looks.BLANK,
        className: m,
        onClick: r,
        "aria-label": C.default.Messages.PAGINATION_PREVIOUS,
        children: (0, a.jsx)(f.default, {
          className: p.paginationButtonIcon,
          direction: f.default.Directions.LEFT
        })
      }), (0, a.jsx)("div", {
        className: p.paginationIndicatorContainer,
        children: c()(l, e => (0, a.jsx)(u.Button, {
          look: u.Button.Looks.BLANK,
          size: u.Button.Sizes.NONE,
          onClick: () => n(e),
          className: i()(p.paginationIndicatorButton, {
            [p.selected]: e === t
          }),
          "aria-label": C.default.Messages.PAGINATION_SLIDE_LABEL.format({
            pageNumber: e + 1
          }),
          children: (0, a.jsx)("div", {
            className: i()(p.paginationIndicator, {
              [p.selected]: e === t
            })
          })
        }, "slide-indicator-".concat(e)))
      }), (0, a.jsx)(u.Button, {
        look: u.Button.Looks.BLANK,
        className: m,
        onClick: s,
        "aria-label": C.default.Messages.PAGINATION_NEXT,
        children: (0, a.jsx)(f.default, {
          className: p.paginationButtonIcon,
          direction: f.default.Directions.RIGHT
        })
      })]
    })
  },
  E = e => {
    let {
      items: t,
      renderItem: l,
      onIntentionalChange: n,
      onChangeItem: o,
      className: c,
      controlsClassName: f,
      paginationButtonClassName: C,
      delay: E,
      initialPaused: h = !1,
      springConfig: b
    } = e, [x, S] = (0, s.useState)(0), [v, I] = (0, s.useState)(h), L = (0, s.useCallback)(e => {
      let {
        focused: t
      } = e;
      I(!t)
    }, [I]);
    r().useEffect(() => (d.default.subscribe("WINDOW_FOCUS", L), () => {
      d.default.unsubscribe("WINDOW_FOCUS", L)
    }), [L]);
    let T = r().useCallback(() => I(!0), []),
      N = r().useCallback(() => I(!1), []),
      _ = r().useCallback(e => {
        let l = (t.length + x + e) % t.length;
        return null == o || o(t[l], x, l), S(l), l
      }, [t, x, o]);
    return (0, s.useEffect)(() => {
      if (!h && !v && null != E) {
        let e = setInterval(() => _(1), E);
        return () => clearInterval(e)
      }
    }, [h, v, E, _]), (0, a.jsxs)("div", {
      className: i()(p.carouselContainer, c),
      onMouseEnter: T,
      onMouseLeave: N,
      children: [(0, a.jsx)(u.Slides, {
        activeSlide: String(x),
        springConfig: b,
        children: t.map((e, t) => (0, a.jsx)(u.Slide, {
          id: String(t),
          children: (0, a.jsx)("div", {
            className: i()(p.carousel),
            children: l(e, t)
          })
        }, String(t)))
      }), t.length > 1 && (0, a.jsx)(g, {
        className: f,
        paginationButtonClassName: C,
        currentSlideIndex: x,
        numSlides: t.length,
        onNext: () => {
          let e = _(1);
          null == n || n(t[e], x, e, m.NEXT)
        },
        onPrevious: () => {
          let e = _(-1);
          null == n || n(t[e], x, e, m.NEXT)
        },
        onIndicatorClick: e => {
          null == n || n(t[e], x, e, m.GO_TO_SLIDE), _(e - x)
        }
      })]
    })
  }