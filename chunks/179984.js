n(653041);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(442837),
    o = n(780384),
    c = n(481060),
    _ = n(634894),
    d = n(410030),
    E = n(100527),
    u = n(906732),
    T = n(15640),
    I = n(594174),
    R = n(78839),
    g = n(74538),
    N = n(775412),
    m = n(104494),
    C = n(639119),
    A = n(230916),
    f = n(248042),
    p = n(823188),
    M = n(21023),
    S = n(318747),
    h = n(409100),
    b = n(474936),
    x = n(689938),
    O = n(515846),
    P = n(102655),
    v = n(768236),
    L = n(314907),
    Z = n(826701);
let D = () => {
        let e = (0, f.W1)();
        return (0, s.jsx)(p.Cy, {
            text: e,
            className: O.bogoPillWithSparkles,
            colorOptions: p.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
        });
    },
    U = () =>
        (0, s.jsx)('div', {
            className: O.mostPopularPill,
            children: (0, s.jsx)(c.Heading, {
                className: O.mostPopularText,
                variant: 'heading-deprecated-12/extrabold',
                children: x.Z.Messages.MOST_POPULAR
            })
        }),
    B = (e) => {
        let t,
            { premiumType: n } = e,
            a = (0, d.ZP)();
        t = n === b.p9.TIER_0 ? ((0, o.wj)(a) ? P : v) : (0, o.wj)(a) ? L : Z;
        let r = (0, g.Px)(n);
        return (0, s.jsx)('img', {
            src: t,
            className: O.logo,
            alt: r
        });
    },
    j = (e) => {
        let { label: t, column1: n, column2: a } = e;
        return (0, s.jsxs)('tr', {
            className: i()(O.headerRow, O.rowBottomBorder, O.topBorderRadius),
            children: [
                (0, s.jsx)('th', {
                    scope: 'col',
                    className: O.headerLabelCell,
                    children: t
                }),
                (0, s.jsx)('th', {
                    scope: 'col',
                    className: O.headerCell,
                    children: n
                }),
                (0, s.jsx)('th', {
                    scope: 'col',
                    className: i()(O.headerCell, O.topBorderRadius),
                    children: a
                })
            ]
        });
    },
    G = (e) => {
        let { label: t, column1: n, column2: a, withBottomBorder: r = !0, withTopBorderRadius: l = !1, withBottomBorderRadius: o = !1, buttonsRow: c = !1, shortRow: _ = !1 } = e;
        return (0, s.jsxs)('tr', {
            className: i()(O.row, {
                [O.wideRow]: c,
                [O.topBorderRadius]: l,
                [O.bottomBorderRadius]: o,
                [O.rowBottomBorder]: r,
                [O.shortRow]: _
            }),
            children: [
                (0, s.jsx)('th', {
                    scope: 'row',
                    className: O.labelCell,
                    children: t
                }),
                (0, s.jsx)('td', {
                    className: i()(O.cell, { [O.buttonsCell]: c }),
                    children: n
                }),
                (0, s.jsx)('td', {
                    className: i()(O.cell, {
                        [O.topBorderRadius]: l,
                        [O.bottomBorderRadius]: o,
                        [O.buttonsCell]: c
                    }),
                    children: a
                })
            ]
        });
    };
