"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("913527"),
  o = s.n(r),
  d = s("442837"),
  u = s("622535"),
  c = s("780384"),
  S = s("481060"),
  E = s("570140"),
  T = s("355467"),
  _ = s("37234"),
  f = s("821849"),
  m = s("230711"),
  g = s("497321"),
  I = s("634894"),
  N = s("410030"),
  h = s("100527"),
  C = s("906732"),
  A = s("211242"),
  p = s("15640"),
  O = s("89057"),
  R = s("703656"),
  x = s("246946"),
  M = s("78839"),
  v = s("586576"),
  L = s("483444"),
  D = s("626135"),
  P = s("74538"),
  b = s("140465"),
  j = s("646476"),
  U = s("424082"),
  y = s("91802"),
  G = s("898997"),
  F = s("197115"),
  B = s("823188"),
  k = s("504865"),
  H = s("179984"),
  w = s("386733"),
  Y = s("487980"),
  V = s("474936"),
  W = s("981631"),
  K = s("689938"),
  z = s("995953"),
  Q = s("881188"),
  q = s("520314"),
  Z = s("434691");

function X() {
  var e, t, s;
  let n = (0, d.useStateFromStores)([M.default], () => M.default.getPremiumTypeSubscription()),
    l = (0, b.useHasDiscountApplied)(),
    r = (0, b.useActiveDiscountInfo)(),
    {
      annualDiscountPercentage: u
    } = (0, U.getAnnualDiscountsExperimentConfig)("PremiumManagementSettings"),
    E = (0, N.default)();
  if (null == n || null == n.planIdFromItems) return null;
  let T = null != n.trialId,
    f = n.planIdFromItems === V.SubscriptionPlans.PREMIUM_YEAR_TIER_2,
    g = l || T,
    I = null != n.trialEndsAt ? o()(n.trialEndsAt).diff(o()(), "d") : 0,
    h = V.SubscriptionPlanInfo[n.planIdFromItems],
    C = P.default.formatPriceString(P.default.getDefaultPrice(h.id), h.interval);
  return (0, a.jsxs)("div", {
    className: i()(z.tierCard, {
      [z.withTier2Rim]: g
    }),
    children: [(0, a.jsxs)("div", {
      className: z.tierInfo,
      children: [(0, a.jsx)(L.default, {
        className: i()(z.tierTitle)
      }), g ? (0, a.jsxs)(a.Fragment, {
        children: [(T || !f) && (0, a.jsx)(B.PremiumPillWithSparkles, {
          text: T ? K.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED : K.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
          className: z.topRimPill,
          colorOptions: (0, c.isThemeDark)(E) ? B.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : B.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL
        }), (T || !f) && (0, a.jsx)("div", {
          className: z.rimGlowTier2
        }), (0, a.jsx)(S.Heading, {
          variant: "heading-md/normal",
          color: "always-white",
          className: z.trialHeader,
          children: T ? K.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
            remainingTime: I,
            price: C
          }) : f ? K.default.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
            percent: null !== (e = null == r ? void 0 : r.percentage) && void 0 !== e ? e : u,
            regularPrice: C
          }) : K.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
            percent: null !== (t = null == r ? void 0 : r.percentage) && void 0 !== t ? t : V.DISCOUNT_PERCENTAGE_FALLBACK,
            regularPrice: C,
            numMonths: null !== (s = null == r ? void 0 : r.duration) && void 0 !== s ? s : V.DISCOUNT_DURATION_FALLBACK
          })
        })]
      }) : (0, a.jsx)(k.default, {
        subscriptionTier: V.PremiumSubscriptionSKUs.TIER_2,
        interval: h.interval
      }), (0, a.jsx)(B.Tier2FeatureItems, {}), (0, a.jsx)(S.Button, {
        className: z.tierCardButton,
        color: S.Button.Colors.WHITE,
        onClick: () => {
          D.default.track(W.AnalyticEvents.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: "to_premium_home_button",
            target: "premium home page"
          }), (0, _.popLayer)(), (0, R.transitionTo)(W.Routes.APPLICATION_STORE)
        },
        children: (0, a.jsx)(S.Text, {
          className: z.tierCardButtonCTA,
          variant: "text-sm/medium",
          children: K.default.Messages.PREMIUM_SETTINGS_NAVIGATE_TO_HOME_CTA_V2
        })
      }), (0, a.jsx)(S.Button, {
        className: z.managePlanButton,
        look: S.Button.Looks.OUTLINED,
        color: S.Button.Colors.WHITE,
        onClick: () => {
          D.default.track(W.AnalyticEvents.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: "to_subscriptions_button",
            target: "subscriptions settings"
          }), m.default.open(W.UserSettingsSections.SUBSCRIPTIONS)
        },
        children: (0, a.jsx)(S.Text, {
          className: z.__invalid_managePlanButtonCTA,
          variant: "text-sm/medium",
          color: "always-white",
          children: K.default.Messages.PREMIUM_SETTINGS_NATIGATE_TO_SUBSCRIPTIONS_CTA
        })
      })]
    }), (0, a.jsx)("div", {
      className: z.tierImage,
      children: (0, a.jsx)("img", {
        className: z.tierImage,
        alt: "",
        src: Q
      })
    })]
  })
}

