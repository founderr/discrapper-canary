n.d(t, {
  R: function() {
    return j
  }
}), n(411104);
var s = n(735250);
n(470079);
var a = n(120356),
  i = n.n(a),
  o = n(512722),
  r = n.n(o),
  l = n(481060),
  c = n(366939),
  d = n(100527),
  u = n(906732),
  _ = n(710845),
  p = n(963249),
  m = n(301766),
  f = n(509545),
  E = n(931331),
  I = n(754347),
  C = n(122289),
  h = n(74538),
  N = n(212895),
  P = n(296848),
  g = n(140465),
  T = n(879463),
  S = n(104494),
  R = n(987997),
  A = n(833569),
  b = n(823188),
  x = n(474936),
  M = n(981631),
  L = n(689938),
  y = n(827760);
let B = new _.Z("SubscriptionHeader.tsx"),
  D = {
    page: M.ZY5.USER_SETTINGS,
    section: M.jXE.SETTINGS_PREMIUM,
    object: M.qAy.CARD
  },
  O = [M.O0b.PAUSED, M.O0b.PAUSE_PENDING, M.O0b.BILLING_RETRY];

function v(e) {
  let {
    wordMark: t,
    subscriptionInfo: n,
    buttons: a,
    statusClasses: o,
    shouldUseDiscountMarketing: r,
    discountAmount: l
  } = e;
  return (0, s.jsxs)("div", {
    className: i()(y.banner, o),
    children: [(0, s.jsx)("div", {
      className: y.bannerBackgroundImage
    }), (0, s.jsxs)("div", {
      className: y.detailsContainer,
      children: [(0, s.jsx)("div", {
        className: y.image
      }), (0, s.jsxs)("div", {
        className: y.details,
        children: [(0, s.jsxs)("div", {
          className: y.headerLabel,
          children: [t, r && null != l && (0, s.jsx)(b.Cy, {
            text: L.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
              percent: l
            }),
            className: y.discountPill,
            colorOptions: b.VE.PREMIUM_TIER_2_WHITE_FILL,
            isPillOnBorder: !1
          })]
        }), n]
      })]
    }), (0, s.jsx)("div", {
      className: y.buttons,
      children: a
    })]
  })
}

function U(e) {
  let {
    wordMark: t,
    subscriptionInfo: n,
    buttons: a,
    statusClasses: o,
    shouldUseDiscountMarketing: r,
    discountAmount: l
  } = e;
  return (0, s.jsxs)("div", {
    className: i()(y.banner, o, y.repositioned),
    children: [(0, s.jsx)("div", {
      className: y.bannerBackgroundImage
    }), (0, s.jsx)("div", {
      className: y.detailsContainer,
      children: (0, s.jsx)("div", {
        className: y.details,
        children: (0, s.jsxs)("div", {
          className: y.headerLabel,
          children: [(0, s.jsx)("div", {
            className: y.image
          }), (0, s.jsxs)("div", {
            className: y.headerColumnB,
            children: [t, r && null != l && (0, s.jsx)(b.Cy, {
              text: L.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                percent: l
              }),
              className: y.discountPill,
              colorOptions: b.VE.PREMIUM_TIER_2_WHITE_FILL,
              isPillOnBorder: !1
            }), n]
          })]
        })
      })
    }), (0, s.jsx)("div", {
      className: y.buttons,
      children: a
    })]
  })
}

function Z() {
  return (0, s.jsxs)("div", {
    className: y.wordMark,
    children: [(0, s.jsx)(I.Z, {
      className: y.discordWordmark,
      "aria-label": L.Z.Messages.PREMIUM_TIER_1
    }), (0, s.jsx)("div", {
      className: y.classicWordmark
    })]
  })
}

