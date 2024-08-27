n(47120);
var r = n(735250),
    s = n(470079),
    a = n(120356),
    i = n.n(a),
    o = n(567526),
    l = n(442837),
    c = n(481060),
    d = n(100527),
    u = n(906732),
    f = n(259580),
    p = n(597688),
    g = n(328347),
    C = n(709999),
    m = n(305271),
    _ = n(689938),
    b = n(178935);
t.Z = (e) => {
    let { className: t, products: n, user: a } = e,
        [h, x] = s.useState(0),
        I = n.length,
        { analyticsLocations: E } = (0, l.cj)([g.Z], () => g.Z.getAnalytics()),
        { analyticsLocations: v } = (0, u.ZP)([...E, d.Z.COLLECTIBLES_SHOP_POPULAR_PICKS_CAROUSEL]),
        { trackPagination: S } = (0, m.X)('collectibles_shop_popular_picks_carousel', v),
        T = s.useCallback((e) => ({ x: (e - h) * 100 }), [h]),
        [L, N] = (0, c.useSprings)(n.length, T);
    return (s.useEffect(() => {
        N(T);
    }, [N, T]),
    null == a || 0 === n.length)
        ? null
        : (0, r.jsx)('div', {
              className: t,
              children: (0, r.jsxs)('div', {
                  className: b.cardContainer,
                  children: [
                      (0, r.jsx)(c.Button, {
                          look: c.Button.Looks.FILLED,
                          color: c.Button.Colors.PRIMARY,
                          className: i()(b.caretButton, b.leftCaret),
                          onClick: () => {
                              x((e) => {
                                  let t = e - 4;
                                  return S(t / 4, h / 4), t;
                              });
                          },
                          disabled: h - 4 < 0,
                          'aria-label': _.Z.Messages.PAGINATION_PREVIOUS,
                          children: (0, r.jsx)(f.Z, { direction: f.Z.Directions.LEFT })
                      }),
                      (0, r.jsx)('div', {
                          className: b.cardInnerContainer,
                          children: L.map((e, t) => {
                              let { x: s } = e,
                                  i = p.Z.getCategoryForProduct(n[t].skuId);
                              if (null != i)
                                  return (0, r.jsx)(
                                      o.animated.div,
                                      {
                                          className: b.card,
                                          style: { transform: null == s ? void 0 : s.to((e) => 'translate3d('.concat(e, '%,0,0)')) },
                                          children: (0, r.jsx)(
                                              C.Z,
                                              {
                                                  product: n[t],
                                                  category: i,
                                                  user: a,
                                                  isPopularPicksRow: !0
                                              },
                                              ''.concat(n[t].name, '_').concat(t, '_perks_card')
                                          )
                                      },
                                      ''.concat(n[t].name, '_').concat(t, '_animated_div')
                                  );
                          })
                      }),
                      (0, r.jsx)(c.Button, {
                          look: c.Button.Looks.FILLED,
                          color: c.Button.Colors.PRIMARY,
                          className: i()(b.caretButton, b.rightCaret),
                          onClick: () => {
                              x((e) => {
                                  let t = e + 4;
                                  return S(t / 4, h / 4), t;
                              });
                          },
                          disabled: h + 4 >= I,
                          'aria-label': _.Z.Messages.PAGINATION_NEXT,
                          children: (0, r.jsx)(f.Z, { direction: f.Z.Directions.RIGHT })
                      })
                  ]
              })
          });
};
