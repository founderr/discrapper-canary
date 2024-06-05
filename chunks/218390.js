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
  I = s("821849"),
  N = s("230711"),
  f = s("497321"),
  g = s("634894"),
  m = s("410030"),
  C = s("100527"),
  A = s("906732"),
  h = s("211242"),
  O = s("15640"),
  p = s("89057"),
  R = s("703656"),
  x = s("246946"),
  M = s("78839"),
  D = s("586576"),
  L = s("483444"),
  P = s("626135"),
  b = s("74538"),
  v = s("140465"),
  U = s("646476"),
  j = s("424082"),
  G = s("91802"),
  F = s("898997"),
  B = s("197115"),
  y = s("823188"),
  V = s("504865"),
  H = s("179984"),
  k = s("386733"),
  Y = s("487980"),
  w = s("474936"),
  W = s("981631"),
  K = s("689938"),
  z = s("995953"),
  Q = s("881188"),
  q = s("520314"),
  X = s("434691");

function Z() {
  var e, t, s;
  let n = (0, d.useStateFromStores)([M.default], () => M.default.getPremiumTypeSubscription()),
    l = (0, v.useHasDiscountApplied)(),
    r = (0, v.useActiveDiscountInfo)(),
    {
      annualDiscountPercentage: u
    } = (0, j.getAnnualDiscountsExperimentConfig)("PremiumManagementSettings"),
    E = (0, m.default)();
  if (null == n || null == n.planIdFromItems) return null;
  let T = null != n.trialId,
    I = n.planIdFromItems === w.SubscriptionPlans.PREMIUM_YEAR_TIER_2,
    f = l || T,
    g = null != n.trialEndsAt ? o()(n.trialEndsAt).diff(o()(), "d") : 0,
    C = w.SubscriptionPlanInfo[n.planIdFromItems],
    A = b.default.formatPriceString(b.default.getDefaultPrice(C.id), C.interval);
  return (0, a.jsxs)("div", {
    className: i()(z.tierCard, {
      [z.withTier2Rim]: f
    }),
    children: [(0, a.jsxs)("div", {
      className: z.tierInfo,
      children: [(0, a.jsx)(L.default, {
        className: i()(z.tierTitle)
      }), f ? (0, a.jsxs)(a.Fragment, {
        children: [(T || !I) && (0, a.jsx)(y.PremiumPillWithSparkles, {
          text: T ? K.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED : K.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
          className: z.topRimPill,
          colorOptions: (0, c.isThemeDark)(E) ? y.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : y.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL
        }), (T || !I) && (0, a.jsx)("div", {
          className: z.rimGlowTier2
        }), (0, a.jsx)(S.Heading, {
          variant: "heading-md/normal",
          color: "always-white",
          className: z.trialHeader,
          children: T ? K.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
            remainingTime: g,
            price: A
          }) : I ? K.default.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
            percent: null !== (e = null == r ? void 0 : r.percentage) && void 0 !== e ? e : u,
            regularPrice: A
          }) : K.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
            percent: null !== (t = null == r ? void 0 : r.percentage) && void 0 !== t ? t : w.DISCOUNT_PERCENTAGE_FALLBACK,
            regularPrice: A,
            numMonths: null !== (s = null == r ? void 0 : r.duration) && void 0 !== s ? s : w.DISCOUNT_DURATION_FALLBACK
          })
        })]
      }) : (0, a.jsx)(V.default, {
        subscriptionTier: w.PremiumSubscriptionSKUs.TIER_2,
        interval: C.interval
      }), (0, a.jsx)(y.Tier2FeatureItems, {}), (0, a.jsx)(S.Button, {
        className: z.tierCardButton,
        color: S.Button.Colors.WHITE,
        onClick: () => {
          P.default.track(W.AnalyticEvents.PREMIUM_SETTINGS_INTERACTED, {
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
          P.default.track(W.AnalyticEvents.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: "to_subscriptions_button",
            target: "subscriptions settings"
          }), N.default.open(W.UserSettingsSections.SUBSCRIPTIONS)
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
  let e = (0, U.useIsSeasonalGiftingActive)(),
    {
      enabled: t
    } = U.SeasonalGiftingMarketingExperiment.useExperiment({
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
      src: X
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
      }), (0, a.jsx)(B.default, {
        isGift: !0,
        className: i()(z.giftCardButton, s ? z.seasonalColor : z.giftCardButtonColor),
        look: S.Button.Looks.OUTLINED,
        buttonText: K.default.Messages.GIFT_NITRO,
        buttonTextClassName: z.giftButtonCTA,
        color: S.Button.Colors.CUSTOM,
        onClick: () => {
          P.default.track(W.AnalyticEvents.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: "gifting_button",
            target: "payment modal"
          })
        }
      })]
    })]
  })
}
t.default = function() {
  let e = (0, h.useBlockedPaymentsConfig)(),
    {
      analyticsLocations: t
    } = (0, A.default)(C.default.PREMIUM_SETTINGS),
    s = (0, d.useStateFromStores)([M.default], () => M.default.getPremiumTypeSubscription()),
    l = (0, d.useStateFromStores)([M.default], () => M.default.hasFetchedSubscriptions()),
    i = (0, O.useSubscriptionPlansLoaded)(),
    [r, o] = n.useState(!0),
    c = (0, G.useLocalizedPromoQuery)(),
    _ = null == c ? void 0 : c.countryCode,
    N = (0, d.useStateFromStores)([x.default], () => x.default.enabled),
    m = "PremiumManagementSettings";
  (0, g.useTriggerDebuggingAA)({
    location: m + " auto on",
    autoTrackExposure: !0
  }), (0, g.useTriggerDebuggingAA)({
    location: m + " auto off",
    autoTrackExposure: !1
  }), (0, F.useMaybeFetchReferralsRemaining)("PremiumManagementSettings");
  let R = (0, Y.useIsEligibleSenderForReferralProgram)("PremiumManagementSettings");
  n.useEffect(() => {
    E.default.wait(async () => {
      !N && !e && await Promise.all([T.fetchSubscriptions(), T.fetchPaymentSources(), (0, I.fetchPremiumSubscriptionPlans)(_, null, W.RevenueSurfaces.DISCOVERY)]), o(!1)
    })
  }, [_, N, e]);
  let [L, b] = n.useState(!1);
  if (N) return (0, a.jsx)(f.default, {});
  if (e) return (0, a.jsx)(p.BlockedPaymentsContentSettings, {});
  if ((!l || null == s || !i) && !r) return (0, a.jsx)(D.default, {
    title: K.default.Messages.REDIRECTED_CALLBACK_ERROR,
    note: null
  });
  if (!l || null == s || !i || r) return (0, a.jsx)(S.Spinner, {});
  let v = null != s.trialId;
  return (0, a.jsx)(A.AnalyticsLocationProvider, {
    value: t,
    children: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: z.__invalid_container,
        children: [(0, a.jsx)(Z, {}), R && (0, a.jsx)(k.default, {
          isInSettings: !0
        }), (0, a.jsx)(J, {}), (0, a.jsx)(H.default, {
          className: z.__invalid_planComparisonTable,
          hideCTAs: !0,
          headingOverride: K.default.Messages.PREMIUM_COMPARISON_TABLE_WHAT_YOU_HAVE_GOT_TITLE,
          hidePill: !v,
          selectedPlanColumnClassName: z.tier2PlanComparisonTableBackground,
          selectedPlanTier: w.PremiumTypes.TIER_2
        })]
      }), (0, a.jsx)(u.VisibilitySensor, {
        onChange: e => {
          e && !L && (P.default.track(W.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: t
          }), b(!0))
        },
        children: (0, a.jsx)("div", {
          className: z.bottomOfPageVisibilitySensor
        })
      })]
    })
  })
}