function j() {
  let {
    analyticsLocations: e
  } = (0, u.ZP)(d.Z.ACCOUNT_CREDIT_BANNER);
  return (0, s.jsx)(v, {
    wordMark: (0, s.jsx)(Z, {}),
    subscriptionInfo: (0, s.jsx)("div", {
      className: y.planInfo,
      children: L.Z.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_DESCRIPTION
    }),
    buttons: (0, s.jsx)(R.Z, {
      className: y.toolsButton,
      onClick: () => (0, p.Z)({
        subscriptionTier: x.Si.TIER_1,
        analyticsLocations: e,
        analyticsObject: D
      }),
      children: L.Z.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_CTA
    }),
    statusClasses: {
      [y.tier1]: !0
    }
  })
}
t.Z = function(e) {
  var t, a;
  let {
    subscription: o,
    renewalInvoicePreview: _,
    paymentSource: b,
    busy: j,
    analyticsLocation: w
  } = e, {
    analyticsLocations: k
  } = (0, u.ZP)(d.Z.SUBSCRIPTION_HEADER), {
    enabled: G
  } = (0, T.ZP)({
    location: "subscription_header"
  });
  (!x.pj.has(o.planId) || !M.JwP.ALL_PAUSEABLE.has(o.status)) && (G = !1);
  let F = (0, S.Ng)(),
    Y = null == F ? void 0 : null === (t = F.discount) || void 0 === t ? void 0 : t.amount,
    H = (0, g.t7)(),
    W = (0, g.lr)(),
    V = () => {
      if (o.status === M.O0b.ACTIVE || o.status === M.O0b.PAST_DUE || o.status === M.O0b.PAUSED) q(A.Steps.PAUSE_SELECT)
    },
    z = () => {
      if (o.status === M.O0b.ACTIVE || o.status === M.O0b.PAST_DUE || o.status === M.O0b.PAUSE_PENDING) q()
    },
    K = () => {
      if (o.status === M.O0b.BILLING_RETRY) q(A.Steps.CONFIRM)
    },
    q = e => {
      (0, l.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.resolve().then(n.bind(n, 833569));
        return n => (0, s.jsx)(t, {
          ...n,
          premiumSubscription: o,
          analyticsLocation: w,
          analyticsLocations: k,
          initialStep: e
        })
      })
    },
    X = () => {
      if (null != o && null != o.planIdFromItems) {
        let e = f.Z.get(o.planIdFromItems);
        if (null == e) {
          B.info("Plan not fetched for plan id: ".concat(o.planIdFromItems));
          return
        }
        let t = (0, N.DE)(e, null == b ? void 0 : b.id, !1),
          n = t.length > 0 ? t[0] : o.currency,
          s = !1;
        1 === t.length && (null == b ? void 0 : b.id) === o.paymentSourceId && (0, N.tD)(e.id, n, null == b ? void 0 : b.id) && (s = !0), s ? c.O5(o, k) : (0, p.Z)({
          initialPlanId: o.planIdFromItems,
          analyticsLocations: k,
          analyticsLocation: w,
          analyticsObject: D,
          subscription: o
        })
      }
    },
    Q = () => {
      if (!O.includes(o.status) || null == o.pauseEndsAt) {
        (0, C.q2)(Error("Invalid subscription to resume"), {
          extra: {
            subscriptionId: o.id,
            status: o.status,
            pauseEndsAt: o.pauseEndsAt
          }
        });
        return
      }
      o.status === M.O0b.PAUSED ? (0, p.Z)({
        initialPlanId: o.planIdFromItems,
        analyticsLocations: k,
        analyticsLocation: w,
        analyticsObject: D,
        subscription: o,
        skipConfirm: !0
      }) : c.v4(o, k)
    },
    J = () => {
      if (o.status === M.O0b.PAUSED) q(A.Steps.PAUSE_SELECT)
    },
    $ = () => {
      q(A.Steps.WHAT_YOU_LOSE)
    },
    ee = h.ZP.getPlanIdFromInvoice(o, _);
  if ((0, m.Q0)(ee)) return null;
  let et = h.ZP.getStatusFromInvoice(o, _),
    en = h.ZP.getPremiumType(ee),
    es = {
      [y.tier0]: en === x.p9.TIER_0,
      [y.tier1]: en === x.p9.TIER_1,
      [y.tier2]: en === x.p9.TIER_2,
      [y.canceled]: et === M.O0b.CANCELED,
      [y.pausePending]: et === M.O0b.PAUSE_PENDING,
      [y.paused]: et === M.O0b.PAUSED,
      [y.failedPayment]: (0, h.zV)(et)
    },
    ea = null;
  switch (en) {
    case x.p9.TIER_0:
      ea = (0, s.jsxs)("div", {
        className: y.wordMark,
        children: [(0, s.jsx)(I.Z, {
          className: y.discordWordmark,
          "aria-label": L.Z.Messages.PREMIUM_TIER_0
        }), (0, s.jsx)("div", {
          className: y.basicWordmark
        })]
      });
      break;
    case x.p9.TIER_1:
      ea = (0, s.jsx)(Z, {});
      break;
    case x.p9.TIER_2:
      ea = (0, s.jsx)(E.Z, {
        className: y.planName,
        "aria-label": L.Z.Messages.PREMIUM_TITLE
      })
  }
  let ei = O.includes(o.status) ? U : v;
  return (0, s.jsx)(ei, {
    wordMark: ea,
    subscriptionInfo: (a = ee, r()(null != _, "Expected renewalInvoicePreview"), (0, s.jsx)("div", {
      className: y.planInfo,
      children: (0, h.qV)({
        planId: a,
        subscription: o,
        renewalInvoicePreview: _,
        hasDiscountApplied: H,
        activeDiscountInfo: W
      })
    })),
    buttons: (() => {
      let {
        status: e
      } = o;
      if (o.isPurchasedExternally) {
        let e = (0, h.JE)(o.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
        return (0, s.jsx)(l.Anchor, {
          href: e,
          useDefaultUnderlineStyles: !1,
          children: (0, s.jsx)(l.Button, {
            className: i()(y.toolsButton, y.externalButton),
            size: l.Button.Sizes.SMALL,
            look: l.ButtonLooks.OUTLINED,
            color: l.ButtonColors.WHITE,
            submitting: j,
            children: L.Z.Messages.BILLING_MANAGE_SUBSCRIPTION
          })
        })
      }
      if (h.ZP.isBaseSubscriptionCanceled(o)) return (0, s.jsx)(l.Button, {
        className: y.toolsButton,
        size: l.Button.Sizes.SMALL,
        color: l.ButtonColors.BRAND_INVERTED,
        submitting: j,
        onClick: X,
        children: L.Z.Messages.RESUBSCRIBE
      });
      switch (e) {
        case M.O0b.BILLING_RETRY:
          return (0, s.jsx)(l.Button, {
            className: y.billingRetryCancel,
            size: l.Button.Sizes.SMALL,
            color: l.ButtonColors.CUSTOM,
            submitting: j,
            onClick: K,
            children: L.Z.Messages.CANCEL
          });
        case M.O0b.PAUSE_PENDING:
          return (0, s.jsxs)("div", {
            className: y.toolsButtons,
            children: [(0, s.jsx)(l.Button, {
              className: y.toolsButton,
              size: l.Button.Sizes.SMALL,
              look: l.ButtonLooks.LINK,
              color: l.ButtonColors.WHITE,
              submitting: j,
              onClick: z,
              children: L.Z.Messages.PREMIUM_CANCEL_CONFIRM_BUTTON
            }), (0, s.jsx)(l.Button, {
              className: y.toolsButton,
              size: l.Button.Sizes.SMALL,
              color: l.ButtonColors.BRAND_INVERTED,
              submitting: j,
              onClick: Q,
              children: L.Z.Messages.CANCEL_PAUSE
            })]
          });
        case M.O0b.PAUSED:
          let {
            durations: t
          } = (0, P.AT)(o);
          return (0, s.jsxs)("div", {
            className: y.toolsButtons,
            children: [t.length > 0 ? (0, s.jsx)(l.Button, {
              className: y.linkButton,
              size: l.Button.Sizes.SMALL,
              look: l.ButtonLooks.LINK,
              color: l.ButtonColors.WHITE,
              submitting: j,
              onClick: J,
              children: L.Z.Messages.PREMIUM_CANCEL_OR_EXTEND_PAUSE_SUBSCRIPTION
            }) : (0, s.jsx)(l.Button, {
              className: y.linkButton,
              size: l.Button.Sizes.SMALL,
              look: l.ButtonLooks.LINK,
              color: l.ButtonColors.WHITE,
              submitting: j,
              onClick: $,
              children: L.Z.Messages.PREMIUM_CANCEL_CONFIRM_BUTTON
            }), (0, s.jsx)(l.Button, {
              className: y.toolsButton,
              size: l.Button.Sizes.SMALL,
              color: l.ButtonColors.BRAND_INVERTED,
              submitting: j,
              onClick: Q,
              children: L.Z.Messages.RESUME
            })]
          });
        case M.O0b.ACTIVE:
        case M.O0b.PAST_DUE:
          let n = !1,
            a = null;
          return null != o.renewalMutations && (n = !0, a = o.renewalMutations.planId !== o.planId ? L.Z.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PLAN : L.Z.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION), null != o.trialEndsAt && (n = !0, a = L.Z.Messages.PREMIUM_SWITCH_PLAN_DISABLED_IN_TRIAL), e === M.O0b.PAST_DUE && (n = !0), (0, s.jsxs)("div", {
            className: y.toolsButtons,
            children: [G ? (0, s.jsx)(l.Button, {
              className: y.toolsButton,
              size: l.Button.Sizes.SMALL,
              look: l.ButtonLooks.LINK,
              color: l.ButtonColors.WHITE,
              submitting: j,
              onClick: V,
              children: L.Z.Messages.PREMIUM_PAUSE_OR_CANCEL_SUBSCRIPTION
            }) : (0, s.jsx)(l.Button, {
              className: y.toolsButton,
              size: l.Button.Sizes.SMALL,
              look: l.ButtonLooks.LINK,
              color: l.ButtonColors.WHITE,
              submitting: j,
              onClick: z,
              children: L.Z.Messages.CANCEL
            }), (0, s.jsx)(l.Tooltip, {
              text: a,
              children: e => (0, s.jsx)(R.Z, {
                ...e,
                disabled: n,
                className: y.toolsButton,
                onClick: () => {
                  (0, p.Z)({
                    analyticsLocations: k,
                    analyticsLocation: w,
                    analyticsObject: D,
                    subscription: o
                  })
                },
                children: L.Z.Messages.PREMIUM_SWITCH_PLANS
              })
            })]
          })
      }
    })(),
    statusClasses: es,
    shouldUseDiscountMarketing: H,
    discountAmount: Y
  })
}