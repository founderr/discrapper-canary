"use strict";
s.r(t), s.d(t, {
  Tier1AccountCreditBanner: function() {
    return G
  }
}), s("411104");
var a = s("735250");
s("470079");
var n = s("120356"),
  i = s.n(n),
  r = s("512722"),
  l = s.n(r),
  u = s("481060"),
  o = s("366939"),
  d = s("100527"),
  c = s("906732"),
  p = s("710845"),
  f = s("963249"),
  E = s("301766"),
  m = s("509545"),
  _ = s("931331"),
  S = s("754347"),
  I = s("122289"),
  N = s("74538"),
  P = s("212895"),
  C = s("296848"),
  T = s("140465"),
  h = s("879463"),
  A = s("104494"),
  R = s("987997"),
  M = s("833569"),
  y = s("823188"),
  g = s("474936"),
  L = s("981631"),
  x = s("689938"),
  D = s("954282");
let b = new p.default("SubscriptionHeader.tsx"),
  U = {
    page: L.AnalyticsPages.USER_SETTINGS,
    section: L.AnalyticsSections.SETTINGS_PREMIUM,
    object: L.AnalyticsObjects.CARD
  },
  v = [L.SubscriptionStatusTypes.PAUSED, L.SubscriptionStatusTypes.PAUSE_PENDING, L.SubscriptionStatusTypes.BILLING_RETRY];

function O(e) {
  let {
    wordMark: t,
    subscriptionInfo: s,
    buttons: n,
    statusClasses: r,
    shouldUseDiscountMarketing: l,
    discountAmount: u
  } = e;
  return (0, a.jsxs)("div", {
    className: i()(D.banner, r),
    children: [(0, a.jsx)("div", {
      className: D.bannerBackgroundImage
    }), (0, a.jsxs)("div", {
      className: D.detailsContainer,
      children: [(0, a.jsx)("div", {
        className: D.image
      }), (0, a.jsxs)("div", {
        className: D.details,
        children: [(0, a.jsxs)("div", {
          className: D.headerLabel,
          children: [t, l && null != u && (0, a.jsx)(y.PremiumPillWithSparkles, {
            text: x.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
              percent: u
            }),
            className: D.discountPill,
            colorOptions: y.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL,
            isPillOnBorder: !1
          })]
        }), s]
      })]
    }), (0, a.jsx)("div", {
      className: D.buttons,
      children: n
    })]
  })
}

function B(e) {
  let {
    wordMark: t,
    subscriptionInfo: s,
    buttons: n,
    statusClasses: r,
    shouldUseDiscountMarketing: l,
    discountAmount: u
  } = e;
  return (0, a.jsxs)("div", {
    className: i()(D.banner, r, D.repositioned),
    children: [(0, a.jsx)("div", {
      className: D.bannerBackgroundImage
    }), (0, a.jsx)("div", {
      className: D.detailsContainer,
      children: (0, a.jsx)("div", {
        className: D.details,
        children: (0, a.jsxs)("div", {
          className: D.headerLabel,
          children: [(0, a.jsx)("div", {
            className: D.image
          }), (0, a.jsxs)("div", {
            className: D.headerColumnB,
            children: [t, l && null != u && (0, a.jsx)(y.PremiumPillWithSparkles, {
              text: x.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                percent: u
              }),
              className: D.discountPill,
              colorOptions: y.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL,
              isPillOnBorder: !1
            }), s]
          })]
        })
      })
    }), (0, a.jsx)("div", {
      className: D.buttons,
      children: n
    })]
  })
}

function j() {
  return (0, a.jsxs)("div", {
    className: D.wordMark,
    children: [(0, a.jsx)(S.default, {
      className: D.discordWordmark,
      "aria-label": x.default.Messages.PREMIUM_TIER_1
    }), (0, a.jsx)("div", {
      className: D.classicWordmark
    })]
  })
}

