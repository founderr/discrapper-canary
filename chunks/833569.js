"use strict";
s.r(t), s.d(t, {
  Steps: function() {
    return a
  },
  default: function() {
    return X
  }
}), s("47120"), s("411104");
var a, n, i = s("735250"),
  l = s("470079"),
  r = s("120356"),
  o = s.n(r),
  u = s("236471"),
  d = s("512722"),
  c = s.n(d),
  p = s("442837"),
  f = s("780384"),
  E = s("481060"),
  m = s("355467"),
  _ = s("410030"),
  S = s("100527"),
  I = s("906732"),
  N = s("211242"),
  P = s("509545"),
  C = s("285952"),
  T = s("626135"),
  h = s("122289"),
  A = s("63063"),
  R = s("74538"),
  y = s("937615"),
  M = s("374649"),
  L = s("140465"),
  g = s("314684"),
  x = s("653798"),
  D = s("625881"),
  U = s("440984"),
  b = s("398775"),
  O = s("973159"),
  v = s("311821"),
  B = s("42818"),
  j = s("798769"),
  G = s("459965"),
  k = s("623068"),
  F = s("474936"),
  w = s("981631"),
  Y = s("689938"),
  H = s("344243");
(n = a || (a = {}))[n.WHAT_YOU_LOSE = 1] = "WHAT_YOU_LOSE", n[n.CONFIRM = 2] = "CONFIRM", n[n.PREVIEW = 3] = "PREVIEW", n[n.CONFIRM_DISCOUNT = 4] = "CONFIRM_DISCOUNT", n[n.DISCOUNT_APPLIED = 5] = "DISCOUNT_APPLIED", n[n.PAUSE_SELECT = 6] = "PAUSE_SELECT", n[n.PAUSE_CONFIRM = 7] = "PAUSE_CONFIRM";
async function W(e) {
  let {
    premiumSubscription: t,
    onClose: s,
    setHasError: a,
    setIsCancelling: n,
    analyticsLocations: i,
    analyticsLocation: l
  } = e;
  try {
    if (n(!0), a(!1), [w.SubscriptionStatusTypes.PAST_DUE, w.SubscriptionStatusTypes.PAUSED].includes(t.status)) await (0, m.cancelSubscription)(t.id, i, l);
    else {
      var r, o;
      let e = null !== (o = null === (r = t.renewalMutations) || void 0 === r ? void 0 : r.items) && void 0 !== o ? o : t.items;
      await (0, m.updateSubscription)(t, {
        items: (0, R.getItemsWithoutPremiumPlanItem)(e)
      }, i, l)
    }
    s()
  } catch {
    a(!0), n(!1)
  }
}

