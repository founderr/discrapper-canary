n(653041);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(634894),
    u = n(410030),
    g = n(100527),
    m = n(906732),
    f = n(15640),
    p = n(594174),
    _ = n(78839),
    h = n(74538),
    E = n(775412),
    b = n(104494),
    x = n(639119),
    C = n(230916),
    v = n(346497),
    T = n(823188),
    N = n(21023),
    I = n(318747),
    S = n(409100),
    R = n(474936),
    A = n(388032),
    j = n(515846),
    P = n(102655),
    Z = n(768236),
    B = n(314907),
    M = n(826701);
let O = () => {
        let e = (0, v.W1)();
        return (0, i.jsx)(T.Cy, {
            text: e,
            className: j.bogoPillWithSparkles,
            colorOptions: T.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
        });
    },
    w = () =>
        (0, i.jsx)('div', {
            className: j.mostPopularPill,
            children: (0, i.jsx)(c.Heading, {
                className: j.mostPopularText,
                variant: 'heading-deprecated-12/extrabold',
                children: A.intl.string(A.t['o/oRJC'])
            })
        }),
    y = (e) => {
        let t,
            { premiumType: n } = e,
            r = (0, u.ZP)();
        t = n === R.p9.TIER_0 ? ((0, o.wj)(r) ? P : Z) : (0, o.wj)(r) ? B : M;
        let a = (0, h.Px)(n);
        return (0, i.jsx)('img', {
            src: t,
            className: j.logo,
            alt: a
        });
    },
    k = (e) => {
        let { label: t, column1: n, column2: r } = e;
        return (0, i.jsxs)('tr', {
            className: s()(j.headerRow, j.rowBottomBorder, j.topBorderRadius),
            children: [
                (0, i.jsx)('th', {
                    scope: 'col',
                    className: j.headerLabelCell,
                    children: t
                }),
                (0, i.jsx)('th', {
                    scope: 'col',
                    className: j.headerCell,
                    children: n
                }),
                (0, i.jsx)('th', {
                    scope: 'col',
                    className: s()(j.headerCell, j.topBorderRadius),
                    children: r
                })
            ]
        });
    },
    L = (e) => {
        let { label: t, column1: n, column2: r, withBottomBorder: a = !0, withTopBorderRadius: l = !1, withBottomBorderRadius: o = !1, buttonsRow: c = !1, shortRow: d = !1 } = e;
        return (0, i.jsxs)('tr', {
            className: s()(j.row, {
                [j.wideRow]: c,
                [j.topBorderRadius]: l,
                [j.bottomBorderRadius]: o,
                [j.rowBottomBorder]: a,
                [j.shortRow]: d
            }),
            children: [
                (0, i.jsx)('th', {
                    scope: 'row',
                    className: j.labelCell,
                    children: t
                }),
                (0, i.jsx)('td', {
                    className: s()(j.cell, { [j.buttonsCell]: c }),
                    children: n
                }),
                (0, i.jsx)('td', {
                    className: s()(j.cell, {
                        [j.topBorderRadius]: l,
                        [j.bottomBorderRadius]: o,
                        [j.buttonsCell]: c
                    }),
                    children: r
                })
            ]
        });
    };
