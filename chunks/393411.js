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
  y = s("833569"),
  M = s("823188"),
  L = s("474936"),
  g = s("981631"),
  x = s("689938"),
  D = s("131537");
let U = new p.default("SubscriptionHeader.tsx"),
  b = {
    page: g.AnalyticsPages.USER_SETTINGS,
    section: g.AnalyticsSections.SETTINGS_PREMIUM,
    object: g.AnalyticsObjects.CARD
  },
  O = [g.SubscriptionStatusTypes.PAUSED, g.SubscriptionStatusTypes.PAUSE_PENDING, g.SubscriptionStatusTypes.BILLING_RETRY];

function v(e) {
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
          children: [t, r && null != o && (0, a.jsx)(M.PremiumPillWithSparkles, {
            text: x.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
              percent: o
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
            children: [t, r && null != o && (0, a.jsx)(M.PremiumPillWithSparkles, {
              text: x.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                percent: o
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
  return (0, a.jsx)(v, {
    wordMark: (0, a.jsx)(j, {}),
    subscriptionInfo: (0, a.jsx)("div", {
      className: D.planInfo,
      children: x.default.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_DESCRIPTION
    }),
    buttons: (0, a.jsx)(R.default, {
      className: D.toolsButton,
      onClick: () => (0, f.default)({
        subscriptionTier: L.PremiumSubscriptionSKUs.TIER_1,
        analyticsLocations: e,
        analyticsObject: b
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
    analyticsLocations: F
  } = (0, c.default)(d.default.SUBSCRIPTION_HEADER), {
    enabled: w
  } = (0, h.default)({
    location: "subscription_header"
  });
  (!L.PAUSE_ELIGIBLE_PLANS.has(l.planId) || !g.SubscriptionStatusTypesSets.ALL_PAUSEABLE.has(l.status)) && (w = !1);
  let Y = (0, A.usePremiumDiscountOffer)(),
    H = null == Y ? void 0 : null === (t = Y.discount) || void 0 === t ? void 0 : t.amount,
    W = (0, T.useHasDiscountApplied)(),
    V = (0, T.useActiveDiscountInfo)(),
    K = () => {
      (l.status === g.SubscriptionStatusTypes.ACTIVE || l.status === g.SubscriptionStatusTypes.PAST_DUE || l.status === g.SubscriptionStatusTypes.PAUSED) && Z(y.Steps.PAUSE_SELECT)
    },
    z = () => {
      (l.status === g.SubscriptionStatusTypes.ACTIVE || l.status === g.SubscriptionStatusTypes.PAST_DUE || l.status === g.SubscriptionStatusTypes.PAUSE_PENDING) && Z()
    },
    Z = e => {
      (0, o.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.resolve().then(s.bind(s, "833569"));
        return s => (0, a.jsx)(t, {
          ...s,
          premiumSubscription: l,
          analyticsLocation: k,
          analyticsLocations: F,
          initialStep: e
        })
      })
    },
    q = () => {
      if (null != l && null != l.planIdFromItems) {
        let e = m.default.get(l.planIdFromItems);
        if (null == e) {
          U.info("Plan not fetched for plan id: ".concat(l.planIdFromItems));
          return
        }
        let t = (0, P.getCurrencies)(e, null == M ? void 0 : M.id, !1),
          s = t.length > 0 ? t[0] : l.currency,
          a = !1;
        1 === t.length && (null == M ? void 0 : M.id) === l.paymentSourceId && (0, P.planHasCurrency)(e.id, s, null == M ? void 0 : M.id) && (a = !0), a ? u.resubscribe(l, F) : (0, f.default)({
          initialPlanId: l.planIdFromItems,
          analyticsLocations: F,
          analyticsLocation: k,
          analyticsObject: b,
          subscription: l
        })
      }
    },
    X = () => {
      if (!O.includes(l.status) || null == l.pauseEndsAt) {
        (0, I.captureBillingException)(Error("Invalid subscription to resume"), {
          extra: {
            subscriptionId: l.id,
            status: l.status,
            pauseEndsAt: l.pauseEndsAt
          }
        });
        return
      }
      l.status === g.SubscriptionStatusTypes.PAUSED ? (0, f.default)({
        initialPlanId: l.planIdFromItems,
        analyticsLocations: F,
        analyticsLocation: k,
        analyticsObject: b,
        subscription: l,
        skipConfirm: !0
      }) : u.resume(l, F)
    },
    J = () => {
      l.status === g.SubscriptionStatusTypes.PAUSED && Z(y.Steps.PAUSE_SELECT)
    },
    Q = () => {
      Z(y.Steps.WHAT_YOU_LOSE)
    },
    $ = N.default.getPlanIdFromInvoice(l, p);
  if ((0, E.isNoneSubscription)($)) return null;
  let ee = N.default.getStatusFromInvoice(l, p),
    et = N.default.getPremiumType($),
    es = {
      [D.tier0]: et === L.PremiumTypes.TIER_0,
      [D.tier1]: et === L.PremiumTypes.TIER_1,
      [D.tier2]: et === L.PremiumTypes.TIER_2,
      [D.canceled]: ee === g.SubscriptionStatusTypes.CANCELED,
      [D.pausePending]: ee === g.SubscriptionStatusTypes.PAUSE_PENDING,
      [D.paused]: ee === g.SubscriptionStatusTypes.PAUSED,
      [D.failedPayment]: (0, N.isSubscriptionStatusFailedPayment)(ee)
    },
    ea = null;
  switch (et) {
    case L.PremiumTypes.TIER_0:
      ea = (0, a.jsxs)("div", {
        className: D.wordMark,
        children: [(0, a.jsx)(S.default, {
          className: D.discordWordmark,
          "aria-label": x.default.Messages.PREMIUM_TIER_0
        }), (0, a.jsx)("div", {
          className: D.basicWordmark
        })]
      });
      break;
    case L.PremiumTypes.TIER_1:
      ea = (0, a.jsx)(j, {});
      break;
    case L.PremiumTypes.TIER_2:
      ea = (0, a.jsx)(_.default, {
        className: D.planName,
        "aria-label": x.default.Messages.PREMIUM_TITLE
      })
  }
  let en = O.includes(l.status) ? B : v;
  return (0, a.jsx)(en, {
    wordMark: ea,
    subscriptionInfo: (n = $, r()(null != p, "Expected renewalInvoicePreview"), (0, a.jsx)("div", {
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
        look: o.ButtonLooks.INVERTED,
        color: o.ButtonColors.BRAND,
        submitting: G,
        onClick: q,
        children: x.default.Messages.RESUBSCRIBE
      });
      if (e === g.SubscriptionStatusTypes.PAUSE_PENDING) return (0, a.jsxs)("div", {
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
          look: o.ButtonLooks.INVERTED,
          color: o.ButtonColors.BRAND,
          submitting: G,
          onClick: X,
          children: x.default.Messages.CANCEL_PAUSE
        })]
      });
      if (e === g.SubscriptionStatusTypes.PAUSED) {
        let {
          durations: e
        } = (0, C.getSubscriptionPauseDurations)(l);
        return (0, a.jsxs)("div", {
          className: D.toolsButtons,
          children: [e.length > 0 ? (0, a.jsx)(o.Button, {
            className: D.linkButton,
            size: o.Button.Sizes.SMALL,
            look: o.ButtonLooks.LINK,
            color: o.ButtonColors.WHITE,
            submitting: G,
            onClick: J,
            children: x.default.Messages.PREMIUM_CANCEL_OR_EXTEND_PAUSE_SUBSCRIPTION
          }) : (0, a.jsx)(o.Button, {
            className: D.linkButton,
            size: o.Button.Sizes.SMALL,
            look: o.ButtonLooks.LINK,
            color: o.ButtonColors.WHITE,
            submitting: G,
            onClick: Q,
            children: x.default.Messages.PREMIUM_CANCEL_CONFIRM_BUTTON
          }), (0, a.jsx)(o.Button, {
            className: D.toolsButton,
            size: o.Button.Sizes.SMALL,
            look: o.ButtonLooks.INVERTED,
            color: o.ButtonColors.BRAND,
            submitting: G,
            onClick: X,
            children: x.default.Messages.RESUME
          })]
        })
      }
      if (e === g.SubscriptionStatusTypes.ACTIVE || e === g.SubscriptionStatusTypes.PAST_DUE) {
        let t = !1,
          s = null;
        return null != l.renewalMutations && (t = !0, s = l.renewalMutations.planId !== l.planId ? x.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PLAN : x.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION), null != l.trialEndsAt && (t = !0, s = x.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_IN_TRIAL), e === g.SubscriptionStatusTypes.PAST_DUE && (t = !0), (0, a.jsxs)("div", {
          className: D.toolsButtons,
          children: [w ? (0, a.jsx)(o.Button, {
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
            text: s,
            children: e => (0, a.jsx)(R.default, {
              ...e,
              disabled: t,
              className: D.toolsButton,
              onClick: () => {
                (0, f.default)({
                  analyticsLocations: F,
                  analyticsLocation: k,
                  analyticsObject: b,
                  subscription: l
                })
              },
              children: x.default.Messages.PREMIUM_SWITCH_PLANS
            })
          })]
        })
      }
    })(),
    statusClasses: es,
    shouldUseDiscountMarketing: W,
    discountAmount: H
  })
}