function V(e) {
  var t;
  let {
    premiumSubscription: s,
    premiumType: a,
    setStep: n,
    onClose: r,
    whatYouLoseExperienceEnabled: o,
    analyticsLocation: u
  } = e, d = (0, N.useBlockedPaymentsConfig)(), [c, p] = l.useState(!1), [m, S] = l.useState(!1), P = (0, _.default)(), {
    analyticsLocations: T
  } = (0, I.default)(), h = null;
  switch (s.status) {
    case w.SubscriptionStatusTypes.PAST_DUE:
    case w.SubscriptionStatusTypes.PAUSED:
      h = Y.default.Messages.PREMIUM_CANCEL_PAST_DUE_CONFIRM_BODY;
      break;
    default:
      switch (a) {
        case F.PremiumTypes.TIER_0:
          h = d ? Y.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0_PAYMENT_BLOCKED_RUSSIA.format({
            date: s.currentPeriodEnd,
            helpdeskArticle: A.default.getArticleURL(w.HelpdeskArticles.BLOCKED_PAYMENTS)
          }) : Y.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0.format({
            date: s.currentPeriodEnd
          });
          break;
        case F.PremiumTypes.TIER_1:
          h = d ? Y.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1_PAYMENT_BLOCKED_RUSSIA.format({
            date: s.currentPeriodEnd,
            helpdeskArticle: A.default.getArticleURL(w.HelpdeskArticles.BLOCKED_PAYMENTS)
          }) : Y.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1.format({
            date: s.currentPeriodEnd
          });
          break;
        default:
          h = d ? Y.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2_PAYMENT_BLOCKED_RUSSIA.format({
            date: s.currentPeriodEnd,
            helpdeskArticle: A.default.getArticleURL(w.HelpdeskArticles.BLOCKED_PAYMENTS)
          }) : Y.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2.format({
            date: s.currentPeriodEnd
          })
      }
  }
  let y = s.items.some(e => {
      let {
        planId: t
      } = e;
      return !F.PREMIUM_PLANS.has(t)
    }) && null == s.renewalMutations || (null === (t = s.renewalMutations) || void 0 === t ? void 0 : t.items.find(e => {
      let {
        planId: t
      } = e;
      return !F.PREMIUM_PLANS.has(t)
    })) != null,
    M = y ? (0, i.jsx)(E.Button, {
      onClick: () => n(3),
      children: Y.default.Messages.NEXT
    }) : (0, i.jsx)(E.Button, {
      color: E.Button.Colors.RED,
      disabled: c,
      onClick: async () => {
        await W({
          setHasError: S,
          onClose: r,
          premiumSubscription: s,
          setIsCancelling: p,
          analyticsLocations: T,
          analyticsLocation: u
        })
      },
      children: o ? Y.default.Messages.CONFIRM : Y.default.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
        planPremiumType: R.default.getDisplayPremiumType(s.planId)
      })
    }),
    L = (0, i.jsx)(E.Button, {
      look: E.Button.Looks.LINK,
      color: (0, f.isThemeLight)(P) ? E.Button.Colors.PRIMARY : E.Button.Colors.WHITE,
      onClick: r,
      children: o ? Y.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK : Y.default.Messages.CANCEL
    });
  return (0, i.jsxs)(i.Fragment, {
    children: [o ? (0, i.jsx)(j.default, {
      premiumType: a,
      className: H.cancellationHeader,
      onClose: r
    }) : (0, i.jsxs)(E.ModalHeader, {
      separator: !1,
      children: [(0, i.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H4,
        children: Y.default.Messages.PREMIUM_CANCEL_CONFIRM_TITLE.format({
          planPremiumType: R.default.getDisplayPremiumType(s.planId)
        })
      }), (0, i.jsx)(E.ModalCloseButton, {
        onClick: r
      })]
    }), (0, i.jsxs)(E.ModalContent, {
      className: H.body,
      children: [m ? (0, i.jsx)(E.FormErrorBlock, {
        className: H.errorBlock,
        children: Y.default.Messages.BILLING_ERROR_GENERIC
      }) : null, (0, i.jsx)("div", {
        className: H.cancelImage
      }), (0, i.jsx)("div", {
        children: h
      })]
    }), (0, i.jsxs)(E.ModalFooter, {
      justify: C.default.Justify.START,
      children: [M, L]
    })]
  })
}

function K(e) {
  var t, s;
  let {
    premiumSubscription: a
  } = e, {
    analyticsLocations: n
  } = (0, I.default)(), [l] = (0, M.useSubscriptionInvoicePreview)({
    subscriptionId: a.id,
    items: (0, R.getItemsWithoutPremiumPlanItem)(null !== (s = null === (t = a.renewalMutations) || void 0 === t ? void 0 : t.items) && void 0 !== s ? s : a.items),
    renewal: !0,
    analyticsLocations: n,
    analyticsLocation: S.default.CANCEL_INVOICE_PREVIEW
  }), r = (0, p.useStateFromStores)([P.default], () => P.default.get(a.planId));
  if (null == l || null == r) return (0, i.jsx)(E.Spinner, {
    className: H.loading
  });
  let {
    intervalType: o,
    intervalCount: u
  } = R.default.getIntervalForInvoice(l);
  return (0, i.jsxs)("div", {
    className: H.__invalid_bodyText,
    children: [(0, i.jsx)("div", {
      className: H.renewalInvoiceDate,
      children: 0 !== l.total ? Y.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE_WITH_CHARGE.format({
        renewalDate: l.subscriptionPeriodStart,
        rate: (0, y.formatRate)((0, y.formatPrice)(l.total, l.currency), o, u)
      }) : Y.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
        renewalDate: l.subscriptionPeriodStart
      })
    }), (0, i.jsxs)(x.PremiumInvoiceTable, {
      children: [(0, i.jsx)(x.PremiumInvoiceTableHeader, {
        children: Y.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
      }), (0, i.jsx)(x.PremiumInvoiceTableRow, {
        label: Y.default.Messages.PREMIUM_SUBSCRIPTION_CANCELLED.format({
          planName: R.default.getDisplayName(r.id)
        }),
        value: (0, R.getFormattedRateForPlan)(r),
        className: H.invoiceCancelRow
      }), (0, i.jsx)(x.PremiumInvoiceTableDivider, {}), (0, i.jsx)(B.SubscriptionInvoiceFooter, {
        premiumSubscription: a,
        renewalInvoice: l,
        isUpdate: !0
      })]
    })]
  })
}

