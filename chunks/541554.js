"use strict";
s.r(t), s.d(t, {
  Tier1AccountCreditBanner: function() {
    return v
  },
  default: function() {
    return O
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  i = s.n(n),
  r = s("627445"),
  l = s.n(r),
  u = s("77078"),
  o = s("596523"),
  d = s("812204"),
  c = s("685665"),
  f = s("605250"),
  E = s("649844"),
  p = s("797647"),
  I = s("10514"),
  m = s("563890"),
  _ = s("270227"),
  N = s("719923"),
  S = s("713518"),
  P = s("182650"),
  R = s("70578"),
  T = s("154889"),
  C = s("892843"),
  A = s("400307"),
  h = s("646718"),
  L = s("49111"),
  M = s("782340"),
  g = s("334887");
let y = new f.default("SubscriptionHeader.tsx"),
  x = {
    page: L.AnalyticsPages.USER_SETTINGS,
    section: L.AnalyticsSections.SETTINGS_PREMIUM,
    object: L.AnalyticsObjects.CARD
  };

function D(e) {
  let {
    wordMark: t,
    subscriptionInfo: s,
    buttons: n,
    statusClasses: r,
    shouldUseDiscountMarketing: l,
    discountAmount: u
  } = e;
  return (0, a.jsxs)("div", {
    className: i(g.banner, r),
    children: [(0, a.jsx)("div", {
      className: g.bannerBackgroundImage
    }), (0, a.jsxs)("div", {
      className: g.detailsContainer,
      children: [(0, a.jsx)("div", {
        className: g.image
      }), (0, a.jsxs)("div", {
        className: g.details,
        children: [(0, a.jsxs)("div", {
          className: g.wordMark,
          children: [t, l && null != u && (0, a.jsx)(A.PremiumPillWithSparkles, {
            text: M.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
              percent: u
            }),
            className: g.discountPill,
            colorOptions: A.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL,
            isPillOnBorder: !1
          })]
        }), s]
      })]
    }), (0, a.jsx)("div", {
      className: g.buttons,
      children: n
    })]
  })
}

function U() {
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(_.default, {
      className: g.discordWordmark,
      "aria-label": M.default.Messages.PREMIUM_TIER_1
    }), (0, a.jsx)("div", {
      className: g.classicWordmark
    })]
  })
}

