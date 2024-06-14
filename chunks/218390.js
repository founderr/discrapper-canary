"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
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
  g = s("497321"),
  f = s("634894"),
  m = s("410030"),
  A = s("100527"),
  C = s("906732"),
  O = s("211242"),
  h = s("15640"),
  R = s("89057"),
  p = s("703656"),
  M = s("246946"),
  D = s("78839"),
  x = s("586576"),
  L = s("483444"),
  P = s("626135"),
  b = s("74538"),
  v = s("140465"),
  U = s("646476"),
  j = s("424082"),
  G = s("730314"),
  F = s("91802"),
  B = s("898997"),
  y = s("197115"),
  V = s("823188"),
  Y = s("504865"),
  H = s("179984"),
  k = s("386733"),
  w = s("487980"),
  W = s("474936"),
  K = s("981631"),
  Q = s("689938"),
  z = s("995953"),
  X = s("881188"),
  q = s("520314"),
  Z = s("434691");

function J() {
  var e, t, s;
  let n = (0, d.useStateFromStores)([D.default], () => D.default.getPremiumTypeSubscription()),
    {
      bucket: i
    } = (0, G.usePremiumTierCardsExperiment)("PremiumMarketingHome"),
    r = i > 0,
    u = (0, v.useHasDiscountApplied)(),
    E = (0, v.useActiveDiscountInfo)(),
    {
      annualDiscountPercentage: T
    } = (0, j.getAnnualDiscountsExperimentConfig)("PremiumManagementSettings"),
    I = (0, m.default)();
  if (null == n || null == n.planIdFromItems) return null;
  let g = null != n.trialId,
    f = n.planIdFromItems === W.SubscriptionPlans.PREMIUM_YEAR_TIER_2,
    A = u || g,
    C = null != n.trialEndsAt ? o()(n.trialEndsAt).diff(o()(), "d") : 0,
    O = W.SubscriptionPlanInfo[n.planIdFromItems],
    h = b.default.formatPriceString(b.default.getDefaultPrice(O.id), O.interval);
  return (0, a.jsxs)("div", {
    className: l()(z.tierCard, {
      [z.withTier2Rim]: A
    }),
    children: [(0, a.jsxs)("div", {
      className: l()({
        [z.tierInfo]: !r,
        [z.modifiedTierInfo]: r
      }),
      children: [(0, a.jsx)(L.default, {
        className: l()({
          [z.tierTitle]: !r,
          [z.modifiedTier2Title]: r
        })
      }), r && (0, a.jsx)(S.Text, {
        variant: "display-md",
        color: "always-white",
        className: z.modifiedSubHeader,
        children: Q.default.Messages.PREMIUM_TIER_2_SUBHEADER
      }), A ? (0, a.jsxs)(a.Fragment, {
        children: [(g || !f) && (0, a.jsx)(V.PremiumPillWithSparkles, {
          text: g ? Q.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED : Q.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
          className: z.topRimPill,
          colorOptions: (0, c.isThemeDark)(I) ? V.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : V.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL
        }), (g || !f) && (0, a.jsx)("div", {
          className: z.rimGlowTier2
        }), (0, a.jsx)(S.Heading, {
          variant: "heading-md/normal",
          color: "always-white",
          className: z.trialHeader,
          children: g ? Q.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
            remainingTime: C,
            price: h
          }) : f ? Q.default.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
            percent: null !== (e = null == E ? void 0 : E.percentage) && void 0 !== e ? e : T,
            regularPrice: h
          }) : Q.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
            percent: null !== (t = null == E ? void 0 : E.percentage) && void 0 !== t ? t : W.DISCOUNT_PERCENTAGE_FALLBACK,
            regularPrice: h,
            numMonths: null !== (s = null == E ? void 0 : E.duration) && void 0 !== s ? s : W.DISCOUNT_DURATION_FALLBACK
          })
        })]
      }) : (0, a.jsx)(Y.default, {
        variant: r ? "heading-lg/normal" : void 0,
        subscriptionTier: W.PremiumSubscriptionSKUs.TIER_2,
        interval: O.interval,
        shouldUseModifiedCopy: r
      }), (0, a.jsx)(V.Tier2FeatureItems, {
        featureSet: r ? V.Tier2FeatureSet.MODIFIED : void 0
      }), (0, a.jsx)(S.Button, {
        className: z.tierCardButton,
        color: S.Button.Colors.WHITE,
        onClick: () => {
          P.default.track(K.AnalyticEvents.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: "to_premium_home_button",
            target: "premium home page"
          }), (0, _.popLayer)(), (0, p.transitionTo)(K.Routes.APPLICATION_STORE)
        },
        children: (0, a.jsx)(S.Text, {
          className: z.tierCardButtonCTA,
          variant: "text-sm/medium",
          children: Q.default.Messages.PREMIUM_SETTINGS_NAVIGATE_TO_HOME_CTA_V2
        })
      }), (0, a.jsx)(S.Button, {
        className: z.managePlanButton,
        look: S.Button.Looks.OUTLINED,
        color: S.Button.Colors.WHITE,
        onClick: () => {
          P.default.track(K.AnalyticEvents.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: "to_subscriptions_button",
            target: "subscriptions settings"
          }), N.default.open(K.UserSettingsSections.SUBSCRIPTIONS)
        },
        children: (0, a.jsx)(S.Text, {
          className: z.__invalid_managePlanButtonCTA,
          variant: "text-sm/medium",
          color: "always-white",
          children: Q.default.Messages.PREMIUM_SETTINGS_NATIGATE_TO_SUBSCRIPTIONS_CTA
        })
      })]
    }), !r && (0, a.jsx)("div", {
      className: z.tierImage,
      children: (0, a.jsx)("img", {
        className: z.tierImage,
        alt: "",
        src: X
      })
    })]
  })
}

