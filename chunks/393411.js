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
  l = s("512722"),
  r = s.n(l),
  o = s("481060"),
  u = s("366939"),
  d = s("100527"),
  c = s("906732"),
  p = s("710845"),
  f = s("963249"),
  m = s("301766"),
  E = s("509545"),
  _ = s("931331"),
  S = s("754347"),
  I = s("122289"),
  N = s("74538"),
  P = s("212895"),
  C = s("296848"),
  h = s("140465"),
  T = s("879463"),
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
    statusClasses: l,
    shouldUseDiscountMarketing: r,
    discountAmount: o
  } = e;
  return (0, a.jsxs)("div", {
    className: i()(D.banner, l),
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
          children: [t, r && null != o && (0, a.jsx)(y.PremiumPillWithSparkles, {
            text: x.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
              percent: o
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
    statusClasses: l,
    shouldUseDiscountMarketing: r,
    discountAmount: o
  } = e;
  return (0, a.jsxs)("div", {
    className: i()(D.banner, l, D.repositioned),
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
            children: [t, r && null != o && (0, a.jsx)(y.PremiumPillWithSparkles, {
              text: x.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                percent: o
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
    subscription: l,
    renewalInvoicePreview: p,
    paymentSource: y,
    busy: G,
    analyticsLocation: k
  } = e, {
    analyticsLocations: w
  } = (0, c.default)(d.default.SUBSCRIPTION_HEADER), {
    enabled: F
  } = (0, T.default)({
    location: "subscription_header"
  });
  (!g.PAUSE_ELIGIBLE_PLANS.has(l.planId) || !L.SubscriptionStatusTypesSets.ALL_PAUSEABLE.has(l.status)) && (F = !1);
  let Y = (0, A.usePremiumDiscountOffer)(),
    H = null == Y ? void 0 : null === (t = Y.discount) || void 0 === t ? void 0 : t.amount,
    W = (0, h.useHasDiscountApplied)(),
    V = (0, h.useActiveDiscountInfo)(),
    K = () => {
      (l.status === L.SubscriptionStatusTypes.ACTIVE || l.status === L.SubscriptionStatusTypes.PAST_DUE || l.status === L.SubscriptionStatusTypes.PAUSED) && q(M.Steps.PAUSE_SELECT)
    },
    z = () => {
      (l.status === L.SubscriptionStatusTypes.ACTIVE || l.status === L.SubscriptionStatusTypes.PAST_DUE || l.status === L.SubscriptionStatusTypes.PAUSE_PENDING) && q()
    },
    Z = () => {
      l.status === L.SubscriptionStatusTypes.BILLING_RETRY && q(M.Steps.CONFIRM)
    },
    q = e => {
      (0, o.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.resolve().then(s.bind(s, "833569"));
        return s => (0, a.jsx)(t, {
          ...s,
          premiumSubscription: l,
          analyticsLocation: k,
          analyticsLocations: w,
          initialStep: e
        })
      })
    },
    X = () => {
      if (null != l && null != l.planIdFromItems) {
        let e = E.default.get(l.planIdFromItems);
        if (null == e) {
          b.info("Plan not fetched for plan id: ".concat(l.planIdFromItems));
          return
        }
        let t = (0, P.getCurrencies)(e, null == y ? void 0 : y.id, !1),
          s = t.length > 0 ? t[0] : l.currency,
          a = !1;
        1 === t.length && (null == y ? void 0 : y.id) === l.paymentSourceId && (0, P.planHasCurrency)(e.id, s, null == y ? void 0 : y.id) && (a = !0), a ? u.resubscribe(l, w) : (0, f.default)({
          initialPlanId: l.planIdFromItems,
          analyticsLocations: w,
          analyticsLocation: k,
          analyticsObject: U,
          subscription: l
        })
      }
    },
    J = () => {
      if (!v.includes(l.status) || null == l.pauseEndsAt) {
        (0, I.captureBillingException)(Error("Invalid subscription to resume"), {
          extra: {
            subscriptionId: l.id,
            status: l.status,
            pauseEndsAt: l.pauseEndsAt
          }
        });
        return
      }
      l.status === L.SubscriptionStatusTypes.PAUSED ? (0, f.default)({
        initialPlanId: l.planIdFromItems,
        analyticsLocations: w,
        analyticsLocation: k,
        analyticsObject: U,
        subscription: l,
        skipConfirm: !0
      }) : u.resume(l, w)
    },
    Q = () => {
      l.status === L.SubscriptionStatusTypes.PAUSED && q(M.Steps.PAUSE_SELECT)
    },
    $ = () => {
      q(M.Steps.WHAT_YOU_LOSE)
    },
    ee = N.default.getPlanIdFromInvoice(l, p);
  if ((0, m.isNoneSubscription)(ee)) return null;
  let et = N.default.getStatusFromInvoice(l, p),
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
  let ei = v.includes(l.status) ? B : O;
  return (0, a.jsx)(ei, {
    wordMark: en,
    subscriptionInfo: (n = ee, r()(null != p, "Expected renewalInvoicePreview"), (0, a.jsx)("div", {
      className: D.planInfo,
      children: (0, N.getPlanDescriptionFromInvoice)({
        planId: n,
        subscription: l,
        renewalInvoicePreview: p,
        hasDiscountApplied: W,
        activeDiscountInfo: V
      })
    })),
    buttons: (() => {
      let {
        status: e
      } = l;
      if (l.isPurchasedExternally) {
        let e = (0, N.getExternalSubscriptionMethodUrl)(l.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
        return (0, a.jsx)(o.Anchor, {
          href: e,
          useDefaultUnderlineStyles: !1,
          children: (0, a.jsx)(o.Button, {
            className: i()(D.toolsButton, D.externalButton),
            size: o.Button.Sizes.SMALL,
            look: o.ButtonLooks.OUTLINED,
            color: o.ButtonColors.WHITE,
            submitting: G,
            children: x.default.Messages.BILLING_MANAGE_SUBSCRIPTION
          })
        })
      }
      if (N.default.isBaseSubscriptionCanceled(l)) return (0, a.jsx)(o.Button, {
        className: D.toolsButton,
        size: o.Button.Sizes.SMALL,
        color: o.ButtonColors.BRAND_INVERTED,
        submitting: G,
        onClick: X,
        children: x.default.Messages.RESUBSCRIBE
      });
      switch (e) {
        case L.SubscriptionStatusTypes.BILLING_RETRY:
          return (0, a.jsx)(o.Button, {
            className: D.billingRetryCancel,
            size: o.Button.Sizes.SMALL,
            color: o.ButtonColors.CUSTOM,
            submitting: G,
            onClick: Z,
            children: x.default.Messages.CANCEL
          });
        case L.SubscriptionStatusTypes.PAUSE_PENDING:
          return (0, a.jsxs)("div", {
            className: D.toolsButtons,
            children: [(0, a.jsx)(o.Button, {
              className: D.toolsButton,
              size: o.Button.Sizes.SMALL,
              look: o.ButtonLooks.LINK,
              color: o.ButtonColors.WHITE,
              submitting: G,
              onClick: z,
              children: x.default.Messages.PREMIUM_CANCEL_CONFIRM_BUTTON
            }), (0, a.jsx)(o.Button, {
              className: D.toolsButton,
              size: o.Button.Sizes.SMALL,
              color: o.ButtonColors.BRAND_INVERTED,
              submitting: G,
              onClick: J,
              children: x.default.Messages.CANCEL_PAUSE
            })]
          });
        case L.SubscriptionStatusTypes.PAUSED:
          let {
            durations: t
          } = (0, C.getSubscriptionPauseDurations)(l);
          return (0, a.jsxs)("div", {
            className: D.toolsButtons,
            children: [t.length > 0 ? (0, a.jsx)(o.Button, {
              className: D.linkButton,
              size: o.Button.Sizes.SMALL,
              look: o.ButtonLooks.LINK,
              color: o.ButtonColors.WHITE,
              submitting: G,
              onClick: Q,
              children: x.default.Messages.PREMIUM_CANCEL_OR_EXTEND_PAUSE_SUBSCRIPTION
            }) : (0, a.jsx)(o.Button, {
              className: D.linkButton,
              size: o.Button.Sizes.SMALL,
              look: o.ButtonLooks.LINK,
              color: o.ButtonColors.WHITE,
              submitting: G,
              onClick: $,
              children: x.default.Messages.PREMIUM_CANCEL_CONFIRM_BUTTON
            }), (0, a.jsx)(o.Button, {
              className: D.toolsButton,
              size: o.Button.Sizes.SMALL,
              color: o.ButtonColors.BRAND_INVERTED,
              submitting: G,
              onClick: J,
              children: x.default.Messages.RESUME
            })]
          });
        case L.SubscriptionStatusTypes.ACTIVE:
        case L.SubscriptionStatusTypes.PAST_DUE:
          let s = !1,
            n = null;
          return null != l.renewalMutations && (s = !0, n = l.renewalMutations.planId !== l.planId ? x.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PLAN : x.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION), null != l.trialEndsAt && (s = !0, n = x.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_IN_TRIAL), e === L.SubscriptionStatusTypes.PAST_DUE && (s = !0), (0, a.jsxs)("div", {
            className: D.toolsButtons,
            children: [F ? (0, a.jsx)(o.Button, {
              className: D.toolsButton,
              size: o.Button.Sizes.SMALL,
              look: o.ButtonLooks.LINK,
              color: o.ButtonColors.WHITE,
              submitting: G,
              onClick: K,
              children: x.default.Messages.PREMIUM_PAUSE_OR_CANCEL_SUBSCRIPTION
            }) : (0, a.jsx)(o.Button, {
              className: D.toolsButton,
              size: o.Button.Sizes.SMALL,
              look: o.ButtonLooks.LINK,
              color: o.ButtonColors.WHITE,
              submitting: G,
              onClick: z,
              children: x.default.Messages.CANCEL
            }), (0, a.jsx)(o.Tooltip, {
              text: n,
              children: e => (0, a.jsx)(R.default, {
                ...e,
                disabled: s,
                className: D.toolsButton,
                onClick: () => {
                  (0, f.default)({
                    analyticsLocations: w,
                    analyticsLocation: k,
                    analyticsObject: U,
                    subscription: l
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