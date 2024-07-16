s.d(t, {
  U: function() {
return L;
  }
}), s(47120);
var n, r, a = s(735250),
  o = s(470079),
  i = s(120356),
  l = s.n(i),
  c = s(954955),
  d = s.n(c),
  u = s(717888),
  p = s.n(u),
  g = s(82923),
  f = s(442837),
  C = s(481060),
  m = s(451478),
  _ = s(259580),
  h = s(305271),
  b = s(689938),
  x = s(692123);
let I = {
  mass: 1,
  tension: 200,
  friction: 30,
  clamp: !0,
  easing: g.Z.Easing.bezier(0.15, 0, 0.25, 1),
  duration: 1000
};
(r = n || (n = {})).GO_TO_SLIDE = 'GO_TO_SLIDE', r.NEXT = 'NEXT', r.PREVIOUS = 'PREVIOUS';
let E = e => {
let {
  currentSlideIndex: t,
  numSlides: s,
  onNext: n,
  onPrevious: r,
  onIndicatorClick: o,
  className: i,
  paginationButtonClassName: c
} = e, d = l()(x.paginationButton, c);
return (0, a.jsxs)('div', {
  className: l()(x.controls, i),
  children: [
    (0, a.jsx)(C.Button, {
      look: C.Button.Looks.FILLED,
      color: C.Button.Colors.PRIMARY,
      className: d,
      onClick: r,
      'aria-label': b.Z.Messages.PAGINATION_PREVIOUS,
      children: (0, a.jsx)(_.Z, {
        direction: _.Z.Directions.LEFT
      })
    }),
    (0, a.jsx)('div', {
      className: x.paginationIndicatorContainer,
      children: p()(s, e => (0, a.jsx)(C.Button, {
        look: C.Button.Looks.BLANK,
        size: C.Button.Sizes.NONE,
        onClick: () => o(e),
        className: l()(x.paginationIndicatorButton, {
          [x.selected]: e === t
        }),
        'aria-label': b.Z.Messages.PAGINATION_SLIDE_LABEL.format({
          pageNumber: e + 1
        }),
        children: (0, a.jsx)('div', {
          className: l()(x.paginationIndicator, {
            [x.selected]: e === t
          })
        })
      }, 'slide-indicator-'.concat(e)))
    }),
    (0, a.jsx)(C.Button, {
      look: C.Button.Looks.FILLED,
      color: C.Button.Colors.PRIMARY,
      className: d,
      onClick: n,
      'aria-label': b.Z.Messages.PAGINATION_NEXT,
      children: (0, a.jsx)(_.Z, {
        direction: _.Z.Directions.RIGHT
      })
    })
  ]
});
  },
  L = e => {
let {
  carouselId: t,
  items: s = [],
  renderItem: n,
  getItemId: r,
  onIntentionalChange: i,
  onChangeItem: c,
  className: u,
  controlsClassName: p,
  paginationButtonClassName: g,
  springConfig: _,
  delay: b,
  initialPaused: L = !1,
  unidirectional: S = !1,
  analyticsLocations: v
} = e, {
  trackSlideView: T,
  trackPagination: N
} = (0, h.X)(t, v), [O, j] = (0, o.useState)(0), [Z, k] = (0, o.useState)(!1), [R, A] = (0, o.useState)(!1), P = o.useCallback(() => A(!0), []), B = o.useCallback(() => A(!1), []), M = (0, f.e7)([m.Z], () => m.Z.isFocused()), y = null != b && !L && !R && M, w = o.useCallback(e => (s.length + O + e) % s.length, [
  s,
  O
]), F = o.useCallback(d()((e, t, n) => {
  null != n && (null == i || i(s[e], t, e, n), N(e, O, r(e), r(t))), k('GO_TO_SLIDE' === n), null == c || c(s[e], t, e), j(e);
}, 200), [
  s,
  i,
  c
]);
return (0, o.useEffect)(() => {
  T(O, r(O));
}, [
  T,
  O,
  r
]), (0, o.useEffect)(() => {
  if (y) {
    let e = w(1),
      t = setInterval(() => F(e, O), b);
    return () => clearInterval(t);
  }
}, [
  y,
  b,
  O,
  w,
  F
]), (0, a.jsxs)('div', {
  className: l()(x.carouselContainer, u),
  onMouseEnter: P,
  onMouseLeave: B,
  children: [
    (0, a.jsx)(C.Slides, {
      activeSlide: String(O),
      springConfig: null != _ ? _ : I,
      directionOverride: S && !Z ? 'forwards' : void 0,
      fadeInOut: !0,
      children: s.map((e, t) => (0, a.jsx)(C.Slide, {
        id: String(t),
        children: (0, a.jsx)('div', {
          className: l()(x.carousel),
          children: n(e, t)
        })
      }, String(t)))
    }),
    s.length > 1 && (0, a.jsx)(E, {
      className: p,
      paginationButtonClassName: g,
      currentSlideIndex: O,
      numSlides: s.length,
      onNext: () => {
        F(w(1), O, 'NEXT');
      },
      onPrevious: () => {
        F(w(-1), O, 'PREVIOUS');
      },
      onIndicatorClick: e => {
        F(e, O, 'GO_TO_SLIDE');
      }
    })
  ]
});
  };