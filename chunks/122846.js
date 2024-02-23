"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
});
var r = n("37983"),
  l = n("884691"),
  a = n("414456"),
  s = n.n(a),
  i = n("446674"),
  o = n("77078"),
  u = n("913144"),
  c = n("850068"),
  d = n("775433"),
  E = n("308592"),
  _ = n("642906"),
  f = n("85336"),
  T = n("552917"),
  I = n("843647"),
  R = n("154889"),
  A = n("917247"),
  p = n("956597"),
  C = n("635956"),
  S = n("273619"),
  M = n("674158"),
  N = n("915639"),
  m = n("357957"),
  P = n("326880"),
  h = n("46829"),
  L = n("595086"),
  O = n("240481"),
  U = n("719923"),
  D = n("153160"),
  v = n("49111"),
  g = n("646718"),
  x = n("782340"),
  H = n("822549");
let y = e => {
  let {
    locale: t
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(M.default, {
      icon: L.default,
      iconClassName: H.iconColorPurple,
      description: x.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
    }), (0, r.jsx)(M.default, {
      icon: P.default,
      iconClassName: H.iconColorPink,
      description: x.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format({
        numGuildSubscriptions: g.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
        discountPercent: (0, O.formatPercent)(t, g.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
      })
    }), (0, r.jsx)(M.default, {
      icon: h.default,
      iconClassName: H.iconColorYellow,
      description: x.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION
    })]
  })
};

function j() {
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(M.default, {
      icon: L.default,
      iconClassName: H.iconColorPurple,
      description: x.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
    }), (0, r.jsx)(M.default, {
      icon: h.default,
      iconClassName: H.iconColorYellow,
      description: x.default.Messages.STICKER_PREMIUM_TIER_0_UPSELL_PERK_PREMIUM_SUBSCRIPTION
    })]
  })
}
let b = e => {
    let {
      trialOffer: t,
      discountOffer: l,
      isTier0Upsell: a,
      isLoading: u,
      price: c,
      onClose: d
    } = e, E = (0, i.useStateFromStores)([N.default], () => N.default.locale), _ = null != t || null != l;
    return (0, r.jsxs)("div", {
      className: H.wrapper,
      children: [(0, r.jsx)(o.ModalCloseButton, {
        onClick: d,
        className: H.closeButton
      }), _ && (0, r.jsx)(p.PremiumTrialGradientBadge, {
        className: H.premiumTrialBadge
      }), (0, r.jsx)("img", {
        className: s(H.heroImage, {
          [H.heroImageWithTrialOffer]: _
        }),
        src: n("190389"),
        alt: ""
      }), u ? (0, r.jsx)(o.Spinner, {}) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(o.Text, {
          variant: "text-md/normal",
          className: H.heading,
          children: null == c ? (0, r.jsx)(o.Spinner, {
            type: o.Spinner.Type.PULSING_ELLIPSIS
          }) : a ? x.default.Messages.STICKER_PREMIUM_SUBSCRIPTION_UPSELL_ALERT_TITLE.format({
            planName: (0, U.getTierDisplayName)(g.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
            monthlyPrice: (0, D.formatPrice)(c.amount, c.currency)
          }) : x.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format({
            monthlyPrice: (0, D.formatPrice)(c.amount, c.currency)
          })
        }), (0, r.jsx)("div", {
          className: H.perks,
          children: a ? (0, r.jsx)(j, {}) : (0, r.jsx)(y, {
            locale: E
          })
        })]
      })]
    })
  },
  B = e => {
    let {
      trialOffer: t,
      discountOffer: n,
      isTier0Upsell: l,
      onClose: a
    } = e, s = {
      section: v.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
    };
    return (0, r.jsxs)(o.ModalFooter, {
      className: H.footer,
      children: [(0, r.jsx)(o.Button, {
        onClick: a,
        size: o.Button.Sizes.SMALL,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        children: x.default.Messages.CLOSE
      }), (0, r.jsx)(C.default, {
        buttonText: null != t || null != n ? l ? x.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : x.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0,
        premiumModalAnalyticsLocation: s,
        subscriptionTier: l ? g.PremiumSubscriptionSKUs.TIER_0 : g.PremiumSubscriptionSKUs.TIER_2,
        size: o.Button.Sizes.SMALL,
        color: o.Button.Colors.GREEN,
        onClick: () => {
          a()
        }
      })]
    })
  };

function G(e) {
  let {
    onClose: t,
    ...n
  } = e, a = (0, E.useSubscriptionPlansLoaded)(), s = (0, i.useStateFromStores)([m.default], () => m.default.hasFetchedPaymentSources), p = a && s, C = (0, A.usePremiumTrialOffer)(), M = (0, R.usePremiumDiscountOffer)(), {
    isLoading: N,
    suggestedPremiumType: P
  } = (0, I.default)({
    autoTrackExposure: p,
    experiment: T.default,
    location: "stickers_upsell"
  });
  l.useEffect(() => {
    u.default.wait(() => {
      (0, c.fetchPaymentSources)(), (0, d.fetchPremiumSubscriptionPlans)(null, null, v.RevenueSurfaces.DISCOVERY)
    })
  }, []);
  let h = P === g.PremiumTypes.TIER_0 && null == M,
    L = p ? U.default.getDefaultPrice(h ? g.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : g.SubscriptionPlans.PREMIUM_MONTH_TIER_2) : null;
  return (0, r.jsx)(_.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, r.jsx)(o.ModalRoot, {
      ...n,
      "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
      children: (0, r.jsx)(S.default, {
        hideBreadcrumbs: !0,
        body: (0, r.jsx)(b, {
          trialOffer: C,
          discountOffer: M,
          isTier0Upsell: h,
          isLoading: !p || N,
          price: L,
          onClose: t
        }),
        footer: (0, r.jsx)(B, {
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