"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  i = s.n(l),
  r = s("913527"),
  o = s.n(r),
  d = s("442837"),
  u = s("622535"),
  c = s("780384"),
  S = s("481060"),
  E = s("570140"),
  T = s("355467"),
  f = s("37234"),
  m = s("821849"),
  _ = s("230711"),
  g = s("497321"),
  I = s("634894"),
  h = s("410030"),
  N = s("100527"),
  p = s("906732"),
  C = s("211242"),
  A = s("15640"),
  O = s("89057"),
  x = s("703656"),
  R = s("246946"),
  M = s("78839"),
  v = s("586576"),
  D = s("483444"),
  L = s("626135"),
  P = s("74538"),
  j = s("140465"),
  b = s("646476"),
  U = s("91802"),
  y = s("898997"),
  B = s("197115"),
  F = s("823188"),
  G = s("504865"),
  k = s("179984"),
  H = s("386733"),
  w = s("487980"),
  V = s("474936"),
  Y = s("981631"),
  W = s("689938"),
  K = s("846974"),
  z = s("881188"),
  Q = s("520314"),
  q = s("434691");

function Z() {
  var e, t;
  let s = (0, d.useStateFromStores)([M.default], () => M.default.getPremiumTypeSubscription()),
    n = (0, j.useHasDiscountApplied)(),
    l = (0, j.useActiveDiscountInfo)(),
    r = (0, h.default)();
  if (null == s || null == s.planIdFromItems) return null;
  let u = null != s.trialId,
    E = n || u,
    T = null != s.trialEndsAt ? o()(s.trialEndsAt).diff(o()(), "d") : 0,
    m = V.SubscriptionPlanInfo[s.planIdFromItems],
    g = P.default.formatPriceString(P.default.getDefaultPrice(m.id), m.interval);
  return (0, a.jsxs)("div", {
    className: i()(K.tierCard, {
      [K.withTier2Rim]: E
    }),
    children: [(0, a.jsxs)("div", {
      className: K.tierInfo,
      children: [(0, a.jsx)(D.default, {
        className: i()(K.tierTitle)
      }), E ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(F.PremiumPillWithSparkles, {
          text: u ? W.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED : W.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
          className: K.topRimPill,
          colorOptions: (0, c.isThemeDark)(r) ? F.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : F.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL
        }), (0, a.jsx)("div", {
          className: K.rimGlowTier2
        }), (0, a.jsx)(S.Heading, {
          variant: "heading-md/normal",
          color: "always-white",
          className: K.trialHeader,
          children: u ? W.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
            remainingTime: T,
            price: g
          }) : W.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
            percent: null !== (e = null == l ? void 0 : l.percentage) && void 0 !== e ? e : V.DISCOUNT_PERCENTAGE_FALLBACK,
            regularPrice: g,
            numMonths: null !== (t = null == l ? void 0 : l.duration) && void 0 !== t ? t : V.DISCOUNT_DURATION_FALLBACK
          })
        })]
      }) : (0, a.jsx)(G.default, {
        subscriptionTier: V.PremiumSubscriptionSKUs.TIER_2,
        interval: m.interval
      }), (0, a.jsx)(F.Tier2FeatureItems, {}), (0, a.jsx)(S.Button, {
        className: K.tierCardButton,
        color: S.Button.Colors.WHITE,
        onClick: () => {
          L.default.track(Y.AnalyticEvents.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: "to_premium_home_button",
            target: "premium home page"
          }), (0, f.popLayer)(), (0, x.transitionTo)(Y.Routes.APPLICATION_STORE)
        },
        children: (0, a.jsx)(S.Text, {
          className: K.tierCardButtonCTA,
          variant: "text-sm/medium",
          children: W.default.Messages.PREMIUM_SETTINGS_NAVIGATE_TO_HOME_CTA_V2
        })
      }), (0, a.jsx)(S.Button, {
        className: K.managePlanButton,
        look: S.Button.Looks.OUTLINED,
        color: S.Button.Colors.WHITE,
        onClick: () => {
          L.default.track(Y.AnalyticEvents.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: "to_subscriptions_button",
            target: "subscriptions settings"
          }), _.default.open(Y.UserSettingsSections.SUBSCRIPTIONS)
        },
        children: (0, a.jsx)(S.Text, {
          className: K.__invalid_managePlanButtonCTA,
          variant: "text-sm/medium",
          color: "always-white",
          children: W.default.Messages.PREMIUM_SETTINGS_NATIGATE_TO_SUBSCRIPTIONS_CTA
        })
      })]
    }), (0, a.jsx)("div", {
      className: K.tierImage,
      children: (0, a.jsx)("img", {
        className: K.tierImage,
        alt: "",
        src: z
      })
    })]
  })
}

