t(653041);
var n = t(735250),
  a = t(470079),
  r = t(120356),
  i = t.n(r),
  l = t(442837),
  o = t(780384),
  _ = t(481060),
  c = t(634894),
  E = t(410030),
  u = t(100527),
  R = t(906732),
  d = t(15640),
  I = t(594174),
  T = t(78839),
  A = t(74538),
  M = t(775412),
  S = t(104494),
  N = t(639119),
  p = t(230916),
  m = t(248042),
  C = t(823188),
  g = t(21023),
  P = t(318747),
  O = t(409100),
  f = t(474936),
  x = t(689938),
  L = t(544243),
  h = t(102655),
  b = t(768236),
  v = t(314907),
  Z = t(826701);
let D = e => {
    let {
      isLightTheme: s
    } = e, t = (0, m.W1)();
    return (0, n.jsx)(C.Cy, {
      text: t,
      className: L.bogoPillWithSparkles,
      colorOptions: s ? C.VE.PREMIUM_TIER_2_WHITE_FILL : C.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
    })
  },
  U = () => (0, n.jsx)("div", {
    className: L.mostPopularPill,
    children: (0, n.jsx)(_.Heading, {
      className: L.mostPopularText,
      variant: "heading-deprecated-12/extrabold",
      children: x.Z.Messages.MOST_POPULAR
    })
  }),
  B = e => {
    let s, {
        premiumType: t
      } = e,
      a = (0, E.ZP)();
    s = t === f.p9.TIER_0 ? (0, o.wj)(a) ? h : b : (0, o.wj)(a) ? v : Z;
    let r = (0, A.Px)(t);
    return (0, n.jsx)("img", {
      src: s,
      className: L.logo,
      alt: r
    })
  },
  j = e => {
    let {
      label: s,
      column1: t,
      column2: a
    } = e;
    return (0, n.jsxs)("tr", {
      className: i()(L.headerRow, L.rowBottomBorder, L.topBorderRadius),
      children: [(0, n.jsx)("th", {
        scope: "col",
        className: L.headerLabelCell,
        children: s
      }), (0, n.jsx)("th", {
        scope: "col",
        className: L.headerCell,
        children: t
      }), (0, n.jsx)("th", {
        scope: "col",
        className: i()(L.headerCell, L.topBorderRadius),
        children: a
      })]
    })
  },
  G = e => {
    let {
      label: s,
      column1: t,
      column2: a,
      withBottomBorder: r = !0,
      withTopBorderRadius: l = !1,
      withBottomBorderRadius: o = !1,
      buttonsRow: _ = !1,
      shortRow: c = !1
    } = e;
    return (0, n.jsxs)("tr", {
      className: i()(L.row, {
        [L.wideRow]: _,
        [L.topBorderRadius]: l,
        [L.bottomBorderRadius]: o,
        [L.rowBottomBorder]: r,
        [L.shortRow]: c
      }),
      children: [(0, n.jsx)("th", {
        scope: "row",
        className: L.labelCell,
        children: s
      }), (0, n.jsx)("td", {
        className: i()(L.cell, {
          [L.buttonsCell]: _
        }),
        children: t
      }), (0, n.jsx)("td", {
        className: i()(L.cell, {
          [L.topBorderRadius]: l,
          [L.bottomBorderRadius]: o,
          [L.buttonsCell]: _
        }),
        children: a
      })]
    })
  };
