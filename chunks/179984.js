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
  d = t(906732),
  R = t(15640),
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
  f = t(318747),
  P = t(409100),
  O = t(474936),
  x = t(689938),
  h = t(544243),
  L = t(102655),
  b = t(768236),
  v = t(314907),
  Z = t(826701);
let D = e => {
    let {
      isLightTheme: s
    } = e, t = (0, m.W1)();
    return (0, n.jsx)(C.Cy, {
      text: t,
      className: h.bogoPillWithSparkles,
      colorOptions: s ? C.VE.PREMIUM_TIER_2_WHITE_FILL : C.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
    })
  },
  U = () => (0, n.jsx)("div", {
    className: h.mostPopularPill,
    children: (0, n.jsx)(_.Heading, {
      className: h.mostPopularText,
      variant: "heading-deprecated-12/extrabold",
      children: x.Z.Messages.MOST_POPULAR
    })
  }),
  B = e => {
    let s, {
        premiumType: t
      } = e,
      a = (0, E.ZP)();
    s = t === O.p9.TIER_0 ? (0, o.wj)(a) ? L : b : (0, o.wj)(a) ? v : Z;
    let r = (0, A.Px)(t);
    return (0, n.jsx)("img", {
      src: s,
      className: h.logo,
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
      className: i()(h.headerRow, h.rowBottomBorder, h.topBorderRadius),
      children: [(0, n.jsx)("th", {
        scope: "col",
        className: h.headerLabelCell,
        children: s
      }), (0, n.jsx)("th", {
        scope: "col",
        className: h.headerCell,
        children: t
      }), (0, n.jsx)("th", {
        scope: "col",
        className: i()(h.headerCell, h.topBorderRadius),
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
      className: i()(h.row, {
        [h.wideRow]: _,
        [h.topBorderRadius]: l,
        [h.bottomBorderRadius]: o,
        [h.rowBottomBorder]: r,
        [h.shortRow]: c
      }),
      children: [(0, n.jsx)("th", {
        scope: "row",
        className: h.labelCell,
        children: s
      }), (0, n.jsx)("td", {
        className: i()(h.cell, {
          [h.buttonsCell]: _
        }),
        children: t
      }), (0, n.jsx)("td", {
        className: i()(h.cell, {
          [h.topBorderRadius]: l,
          [h.bottomBorderRadius]: o,
          [h.buttonsCell]: _
        }),
        children: a
      })]
    })
  };
s.Z = e => {
  var s;
  let t, {
      className: r,
      hideCTAs: L = !1,
      headingOverride: b,
      hidePill: v = !1,
      selectedPlanColumnClassName: Z,
      selectedPlanTier: H = O.p9.TIER_2
    } = e,
    {
      analyticsLocations: W
    } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
    k = (0, l.e7)([T.ZP], () => T.ZP.hasFetchedSubscriptions()),
    K = (0, R.V)(),
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
    Y = (0, A.M5)(y, O.p9.TIER_2),
    z = (0, N.N)(),
    Q = null == z ? void 0 : null === (s = z.subscription_trial) || void 0 === s ? void 0 : s.sku_id,
    X = (0, M.rT)(),
    J = (0, S.Ng)(),
    $ = null != J && (0, S.Wp)(J, O.Si.TIER_2),
    q = (0, p.A)(O.Xh.PREMIUM_MONTH_TIER_2),
    ee = "".concat(q, "/").concat((0, A.eP)(O.rV.MONTH)),
    es = (0, A.CY)(O.Xh.PREMIUM_MONTH_TIER_0),
    et = (0, A.CY)(O.Xh.PREMIUM_MONTH_TIER_2),
    en = (0, g.n)(es, et, $, ee),
    ea = (0, m.Vi)();
  if (!k || !K) return null;
  let er = {
    label: (0, n.jsx)(_.Heading, {
      className: h.__invalid_textColor,
      variant: "heading-lg/extrabold",
      children: x.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_HEADER
    }),
    column1: (0, n.jsx)(B, {
      premiumType: O.p9.TIER_0
    }),
    column2: (0, n.jsx)(B, {
      premiumType: O.p9.TIER_2
    })
  };
  L ? en.push({
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
      children: [Q === O.Si.TIER_2 || ea ? (0, n.jsx)(P.Z, {
        className: h.button,
        subscriptionTier: O.Si.TIER_0,
        showIcon: !1,
        look: _.ButtonLooks.OUTLINED,
        color: V ? _.ButtonColors.BRAND : _.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, n.jsx)(P.Z, {
        className: h.button,
        subscriptionTier: O.Si.TIER_0,
        showIcon: !1
      }), X === O.p9.TIER_2 || null != Q ? null : (0, n.jsx)(f.Z, {
        className: h.button,
        subscriptionTier: O.Si.TIER_0
      })]
    }),
    column2: (0, n.jsxs)(n.Fragment, {
      children: [Q === O.Si.TIER_0 ? (0, n.jsx)(P.Z, {
        className: h.button,
        subscriptionTier: O.Si.TIER_2,
        showIcon: !1,
        look: _.ButtonLooks.OUTLINED,
        color: V ? _.ButtonColors.BRAND : _.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, n.jsx)(P.Z, {
        className: h.button,
        subscriptionTier: O.Si.TIER_2,
        showIcon: !1,
        isEligibleForBogoPromotion: ea
      }), X === O.p9.TIER_0 || null != Q ? null : (0, n.jsx)(f.Z, {
        className: h.button,
        subscriptionTier: O.Si.TIER_2
      })]
    }),
    withBottomBorder: !1,
    withBottomBorderRadius: !0,
    buttonsRow: null == Q
  }), t = v ? null : null != Q || null != X ? (0, n.jsx)(C.Cy, {
    text: null != Q ? x.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT : x.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_PLAN_ACTIVATED_PILL,
    className: h.freeTrialPillWithSparkles,
    colorOptions: Q === O.Si.TIER_0 ? V ? C.VE.PREMIUM_TIER_0_GRADIENT_FILL : C.VE.PREMIUM_TIER_0_WHITE_FILL : V ? Y ? C.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL : C.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL : C.VE.PREMIUM_TIER_2_WHITE_FILL
  }) : ea ? (0, n.jsx)(D, {
    isLightTheme: V
  }) : (0, n.jsx)(U, {});
  let ei = Q === O.Si.TIER_0 || X === O.p9.TIER_0 || H === O.p9.TIER_0;
  return (0, n.jsx)(d.Gt, {
    value: W,
    children: (0, n.jsxs)("div", {
      className: i()(h.root, r),
      "data-testid": "v2-marketing-page-comparison-table",
      children: [(0, n.jsx)(_.Heading, {
        className: i()(h.titleText, h.__invalid_textColor),
        variant: "heading-xxl/extrabold",
        children: null != b ? b : x.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_TITLE
      }), (0, n.jsxs)("div", {
        className: h.tableWrapper,
        children: [(0, n.jsx)("div", {
          className: i()(Z, {
            [h.tier0ColumnOuter]: ei,
            [h.tier2ColumnOuter]: !ei
          }),
          children: !ei && t
        }), (0, n.jsxs)("table", {
          className: h.table,
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