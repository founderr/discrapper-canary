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
    p = n(451478),
    f = n(960048),
    g = n(381585),
    C = n(597688),
    b = n(884697),
    v = n(251068),
    x = n(744112),
    _ = n(223143),
    k = n(937510),
    I = n(823941),
    j = n(752053),
    E = n(38900),
    S = n(709999),
    T = n(215023),
    N = n(388032),
    B = n(632007),
    y = n(454410),
    L = n(783433),
    Z = n(196315);
t.Z = (e) => {
    var t, n, i, P, O, w, A, R;
    let { handleTransition: H, numVisibleItems: F } = e,
        { categories: D, isFetchingCategories: V, fetchCategoriesError: M, fetchPurchasesError: W, claimError: U, refreshCategories: G } = (0, _.Z)(),
        z = null !== (t = null != M ? M : W) && void 0 !== t ? t : U,
        K = Array.from(D.values()),
        $ = (0, o.e7)([h.default], () => h.default.getCurrentUser()),
        Y = a.createRef(),
        J = (0, v.m)('CollectiblesFeedShop'),
        q = (0, x.b)('Collectibles Shop Button'),
        Q = (0, m.Z)('shop_disable_cache'),
        X = (0, m.Z)('shop_include_unpublished'),
        ee = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        et = (0, o.e7)([p.Z], () => p.Z.isFocused()),
        en = J ? K[0] : C.Z.getCategory(l.T.SPOOKY_NIGHT),
        er = J ? K[1] : C.Z.getCategory(l.T.BAND),
        ea = C.Z.getCategory(l.T.ANIME_V2),
        ei = J
            ? (0, b.uV)(null !== (n = null == en ? void 0 : en.heroBanner) && void 0 !== n ? n : '', {
                  size: T.pv,
                  format: 'jpg'
              })
            : Z,
        es = J
            ? (0, b.uV)(null !== (i = null == er ? void 0 : er.featuredBlock) && void 0 !== i ? i : '', {
                  size: T.J0,
                  format: 'png'
              })
            : L,
        el = J
            ? (0, b.uV)(null !== (P = null == ea ? void 0 : ea.featuredBlock) && void 0 !== P ? P : '', {
                  size: T.J0,
                  format: 'png'
              })
            : y,
        eo = a.useCallback(() => {
            G();
        }, [G]),
        ec = J ? (null !== (O = null == en ? void 0 : en.heroRanking) && void 0 !== O ? O : []) : T.Ku,
        ed = a.useMemo(() => ec.map((e) => C.Z.getProduct(e)).filter((e) => null != e), [V]),
        eu = (0, k.l)(ed).slice(0, 4),
        em = a.useMemo(() => T.yo.map((e) => C.Z.getProduct(e)).filter((e) => null != e), [V]),
        eh = (0, k.l)(em),
        ep = (null == en ? void 0 : en.skuId) != null ? (0, T.ZS)(en.skuId) : void 0;
    if (null == $) return null;
    let ef = N.intl.formatToPlainString(N.t.wvKYCg, { category_name: null == en ? void 0 : en.name });
    if (null != z) {
        let e = [];
        null != M ? e.push('shop load fetch categories error: '.concat(z.message)) : null != W ? e.push('shop load fetch purchase error: '.concat(z.message)) : e.push('shop load claim error: '.concat(z.message)),
            f.Z.captureMessage(e.join('\n'), {
                tags: {
                    isStaff: $.isStaff().toString(),
                    preloadEnabled: q.toString(),
                    disableCache: Q.toString(),
                    includeUnpublished: X.toString()
                }
            });
    }
    if (null != M)
        return (0, r.jsx)(j.Z, {
            onRetry: eo,
            errorOrigin: j.i.SHOP_PAGE,
            errorMessage: M.message
        });
    let eg = null !== (w = null == ep ? void 0 : ep.heroBanner) && void 0 !== w ? w : void 0;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)('div', {
            className: B.shop,
            children: [
                (0, r.jsxs)('div', {
                    className: B.banner,
                    children: [
                        (null == eg ? void 0 : eg.animationSource) != null && !ee && et
                            ? (0, r.jsx)(u.Z, {
                                  className: B.bannerVideoBackground,
                                  src: eg.animationSource,
                                  autoPlay: !0,
                                  loop: !0
                              })
                            : (0, r.jsx)('div', {
                                  className: B.bannerImage,
                                  style: { backgroundImage: 'url('.concat(ei, ')') }
                              }),
                        (0, r.jsx)('div', {
                            className: s()(B.bannerShadow, B.left, { [B.darker]: null == eg ? void 0 : eg.darker }),
                            style: (null == eg ? void 0 : eg.gradientLeft) != null ? { background: null == eg ? void 0 : eg.gradientLeft } : void 0
                        }),
                        (0, r.jsx)('div', {
                            className: s()(B.bannerShadow, B.right, { [B.darker]: null == eg ? void 0 : eg.darker }),
                            style: (null == eg ? void 0 : eg.gradientRight) != null ? { background: null == eg ? void 0 : eg.gradientRight } : void 0
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: s()(B.content, B.mainContent),
                    children: [
                        (0, r.jsxs)('div', {
                            className: s()(B.heroHeaderContainer),
                            children: [
                                V
                                    ? (0, r.jsx)('div', { className: s()(B.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, r.jsxs)('div', {
                                          className: s()(B.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null == en ? void 0 : en.unpublishedAt) != null &&
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
                                                          src: (0, b.uV)(null !== (R = null !== (A = null == en ? void 0 : en.heroLogo) && void 0 !== A ? A : null == en ? void 0 : en.logo) && void 0 !== R ? R : '', { size: I.n }),
                                                          alt: null == en ? void 0 : en.name
                                                      }),
                                                      (0, r.jsx)(c.Text, {
                                                          variant: 'text-md/normal',
                                                          className: null != ep && ep.showDarkBannerText ? B.subHeaderTextDark : B.subHeaderText,
                                                          children: null == en ? void 0 : en.summary
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                !V &&
                                    (0, r.jsx)('div', {
                                        className: B.heroHeaderButtonContainer,
                                        children: (0, r.jsx)(c.Button, {
                                            className: B.heroHeaderButton,
                                            color: c.ButtonColors.WHITE,
                                            onClick: () => H('shop latest category hero', null == en ? void 0 : en.skuId),
                                            children: ef
                                        })
                                    })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: s()(B.row, B.feed, B.feedSingleRow),
                            children: V
                                ? (0, r.jsx)(r.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(E.K, {}, t))
                                  })
                                : (0, r.jsx)(r.Fragment, {
                                      children: eu.map((e, t) => {
                                          let n = C.Z.getCategoryForProduct(e.skuId);
                                          return null == e || null == n
                                              ? null
                                              : (0, r.jsx)(
                                                    g.k0,
                                                    {
                                                        newValue: {
                                                            tilePosition: t,
                                                            pageSection: 'top 4',
                                                            categoryPosition: 0
                                                        },
                                                        children: (0, r.jsx)(
                                                            S.Z,
                                                            {
                                                                product: e,
                                                                category: n,
                                                                user: $,
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
                            children: V
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
                                              style: { backgroundImage: 'url('.concat(es, ')') },
                                              onClick: () => H('shop marketing tile', null == er ? void 0 : er.skuId),
                                              children: [
                                                  (null == er ? void 0 : er.unpublishedAt) != null &&
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
                                              style: { backgroundImage: 'url('.concat(el, ')') },
                                              onClick: () => H('shop marketing tile', l.T.ANIME_V2),
                                              children:
                                                  !V &&
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
                                    onClick: () => H('shop all top'),
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
                            ref: Y,
                            children: V
                                ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(E.K, {}, t + 1)) })
                                : (0, r.jsx)(r.Fragment, {
                                      children: eh.slice(0, F).map((e, t) => {
                                          let n = C.Z.getCategoryForProduct(e.skuId);
                                          return null == e || null == n
                                              ? null
                                              : (0, r.jsx)(
                                                    g.k0,
                                                    {
                                                        newValue: {
                                                            tilePosition: t,
                                                            pageSection: 'popular picks',
                                                            categoryPosition: 2
                                                        },
                                                        children: (0, r.jsx)(
                                                            S.Z,
                                                            {
                                                                product: e,
                                                                category: n,
                                                                user: $,
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
                        F >= T.iA &&
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
                                            H('shop all bottom', void 0, !0);
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
