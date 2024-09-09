r(47120);
var a = r(735250),
    n = r(470079),
    s = r(120356),
    i = r.n(s),
    o = r(180081),
    l = r(442837),
    c = r(481060),
    d = r(100527),
    u = r(906732),
    f = r(259580),
    p = r(597688),
    C = r(328347),
    _ = r(709999),
    m = r(305271),
    g = r(689938),
    h = r(178935);
t.Z = (e) => {
    let { className: t, products: r, user: s } = e,
        [b, E] = n.useState(0),
        I = r.length,
        { analyticsLocations: x } = (0, l.cj)([C.Z], () => C.Z.getAnalytics()),
        { analyticsLocations: v } = (0, u.ZP)([...x, d.Z.COLLECTIBLES_SHOP_POPULAR_PICKS_CAROUSEL]),
        { trackPagination: T } = (0, m.X)('collectibles_shop_popular_picks_carousel', v),
        L = n.useCallback((e) => ({ x: (e - b) * 100 }), [b]),
        [S, N] = (0, c.useSprings)(r.length, L);
    return (n.useEffect(() => {
        N(L);
    }, [N, L]),
    null == s || 0 === r.length)
        ? null
        : (0, a.jsx)('div', {
              className: t,
              children: (0, a.jsxs)('div', {
                  className: h.cardContainer,
                  children: [
                      (0, a.jsx)(c.Button, {
                          look: c.Button.Looks.FILLED,
                          color: c.Button.Colors.PRIMARY,
                          className: i()(h.caretButton, h.leftCaret),
                          onClick: () => {
                              E((e) => {
                                  let t = e - 4;
                                  return T(t / 4, b / 4), t;
                              });
                          },
                          disabled: b - 4 < 0,
                          'aria-label': g.Z.Messages.PAGINATION_PREVIOUS,
                          children: (0, a.jsx)(f.Z, { direction: f.Z.Directions.LEFT })
                      }),
                      (0, a.jsx)('div', {
                          className: h.cardInnerContainer,
                          children: S.map((e, t) => {
                              let { x: n } = e,
                                  i = p.Z.getCategoryForProduct(r[t].skuId);
                              if (null != i)
                                  return (0, a.jsx)(
                                      o.animated.div,
                                      {
                                          className: h.card,
                                          style: { transform: null == n ? void 0 : n.to((e) => 'translate3d('.concat(e, '%,0,0)')) },
                                          children: (0, a.jsx)(
                                              _.Z,
                                              {
                                                  product: r[t],
                                                  category: i,
                                                  user: s,
                                                  isPopularPicksRow: !0
                                              },
                                              ''.concat(r[t].name, '_').concat(t, '_perks_card')
                                          )
                                      },
                                      ''.concat(r[t].name, '_').concat(t, '_animated_div')
                                  );
                          })
                      }),
                      (0, a.jsx)(c.Button, {
                          look: c.Button.Looks.FILLED,
                          color: c.Button.Colors.PRIMARY,
                          className: i()(h.caretButton, h.rightCaret),
                          onClick: () => {
                              E((e) => {
                                  let t = e + 4;
                                  return T(t / 4, b / 4), t;
                              });
                          },
                          disabled: b + 4 >= I,
                          'aria-label': g.Z.Messages.PAGINATION_NEXT,
                          children: (0, a.jsx)(f.Z, { direction: f.Z.Directions.RIGHT })
                      })
                  ]
              })
          });
};
