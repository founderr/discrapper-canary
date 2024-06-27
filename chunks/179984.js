n(653041);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(442837),
  o = n(780384),
  c = n(481060),
  d = n(634894),
  _ = n(410030),
  E = n(100527),
  u = n(906732),
  T = n(15640),
  I = n(594174),
  R = n(78839),
  C = n(74538),
  g = n(775412),
  p = n(104494),
  A = n(639119),
  N = n(230916),
  m = n(248042),
  S = n(823188),
  f = n(21023),
  M = n(318747),
  h = n(409100),
  b = n(474936),
  x = n(689938),
  O = n(544243),
  P = n(102655),
  L = n(768236),
  v = n(314907),
  Z = n(826701);
let D = e => {
    let {
      isLightTheme: t
    } = e, n = (0, m.W1)();
    return (0, s.jsx)(S.Cy, {
      text: n,
      className: O.bogoPillWithSparkles,
      colorOptions: t ? S.VE.PREMIUM_TIER_2_WHITE_FILL : S.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
    })
  },
  B = () => (0, s.jsx)("div", {
    className: O.mostPopularPill,
    children: (0, s.jsx)(c.Heading, {
      className: O.mostPopularText,
      variant: "heading-deprecated-12/extrabold",
      children: x.Z.Messages.MOST_POPULAR
    })
  }),
  U = e => {
    let t, {
        premiumType: n
      } = e,
      a = (0, _.ZP)();
    t = n === b.p9.TIER_0 ? (0, o.wj)(a) ? P : L : (0, o.wj)(a) ? v : Z;
    let i = (0, C.Px)(n);
    return (0, s.jsx)("img", {
      src: t,
      className: O.logo,
      alt: i
    })
  },
  j = e => {
    let {
      label: t,
      column1: n,
      column2: a
    } = e;
    return (0, s.jsxs)("tr", {
      className: r()(O.headerRow, O.rowBottomBorder, O.topBorderRadius),
      children: [(0, s.jsx)("th", {
        scope: "col",
        className: O.headerLabelCell,
        children: t
      }), (0, s.jsx)("th", {
        scope: "col",
        className: O.headerCell,
        children: n
      }), (0, s.jsx)("th", {
        scope: "col",
        className: r()(O.headerCell, O.topBorderRadius),
        children: a
      })]
    })
  },
  G = e => {
    let {
      label: t,
      column1: n,
      column2: a,
      withBottomBorder: i = !0,
      withTopBorderRadius: l = !1,
      withBottomBorderRadius: o = !1,
      buttonsRow: c = !1,
      shortRow: d = !1
    } = e;
    return (0, s.jsxs)("tr", {
      className: r()(O.row, {
        [O.wideRow]: c,
        [O.topBorderRadius]: l,
        [O.bottomBorderRadius]: o,
        [O.rowBottomBorder]: i,
        [O.shortRow]: d
      }),
      children: [(0, s.jsx)("th", {
        scope: "row",
        className: O.labelCell,
        children: t
      }), (0, s.jsx)("td", {
        className: r()(O.cell, {
          [O.buttonsCell]: c
        }),
        children: n
      }), (0, s.jsx)("td", {
        className: r()(O.cell, {
          [O.topBorderRadius]: l,
          [O.bottomBorderRadius]: o,
          [O.buttonsCell]: c
        }),
        children: a
      })]
    })
  };