function z(e) {
  let {
    premiumSubscription: t,
    premiumType: s,
    onBack: a,
    onClose: n,
    analyticsLocation: r
  } = e, [u, d] = l.useState(!1), [c, p] = l.useState(!1), {
    analyticsLocations: f
  } = (0, I.default)();
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(j.default, {
      premiumType: s,
      onClose: n
    }), (0, i.jsxs)(E.ModalContent, {
      className: o()(H.previewStep, H.body),
      children: [c ? (0, i.jsx)(E.FormErrorBlock, {
        className: H.errorBlock,
        children: Y.default.Messages.BILLING_ERROR_GENERIC
      }) : null, (0, i.jsx)(K, {
        premiumSubscription: t
      })]
    }), (0, i.jsxs)(E.ModalFooter, {
      align: C.default.Align.CENTER,
      justify: C.default.Justify.BETWEEN,
      children: [(0, i.jsx)(E.Button, {
        color: E.Button.Colors.RED,
        disabled: u,
        onClick: async () => {
          await W({
            setHasError: p,
            onClose: n,
            premiumSubscription: t,
            setIsCancelling: d,
            analyticsLocations: f,
            analyticsLocation: r
          })
        },
        children: Y.default.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
          planPremiumType: R.default.getDisplayPremiumType(t.planId)
        })
      }), (0, i.jsx)(v.default, {
        onClick: a
      })]
    })]
  })
}

function Z(e) {
  var t;
  return {
    subscription_id: e.id,
    subscription_type: e.type,
    subscription_plan_id: null === (t = (0, R.getPremiumPlanItem)(e)) || void 0 === t ? void 0 : t.id,
    subscription_plan_gateway_plan_id: e.paymentGatewayPlanId
  }
}
let q = {
  1: "What You're Losing",
  2: "Confirm Cancellation",
  3: "Preview Updated Subscription",
  4: "Redeem Churn Discount Started",
  5: "Redeem Churn Discount Completed",
  6: "Select Pause Duration",
  7: "Confirm Pause Duration"
};

