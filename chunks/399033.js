s(47120);
var n = s(735250),
  r = s(470079),
  a = s(120356),
  o = s.n(a),
  i = s(338545),
  l = s(442837),
  c = s(481060),
  d = s(100527),
  u = s(906732),
  p = s(259580),
  g = s(328347),
  f = s(709999),
  C = s(305271),
  m = s(689938),
  _ = s(994479);
t.Z = e => {
  let {
className: t,
products: s,
user: a,
productToCategoryMap: h
  } = e, [b, x] = r.useState(0), I = s.length, {
analyticsLocations: E
  } = (0, l.cj)([g.Z], () => g.Z.getAnalytics()), {
analyticsLocations: L
  } = (0, u.ZP)([
...E,
d.Z.COLLECTIBLES_SHOP_POPULAR_PICKS_CAROUSEL
  ]), {
trackPagination: S
  } = (0, C.X)('collectibles_shop_popular_picks_carousel', L), v = r.useCallback(e => ({
x: (e - b) * 100
  }), [b]), [T, N] = (0, c.useSprings)(s.length, v);
  return (r.useEffect(() => {
N(v);
  }, [
N,
v
  ]), null == a || 0 === s.length) ? null : (0, n.jsx)('div', {
className: t,
children: (0, n.jsxs)('div', {
  className: _.cardContainer,
  children: [
    (0, n.jsx)(c.Button, {
      look: c.Button.Looks.FILLED,
      color: c.Button.Colors.PRIMARY,
      className: o()(_.caretButton, _.leftCaret),
      onClick: () => {
        x(e => {
          let t = e - 4;
          return S(t / 4, b / 4), t;
        });
      },
      disabled: b - 4 < 0,
      'aria-label': m.Z.Messages.PAGINATION_PREVIOUS,
      children: (0, n.jsx)(p.Z, {
        direction: p.Z.Directions.LEFT
      })
    }),
    (0, n.jsx)('div', {
      className: _.cardInnerContainer,
      children: T.map((e, t) => {
        let {
          x: r
        } = e, o = h.get(s[t].skuId);
        if (null != o)
          return (0, n.jsx)(i.animated.div, {
            className: _.card,
            style: {
              transform: null == r ? void 0 : r.to(e => 'translate3d('.concat(e, '%,0,0)'))
            },
            children: (0, n.jsx)(f.Z, {
              product: s[t],
              category: o,
              user: a,
              isPopularPicksRow: !0
            }, ''.concat(s[t].name, '_').concat(t, '_perks_card'))
          }, ''.concat(s[t].name, '_').concat(t, '_animated_div'));
      })
    }),
    (0, n.jsx)(c.Button, {
      look: c.Button.Looks.FILLED,
      color: c.Button.Colors.PRIMARY,
      className: o()(_.caretButton, _.rightCaret),
      onClick: () => {
        x(e => {
          let t = e + 4;
          return S(t / 4, b / 4), t;
        });
      },
      disabled: b + 4 >= I,
      'aria-label': m.Z.Messages.PAGINATION_NEXT,
      children: (0, n.jsx)(p.Z, {
        direction: p.Z.Directions.RIGHT
      })
    })
  ]
})
  });
};