t.Z = (e) => {
    var t;
    let n,
        { className: r, hideCTAs: P = !1, headingOverride: v, hidePill: L = !1, selectedPlanColumnClassName: Z, selectedPlanTier: w = b.p9.TIER_2 } = e,
        { analyticsLocations: H } = (0, u.ZP)(E.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
        y = (0, l.e7)([R.ZP], () => R.ZP.hasFetchedSubscriptions()),
        k = (0, T.V)(),
        F = 'PlanComparisonTable';
    (0, _.j)({
        location: F + ' auto on',
        autoTrackExposure: !0
    }),
        (0, _.j)({
            location: F + ' auto off',
            autoTrackExposure: !1
        });
    let V = (0, d.ZP)(),
        W = (0, o.ap)(V),
        K = (0, l.e7)([I.default], () => I.default.getCurrentUser()),
        Y = (0, g.M5)(K, b.p9.TIER_2),
        z = (0, C.N)(),
        Q = null == z ? void 0 : null === (t = z.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        J = (0, N.rT)(),
        X = (0, m.Ng)(),
        q = null != X && (0, m.Wp)(X, b.Si.TIER_2),
        $ = (0, A.A)(b.Xh.PREMIUM_MONTH_TIER_2),
        ee = ''.concat($, '/').concat((0, g.eP)(b.rV.MONTH)),
        et = (0, g.CY)(b.Xh.PREMIUM_MONTH_TIER_0),
        en = (0, g.CY)(b.Xh.PREMIUM_MONTH_TIER_2),
        es = (0, M.n)(et, en, q, ee),
        ea = (0, f.Vi)();
    if (!y || !k) return null;
    let er = {
        label: (0, s.jsx)(c.Heading, {
            className: O.__invalid_textColor,
            variant: 'heading-lg/extrabold',
            children: x.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_HEADER
        }),
        column1: (0, s.jsx)(B, { premiumType: b.p9.TIER_0 }),
        column2: (0, s.jsx)(B, { premiumType: b.p9.TIER_2 })
    };
    P
        ? es.push({
              label: null,
              column1: null,
              column2: null,
              withBottomBorder: !1,
              withBottomBorderRadius: !0,
              buttonsRow: !1,
              shortRow: !0
          })
        : es.push({
              label: null,
              column1: (0, s.jsxs)(s.Fragment, {
                  children: [
                      Q === b.Si.TIER_2 || ea
                          ? (0, s.jsx)(h.Z, {
                                className: O.button,
                                subscriptionTier: b.Si.TIER_0,
                                showIcon: !1,
                                look: c.ButtonLooks.OUTLINED,
                                color: W ? c.ButtonColors.BRAND : c.ButtonColors.WHITE,
                                buttonShineClassName: void 0
                            })
                          : (0, s.jsx)(h.Z, {
                                className: O.button,
                                subscriptionTier: b.Si.TIER_0,
                                showIcon: !1
                            }),
                      J === b.p9.TIER_2 || null != Q
                          ? null
                          : (0, s.jsx)(S.Z, {
                                className: O.button,
                                subscriptionTier: b.Si.TIER_0
                            })
                  ]
              }),
              column2: (0, s.jsxs)(s.Fragment, {
                  children: [
                      Q === b.Si.TIER_0
                          ? (0, s.jsx)(h.Z, {
                                className: O.button,
                                subscriptionTier: b.Si.TIER_2,
                                showIcon: !1,
                                look: c.ButtonLooks.OUTLINED,
                                color: W ? c.ButtonColors.BRAND : c.ButtonColors.WHITE,
                                buttonShineClassName: void 0
                            })
                          : (0, s.jsx)(h.Z, {
                                className: O.button,
                                subscriptionTier: b.Si.TIER_2,
                                showIcon: !1,
                                isEligibleForBogoPromotion: ea
                            }),
                      J === b.p9.TIER_0 || null != Q
                          ? null
                          : (0, s.jsx)(S.Z, {
                                className: O.button,
                                subscriptionTier: b.Si.TIER_2
                            })
                  ]
              }),
              withBottomBorder: !1,
              withBottomBorderRadius: !0,
              buttonsRow: null == Q
          }),
        (n = L
            ? null
            : null != Q || null != J
              ? (0, s.jsx)(p.Cy, {
                    text: null != Q ? x.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT : x.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_PLAN_ACTIVATED_PILL,
                    className: O.freeTrialPillWithSparkles,
                    colorOptions: Q === b.Si.TIER_0 ? (W ? p.VE.PREMIUM_TIER_0_GRADIENT_FILL : p.VE.PREMIUM_TIER_0_WHITE_FILL) : W ? (Y ? p.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL : p.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL) : p.VE.PREMIUM_TIER_2_WHITE_FILL
                })
              : ea
                ? (0, s.jsx)(D, {})
                : (0, s.jsx)(U, {}));
    let ei = Q === b.Si.TIER_0 || J === b.p9.TIER_0 || w === b.p9.TIER_0;
    return (0, s.jsx)(u.Gt, {
        value: H,
        children: (0, s.jsxs)('div', {
            className: i()(O.root, r),
            'data-testid': 'v2-marketing-page-comparison-table',
            children: [
                (0, s.jsx)(c.Heading, {
                    className: i()(O.titleText, O.__invalid_textColor),
                    variant: 'heading-xxl/extrabold',
                    children: null != v ? v : x.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_TITLE
                }),
                (0, s.jsxs)('div', {
                    className: O.tableWrapper,
                    children: [
                        (0, s.jsx)('div', {
                            className: i()(Z, {
                                [O.tier0ColumnOuter]: ei,
                                [O.tier2ColumnOuter]: !ei
                            }),
                            children: !ei && n
                        }),
                        (0, s.jsxs)('table', {
                            className: O.table,
                            children: [
                                (0, s.jsx)('thead', { children: (0, s.jsx)(j, { ...er }) }),
                                (0, s.jsx)('tbody', {
                                    children: es.map((e, t) =>
                                        (0, a.createElement)(G, {
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
