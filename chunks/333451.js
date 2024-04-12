"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
});
var i = n("735250"),
  l = n("470079"),
  s = n("803997"),
  a = n.n(s),
  u = n("442837"),
  o = n("780384"),
  r = n("481060"),
  c = n("100527"),
  d = n("906732"),
  S = n("963249"),
  p = n("639119"),
  m = n("165583"),
  E = n("263954"),
  P = n("706454"),
  _ = n("285952"),
  f = n("642113"),
  I = n("709586"),
  h = n("761374"),
  M = n("363138"),
  T = n("626135"),
  y = n("930153"),
  N = n("74538"),
  A = n("937615"),
  R = n("981631"),
  L = n("474936"),
  C = n("689938"),
  U = n("785193");

function g(e) {
  let {
    shouldUpsellFromNoneTier: t
  } = e, n = (0, u.useStateFromStores)([P.default], () => P.default.locale);
  return (0, i.jsxs)("div", {
    className: U.perksList,
    children: [(0, i.jsx)(E.default, {
      icon: I.default,
      iconClassName: U.perkIconGuild,
      description: C.default.Messages.PREMIUM_UPSELL_FEATURE_FREE_GUILD_SUBSCRIPTION.format({
        numFreeGuildSubscriptions: L.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
      })
    }), (0, i.jsx)(E.default, {
      icon: I.default,
      iconClassName: U.perkIconGuild,
      description: C.default.Messages.PREMIUM_UPSELL_FEATURE_GUILD_SUBSCRIPTION_DISCOUNT.format({
        percent: (0, y.formatPercent)(n, L.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
      })
    }), t ? (0, i.jsx)(E.default, {
      icon: f.default,
      iconClassName: U.perkIconChatPerks,
      description: C.default.Messages.PREMIUM_UPSELL_FEATURE_CHAT_PERKS
    }) : null, (0, i.jsx)(E.default, {
      icon: h.default,
      iconClassName: U.perkIconStream,
      description: C.default.Messages.PREMIUM_UPSELL_FEATURE_STREAM
    }), (0, i.jsx)(E.default, {
      icon: M.default,
      iconClassName: U.perkIconUpload,
      description: C.default.Messages.PREMIUM_UPSELL_FEATURE_UPLOAD
    })]
  })
}

function O(e) {
  var t;
  let {
    premiumSubscriptionPlan: n,
    onClose: s,
    onBack: u,
    onSkip: E,
    onSubscriptionConfirmation: P,
    analyticsLocation: f,
    analyticsSourceLocation: I,
    priceOptions: h
  } = e, {
    analyticsLocations: M,
    sourceAnalyticsLocations: y
  } = (0, d.default)(c.default.GUILD_BOOSTING_PREMIUM_UPSELL), {
    theme: O
  } = (0, r.useThemeContext)(), D = (0, o.isThemeLight)(O) ? r.Button.Colors.PRIMARY : r.Button.Colors.WHITE, b = null == n || null == n.premiumSubscriptionType, v = N.default.getPrice(L.SubscriptionPlans.PREMIUM_MONTH_TIER_2, !1, !1, h), x = (0, A.formatPrice)(v.amount, v.currency), B = (0, p.usePremiumTrialOffer)(), F = null == B ? void 0 : B.trial_id, G = (null == B ? void 0 : null === (t = B.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === L.PremiumSubscriptionSKUs.TIER_2;
  return l.useEffect(() => {
    T.default.track(R.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: L.PremiumUpsellTypes.GUILD_PREMIUM_UPSELL_MODAL,
      location_stack: y
    })
  }, [y]), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(r.ModalContent, {
      className: U.content,
      children: [(0, i.jsx)(r.ModalCloseButton, {
        onClick: s,
        className: U.closeButton
      }), G && (0, i.jsx)(m.PremiumTrialGradientBadge, {
        className: U.premiumTrialBadge
      }), (0, i.jsx)("div", {
        className: a()(U.upsellImage, {
          [U.upsellImageWithTrialOffer]: G
        })
      }), (0, i.jsx)("div", {
        className: U.bodyText,
        children: null != F ? C.default.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT_TRIAL_VARIANT : C.default.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT.format({
          monthlyPrice: x
        })
      }), (0, i.jsx)(g, {
        shouldUpsellFromNoneTier: b
      })]
    }), (0, i.jsxs)(r.ModalFooter, {
      align: _.default.Align.CENTER,
      justify: _.default.Justify.END,
      children: [(0, i.jsxs)("div", {
        className: U.footerRight,
        children: [(0, i.jsx)(r.Button, {
          look: r.Button.Looks.LINK,
          color: D,
          onClick: E,
          children: C.default.Messages.PREMIUM_UPSELL_CONTINUE_TO_BOOSTS
        }), (0, i.jsx)(r.Button, {
          color: r.Button.Colors.GREEN,
          type: "submit",
          onClick: () => {
            s(), (0, S.default)({
              initialPlanId: null,
              subscriptionTier: L.PremiumSubscriptionSKUs.TIER_2,
              analyticsLocations: M,
              analyticsObject: {
                ...f,
                section: R.AnalyticsSections.PREMIUM_GUILD_PURCHASE_MODAL
              },
              analyticsSourceLocation: I,
              onSubscriptionConfirmation: P,
              trialId: F
            })
          },
          children: null != F ? C.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : C.default.Messages.PREMIUM_UPSELL_UPGRADE
        })]
      }), (0, i.jsx)("div", {
        className: U.backStep,
        children: (0, i.jsx)(r.Button, {
          color: D,
          look: r.Button.Looks.LINK,
          size: r.Button.Sizes.NONE,
          onClick: () => u(),
          children: C.default.Messages.BACK
        })
      })]
    })]
  })
}