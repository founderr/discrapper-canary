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
    h = n(381585),
    p = n(597688),
    f = n(884697),
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
    S = n(388032),
    T = n(632007),
    N = n(454410),
    B = n(783433),
    y = n(170873),
    L = n(562292),
    Z = n(196315);
t.Z = (e) => {
    var t, n, s, P, O, w, A;
    let { handleTransition: H, numVisibleItems: R } = e,
        { categories: F, isFetchingCategories: D, fetchCategoriesError: V, fetchPurchasesError: M, claimError: W, refreshCategories: U } = (0, x.Z)(),
        z = null !== (t = null != V ? V : M) && void 0 !== t ? t : W,
        G = Array.from(F.values()),
        K = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        $ = a.createRef(),
        J = (0, C.t)('CollectiblesFeedShop'),
        Y = (0, g.m)('CollectiblesFeedShop'),
        q = (0, b.b)('Collectibles Shop Button'),
        Q = (0, d.Z)('shop_disable_cache'),
        X = (0, d.Z)('shop_include_unpublished'),
        ee = Y ? G[0] : p.Z.getCategory(J ? l.T.SPOOKY_NIGHT : l.T.BAND),
        et = Y ? G[1] : p.Z.getCategory(J ? l.T.BAND : l.T.AUTUMN_EQUINOX),
        en = p.Z.getCategory(l.T.ANIME_V2),
        er = Y
            ? (0, f.uV)(null !== (n = null == ee ? void 0 : ee.heroBanner) && void 0 !== n ? n : '', {
                  size: I.pv,
                  format: 'jpg'
              })
            : J
              ? Z
              : y,
        ea = Y
            ? (0, f.uV)(null !== (s = null == et ? void 0 : et.featuredBlock) && void 0 !== s ? s : '', {
                  size: I.J0,
                  format: 'png'
              })
            : J
              ? B
              : L,
        es = Y
            ? (0, f.uV)(null !== (P = null == en ? void 0 : en.featuredBlock) && void 0 !== P ? P : '', {
                  size: I.J0,
                  format: 'png'
              })
            : N,
        ei = a.useCallback(() => {
            U();
        }, [U]),
        el = Y ? (null !== (O = null == ee ? void 0 : ee.heroRanking) && void 0 !== O ? O : []) : J ? I.Ku : I.WC,
        eo = a.useMemo(() => el.map((e) => p.Z.getProduct(e)).filter((e) => null != e), [D, J]),
        ec = (0, v.l)(eo).slice(0, 4),
        ed = a.useMemo(() => I.yo.map((e) => p.Z.getProduct(e)).filter((e) => null != e), [D]),
        eu = (0, v.l)(ed);
    if (null == K) return null;
    let em = S.intl.formatToPlainString(S.t.wvKYCg, { category_name: null == ee ? void 0 : ee.name });
    if (null != z) {
        let e = [];
        null != V ? e.push('shop load fetch categories error: '.concat(z.message)) : null != M ? e.push('shop load fetch purchase error: '.concat(z.message)) : e.push('shop load claim error: '.concat(z.message)),
            m.Z.captureMessage(e.join('\n'), {
                tags: {
                    isStaff: K.isStaff().toString(),
                    preloadEnabled: q.toString(),
                    disableCache: Q.toString(),
                    includeUnpublished: X.toString()
                }
            });
    }
    if (null != V)
        return (0, r.jsx)(k.Z, {
            onRetry: ei,
            errorOrigin: k.i.SHOP_PAGE,
            errorMessage: V.message
        });
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)('div', {
            className: T.shop,
            children: [
                (0, r.jsxs)('div', {
                    className: T.banner,
                    children: [
                        (0, r.jsx)('div', {
                            className: T.bannerImage,
                            style: { backgroundImage: 'url('.concat(er, ')') }
                        }),
                        (0, r.jsx)('div', { className: i()(T.bannerShadow, T.left) }),
                        (0, r.jsx)('div', { className: i()(T.bannerShadow, T.right) })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: i()(T.content, T.mainContent),
                    children: [
                        (0, r.jsxs)('div', {
                            className: i()(T.heroHeaderContainer),
                            children: [
                                D
                                    ? (0, r.jsx)('div', { className: i()(T.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, r.jsxs)('div', {
                                          className: i()(T.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null == ee ? void 0 : ee.unpublishedAt) != null &&
                                                  (0, r.jsx)(c.TextBadge, {
                                                      disableColor: !0,
                                                      text: S.intl.string(S.t['h/uBCQ']),
                                                      className: T.limitedTimeBadge
                                                  }),
                                              (0, r.jsxs)('div', {
                                                  className: i()(T.heroLogoNameContainer),
                                                  children: [
                                                      (0, r.jsx)('img', {
                                                          className: T.heroHeaderLogo,
                                                          src: (0, f.uV)(null !== (A = null !== (w = null == ee ? void 0 : ee.heroLogo) && void 0 !== w ? w : null == ee ? void 0 : ee.logo) && void 0 !== A ? A : '', { size: _.n }),
                                                          alt: null == ee ? void 0 : ee.name
                                                      }),
                                                      (0, r.jsx)(c.Text, {
                                                          color: 'always-white',
                                                          variant: 'text-md/normal',
                                                          className: T.subHeaderText,
                                                          children: null == ee ? void 0 : ee.summary
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                !D &&
                                    (0, r.jsx)('div', {
                                        className: T.heroHeaderButtonContainer,
                                        children: (0, r.jsx)(c.Button, {
                                            className: T.heroHeaderButton,
                                            color: c.ButtonColors.WHITE,
                                            onClick: () => H('shop latest category hero', null == ee ? void 0 : ee.skuId),
                                            children: em
                                        })
                                    })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: i()(T.row, T.feed, T.feedSingleRow),
                            children: D
                                ? (0, r.jsx)(r.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(j.K, {}, t))
                                  })
                                : (0, r.jsx)(r.Fragment, {
                                      children: ec.map((e, t) => {
                                          let n = p.Z.getCategoryForProduct(e.skuId);
                                          return null == e || null == n
                                              ? null
                                              : (0, r.jsx)(
                                                    h.k0,
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
                            className: i()(T.section, T.col2, T.featuredBlocksContainer),
                            children: D
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: i()(T.skeleton, T.featuredBlock),
                                              children: (0, r.jsx)('div', { className: T.skeletonBody })
                                          }),
                                          (0, r.jsx)('div', {
                                              className: i()(T.skeleton, T.featuredBlock),
                                              children: (0, r.jsx)('div', { className: T.skeletonBody })
                                          })
                                      ]
                                  })
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsxs)(c.Clickable, {
                                              className: i()(T.featuredBlock),
                                              style: { backgroundImage: 'url('.concat(ea, ')') },
                                              onClick: () => H('shop marketing tile', null == et ? void 0 : et.skuId),
                                              children: [
                                                  (null == et ? void 0 : et.unpublishedAt) != null &&
                                                      (0, r.jsx)(c.TextBadge, {
                                                          disableColor: !0,
                                                          text: S.intl.string(S.t['h/uBCQ']),
                                                          className: T.featuredBlockBadge
                                                      }),
                                                  (0, r.jsx)(c.Button, {
                                                      className: T.featuredBlockButton,
                                                      color: c.ButtonColors.WHITE,
                                                      onClick: () => {},
                                                      children: S.intl.string(S.t.jVcuVV)
                                                  })
                                              ]
                                          }),
                                          (0, r.jsx)(c.Clickable, {
                                              className: i()(T.featuredBlock),
                                              style: { backgroundImage: 'url('.concat(es, ')') },
                                              onClick: () => H('shop marketing tile', l.T.ANIME_V2),
                                              children:
                                                  !D &&
                                                  (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          (0, r.jsx)(c.TextBadge, {
                                                              disableColor: !0,
                                                              text: S.intl.string(S.t['o/oRJC']),
                                                              className: T.featuredBlockBadge
                                                          }),
                                                          (0, r.jsx)(c.Button, {
                                                              className: T.featuredBlockButton,
                                                              color: c.ButtonColors.WHITE,
                                                              onClick: () => {},
                                                              children: S.intl.string(S.t.jVcuVV)
                                                          })
                                                      ]
                                                  })
                                          })
                                      ]
                                  })
                        }),
                        (0, r.jsxs)('div', {
                            className: i()(T.row, T.between, T.section),
                            children: [
                                (0, r.jsx)(c.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: S.intl.string(S.t.ivaAAw)
                                }),
                                (0, r.jsxs)(c.Clickable, {
                                    className: T.shopAll,
                                    onClick: () => H('shop all top'),
                                    children: [
                                        (0, r.jsx)(c.ServerGridIcon, {}),
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-sm/medium',
                                            children: S.intl.string(S.t.xFcotb)
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: T.feed,
                            ref: $,
                            children: D
                                ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(j.K, {}, t + 1)) })
                                : (0, r.jsx)(r.Fragment, {
                                      children: eu.slice(0, R).map((e, t) => {
                                          let n = p.Z.getCategoryForProduct(e.skuId);
                                          return null == e || null == n
                                              ? null
                                              : (0, r.jsx)(
                                                    h.k0,
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
                        R >= I.iA &&
                            (0, r.jsxs)('div', {
                                className: T.endOfFeed,
                                children: [
                                    (0, r.jsx)(c.Heading, {
                                        variant: 'heading-md/semibold',
                                        children: S.intl.string(S.t.Yr70c3)
                                    }),
                                    (0, r.jsx)(c.Button, {
                                        className: T.endOfFeedButton,
                                        onClick: () => {
                                            H('shop all bottom', void 0, !0);
                                        },
                                        children: (0, r.jsx)(c.Text, {
                                            variant: 'text-md/medium',
                                            color: 'always-white',
                                            children: S.intl.string(S.t.AfrvRE)
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