function X() {
  let e = (0, b.useIsSeasonalGiftingActive)(),
    {
      enabled: t
    } = b.SeasonalGiftingMarketingExperiment.useExperiment({
      location: "GiftNitro"
    }, {
      autoTrackExposure: e
    }),
    s = t && e;
  return (0, a.jsxs)("div", {
    className: i()(K.giftCard, {
      [K.giftCardSeasonal]: s
    }),
    children: [s && (0, a.jsx)("img", {
      className: K.seasonalGiftImage,
      alt: "",
      src: Q
    }), (0, a.jsx)("img", {
      className: K.giftImage,
      style: {
        visibility: s ? "hidden" : "visible"
      },
      alt: "",
      src: q
    }), (0, a.jsxs)("div", {
      className: K.giftInfo,
      children: [(0, a.jsx)(S.Heading, {
        className: i()(K.giftTitle, {
          [K.seasonalColor]: s
        }),
        variant: "heading-xl/extrabold",
        children: s ? W.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_HEADING : W.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING
      }), (0, a.jsx)(S.Text, {
        className: i()(K.giftText, {
          [K.seasonalColor]: s
        }),
        variant: "text-sm/normal",
        children: s ? W.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_BODY : W.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
      }), (0, a.jsx)(B.default, {
        isGift: !0,
        className: i()(K.giftCardButton, s ? K.seasonalColor : K.giftCardButtonColor),
        look: S.Button.Looks.OUTLINED,
        buttonText: W.default.Messages.GIFT_NITRO,
        buttonTextClassName: K.giftButtonCTA,
        color: S.Button.Colors.CUSTOM,
        onClick: () => {
          L.default.track(Y.AnalyticEvents.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: "gifting_button",
            target: "payment modal"
          })
        }
      })]
    })]
  })
}
t.default = function() {
  let e = (0, C.useBlockedPaymentsConfig)(),
    {
      analyticsLocations: t
    } = (0, p.default)(N.default.PREMIUM_SETTINGS),
    s = (0, d.useStateFromStores)([M.default], () => M.default.getPremiumTypeSubscription()),
    l = (0, d.useStateFromStores)([M.default], () => M.default.hasFetchedSubscriptions()),
    i = (0, A.useSubscriptionPlansLoaded)(),
    [r, o] = n.useState(!0),
    c = (0, U.useLocalizedPromoQuery)(),
    f = null == c ? void 0 : c.countryCode,
    _ = (0, d.useStateFromStores)([R.default], () => R.default.enabled),
    h = "PremiumManagementSettings";
  (0, I.useTriggerDebuggingAA)({
    location: h + " auto on",
    autoTrackExposure: !0
  }), (0, I.useTriggerDebuggingAA)({
    location: h + " auto off",
    autoTrackExposure: !1
  }), (0, y.useMaybeFetchReferralsRemaining)("PremiumManagementSettings");
  let x = (0, w.useShouldShowReferralProgressBar)("PremiumManagementSettings");
  n.useEffect(() => {
    E.default.wait(async () => {
      !_ && !e && await Promise.all([T.fetchSubscriptions(), T.fetchPaymentSources(), (0, m.fetchPremiumSubscriptionPlans)(f, null, Y.RevenueSurfaces.DISCOVERY)]), o(!1)
    })
  }, [f, _, e]);
  let [D, P] = n.useState(!1);
  if (_) return (0, a.jsx)(g.default, {});
  if (e) return (0, a.jsx)(O.BlockedPaymentsContentSettings, {});
  if ((!l || null == s || !i) && !r) return (0, a.jsx)(v.default, {
    title: W.default.Messages.REDIRECTED_CALLBACK_ERROR,
    note: null
  });
  if (!l || null == s || !i || r) return (0, a.jsx)(S.Spinner, {});
  let j = null != s.trialId;
  return (0, a.jsx)(p.AnalyticsLocationProvider, {
    value: t,
    children: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: K.__invalid_container,
        children: [(0, a.jsx)(Z, {}), x && (0, a.jsx)(H.default, {
          isInSettings: !0
        }), (0, a.jsx)(X, {}), (0, a.jsx)(k.default, {
          className: K.__invalid_planComparisonTable,
          hideCTAs: !0,
          headingOverride: W.default.Messages.PREMIUM_COMPARISON_TABLE_WHAT_YOU_HAVE_GOT_TITLE,
          hidePill: !j,
          selectedPlanColumnClassName: K.tier2PlanComparisonTableBackground,
          selectedPlanTier: V.PremiumTypes.TIER_2
        })]
      }), (0, a.jsx)(u.VisibilitySensor, {
        onChange: e => {
          e && !D && (L.default.track(Y.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: t
          }), P(!0))
        },
        children: (0, a.jsx)("div", {
          className: K.bottomOfPageVisibilitySensor
        })
      })]
    })
  })
}