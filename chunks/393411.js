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
  u = s("481060"),
  o = s("366939"),
  d = s("100527"),
  c = s("906732"),
  p = s("710845"),
  m = s("963249"),
  f = s("301766"),
  E = s("509545"),
  _ = s("931331"),
  I = s("754347"),
  S = s("122289"),
  N = s("74538"),
  C = s("212895"),
  P = s("296848"),
  h = s("140465"),
  T = s("879463"),
  A = s("104494"),
  R = s("987997"),
  y = s("833569"),
  M = s("823188"),
  L = s("474936"),
  g = s("981631"),
  x = s("689938"),
  D = s("954282");
let b = new p.default("SubscriptionHeader.tsx"),
  U = {
    page: g.AnalyticsPages.USER_SETTINGS,
    section: g.AnalyticsSections.SETTINGS_PREMIUM,
    object: g.AnalyticsObjects.CARD
  },
  v = [g.SubscriptionStatusTypes.PAUSED, g.SubscriptionStatusTypes.PAUSE_PENDING, g.SubscriptionStatusTypes.BILLING_RETRY];

function B(e) {
  let {
    wordMark: t,
    subscriptionInfo: s,
    buttons: n,
    statusClasses: l,
    shouldUseDiscountMarketing: r,
    discountAmount: u
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
          children: [t, r && null != u && (0, a.jsx)(M.PremiumPillWithSparkles, {
            text: x.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
              percent: u
            }),
            className: D.discountPill,
            colorOptions: M.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL,
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

function O(e) {
  let {
    wordMark: t,
    subscriptionInfo: s,
    buttons: n,
    statusClasses: l,
    shouldUseDiscountMarketing: r,
    discountAmount: u
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
            children: [t, r && null != u && (0, a.jsx)(M.PremiumPillWithSparkles, {
              text: x.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                percent: u
              }),
              className: D.discountPill,
              colorOptions: M.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL,
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
    children: [(0, a.jsx)(I.default, {
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
  return (0, a.jsx)(B, {
    wordMark: (0, a.jsx)(j, {}),
    subscriptionInfo: (0, a.jsx)("div", {
      className: D.planInfo,
      children: x.default.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_DESCRIPTION
    }),
    buttons: (0, a.jsx)(R.default, {
      className: D.toolsButton,
      onClick: () => (0, m.default)({
        subscriptionTier: L.PremiumSubscriptionSKUs.TIER_1,
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
    paymentSource: M,
    busy: G,
    analyticsLocation: k
  } = e, {
    analyticsLocations: w
  } = (0, c.default)(d.default.SUBSCRIPTION_HEADER), {
    enabled: F
  } = (0, T.default)({
    location: "subscription_header"
  });
  (!L.PAUSE_ELIGIBLE_PLANS.has(l.planId) || !g.SubscriptionStatusTypesSets.ALL_PAUSEABLE.has(l.status)) && (F = !1);
  let Y = (0, A.usePremiumDiscountOffer)(),
    H = null == Y ? void 0 : null === (t = Y.discount) || void 0 === t ? void 0 : t.amount,
    W = (0, h.useHasDiscountApplied)(),
    V = (0, h.useActiveDiscountInfo)(),
    K = () => {
      (l.status === g.SubscriptionStatusTypes.ACTIVE || l.status === g.SubscriptionStatusTypes.PAST_DUE || l.status === g.SubscriptionStatusTypes.PAUSED) && Z(y.Steps.PAUSE_SELECT)
    },
    z = () => {
      (l.status === g.SubscriptionStatusTypes.ACTIVE || l.status === g.SubscriptionStatusTypes.PAST_DUE || l.status === g.SubscriptionStatusTypes.PAUSE_PENDING) && Z()
    },
    q = () => {
      l.status === g.SubscriptionStatusTypes.BILLING_RETRY && Z(y.Steps.CONFIRM)
    },
    Z = e => {
      (0, u.openModalLazy)(async () => {
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
        let t = (0, C.getCurrencies)(e, null == M ? void 0 : M.id, !1),
          s = t.length > 0 ? t[0] : l.currency,
          a = !1;
        1 === t.length && (null == M ? void 0 : M.id) === l.paymentSourceId && (0, C.planHasCurrency)(e.id, s, null == M ? void 0 : M.id) && (a = !0), a ? o.resubscribe(l, w) : (0, m.default)({
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
        (0, S.captureBillingException)(Error("Invalid subscription to resume"), {
          extra: {
            subscriptionId: l.id,
            status: l.status,
            pauseEndsAt: l.pauseEndsAt
          }
        });
        return
      }
      l.status === g.SubscriptionStatusTypes.PAUSED ? (0, m.default)({
        initialPlanId: l.planIdFromItems,
        analyticsLocations: w,
        analyticsLocation: k,
        analyticsObject: U,
        subscription: l,
        skipConfirm: !0
      }) : o.resume(l, w)
    },
    Q = () => {
      l.status === g.SubscriptionStatusTypes.PAUSED && Z(y.Steps.PAUSE_SELECT)
    },
    $ = () => {
      Z(y.Steps.WHAT_YOU_LOSE)
    },
    ee = N.default.getPlanIdFromInvoice(l, p);
  if ((0, f.isNoneSubscription)(ee)) return null;
  let et = N.default.getStatusFromInvoice(l, p),
    es = N.default.getPremiumType(ee),
    ea = {
      [D.tier0]: es === L.PremiumTypes.TIER_0,
      [D.tier1]: es === L.PremiumTypes.TIER_1,
      [D.tier2]: es === L.PremiumTypes.TIER_2,
      [D.canceled]: et === g.SubscriptionStatusTypes.CANCELED,
      [D.pausePending]: et === g.SubscriptionStatusTypes.PAUSE_PENDING,
      [D.paused]: et === g.SubscriptionStatusTypes.PAUSED,
      [D.failedPayment]: (0, N.isSubscriptionStatusFailedPayment)(et)
    },
    en = null;
  switch (es) {
    case L.PremiumTypes.TIER_0:
      en = (0, a.jsxs)("div", {
        className: D.wordMark,
        children: [(0, a.jsx)(I.default, {
          className: D.discordWordmark,
          "aria-label": x.default.Messages.PREMIUM_TIER_0
        }), (0, a.jsx)("div", {
          className: D.basicWordmark
        })]
      });
      break;
    case L.PremiumTypes.TIER_1:
      en = (0, a.jsx)(j, {});
      break;
    case L.PremiumTypes.TIER_2:
      en = (0, a.jsx)(_.default, {
        className: D.planName,
        "aria-label": x.default.Messages.PREMIUM_TITLE
      })
  }
  let ei = v.includes(l.status) ? O : B;
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
      if (N.default.isBaseSubscriptionCanceled(l)) return (0, a.jsx)(u.Button, {
        className: D.toolsButton,
        size: u.Button.Sizes.SMALL,
        color: u.ButtonColors.BRAND_INVERTED,
        submitting: G,
        onClick: X,
        children: x.default.Messages.RESUBSCRIBE
      });
      switch (e) {
        case g.SubscriptionStatusTypes.BILLING_RETRY:
          return (0, a.jsx)(u.Button, {
            className: D.billingRetryCancel,
            size: u.Button.Sizes.SMALL,
            color: u.ButtonColors.CUSTOM,
            submitting: G,
            onClick: q,
            children: x.default.Messages.CANCEL
          });
        case g.SubscriptionStatusTypes.PAUSE_PENDING:
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
        case g.SubscriptionStatusTypes.PAUSED:
          let {
            durations: t
          } = (0, P.getSubscriptionPauseDurations)(l);
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
        case g.SubscriptionStatusTypes.ACTIVE:
        case g.SubscriptionStatusTypes.PAST_DUE:
          let s = !1,
            n = null;
          return null != l.renewalMutations && (s = !0, n = l.renewalMutations.planId !== l.planId ? x.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PLAN : x.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION), null != l.trialEndsAt && (s = !0, n = x.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_IN_TRIAL), e === g.SubscriptionStatusTypes.PAST_DUE && (s = !0), (0, a.jsxs)("div", {
            className: D.toolsButtons,
            children: [F ? (0, a.jsx)(u.Button, {
              className: D.toolsButton,
              size: u.Button.Sizes.SMALL,
              look: u.ButtonLooks.LINK,
              color: u.ButtonColors.WHITE,
              submitting: G,
              onClick: K,
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
                  (0, m.default)({
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