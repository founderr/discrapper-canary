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
    f = n(975298),
    p = n(15640),
    _ = n(594174),
    h = n(78839),
    E = n(74538),
    b = n(775412),
    x = n(104494),
    C = n(639119),
    v = n(230916),
    T = n(346497),
    N = n(823188),
    I = n(21023),
    S = n(318747),
    R = n(409100),
    A = n(474936),
    j = n(388032),
    P = n(515846),
    Z = n(102655),
    O = n(768236),
    M = n(314907),
    B = n(826701);
let w = () => {
        let e = (0, T.W1)();
        return (0, i.jsx)(N.Cy, {
            text: e,
            className: P.bogoPillWithSparkles,
            colorOptions: N.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
        });
    },
    y = () =>
        (0, i.jsx)('div', {
            className: P.mostPopularPill,
            children: (0, i.jsx)(c.Heading, {
                className: P.mostPopularText,
                variant: 'heading-deprecated-12/extrabold',
                children: j.intl.string(j.t['o/oRJC'])
            })
        }),
    k = (e) => {
        let t,
            { premiumType: n } = e,
            r = (0, u.ZP)();
        t = n === A.p9.TIER_0 ? ((0, o.wj)(r) ? Z : O) : (0, o.wj)(r) ? M : B;
        let a = (0, E.Px)(n);
        return (0, i.jsx)('img', {
            src: t,
            className: P.logo,
            alt: a
        });
    },
    L = (e) => {
        let { label: t, column1: n, column2: r } = e;
        return (0, i.jsxs)('tr', {
            className: s()(P.headerRow, P.rowBottomBorder, P.topBorderRadius),
            children: [
                (0, i.jsx)('th', {
                    scope: 'col',
                    className: P.headerLabelCell,
                    children: t
                }),
                (0, i.jsx)('th', {
                    scope: 'col',
                    className: P.headerCell,
                    children: n
                }),
                (0, i.jsx)('th', {
                    scope: 'col',
                    className: s()(P.headerCell, P.topBorderRadius),
                    children: r
                })
            ]
        });
    },
    U = (e) => {
        let { label: t, column1: n, column2: r, withBottomBorder: a = !0, withTopBorderRadius: l = !1, withBottomBorderRadius: o = !1, buttonsRow: c = !1, shortRow: d = !1 } = e;
        return (0, i.jsxs)('tr', {
            className: s()(P.row, {
                [P.wideRow]: c,
                [P.topBorderRadius]: l,
                [P.bottomBorderRadius]: o,
                [P.rowBottomBorder]: a,
                [P.shortRow]: d
            }),
            children: [
                (0, i.jsx)('th', {
                    scope: 'row',
                    className: P.labelCell,
                    children: t
                }),
                (0, i.jsx)('td', {
                    className: s()(P.cell, { [P.buttonsCell]: c }),
                    children: n
                }),
                (0, i.jsx)('td', {
                    className: s()(P.cell, {
                        [P.topBorderRadius]: l,
                        [P.bottomBorderRadius]: o,
                        [P.buttonsCell]: c
                    }),
                    children: r
                })
            ]
        });
    };