function v() {
  let {
    analyticsLocations: e
  } = (0, c.default)(d.default.ACCOUNT_CREDIT_BANNER);
  return (0, a.jsx)(D, {
    wordMark: (0, a.jsx)(U, {}),
    subscriptionInfo: (0, a.jsx)("div", {
      className: g.planInfo,
      children: M.default.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_DESCRIPTION
    }),
    buttons: (0, a.jsx)(C.default, {
      className: g.toolsButton,
      onClick: () => (0, E.default)({
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_1,
        analyticsLocations: e,
        analyticsObject: x
      }),
      children: M.default.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_CTA
    }),
    statusClasses: {
      [g.tier1]: !0
    }
  })
}
var O = function(e) {
  var t, n;
  let {
    subscription: r,
    renewalInvoicePreview: f,
    paymentSource: A,
    busy: v,
    analyticsLocation: O
  } = e, {
    analyticsLocations: b
  } = (0, c.default)(d.default.SUBSCRIPTION_HEADER), {
    enabled: B
  } = (0, R.default)({
    location: "subscription_header"
  }), j = (0, T.usePremiumDiscountOffer)(), G = null == j ? void 0 : null === (t = j.discount) || void 0 === t ? void 0 : t.amount, F = (0, P.useHasDiscountApplied)(), w = (0, P.useActiveDiscountDuration)(), k = () => {
    (r.status === L.SubscriptionStatusTypes.ACTIVE || r.status === L.SubscriptionStatusTypes.PAST_DUE) && Y()
  }, Y = () => {
    (0, u.openModalLazy)(async () => {
      let {
        default: e
      } = await s.el("21367").then(s.bind(s, "21367"));
      return t => (0, a.jsx)(e, {
        ...t,
        premiumSubscription: r,
        analyticsLocation: O,
        analyticsLocations: b
      })
    })
  }, H = () => {
    if (null != r && null != r.planIdFromItems) {
      let e = I.default.get(r.planIdFromItems);
      if (null == e) {
        y.info("Plan not fetched for plan id: ".concat(r.planIdFromItems));
        return
      }
      let t = (0, S.getCurrencies)(e, null == A ? void 0 : A.id, !1),
        s = t.length > 0 ? t[0] : r.currency,
        a = !1;
      1 === t.length && (null == A ? void 0 : A.id) === r.paymentSourceId && (0, S.planHasCurrency)(e.id, s, null == A ? void 0 : A.id) && (a = !0), a ? o.resubscribe(r, b) : (0, E.default)({
        initialPlanId: r.planIdFromItems,
        analyticsLocations: b,
        analyticsLocation: O,
        analyticsObject: x,
        subscription: r
      })
    }
  }, V = N.default.getPlanIdFromInvoice(r, f);
  if ((0, p.isNoneSubscription)(V)) return null;
  let K = N.default.getStatusFromInvoice(r, f),
    W = N.default.getPremiumType(V),
    z = {
      [g.tier0]: W === h.PremiumTypes.TIER_0,
      [g.tier1]: W === h.PremiumTypes.TIER_1,
      [g.tier2]: W === h.PremiumTypes.TIER_2,
      [g.canceled]: K === L.SubscriptionStatusTypes.CANCELED,
      [g.failedPayment]: (0, N.isSubscriptionStatusFailedPayment)(K)
    },
    Z = null;
  switch (W) {
    case h.PremiumTypes.TIER_0:
      Z = (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(_.default, {
          className: g.discordWordmark,
          "aria-label": M.default.Messages.PREMIUM_TIER_0
        }), (0, a.jsx)("div", {
          className: g.basicWordmark
        })]
      });
      break;
    case h.PremiumTypes.TIER_1:
      Z = (0, a.jsx)(U, {});
      break;
    case h.PremiumTypes.TIER_2:
      Z = (0, a.jsx)(m.default, {
        className: g.planName,
        "aria-label": M.default.Messages.PREMIUM_TITLE
      })
  }
  return (0, a.jsx)(D, {
    wordMark: Z,
    subscriptionInfo: (n = V, l(null != f, "Expected renewalInvoicePreview"), (0, a.jsx)("div", {
      className: g.planInfo,
      children: (0, N.getPlanDescriptionFromInvoice)({
        planId: n,
        subscription: r,
        renewalInvoicePreview: f,
        hasDiscountApplied: F,
        activeDiscountDuration: w
      })
    })),
    buttons: (() => {
      let {
        status: e
      } = r;
      if (r.isPurchasedExternally) {
        let e = (0, N.getExternalSubscriptionMethodUrl)(r.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
        return (0, a.jsx)(u.Anchor, {
          href: e,
          useDefaultUnderlineStyles: !1,
          children: (0, a.jsx)(u.Button, {
            className: i(g.toolsButton, g.externalButton),
            size: u.Button.Sizes.SMALL,
            look: u.ButtonLooks.OUTLINED,
            color: u.ButtonColors.WHITE,
            submitting: v,
            children: M.default.Messages.BILLING_MANAGE_SUBSCRIPTION
          })
        })
      }
      if (N.default.isBaseSubscriptionCanceled(r)) return (0, a.jsx)(u.Button, {
        className: g.toolsButton,
        size: u.Button.Sizes.SMALL,
        look: u.ButtonLooks.INVERTED,
        color: u.ButtonColors.BRAND,
        submitting: v,
        onClick: H,
        children: M.default.Messages.RESUBSCRIBE
      });
      if (e === L.SubscriptionStatusTypes.ACTIVE || e === L.SubscriptionStatusTypes.PAST_DUE) {
        let t = !1,
          s = null;
        return null != r.renewalMutations && (t = !0, s = r.renewalMutations.planId !== r.planId ? M.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PLAN : M.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION), null != r.trialEndsAt && (t = !0, s = M.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_IN_TRIAL), e === L.SubscriptionStatusTypes.PAST_DUE && (t = !0), (0, a.jsxs)("div", {
          className: g.toolsButtons,
          children: [B ? (0, a.jsx)(u.Button, {
            className: g.toolsButton,
            size: u.Button.Sizes.SMALL,
            look: u.ButtonLooks.LINK,
            color: u.ButtonColors.WHITE,
            submitting: v,
            onClick: k,
            children: M.default.Messages.PREMIUM_PAUSE_OR_CANCEL
          }) : (0, a.jsx)(u.Button, {
            className: g.toolsButton,
            size: u.Button.Sizes.SMALL,
            look: u.ButtonLooks.LINK,
            color: u.ButtonColors.WHITE,
            submitting: v,
            onClick: k,
            children: M.default.Messages.CANCEL
          }), (0, a.jsx)(u.Tooltip, {
            text: s,
            children: e => (0, a.jsx)(C.default, {
              ...e,
              disabled: t,
              className: g.toolsButton,
              onClick: () => {
                (0, E.default)({
                  analyticsLocations: b,
                  analyticsLocation: O,
                  analyticsObject: x,
                  subscription: r
                })
              },
              children: M.default.Messages.PREMIUM_SWITCH_PLANS
            })
          })]
        })
      }
    })(),
    statusClasses: z,
    shouldUseDiscountMarketing: F,
    discountAmount: G
  })
}