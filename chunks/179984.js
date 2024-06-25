s(653041);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  l = s(442837),
  o = s(780384),
  c = s(481060),
  E = s(634894),
  _ = s(410030),
  u = s(100527),
  d = s(906732),
  T = s(15640),
  I = s(594174),
  R = s(78839),
  A = s(74538),
  N = s(775412),
  C = s(104494),
  g = s(639119),
  m = s(230916),
  M = s(248042),
  S = s(823188),
  p = s(21023),
  h = s(318747),
  f = s(409100),
  O = s(474936),
  x = s(689938),
  L = s(544243),
  P = s(102655),
  v = s(768236),
  Z = s(314907),
  b = s(826701);
let D = e => {
    let {
      isLightTheme: t
    } = e, s = (0, M.W1)();
    return (0, n.jsx)(S.Cy, {
      text: s,
      className: L.bogoPillWithSparkles,
      colorOptions: t ? S.VE.PREMIUM_TIER_2_WHITE_FILL : S.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
    })
  },
  U = () => (0, n.jsx)("div", {
    className: L.mostPopularPill,
    children: (0, n.jsx)(c.Heading, {
      className: L.mostPopularText,
      variant: "heading-deprecated-12/extrabold",
      children: x.Z.Messages.MOST_POPULAR
    })
  }),
  j = e => {
    let t, {
        premiumType: s
      } = e,
      a = (0, _.ZP)();
    t = s === O.p9.TIER_0 ? (0, o.wj)(a) ? P : v : (0, o.wj)(a) ? Z : b;
    let i = (0, A.Px)(s);
    return (0, n.jsx)("img", {
      src: t,
      className: L.logo,
      alt: i
    })
  },
  G = e => {
    let {
      label: t,
      column1: s,
      column2: a
    } = e;
    return (0, n.jsxs)("tr", {
      className: r()(L.headerRow, L.rowBottomBorder, L.topBorderRadius),
      children: [(0, n.jsx)("th", {
        scope: "col",
        className: L.headerLabelCell,
        children: t
      }), (0, n.jsx)("th", {
        scope: "col",
        className: L.headerCell,
        children: s
      }), (0, n.jsx)("th", {
        scope: "col",
        className: r()(L.headerCell, L.topBorderRadius),
        children: a
      })]
    })
  },
  B = e => {
    let {
      label: t,
      column1: s,
      column2: a,
      withBottomBorder: i = !0,
      withTopBorderRadius: l = !1,
      withBottomBorderRadius: o = !1,
      buttonsRow: c = !1,
      shortRow: E = !1
    } = e;
    return (0, n.jsxs)("tr", {
      className: r()(L.row, {
        [L.wideRow]: c,
        [L.topBorderRadius]: l,
        [L.bottomBorderRadius]: o,
        [L.rowBottomBorder]: i,
        [L.shortRow]: E
      }),
      children: [(0, n.jsx)("th", {
        scope: "row",
        className: L.labelCell,
        children: t
      }), (0, n.jsx)("td", {
        className: r()(L.cell, {
          [L.buttonsCell]: c
        }),
        children: s
      }), (0, n.jsx)("td", {
        className: r()(L.cell, {
          [L.topBorderRadius]: l,
          [L.bottomBorderRadius]: o,
          [L.buttonsCell]: c
        }),
        children: a
      })]
    })
  };