t.Z = (e) => {
    var t;
    let n,
        { className: a, hideCTAs: Z = !1, headingOverride: O, hidePill: M = !1, selectedPlanColumnClassName: B, selectedPlanTier: D = A.p9.TIER_2 } = e,
        { analyticsLocations: H } = (0, m.ZP)(g.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
        G = (0, l.e7)([h.ZP], () => h.ZP.hasFetchedSubscriptions()),
        V = (0, p.V)(),
        F = 'PlanComparisonTable';
    (0, d.j)({
        location: F + ' auto on',
        autoTrackExposure: !0
    }),
        (0, d.j)({
            location: F + ' auto off',
            autoTrackExposure: !1
        });
    let W = (0, u.ZP)(),
        z = (0, o.ap)(W),
        Y = (0, l.e7)([_.default], () => _.default.getCurrentUser()),
        K = (0, E.M5)(Y, A.p9.TIER_2),
        Q = (0, C.N)(),
        J = null == Q ? void 0 : null === (t = Q.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        q = (0, b.rT)(),
        X = (0, x.Ng)(),
        $ = null != X && (0, x.Wp)(X, A.Si.TIER_2),
        ee = (0, v.A)(A.Xh.PREMIUM_MONTH_TIER_2),
        et = ''.concat(ee, '/').concat((0, E.eP)(A.rV.MONTH)),
        en = (0, E.CY)(A.Xh.PREMIUM_MONTH_TIER_0),
        ei = (0, E.CY)(A.Xh.PREMIUM_MONTH_TIER_2),
        er = (0, f.Z)(),
        ea = (0, I.n)(en, ei, $, et, er.fractionalState),
        es = (0, T.Vi)();
    if (!G || !V) return null;
    let el = {
        label: (0, i.jsx)(c.Heading, {
            className: P.__invalid_textColor,
            variant: 'heading-lg/extrabold',
            children: j.intl.string(j.t.ED4UVF)
        }),
        column1: (0, i.jsx)(k, { premiumType: A.p9.TIER_0 }),
        column2: (0, i.jsx)(k, { premiumType: A.p9.TIER_2 })
    };
    Z
        ? ea.push({
              label: null,
              column1: null,
              column2: null,
              withBottomBorder: !1,
              withBottomBorderRadius: !0,
              buttonsRow: !1,
              shortRow: !0
          })
        : ea.push({
              label: null,
              column1: (0, i.jsxs)(i.Fragment, {
                  children: [
                      J === A.Si.TIER_2 || es
                          ? (0, i.jsx)(R.Z, {
                                className: P.button,
                                subscriptionTier: A.Si.TIER_0,
                                showIcon: !1,
                                look: c.ButtonLooks.OUTLINED,
                                color: z ? c.ButtonColors.BRAND : c.ButtonColors.WHITE,
                                buttonShineClassName: void 0
                            })
                          : (0, i.jsx)(R.Z, {
                                className: P.button,
                                subscriptionTier: A.Si.TIER_0,
                                showIcon: !1
                            }),
                      q === A.p9.TIER_2 || null != J
                          ? null
                          : (0, i.jsx)(S.Z, {
                                className: P.button,
                                subscriptionTier: A.Si.TIER_0
                            })
                  ]
              }),
              column2: (0, i.jsxs)(i.Fragment, {
                  children: [
                      J === A.Si.TIER_0
                          ? (0, i.jsx)(R.Z, {
                                className: P.button,
                                subscriptionTier: A.Si.TIER_2,
                                showIcon: !1,
                                look: c.ButtonLooks.OUTLINED,
                                color: z ? c.ButtonColors.BRAND : c.ButtonColors.WHITE,
                                buttonShineClassName: void 0
                            })
                          : (0, i.jsx)(R.Z, {
                                className: P.button,
                                subscriptionTier: A.Si.TIER_2,
                                showIcon: !1,
                                isEligibleForBogoPromotion: es
                            }),
                      q === A.p9.TIER_0 || null != J
                          ? null
                          : (0, i.jsx)(S.Z, {
                                className: P.button,
                                subscriptionTier: A.Si.TIER_2
                            })
                  ]
              }),
              withBottomBorder: !1,
              withBottomBorderRadius: !0,
              buttonsRow: null == J
          }),
        (n = M
            ? null
            : null != J || null != q
              ? (0, i.jsx)(N.Cy, {
                    text: null != J ? j.intl.string(j.t.IBYG5e) : j.intl.string(j.t.ce1v3d),
                    className: P.freeTrialPillWithSparkles,
                    colorOptions: J === A.Si.TIER_0 ? (z ? N.VE.PREMIUM_TIER_0_GRADIENT_FILL : N.VE.PREMIUM_TIER_0_WHITE_FILL) : z ? (K ? N.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL : N.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL) : N.VE.PREMIUM_TIER_2_WHITE_FILL
                })
              : es
                ? (0, i.jsx)(w, {})
                : (0, i.jsx)(y, {}));
    let eo = J === A.Si.TIER_0 || q === A.p9.TIER_0 || D === A.p9.TIER_0;
    return (0, i.jsx)(m.Gt, {
        value: H,
        children: (0, i.jsxs)('div', {
            className: s()(P.root, a),
            'data-testid': 'v2-marketing-page-comparison-table',
            children: [
                (0, i.jsx)(c.Heading, {
                    className: s()(P.titleText, P.__invalid_textColor),
                    variant: 'heading-xxl/extrabold',
                    children: null != O ? O : j.intl.string(j.t.FIbMh4)
                }),
                (0, i.jsxs)('div', {
                    className: P.tableWrapper,
                    children: [
                        (0, i.jsx)('div', {
                            className: s()(B, {
                                [P.tier0ColumnOuter]: eo,
                                [P.tier2ColumnOuter]: !eo
                            }),
                            children: !eo && n
                        }),
                        (0, i.jsxs)('table', {
                            className: P.table,
                            children: [
                                (0, i.jsx)('thead', { children: (0, i.jsx)(L, { ...el }) }),
                                (0, i.jsx)('tbody', {
                                    children: ea.map((e, t) =>
                                        (0, r.createElement)(U, {
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