s.Z = e => {
  var s;
  let t, {
      className: r,
      hideCTAs: h = !1,
      headingOverride: b,
      hidePill: v = !1,
      selectedPlanColumnClassName: Z,
      selectedPlanTier: W = f.p9.TIER_2
    } = e,
    {
      analyticsLocations: H
    } = (0, R.ZP)(u.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
    k = (0, l.e7)([T.ZP], () => T.ZP.hasFetchedSubscriptions()),
    K = (0, d.V)(),
    F = "PlanComparisonTable";
  (0, c.j)({
    location: F + " auto on",
    autoTrackExposure: !0
  }), (0, c.j)({
    location: F + " auto off",
    autoTrackExposure: !1
  });
  let w = (0, E.ZP)(),
    V = (0, o.ap)(w),
    y = (0, l.e7)([I.default], () => I.default.getCurrentUser()),
    Y = (0, A.M5)(y, f.p9.TIER_2),
    z = (0, N.N)(),
    Q = null == z ? void 0 : null === (s = z.subscription_trial) || void 0 === s ? void 0 : s.sku_id,
    X = (0, M.rT)(),
    J = (0, S.Ng)(),
    $ = null != J && (0, S.Wp)(J, f.Si.TIER_2),
    q = (0, p.A)(f.Xh.PREMIUM_MONTH_TIER_2),
    ee = "".concat(q, "/").concat((0, A.eP)(f.rV.MONTH)),
    es = (0, A.CY)(f.Xh.PREMIUM_MONTH_TIER_0),
    et = (0, A.CY)(f.Xh.PREMIUM_MONTH_TIER_2),
    en = (0, g.n)(es, et, $, ee),
    ea = (0, m.Vi)();
  if (!k || !K) return null;
  let er = {
    label: (0, n.jsx)(_.Heading, {
      className: L.__invalid_textColor,
      variant: "heading-lg/extrabold",
      children: x.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_HEADER
    }),
    column1: (0, n.jsx)(B, {
      premiumType: f.p9.TIER_0
    }),
    column2: (0, n.jsx)(B, {
      premiumType: f.p9.TIER_2
    })
  };
  h ? en.push({
    label: null,
    column1: null,
    column2: null,
    withBottomBorder: !1,
    withBottomBorderRadius: !0,
    buttonsRow: !1,
    shortRow: !0
  }) : en.push({
    label: null,
    column1: (0, n.jsxs)(n.Fragment, {
      children: [Q === f.Si.TIER_2 || ea ? (0, n.jsx)(O.Z, {
        className: L.button,
        subscriptionTier: f.Si.TIER_0,
        showIcon: !1,
        look: _.ButtonLooks.OUTLINED,
        color: V ? _.ButtonColors.BRAND : _.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, n.jsx)(O.Z, {
        className: L.button,
        subscriptionTier: f.Si.TIER_0,
        showIcon: !1
      }), X === f.p9.TIER_2 || null != Q ? null : (0, n.jsx)(P.Z, {
        className: L.button,
        subscriptionTier: f.Si.TIER_0
      })]
    }),
    column2: (0, n.jsxs)(n.Fragment, {
      children: [Q === f.Si.TIER_0 ? (0, n.jsx)(O.Z, {
        className: L.button,
        subscriptionTier: f.Si.TIER_2,
        showIcon: !1,
        look: _.ButtonLooks.OUTLINED,
        color: V ? _.ButtonColors.BRAND : _.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, n.jsx)(O.Z, {
        className: L.button,
        subscriptionTier: f.Si.TIER_2,
        showIcon: !1,
        isEligibleForBogoPromotion: ea
      }), X === f.p9.TIER_0 || null != Q ? null : (0, n.jsx)(P.Z, {
        className: L.button,
        subscriptionTier: f.Si.TIER_2
      })]
    }),
    withBottomBorder: !1,
    withBottomBorderRadius: !0,
    buttonsRow: null == Q
  }), t = v ? null : null != Q || null != X ? (0, n.jsx)(C.Cy, {
    text: null != Q ? x.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT : x.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_PLAN_ACTIVATED_PILL,
    className: L.freeTrialPillWithSparkles,
    colorOptions: Q === f.Si.TIER_0 ? V ? C.VE.PREMIUM_TIER_0_GRADIENT_FILL : C.VE.PREMIUM_TIER_0_WHITE_FILL : V ? Y ? C.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL : C.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL : C.VE.PREMIUM_TIER_2_WHITE_FILL
  }) : ea ? (0, n.jsx)(D, {
    isLightTheme: V
  }) : (0, n.jsx)(U, {});
  let ei = Q === f.Si.TIER_0 || X === f.p9.TIER_0 || W === f.p9.TIER_0;
  return (0, n.jsx)(R.Gt, {
    value: H,
    children: (0, n.jsxs)("div", {
      className: i()(L.root, r),
      "data-testid": "v2-marketing-page-comparison-table",
      children: [(0, n.jsx)(_.Heading, {
        className: i()(L.titleText, L.__invalid_textColor),
        variant: "heading-xxl/extrabold",
        children: null != b ? b : x.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_TITLE
      }), (0, n.jsxs)("div", {
        className: L.tableWrapper,
        children: [(0, n.jsx)("div", {
          className: i()(Z, {
            [L.tier0ColumnOuter]: ei,
            [L.tier2ColumnOuter]: !ei
          }),
          children: !ei && t
        }), (0, n.jsxs)("table", {
          className: L.table,
          children: [(0, n.jsx)("thead", {
            children: (0, n.jsx)(j, {
              ...er
            })
          }), (0, n.jsx)("tbody", {
            children: en.map((e, s) => (0, a.createElement)(G, {
              ...e,
              key: s
            }))
          })]
        })]
      })]
    })
  })
}