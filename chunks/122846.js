"use strict";
r.r(t), r.d(t, {
  default: function() {
    return G
  }
});
var n = r("37983"),
  l = r("884691"),
  s = r("414456"),
  a = r.n(s),
  i = r("446674"),
  u = r("77078"),
  o = r("913144"),
  c = r("850068"),
  d = r("775433"),
  E = r("308592"),
  _ = r("642906"),
  f = r("85336"),
  I = r("552917"),
  T = r("843647"),
  R = r("154889"),
  p = r("917247"),
  A = r("956597"),
  C = r("635956"),
  S = r("273619"),
  M = r("674158"),
  N = r("915639"),
  m = r("357957"),
  P = r("326880"),
  h = r("46829"),
  L = r("595086"),
  O = r("240481"),
  U = r("719923"),
  D = r("153160"),
  v = r("49111"),
  x = r("646718"),
  g = r("782340"),
  H = r("822549");
let j = e => {
  let {
    locale: t
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(M.default, {
      icon: L.default,
      iconClassName: H.iconColorPurple,
      description: g.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
    }), (0, n.jsx)(M.default, {
      icon: P.default,
      iconClassName: H.iconColorPink,
      description: g.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format({
        numGuildSubscriptions: x.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
        discountPercent: (0, O.formatPercent)(t, x.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
      })
    }), (0, n.jsx)(M.default, {
      icon: h.default,
      iconClassName: H.iconColorYellow,
      description: g.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION
    })]
  })
};

function y() {
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(M.default, {
      icon: L.default,
      iconClassName: H.iconColorPurple,
      description: g.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
    }), (0, n.jsx)(M.default, {
      icon: h.default,
      iconClassName: H.iconColorYellow,
      description: g.default.Messages.STICKER_PREMIUM_TIER_0_UPSELL_PERK_PREMIUM_SUBSCRIPTION
    })]
  })
}
let b = e => {
    let {
      trialOffer: t,
      discountOffer: l,
      isTier0Upsell: s,
      isLoading: o,
      price: c,
      onClose: d
    } = e, E = (0, i.useStateFromStores)([N.default], () => N.default.locale), _ = null != t || null != l;
    return (0, n.jsxs)("div", {
      className: H.wrapper,
      children: [(0, n.jsx)(u.ModalCloseButton, {
        onClick: d,
        className: H.closeButton
      }), _ && (0, n.jsx)(A.PremiumTrialGradientBadge, {
        className: H.premiumTrialBadge
      }), (0, n.jsx)("img", {
        className: a(H.heroImage, {
          [H.heroImageWithTrialOffer]: _
        }),
        src: r("190389"),
        alt: ""
      }), o ? (0, n.jsx)(u.Spinner, {}) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(u.Text, {
          variant: "text-md/normal",
          className: H.heading,
          children: null == c ? (0, n.jsx)(u.Spinner, {
            type: u.Spinner.Type.PULSING_ELLIPSIS
          }) : s ? g.default.Messages.STICKER_PREMIUM_SUBSCRIPTION_UPSELL_ALERT_TITLE.format({
            planName: (0, U.getTierDisplayName)(x.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
            monthlyPrice: (0, D.formatPrice)(c.amount, c.currency)
          }) : g.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format({
            monthlyPrice: (0, D.formatPrice)(c.amount, c.currency)
          })
        }), (0, n.jsx)("div", {
          className: H.perks,
          children: s ? (0, n.jsx)(y, {}) : (0, n.jsx)(j, {
            locale: E
          })
        })]
      })]
    })
  },
  B = e => {
    let {
      trialOffer: t,
      discountOffer: r,
      isTier0Upsell: l,
      onClose: s
    } = e, a = {
      section: v.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
    };
    return (0, n.jsxs)(u.ModalFooter, {
      className: H.footer,
      children: [(0, n.jsx)(u.Button, {
        onClick: s,
        size: u.Button.Sizes.SMALL,
        color: u.Button.Colors.PRIMARY,
        look: u.Button.Looks.LINK,
        children: g.default.Messages.CLOSE
      }), (0, n.jsx)(C.default, {
        buttonText: null != t || null != r ? l ? g.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : g.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0,
        premiumModalAnalyticsLocation: a,
        subscriptionTier: l ? x.PremiumSubscriptionSKUs.TIER_0 : x.PremiumSubscriptionSKUs.TIER_2,
        size: u.Button.Sizes.SMALL,
        color: u.Button.Colors.GREEN,
        onClick: () => {
          s()
        }
      })]
    })
  };

function G(e) {
  let {
    onClose: t,
    ...r
  } = e, s = (0, E.useSubscriptionPlansLoaded)(), a = (0, i.useStateFromStores)([m.default], () => m.default.hasFetchedPaymentSources), A = s && a, C = (0, p.usePremiumTrialOffer)(), M = (0, R.usePremiumDiscountOffer)(), {
    isLoading: N,
    suggestedPremiumType: P
  } = (0, T.default)({
    autoTrackExposure: A,
    experiment: I.default,
    location: "stickers_upsell"
  });
  l.useEffect(() => {
    o.default.wait(() => {
      (0, c.fetchPaymentSources)(), (0, d.fetchPremiumSubscriptionPlans)(null, null, v.RevenueSurfaces.DISCOVERY)
    })
  }, []);
  let h = P === x.PremiumTypes.TIER_0 && null == M,
    L = A ? U.default.getDefaultPrice(h ? x.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : x.SubscriptionPlans.PREMIUM_MONTH_TIER_2) : null;
  return (0, n.jsx)(_.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, n.jsx)(u.ModalRoot, {
      ...r,
      "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
      children: (0, n.jsx)(S.default, {
        hideBreadcrumbs: !0,
        body: (0, n.jsx)(b, {
          trialOffer: C,
          discountOffer: M,
          isTier0Upsell: h,
          isLoading: !A || N,
          price: L,
          onClose: t
        }),
        footer: (0, n.jsx)(B, {
          trialOffer: C,
          discountOffer: M,
          isTier0Upsell: h,
          onClose: t
        }),
        steps: [f.Step.PREMIUM_UPSELL],
        currentStep: f.Step.PREMIUM_UPSELL
      })
    })
  })
}