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
    f = r(25251),
    p = r(594174),
    m = r(597688),
    C = r(1870),
    _ = r(884697),
    g = r(997136),
    h = r(223143),
    b = r(823941),
    E = r(38900),
    I = r(709999),
    x = r(215023),
    T = r(689938),
    v = r(632007),
    S = r(367815),
    L = r(454410),
    N = r(170873),
    O = r(562292),
    B = r(80995),
    k = r(725763);
let j = { [c.T.AUTUMN_EQUINOX]: { hero: { left: v.darker } } },
    R = (e) => (null == e ? {} : l()(j, e, {}));
t.Z = (e) => {
    var t, r, s, o, j, A, P;
    let { handleTransition: Z, numVisibleItems: M } = e,
        { isFetchingCategories: y } = (0, h.Z)(),
        w = (0, d.e7)([f.Z], () => f.Z.hasFetched() || !f.Z.isFetching),
        F = y || !w,
        H = (0, d.e7)([p.default], () => p.default.getCurrentUser()),
        D = n.createRef(),
        U = (0, g.x)('CollectiblesFeedShop'),
        W = U ? c.T.BAND : c.T.AUTUMN_EQUINOX,
        G = R(W),
        V = (0, d.cj)([m.Z], () => ({ feature: m.Z.getCategory(W) })),
        z = U ? x.WC : x.v7,
        Y = n.useMemo(
            () =>
                z
                    .map((e) => m.Z.getProduct(e))
                    .filter((e) => null != e)
                    .map((e) => ({
                        ...e,
                        category: m.Z.getCategoryForProduct(e.skuId)
                    }))
                    .filter((e) => null != e.category)
                    .sort((e, t) => {
                        let r = !!C.Z.getPurchase(e.skuId),
                            a = !!C.Z.getPurchase(t.skuId);
                        return Number(r) - Number(a);
                    })
                    .slice(0, 4),
            [y, U]
        ),
        K = n.useMemo(
            () =>
                x.yo
                    .map((e) => m.Z.getProduct(e))
                    .filter((e) => null != e)
                    .map((e) => ({
                        ...e,
                        category: m.Z.getCategoryForProduct(e.skuId)
                    }))
                    .filter((e) => null != e.category)
                    .sort((e, t) => {
                        let r = !!C.Z.getPurchase(e.skuId),
                            a = !!C.Z.getPurchase(t.skuId);
                        return Number(r) - Number(a);
                    }),
            [y]
        );
    if (null == H) return null;
    let X = T.Z.Messages.COLLECTIBLES_SHOP_CATEGORY_COLLECTION.format({ category_name: null === (t = V.feature) || void 0 === t ? void 0 : t.name });
    return (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)('div', {
            className: v.shop,
            children: [
                (0, a.jsxs)('div', {
                    className: v.banner,
                    children: [
                        (0, a.jsx)('div', {
                            className: v.bannerImage,
                            style: { backgroundImage: 'url('.concat(U ? N : B, ')') }
                        }),
                        (0, a.jsx)('div', { className: i()(v.bannerShadow, v.left, l()(G, 'hero.left')) }),
                        (0, a.jsx)('div', { className: i()(v.bannerShadow, v.right, l()(G, 'hero.right')) })
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: i()(v.content, v.mainContent),
                    children: [
                        (0, a.jsxs)('div', {
                            className: i()(v.heroHeaderContainer),
                            children: [
                                y
                                    ? (0, a.jsx)('div', { className: i()(v.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, a.jsxs)('div', {
                                          className: i()(v.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null === (s = V.feature) || void 0 === s ? void 0 : s.unpublishedAt) != null &&
                                                  (0, a.jsx)(u.TextBadge, {
                                                      disableColor: !0,
                                                      text: T.Z.Messages.LIMITED_TIME,
                                                      className: v.limitedTimeBadge
                                                  }),
                                              (0, a.jsx)('img', {
                                                  className: v.heroHeaderLogo,
                                                  src: (0, _.uV)(null !== (P = null === (o = V.feature) || void 0 === o ? void 0 : o.logo) && void 0 !== P ? P : '', { size: b.n }),
                                                  alt: null === (j = V.feature) || void 0 === j ? void 0 : j.name
                                              }),
                                              (0, a.jsx)(u.Text, {
                                                  color: 'always-white',
                                                  variant: 'text-md/normal',
                                                  className: v.subHeaderText,
                                                  children: null === (A = V.feature) || void 0 === A ? void 0 : A.summary
                                              })
                                          ]
                                      }),
                                (0, a.jsx)('div', {
                                    className: v.heroHeaderButtonContainer,
                                    children: (0, a.jsx)(u.Button, {
                                        className: v.heroHeaderButton,
                                        color: u.ButtonColors.WHITE,
                                        onClick: () => Z('shop latest category hero', W),
                                        children: X
                                    })
                                })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: i()(v.row, v.feed, v.feedSingleRow),
                            children: F
                                ? (0, a.jsx)(a.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, a.jsx)(E.K, {}, t))
                                  })
                                : (0, a.jsx)(a.Fragment, {
                                      children: Y.map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...r } = e;
                                          return (0, a.jsx)(
                                              I.Z,
                                              {
                                                  product: r,
                                                  category: t,
                                                  user: H,
                                                  isInFeedView: !0
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        (0, a.jsxs)('div', {
                            className: i()(v.section, v.col2, v.featuredBlocksContainer),
                            children: [
                                (0, a.jsxs)(u.Clickable, {
                                    className: i()(v.featuredBlock),
                                    style: { backgroundImage: 'url('.concat(U ? O : k, ')') },
                                    onClick: () => Z('shop marketing tile', U ? c.T.AUTUMN_EQUINOX : c.T.FALL),
                                    children: [
                                        (null === (r = m.Z.getCategory(U ? c.T.AUTUMN_EQUINOX : c.T.FALL)) || void 0 === r ? void 0 : r.unpublishedAt) != null &&
                                            (0, a.jsx)(u.TextBadge, {
                                                disableColor: !0,
                                                text: T.Z.Messages.LIMITED_TIME,
                                                className: v.featuredBlockBadge
                                            }),
                                        (0, a.jsx)(u.Button, {
                                            className: v.featuredBlockButton,
                                            color: u.ButtonColors.WHITE,
                                            onClick: () => {},
                                            children: T.Z.Messages.TAKE_ME_THERE
                                        })
                                    ]
                                }),
                                (0, a.jsxs)(u.Clickable, {
                                    className: i()(v.featuredBlock),
                                    style: { backgroundImage: 'url('.concat(U ? L : S, ')') },
                                    onClick: () => Z('shop marketing tile', c.T.ANIME_V2),
                                    children: [
                                        (0, a.jsx)(u.TextBadge, {
                                            disableColor: !0,
                                            text: T.Z.Messages.MOST_POPULAR,
                                            className: v.featuredBlockBadge
                                        }),
                                        (0, a.jsx)(u.Button, {
                                            className: v.featuredBlockButton,
                                            color: u.ButtonColors.WHITE,
                                            onClick: () => {},
                                            children: T.Z.Messages.TAKE_ME_THERE
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, a.jsxs)('div', {
                            className: i()(v.row, v.between, v.section),
                            children: [
                                (0, a.jsx)(u.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: T.Z.Messages.COLLECTIBLES_POPULAR_PICKS
                                }),
                                (0, a.jsxs)(u.Clickable, {
                                    className: v.shopAll,
                                    onClick: () => Z('shop all top'),
                                    children: [
                                        (0, a.jsx)(u.ServerGridIcon, {}),
                                        (0, a.jsx)(u.Text, {
                                            variant: 'text-sm/medium',
                                            children: T.Z.Messages.COLLECTIBLES_SHOP_ALL
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: v.feed,
                            ref: D,
                            children: F
                                ? (0, a.jsx)(a.Fragment, { children: [...Array(12)].map((e, t) => (0, a.jsx)(E.K, {}, t + 1)) })
                                : (0, a.jsx)(a.Fragment, {
                                      children: K.slice(0, M).map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...r } = e;
                                          return (0, a.jsx)(
                                              I.Z,
                                              {
                                                  product: r,
                                                  category: t,
                                                  user: H,
                                                  isInFeedView: !0
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        M >= x.iA &&
                            (0, a.jsxs)('div', {
                                className: v.endOfFeed,
                                children: [
                                    (0, a.jsx)(u.Heading, {
                                        variant: 'heading-md/semibold',
                                        children: T.Z.Messages.COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_TEXT
                                    }),
                                    (0, a.jsx)(u.Button, {
                                        className: v.endOfFeedButton,
                                        onClick: () => {
                                            Z('shop all bottom', void 0, !0);
                                        },
                                        children: (0, a.jsx)(u.Text, {
                                            variant: 'text-md/medium',
                                            color: 'always-white',
                                            children: T.Z.Messages.COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_BUTTON
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
