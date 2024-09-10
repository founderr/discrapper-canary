r(47120);
var a = r(735250),
    n = r(470079),
    s = r(120356),
    i = r.n(s),
    o = r(180650),
    l = r(442837),
    c = r(481060),
    d = r(594174),
    u = r(597688),
    f = r(1870),
    p = r(884697),
    m = r(223143),
    C = r(823941),
    _ = r(38900),
    g = r(709999),
    h = r(215023),
    b = r(689938),
    E = r(728097),
    I = r(367815),
    x = r(933285),
    v = r(83498);
t.Z = (e) => {
    var t, r, s, T, S, L;
    let { handleTransition: N, numVisibleItems: O } = e,
        { isFetching: B } = (0, m.Z)(),
        k = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        j = n.createRef(),
        R = (0, l.cj)([u.Z], () => ({ feature: u.Z.getCategory(o.T.THE_VAULT) })),
        P = n.useMemo(
            () =>
                h.$O
                    .map((e) => u.Z.getProduct(e))
                    .filter((e) => null != e)
                    .map((e) => ({
                        ...e,
                        category: u.Z.getCategoryForProduct(e.skuId)
                    }))
                    .filter((e) => null != e.category)
                    .sort((e, t) => {
                        let r = !!f.Z.getPurchase(e.skuId),
                            a = !!f.Z.getPurchase(t.skuId);
                        return Number(r) - Number(a);
                    })
                    .slice(0, 4),
            [B]
        ),
        Z = n.useMemo(
            () =>
                h.yo
                    .map((e) => u.Z.getProduct(e))
                    .filter((e) => null != e)
                    .map((e) => ({
                        ...e,
                        category: u.Z.getCategoryForProduct(e.skuId)
                    }))
                    .filter((e) => null != e.category)
                    .sort((e, t) => {
                        let r = !!f.Z.getPurchase(e.skuId),
                            a = !!f.Z.getPurchase(t.skuId);
                        return Number(r) - Number(a);
                    }),
            [B]
        );
    if (null == k) return null;
    return (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)('div', {
            className: E.shop,
            children: [
                (0, a.jsx)('div', {
                    className: E.banner,
                    children: (0, a.jsx)('div', {
                        className: E.bannerImage,
                        style: { backgroundImage: 'url('.concat(v, ')') }
                    })
                }),
                (0, a.jsxs)('div', {
                    className: i()(E.content, E.mainContent),
                    children: [
                        (0, a.jsxs)('div', {
                            className: i()(E.heroHeaderContainer),
                            children: [
                                B
                                    ? (0, a.jsx)('div', { className: i()(E.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, a.jsxs)('div', {
                                          className: i()(E.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null === (r = R.feature) || void 0 === r ? void 0 : r.unpublishedAt) != null &&
                                                  (0, a.jsx)(c.TextBadge, {
                                                      disableColor: !0,
                                                      text: b.Z.Messages.LIMITED_TIME,
                                                      className: E.limitedTimeBadge
                                                  }),
                                              (0, a.jsx)('img', {
                                                  className: E.heroHeaderLogo,
                                                  src: (0, p.uV)(null !== (L = null === (s = R.feature) || void 0 === s ? void 0 : s.logo) && void 0 !== L ? L : '', { size: C.n }),
                                                  alt: null === (T = R.feature) || void 0 === T ? void 0 : T.name
                                              }),
                                              (0, a.jsx)(c.Text, {
                                                  color: 'always-white',
                                                  variant: 'text-md/normal',
                                                  children: null === (S = R.feature) || void 0 === S ? void 0 : S.summary
                                              })
                                          ]
                                      }),
                                (0, a.jsx)('div', {
                                    className: E.heroHeaderButtonContainer,
                                    children: (0, a.jsx)(c.Button, {
                                        className: E.heroHeaderButton,
                                        color: c.ButtonColors.WHITE,
                                        onClick: () => N('shop latest category hero'),
                                        children: b.Z.Messages.COLLECTIBLES_SHOP_THE_VAULT_COLLECTION
                                    })
                                })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: i()(E.row, E.feed, E.feedSingleRow),
                            children: B
                                ? (0, a.jsx)(a.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, a.jsx)(_.K, {}, t))
                                  })
                                : (0, a.jsx)(a.Fragment, {
                                      children: P.map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...r } = e;
                                          return (0, a.jsx)(
                                              g.Z,
                                              {
                                                  product: r,
                                                  category: t,
                                                  user: k,
                                                  isInFeedView: !0
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        (0, a.jsxs)('div', {
                            className: i()(E.section, E.col2, E.featuredBlocksContainer),
                            children: [
                                (0, a.jsxs)(c.Clickable, {
                                    className: i()(E.featuredBlock),
                                    style: { backgroundImage: 'url('.concat(x, ')') },
                                    onClick: () => N('shop marketing tile', o.T.DOJO),
                                    children: [
                                        (null === (t = u.Z.getCategory(o.T.DOJO)) || void 0 === t ? void 0 : t.unpublishedAt) != null &&
                                            (0, a.jsx)(c.TextBadge, {
                                                disableColor: !0,
                                                text: b.Z.Messages.LIMITED_TIME,
                                                className: E.featuredBlockBadge
                                            }),
                                        (0, a.jsx)(c.Button, {
                                            className: E.featuredBlockButton,
                                            color: c.ButtonColors.WHITE,
                                            onClick: () => {},
                                            children: b.Z.Messages.TAKE_ME_THERE
                                        })
                                    ]
                                }),
                                (0, a.jsxs)(c.Clickable, {
                                    className: i()(E.featuredBlock),
                                    style: { backgroundImage: 'url('.concat(I, ')') },
                                    onClick: () => N('shop marketing tile', o.T.ANIME_V2),
                                    children: [
                                        (0, a.jsx)(c.TextBadge, {
                                            disableColor: !0,
                                            text: b.Z.Messages.MOST_POPULAR,
                                            className: E.featuredBlockBadge
                                        }),
                                        (0, a.jsx)(c.Button, {
                                            className: E.featuredBlockButton,
                                            color: c.ButtonColors.WHITE,
                                            onClick: () => {},
                                            children: b.Z.Messages.TAKE_ME_THERE
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, a.jsxs)('div', {
                            className: i()(E.row, E.between, E.section),
                            children: [
                                (0, a.jsx)(c.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: b.Z.Messages.COLLECTIBLES_POPULAR_PICKS
                                }),
                                (0, a.jsxs)(c.Clickable, {
                                    className: E.shopAll,
                                    onClick: () => N('shop all top'),
                                    children: [
                                        (0, a.jsx)(c.ServerGridIcon, {}),
                                        (0, a.jsx)(c.Text, {
                                            variant: 'text-sm/medium',
                                            children: b.Z.Messages.COLLECTIBLES_SHOP_ALL
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: E.feed,
                            ref: j,
                            children: B
                                ? (0, a.jsx)(a.Fragment, { children: [...Array(12)].map((e, t) => (0, a.jsx)(_.K, {}, t + 1)) })
                                : (0, a.jsx)(a.Fragment, {
                                      children: Z.slice(0, O).map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...r } = e;
                                          return (0, a.jsx)(
                                              g.Z,
                                              {
                                                  product: r,
                                                  category: t,
                                                  user: k,
                                                  isInFeedView: !0
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        O >= h.iA &&
                            (0, a.jsxs)('div', {
                                className: E.endOfFeed,
                                children: [
                                    (0, a.jsx)(c.Heading, {
                                        variant: 'heading-md/semibold',
                                        children: b.Z.Messages.COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_TEXT
                                    }),
                                    (0, a.jsx)(c.Button, {
                                        className: E.endOfFeedButton,
                                        onClick: () => {
                                            N('shop all bottom', void 0, !0);
                                        },
                                        children: (0, a.jsx)(c.Text, {
                                            variant: 'text-md/medium',
                                            color: 'always-white',
                                            children: b.Z.Messages.COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_BUTTON
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
