n(47120);
var a = n(735250),
    r = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(180650),
    l = n(442837),
    c = n(481060),
    d = n(594174),
    u = n(597688),
    f = n(1870),
    p = n(884697),
    g = n(223143),
    C = n(823941),
    m = n(38900),
    _ = n(709999),
    b = n(215023),
    h = n(689938),
    x = n(728097),
    I = n(367815),
    E = n(933285),
    v = n(83498);
t.Z = (e) => {
    var t, n, s, T, L, S;
    let { handleTransition: N, numVisibleItems: O } = e,
        { isFetching: k } = (0, g.Z)(),
        j = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        B = r.createRef(),
        Z = (0, l.cj)([u.Z], () => ({ feature: u.Z.getCategory(i.T.THE_VAULT) })),
        P = r.useMemo(
            () =>
                b.$O
                    .map((e) => u.Z.getProduct(e))
                    .filter((e) => null != e)
                    .map((e) => ({
                        ...e,
                        category: u.Z.getCategoryForProduct(e.skuId)
                    }))
                    .filter((e) => null != e.category)
                    .sort((e, t) => {
                        let n = !!f.Z.getPurchase(e.skuId),
                            a = !!f.Z.getPurchase(t.skuId);
                        return Number(n) - Number(a);
                    })
                    .slice(0, 4),
            [k]
        ),
        A = r.useMemo(
            () =>
                b.yo
                    .map((e) => u.Z.getProduct(e))
                    .filter((e) => null != e)
                    .map((e) => ({
                        ...e,
                        category: u.Z.getCategoryForProduct(e.skuId)
                    }))
                    .filter((e) => null != e.category)
                    .sort((e, t) => {
                        let n = !!f.Z.getPurchase(e.skuId),
                            a = !!f.Z.getPurchase(t.skuId);
                        return Number(n) - Number(a);
                    }),
            [k]
        );
    if (null == j) return null;
    return (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)('div', {
            className: x.shop,
            children: [
                (0, a.jsx)('div', {
                    className: x.banner,
                    children: (0, a.jsx)('div', {
                        className: x.bannerImage,
                        style: { backgroundImage: 'url('.concat(v, ')') }
                    })
                }),
                (0, a.jsxs)('div', {
                    className: o()(x.content, x.mainContent),
                    children: [
                        (0, a.jsx)('div', {
                            className: o()(x.heroHeaderContainer),
                            children: k
                                ? (0, a.jsx)('div', { className: o()(x.heroHeaderBadgeLogoSummaryContainer) })
                                : (0, a.jsxs)('div', {
                                      className: o()(x.heroHeaderBadgeLogoSummaryContainer),
                                      children: [
                                          (null === (n = Z.feature) || void 0 === n ? void 0 : n.unpublishedAt) != null &&
                                              (0, a.jsx)(c.TextBadge, {
                                                  disableColor: !0,
                                                  text: h.Z.Messages.LIMITED_TIME,
                                                  className: x.limitedTimeBadge
                                              }),
                                          (0, a.jsx)('img', {
                                              className: x.heroHeaderLogo,
                                              src: (0, p.uV)(null !== (S = null === (s = Z.feature) || void 0 === s ? void 0 : s.logo) && void 0 !== S ? S : '', { size: C.n }),
                                              alt: null === (T = Z.feature) || void 0 === T ? void 0 : T.name
                                          }),
                                          (0, a.jsx)(c.Text, {
                                              color: 'always-white',
                                              variant: 'text-md/normal',
                                              children: null === (L = Z.feature) || void 0 === L ? void 0 : L.summary
                                          })
                                      ]
                                  })
                        }),
                        (0, a.jsx)('div', {
                            className: o()(x.row, x.feed, x.feedSingleRow),
                            children: k
                                ? (0, a.jsx)(a.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, a.jsx)(m.K, {}, t))
                                  })
                                : (0, a.jsx)(a.Fragment, {
                                      children: P.map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...n } = e;
                                          return (0, a.jsx)(
                                              _.Z,
                                              {
                                                  product: n,
                                                  category: t,
                                                  user: j
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        (0, a.jsxs)('div', {
                            className: o()(x.section, x.col2, x.featuredBlocksContainer),
                            children: [
                                (0, a.jsxs)(c.Clickable, {
                                    className: o()(x.featuredBlock),
                                    style: { backgroundImage: 'url('.concat(E, ')') },
                                    onClick: () => N(i.T.DOJO),
                                    children: [
                                        (null === (t = u.Z.getCategory(i.T.DOJO)) || void 0 === t ? void 0 : t.unpublishedAt) != null &&
                                            (0, a.jsx)(c.TextBadge, {
                                                disableColor: !0,
                                                text: h.Z.Messages.LIMITED_TIME,
                                                className: x.featuredBlockBadge
                                            }),
                                        (0, a.jsx)(c.Button, {
                                            className: x.featuredBlockButton,
                                            color: c.ButtonColors.WHITE,
                                            onClick: () => N(i.T.DOJO),
                                            children: h.Z.Messages.TAKE_ME_THERE
                                        })
                                    ]
                                }),
                                (0, a.jsxs)(c.Clickable, {
                                    className: o()(x.featuredBlock),
                                    style: { backgroundImage: 'url('.concat(I, ')') },
                                    onClick: () => N(i.T.ANIME_V2),
                                    children: [
                                        (0, a.jsx)(c.TextBadge, {
                                            disableColor: !0,
                                            text: h.Z.Messages.MOST_POPULAR,
                                            className: x.featuredBlockBadge
                                        }),
                                        (0, a.jsx)(c.Button, {
                                            className: x.featuredBlockButton,
                                            color: c.ButtonColors.WHITE,
                                            onClick: () => N(i.T.ANIME_V2),
                                            children: h.Z.Messages.TAKE_ME_THERE
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, a.jsxs)('div', {
                            className: o()(x.row, x.between, x.section),
                            children: [
                                (0, a.jsx)(c.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: h.Z.Messages.COLLECTIBLES_POPULAR_PICKS
                                }),
                                (0, a.jsxs)(c.Clickable, {
                                    className: x.shopAll,
                                    onClick: () => N(),
                                    children: [
                                        (0, a.jsx)(c.ServerGridIcon, {}),
                                        (0, a.jsx)(c.Text, {
                                            variant: 'text-sm/medium',
                                            children: h.Z.Messages.COLLECTIBLES_SHOP_ALL
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: x.feed,
                            ref: B,
                            children: k
                                ? (0, a.jsx)(a.Fragment, { children: [...Array(12)].map((e, t) => (0, a.jsx)(m.K, {}, t + 1)) })
                                : (0, a.jsx)(a.Fragment, {
                                      children: A.slice(0, O).map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...n } = e;
                                          return (0, a.jsx)(
                                              _.Z,
                                              {
                                                  product: n,
                                                  category: t,
                                                  user: j
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        O >= b.iA &&
                            (0, a.jsxs)('div', {
                                className: x.endOfFeed,
                                children: [
                                    (0, a.jsx)(c.Heading, {
                                        variant: 'heading-md/semibold',
                                        children: h.Z.Messages.COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_TEXT
                                    }),
                                    (0, a.jsx)(c.Button, {
                                        className: x.endOfFeedButton,
                                        onClick: () => {
                                            N(void 0, !0);
                                        },
                                        children: (0, a.jsx)(c.Text, {
                                            variant: 'text-md/medium',
                                            color: 'always-white',
                                            children: h.Z.Messages.COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_BUTTON
                                        })
                                    })
                                ]
                            })
                    ]
                })
            ]
        })
    });
};
