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
    m = n(100527),
    g = n(906732),
    f = n(15640),
    p = n(78839),
    _ = n(74538),
    h = n(104494),
    E = n(639119),
    b = n(230916),
    x = n(694338),
    C = n(474936),
    T = n(388032),
    v = n(637444),
    N = n(102655),
    I = n(768236),
    S = n(314907),
    R = n(826701);
let j = () =>
        (0, i.jsx)('div', {
            className: v.comparisonTablePill,
            children: (0, i.jsx)(c.Heading, {
                className: v.mostPopularText,
                variant: 'text-xs/bold',
                children: T.intl.string(T.t.TR2B4e)
            })
        }),
    A = () =>
        (0, i.jsx)('div', {
            className: v.comparisonTablePill,
            children: (0, i.jsx)(c.Heading, {
                className: v.mostPopularText,
                variant: 'heading-deprecated-12/extrabold',
                children: T.intl.string(T.t.IBYG5e)
            })
        }),
    P = (e) => {
        let t,
            { premiumType: n } = e,
            r = (0, u.ZP)();
        t = n === C.p9.TIER_0 ? ((0, o.wj)(r) ? N : I) : (0, o.wj)(r) ? S : R;
        let a = (0, _.Px)(n);
        return (0, i.jsx)('img', {
            src: t,
            className: v.logo,
            alt: a
        });
    },
    Z = () =>
        (0, i.jsx)('thead', {
            children: (0, i.jsxs)('tr', {
                className: s()(v.headerRow, v.topBorderRadius),
                children: [
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: v.headerLabelCell,
                        children: (0, i.jsx)(c.Heading, {
                            className: v.__invalid_textColor,
                            variant: 'heading-xl/semibold',
                            children: T.intl.string(T.t.XXENra)
                        })
                    }),
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: v.headerCell,
                        children: (0, i.jsx)(P, { premiumType: C.p9.TIER_0 })
                    }),
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: s()(v.headerCell, v.topBorderRadius),
                        children: (0, i.jsx)(P, { premiumType: C.p9.TIER_2 })
                    })
                ]
            })
        }),
    M = (e) => {
        let { label: t, tier0Column: n, tier2Column: r, withBottomBorder: a = !0, withBottomMargin: l = !1 } = e;
        return (0, i.jsxs)('tr', {
            className: s()(v.row, {
                [v.rowBottomBorder]: a,
                [v.bottomMargin]: l
            }),
            children: [
                (0, i.jsx)('th', {
                    scope: 'row',
                    className: v.labelCell,
                    children: t
                }),
                (0, i.jsx)('td', {
                    className: s()(v.cell),
                    children: n
                }),
                (0, i.jsx)('td', {
                    className: s()(v.cell),
                    children: r
                })
            ]
        });
    };
t.Z = (e) => {
    var t;
    let n,
        { className: a, hidePill: o = !1, selectedPlanColumnClassName: c, selectedPlanTier: u = C.p9.TIER_2 } = e,
        { analyticsLocations: T } = (0, g.ZP)(m.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
        N = (0, l.e7)([p.ZP], () => p.ZP.hasFetchedSubscriptions()),
        I = (0, f.V)(),
        S = 'PlanComparisonTable';
    (0, d.j)({
        location: S + ' auto on',
        autoTrackExposure: !0
    }),
        (0, d.j)({
            location: S + ' auto off',
            autoTrackExposure: !1
        });
    let R = (0, E.N)(),
        P = null == R ? void 0 : null === (t = R.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        B = (0, h.Ng)(),
        O = null != B && (0, h.Wp)(B, C.Si.TIER_2),
        w = (0, b.A)(C.Xh.PREMIUM_MONTH_TIER_2),
        y = ''.concat(w, '/').concat((0, _.eP)(C.rV.MONTH)),
        k = (0, _.CY)(C.Xh.PREMIUM_MONTH_TIER_0),
        L = (0, _.CY)(C.Xh.PREMIUM_MONTH_TIER_2),
        U = (0, x.a)(k, L, O, y);
    if (!N || !I) return null;
    U.push({
        label: null,
        tier0Column: null,
        tier2Column: null,
        withBottomBorder: !1
    }),
        (n = o ? null : null != R ? (0, i.jsx)(A, {}) : (0, i.jsx)(j, {}));
    let D = P === C.Si.TIER_0 || u === C.p9.TIER_0;
    return (0, i.jsx)(g.Gt, {
        value: T,
        children: (0, i.jsx)('div', {
            className: s()(v.root, a),
            'data-testid': 'v2-marketing-page-comparison-table',
            children: (0, i.jsxs)('div', {
                className: v.tableWrapper,
                children: [
                    (0, i.jsxs)('div', {
                        className: s()(c, {
                            [v.tier0ColumnPosition]: D,
                            [v.tier2ColumnPosition]: !D
                        }),
                        children: [
                            !D && n,
                            (0, i.jsx)('div', {
                                className: s()({
                                    [v.tier0ColumnOuter]: D,
                                    [v.tier2ColumnOuter]: !D
                                })
                            })
                        ]
                    }),
                    (0, i.jsxs)('table', {
                        className: v.table,
                        children: [
                            (0, i.jsx)(Z, {}),
                            (0, i.jsx)('tbody', {
                                children: U.map((e, t) =>
                                    (0, r.createElement)(M, {
                                        ...e,
                                        key: t
                                    })
                                )
                            })
                        ]
                    })
                ]
            })
        })
    });
};