function G() {
  let {
    analyticsLocations: e
  } = (0, c.default)(d.default.ACCOUNT_CREDIT_BANNER);
  return (0, a.jsx)(O, {
    wordMark: (0, a.jsx)(j, {}),
    subscriptionInfo: (0, a.jsx)("div", {
      className: D.planInfo,
      children: x.default.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_DESCRIPTION
    }),
    buttons: (0, a.jsx)(R.default, {
      className: D.toolsButton,
      onClick: () => (0, f.default)({
        subscriptionTier: g.PremiumSubscriptionSKUs.TIER_1,
        analyticsLocations: e,
        analyticsObject: U
      }),
      children: x.default.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_CTA
    }),
    statusClasses: {
      [D.tier1]: !0
    }
  })
}
t.default = function(e) {
  var t, n;
  let {
    subscription: r,
    renewalInvoicePreview: p,
    paymentSource: y,
    busy: G,
    analyticsLocation: k
  } = e, {
    analyticsLocations: F
  } = (0, c.default)(d.default.SUBSCRIPTION_HEADER), {
    enabled: w
  } = (0, h.default)({
    location: "subscription_header"
  });
  (!g.PAUSE_ELIGIBLE_PLANS.has(r.planId) || !L.SubscriptionStatusTypesSets.ALL_PAUSEABLE.has(r.status)) && (w = !1);
  let Y = (0, A.usePremiumDiscountOffer)(),
    H = null == Y ? void 0 : null === (t = Y.discount) || void 0 === t ? void 0 : t.amount,
    W = (0, T.useHasDiscountApplied)(),
    K = (0, T.useActiveDiscountInfo)(),
    V = () => {
      (r.status === L.SubscriptionStatusTypes.ACTIVE || r.status === L.SubscriptionStatusTypes.PAST_DUE || r.status === L.SubscriptionStatusTypes.PAUSED) && X(M.Steps.PAUSE_SELECT)
    },
    z = () => {
      (r.status === L.SubscriptionStatusTypes.ACTIVE || r.status === L.SubscriptionStatusTypes.PAST_DUE || r.status === L.SubscriptionStatusTypes.PAUSE_PENDING) && X()
    },
    Z = () => {
      r.status === L.SubscriptionStatusTypes.BILLING_RETRY && X(M.Steps.CONFIRM)
    },
    X = e => {
      (0, u.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.resolve().then(s.bind(s, "833569"));
        return s => (0, a.jsx)(t, {
          ...s,
          premiumSubscription: r,
          analyticsLocation: k,
          analyticsLocations: F,
          initialStep: e
        })
      })
    },
    q = () => {
      if (null != r && null != r.planIdFromItems) {
        let e = m.default.get(r.planIdFromItems);
        if (null == e) {
          b.info("Plan not fetched for plan id: ".concat(r.planIdFromItems));
          return
        }
        let t = (0, P.getCurrencies)(e, null == y ? void 0 : y.id, !1),
          s = t.length > 0 ? t[0] : r.currency,
          a = !1;
        1 === t.length && (null == y ? void 0 : y.id) === r.paymentSourceId && (0, P.planHasCurrency)(e.id, s, null == y ? void 0 : y.id) && (a = !0), a ? o.resubscribe(r, F) : (0, f.default)({
          initialPlanId: r.planIdFromItems,
          analyticsLocations: F,
          analyticsLocation: k,
          analyticsObject: U,
          subscription: r
        })
      }
    },
    J = () => {
      if (!v.includes(r.status) || null == r.pauseEndsAt) {
        (0, I.captureBillingException)(Error("Invalid subscription to resume"), {
          extra: {
            subscriptionId: r.id,
            status: r.status,
            pauseEndsAt: r.pauseEndsAt
          }
        });
        return
      }
      r.status === L.SubscriptionStatusTypes.PAUSED ? (0, f.default)({
        initialPlanId: r.planIdFromItems,
        analyticsLocations: F,
        analyticsLocation: k,
        analyticsObject: U,
        subscription: r,
        skipConfirm: !0
      }) : o.resume(r, F)
    },
    Q = () => {
      r.status === L.SubscriptionStatusTypes.PAUSED && X(M.Steps.PAUSE_SELECT)
    },
    $ = () => {
      X(M.Steps.WHAT_YOU_LOSE)
    },
    ee = N.default.getPlanIdFromInvoice(r, p);
  if ((0, E.isNoneSubscription)(ee)) return null;
  let et = N.default.getStatusFromInvoice(r, p),
    es = N.default.getPremiumType(ee),
    ea = {
      [D.tier0]: es === g.PremiumTypes.TIER_0,
      [D.tier1]: es === g.PremiumTypes.TIER_1,
      [D.tier2]: es === g.PremiumTypes.TIER_2,
      [D.canceled]: et === L.SubscriptionStatusTypes.CANCELED,
      [D.pausePending]: et === L.SubscriptionStatusTypes.PAUSE_PENDING,
      [D.paused]: et === L.SubscriptionStatusTypes.PAUSED,
      [D.failedPayment]: (0, N.isSubscriptionStatusFailedPayment)(et)
    },
    en = null;
  switch (es) {
    case g.PremiumTypes.TIER_0:
      en = (0, a.jsxs)("div", {
        className: D.wordMark,
        children: [(0, a.jsx)(S.default, {
          className: D.discordWordmark,
          "aria-label": x.default.Messages.PREMIUM_TIER_0
        }), (0, a.jsx)("div", {
          className: D.basicWordmark
        })]
      });
      break;
    case g.PremiumTypes.TIER_1:
      en = (0, a.jsx)(j, {});
      break;
    case g.PremiumTypes.TIER_2:
      en = (0, a.jsx)(_.default, {
        className: D.planName,
        "aria-label": x.default.Messages.PREMIUM_TITLE
      })
  }
  let ei = v.includes(r.status) ? B : O;
  return (0, a.jsx)(ei, {
    wordMark: en,
    subscriptionInfo: (n = ee, l()(null != p, "Expected renewalInvoicePreview"), (0, a.jsx)("div", {
      className: D.planInfo,
      children: (0, N.getPlanDescriptionFromInvoice)({
        planId: n,
        subscription: r,
        renewalInvoicePreview: p,
        hasDiscountApplied: W,
        activeDiscountInfo: K
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
            className: i()(D.toolsButton, D.externalButton),
            size: u.Button.Sizes.SMALL,
            look: u.ButtonLooks.OUTLINED,
            color: u.ButtonColors.WHITE,
            submitting: G,
            children: x.default.Messages.BILLING_MANAGE_SUBSCRIPTION
          })
        })
      }
      if (N.default.isBaseSubscriptionCanceled(r)) return (0, a.jsx)(u.Button, {
        className: D.toolsButton,
        size: u.Button.Sizes.SMALL,
        color: u.ButtonColors.BRAND_INVERTED,
        submitting: G,
        onClick: q,
        children: x.default.Messages.RESUBSCRIBE
      });
      switch (e) {
        case L.SubscriptionStatusTypes.BILLING_RETRY:
          return (0, a.jsx)(u.Button, {
            className: D.billingRetryCancel,
            size: u.Button.Sizes.SMALL,
            color: u.ButtonColors.CUSTOM,
            submitting: G,
            onClick: Z,
            children: x.default.Messages.CANCEL
          });
        case L.SubscriptionStatusTypes.PAUSE_PENDING:
          return (0, a.jsxs)("div", {
            className: D.toolsButtons,
            children: [(0, a.jsx)(u.Button, {
              className: D.toolsButton,
              size: u.Button.Sizes.SMALL,
              look: u.ButtonLooks.LINK,
              color: u.ButtonColors.WHITE,
              submitting: G,
              onClick: z,
              children: x.default.Messages.PREMIUM_CANCEL_CONFIRM_BUTTON
            }), (0, a.jsx)(u.Button, {
              className: D.toolsButton,
              size: u.Button.Sizes.SMALL,
              color: u.ButtonColors.BRAND_INVERTED,
              submitting: G,
              onClick: J,
              children: x.default.Messages.CANCEL_PAUSE
            })]
          });
        case L.SubscriptionStatusTypes.PAUSED:
          let {
            durations: t
          } = (0, C.getSubscriptionPauseDurations)(r);
          return (0, a.jsxs)("div", {
            className: D.toolsButtons,
            children: [t.length > 0 ? (0, a.jsx)(u.Button, {
              className: D.linkButton,
              size: u.Button.Sizes.SMALL,
              look: u.ButtonLooks.LINK,
              color: u.ButtonColors.WHITE,
              submitting: G,
              onClick: Q,
              children: x.default.Messages.PREMIUM_CANCEL_OR_EXTEND_PAUSE_SUBSCRIPTION
            }) : (0, a.jsx)(u.Button, {
              className: D.linkButton,
              size: u.Button.Sizes.SMALL,
              look: u.ButtonLooks.LINK,
              color: u.ButtonColors.WHITE,
              submitting: G,
              onClick: $,
              children: x.default.Messages.PREMIUM_CANCEL_CONFIRM_BUTTON
            }), (0, a.jsx)(u.Button, {
              className: D.toolsButton,
              size: u.Button.Sizes.SMALL,
              color: u.ButtonColors.BRAND_INVERTED,
              submitting: G,
              onClick: J,
              children: x.default.Messages.RESUME
            })]
          });
        case L.SubscriptionStatusTypes.ACTIVE:
        case L.SubscriptionStatusTypes.PAST_DUE:
          let s = !1,
            n = null;
          return null != r.renewalMutations && (s = !0, n = r.renewalMutations.planId !== r.planId ? x.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PLAN : x.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION), null != r.trialEndsAt && (s = !0, n = x.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_IN_TRIAL), e === L.SubscriptionStatusTypes.PAST_DUE && (s = !0), (0, a.jsxs)("div", {
            className: D.toolsButtons,
            children: [w ? (0, a.jsx)(u.Button, {
              className: D.toolsButton,
              size: u.Button.Sizes.SMALL,
              look: u.ButtonLooks.LINK,
              color: u.ButtonColors.WHITE,
              submitting: G,
              onClick: V,
              children: x.default.Messages.PREMIUM_PAUSE_OR_CANCEL_SUBSCRIPTION
            }) : (0, a.jsx)(u.Button, {
              className: D.toolsButton,
              size: u.Button.Sizes.SMALL,
              look: u.ButtonLooks.LINK,
              color: u.ButtonColors.WHITE,
              submitting: G,
              onClick: z,
              children: x.default.Messages.CANCEL
            }), (0, a.jsx)(u.Tooltip, {
              text: n,
              children: e => (0, a.jsx)(R.default, {
                ...e,
                disabled: s,
                className: D.toolsButton,
                onClick: () => {
                  (0, f.default)({
                    analyticsLocations: F,
                    analyticsLocation: k,
                    analyticsObject: U,
                    subscription: r
                  })
                },
                children: x.default.Messages.PREMIUM_SWITCH_PLANS
              })
            })]
          })
      }
    })(),
    statusClasses: ea,
    shouldUseDiscountMarketing: W,
    discountAmount: H
  })
}