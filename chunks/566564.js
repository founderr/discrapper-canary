r(47120);
var a = r(735250),
    n = r(470079),
    s = r(120356),
    i = r.n(s),
    o = r(474401),
    l = r.n(o),
    c = r(180650),
    d = r(442837),
    u = r(481060),
    f = r(594174),
    p = r(597688),
    m = r(1870),
    C = r(884697),
    _ = r(997136),
    g = r(223143),
    h = r(823941),
    b = r(38900),
    E = r(709999),
    I = r(215023),
    x = r(689938),
    T = r(632007),
    v = r(367815),
    S = r(454410),
    L = r(170873),
    N = r(562292),
    O = r(80995),
    B = r(725763);
let k = { [c.T.AUTUMN_EQUINOX]: { hero: { left: T.darker } } },
    j = (e) => (null == e ? {} : l()(k, e, {}));
t.Z = (e) => {
    var t, r, s, o, k, R, A;
    let { handleTransition: P, numVisibleItems: Z } = e,
        { isFetchingCategories: M } = (0, g.Z)(),
        y = (0, d.e7)([f.default], () => f.default.getCurrentUser()),
        w = n.createRef(),
        F = (0, _.x)('CollectiblesFeedShop'),
        H = F ? c.T.BAND : c.T.AUTUMN_EQUINOX,
        D = j(H),
        U = (0, d.cj)([p.Z], () => ({ feature: p.Z.getCategory(H) })),
        W = F ? I.WC : I.v7,
        G = n.useMemo(
            () =>
                W.map((e) => p.Z.getProduct(e))
                    .filter((e) => null != e)
                    .map((e) => ({
                        ...e,
                        category: p.Z.getCategoryForProduct(e.skuId)
                    }))
                    .filter((e) => null != e.category)
                    .sort((e, t) => {
                        let r = !!m.Z.getPurchase(e.skuId),
                            a = !!m.Z.getPurchase(t.skuId);
                        return Number(r) - Number(a);
                    })
                    .slice(0, 4),
            [M, F]
        ),
        V = n.useMemo(
            () =>
                I.yo
                    .map((e) => p.Z.getProduct(e))
                    .filter((e) => null != e)
                    .map((e) => ({
                        ...e,
                        category: p.Z.getCategoryForProduct(e.skuId)
                    }))
                    .filter((e) => null != e.category)
                    .sort((e, t) => {
                        let r = !!m.Z.getPurchase(e.skuId),
                            a = !!m.Z.getPurchase(t.skuId);
                        return Number(r) - Number(a);
                    }),
            [M]
        );
    if (null == y) return null;
    let z = x.Z.Messages.COLLECTIBLES_SHOP_CATEGORY_COLLECTION.format({ category_name: null === (t = U.feature) || void 0 === t ? void 0 : t.name });
    return (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)('div', {
            className: T.shop,
            children: [
                (0, a.jsxs)('div', {
                    className: T.banner,
                    children: [
                        (0, a.jsx)('div', {
                            className: T.bannerImage,
                            style: { backgroundImage: 'url('.concat(F ? L : O, ')') }
                        }),
                        (0, a.jsx)('div', { className: i()(T.bannerShadow, T.left, l()(D, 'hero.left')) }),
                        (0, a.jsx)('div', { className: i()(T.bannerShadow, T.right, l()(D, 'hero.right')) })
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: i()(T.content, T.mainContent),
                    children: [
                        (0, a.jsxs)('div', {
                            className: i()(T.heroHeaderContainer),
                            children: [
                                M
                                    ? (0, a.jsx)('div', { className: i()(T.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, a.jsxs)('div', {
                                          className: i()(T.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null === (s = U.feature) || void 0 === s ? void 0 : s.unpublishedAt) != null &&
                                                  (0, a.jsx)(u.TextBadge, {
                                                      disableColor: !0,
                                                      text: x.Z.Messages.LIMITED_TIME,
                                                      className: T.limitedTimeBadge
                                                  }),
                                              (0, a.jsx)('img', {
                                                  className: T.heroHeaderLogo,
                                                  src: (0, C.uV)(null !== (A = null === (o = U.feature) || void 0 === o ? void 0 : o.logo) && void 0 !== A ? A : '', { size: h.n }),
                                                  alt: null === (k = U.feature) || void 0 === k ? void 0 : k.name
                                              }),
                                              (0, a.jsx)(u.Text, {
                                                  color: 'always-white',
                                                  variant: 'text-md/normal',
                                                  className: T.subHeaderText,
                                                  children: null === (R = U.feature) || void 0 === R ? void 0 : R.summary
                                              })
                                          ]
                                      }),
                                (0, a.jsx)('div', {
                                    className: T.heroHeaderButtonContainer,
                                    children: (0, a.jsx)(u.Button, {
                                        className: T.heroHeaderButton,
                                        color: u.ButtonColors.WHITE,
                                        onClick: () => P('shop latest category hero', H),
                                        children: z
                                    })
                                })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: i()(T.row, T.feed, T.feedSingleRow),
                            children: M
                                ? (0, a.jsx)(a.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, a.jsx)(b.K, {}, t))
                                  })
                                : (0, a.jsx)(a.Fragment, {
                                      children: G.map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...r } = e;
                                          return (0, a.jsx)(
                                              E.Z,
                                              {
                                                  product: r,
                                                  category: t,
                                                  user: y,
                                                  isInFeedView: !0
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        (0, a.jsxs)('div', {
                            className: i()(T.section, T.col2, T.featuredBlocksContainer),
                            children: [
                                (0, a.jsxs)(u.Clickable, {
                                    className: i()(T.featuredBlock),
                                    style: { backgroundImage: 'url('.concat(F ? N : B, ')') },
                                    onClick: () => P('shop marketing tile', F ? c.T.AUTUMN_EQUINOX : c.T.FALL),
                                    children: [
                                        (null === (r = p.Z.getCategory(F ? c.T.AUTUMN_EQUINOX : c.T.FALL)) || void 0 === r ? void 0 : r.unpublishedAt) != null &&
                                            (0, a.jsx)(u.TextBadge, {
                                                disableColor: !0,
                                                text: x.Z.Messages.LIMITED_TIME,
                                                className: T.featuredBlockBadge
                                            }),
                                        (0, a.jsx)(u.Button, {
                                            className: T.featuredBlockButton,
                                            color: u.ButtonColors.WHITE,
                                            onClick: () => {},
                                            children: x.Z.Messages.TAKE_ME_THERE
                                        })
                                    ]
                                }),
                                (0, a.jsxs)(u.Clickable, {
                                    className: i()(T.featuredBlock),
                                    style: { backgroundImage: 'url('.concat(F ? S : v, ')') },
                                    onClick: () => P('shop marketing tile', c.T.ANIME_V2),
                                    children: [
                                        (0, a.jsx)(u.TextBadge, {
                                            disableColor: !0,
                                            text: x.Z.Messages.MOST_POPULAR,
                                            className: T.featuredBlockBadge
                                        }),
                                        (0, a.jsx)(u.Button, {
                                            className: T.featuredBlockButton,
                                            color: u.ButtonColors.WHITE,
                                            onClick: () => {},
                                            children: x.Z.Messages.TAKE_ME_THERE
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, a.jsxs)('div', {
                            className: i()(T.row, T.between, T.section),
                            children: [
                                (0, a.jsx)(u.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: x.Z.Messages.COLLECTIBLES_POPULAR_PICKS
                                }),
                                (0, a.jsxs)(u.Clickable, {
                                    className: T.shopAll,
                                    onClick: () => P('shop all top'),
                                    children: [
                                        (0, a.jsx)(u.ServerGridIcon, {}),
                                        (0, a.jsx)(u.Text, {
                                            variant: 'text-sm/medium',
                                            children: x.Z.Messages.COLLECTIBLES_SHOP_ALL
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: T.feed,
                            ref: w,
                            children: M
                                ? (0, a.jsx)(a.Fragment, { children: [...Array(12)].map((e, t) => (0, a.jsx)(b.K, {}, t + 1)) })
                                : (0, a.jsx)(a.Fragment, {
                                      children: V.slice(0, Z).map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...r } = e;
                                          return (0, a.jsx)(
                                              E.Z,
                                              {
                                                  product: r,
                                                  category: t,
                                                  user: y,
                                                  isInFeedView: !0
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        Z >= I.iA &&
                            (0, a.jsxs)('div', {
                                className: T.endOfFeed,
                                children: [
                                    (0, a.jsx)(u.Heading, {
                                        variant: 'heading-md/semibold',
                                        children: x.Z.Messages.COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_TEXT
                                    }),
                                    (0, a.jsx)(u.Button, {
                                        className: T.endOfFeedButton,
                                        onClick: () => {
                                            P('shop all bottom', void 0, !0);
                                        },
                                        children: (0, a.jsx)(u.Text, {
                                            variant: 'text-md/medium',
                                            color: 'always-white',
                                            children: x.Z.Messages.COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_BUTTON
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
