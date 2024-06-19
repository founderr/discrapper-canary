t(47120);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(913527),
  o = t.n(r),
  c = t(442837),
  E = t(622535),
  d = t(780384),
  _ = t(481060),
  T = t(570140),
  S = t(355467),
  u = t(37234),
  I = t(821849),
  N = t(230711),
  A = t(497321),
  C = t(634894),
  O = t(410030),
  m = t(100527),
  h = t(906732),
  g = t(211242),
  R = t(15640),
  M = t(89057),
  x = t(703656),
  D = t(246946),
  p = t(78839),
  L = t(586576),
  P = t(483444),
  Z = t(626135),
  f = t(74538),
  v = t(140465),
  j = t(646476),
  U = t(424082),
  B = t(730314),
  b = t(91802),
  G = t(898997),
  F = t(197115),
  V = t(823188),
  y = t(504865),
  Y = t(179984),
  H = t(386733),
  k = t(487980),
  w = t(474936),
  W = t(981631),
  K = t(689938),
  z = t(291033),
  Q = t(881188),
  X = t(520314),
  q = t(434691);

function J() {
  var e, s, t;
  let i = (0, c.e7)([p.ZP], () => p.ZP.getPremiumTypeSubscription()),
    {
      bucket: a
    } = (0, B.wj)("PremiumMarketingHome"),
    r = a > 0,
    E = (0, v.t7)(),
    T = (0, v.lr)(),
    {
      annualDiscountPercentage: S
    } = (0, U.lf)("PremiumManagementSettings"),
    I = (0, O.ZP)();
  if (null == i || null == i.planIdFromItems) return null;
  let A = null != i.trialId,
    C = i.planIdFromItems === w.Xh.PREMIUM_YEAR_TIER_2,
    m = E || A,
    h = null != i.trialEndsAt ? o()(i.trialEndsAt).diff(o()(), "d") : 0,
    g = w.GP[i.planIdFromItems],
    R = f.ZP.formatPriceString(f.ZP.getDefaultPrice(g.id), g.interval);
  return (0, n.jsxs)("div", {
    className: l()(z.tierCard, {
      [z.withTier2Rim]: m
    }),
    children: [(0, n.jsxs)("div", {
      className: l()({
        [z.tierInfo]: !r,
        [z.modifiedTierInfo]: r
      }),
      children: [(0, n.jsx)(P.Z, {
        className: l()({
          [z.tierTitle]: !r,
          [z.modifiedTier2Title]: r
        })
      }), r && (0, n.jsx)(_.Text, {
        variant: "display-md",
        color: "always-white",
        className: z.modifiedSubHeader,
        children: K.Z.Messages.PREMIUM_TIER_2_SUBHEADER
      }), m ? (0, n.jsxs)(n.Fragment, {
        children: [(A || !C) && (0, n.jsx)(V.Cy, {
          text: A ? K.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED : K.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
          className: z.topRimPill,
          colorOptions: (0, d.wj)(I) ? V.VE.PREMIUM_TIER_2_WHITE_FILL : V.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
        }), (A || !C) && (0, n.jsx)("div", {
          className: z.rimGlowTier2
        }), (0, n.jsx)(_.Heading, {
          variant: "heading-md/normal",
          color: "always-white",
          className: z.trialHeader,
          children: A ? K.Z.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
            remainingTime: h,
            price: R
          }) : C ? K.Z.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
            percent: null !== (e = null == T ? void 0 : T.percentage) && void 0 !== e ? e : S,
            regularPrice: R
          }) : K.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
            percent: null !== (s = null == T ? void 0 : T.percentage) && void 0 !== s ? s : w.M_,
            regularPrice: R,
            numMonths: null !== (t = null == T ? void 0 : T.duration) && void 0 !== t ? t : w.rt
          })
        })]
      }) : (0, n.jsx)(y.Z, {
        variant: r ? "heading-lg/normal" : void 0,
        subscriptionTier: w.Si.TIER_2,
        interval: g.interval,
        shouldUseModifiedCopy: r
      }), (0, n.jsx)(V.nT, {
        featureSet: r ? V.uZ.MODIFIED : void 0
      }), (0, n.jsx)(_.Button, {
        className: z.tierCardButton,
        color: _.Button.Colors.WHITE,
        onClick: () => {
          Z.default.track(W.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: "to_premium_home_button",
            target: "premium home page"
          }), (0, u.xf)(), (0, x.uL)(W.Z5c.APPLICATION_STORE)
        },
        children: (0, n.jsx)(_.Text, {
          className: z.tierCardButtonCTA,
          variant: "text-sm/medium",
          children: K.Z.Messages.PREMIUM_SETTINGS_NAVIGATE_TO_HOME_CTA_V2
        })
      }), (0, n.jsx)(_.Button, {
        className: z.managePlanButton,
        look: _.Button.Looks.OUTLINED,
        color: _.Button.Colors.WHITE,
        onClick: () => {
          Z.default.track(W.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: "to_subscriptions_button",
            target: "subscriptions settings"
          }), N.Z.open(W.oAB.SUBSCRIPTIONS)
        },
        children: (0, n.jsx)(_.Text, {
          className: z.__invalid_managePlanButtonCTA,
          variant: "text-sm/medium",
          color: "always-white",
          children: K.Z.Messages.PREMIUM_SETTINGS_NATIGATE_TO_SUBSCRIPTIONS_CTA
        })
      })]
    }), !r && (0, n.jsx)("div", {
      className: z.tierImage,
      children: (0, n.jsx)("img", {
        className: z.tierImage,
        alt: "",
        src: Q
      })
    })]
  })
}

