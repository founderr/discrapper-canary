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
  N = n("626135"),
  A = n("930153"),
  L = n("74538"),
  R = n("937615"),
  y = n("981631"),
  C = n("474936"),
  h = n("689938"),
  U = n("17726");

function g(e) {
  let {
    shouldUpsellFromNoneTier: t
  } = e, n = (0, u.useStateFromStores)([P.default], () => P.default.locale);
  return (0, l.jsxs)("div", {
    className: U.perksList,
    children: [(0, l.jsx)(_.default, {
      icon: f.default,
      iconClassName: U.perkIconGuild,
      description: h.default.Messages.PREMIUM_UPSELL_FEATURE_FREE_GUILD_SUBSCRIPTION.format({
        numFreeGuildSubscriptions: C.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
      })
    }), (0, l.jsx)(_.default, {
      icon: f.default,
      iconClassName: U.perkIconGuild,
      description: h.default.Messages.PREMIUM_UPSELL_FEATURE_GUILD_SUBSCRIPTION_DISCOUNT.format({
        percent: (0, A.formatPercent)(n, C.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
      })
    }), t ? (0, l.jsx)(_.default, {
      icon: I.default,
      iconClassName: U.perkIconChatPerks,
      description: h.default.Messages.PREMIUM_UPSELL_FEATURE_CHAT_PERKS
    }) : null, (0, l.jsx)(_.default, {
      icon: T.default,
      iconClassName: U.perkIconStream,
      description: h.default.Messages.PREMIUM_UPSELL_FEATURE_STREAM
    }), (0, l.jsx)(_.default, {
      icon: M.default,
      iconClassName: U.perkIconUpload,
      description: h.default.Messages.PREMIUM_UPSELL_FEATURE_UPLOAD
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
    sourceAnalyticsLocations: A
  } = (0, d.default)(c.default.GUILD_BOOSTING_PREMIUM_UPSELL), {
    theme: O
  } = (0, o.useThemeContext)(), b = (0, r.isThemeLight)(O) ? o.Button.Colors.PRIMARY : o.Button.Colors.WHITE, D = null == n || null == n.premiumSubscriptionType, x = L.default.getPrice(C.SubscriptionPlans.PREMIUM_MONTH_TIER_2, !1, !1, T), B = (0, R.formatPrice)(x.amount, x.currency), k = (0, p.usePremiumTrialOffer)(), j = null == k ? void 0 : k.trial_id, v = (null == k ? void 0 : null === (t = k.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === C.PremiumSubscriptionSKUs.TIER_2;
  return s.useEffect(() => {
    N.default.track(y.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: C.PremiumUpsellTypes.GUILD_PREMIUM_UPSELL_MODAL,
      location_stack: A
    })
  }, [A]), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(o.ModalContent, {
      className: U.content,
      children: [(0, l.jsx)(o.ModalCloseButton, {
        onClick: a,
        className: U.closeButton
      }), v && (0, l.jsx)(E.PremiumTrialGradientBadge, {
        className: U.premiumTrialBadge
      }), (0, l.jsx)("div", {
        className: i()(U.upsellImage, {
          [U.upsellImageWithTrialOffer]: v
        })
      }), (0, l.jsx)("div", {
        className: U.bodyText,
        children: null != j ? h.default.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT_TRIAL_VARIANT : h.default.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT.format({
          monthlyPrice: B
        })
      }), (0, l.jsx)(g, {
        shouldUpsellFromNoneTier: D
      })]
    }), (0, l.jsxs)(o.ModalFooter, {
      align: m.default.Align.CENTER,
      justify: m.default.Justify.END,
      children: [(0, l.jsxs)("div", {
        className: U.footerRight,
        children: [(0, l.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          color: b,
          onClick: _,
          children: h.default.Messages.PREMIUM_UPSELL_CONTINUE_TO_BOOSTS
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
          children: null != j ? h.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : h.default.Messages.PREMIUM_UPSELL_UPGRADE
        })]
      }), (0, l.jsx)("div", {
        className: U.backStep,
        children: (0, l.jsx)(o.Button, {
          color: b,
          look: o.Button.Looks.LINK,
          size: o.Button.Sizes.NONE,
          onClick: () => u(),
          children: h.default.Messages.BACK
        })
      })]
    })]
  })
}