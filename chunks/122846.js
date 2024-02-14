"use strict";
n.r(t), n.d(t, {
  default: function() {
    return V
  }
});
var r = n("37983"),
  i = n("884691"),
  a = n("414456"),
  u = n.n(a),
  l = n("446674"),
  o = n("77078"),
  s = n("913144"),
  c = n("850068"),
  d = n("775433"),
  E = n("308592"),
  _ = n("642906"),
  f = n("85336"),
  T = n("552917"),
  A = n("843647"),
  S = n("154889"),
  R = n("917247"),
  I = n("956597"),
  N = n("635956"),
  p = n("273619"),
  C = n("674158"),
  P = n("915639"),
  U = n("357957"),
  O = n("326880"),
  h = n("46829"),
  M = n("595086"),
  m = n("240481"),
  L = n("719923"),
  D = n("153160"),
  v = n("49111"),
  g = n("646718"),
  y = n("782340"),
  G = n("822549");
let b = e => {
  let {
    locale: t
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(C.default, {
      icon: M.default,
      iconClassName: G.iconColorPurple,
      description: y.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
    }), (0, r.jsx)(C.default, {
      icon: O.default,
      iconClassName: G.iconColorPink,
      description: y.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format({
        numGuildSubscriptions: g.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
        discountPercent: (0, m.formatPercent)(t, g.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
      })
    }), (0, r.jsx)(C.default, {
      icon: h.default,
      iconClassName: G.iconColorYellow,
      description: y.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION
    })]
  })
};

function x() {
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(C.default, {
      icon: M.default,
      iconClassName: G.iconColorPurple,
      description: y.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
    }), (0, r.jsx)(C.default, {
      icon: h.default,
      iconClassName: G.iconColorYellow,
      description: y.default.Messages.STICKER_PREMIUM_TIER_0_UPSELL_PERK_PREMIUM_SUBSCRIPTION
    })]
  })
}
let B = e => {
    let {
      trialOffer: t,
      discountOffer: i,
      isTier0Upsell: a,
      isLoading: s,
      price: c,
      onClose: d
    } = e, E = (0, l.useStateFromStores)([P.default], () => P.default.locale), _ = null != t || null != i;
    return (0, r.jsxs)("div", {
      className: G.wrapper,
      children: [(0, r.jsx)(o.ModalCloseButton, {
        onClick: d,
        className: G.closeButton
      }), _ && (0, r.jsx)(I.PremiumTrialGradientBadge, {
        className: G.premiumTrialBadge
      }), (0, r.jsx)("img", {
        className: u(G.heroImage, {
          [G.heroImageWithTrialOffer]: _
        }),
        src: n("190389"),
        alt: ""
      }), s ? (0, r.jsx)(o.Spinner, {}) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(o.Text, {
          variant: "text-md/normal",
          className: G.heading,
          children: null == c ? (0, r.jsx)(o.Spinner, {
            type: o.Spinner.Type.PULSING_ELLIPSIS
          }) : a ? y.default.Messages.STICKER_PREMIUM_SUBSCRIPTION_UPSELL_ALERT_TITLE.format({
            planName: (0, L.getTierDisplayName)(g.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
            monthlyPrice: (0, D.formatPrice)(c.amount, c.currency)
          }) : y.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format({
            monthlyPrice: (0, D.formatPrice)(c.amount, c.currency)
          })
        }), (0, r.jsx)("div", {
          className: G.perks,
          children: a ? (0, r.jsx)(x, {}) : (0, r.jsx)(b, {
            locale: E
          })
        })]
      })]
    })
  },
  H = e => {
    let {
      trialOffer: t,
      discountOffer: n,
      isTier0Upsell: i,
      onClose: a
    } = e, u = {
      section: v.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
    };
    return (0, r.jsxs)(o.ModalFooter, {
      className: G.footer,
      children: [(0, r.jsx)(o.Button, {
        onClick: a,
        size: o.Button.Sizes.SMALL,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        children: y.default.Messages.CLOSE
      }), (0, r.jsx)(N.default, {
        buttonText: null != t || null != n ? i ? y.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : y.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0,
        premiumModalAnalyticsLocation: u,
        subscriptionTier: i ? g.PremiumSubscriptionSKUs.TIER_0 : g.PremiumSubscriptionSKUs.TIER_2,
        size: o.Button.Sizes.SMALL,
        color: o.Button.Colors.GREEN,
        onClick: () => {
          a()
        }
      })]
    })
  };

function V(e) {
  let {
    onClose: t,
    ...n
  } = e, a = (0, E.useSubscriptionPlansLoaded)(), u = (0, l.useStateFromStores)([U.default], () => U.default.hasFetchedPaymentSources), I = a && u, N = (0, R.usePremiumTrialOffer)(), C = (0, S.usePremiumDiscountOffer)(), {
    isLoading: P,
    suggestedPremiumType: O
  } = (0, A.default)({
    autoTrackExposure: I,
    experiment: T.default,
    location: "stickers_upsell"
  });
  i.useEffect(() => {
    s.default.wait(() => {
      (0, c.fetchPaymentSources)(), (0, d.fetchPremiumSubscriptionPlans)(null, null, v.RevenueSurfaces.DISCOVERY)
    })
  }, []);
  let h = O === g.PremiumTypes.TIER_0 && null == C,
    M = I ? L.default.getDefaultPrice(h ? g.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : g.SubscriptionPlans.PREMIUM_MONTH_TIER_2) : null;
  return (0, r.jsx)(_.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, r.jsx)(o.ModalRoot, {
      ...n,
      "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
      children: (0, r.jsx)(p.default, {
        hideBreadcrumbs: !0,
        body: (0, r.jsx)(B, {
          trialOffer: N,
          discountOffer: C,
          isTier0Upsell: h,
          isLoading: !I || P,
          price: M,
          onClose: t
        }),
        footer: (0, r.jsx)(H, {
          trialOffer: N,
          discountOffer: C,
          isTier0Upsell: h,
          onClose: t
        }),
        steps: [f.Step.PREMIUM_UPSELL],
        currentStep: f.Step.PREMIUM_UPSELL
      })
    })
  })
}