t.Z = (e) => {
    var t;
    let n,
        { className: a, hideCTAs: P = !1, headingOverride: Z, hidePill: B = !1, selectedPlanColumnClassName: M, selectedPlanTier: U = R.p9.TIER_2 } = e,
        { analyticsLocations: D } = (0, m.ZP)(g.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
        G = (0, l.e7)([_.ZP], () => _.ZP.hasFetchedSubscriptions()),
        H = (0, f.V)(),
        V = 'PlanComparisonTable';
    (0, d.j)({
        location: V + ' auto on',
        autoTrackExposure: !0
    }),
        (0, d.j)({
            location: V + ' auto off',
            autoTrackExposure: !1
        });
    let F = (0, u.ZP)(),
        W = (0, o.ap)(F),
        z = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        Y = (0, h.M5)(z, R.p9.TIER_2),
        K = (0, x.N)(),
        Q = null == K ? void 0 : null === (t = K.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        J = (0, E.rT)(),
        q = (0, b.Ng)(),
        X = null != q && (0, b.Wp)(q, R.Si.TIER_2),
        $ = (0, C.A)(R.Xh.PREMIUM_MONTH_TIER_2),
        ee = ''.concat($, '/').concat((0, h.eP)(R.rV.MONTH)),
        et = (0, h.CY)(R.Xh.PREMIUM_MONTH_TIER_0),
        en = (0, h.CY)(R.Xh.PREMIUM_MONTH_TIER_2),
        ei = (0, N.n)(et, en, X, ee),
        er = (0, v.Vi)();
    if (!G || !H) return null;
    let ea = {
        label: (0, i.jsx)(c.Heading, {
            className: j.__invalid_textColor,
            variant: 'heading-lg/extrabold',
            children: A.intl.string(A.t.ED4UVF)
        }),
        column1: (0, i.jsx)(y, { premiumType: R.p9.TIER_0 }),
        column2: (0, i.jsx)(y, { premiumType: R.p9.TIER_2 })
    };
    P
        ? ei.push({
              label: null,
              column1: null,
              column2: null,
              withBottomBorder: !1,
              withBottomBorderRadius: !0,
              buttonsRow: !1,
              shortRow: !0
          })
        : ei.push({
              label: null,
              column1: (0, i.jsxs)(i.Fragment, {
                  children: [
                      Q === R.Si.TIER_2 || er
                          ? (0, i.jsx)(S.Z, {
                                className: j.button,
                                subscriptionTier: R.Si.TIER_0,
                                showIcon: !1,
                                look: c.ButtonLooks.OUTLINED,
                                color: W ? c.ButtonColors.BRAND : c.ButtonColors.WHITE,
                                buttonShineClassName: void 0
                            })
                          : (0, i.jsx)(S.Z, {
                                className: j.button,
                                subscriptionTier: R.Si.TIER_0,
                                showIcon: !1
                            }),
                      J === R.p9.TIER_2 || null != Q
                          ? null
                          : (0, i.jsx)(I.Z, {
                                className: j.button,
                                subscriptionTier: R.Si.TIER_0
                            })
                  ]
              }),
              column2: (0, i.jsxs)(i.Fragment, {
                  children: [
                      Q === R.Si.TIER_0
                          ? (0, i.jsx)(S.Z, {
                                className: j.button,
                                subscriptionTier: R.Si.TIER_2,
                                showIcon: !1,
                                look: c.ButtonLooks.OUTLINED,
                                color: W ? c.ButtonColors.BRAND : c.ButtonColors.WHITE,
                                buttonShineClassName: void 0
                            })
                          : (0, i.jsx)(S.Z, {
                                className: j.button,
                                subscriptionTier: R.Si.TIER_2,
                                showIcon: !1,
                                isEligibleForBogoPromotion: er
                            }),
                      J === R.p9.TIER_0 || null != Q
                          ? null
                          : (0, i.jsx)(I.Z, {
                                className: j.button,
                                subscriptionTier: R.Si.TIER_2
                            })
                  ]
              }),
              withBottomBorder: !1,
              withBottomBorderRadius: !0,
              buttonsRow: null == Q
          }),
        (n = B
            ? null
            : null != Q || null != J
              ? (0, i.jsx)(T.Cy, {
                    text: null != Q ? A.intl.string(A.t.IBYG5e) : A.intl.string(A.t.ce1v3d),
                    className: j.freeTrialPillWithSparkles,
                    colorOptions: Q === R.Si.TIER_0 ? (W ? T.VE.PREMIUM_TIER_0_GRADIENT_FILL : T.VE.PREMIUM_TIER_0_WHITE_FILL) : W ? (Y ? T.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL : T.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL) : T.VE.PREMIUM_TIER_2_WHITE_FILL
                })
              : er
                ? (0, i.jsx)(O, {})
                : (0, i.jsx)(w, {}));
    let es = Q === R.Si.TIER_0 || J === R.p9.TIER_0 || U === R.p9.TIER_0;
    return (0, i.jsx)(m.Gt, {
        value: D,
        children: (0, i.jsxs)('div', {
            className: s()(j.root, a),
            'data-testid': 'v2-marketing-page-comparison-table',
            children: [
                (0, i.jsx)(c.Heading, {
                    className: s()(j.titleText, j.__invalid_textColor),
                    variant: 'heading-xxl/extrabold',
                    children: null != Z ? Z : A.intl.string(A.t.FIbMh4)
                }),
                (0, i.jsxs)('div', {
                    className: j.tableWrapper,
                    children: [
                        (0, i.jsx)('div', {
                            className: s()(M, {
                                [j.tier0ColumnOuter]: es,
                                [j.tier2ColumnOuter]: !es
                            }),
                            children: !es && n
                        }),
                        (0, i.jsxs)('table', {
                            className: j.table,
                            children: [
                                (0, i.jsx)('thead', { children: (0, i.jsx)(k, { ...ea }) }),
                                (0, i.jsx)('tbody', {
                                    children: ei.map((e, t) =>
                                        (0, r.createElement)(L, {
                                            ...e,
                                            key: t
                                        })
                                    )
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