function $() {
  let e = (0, j.rK)(),
    {
      enabled: s
    } = j.RO.useExperiment({
      location: "GiftNitro"
    }, {
      autoTrackExposure: e
    }),
    t = s && e;
  return (0, n.jsxs)("div", {
    className: l()(z.giftCard, {
      [z.giftCardSeasonal]: t
    }),
    children: [t && (0, n.jsx)("img", {
      className: z.seasonalGiftImage,
      alt: "",
      src: X
    }), (0, n.jsx)("img", {
      className: z.giftImage,
      style: {
        visibility: t ? "hidden" : "visible"
      },
      alt: "",
      src: q
    }), (0, n.jsxs)("div", {
      className: z.giftInfo,
      children: [(0, n.jsx)(_.Heading, {
        className: l()(z.giftTitle, {
          [z.seasonalColor]: t
        }),
        variant: "heading-xl/extrabold",
        children: t ? K.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_HEADING : K.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING
      }), (0, n.jsx)(_.Text, {
        className: l()(z.giftText, {
          [z.seasonalColor]: t
        }),
        variant: "text-sm/normal",
        children: t ? K.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_BODY : K.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
      }), (0, n.jsx)(F.Z, {
        isGift: !0,
        className: l()(z.giftCardButton, t ? z.seasonalColor : z.giftCardButtonColor),
        look: _.Button.Looks.OUTLINED,
        buttonText: K.Z.Messages.GIFT_NITRO,
        buttonTextClassName: z.giftButtonCTA,
        color: _.Button.Colors.CUSTOM,
        onClick: () => {
          Z.default.track(W.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: "gifting_button",
            target: "payment modal"
          })
        }
      })]
    })]
  })
}
s.Z = function() {
  let e = (0, g.Q)(),
    {
      analyticsLocations: s
    } = (0, h.ZP)(m.Z.PREMIUM_SETTINGS),
    t = (0, c.e7)([p.ZP], () => p.ZP.getPremiumTypeSubscription()),
    a = (0, c.e7)([p.ZP], () => p.ZP.hasFetchedSubscriptions()),
    l = (0, R.V)(),
    [r, o] = i.useState(!0),
    d = (0, b.n)(),
    u = null == d ? void 0 : d.countryCode,
    N = (0, c.e7)([D.Z], () => D.Z.enabled),
    O = "PremiumManagementSettings";
  (0, C.j)({
    location: O + " auto on",
    autoTrackExposure: !0
  }), (0, C.j)({
    location: O + " auto off",
    autoTrackExposure: !1
  }), (0, G.B)("PremiumManagementSettings");
  let x = (0, k.b)("PremiumManagementSettings");
  i.useEffect(() => {
    T.Z.wait(async () => {
      !N && !e && await Promise.all([S.jg(), S.tZ(), (0, I.Y2)(u, null, W.JjL.DISCOVERY)]), o(!1)
    })
  }, [u, N, e]);
  let [P, f] = i.useState(!1);
  if (N) return (0, n.jsx)(A.Z, {});
  if (e) return (0, n.jsx)(M.c8, {});
  if ((!a || null == t || !l) && !r) return (0, n.jsx)(L.Z, {
    title: K.Z.Messages.REDIRECTED_CALLBACK_ERROR,
    note: null
  });
  if (!a || null == t || !l || r) return (0, n.jsx)(_.Spinner, {});
  let v = null != t.trialId;
  return (0, n.jsx)(h.Gt, {
    value: s,
    children: (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)("div", {
        className: z.__invalid_container,
        children: [(0, n.jsx)(J, {}), x && (0, n.jsx)(H.Z, {
          isInSettings: !0
        }), (0, n.jsx)($, {}), (0, n.jsx)(Y.Z, {
          className: z.__invalid_planComparisonTable,
          hideCTAs: !0,
          headingOverride: K.Z.Messages.PREMIUM_COMPARISON_TABLE_WHAT_YOU_HAVE_GOT_TITLE,
          hidePill: !v,
          selectedPlanColumnClassName: z.tier2PlanComparisonTableBackground,
          selectedPlanTier: w.p9.TIER_2
        })]
      }), (0, n.jsx)(E.$, {
        onChange: e => {
          e && !P && (Z.default.track(W.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: s
          }), f(!0))
        },
        children: (0, n.jsx)("div", {
          className: z.bottomOfPageVisibilitySensor
        })
      })]
    })
  })
}