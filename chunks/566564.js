n(47120), n(653041);
var r = n(200651),
    a = n(192379),
    s = n(120356),
    i = n.n(s),
    l = n(180650),
    o = n(442837),
    c = n(481060),
    d = n(580747),
    u = n(594174),
    m = n(960048),
    p = n(381585),
    f = n(597688),
    h = n(884697),
    g = n(251068),
    C = n(43610),
    b = n(744112),
    x = n(223143),
    v = n(937510),
    _ = n(823941),
    k = n(752053),
    j = n(38900),
    E = n(709999),
    I = n(215023),
    T = n(388032),
    S = n(632007),
    B = n(454410),
    N = n(783433),
    y = n(170873),
    L = n(562292),
    Z = n(196315);
t.Z = (e) => {
    var t, n, s, P, O, w, A;
    let { handleTransition: H, numVisibleItems: F } = e,
        { categories: R, isFetchingCategories: D, fetchCategoriesError: V, fetchPurchasesError: M, claimError: W, refreshCategories: U } = (0, x.Z)(),
        z = null !== (t = null != V ? V : M) && void 0 !== t ? t : W,
        G = Array.from(R.values()),
        K = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        $ = a.createRef(),
        J = (0, C.t)('CollectiblesFeedShop'),
        Y = (0, g.m)('CollectiblesFeedShop'),
        q = (0, b.b)('Collectibles Shop Button'),
        Q = (0, d.Z)('shop_disable_cache'),
        X = (0, d.Z)('shop_include_unpublished'),
        ee = Y ? G[0] : f.Z.getCategory(J ? l.T.SPOOKY_NIGHT : l.T.BAND),
        et = Y ? G[1] : f.Z.getCategory(J ? l.T.BAND : l.T.AUTUMN_EQUINOX),
        en = f.Z.getCategory(l.T.ANIME_V2),
        er = Y
            ? (0, h.uV)(null !== (n = null == ee ? void 0 : ee.heroBanner) && void 0 !== n ? n : '', {
                  size: I.pv,
                  format: 'jpg'
              })
            : J
              ? Z
              : y,
        ea = Y
            ? (0, h.uV)(null !== (s = null == et ? void 0 : et.featuredBlock) && void 0 !== s ? s : '', {
                  size: I.J0,
                  format: 'png'
              })
            : J
              ? N
              : L,
        es = Y
            ? (0, h.uV)(null !== (P = null == en ? void 0 : en.featuredBlock) && void 0 !== P ? P : '', {
                  size: I.J0,
                  format: 'png'
              })
            : B,
        ei = a.useCallback(() => {
            U();
        }, [U]),
        el = Y ? (null !== (O = null == ee ? void 0 : ee.heroRanking) && void 0 !== O ? O : []) : J ? I.Ku : I.WC,
        eo = a.useMemo(() => el.map((e) => f.Z.getProduct(e)).filter((e) => null != e), [D, J]),
        ec = (0, v.l)(eo).slice(0, 4),
        ed = a.useMemo(() => I.yo.map((e) => f.Z.getProduct(e)).filter((e) => null != e), [D]),
        eu = (0, v.l)(ed);
    if (null == K) return null;
    let em = T.intl.formatToPlainString(T.t.wvKYCg, { category_name: null == ee ? void 0 : ee.name });
    if (null != z) {
        let e = [];
        return (
            null != V ? e.push('shop load fetch categories error: '.concat(z.message)) : null != M ? e.push('shop load fetch purchase error: '.concat(z.message)) : e.push('shop load claim error: '.concat(z.message)),
            m.Z.captureMessage(e.join('\n'), {
                tags: {
                    isStaff: K.isStaff().toString(),
                    preloadEnabled: q.toString(),
                    disableCache: Q.toString(),
                    includeUnpublished: X.toString()
                }
            }),
            (0, r.jsx)(k.Z, {
                onRetry: ei,
                errorOrigin: k.i.SHOP_PAGE,
                errorMessage: z.message
            })
        );
    }
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)('div', {
            className: S.shop,
            children: [
                (0, r.jsxs)('div', {
                    className: S.banner,
                    children: [
                        (0, r.jsx)('div', {
                            className: S.bannerImage,
                            style: { backgroundImage: 'url('.concat(er, ')') }
                        }),
                        (0, r.jsx)('div', { className: i()(S.bannerShadow, S.left) }),
                        (0, r.jsx)('div', { className: i()(S.bannerShadow, S.right) })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: i()(S.content, S.mainContent),
                    children: [
                        (0, r.jsxs)('div', {
                            className: i()(S.heroHeaderContainer),
                            children: [
                                D
                                    ? (0, r.jsx)('div', { className: i()(S.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, r.jsxs)('div', {
                                          className: i()(S.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null == ee ? void 0 : ee.unpublishedAt) != null &&
                                                  (0, r.jsx)(c.TextBadge, {
                                                      disableColor: !0,
                                                      text: T.intl.string(T.t['h/uBCQ']),
                                                      className: S.limitedTimeBadge
                                                  }),
                                              (0, r.jsxs)('div', {
                                                  className: i()(S.heroLogoNameContainer),
                                                  children: [
                                                      (0, r.jsx)('img', {
                                                          className: S.heroHeaderLogo,
                                                          src: (0, h.uV)(null !== (A = null !== (w = null == ee ? void 0 : ee.heroLogo) && void 0 !== w ? w : null == ee ? void 0 : ee.logo) && void 0 !== A ? A : '', { size: _.n }),
                                                          alt: null == ee ? void 0 : ee.name
                                                      }),
                                                      (0, r.jsx)(c.Text, {
                                                          color: 'always-white',
                                                          variant: 'text-md/normal',
                                                          className: S.subHeaderText,
                                                          children: null == ee ? void 0 : ee.summary
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                !D &&
                                    (0, r.jsx)('div', {
                                        className: S.heroHeaderButtonContainer,
                                        children: (0, r.jsx)(c.Button, {
                                            className: S.heroHeaderButton,
                                            color: c.ButtonColors.WHITE,
                                            onClick: () => H('shop latest category hero', null == ee ? void 0 : ee.skuId),
                                            children: em
                                        })
                                    })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: i()(S.row, S.feed, S.feedSingleRow),
                            children: D
                                ? (0, r.jsx)(r.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(j.K, {}, t))
                                  })
                                : (0, r.jsx)(r.Fragment, {
                                      children: ec.map((e, t) => {
                                          let n = f.Z.getCategoryForProduct(e.skuId);
                                          return null == e || null == n
                                              ? null
                                              : (0, r.jsx)(
                                                    p.k0,
                                                    {
                                                        newValue: {
                                                            tilePosition: t,
                                                            pageSection: 'top 4',
                                                            categoryPosition: 0
                                                        },
                                                        children: (0, r.jsx)(
                                                            E.Z,
                                                            {
                                                                product: e,
                                                                category: n,
                                                                user: K,
                                                                isInFeedView: !0
                                                            },
                                                            e.skuId
                                                        )
                                                    },
                                                    null == e ? void 0 : e.skuId
                                                );
                                      })
                                  })
                        }),
                        (0, r.jsx)('div', {
                            className: i()(S.section, S.col2, S.featuredBlocksContainer),
                            children: D
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: i()(S.skeleton, S.featuredBlock),
                                              children: (0, r.jsx)('div', { className: S.skeletonBody })
                                          }),
                                          (0, r.jsx)('div', {
                                              className: i()(S.skeleton, S.featuredBlock),
                                              children: (0, r.jsx)('div', { className: S.skeletonBody })
                                          })
                                      ]
                                  })
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsxs)(c.Clickable, {
                                              className: i()(S.featuredBlock),
                                              style: { backgroundImage: 'url('.concat(ea, ')') },
                                              onClick: () => H('shop marketing tile', null == et ? void 0 : et.skuId),
                                              children: [
                                                  (null == et ? void 0 : et.unpublishedAt) != null &&
                                                      (0, r.jsx)(c.TextBadge, {
                                                          disableColor: !0,
                                                          text: T.intl.string(T.t['h/uBCQ']),
                                                          className: S.featuredBlockBadge
                                                      }),
                                                  (0, r.jsx)(c.Button, {
                                                      className: S.featuredBlockButton,
                                                      color: c.ButtonColors.WHITE,
                                                      onClick: () => {},
                                                      children: T.intl.string(T.t.jVcuVV)
                                                  })
                                              ]
                                          }),
                                          (0, r.jsx)(c.Clickable, {
                                              className: i()(S.featuredBlock),
                                              style: { backgroundImage: 'url('.concat(es, ')') },
                                              onClick: () => H('shop marketing tile', l.T.ANIME_V2),
                                              children:
                                                  !D &&
                                                  (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          (0, r.jsx)(c.TextBadge, {
                                                              disableColor: !0,
                                                              text: T.intl.string(T.t['o/oRJC']),
                                                              className: S.featuredBlockBadge
                                                          }),
                                                          (0, r.jsx)(c.Button, {
                                                              className: S.featuredBlockButton,
                                                              color: c.ButtonColors.WHITE,
                                                              onClick: () => {},
                                                              children: T.intl.string(T.t.jVcuVV)
                                                          })
                                                      ]
                                                  })
                                          })
                                      ]
                                  })
                        }),
                        (0, r.jsxs)('div', {
                            className: i()(S.row, S.between, S.section),
                            children: [
                                (0, r.jsx)(c.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: T.intl.string(T.t.ivaAAw)
                                }),
                                (0, r.jsxs)(c.Clickable, {
                                    className: S.shopAll,
                                    onClick: () => H('shop all top'),
                                    children: [
                                        (0, r.jsx)(c.ServerGridIcon, {}),
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-sm/medium',
                                            children: T.intl.string(T.t.xFcotb)
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: S.feed,
                            ref: $,
                            children: D
                                ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(j.K, {}, t + 1)) })
                                : (0, r.jsx)(r.Fragment, {
                                      children: eu.slice(0, F).map((e, t) => {
                                          let n = f.Z.getCategoryForProduct(e.skuId);
                                          return null == e || null == n
                                              ? null
                                              : (0, r.jsx)(
                                                    p.k0,
                                                    {
                                                        newValue: {
                                                            tilePosition: t,
                                                            pageSection: 'popular picks',
                                                            categoryPosition: 2
                                                        },
                                                        children: (0, r.jsx)(
                                                            E.Z,
                                                            {
                                                                product: e,
                                                                category: n,
                                                                user: K,
                                                                isInFeedView: !0
                                                            },
                                                            e.skuId
                                                        )
                                                    },
                                                    null == e ? void 0 : e.skuId
                                                );
                                      })
                                  })
                        }),
                        F >= I.iA &&
                            (0, r.jsxs)('div', {
                                className: S.endOfFeed,
                                children: [
                                    (0, r.jsx)(c.Heading, {
                                        variant: 'heading-md/semibold',
                                        children: T.intl.string(T.t.Yr70c3)
                                    }),
                                    (0, r.jsx)(c.Button, {
                                        className: S.endOfFeedButton,
                                        onClick: () => {
                                            H('shop all bottom', void 0, !0);
                                        },
                                        children: (0, r.jsx)(c.Text, {
                                            variant: 'text-md/medium',
                                            color: 'always-white',
                                            children: T.intl.string(T.t.AfrvRE)
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
