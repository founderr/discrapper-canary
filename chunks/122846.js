"use strict";
n.r(t), n.d(t, {
  default: function() {
    return V
  }
});
var r = n("37983"),
  i = n("884691"),
  l = n("414456"),
  u = n.n(l),
  a = n("446674"),
  s = n("77078"),
  o = n("913144"),
  c = n("850068"),
  E = n("775433"),
  d = n("308592"),
  _ = n("642906"),
  f = n("85336"),
  T = n("552917"),
  A = n("843647"),
  S = n("154889"),
  I = n("917247"),
  R = n("956597"),
  p = n("635956"),
  N = n("273619"),
  C = n("674158"),
  P = n("915639"),
  O = n("357957"),
  U = n("326880"),
  M = n("46829"),
  h = n("595086"),
  m = n("240481"),
  L = n("719923"),
  D = n("153160"),
  v = n("49111"),
  g = n("646718"),
  y = n("782340"),
  G = n("822549");
let H = e => {
  let {
    locale: t
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(C.default, {
      icon: h.default,
      iconClassName: G.iconColorPurple,
      description: y.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
    }), (0, r.jsx)(C.default, {
      icon: U.default,
      iconClassName: G.iconColorPink,
      description: y.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format({
        numGuildSubscriptions: g.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
        discountPercent: (0, m.formatPercent)(t, g.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
      })
    }), (0, r.jsx)(C.default, {
      icon: M.default,
      iconClassName: G.iconColorYellow,
      description: y.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION
    })]
  })
};

function b() {
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(C.default, {
      icon: h.default,
      iconClassName: G.iconColorPurple,
      description: y.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
    }), (0, r.jsx)(C.default, {
      icon: M.default,
      iconClassName: G.iconColorYellow,
      description: y.default.Messages.STICKER_PREMIUM_TIER_0_UPSELL_PERK_PREMIUM_SUBSCRIPTION
    })]
  })
}
let x = e => {
    let {
      trialOffer: t,
      discountOffer: i,
      isTier0Upsell: l,
      isLoading: o,
      price: c,
      onClose: E
    } = e, d = (0, a.useStateFromStores)([P.default], () => P.default.locale), _ = null != t || null != i;
    return (0, r.jsxs)("div", {
      className: G.wrapper,
      children: [(0, r.jsx)(s.ModalCloseButton, {
        onClick: E,
        className: G.closeButton
      }), _ && (0, r.jsx)(R.PremiumTrialGradientBadge, {
        className: G.premiumTrialBadge
      }), (0, r.jsx)("img", {
        className: u(G.heroImage, {
          [G.heroImageWithTrialOffer]: _
        }),
        src: n("190389"),
        alt: ""
      }), o ? (0, r.jsx)(s.Spinner, {}) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.Text, {
          variant: "text-md/normal",
          className: G.heading,
          children: null == c ? (0, r.jsx)(s.Spinner, {
            type: s.Spinner.Type.PULSING_ELLIPSIS
          }) : l ? y.default.Messages.STICKER_PREMIUM_SUBSCRIPTION_UPSELL_ALERT_TITLE.format({
            planName: (0, L.getTierDisplayName)(g.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
            monthlyPrice: (0, D.formatPrice)(c.amount, c.currency)
          }) : y.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format({
            monthlyPrice: (0, D.formatPrice)(c.amount, c.currency)
          })
        }), (0, r.jsx)("div", {
          className: G.perks,
          children: l ? (0, r.jsx)(b, {}) : (0, r.jsx)(H, {
            locale: d
          })
        })]
      })]
    })
  },
  B = e => {
    let {
      trialOffer: t,
      discountOffer: n,
      isTier0Upsell: i,
      onClose: l
    } = e, u = {
      section: v.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
    };
    return (0, r.jsxs)(s.ModalFooter, {
      className: G.footer,
      children: [(0, r.jsx)(s.Button, {
        onClick: l,
        size: s.Button.Sizes.SMALL,
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.LINK,
        children: y.default.Messages.CLOSE
      }), (0, r.jsx)(p.default, {
        buttonText: null != t || null != n ? i ? y.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : y.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0,
        premiumModalAnalyticsLocation: u,
        subscriptionTier: i ? g.PremiumSubscriptionSKUs.TIER_0 : g.PremiumSubscriptionSKUs.TIER_2,
        size: s.Button.Sizes.SMALL,
        color: s.Button.Colors.GREEN,
        onClick: () => {
          l()
        }
      })]
    })
  };

function V(e) {
  let {
    onClose: t,
    ...n
  } = e, l = (0, d.useSubscriptionPlansLoaded)(), u = (0, a.useStateFromStores)([O.default], () => O.default.hasFetchedPaymentSources), R = l && u, p = (0, I.usePremiumTrialOffer)(), C = (0, S.usePremiumDiscountOffer)(), {
    isLoading: P,
    suggestedPremiumType: U
  } = (0, A.default)({
    autoTrackExposure: R,
    experiment: T.default,
    location: "stickers_upsell"
  });
  i.useEffect(() => {
    o.default.wait(() => {
      (0, c.fetchPaymentSources)(), (0, E.fetchPremiumSubscriptionPlans)(null, null, v.RevenueSurfaces.DISCOVERY)
    })
  }, []);
  let M = U === g.PremiumTypes.TIER_0 && null == C,
    h = R ? L.default.getDefaultPrice(M ? g.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : g.SubscriptionPlans.PREMIUM_MONTH_TIER_2) : null;
  return (0, r.jsx)(_.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, r.jsx)(s.ModalRoot, {
      ...n,
      "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
      children: (0, r.jsx)(N.default, {
        hideBreadcrumbs: !0,
        body: (0, r.jsx)(x, {
          trialOffer: p,
          discountOffer: C,
          isTier0Upsell: M,
          isLoading: !R || P,
          price: h,
          onClose: t
        }),
        footer: (0, r.jsx)(B, {
          trialOffer: p,
          discountOffer: C,
          isTier0Upsell: M,
          onClose: t
        }),
        steps: [f.Step.PREMIUM_UPSELL],
        currentStep: f.Step.PREMIUM_UPSELL
      })
    })
  })
}