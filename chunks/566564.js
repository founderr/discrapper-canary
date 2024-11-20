n(47120), n(653041);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    s = n.n(i),
    l = n(180650),
    o = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(70097),
    m = n(580747),
    h = n(594174),
    p = n(960048),
    f = n(381585),
    g = n(597688),
    C = n(884697),
    b = n(251068),
    x = n(744112),
    v = n(223143),
    _ = n(937510),
    k = n(823941),
    j = n(752053),
    E = n(38900),
    I = n(709999),
    S = n(215023),
    T = n(388032),
    N = n(632007),
    B = n(454410),
    y = n(783433),
    L = n(196315);
t.Z = (e) => {
    var t, n, i, Z, P, O, w, A;
    let { handleTransition: R, numVisibleItems: H } = e,
        { categories: F, isFetchingCategories: D, fetchCategoriesError: V, fetchPurchasesError: M, claimError: W, refreshCategories: U } = (0, v.Z)(),
        z = null !== (t = null != V ? V : M) && void 0 !== t ? t : W,
        G = Array.from(F.values()),
        K = (0, o.e7)([h.default], () => h.default.getCurrentUser()),
        $ = a.createRef(),
        J = (0, b.m)('CollectiblesFeedShop'),
        Y = (0, x.b)('Collectibles Shop Button'),
        q = (0, m.Z)('shop_disable_cache'),
        Q = (0, m.Z)('shop_include_unpublished'),
        X = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        ee = J ? G[0] : g.Z.getCategory(l.T.SPOOKY_NIGHT),
        et = J ? G[1] : g.Z.getCategory(l.T.BAND),
        en = g.Z.getCategory(l.T.ANIME_V2),
        er = J
            ? (0, C.uV)(null !== (n = null == ee ? void 0 : ee.heroBanner) && void 0 !== n ? n : '', {
                  size: S.pv,
                  format: 'jpg'
              })
            : L,
        ea = J
            ? (0, C.uV)(null !== (i = null == et ? void 0 : et.featuredBlock) && void 0 !== i ? i : '', {
                  size: S.J0,
                  format: 'png'
              })
            : y,
        ei = J
            ? (0, C.uV)(null !== (Z = null == en ? void 0 : en.featuredBlock) && void 0 !== Z ? Z : '', {
                  size: S.J0,
                  format: 'png'
              })
            : B,
        es = a.useCallback(() => {
            U();
        }, [U]),
        el = J ? (null !== (P = null == ee ? void 0 : ee.heroRanking) && void 0 !== P ? P : []) : S.Ku,
        eo = a.useMemo(() => el.map((e) => g.Z.getProduct(e)).filter((e) => null != e), [D]),
        ec = (0, _.l)(eo).slice(0, 4),
        ed = a.useMemo(() => S.yo.map((e) => g.Z.getProduct(e)).filter((e) => null != e), [D]),
        eu = (0, _.l)(ed),
        em = (null == ee ? void 0 : ee.skuId) != null ? (0, S.ZS)(ee.skuId) : void 0;
    if (null == K) return null;
    let eh = T.intl.formatToPlainString(T.t.wvKYCg, { category_name: null == ee ? void 0 : ee.name });
    if (null != z) {
        let e = [];
        null != V ? e.push('shop load fetch categories error: '.concat(z.message)) : null != M ? e.push('shop load fetch purchase error: '.concat(z.message)) : e.push('shop load claim error: '.concat(z.message)),
            p.Z.captureMessage(e.join('\n'), {
                tags: {
                    isStaff: K.isStaff().toString(),
                    preloadEnabled: Y.toString(),
                    disableCache: q.toString(),
                    includeUnpublished: Q.toString()
                }
            });
    }
    if (null != V)
        return (0, r.jsx)(j.Z, {
            onRetry: es,
            errorOrigin: j.i.SHOP_PAGE,
            errorMessage: V.message
        });
    let ep = null !== (O = null == em ? void 0 : em.heroBanner) && void 0 !== O ? O : void 0;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)('div', {
            className: N.shop,
            children: [
                (0, r.jsxs)('div', {
                    className: N.banner,
                    children: [
                        (null == ep ? void 0 : ep.animationSource) == null || X
                            ? (0, r.jsx)('div', {
                                  className: N.bannerImage,
                                  style: { backgroundImage: 'url('.concat(er, ')') }
                              })
                            : (0, r.jsx)(u.Z, {
                                  className: N.bannerVideoBackground,
                                  src: ep.animationSource,
                                  autoPlay: !0,
                                  loop: !0
                              }),
                        (0, r.jsx)('div', {
                            className: s()(N.bannerShadow, N.left, { [N.darker]: null == ep ? void 0 : ep.darker }),
                            style: (null == ep ? void 0 : ep.gradientLeft) != null ? { background: null == ep ? void 0 : ep.gradientLeft } : void 0
                        }),
                        (0, r.jsx)('div', {
                            className: s()(N.bannerShadow, N.right, { [N.darker]: null == ep ? void 0 : ep.darker }),
                            style: (null == ep ? void 0 : ep.gradientRight) != null ? { background: null == ep ? void 0 : ep.gradientRight } : void 0
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: s()(N.content, N.mainContent),
                    children: [
                        (0, r.jsxs)('div', {
                            className: s()(N.heroHeaderContainer),
                            children: [
                                D
                                    ? (0, r.jsx)('div', { className: s()(N.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, r.jsxs)('div', {
                                          className: s()(N.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null == ee ? void 0 : ee.unpublishedAt) != null &&
                                                  (0, r.jsx)(c.TextBadge, {
                                                      disableColor: !0,
                                                      text: T.intl.string(T.t['h/uBCQ']),
                                                      className: N.limitedTimeBadge
                                                  }),
                                              (0, r.jsxs)('div', {
                                                  className: s()(N.heroLogoNameContainer),
                                                  children: [
                                                      (0, r.jsx)('img', {
                                                          className: N.heroHeaderLogo,
                                                          src: (0, C.uV)(null !== (A = null !== (w = null == ee ? void 0 : ee.heroLogo) && void 0 !== w ? w : null == ee ? void 0 : ee.logo) && void 0 !== A ? A : '', { size: k.n }),
                                                          alt: null == ee ? void 0 : ee.name
                                                      }),
                                                      (0, r.jsx)(c.Text, {
                                                          variant: 'text-md/normal',
                                                          className: null != em && em.showDarkBannerText ? N.subHeaderTextDark : N.subHeaderText,
                                                          children: null == ee ? void 0 : ee.summary
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                !D &&
                                    (0, r.jsx)('div', {
                                        className: N.heroHeaderButtonContainer,
                                        children: (0, r.jsx)(c.Button, {
                                            className: N.heroHeaderButton,
                                            color: c.ButtonColors.WHITE,
                                            onClick: () => R('shop latest category hero', null == ee ? void 0 : ee.skuId),
                                            children: eh
                                        })
                                    })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: s()(N.row, N.feed, N.feedSingleRow),
                            children: D
                                ? (0, r.jsx)(r.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(E.K, {}, t))
                                  })
                                : (0, r.jsx)(r.Fragment, {
                                      children: ec.map((e, t) => {
                                          let n = g.Z.getCategoryForProduct(e.skuId);
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
                                                            I.Z,
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
                            className: s()(N.section, N.col2, N.featuredBlocksContainer),
                            children: D
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: s()(N.skeleton, N.featuredBlock),
                                              children: (0, r.jsx)('div', { className: N.skeletonBody })
                                          }),
                                          (0, r.jsx)('div', {
                                              className: s()(N.skeleton, N.featuredBlock),
                                              children: (0, r.jsx)('div', { className: N.skeletonBody })
                                          })
                                      ]
                                  })
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsxs)(c.Clickable, {
                                              className: s()(N.featuredBlock),
                                              style: { backgroundImage: 'url('.concat(ea, ')') },
                                              onClick: () => R('shop marketing tile', null == et ? void 0 : et.skuId),
                                              children: [
                                                  (null == et ? void 0 : et.unpublishedAt) != null &&
                                                      (0, r.jsx)(c.TextBadge, {
                                                          disableColor: !0,
                                                          text: T.intl.string(T.t['h/uBCQ']),
                                                          className: N.featuredBlockBadge
                                                      }),
                                                  (0, r.jsx)(c.Button, {
                                                      className: N.featuredBlockButton,
                                                      color: c.ButtonColors.WHITE,
                                                      onClick: () => {},
                                                      children: T.intl.string(T.t.jVcuVV)
                                                  })
                                              ]
                                          }),
                                          (0, r.jsx)(c.Clickable, {
                                              className: s()(N.featuredBlock),
                                              style: { backgroundImage: 'url('.concat(ei, ')') },
                                              onClick: () => R('shop marketing tile', l.T.ANIME_V2),
                                              children:
                                                  !D &&
                                                  (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          (0, r.jsx)(c.TextBadge, {
                                                              disableColor: !0,
                                                              text: T.intl.string(T.t['o/oRJC']),
                                                              className: N.featuredBlockBadge
                                                          }),
                                                          (0, r.jsx)(c.Button, {
                                                              className: N.featuredBlockButton,
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
                            className: s()(N.row, N.between, N.section),
                            children: [
                                (0, r.jsx)(c.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: T.intl.string(T.t.ivaAAw)
                                }),
                                (0, r.jsxs)(c.Clickable, {
                                    className: N.shopAll,
                                    onClick: () => R('shop all top'),
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
                            className: N.feed,
                            ref: $,
                            children: D
                                ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(E.K, {}, t + 1)) })
                                : (0, r.jsx)(r.Fragment, {
                                      children: eu.slice(0, H).map((e, t) => {
                                          let n = g.Z.getCategoryForProduct(e.skuId);
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
                                                            I.Z,
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
                        H >= S.iA &&
                            (0, r.jsxs)('div', {
                                className: N.endOfFeed,
                                children: [
                                    (0, r.jsx)(c.Heading, {
                                        variant: 'heading-md/semibold',
                                        children: T.intl.string(T.t.Yr70c3)
                                    }),
                                    (0, r.jsx)(c.Button, {
                                        className: N.endOfFeedButton,
                                        onClick: () => {
                                            R('shop all bottom', void 0, !0);
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
