"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
});
var l = n("735250"),
  s = n("470079"),
  a = n("120356"),
  i = n.n(a),
  u = n("442837"),
  r = n("780384"),
  o = n("481060"),
  c = n("100527"),
  d = n("906732"),
  S = n("963249"),
  p = n("639119"),
  E = n("165583"),
  _ = n("263954"),
  P = n("706454"),
  m = n("285952"),
  I = n("642113"),
  f = n("709586"),
  T = n("761374"),
  M = n("363138"),
  A = n("626135"),
  N = n("930153"),
  L = n("74538"),
  R = n("937615"),
  y = n("981631"),
  C = n("474936"),
  U = n("689938"),
  h = n("17726");

function g(e) {
  let {
    shouldUpsellFromNoneTier: t
  } = e, n = (0, u.useStateFromStores)([P.default], () => P.default.locale);
  return (0, l.jsxs)("div", {
    className: h.perksList,
    children: [(0, l.jsx)(_.default, {
      icon: f.default,
      iconClassName: h.perkIconGuild,
      description: U.default.Messages.PREMIUM_UPSELL_FEATURE_FREE_GUILD_SUBSCRIPTION.format({
        numFreeGuildSubscriptions: C.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
      })
    }), (0, l.jsx)(_.default, {
      icon: f.default,
      iconClassName: h.perkIconGuild,
      description: U.default.Messages.PREMIUM_UPSELL_FEATURE_GUILD_SUBSCRIPTION_DISCOUNT.format({
        percent: (0, N.formatPercent)(n, C.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
      })
    }), t ? (0, l.jsx)(_.default, {
      icon: I.default,
      iconClassName: h.perkIconChatPerks,
      description: U.default.Messages.PREMIUM_UPSELL_FEATURE_CHAT_PERKS
    }) : null, (0, l.jsx)(_.default, {
      icon: T.default,
      iconClassName: h.perkIconStream,
      description: U.default.Messages.PREMIUM_UPSELL_FEATURE_STREAM
    }), (0, l.jsx)(_.default, {
      icon: M.default,
      iconClassName: h.perkIconUpload,
      description: U.default.Messages.PREMIUM_UPSELL_FEATURE_UPLOAD
    })]
  })
}

function O(e) {
  var t;
  let {
    premiumSubscriptionPlan: n,
    onClose: a,
    onBack: u,
    onSkip: _,
    onSubscriptionConfirmation: P,
    analyticsLocation: I,
    analyticsSourceLocation: f,
    priceOptions: T
  } = e, {
    analyticsLocations: M,
    sourceAnalyticsLocations: N
  } = (0, d.default)(c.default.GUILD_BOOSTING_PREMIUM_UPSELL), {
    theme: O
  } = (0, o.useThemeContext)(), D = (0, r.isThemeLight)(O) ? o.Button.Colors.PRIMARY : o.Button.Colors.WHITE, b = null == n || null == n.premiumSubscriptionType, B = L.default.getPrice(C.SubscriptionPlans.PREMIUM_MONTH_TIER_2, !1, !1, T), x = (0, R.formatPrice)(B.amount, B.currency), k = (0, p.usePremiumTrialOffer)(), j = null == k ? void 0 : k.trial_id, G = (null == k ? void 0 : null === (t = k.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === C.PremiumSubscriptionSKUs.TIER_2;
  return s.useEffect(() => {
    A.default.track(y.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: C.PremiumUpsellTypes.GUILD_PREMIUM_UPSELL_MODAL,
      location_stack: N
    })
  }, [N]), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(o.ModalContent, {
      className: h.content,
      children: [(0, l.jsx)(o.ModalCloseButton, {
        onClick: a,
        className: h.closeButton
      }), G && (0, l.jsx)(E.PremiumTrialGradientBadge, {
        className: h.premiumTrialBadge
      }), (0, l.jsx)("div", {
        className: i()(h.upsellImage, {
          [h.upsellImageWithTrialOffer]: G
        })
      }), (0, l.jsx)("div", {
        className: h.bodyText,
        children: null != j ? U.default.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT_TRIAL_VARIANT : U.default.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT.format({
          monthlyPrice: x
        })
      }), (0, l.jsx)(g, {
        shouldUpsellFromNoneTier: b
      })]
    }), (0, l.jsxs)(o.ModalFooter, {
      align: m.default.Align.CENTER,
      justify: m.default.Justify.END,
      children: [(0, l.jsxs)("div", {
        className: h.footerRight,
        children: [(0, l.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          color: D,
          onClick: _,
          children: U.default.Messages.PREMIUM_UPSELL_CONTINUE_TO_BOOSTS
        }), (0, l.jsx)(o.Button, {
          color: o.Button.Colors.GREEN,
          type: "submit",
          onClick: () => {
            a(), (0, S.default)({
              initialPlanId: null,
              subscriptionTier: C.PremiumSubscriptionSKUs.TIER_2,
              analyticsLocations: M,
              analyticsObject: {
                ...I,
                section: y.AnalyticsSections.PREMIUM_GUILD_PURCHASE_MODAL
              },
              analyticsSourceLocation: f,
              onSubscriptionConfirmation: P,
              trialId: j
            })
          },
          children: null != j ? U.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : U.default.Messages.PREMIUM_UPSELL_UPGRADE
        })]
      }), (0, l.jsx)("div", {
        className: h.backStep,
        children: (0, l.jsx)(o.Button, {
          color: D,
          look: o.Button.Looks.LINK,
          size: o.Button.Sizes.NONE,
          onClick: () => u(),
          children: U.default.Messages.BACK
        })
      })]
    })]
  })
}