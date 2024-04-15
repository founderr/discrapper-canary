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
  m = n("263954"),
  P = n("706454"),
  _ = n("285952"),
  f = n("642113"),
  I = n("709586"),
  T = n("761374"),
  M = n("363138"),
  A = n("626135"),
  N = n("930153"),
  C = n("74538"),
  y = n("937615"),
  R = n("981631"),
  L = n("474936"),
  h = n("689938"),
  U = n("785193");

function g(e) {
  let {
    shouldUpsellFromNoneTier: t
  } = e, n = (0, u.useStateFromStores)([P.default], () => P.default.locale);
  return (0, l.jsxs)("div", {
    className: U.perksList,
    children: [(0, l.jsx)(m.default, {
      icon: I.default,
      iconClassName: U.perkIconGuild,
      description: h.default.Messages.PREMIUM_UPSELL_FEATURE_FREE_GUILD_SUBSCRIPTION.format({
        numFreeGuildSubscriptions: L.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
      })
    }), (0, l.jsx)(m.default, {
      icon: I.default,
      iconClassName: U.perkIconGuild,
      description: h.default.Messages.PREMIUM_UPSELL_FEATURE_GUILD_SUBSCRIPTION_DISCOUNT.format({
        percent: (0, N.formatPercent)(n, L.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
      })
    }), t ? (0, l.jsx)(m.default, {
      icon: f.default,
      iconClassName: U.perkIconChatPerks,
      description: h.default.Messages.PREMIUM_UPSELL_FEATURE_CHAT_PERKS
    }) : null, (0, l.jsx)(m.default, {
      icon: T.default,
      iconClassName: U.perkIconStream,
      description: h.default.Messages.PREMIUM_UPSELL_FEATURE_STREAM
    }), (0, l.jsx)(m.default, {
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
    onSkip: m,
    onSubscriptionConfirmation: P,
    analyticsLocation: f,
    analyticsSourceLocation: I,
    priceOptions: T
  } = e, {
    analyticsLocations: M,
    sourceAnalyticsLocations: N
  } = (0, d.default)(c.default.GUILD_BOOSTING_PREMIUM_UPSELL), {
    theme: O
  } = (0, o.useThemeContext)(), b = (0, r.isThemeLight)(O) ? o.Button.Colors.PRIMARY : o.Button.Colors.WHITE, D = null == n || null == n.premiumSubscriptionType, x = C.default.getPrice(L.SubscriptionPlans.PREMIUM_MONTH_TIER_2, !1, !1, T), B = (0, y.formatPrice)(x.amount, x.currency), v = (0, p.usePremiumTrialOffer)(), j = null == v ? void 0 : v.trial_id, G = (null == v ? void 0 : null === (t = v.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === L.PremiumSubscriptionSKUs.TIER_2;
  return s.useEffect(() => {
    A.default.track(R.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: L.PremiumUpsellTypes.GUILD_PREMIUM_UPSELL_MODAL,
      location_stack: N
    })
  }, [N]), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(o.ModalContent, {
      className: U.content,
      children: [(0, l.jsx)(o.ModalCloseButton, {
        onClick: a,
        className: U.closeButton
      }), G && (0, l.jsx)(E.PremiumTrialGradientBadge, {
        className: U.premiumTrialBadge
      }), (0, l.jsx)("div", {
        className: i()(U.upsellImage, {
          [U.upsellImageWithTrialOffer]: G
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
      align: _.default.Align.CENTER,
      justify: _.default.Justify.END,
      children: [(0, l.jsxs)("div", {
        className: U.footerRight,
        children: [(0, l.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          color: b,
          onClick: m,
          children: h.default.Messages.PREMIUM_UPSELL_CONTINUE_TO_BOOSTS
        }), (0, l.jsx)(o.Button, {
          color: o.Button.Colors.GREEN,
          type: "submit",
          onClick: () => {
            a(), (0, S.default)({
              initialPlanId: null,
              subscriptionTier: L.PremiumSubscriptionSKUs.TIER_2,
              analyticsLocations: M,
              analyticsObject: {
                ...f,
                section: R.AnalyticsSections.PREMIUM_GUILD_PURCHASE_MODAL
              },
              analyticsSourceLocation: I,
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