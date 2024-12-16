n(47120), n(653041);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(180650),
    o = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(70097),
    m = n(580747),
    h = n(594174),
    p = n(451478),
    g = n(960048),
    f = n(381585),
    C = n(597688),
    v = n(884697),
    b = n(606414),
    x = n(744112),
    _ = n(223143),
    k = n(937510),
    I = n(823941),
    E = n(752053),
    S = n(38900),
    j = n(709999),
    T = n(529180),
    N = n(957058),
    B = n(215023),
    y = n(388032),
    L = n(218142);
t.Z = (e) => {
    var t, n, i, P, Z, O, w, A, R;
    let { handleTransition: F, numVisibleItems: H } = e,
        { categories: D, isFetchingCategories: V, fetchCategoriesError: M, fetchPurchasesError: W, claimError: U, refreshCategories: G } = (0, _.ZP)({ location: 'CollectiblesFeedShop' }),
        z = null !== (i = null != M ? M : W) && void 0 !== i ? i : U,
        $ = Array.from(D.values()),
        K = (0, o.e7)([h.default], () => h.default.getCurrentUser()),
        J = a.createRef(),
        Y = (0, x.b)('Collectibles Shop Button'),
        q = (0, m.Z)('shop_disable_cache'),
        Q = (0, m.Z)('shop_include_unpublished'),
        X = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        ee = (0, o.e7)([p.Z], () => p.Z.isFocused()),
        et = (0, N.u)(),
        en = (0, b.c)('CollectiblesFeedShop') && null != C.Z.getCategory(s.T.ROBERT),
        er = $[0],
        ea = $[1],
        ei = C.Z.getCategory(en ? s.T.ROBERT : s.T.ANIME_V2),
        el = a.useCallback(() => {
            G();
        }, [G]),
        es = a.useMemo(() => {
            var e;
            return et(null !== (e = null == er ? void 0 : er.heroRanking) && void 0 !== e ? e : []);
        }, [V, et]),
        eo = (0, k.l)(es).slice(0, 4),
        ec = a.useMemo(() => et(B.yo), [V, et]),
        ed = (0, k.l)(ec),
        eu = (null == er ? void 0 : er.skuId) != null ? (0, B.ZS)(er.skuId) : void 0;
    if (null == K) return null;
    let em = y.intl.formatToPlainString(y.t.wvKYCg, { category_name: null == er ? void 0 : er.name });
    if (null != z) {
        let e = [];
        null != M ? e.push('shop load fetch categories error: '.concat(z.message)) : null != W ? e.push('shop load fetch purchase error: '.concat(z.message)) : e.push('shop load claim error: '.concat(z.message)),
            g.Z.captureMessage(e.join('\n'), {
                tags: {
                    isStaff: K.isStaff().toString(),
                    preloadEnabled: Y.toString(),
                    disableCache: q.toString(),
                    includeUnpublished: Q.toString()
                }
            });
    }
    if (null != M)
        return (0, r.jsx)(E.Z, {
            onRetry: el,
            errorOrigin: E.i.SHOP_PAGE,
            errorMessage: M.message
        });
    let eh = null !== (P = null == eu ? void 0 : eu.heroBanner) && void 0 !== P ? P : void 0,
        ep = null !== (Z = null == eh ? void 0 : eh.animationSource) && void 0 !== Z ? Z : null == er ? void 0 : null === (t = er.bannerAsset) || void 0 === t ? void 0 : t.animated,
        eg =
            null !== (w = null == er ? void 0 : null === (n = er.heroBannerAsset) || void 0 === n ? void 0 : n.static) && void 0 !== w
                ? w
                : (0, v.uV)(null !== (O = null == er ? void 0 : er.heroBanner) && void 0 !== O ? O : '', {
                      size: B.pv,
                      format: 'jpg'
                  });
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)('div', {
            className: L.shop,
            children: [
                (0, r.jsxs)('div', {
                    className: L.banner,
                    children: [
                        null != ep && !X && ee
                            ? (0, r.jsx)(u.Z, {
                                  className: L.bannerVideoBackground,
                                  src: ep,
                                  autoPlay: !0,
                                  loop: !0
                              })
                            : (0, r.jsx)('div', {
                                  className: L.bannerImage,
                                  style: { backgroundImage: 'url('.concat(eg, ')') }
                              }),
                        (0, r.jsx)('div', {
                            className: l()(L.bannerShadow, L.left, { [L.darker]: null == eh ? void 0 : eh.darker }),
                            style: (null == eh ? void 0 : eh.gradientLeft) != null ? { background: null == eh ? void 0 : eh.gradientLeft } : void 0
                        }),
                        (0, r.jsx)('div', {
                            className: l()(L.bannerShadow, L.right, { [L.darker]: null == eh ? void 0 : eh.darker }),
                            style: (null == eh ? void 0 : eh.gradientRight) != null ? { background: null == eh ? void 0 : eh.gradientRight } : void 0
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: l()(L.content, L.mainContent),
                    children: [
                        (0, r.jsxs)('div', {
                            className: l()(L.heroHeaderContainer),
                            children: [
                                V
                                    ? (0, r.jsx)('div', { className: l()(L.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, r.jsxs)('div', {
                                          className: l()(L.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null == er ? void 0 : er.unpublishedAt) != null &&
                                                  (0, r.jsx)(c.TextBadge, {
                                                      disableColor: !0,
                                                      text: y.intl.string(y.t['h/uBCQ']),
                                                      className: L.limitedTimeBadge
                                                  }),
                                              (0, r.jsxs)('div', {
                                                  className: l()(L.heroLogoNameContainer),
                                                  children: [
                                                      (0, r.jsx)('img', {
                                                          className: L.heroHeaderLogo,
                                                          src: (0, v.uV)(null !== (R = null !== (A = null == er ? void 0 : er.heroLogo) && void 0 !== A ? A : null == er ? void 0 : er.logo) && void 0 !== R ? R : '', { size: I.n }),
                                                          alt: null == er ? void 0 : er.name
                                                      }),
                                                      (0, r.jsx)(c.Text, {
                                                          variant: 'text-md/normal',
                                                          className: null != eu && eu.showDarkBannerText ? L.subHeaderTextDark : L.subHeaderText,
                                                          children: null == er ? void 0 : er.summary
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                !V &&
                                    (0, r.jsx)('div', {
                                        className: L.heroHeaderButtonContainer,
                                        children: (0, r.jsx)(c.Button, {
                                            className: L.heroHeaderButton,
                                            color: c.ButtonColors.WHITE,
                                            onClick: () => F('shop latest category hero', null == er ? void 0 : er.skuId),
                                            children: em
                                        })
                                    })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: l()(L.row, L.feed, L.feedSingleRow),
                            children: V
                                ? (0, r.jsx)(r.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(S.K, {}, t))
                                  })
                                : (0, r.jsx)(r.Fragment, {
                                      children: eo.map((e, t) => {
                                          let n = C.Z.getCategoryForProduct(e.skuId);
                                          return null == e || null == n
                                              ? null
                                              : (0, r.jsx)(
                                                    f.k0,
                                                    {
                                                        newValue: {
                                                            tilePosition: t,
                                                            pageSection: 'top 4',
                                                            categoryPosition: 0
                                                        },
                                                        children: (0, r.jsx)(
                                                            j.Z,
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
                            className: l()(L.section, L.col2, L.featuredBlocksContainer),
                            children: (0, r.jsx)(() => {
                                if (V)
                                    return (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)('div', {
                                                className: l()(L.skeleton, L.featuredBlock),
                                                children: (0, r.jsx)('div', { className: L.skeletonBody })
                                            }),
                                            (0, r.jsx)('div', {
                                                className: l()(L.skeleton, L.featuredBlock),
                                                children: (0, r.jsx)('div', { className: L.skeletonBody })
                                            })
                                        ]
                                    });
                                let e = (null == ea ? void 0 : ea.unpublishedAt) != null ? y.intl.string(y.t['h/uBCQ']) : void 0,
                                    t = y.intl.string(new Date() > B.gJ ? y.t.l0CjbW : y.t.uPewb2),
                                    n = en ? t : y.intl.string(y.t['o/oRJC']);
                                return (0, r.jsxs)(f.k0, {
                                    newValue: {
                                        categoryPosition: 1,
                                        pageSection: 'featured_block'
                                    },
                                    children: [
                                        null != ea &&
                                            (0, r.jsx)(T.g, {
                                                category: ea,
                                                badgeText: e,
                                                handleTransition: F
                                            }),
                                        null != ei &&
                                            (0, r.jsx)(T.g, {
                                                category: ei,
                                                badgeText: n,
                                                handleTransition: F
                                            })
                                    ]
                                });
                            }, {})
                        }),
                        (0, r.jsxs)('div', {
                            className: l()(L.row, L.between, L.section),
                            children: [
                                (0, r.jsx)(c.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: y.intl.string(y.t.ivaAAw)
                                }),
                                (0, r.jsxs)(c.Clickable, {
                                    className: L.shopAll,
                                    onClick: () => F('shop all top'),
                                    children: [
                                        (0, r.jsx)(c.ServerGridIcon, {}),
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-sm/medium',
                                            children: y.intl.string(y.t.xFcotb)
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: L.feed,
                            ref: J,
                            children: V
                                ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(S.K, {}, t + 1)) })
                                : (0, r.jsx)(r.Fragment, {
                                      children: ed.slice(0, H).map((e, t) => {
                                          let n = C.Z.getCategoryForProduct(e.skuId);
                                          return null == e || null == n
                                              ? null
                                              : (0, r.jsx)(
                                                    f.k0,
                                                    {
                                                        newValue: {
                                                            tilePosition: t,
                                                            pageSection: 'popular picks',
                                                            categoryPosition: 2
                                                        },
                                                        children: (0, r.jsx)(
                                                            j.Z,
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
                        H >= B.iA &&
                            (0, r.jsxs)('div', {
                                className: L.endOfFeed,
                                children: [
                                    (0, r.jsx)(c.Heading, {
                                        variant: 'heading-md/semibold',
                                        children: y.intl.string(y.t.Yr70c3)
                                    }),
                                    (0, r.jsx)(c.Button, {
                                        className: L.endOfFeedButton,
                                        onClick: () => {
                                            F('shop all bottom', void 0, !0);
                                        },
                                        children: (0, r.jsx)(c.Text, {
                                            variant: 'text-md/medium',
                                            color: 'always-white',
                                            children: y.intl.string(y.t.AfrvRE)
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