function J() {
  let e = (0, j.useIsSeasonalGiftingActive)(),
    {
      enabled: t
    } = j.SeasonalGiftingMarketingExperiment.useExperiment({
      location: "GiftNitro"
    }, {
      autoTrackExposure: e
    }),
    s = t && e;
  return (0, a.jsxs)("div", {
    className: i()(z.giftCard, {
      [z.giftCardSeasonal]: s
    }),
    children: [s && (0, a.jsx)("img", {
      className: z.seasonalGiftImage,
      alt: "",
      src: q
    }), (0, a.jsx)("img", {
      className: z.giftImage,
      style: {
        visibility: s ? "hidden" : "visible"
      },
      alt: "",
      src: Z
    }), (0, a.jsxs)("div", {
      className: z.giftInfo,
      children: [(0, a.jsx)(S.Heading, {
        className: i()(z.giftTitle, {
          [z.seasonalColor]: s
        }),
        variant: "heading-xl/extrabold",
        children: s ? K.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_HEADING : K.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING
      }), (0, a.jsx)(S.Text, {
        className: i()(z.giftText, {
          [z.seasonalColor]: s
        }),
        variant: "text-sm/normal",
        children: s ? K.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_BODY : K.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
      }), (0, a.jsx)(F.default, {
        isGift: !0,
        className: i()(z.giftCardButton, s ? z.seasonalColor : z.giftCardButtonColor),
        look: S.Button.Looks.OUTLINED,
        buttonText: K.default.Messages.GIFT_NITRO,
        buttonTextClassName: z.giftButtonCTA,
        color: S.Button.Colors.CUSTOM,
        onClick: () => {
          D.default.track(W.AnalyticEvents.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: "gifting_button",
            target: "payment modal"
          })
        }
      })]
    })]
  })
}
t.default = function() {
  let e = (0, A.useBlockedPaymentsConfig)(),
    {
      analyticsLocations: t
    } = (0, C.default)(h.default.PREMIUM_SETTINGS),
    s = (0, d.useStateFromStores)([M.default], () => M.default.getPremiumTypeSubscription()),
    l = (0, d.useStateFromStores)([M.default], () => M.default.hasFetchedSubscriptions()),
    i = (0, p.useSubscriptionPlansLoaded)(),
    [r, o] = n.useState(!0),
    c = (0, y.useLocalizedPromoQuery)(),
    _ = null == c ? void 0 : c.countryCode,
    m = (0, d.useStateFromStores)([x.default], () => x.default.enabled),
    N = "PremiumManagementSettings";
  (0, I.useTriggerDebuggingAA)({
    location: N + " auto on",
    autoTrackExposure: !0
  }), (0, I.useTriggerDebuggingAA)({
    location: N + " auto off",
    autoTrackExposure: !1
  }), (0, G.useMaybeFetchReferralsRemaining)("PremiumManagementSettings");
  let R = (0, Y.useIsEligibleSenderForReferralProgram)("PremiumManagementSettings");
  n.useEffect(() => {
    E.default.wait(async () => {
      !m && !e && await Promise.all([T.fetchSubscriptions(), T.fetchPaymentSources(), (0, f.fetchPremiumSubscriptionPlans)(_, null, W.RevenueSurfaces.DISCOVERY)]), o(!1)
    })
  }, [_, m, e]);
  let [L, P] = n.useState(!1);
  if (m) return (0, a.jsx)(g.default, {});
  if (e) return (0, a.jsx)(O.BlockedPaymentsContentSettings, {});
  if ((!l || null == s || !i) && !r) return (0, a.jsx)(v.default, {
    title: K.default.Messages.REDIRECTED_CALLBACK_ERROR,
    note: null
  });
  if (!l || null == s || !i || r) return (0, a.jsx)(S.Spinner, {});
  let b = null != s.trialId;
  return (0, a.jsx)(C.AnalyticsLocationProvider, {
    value: t,
    children: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: z.__invalid_container,
        children: [(0, a.jsx)(X, {}), R && (0, a.jsx)(w.default, {
          isInSettings: !0
        }), (0, a.jsx)(J, {}), (0, a.jsx)(H.default, {
          className: z.__invalid_planComparisonTable,
          hideCTAs: !0,
          headingOverride: K.default.Messages.PREMIUM_COMPARISON_TABLE_WHAT_YOU_HAVE_GOT_TITLE,
          hidePill: !b,
          selectedPlanColumnClassName: z.tier2PlanComparisonTableBackground,
          selectedPlanTier: V.PremiumTypes.TIER_2
        })]
      }), (0, a.jsx)(u.VisibilitySensor, {
        onChange: e => {
          e && !L && (D.default.track(W.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: t
          }), P(!0))
        },
        children: (0, a.jsx)("div", {
          className: z.bottomOfPageVisibilitySensor
        })
      })]
    })
  })
}