function X(e) {
  var t;
  let s, {
      premiumSubscription: a,
      transitionState: n,
      onClose: r,
      analyticsLocations: o,
      analyticsLocation: d,
      initialStep: p
    } = e,
    m = l.useRef(new u.Environment),
    [N, P] = l.useState(null),
    C = (0, g.useFreeBoostUserTenureReward)(),
    A = (null == C ? void 0 : C.showCard) === !0,
    y = null === (t = (0, R.getPremiumPlanItem)(a)) || void 0 === t ? void 0 : t.planId,
    M = null != y ? R.default.getPremiumType(y) : null;
  c()(null != M, "Should not be cancelling Nitro without premiumType");
  let x = (0, _.default)();
  l.useEffect(() => {
    T.default.track(w.AnalyticEvents.CANCELLATION_FLOW_STARTED, Z(a))
  }, [a]);
  let v = M === F.PremiumTypes.TIER_0 || M === F.PremiumTypes.TIER_1 || M === F.PremiumTypes.TIER_2;
  null == p && (p = v ? 1 : 2);
  let {
    analyticsLocations: B
  } = (0, I.default)(o, S.default.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL), [j, W, K, X] = function(e, t, s) {
    let [a, n] = l.useState(e), [i, r] = l.useState(Date.now()), [o] = l.useState(Date.now()), u = l.useCallback(e => {
      T.default.track(w.AnalyticEvents.CANCELLATION_FLOW_STEP, {
        from_step: q[a],
        to_step: q[e],
        step_duration_ms: Date.now() - i,
        flow_duration_ms: Date.now() - o,
        location_stack: s,
        ...Z(t)
      }), n(e), r(Date.now())
    }, [s, o, i, a, t]);
    return [a, u, i, o]
  }(p, a, o), [J, Q] = l.useState(null);
  (0, G.useUnsupportedExternalSubscriptionModalHandler)(a, r, !1);
  let $ = e => {
      r(), T.default.track(w.AnalyticEvents.CANCELLATION_FLOW_STEP, {
        from_step: q[e],
        to_step: null,
        step_duration_ms: Date.now() - K,
        flow_duration_ms: Date.now() - X,
        location_stack: o,
        ...Z(a)
      })
    },
    ee = (0, L.useShouldFetchChurnOffer)(),
    {
      churnUserDiscountOffer: et,
      isFetchingChurnDiscountOffer: es
    } = (0, L.useFetchChurnUserDiscountOffer)(!ee || 1 !== j);
  switch (j) {
    case 6:
      s = (0, i.jsx)(b.PremiumSubscriptionPauseModalSelect, {
        premiumSubscription: a,
        premiumType: M,
        setStep: W,
        onClose: () => $(j),
        pauseDuration: J,
        setPauseDuration: Q,
        footer: (0, i.jsxs)("div", {
          className: H.whatYouLoseButtonContainer,
          children: [(0, i.jsx)(E.Button, {
            disabled: null === J,
            onClick: () => {
              0 === J ? W(1) : W(7)
            },
            children: Y.default.Messages.CONTINUE
          }), (0, i.jsx)(E.Button, {
            look: E.Button.Looks.LINK,
            color: (0, f.isThemeDark)(x) ? E.Button.Colors.WHITE : E.Button.Colors.PRIMARY,
            onClick: r,
            children: Y.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
          })]
        }),
        analyticsLocation: d
      });
      break;
    case 7:
      if (null == J) {
        let e = Error("No pause duration to set");
        throw (0, h.captureBillingException)(e, {
          extra: {
            subscriptionId: a.id,
            status: a.status
          }
        }), e
      }
      s = (0, i.jsx)(b.PremiumSubscriptionPauseModalConfirm, {
        premiumSubscription: a,
        premiumType: M,
        setStep: W,
        onClose: () => $(j),
        analyticsLocation: d,
        pauseDuration: J
      });
      break;
    case 1:
      s = (0, i.jsx)(O.default, {
        premiumType: M,
        titleText: Y.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_TITLE,
        subtitleText: A ? Y.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SUBTITLE_TENURE_REWARD : Y.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SUBTITLE.format(),
        subtitleClassName: A ? H.subtitleSection : void 0,
        subtitleIcon: A && (0, i.jsx)("div", {
          className: H.subtitleIcon,
          children: (0, i.jsx)(k.default, {
            staticPercentage: 100,
            iconClassName: H.iconClassName,
            showAnimations: !1,
            innerCircleClassName: H.innerCircle,
            progressCircleStrokeSize: 5,
            gemBackgroundCircleSize: "38%"
          })
        }),
        footer: (0, i.jsxs)("div", {
          className: H.whatYouLoseButtonContainer,
          children: [(0, i.jsx)(E.Button, {
            onClick: () => W(2),
            children: Y.default.Messages.CONTINUE
          }), (0, i.jsx)(E.Button, {
            look: E.Button.Looks.LINK,
            color: (0, f.isThemeDark)(x) ? E.Button.Colors.WHITE : E.Button.Colors.PRIMARY,
            onClick: () => $(j),
            children: Y.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
          })]
        }),
        onClose: () => $(j),
        onDiscountClaim: () => W(4),
        onContinue: () => W(2),
        isLoading: ee && es,
        churnUserDiscountOffer: et,
        analyticsLocations: B
      });
      break;
    case 2:
      s = (0, i.jsx)(V, {
        premiumSubscription: a,
        premiumType: M,
        setStep: W,
        onClose: () => $(j),
        whatYouLoseExperienceEnabled: v,
        analyticsLocation: d
      });
      break;
    case 3:
      s = (0, i.jsx)(z, {
        premiumSubscription: a,
        premiumType: M,
        onBack: () => W(2),
        onClose: () => $(j),
        analyticsLocation: d
      });
      break;
    case 4:
      s = (0, i.jsx)(D.default, {
        premiumSubscription: a,
        premiumType: M,
        onClose: () => $(j),
        onConfirm: () => W(5),
        userDiscountOffer: et
      });
      break;
    case 5:
      s = (0, i.jsx)(U.PremiumSubscritionDiscountAppliedModal, {
        premiumSubscription: a,
        premiumType: M,
        onClose: () => $(j),
        confettiCanvas: N,
        userDiscountOffer: et
      });
      break;
    default:
      throw Error("Unexpected step: ".concat(j))
  }
  return (0, i.jsxs)(I.AnalyticsLocationProvider, {
    value: B,
    children: [(0, i.jsx)(u.ConfettiCanvas, {
      ref: P,
      className: H.confettiCanvas,
      environment: m.current
    }), (0, i.jsx)(E.ModalRoot, {
      transitionState: n,
      children: s
    })]
  })
}