t.Z = e => {
  var t;
  let n, {
      className: i,
      hideCTAs: P = !1,
      headingOverride: L,
      hidePill: v = !1,
      selectedPlanColumnClassName: Z,
      selectedPlanTier: H = b.p9.TIER_2
    } = e,
    {
      analyticsLocations: y
    } = (0, u.ZP)(E.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
    k = (0, l.e7)([R.ZP], () => R.ZP.hasFetchedSubscriptions()),
    w = (0, T.V)(),
    V = "PlanComparisonTable";
  (0, d.j)({
    location: V + " auto on",
    autoTrackExposure: !0
  }), (0, d.j)({
    location: V + " auto off",
    autoTrackExposure: !1
  });
  let F = (0, _.ZP)(),
    W = (0, o.ap)(F),
    K = (0, l.e7)([I.default], () => I.default.getCurrentUser()),
    Y = (0, C.M5)(K, b.p9.TIER_2),
    z = (0, A.N)(),
    Q = null == z ? void 0 : null === (t = z.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
    J = (0, g.rT)(),
    q = (0, p.Ng)(),
    X = null != q && (0, p.Wp)(q, b.Si.TIER_2),
    $ = (0, N.A)(b.Xh.PREMIUM_MONTH_TIER_2),
    ee = "".concat($, "/").concat((0, C.eP)(b.rV.MONTH)),
    et = (0, C.CY)(b.Xh.PREMIUM_MONTH_TIER_0),
    en = (0, C.CY)(b.Xh.PREMIUM_MONTH_TIER_2),
    es = (0, f.n)(et, en, X, ee),
    ea = (0, m.Vi)();
  if (!k || !w) return null;
  let ei = {
    label: (0, s.jsx)(c.Heading, {
      className: O.__invalid_textColor,
      variant: "heading-lg/extrabold",
      children: x.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_HEADER
    }),
    column1: (0, s.jsx)(U, {
      premiumType: b.p9.TIER_0
    }),
    column2: (0, s.jsx)(U, {
      premiumType: b.p9.TIER_2
    })
  };
  P ? es.push({
    label: null,
    column1: null,
    column2: null,
    withBottomBorder: !1,
    withBottomBorderRadius: !0,
    buttonsRow: !1,
    shortRow: !0
  }) : es.push({
    label: null,
    column1: (0, s.jsxs)(s.Fragment, {
      children: [Q === b.Si.TIER_2 || ea ? (0, s.jsx)(h.Z, {
        className: O.button,
        subscriptionTier: b.Si.TIER_0,
        showIcon: !1,
        look: c.ButtonLooks.OUTLINED,
        color: W ? c.ButtonColors.BRAND : c.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, s.jsx)(h.Z, {
        className: O.button,
        subscriptionTier: b.Si.TIER_0,
        showIcon: !1
      }), J === b.p9.TIER_2 || null != Q ? null : (0, s.jsx)(M.Z, {
        className: O.button,
        subscriptionTier: b.Si.TIER_0
      })]
    }),
    column2: (0, s.jsxs)(s.Fragment, {
      children: [Q === b.Si.TIER_0 ? (0, s.jsx)(h.Z, {
        className: O.button,
        subscriptionTier: b.Si.TIER_2,
        showIcon: !1,
        look: c.ButtonLooks.OUTLINED,
        color: W ? c.ButtonColors.BRAND : c.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, s.jsx)(h.Z, {
        className: O.button,
        subscriptionTier: b.Si.TIER_2,
        showIcon: !1,
        isEligibleForBogoPromotion: ea
      }), J === b.p9.TIER_0 || null != Q ? null : (0, s.jsx)(M.Z, {
        className: O.button,
        subscriptionTier: b.Si.TIER_2
      })]
    }),
    withBottomBorder: !1,
    withBottomBorderRadius: !0,
    buttonsRow: null == Q
  }), n = v ? null : null != Q || null != J ? (0, s.jsx)(S.Cy, {
    text: null != Q ? x.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT : x.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_PLAN_ACTIVATED_PILL,
    className: O.freeTrialPillWithSparkles,
    colorOptions: Q === b.Si.TIER_0 ? W ? S.VE.PREMIUM_TIER_0_GRADIENT_FILL : S.VE.PREMIUM_TIER_0_WHITE_FILL : W ? Y ? S.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL : S.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL : S.VE.PREMIUM_TIER_2_WHITE_FILL
  }) : ea ? (0, s.jsx)(D, {
    isLightTheme: W
  }) : (0, s.jsx)(B, {});
  let er = Q === b.Si.TIER_0 || J === b.p9.TIER_0 || H === b.p9.TIER_0;
  return (0, s.jsx)(u.Gt, {
    value: y,
    children: (0, s.jsxs)("div", {
      className: r()(O.root, i),
      "data-testid": "v2-marketing-page-comparison-table",
      children: [(0, s.jsx)(c.Heading, {
        className: r()(O.titleText, O.__invalid_textColor),
        variant: "heading-xxl/extrabold",
        children: null != L ? L : x.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_TITLE
      }), (0, s.jsxs)("div", {
        className: O.tableWrapper,
        children: [(0, s.jsx)("div", {
          className: r()(Z, {
            [O.tier0ColumnOuter]: er,
            [O.tier2ColumnOuter]: !er
          }),
          children: !er && n
        }), (0, s.jsxs)("table", {
          className: O.table,
          children: [(0, s.jsx)("thead", {
            children: (0, s.jsx)(j, {
              ...ei
            })
          }), (0, s.jsx)("tbody", {
            children: es.map((e, t) => (0, a.createElement)(G, {
              ...e,
              key: t
            }))
          })]
        })]
      })]
    })
  })
}