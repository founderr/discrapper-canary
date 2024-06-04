"use strict";
l.r(r), l.d(r, {
  default: function() {
    return B
  }
});
var n = l("735250"),
  t = l("470079"),
  s = l("120356"),
  a = l.n(s),
  i = l("442837"),
  o = l("481060"),
  u = l("570140"),
  c = l("355467"),
  d = l("821849"),
  f = l("15640"),
  m = l("598"),
  p = l("409813"),
  E = l("104494"),
  S = l("639119"),
  _ = l("165583"),
  P = l("197115"),
  N = l("185139"),
  T = l("263954"),
  R = l("706454"),
  C = l("853872"),
  I = l("973675"),
  M = l("642113"),
  x = l("68736"),
  h = l("930153"),
  j = l("74538"),
  b = l("937615"),
  v = l("981631"),
  A = l("474936"),
  L = l("689938"),
  g = l("155661");
let O = e => {
    let {
      locale: r
    } = e;
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(T.default, {
        icon: x.default,
        iconClassName: g.iconColorPurple,
        description: L.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
      }), (0, n.jsx)(T.default, {
        icon: I.default,
        iconClassName: g.iconColorPink,
        description: L.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format({
          numGuildSubscriptions: A.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
          discountPercent: (0, h.formatPercent)(r, A.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
        })
      }), (0, n.jsx)(T.default, {
        icon: M.default,
        iconClassName: g.iconColorYellow,
        description: L.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION
      })]
    })
  },
  y = e => {
    let {
      trialOffer: r,
      discountOffer: t,
      isLoading: s,
      price: u,
      onClose: c
    } = e, d = (0, i.useStateFromStores)([R.default], () => R.default.locale), f = null != r || null != t;
    return (0, n.jsxs)("div", {
      className: g.wrapper,
      children: [(0, n.jsx)(o.ModalCloseButton, {
        onClick: c,
        className: g.closeButton
      }), f && (0, n.jsx)(_.PremiumTrialGradientBadge, {
        className: g.premiumTrialBadge
      }), (0, n.jsx)("img", {
        className: a()(g.heroImage, {
          [g.heroImageWithTrialOffer]: f
        }),
        src: l("178632"),
        alt: ""
      }), s ? (0, n.jsx)(o.Spinner, {}) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          className: g.heading,
          children: null == u ? (0, n.jsx)(o.Spinner, {
            type: o.Spinner.Type.PULSING_ELLIPSIS
          }) : L.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format({
            monthlyPrice: (0, b.formatPrice)(u.amount, u.currency)
          })
        }), (0, n.jsx)("div", {
          className: g.perks,
          children: (0, n.jsx)(O, {
            locale: d
          })
        })]
      })]
    })
  },
  U = e => {
    let {
      trialOffer: r,
      discountOffer: l,
      onClose: t
    } = e, s = {
      section: v.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
    };
    return (0, n.jsxs)(o.ModalFooter, {
      className: g.footer,
      children: [(0, n.jsx)(o.Button, {
        onClick: t,
        size: o.Button.Sizes.SMALL,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        children: L.default.Messages.CLOSE
      }), (0, n.jsx)(P.default, {
        buttonText: null != r || null != l ? L.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0,
        premiumModalAnalyticsLocation: s,
        subscriptionTier: A.PremiumSubscriptionSKUs.TIER_2,
        size: o.Button.Sizes.SMALL,
        color: o.Button.Colors.GREEN,
        onClick: () => {
          t()
        }
      })]
    })
  };

function B(e) {
  let {
    onClose: r,
    ...l
  } = e, s = (0, f.useSubscriptionPlansLoaded)(), a = (0, i.useStateFromStores)([C.default], () => C.default.hasFetchedPaymentSources), _ = s && a, P = (0, S.usePremiumTrialOffer)(), T = (0, E.usePremiumDiscountOffer)();
  t.useEffect(() => {
    u.default.wait(() => {
      (0, c.fetchPaymentSources)(), (0, d.fetchPremiumSubscriptionPlans)(null, null, v.RevenueSurfaces.DISCOVERY)
    })
  }, []);
  let R = _ ? j.default.getDefaultPrice(A.SubscriptionPlans.PREMIUM_MONTH_TIER_2) : null;
  return (0, n.jsx)(m.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, n.jsx)(o.ModalRoot, {
      ...l,
      "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
      children: (0, n.jsx)(N.default, {
        hideBreadcrumbs: !0,
        body: (0, n.jsx)(y, {
          trialOffer: P,
          discountOffer: T,
          isLoading: !_,
          price: R,
          onClose: r
        }),
        footer: (0, n.jsx)(U, {
          trialOffer: P,
          discountOffer: T,
          onClose: r
        }),
        steps: [p.Step.PREMIUM_UPSELL],
        currentStep: p.Step.PREMIUM_UPSELL
      })
    })
  })
}