function $() {
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
    className: l()(z.giftCard, {
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
        className: l()(z.giftTitle, {
          [z.seasonalColor]: s
        }),
        variant: "heading-xl/extrabold",
        children: s ? Q.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_HEADING : Q.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING
      }), (0, a.jsx)(S.Text, {
        className: l()(z.giftText, {
          [z.seasonalColor]: s
        }),
        variant: "text-sm/normal",
        children: s ? Q.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_BODY : Q.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
      }), (0, a.jsx)(y.default, {
        isGift: !0,
        className: l()(z.giftCardButton, s ? z.seasonalColor : z.giftCardButtonColor),
        look: S.Button.Looks.OUTLINED,
        buttonText: Q.default.Messages.GIFT_NITRO,
        buttonTextClassName: z.giftButtonCTA,
        color: S.Button.Colors.CUSTOM,
        onClick: () => {
          P.default.track(K.AnalyticEvents.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: "gifting_button",
            target: "payment modal"
          })
        }
      })]
    })]
  })
}
t.default = function() {
  let e = (0, O.useBlockedPaymentsConfig)(),
    {
      analyticsLocations: t
    } = (0, C.default)(A.default.PREMIUM_SETTINGS),
    s = (0, d.useStateFromStores)([D.default], () => D.default.getPremiumTypeSubscription()),
    i = (0, d.useStateFromStores)([D.default], () => D.default.hasFetchedSubscriptions()),
    l = (0, h.useSubscriptionPlansLoaded)(),
    [r, o] = n.useState(!0),
    c = (0, F.useLocalizedPromoQuery)(),
    _ = null == c ? void 0 : c.countryCode,
    N = (0, d.useStateFromStores)([M.default], () => M.default.enabled),
    m = "PremiumManagementSettings";
  (0, f.useTriggerDebuggingAA)({
    location: m + " auto on",
    autoTrackExposure: !0
  }), (0, f.useTriggerDebuggingAA)({
    location: m + " auto off",
    autoTrackExposure: !1
  }), (0, B.useMaybeFetchReferralsRemaining)("PremiumManagementSettings");
  let p = (0, w.useIsEligibleSenderForReferralProgram)("PremiumManagementSettings");
  n.useEffect(() => {
    E.default.wait(async () => {
      !N && !e && await Promise.all([T.fetchSubscriptions(), T.fetchPaymentSources(), (0, I.fetchPremiumSubscriptionPlans)(_, null, K.RevenueSurfaces.DISCOVERY)]), o(!1)
    })
  }, [_, N, e]);
  let [L, b] = n.useState(!1);
  if (N) return (0, a.jsx)(g.default, {});
  if (e) return (0, a.jsx)(R.BlockedPaymentsContentSettings, {});
  if ((!i || null == s || !l) && !r) return (0, a.jsx)(x.default, {
    title: Q.default.Messages.REDIRECTED_CALLBACK_ERROR,
    note: null
  });
  if (!i || null == s || !l || r) return (0, a.jsx)(S.Spinner, {});
  let v = null != s.trialId;
  return (0, a.jsx)(C.AnalyticsLocationProvider, {
    value: t,
    children: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: z.__invalid_container,
        children: [(0, a.jsx)(J, {}), p && (0, a.jsx)(k.default, {
          isInSettings: !0
        }), (0, a.jsx)($, {}), (0, a.jsx)(H.default, {
          className: z.__invalid_planComparisonTable,
          hideCTAs: !0,
          headingOverride: Q.default.Messages.PREMIUM_COMPARISON_TABLE_WHAT_YOU_HAVE_GOT_TITLE,
          hidePill: !v,
          selectedPlanColumnClassName: z.tier2PlanComparisonTableBackground,
          selectedPlanTier: W.PremiumTypes.TIER_2
        })]
      }), (0, a.jsx)(u.VisibilitySensor, {
        onChange: e => {
          e && !L && (P.default.track(K.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
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