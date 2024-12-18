n(47120);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(442837),
    o = n(481060),
    c = n(607070),
    d = n(70097),
    u = n(594174),
    m = n(451478),
    h = n(381585),
    p = n(597688),
    f = n(884697),
    g = n(937510),
    C = n(823941),
    v = n(38900),
    b = n(709999),
    x = n(957058),
    _ = n(215023),
    k = n(388032),
    I = n(218142);
t.Z = (e) => {
    var t, n, i, E, S, j, T, N, B;
    let { isLoading: L, handleTransition: y, category: P } = e,
        Z = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        O = (0, s.e7)([m.Z], () => m.Z.isFocused()),
        w = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
        A = (0, x.u)(),
        R = a.useMemo(() => {
            var e;
            return A(null !== (e = null == P ? void 0 : P.heroRanking) && void 0 !== e ? e : []);
        }, [L, A]),
        H = (0, g.l)(R).slice(0, 4),
        F = k.intl.formatToPlainString(k.t.wvKYCg, { category_name: null !== (i = null == P ? void 0 : P.name) && void 0 !== i ? i : '' });
    if (null == w) return null;
    let V = (null == P ? void 0 : P.skuId) != null ? (0, _.ZS)(P.skuId) : void 0,
        D = null !== (E = null == V ? void 0 : V.heroBanner) && void 0 !== E ? E : void 0,
        M = null !== (S = null == D ? void 0 : D.animationSource) && void 0 !== S ? S : null == P ? void 0 : null === (t = P.bannerAsset) || void 0 === t ? void 0 : t.animated,
        W =
            null !== (T = null == P ? void 0 : null === (n = P.heroBannerAsset) || void 0 === n ? void 0 : n.static) && void 0 !== T
                ? T
                : (0, f.uV)(null !== (j = null == P ? void 0 : P.heroBanner) && void 0 !== j ? j : '', {
                      size: _.pv,
                      format: 'jpg'
                  });
    return (0, r.jsxs)('div', {
        className: I.heroBlock,
        children: [
            (0, r.jsxs)('div', {
                className: I.banner,
                children: [
                    null != M && !Z && O
                        ? (0, r.jsx)(d.Z, {
                              className: I.bannerVideoBackground,
                              src: M,
                              autoPlay: !0,
                              loop: !0
                          })
                        : (0, r.jsx)('div', {
                              className: I.bannerImage,
                              style: { backgroundImage: 'url('.concat(W, ')') }
                          }),
                    (0, r.jsx)('div', {
                        className: l()(I.bannerShadow, I.left, { [I.darker]: null == D ? void 0 : D.darker }),
                        style: (null == D ? void 0 : D.gradientLeft) != null ? { background: null == D ? void 0 : D.gradientLeft } : void 0
                    }),
                    (0, r.jsx)('div', {
                        className: l()(I.bannerShadow, I.right, { [I.darker]: null == D ? void 0 : D.darker }),
                        style: (null == D ? void 0 : D.gradientRight) != null ? { background: null == D ? void 0 : D.gradientRight } : void 0
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: I.heroBlockContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: l()(I.heroHeaderContainer),
                        children: [
                            L
                                ? (0, r.jsx)('div', { className: l()(I.heroHeaderBadgeLogoSummaryContainer) })
                                : (0, r.jsxs)('div', {
                                      className: l()(I.heroHeaderBadgeLogoSummaryContainer),
                                      children: [
                                          (null == P ? void 0 : P.unpublishedAt) != null &&
                                              (0, r.jsx)(o.TextBadge, {
                                                  disableColor: !0,
                                                  text: k.intl.string(k.t['h/uBCQ']),
                                                  className: I.limitedTimeBadge
                                              }),
                                          (0, r.jsxs)('div', {
                                              className: l()(I.heroLogoNameContainer),
                                              children: [
                                                  (0, r.jsx)('img', {
                                                      className: I.heroHeaderLogo,
                                                      src: (0, f.uV)(null !== (B = null !== (N = null == P ? void 0 : P.heroLogo) && void 0 !== N ? N : null == P ? void 0 : P.logo) && void 0 !== B ? B : '', { size: C.n }),
                                                      alt: null == P ? void 0 : P.name
                                                  }),
                                                  (0, r.jsx)(o.Text, {
                                                      variant: 'text-md/normal',
                                                      className: null != V && V.showDarkBannerText ? I.subHeaderTextDark : I.subHeaderText,
                                                      children: null == P ? void 0 : P.summary
                                                  })
                                              ]
                                          })
                                      ]
                                  }),
                            !L &&
                                (0, r.jsx)('div', {
                                    className: I.heroHeaderButtonContainer,
                                    children: (0, r.jsx)(o.Button, {
                                        className: I.heroHeaderButton,
                                        color: o.ButtonColors.WHITE,
                                        onClick: () => y('shop latest category hero', null == P ? void 0 : P.skuId),
                                        children: F
                                    })
                                })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: l()(I.row, I.feed, I.feedSingleRow),
                        children: L
                            ? (0, r.jsx)(r.Fragment, {
                                  children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(v.K, {}, t))
                              })
                            : (0, r.jsx)(r.Fragment, {
                                  children: H.map((e, t) => {
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
                                                        b.Z,
                                                        {
                                                            product: e,
                                                            category: n,
                                                            user: w,
                                                            isInFeedView: !0
                                                        },
                                                        e.skuId
                                                    )
                                                },
                                                null == e ? void 0 : e.skuId
                                            );
                                  })
                              })
                    })
                ]
            })
        ]
    });
};
