n(47120);
var s = n(735250),
    r = n(470079),
    a = n(120356),
    i = n.n(a),
    o = n(180081),
    c = n(442837),
    l = n(481060),
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
        [h, x] = r.useState(0),
        I = n.length,
        { analyticsLocations: E } = (0, c.cj)([g.Z], () => g.Z.getAnalytics()),
        { analyticsLocations: v } = (0, u.ZP)([...E, d.Z.COLLECTIBLES_SHOP_POPULAR_PICKS_CAROUSEL]),
        { trackPagination: S } = (0, m.X)('collectibles_shop_popular_picks_carousel', v),
        L = r.useCallback((e) => ({ x: (e - h) * 100 }), [h]),
        [T, N] = (0, l.useSprings)(n.length, L);
    return (r.useEffect(() => {
        N(L);
    }, [N, L]),
    null == a || 0 === n.length)
        ? null
        : (0, s.jsx)('div', {
              className: t,
              children: (0, s.jsxs)('div', {
                  className: b.cardContainer,
                  children: [
                      (0, s.jsx)(l.Button, {
                          look: l.Button.Looks.FILLED,
                          color: l.Button.Colors.PRIMARY,
                          className: i()(b.caretButton, b.leftCaret),
                          onClick: () => {
                              x((e) => {
                                  let t = e - 4;
                                  return S(t / 4, h / 4), t;
                              });
                          },
                          disabled: h - 4 < 0,
                          'aria-label': _.Z.Messages.PAGINATION_PREVIOUS,
                          children: (0, s.jsx)(f.Z, { direction: f.Z.Directions.LEFT })
                      }),
                      (0, s.jsx)('div', {
                          className: b.cardInnerContainer,
                          children: T.map((e, t) => {
                              let { x: r } = e,
                                  i = p.Z.getCategoryForProduct(n[t].skuId);
                              if (null != i)
                                  return (0, s.jsx)(
                                      o.animated.div,
                                      {
                                          className: b.card,
                                          style: { transform: null == r ? void 0 : r.to((e) => 'translate3d('.concat(e, '%,0,0)')) },
                                          children: (0, s.jsx)(
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
                      (0, s.jsx)(l.Button, {
                          look: l.Button.Looks.FILLED,
                          color: l.Button.Colors.PRIMARY,
                          className: i()(b.caretButton, b.rightCaret),
                          onClick: () => {
                              x((e) => {
                                  let t = e + 4;
                                  return S(t / 4, h / 4), t;
                              });
                          },
                          disabled: h + 4 >= I,
                          'aria-label': _.Z.Messages.PAGINATION_NEXT,
                          children: (0, s.jsx)(f.Z, { direction: f.Z.Directions.RIGHT })
                      })
                  ]
              })
          });
};
