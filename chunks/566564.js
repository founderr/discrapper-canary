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
    _ = r(43610),
    g = r(223143),
    h = r(823941),
    b = r(752053),
    E = r(38900),
    I = r(709999),
    x = r(215023),
    T = r(689938),
    v = r(632007),
    S = r(454410),
    L = r(783433),
    N = r(170873),
    O = r(562292),
    B = r(196315);
let k = { [c.T.AUTUMN_EQUINOX]: { hero: { left: v.darker } } },
    j = (e) => (null == e ? {} : l()(k, e, {}));
t.Z = (e) => {
    var t, r, s, o, k, R, A;
    let { handleTransition: P, numVisibleItems: Z } = e,
        { isFetchingCategories: M, error: y, refreshCategories: w } = (0, g.Z)(),
        H = (0, d.e7)([f.default], () => f.default.getCurrentUser()),
        F = n.createRef(),
        D = (0, _.t)('CollectiblesFeedShop'),
        U = D ? c.T.SPOOKY_NIGHT : c.T.BAND,
        W = j(U),
        G = (0, d.cj)([p.Z], () => ({ feature: p.Z.getCategory(U) })),
        V = n.useCallback(() => {
            w();
        }, [w]),
        z = D ? x.Ku : x.WC,
        Y = n.useMemo(
            () =>
                z
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
                    })
                    .slice(0, 4),
            [M, D]
        ),
        K = n.useMemo(
            () =>
                x.yo
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
    if (null == H) return null;
    let X = T.Z.Messages.COLLECTIBLES_SHOP_CATEGORY_COLLECTION.format({ category_name: null === (t = G.feature) || void 0 === t ? void 0 : t.name });
    if (y) return (0, a.jsx)(b.Z, { onRetry: V });
    return (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)('div', {
            className: v.shop,
            children: [
                (0, a.jsxs)('div', {
                    className: v.banner,
                    children: [
                        (0, a.jsx)('div', {
                            className: v.bannerImage,
                            style: { backgroundImage: 'url('.concat(D ? B : N, ')') }
                        }),
                        (0, a.jsx)('div', { className: i()(v.bannerShadow, v.left, l()(W, 'hero.left')) }),
                        (0, a.jsx)('div', { className: i()(v.bannerShadow, v.right, l()(W, 'hero.right')) })
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: i()(v.content, v.mainContent),
                    children: [
                        (0, a.jsxs)('div', {
                            className: i()(v.heroHeaderContainer),
                            children: [
                                M
                                    ? (0, a.jsx)('div', { className: i()(v.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, a.jsxs)('div', {
                                          className: i()(v.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null === (s = G.feature) || void 0 === s ? void 0 : s.unpublishedAt) != null &&
                                                  (0, a.jsx)(u.TextBadge, {
                                                      disableColor: !0,
                                                      text: T.Z.Messages.LIMITED_TIME,
                                                      className: v.limitedTimeBadge
                                                  }),
                                              (0, a.jsx)('img', {
                                                  className: v.heroHeaderLogo,
                                                  src: (0, C.uV)(null !== (A = null === (o = G.feature) || void 0 === o ? void 0 : o.logo) && void 0 !== A ? A : '', { size: h.n }),
                                                  alt: null === (k = G.feature) || void 0 === k ? void 0 : k.name
                                              }),
                                              (0, a.jsx)(u.Text, {
                                                  color: 'always-white',
                                                  variant: 'text-md/normal',
                                                  className: v.subHeaderText,
                                                  children: null === (R = G.feature) || void 0 === R ? void 0 : R.summary
                                              })
                                          ]
                                      }),
                                (0, a.jsx)('div', {
                                    className: v.heroHeaderButtonContainer,
                                    children: (0, a.jsx)(u.Button, {
                                        className: v.heroHeaderButton,
                                        color: u.ButtonColors.WHITE,
                                        onClick: () => P('shop latest category hero', U),
                                        children: X
                                    })
                                })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: i()(v.row, v.feed, v.feedSingleRow),
                            children: M
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
                                    style: { backgroundImage: 'url('.concat(D ? L : O, ')') },
                                    onClick: () => P('shop marketing tile', D ? c.T.BAND : c.T.AUTUMN_EQUINOX),
                                    children: [
                                        (null === (r = p.Z.getCategory(D ? c.T.BAND : c.T.AUTUMN_EQUINOX)) || void 0 === r ? void 0 : r.unpublishedAt) != null &&
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
                                    style: { backgroundImage: 'url('.concat(S, ')') },
                                    onClick: () => P('shop marketing tile', c.T.ANIME_V2),
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
                                    onClick: () => P('shop all top'),
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
                            ref: F,
                            children: M
                                ? (0, a.jsx)(a.Fragment, { children: [...Array(12)].map((e, t) => (0, a.jsx)(E.K, {}, t + 1)) })
                                : (0, a.jsx)(a.Fragment, {
                                      children: K.slice(0, Z).map((e) => {
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
                        Z >= x.iA &&
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
                                            P('shop all bottom', void 0, !0);
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
