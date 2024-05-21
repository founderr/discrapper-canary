"use strict";
r.r(l), r.d(l, {
  default: function() {
    return k
  }
});
var n = r("735250"),
  t = r("470079"),
  s = r("120356"),
  a = r.n(s),
  i = r("442837"),
  o = r("481060"),
  u = r("570140"),
  c = r("355467"),
  d = r("821849"),
  E = r("15640"),
  f = r("598"),
  m = r("409813"),
  _ = r("348121"),
  p = r("104494"),
  S = r("639119"),
  P = r("165583"),
  T = r("197115"),
  R = r("185139"),
  I = r("263954"),
  N = r("706454"),
  M = r("853872"),
  C = r("973675"),
  x = r("642113"),
  h = r("68736"),
  L = r("930153"),
  j = r("74538"),
  A = r("937615"),
  b = r("981631"),
  U = r("474936"),
  v = r("689938"),
  g = r("155661");
let O = e => {
  let {
    locale: l
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(I.default, {
      icon: h.default,
      iconClassName: g.iconColorPurple,
      description: v.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
    }), (0, n.jsx)(I.default, {
      icon: C.default,
      iconClassName: g.iconColorPink,
      description: v.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format({
        numGuildSubscriptions: U.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
        discountPercent: (0, L.formatPercent)(l, U.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
      })
    }), (0, n.jsx)(I.default, {
      icon: x.default,
      iconClassName: g.iconColorYellow,
      description: v.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION
    })]
  })
};

function y() {
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(I.default, {
      icon: h.default,
      iconClassName: g.iconColorPurple,
      description: v.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
    }), (0, n.jsx)(I.default, {
      icon: x.default,
      iconClassName: g.iconColorYellow,
      description: v.default.Messages.STICKER_PREMIUM_TIER_0_UPSELL_PERK_PREMIUM_SUBSCRIPTION
    })]
  })
}
let B = e => {
    let {
      trialOffer: l,
      discountOffer: t,
      isTier0Upsell: s,
      isLoading: u,
      price: c,
      onClose: d
    } = e, E = (0, i.useStateFromStores)([N.default], () => N.default.locale), f = null != l || null != t;
    return (0, n.jsxs)("div", {
      className: g.wrapper,
      children: [(0, n.jsx)(o.ModalCloseButton, {
        onClick: d,
        className: g.closeButton
      }), f && (0, n.jsx)(P.PremiumTrialGradientBadge, {
        className: g.premiumTrialBadge
      }), (0, n.jsx)("img", {
        className: a()(g.heroImage, {
          [g.heroImageWithTrialOffer]: f
        }),
        src: r("178632"),
        alt: ""
      }), u ? (0, n.jsx)(o.Spinner, {}) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          className: g.heading,
          children: null == c ? (0, n.jsx)(o.Spinner, {
            type: o.Spinner.Type.PULSING_ELLIPSIS
          }) : s ? v.default.Messages.STICKER_PREMIUM_SUBSCRIPTION_UPSELL_ALERT_TITLE.format({
            planName: (0, j.getTierDisplayName)(U.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
            monthlyPrice: (0, A.formatPrice)(c.amount, c.currency)
          }) : v.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format({
            monthlyPrice: (0, A.formatPrice)(c.amount, c.currency)
          })
        }), (0, n.jsx)("div", {
          className: g.perks,
          children: s ? (0, n.jsx)(y, {}) : (0, n.jsx)(O, {
            locale: E
          })
        })]
      })]
    })
  },
  D = e => {
    let {
      trialOffer: l,
      discountOffer: r,
      isTier0Upsell: t,
      onClose: s
    } = e, a = {
      section: b.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
    };
    return (0, n.jsxs)(o.ModalFooter, {
      className: g.footer,
      children: [(0, n.jsx)(o.Button, {
        onClick: s,
        size: o.Button.Sizes.SMALL,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        children: v.default.Messages.CLOSE
      }), (0, n.jsx)(T.default, {
        buttonText: null != l || null != r ? t ? v.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : v.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0,
        premiumModalAnalyticsLocation: a,
        subscriptionTier: t ? U.PremiumSubscriptionSKUs.TIER_0 : U.PremiumSubscriptionSKUs.TIER_2,
        size: o.Button.Sizes.SMALL,
        color: o.Button.Colors.GREEN,
        onClick: () => {
          s()
        }
      })]
    })
  };

function k(e) {
  let {
    onClose: l,
    ...r
  } = e, s = (0, E.useSubscriptionPlansLoaded)(), a = (0, i.useStateFromStores)([M.default], () => M.default.hasFetchedPaymentSources), P = s && a, T = (0, S.usePremiumTrialOffer)(), I = (0, p.usePremiumDiscountOffer)(), {
    isLoading: N,
    suggestedPremiumType: C
  } = (0, _.default)();
  t.useEffect(() => {
    u.default.wait(() => {
      (0, c.fetchPaymentSources)(), (0, d.fetchPremiumSubscriptionPlans)(null, null, b.RevenueSurfaces.DISCOVERY)
    })
  }, []);
  let x = C === U.PremiumTypes.TIER_0 && null == I,
    h = P ? j.default.getDefaultPrice(x ? U.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : U.SubscriptionPlans.PREMIUM_MONTH_TIER_2) : null;
  return (0, n.jsx)(f.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, n.jsx)(o.ModalRoot, {
      ...r,
      "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
      children: (0, n.jsx)(R.default, {
        hideBreadcrumbs: !0,
        body: (0, n.jsx)(B, {
          trialOffer: T,
          discountOffer: I,
          isTier0Upsell: x,
          isLoading: !P || N,
          price: h,
          onClose: l
        }),
        footer: (0, n.jsx)(D, {
          trialOffer: T,
          discountOffer: I,
          isTier0Upsell: x,
          onClose: l
        }),
        steps: [m.Step.PREMIUM_UPSELL],
        currentStep: m.Step.PREMIUM_UPSELL
      })
    })
  })
}