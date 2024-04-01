"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("803997"),
  u = n.n(l),
  r = n("442837"),
  i = n("780384"),
  o = n("481060"),
  c = n("100527"),
  d = n("906732"),
  S = n("963249"),
  E = n("639119"),
  _ = n("165583"),
  P = n("263954"),
  p = n("706454"),
  I = n("285952"),
  m = n("642113"),
  A = n("709586"),
  C = n("761374"),
  f = n("363138"),
  N = n("626135"),
  T = n("930153"),
  M = n("74538"),
  R = n("937615"),
  L = n("981631"),
  y = n("474936"),
  O = n("689938"),
  g = n("785193");

function U(e) {
  let {
    shouldUpsellFromNoneTier: t
  } = e, n = (0, r.useStateFromStores)([p.default], () => p.default.locale);
  return (0, s.jsxs)("div", {
    className: g.perksList,
    children: [(0, s.jsx)(P.default, {
      icon: A.default,
      iconClassName: g.perkIconGuild,
      description: O.default.Messages.PREMIUM_UPSELL_FEATURE_FREE_GUILD_SUBSCRIPTION.format({
        numFreeGuildSubscriptions: y.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
      })
    }), (0, s.jsx)(P.default, {
      icon: A.default,
      iconClassName: g.perkIconGuild,
      description: O.default.Messages.PREMIUM_UPSELL_FEATURE_GUILD_SUBSCRIPTION_DISCOUNT.format({
        percent: (0, T.formatPercent)(n, y.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
      })
    }), t ? (0, s.jsx)(P.default, {
      icon: m.default,
      iconClassName: g.perkIconChatPerks,
      description: O.default.Messages.PREMIUM_UPSELL_FEATURE_CHAT_PERKS
    }) : null, (0, s.jsx)(P.default, {
      icon: C.default,
      iconClassName: g.perkIconStream,
      description: O.default.Messages.PREMIUM_UPSELL_FEATURE_STREAM
    }), (0, s.jsx)(P.default, {
      icon: f.default,
      iconClassName: g.perkIconUpload,
      description: O.default.Messages.PREMIUM_UPSELL_FEATURE_UPLOAD
    })]
  })
}

function h(e) {
  var t;
  let {
    premiumSubscriptionPlan: n,
    onClose: l,
    onBack: r,
    onSkip: P,
    onSubscriptionConfirmation: p,
    analyticsLocation: m,
    analyticsSourceLocation: A,
    priceOptions: C
  } = e, {
    analyticsLocations: f,
    sourceAnalyticsLocations: T
  } = (0, d.default)(c.default.GUILD_BOOSTING_PREMIUM_UPSELL), {
    theme: h
  } = (0, o.useThemeContext)(), D = (0, i.isThemeLight)(h) ? o.Button.Colors.PRIMARY : o.Button.Colors.WHITE, G = null == n || null == n.premiumSubscriptionType, B = M.default.getPrice(y.SubscriptionPlans.PREMIUM_MONTH_TIER_2, !1, !1, C), b = (0, R.formatPrice)(B.amount, B.currency), k = (0, E.usePremiumTrialOffer)(), v = null == k ? void 0 : k.trial_id, Y = (null == k ? void 0 : null === (t = k.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === y.PremiumSubscriptionSKUs.TIER_2;
  return a.useEffect(() => {
    N.default.track(L.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: y.PremiumUpsellTypes.GUILD_PREMIUM_UPSELL_MODAL,
      location_stack: T
    })
  }, [T]), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(o.ModalContent, {
      className: g.content,
      children: [(0, s.jsx)(o.ModalCloseButton, {
        onClick: l,
        className: g.closeButton
      }), Y && (0, s.jsx)(_.PremiumTrialGradientBadge, {
        className: g.premiumTrialBadge
      }), (0, s.jsx)("div", {
        className: u()(g.upsellImage, {
          [g.upsellImageWithTrialOffer]: Y
        })
      }), (0, s.jsx)("div", {
        className: g.bodyText,
        children: null != v ? O.default.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT_TRIAL_VARIANT : O.default.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT.format({
          monthlyPrice: b
        })
      }), (0, s.jsx)(U, {
        shouldUpsellFromNoneTier: G
      })]
    }), (0, s.jsxs)(o.ModalFooter, {
      align: I.default.Align.CENTER,
      justify: I.default.Justify.END,
      children: [(0, s.jsxs)("div", {
        className: g.footerRight,
        children: [(0, s.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          color: D,
          onClick: P,
          children: O.default.Messages.PREMIUM_UPSELL_CONTINUE_TO_BOOSTS
        }), (0, s.jsx)(o.Button, {
          color: o.Button.Colors.GREEN,
          type: "submit",
          onClick: () => {
            l(), (0, S.default)({
              initialPlanId: null,
              subscriptionTier: y.PremiumSubscriptionSKUs.TIER_2,
              analyticsLocations: f,
              analyticsObject: {
                ...m,
                section: L.AnalyticsSections.PREMIUM_GUILD_PURCHASE_MODAL
              },
              analyticsSourceLocation: A,
              onSubscriptionConfirmation: p,
              trialId: v
            })
          },
          children: null != v ? O.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : O.default.Messages.PREMIUM_UPSELL_UPGRADE
        })]
      }), (0, s.jsx)("div", {
        className: g.backStep,
        children: (0, s.jsx)(o.Button, {
          color: D,
          look: o.Button.Looks.LINK,
          size: o.Button.Sizes.NONE,
          onClick: () => r(),
          children: O.default.Messages.BACK
        })
      })]
    })]
  })
}