"use strict";
r.r(l), r.d(l, {
  default: function() {
    return B
  }
});
var n = r("735250"),
  t = r("470079"),
  s = r("120356"),
  a = r.n(s),
  o = r("442837"),
  i = r("481060"),
  u = r("570140"),
  c = r("355467"),
  d = r("821849"),
  E = r("15640"),
  f = r("598"),
  S = r("409813"),
  m = r("104494"),
  _ = r("639119"),
  p = r("165583"),
  P = r("197115"),
  N = r("185139"),
  T = r("263954"),
  R = r("706454"),
  I = r("853872"),
  C = r("973675"),
  M = r("642113"),
  x = r("68736"),
  L = r("930153"),
  h = r("74538"),
  A = r("937615"),
  j = r("981631"),
  v = r("474936"),
  g = r("689938"),
  O = r("155661");
let U = e => {
    let {
      locale: l
    } = e;
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(T.default, {
        icon: x.default,
        iconClassName: O.iconColorPurple,
        description: g.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
      }), (0, n.jsx)(T.default, {
        icon: C.default,
        iconClassName: O.iconColorPink,
        description: g.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format({
          numGuildSubscriptions: v.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
          discountPercent: (0, L.formatPercent)(l, v.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
        })
      }), (0, n.jsx)(T.default, {
        icon: M.default,
        iconClassName: O.iconColorYellow,
        description: g.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION
      })]
    })
  },
  y = e => {
    let {
      trialOffer: l,
      discountOffer: t,
      isLoading: s,
      price: u,
      onClose: c
    } = e, d = (0, o.useStateFromStores)([R.default], () => R.default.locale), E = null != l || null != t;
    return (0, n.jsxs)("div", {
      className: O.wrapper,
      children: [(0, n.jsx)(i.ModalCloseButton, {
        onClick: c,
        className: O.closeButton
      }), E && (0, n.jsx)(p.PremiumTrialGradientBadge, {
        className: O.premiumTrialBadge
      }), (0, n.jsx)("img", {
        className: a()(O.heroImage, {
          [O.heroImageWithTrialOffer]: E
        }),
        src: r("178632"),
        alt: ""
      }), s ? (0, n.jsx)(i.Spinner, {}) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(i.Text, {
          variant: "text-md/normal",
          className: O.heading,
          children: null == u ? (0, n.jsx)(i.Spinner, {
            type: i.Spinner.Type.PULSING_ELLIPSIS
          }) : g.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format({
            monthlyPrice: (0, A.formatPrice)(u.amount, u.currency)
          })
        }), (0, n.jsx)("div", {
          className: O.perks,
          children: (0, n.jsx)(U, {
            locale: d
          })
        })]
      })]
    })
  },
  b = e => {
    let {
      trialOffer: l,
      discountOffer: r,
      onClose: t
    } = e, s = {
      section: j.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
    };
    return (0, n.jsxs)(i.ModalFooter, {
      className: O.footer,
      children: [(0, n.jsx)(i.Button, {
        onClick: t,
        size: i.Button.Sizes.SMALL,
        color: i.Button.Colors.PRIMARY,
        look: i.Button.Looks.LINK,
        children: g.default.Messages.CLOSE
      }), (0, n.jsx)(P.default, {
        buttonText: null != l || null != r ? g.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0,
        premiumModalAnalyticsLocation: s,
        subscriptionTier: v.PremiumSubscriptionSKUs.TIER_2,
        size: i.Button.Sizes.SMALL,
        color: i.Button.Colors.GREEN,
        onClick: () => {
          t()
        }
      })]
    })
  };

function B(e) {
  let {
    onClose: l,
    ...r
  } = e, s = (0, E.useSubscriptionPlansLoaded)(), a = (0, o.useStateFromStores)([I.default], () => I.default.hasFetchedPaymentSources), p = s && a, P = (0, _.usePremiumTrialOffer)(), T = (0, m.usePremiumDiscountOffer)();
  t.useEffect(() => {
    u.default.wait(() => {
      (0, c.fetchPaymentSources)(), (0, d.fetchPremiumSubscriptionPlans)(null, null, j.RevenueSurfaces.DISCOVERY)
    })
  }, []);
  let R = p ? h.default.getDefaultPrice(v.SubscriptionPlans.PREMIUM_MONTH_TIER_2) : null;
  return (0, n.jsx)(f.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, n.jsx)(i.ModalRoot, {
      ...r,
      "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
      children: (0, n.jsx)(N.default, {
        hideBreadcrumbs: !0,
        body: (0, n.jsx)(y, {
          trialOffer: P,
          discountOffer: T,
          isLoading: !p,
          price: R,
          onClose: l
        }),
        footer: (0, n.jsx)(b, {
          trialOffer: P,
          discountOffer: T,
          onClose: l
        }),
        steps: [S.Step.PREMIUM_UPSELL],
        currentStep: S.Step.PREMIUM_UPSELL
      })
    })
  })
}