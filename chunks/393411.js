t.d(s, {
  R: function() {
    return b
  }
}), t(411104);
var n = t(735250);
t(470079);
var a = t(120356),
  i = t.n(a),
  l = t(512722),
  r = t.n(l),
  o = t(481060),
  c = t(366939),
  u = t(100527),
  d = t(906732),
  E = t(710845),
  _ = t(963249),
  p = t(301766),
  I = t(509545),
  m = t(931331),
  N = t(754347),
  C = t(122289),
  h = t(74538),
  P = t(212895),
  T = t(296848),
  A = t(140465),
  R = t(879463),
  S = t(104494),
  M = t(987997),
  f = t(833569),
  g = t(823188),
  L = t(474936),
  x = t(981631),
  O = t(689938),
  D = t(827760);
let y = new E.Z("SubscriptionHeader.tsx"),
  U = {
    page: x.ZY5.USER_SETTINGS,
    section: x.jXE.SETTINGS_PREMIUM,
    object: x.qAy.CARD
  },
  Z = [x.O0b.PAUSED, x.O0b.PAUSE_PENDING, x.O0b.BILLING_RETRY];

function v(e) {
  let {
    wordMark: s,
    subscriptionInfo: t,
    buttons: a,
    statusClasses: l,
    shouldUseDiscountMarketing: r,
    discountAmount: o
  } = e;
  return (0, n.jsxs)("div", {
    className: i()(D.banner, l),
    children: [(0, n.jsx)("div", {
      className: D.bannerBackgroundImage
    }), (0, n.jsxs)("div", {
      className: D.detailsContainer,
      children: [(0, n.jsx)("div", {
        className: D.image
      }), (0, n.jsxs)("div", {
        className: D.details,
        children: [(0, n.jsxs)("div", {
          className: D.headerLabel,
          children: [s, r && null != o && (0, n.jsx)(g.Cy, {
            text: O.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
              percent: o
            }),
            className: D.discountPill,
            colorOptions: g.VE.PREMIUM_TIER_2_WHITE_FILL,
            isPillOnBorder: !1
          })]
        }), t]
      })]
    }), (0, n.jsx)("div", {
      className: D.buttons,
      children: a
    })]
  })
}

function B(e) {
  let {
    wordMark: s,
    subscriptionInfo: t,
    buttons: a,
    statusClasses: l,
    shouldUseDiscountMarketing: r,
    discountAmount: o
  } = e;
  return (0, n.jsxs)("div", {
    className: i()(D.banner, l, D.repositioned),
    children: [(0, n.jsx)("div", {
      className: D.bannerBackgroundImage
    }), (0, n.jsx)("div", {
      className: D.detailsContainer,
      children: (0, n.jsx)("div", {
        className: D.details,
        children: (0, n.jsxs)("div", {
          className: D.headerLabel,
          children: [(0, n.jsx)("div", {
            className: D.image
          }), (0, n.jsxs)("div", {
            className: D.headerColumnB,
            children: [s, r && null != o && (0, n.jsx)(g.Cy, {
              text: O.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                percent: o
              }),
              className: D.discountPill,
              colorOptions: g.VE.PREMIUM_TIER_2_WHITE_FILL,
              isPillOnBorder: !1
            }), t]
          })]
        })
      })
    }), (0, n.jsx)("div", {
      className: D.buttons,
      children: a
    })]
  })
}

function j() {
  return (0, n.jsxs)("div", {
    className: D.wordMark,
    children: [(0, n.jsx)(N.Z, {
      className: D.discordWordmark,
      "aria-label": O.Z.Messages.PREMIUM_TIER_1
    }), (0, n.jsx)("div", {
      className: D.classicWordmark
    })]
  })
}