t.Z = e => {
  var t;
  let s, {
      className: i,
      hideCTAs: P = !1,
      headingOverride: v,
      hidePill: Z = !1,
      selectedPlanColumnClassName: b,
      selectedPlanTier: H = O.p9.TIER_2
    } = e,
    {
      analyticsLocations: y
    } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
    k = (0, l.e7)([R.ZP], () => R.ZP.hasFetchedSubscriptions()),
    V = (0, T.V)(),
    F = "PlanComparisonTable";
  (0, E.j)({
    location: F + " auto on",
    autoTrackExposure: !0
  }), (0, E.j)({
    location: F + " auto off",
    autoTrackExposure: !1
  });
  let w = (0, _.ZP)(),
    W = (0, o.ap)(w),
    K = (0, l.e7)([I.default], () => I.default.getCurrentUser()),
    Y = (0, A.M5)(K, O.p9.TIER_2),
    z = (0, g.N)(),
    Q = null == z ? void 0 : null === (t = z.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
    X = (0, N.rT)(),
    q = (0, C.Ng)(),
    J = null != q && (0, C.Wp)(q, O.Si.TIER_2),
    $ = (0, m.A)(O.Xh.PREMIUM_MONTH_TIER_2),
    ee = "".concat($, "/").concat((0, A.eP)(O.rV.MONTH)),
    et = (0, A.CY)(O.Xh.PREMIUM_MONTH_TIER_0),
    es = (0, A.CY)(O.Xh.PREMIUM_MONTH_TIER_2),
    en = (0, p.n)(et, es, J, ee),
    ea = (0, M.Vi)();
  if (!k || !V) return null;
  let ei = {
    label: (0, n.jsx)(c.Heading, {
      className: L.__invalid_textColor,
      variant: "heading-lg/extrabold",
      children: x.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_HEADER
    }),
    column1: (0, n.jsx)(j, {
      premiumType: O.p9.TIER_0
    }),
    column2: (0, n.jsx)(j, {
      premiumType: O.p9.TIER_2
    })
  };
  P ? en.push({
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
      children: [Q === O.Si.TIER_2 || ea ? (0, n.jsx)(f.Z, {
        className: L.button,
        subscriptionTier: O.Si.TIER_0,
        showIcon: !1,
        look: c.ButtonLooks.OUTLINED,
        color: W ? c.ButtonColors.BRAND : c.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, n.jsx)(f.Z, {
        className: L.button,
        subscriptionTier: O.Si.TIER_0,
        showIcon: !1
      }), X === O.p9.TIER_2 || null != Q ? null : (0, n.jsx)(h.Z, {
        className: L.button,
        subscriptionTier: O.Si.TIER_0
      })]
    }),
    column2: (0, n.jsxs)(n.Fragment, {
      children: [Q === O.Si.TIER_0 ? (0, n.jsx)(f.Z, {
        className: L.button,
        subscriptionTier: O.Si.TIER_2,
        showIcon: !1,
        look: c.ButtonLooks.OUTLINED,
        color: W ? c.ButtonColors.BRAND : c.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, n.jsx)(f.Z, {
        className: L.button,
        subscriptionTier: O.Si.TIER_2,
        showIcon: !1,
        isEligibleForBogoPromotion: ea
      }), X === O.p9.TIER_0 || null != Q ? null : (0, n.jsx)(h.Z, {
        className: L.button,
        subscriptionTier: O.Si.TIER_2
      })]
    }),
    withBottomBorder: !1,
    withBottomBorderRadius: !0,
    buttonsRow: null == Q
  }), s = Z ? null : null != Q || null != X ? (0, n.jsx)(S.Cy, {
    text: null != Q ? x.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT : x.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_PLAN_ACTIVATED_PILL,
    className: L.freeTrialPillWithSparkles,
    colorOptions: Q === O.Si.TIER_0 ? W ? S.VE.PREMIUM_TIER_0_GRADIENT_FILL : S.VE.PREMIUM_TIER_0_WHITE_FILL : W ? Y ? S.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL : S.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL : S.VE.PREMIUM_TIER_2_WHITE_FILL
  }) : ea ? (0, n.jsx)(D, {
    isLightTheme: W
  }) : (0, n.jsx)(U, {});
  let er = Q === O.Si.TIER_0 || X === O.p9.TIER_0 || H === O.p9.TIER_0;
  return (0, n.jsx)(d.Gt, {
    value: y,
    children: (0, n.jsxs)("div", {
      className: r()(L.root, i),
      "data-testid": "v2-marketing-page-comparison-table",
      children: [(0, n.jsx)(c.Heading, {
        className: r()(L.titleText, L.__invalid_textColor),
        variant: "heading-xxl/extrabold",
        children: null != v ? v : x.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_TITLE
      }), (0, n.jsxs)("div", {
        className: L.tableWrapper,
        children: [(0, n.jsx)("div", {
          className: r()(b, {
            [L.tier0ColumnOuter]: er,
            [L.tier2ColumnOuter]: !er
          }),
          children: !er && s
        }), (0, n.jsxs)("table", {
          className: L.table,
          children: [(0, n.jsx)("thead", {
            children: (0, n.jsx)(G, {
              ...ei
            })
          }), (0, n.jsx)("tbody", {
            children: en.map((e, t) => (0, a.createElement)(B, {
              ...e,
              key: t
            }))
          })]
        })]
      })]
    })
  })
}