n(47120);
var r = n(735250),
    a = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(180081),
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
    let { className: t, products: n, user: s } = e,
        [h, x] = a.useState(0),
        I = n.length,
        { analyticsLocations: E } = (0, c.cj)([g.Z], () => g.Z.getAnalytics()),
        { analyticsLocations: v } = (0, u.ZP)([...E, d.Z.COLLECTIBLES_SHOP_POPULAR_PICKS_CAROUSEL]),
        { trackPagination: S } = (0, m.X)('collectibles_shop_popular_picks_carousel', v),
        L = a.useCallback((e) => ({ x: (e - h) * 100 }), [h]),
        [T, N] = (0, l.useSprings)(n.length, L);
    return (a.useEffect(() => {
        N(L);
    }, [N, L]),
    null == s || 0 === n.length)
        ? null
        : (0, r.jsx)('div', {
              className: t,
              children: (0, r.jsxs)('div', {
                  className: b.cardContainer,
                  children: [
                      (0, r.jsx)(l.Button, {
                          look: l.Button.Looks.FILLED,
                          color: l.Button.Colors.PRIMARY,
                          className: o()(b.caretButton, b.leftCaret),
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
                          children: T.map((e, t) => {
                              let { x: a } = e,
                                  o = p.Z.getCategoryForProduct(n[t].skuId);
                              if (null != o)
                                  return (0, r.jsx)(
                                      i.animated.div,
                                      {
                                          className: b.card,
                                          style: { transform: null == a ? void 0 : a.to((e) => 'translate3d('.concat(e, '%,0,0)')) },
                                          children: (0, r.jsx)(
                                              C.Z,
                                              {
                                                  product: n[t],
                                                  category: o,
                                                  user: s,
                                                  isPopularPicksRow: !0
                                              },
                                              ''.concat(n[t].name, '_').concat(t, '_perks_card')
                                          )
                                      },
                                      ''.concat(n[t].name, '_').concat(t, '_animated_div')
                                  );
                          })
                      }),
                      (0, r.jsx)(l.Button, {
                          look: l.Button.Looks.FILLED,
                          color: l.Button.Colors.PRIMARY,
                          className: o()(b.caretButton, b.rightCaret),
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
