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
    p = n(594174),
    h = n(960048),
    f = n(381585),
    g = n(597688),
    C = n(884697),
    b = n(251068),
    x = n(43610),
    v = n(744112),
    _ = n(223143),
    k = n(937510),
    j = n(823941),
    E = n(752053),
    S = n(38900),
    I = n(709999),
    T = n(215023),
    N = n(388032),
    B = n(297233),
    y = n(454410),
    L = n(783433),
    Z = n(170873),
    P = n(562292),
    O = n(196315);
t.Z = (e) => {
    var t, n, i, w, A, R, H, F;
    let { handleTransition: D, numVisibleItems: V } = e,
        { categories: M, isFetchingCategories: W, fetchCategoriesError: U, fetchPurchasesError: z, claimError: G, refreshCategories: K } = (0, _.Z)(),
        $ = null !== (t = null != U ? U : z) && void 0 !== t ? t : G,
        J = Array.from(M.values()),
        Y = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
        q = a.createRef(),
        Q = (0, x.t)('CollectiblesFeedShop'),
        X = (0, b.m)('CollectiblesFeedShop'),
        ee = (0, v.b)('Collectibles Shop Button'),
        et = (0, m.Z)('shop_disable_cache'),
        en = (0, m.Z)('shop_include_unpublished'),
        er = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        ea = X ? J[0] : g.Z.getCategory(Q ? l.T.SPOOKY_NIGHT : l.T.BAND),
        ei = X ? J[1] : g.Z.getCategory(Q ? l.T.BAND : l.T.AUTUMN_EQUINOX),
        es = g.Z.getCategory(l.T.ANIME_V2),
        el = X
            ? (0, C.uV)(null !== (n = null == ea ? void 0 : ea.heroBanner) && void 0 !== n ? n : '', {
                  size: T.pv,
                  format: 'jpg'
              })
            : Q
              ? O
              : Z,
        eo = X
            ? (0, C.uV)(null !== (i = null == ei ? void 0 : ei.featuredBlock) && void 0 !== i ? i : '', {
                  size: T.J0,
                  format: 'png'
              })
            : Q
              ? L
              : P,
        ec = X
            ? (0, C.uV)(null !== (w = null == es ? void 0 : es.featuredBlock) && void 0 !== w ? w : '', {
                  size: T.J0,
                  format: 'png'
              })
            : y,
        ed = a.useCallback(() => {
            K();
        }, [K]),
        eu = X ? (null !== (A = null == ea ? void 0 : ea.heroRanking) && void 0 !== A ? A : []) : Q ? T.Ku : T.WC,
        em = a.useMemo(() => eu.map((e) => g.Z.getProduct(e)).filter((e) => null != e), [W, Q]),
        ep = (0, k.l)(em).slice(0, 4),
        eh = a.useMemo(() => T.yo.map((e) => g.Z.getProduct(e)).filter((e) => null != e), [W]),
        ef = (0, k.l)(eh),
        eg = (null == ea ? void 0 : ea.skuId) != null ? (0, T.ZS)(ea.skuId) : void 0;
    if (null == Y) return null;
    let eC = N.intl.formatToPlainString(N.t.wvKYCg, { category_name: null == ea ? void 0 : ea.name });
    if (null != $) {
        let e = [];
        null != U ? e.push('shop load fetch categories error: '.concat($.message)) : null != z ? e.push('shop load fetch purchase error: '.concat($.message)) : e.push('shop load claim error: '.concat($.message)),
            h.Z.captureMessage(e.join('\n'), {
                tags: {
                    isStaff: Y.isStaff().toString(),
                    preloadEnabled: ee.toString(),
                    disableCache: et.toString(),
                    includeUnpublished: en.toString()
                }
            });
    }
    if (null != U)
        return (0, r.jsx)(E.Z, {
            onRetry: ed,
            errorOrigin: E.i.SHOP_PAGE,
            errorMessage: U.message
        });
    let eb = null !== (R = null == eg ? void 0 : eg.heroBanner) && void 0 !== R ? R : void 0;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)('div', {
            className: B.shop,
            children: [
                (0, r.jsxs)('div', {
                    className: B.banner,
                    children: [
                        (null == eb ? void 0 : eb.animationSource) == null || er
                            ? (0, r.jsx)('div', {
                                  className: B.bannerImage,
                                  style: { backgroundImage: 'url('.concat(el, ')') }
                              })
                            : (0, r.jsx)(u.Z, {
                                  className: B.bannerVideoBackground,
                                  src: eb.animationSource,
                                  autoPlay: !0,
                                  loop: !0
                              }),
                        (0, r.jsx)('div', {
                            className: s()(B.bannerShadow, B.left, { [B.darker]: null == eb ? void 0 : eb.darker }),
                            style: (null == eb ? void 0 : eb.gradientLeft) != null ? { background: null == eb ? void 0 : eb.gradientLeft } : void 0
                        }),
                        (0, r.jsx)('div', {
                            className: s()(B.bannerShadow, B.right, { [B.darker]: null == eb ? void 0 : eb.darker }),
                            style: (null == eb ? void 0 : eb.gradientRight) != null ? { background: null == eb ? void 0 : eb.gradientRight } : void 0
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: s()(B.content, B.mainContent),
                    children: [
                        (0, r.jsxs)('div', {
                            className: s()(B.heroHeaderContainer),
                            children: [
                                W
                                    ? (0, r.jsx)('div', { className: s()(B.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, r.jsxs)('div', {
                                          className: s()(B.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null == ea ? void 0 : ea.unpublishedAt) != null &&
                                                  (0, r.jsx)(c.TextBadge, {
                                                      disableColor: !0,
                                                      text: N.intl.string(N.t['h/uBCQ']),
                                                      className: B.limitedTimeBadge
                                                  }),
                                              (0, r.jsxs)('div', {
                                                  className: s()(B.heroLogoNameContainer),
                                                  children: [
                                                      (0, r.jsx)('img', {
                                                          className: B.heroHeaderLogo,
                                                          src: (0, C.uV)(null !== (F = null !== (H = null == ea ? void 0 : ea.heroLogo) && void 0 !== H ? H : null == ea ? void 0 : ea.logo) && void 0 !== F ? F : '', { size: j.n }),
                                                          alt: null == ea ? void 0 : ea.name
                                                      }),
                                                      (0, r.jsx)(c.Text, {
                                                          variant: 'text-md/normal',
                                                          className: null != eg && eg.showDarkBannerText ? B.subHeaderTextDark : B.subHeaderText,
                                                          children: null == ea ? void 0 : ea.summary
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                !W &&
                                    (0, r.jsx)('div', {
                                        className: B.heroHeaderButtonContainer,
                                        children: (0, r.jsx)(c.Button, {
                                            className: B.heroHeaderButton,
                                            color: c.ButtonColors.WHITE,
                                            onClick: () => D('shop latest category hero', null == ea ? void 0 : ea.skuId),
                                            children: eC
                                        })
                                    })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: s()(B.row, B.feed, B.feedSingleRow),
                            children: W
                                ? (0, r.jsx)(r.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(S.K, {}, t))
                                  })
                                : (0, r.jsx)(r.Fragment, {
                                      children: ep.map((e, t) => {
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
                                                                user: Y,
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
                            className: s()(B.section, B.col2, B.featuredBlocksContainer),
                            children: W
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: s()(B.skeleton, B.featuredBlock),
                                              children: (0, r.jsx)('div', { className: B.skeletonBody })
                                          }),
                                          (0, r.jsx)('div', {
                                              className: s()(B.skeleton, B.featuredBlock),
                                              children: (0, r.jsx)('div', { className: B.skeletonBody })
                                          })
                                      ]
                                  })
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsxs)(c.Clickable, {
                                              className: s()(B.featuredBlock),
                                              style: { backgroundImage: 'url('.concat(eo, ')') },
                                              onClick: () => D('shop marketing tile', null == ei ? void 0 : ei.skuId),
                                              children: [
                                                  (null == ei ? void 0 : ei.unpublishedAt) != null &&
                                                      (0, r.jsx)(c.TextBadge, {
                                                          disableColor: !0,
                                                          text: N.intl.string(N.t['h/uBCQ']),
                                                          className: B.featuredBlockBadge
                                                      }),
                                                  (0, r.jsx)(c.Button, {
                                                      className: B.featuredBlockButton,
                                                      color: c.ButtonColors.WHITE,
                                                      onClick: () => {},
                                                      children: N.intl.string(N.t.jVcuVV)
                                                  })
                                              ]
                                          }),
                                          (0, r.jsx)(c.Clickable, {
                                              className: s()(B.featuredBlock),
                                              style: { backgroundImage: 'url('.concat(ec, ')') },
                                              onClick: () => D('shop marketing tile', l.T.ANIME_V2),
                                              children:
                                                  !W &&
                                                  (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          (0, r.jsx)(c.TextBadge, {
                                                              disableColor: !0,
                                                              text: N.intl.string(N.t['o/oRJC']),
                                                              className: B.featuredBlockBadge
                                                          }),
                                                          (0, r.jsx)(c.Button, {
                                                              className: B.featuredBlockButton,
                                                              color: c.ButtonColors.WHITE,
                                                              onClick: () => {},
                                                              children: N.intl.string(N.t.jVcuVV)
                                                          })
                                                      ]
                                                  })
                                          })
                                      ]
                                  })
                        }),
                        (0, r.jsxs)('div', {
                            className: s()(B.row, B.between, B.section),
                            children: [
                                (0, r.jsx)(c.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: N.intl.string(N.t.ivaAAw)
                                }),
                                (0, r.jsxs)(c.Clickable, {
                                    className: B.shopAll,
                                    onClick: () => D('shop all top'),
                                    children: [
                                        (0, r.jsx)(c.ServerGridIcon, {}),
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-sm/medium',
                                            children: N.intl.string(N.t.xFcotb)
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: B.feed,
                            ref: q,
                            children: W
                                ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(S.K, {}, t + 1)) })
                                : (0, r.jsx)(r.Fragment, {
                                      children: ef.slice(0, V).map((e, t) => {
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
                                                                user: Y,
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
                        V >= T.iA &&
                            (0, r.jsxs)('div', {
                                className: B.endOfFeed,
                                children: [
                                    (0, r.jsx)(c.Heading, {
                                        variant: 'heading-md/semibold',
                                        children: N.intl.string(N.t.Yr70c3)
                                    }),
                                    (0, r.jsx)(c.Button, {
                                        className: B.endOfFeedButton,
                                        onClick: () => {
                                            D('shop all bottom', void 0, !0);
                                        },
                                        children: (0, r.jsx)(c.Text, {
                                            variant: 'text-md/medium',
                                            color: 'always-white',
                                            children: N.intl.string(N.t.AfrvRE)
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