function b() {
  let {
    analyticsLocations: e
  } = (0, d.ZP)(u.Z.ACCOUNT_CREDIT_BANNER);
  return (0, n.jsx)(v, {
    wordMark: (0, n.jsx)(j, {}),
    subscriptionInfo: (0, n.jsx)("div", {
      className: D.planInfo,
      children: O.Z.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_DESCRIPTION
    }),
    buttons: (0, n.jsx)(M.Z, {
      className: D.toolsButton,
      onClick: () => (0, _.Z)({
        subscriptionTier: L.Si.TIER_1,
        analyticsLocations: e,
        analyticsObject: U
      }),
      children: O.Z.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_CTA
    }),
    statusClasses: {
      [D.tier1]: !0
    }
  })
}
s.Z = function(e) {
  var s, a;
  let {
    subscription: l,
    renewalInvoicePreview: E,
    paymentSource: g,
    busy: b,
    analyticsLocation: G
  } = e, {
    analyticsLocations: k
  } = (0, d.ZP)(u.Z.SUBSCRIPTION_HEADER), {
    enabled: w
  } = (0, R.ZP)({
    location: "subscription_header"
  });
  (!L.pj.has(l.planId) || !x.JwP.ALL_PAUSEABLE.has(l.status)) && (w = !1);
  let Y = (0, S.Ng)(),
    F = null == Y ? void 0 : null === (s = Y.discount) || void 0 === s ? void 0 : s.amount,
    H = (0, A.t7)(),
    W = (0, A.lr)(),
    V = () => {
      if (l.status === x.O0b.ACTIVE || l.status === x.O0b.PAST_DUE || l.status === x.O0b.PAUSED) X(f.Steps.PAUSE_SELECT)
    },
    z = () => {
      if (l.status === x.O0b.ACTIVE || l.status === x.O0b.PAST_DUE || l.status === x.O0b.PAUSE_PENDING) X()
    },
    K = () => {
      if (l.status === x.O0b.BILLING_RETRY) X(f.Steps.CONFIRM)
    },
    X = e => {
      (0, o.openModalLazy)(async () => {
        let {
          default: s
        } = await Promise.resolve().then(t.bind(t, 833569));
        return t => (0, n.jsx)(s, {
          ...t,
          premiumSubscription: l,
          analyticsLocation: G,
          analyticsLocations: k,
          initialStep: e
        })
      })
    },
    q = () => {
      if (null != l && null != l.planIdFromItems) {
        let e = I.Z.get(l.planIdFromItems);
        if (null == e) {
          y.info("Plan not fetched for plan id: ".concat(l.planIdFromItems));
          return
        }
        let s = (0, P.DE)(e, null == g ? void 0 : g.id, !1),
          t = s.length > 0 ? s[0] : l.currency,
          n = !1;
        1 === s.length && (null == g ? void 0 : g.id) === l.paymentSourceId && (0, P.tD)(e.id, t, null == g ? void 0 : g.id) && (n = !0), n ? c.O5(l, k) : (0, _.Z)({
          initialPlanId: l.planIdFromItems,
          analyticsLocations: k,
          analyticsLocation: G,
          analyticsObject: U,
          subscription: l
        })
      }
    },
    Q = () => {
      if (!Z.includes(l.status) || null == l.pauseEndsAt) {
        (0, C.q2)(Error("Invalid subscription to resume"), {
          extra: {
            subscriptionId: l.id,
            status: l.status,
            pauseEndsAt: l.pauseEndsAt
          }
        });
        return
      }
      l.status === x.O0b.PAUSED ? (0, _.Z)({
        initialPlanId: l.planIdFromItems,
        analyticsLocations: k,
        analyticsLocation: G,
        analyticsObject: U,
        subscription: l,
        skipConfirm: !0
      }) : c.v4(l, k)
    },
    J = () => {
      if (l.status === x.O0b.PAUSED) X(f.Steps.PAUSE_SELECT)
    },
    $ = () => {
      X(f.Steps.WHAT_YOU_LOSE)
    },
    ee = h.ZP.getPlanIdFromInvoice(l, E);
  if ((0, p.Q0)(ee)) return null;
  let es = h.ZP.getStatusFromInvoice(l, E),
    et = h.ZP.getPremiumType(ee),
    en = {
      [D.tier0]: et === L.p9.TIER_0,
      [D.tier1]: et === L.p9.TIER_1,
      [D.tier2]: et === L.p9.TIER_2,
      [D.canceled]: es === x.O0b.CANCELED,
      [D.pausePending]: es === x.O0b.PAUSE_PENDING,
      [D.paused]: es === x.O0b.PAUSED,
      [D.failedPayment]: (0, h.zV)(es)
    },
    ea = null;
  switch (et) {
    case L.p9.TIER_0:
      ea = (0, n.jsxs)("div", {
        className: D.wordMark,
        children: [(0, n.jsx)(N.Z, {
          className: D.discordWordmark,
          "aria-label": O.Z.Messages.PREMIUM_TIER_0
        }), (0, n.jsx)("div", {
          className: D.basicWordmark
        })]
      });
      break;
    case L.p9.TIER_1:
      ea = (0, n.jsx)(j, {});
      break;
    case L.p9.TIER_2:
      ea = (0, n.jsx)(m.Z, {
        className: D.planName,
        "aria-label": O.Z.Messages.PREMIUM_TITLE
      })
  }
  let ei = Z.includes(l.status) ? B : v;
  return (0, n.jsx)(ei, {
    wordMark: ea,
    subscriptionInfo: (a = ee, r()(null != E, "Expected renewalInvoicePreview"), (0, n.jsx)("div", {
      className: D.planInfo,
      children: (0, h.qV)({
        planId: a,
        subscription: l,
        renewalInvoicePreview: E,
        hasDiscountApplied: H,
        activeDiscountInfo: W
      })
    })),
    buttons: (() => {
      let {
        status: e
      } = l;
      if (l.isPurchasedExternally) {
        let e = (0, h.JE)(l.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
        return (0, n.jsx)(o.Anchor, {
          href: e,
          useDefaultUnderlineStyles: !1,
          children: (0, n.jsx)(o.Button, {
            className: i()(D.toolsButton, D.externalButton),
            size: o.Button.Sizes.SMALL,
            look: o.ButtonLooks.OUTLINED,
            color: o.ButtonColors.WHITE,
            submitting: b,
            children: O.Z.Messages.BILLING_MANAGE_SUBSCRIPTION
          })
        })
      }
      if (h.ZP.isBaseSubscriptionCanceled(l)) return (0, n.jsx)(o.Button, {
        className: D.toolsButton,
        size: o.Button.Sizes.SMALL,
        color: o.ButtonColors.BRAND_INVERTED,
        submitting: b,
        onClick: q,
        children: O.Z.Messages.RESUBSCRIBE
      });
      switch (e) {
        case x.O0b.BILLING_RETRY:
          return (0, n.jsx)(o.Button, {
            className: D.billingRetryCancel,
            size: o.Button.Sizes.SMALL,
            color: o.ButtonColors.CUSTOM,
            submitting: b,
            onClick: K,
            children: O.Z.Messages.CANCEL
          });
        case x.O0b.PAUSE_PENDING:
          return (0, n.jsxs)("div", {
            className: D.toolsButtons,
            children: [(0, n.jsx)(o.Button, {
              className: D.toolsButton,
              size: o.Button.Sizes.SMALL,
              look: o.ButtonLooks.LINK,
              color: o.ButtonColors.WHITE,
              submitting: b,
              onClick: z,
              children: O.Z.Messages.PREMIUM_CANCEL_CONFIRM_BUTTON
            }), (0, n.jsx)(o.Button, {
              className: D.toolsButton,
              size: o.Button.Sizes.SMALL,
              color: o.ButtonColors.BRAND_INVERTED,
              submitting: b,
              onClick: Q,
              children: O.Z.Messages.CANCEL_PAUSE
            })]
          });
        case x.O0b.PAUSED:
          let {
            durations: s
          } = (0, T.AT)(l);
          return (0, n.jsxs)("div", {
            className: D.toolsButtons,
            children: [s.length > 0 ? (0, n.jsx)(o.Button, {
              className: D.linkButton,
              size: o.Button.Sizes.SMALL,
              look: o.ButtonLooks.LINK,
              color: o.ButtonColors.WHITE,
              submitting: b,
              onClick: J,
              children: O.Z.Messages.PREMIUM_CANCEL_OR_EXTEND_PAUSE_SUBSCRIPTION
            }) : (0, n.jsx)(o.Button, {
              className: D.linkButton,
              size: o.Button.Sizes.SMALL,
              look: o.ButtonLooks.LINK,
              color: o.ButtonColors.WHITE,
              submitting: b,
              onClick: $,
              children: O.Z.Messages.PREMIUM_CANCEL_CONFIRM_BUTTON
            }), (0, n.jsx)(o.Button, {
              className: D.toolsButton,
              size: o.Button.Sizes.SMALL,
              color: o.ButtonColors.BRAND_INVERTED,
              submitting: b,
              onClick: Q,
              children: O.Z.Messages.RESUME
            })]
          });
        case x.O0b.ACTIVE:
        case x.O0b.PAST_DUE:
          let t = !1,
            a = null;
          return null != l.renewalMutations && (t = !0, a = l.renewalMutations.planId !== l.planId ? O.Z.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PLAN : O.Z.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION), null != l.trialEndsAt && (t = !0, a = O.Z.Messages.PREMIUM_SWITCH_PLAN_DISABLED_IN_TRIAL), e === x.O0b.PAST_DUE && (t = !0), (0, n.jsxs)("div", {
            className: D.toolsButtons,
            children: [w ? (0, n.jsx)(o.Button, {
              className: D.toolsButton,
              size: o.Button.Sizes.SMALL,
              look: o.ButtonLooks.LINK,
              color: o.ButtonColors.WHITE,
              submitting: b,
              onClick: V,
              children: O.Z.Messages.PREMIUM_PAUSE_OR_CANCEL_SUBSCRIPTION
            }) : (0, n.jsx)(o.Button, {
              className: D.toolsButton,
              size: o.Button.Sizes.SMALL,
              look: o.ButtonLooks.LINK,
              color: o.ButtonColors.WHITE,
              submitting: b,
              onClick: z,
              children: O.Z.Messages.CANCEL
            }), (0, n.jsx)(o.Tooltip, {
              text: a,
              children: e => (0, n.jsx)(M.Z, {
                ...e,
                disabled: t,
                className: D.toolsButton,
                onClick: () => {
                  (0, _.Z)({
                    analyticsLocations: k,
                    analyticsLocation: G,
                    analyticsObject: U,
                    subscription: l
                  })
                },
                children: O.Z.Messages.PREMIUM_SWITCH_PLANS
              })
            })]
          })
      }
    })(),
    statusClasses: en,
    shouldUseDiscountMarketing: H,
    discountAmount: F
  })
}