"use strict";
s.r(t), s.d(t, {
  Steps: function() {
    return a
  },
  default: function() {
    return q
  }
}), s("47120"), s("411104");
var a, n, i = s("735250"),
  l = s("470079"),
  r = s("803997"),
  u = s.n(r),
  o = s("911765"),
  d = s("512722"),
  c = s.n(d),
  f = s("442837"),
  E = s("780384"),
  m = s("481060"),
  _ = s("355467"),
  p = s("410030"),
  I = s("100527"),
  N = s("906732"),
  S = s("211242"),
  P = s("509545"),
  C = s("285952"),
  T = s("626135"),
  R = s("122289"),
  A = s("63063"),
  M = s("74538"),
  h = s("937615"),
  L = s("374649"),
  g = s("140465"),
  y = s("314684"),
  x = s("653798"),
  D = s("625881"),
  U = s("440984"),
  O = s("398775"),
  v = s("973159"),
  b = s("311821"),
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
    if (n(!0), a(!1), [w.SubscriptionStatusTypes.PAST_DUE, w.SubscriptionStatusTypes.PAUSED].includes(t.status)) await (0, _.cancelSubscription)(t.id, i, l);
    else {
      var r, u;
      let e = null !== (u = null === (r = t.renewalMutations) || void 0 === r ? void 0 : r.items) && void 0 !== u ? u : t.items;
      await (0, _.updateSubscription)(t, {
        items: (0, M.getItemsWithoutPremiumPlanItem)(e)
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
    whatYouLoseExperienceEnabled: u,
    analyticsLocation: o
  } = e, d = (0, S.useBlockedPaymentsConfig)(), [c, f] = l.useState(!1), [_, I] = l.useState(!1), P = (0, p.default)(), {
    analyticsLocations: T
  } = (0, N.default)(), R = null;
  switch (s.status) {
    case w.SubscriptionStatusTypes.PAST_DUE:
    case w.SubscriptionStatusTypes.PAUSED:
      R = Y.default.Messages.PREMIUM_CANCEL_PAST_DUE_CONFIRM_BODY;
      break;
    default:
      switch (a) {
        case F.PremiumTypes.TIER_0:
          R = d ? Y.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0_PAYMENT_BLOCKED_RUSSIA.format({
            date: s.currentPeriodEnd,
            helpdeskArticle: A.default.getArticleURL(w.HelpdeskArticles.BLOCKED_PAYMENTS)
          }) : Y.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0.format({
            date: s.currentPeriodEnd
          });
          break;
        case F.PremiumTypes.TIER_1:
          R = d ? Y.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1_PAYMENT_BLOCKED_RUSSIA.format({
            date: s.currentPeriodEnd,
            helpdeskArticle: A.default.getArticleURL(w.HelpdeskArticles.BLOCKED_PAYMENTS)
          }) : Y.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1.format({
            date: s.currentPeriodEnd
          });
          break;
        default:
          R = d ? Y.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2_PAYMENT_BLOCKED_RUSSIA.format({
            date: s.currentPeriodEnd,
            helpdeskArticle: A.default.getArticleURL(w.HelpdeskArticles.BLOCKED_PAYMENTS)
          }) : Y.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2.format({
            date: s.currentPeriodEnd
          })
      }
  }
  let h = s.items.some(e => {
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
    L = h ? (0, i.jsx)(m.Button, {
      onClick: () => n(3),
      children: Y.default.Messages.NEXT
    }) : (0, i.jsx)(m.Button, {
      color: m.Button.Colors.RED,
      disabled: c,
      onClick: async () => {
        await W({
          setHasError: I,
          onClose: r,
          premiumSubscription: s,
          setIsCancelling: f,
          analyticsLocations: T,
          analyticsLocation: o
        })
      },
      children: u ? Y.default.Messages.CONFIRM : Y.default.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
        planPremiumType: M.default.getDisplayPremiumType(s.planId)
      })
    }),
    g = (0, i.jsx)(m.Button, {
      look: m.Button.Looks.LINK,
      color: (0, E.isThemeLight)(P) ? m.Button.Colors.PRIMARY : m.Button.Colors.WHITE,
      onClick: r,
      children: u ? Y.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK : Y.default.Messages.CANCEL
    });
  return (0, i.jsxs)(i.Fragment, {
    children: [u ? (0, i.jsx)(j.default, {
      premiumType: a,
      className: H.cancellationHeader,
      onClose: r
    }) : (0, i.jsxs)(m.ModalHeader, {
      separator: !1,
      children: [(0, i.jsx)(m.FormTitle, {
        tag: m.FormTitleTags.H4,
        children: Y.default.Messages.PREMIUM_CANCEL_CONFIRM_TITLE.format({
          planPremiumType: M.default.getDisplayPremiumType(s.planId)
        })
      }), (0, i.jsx)(m.ModalCloseButton, {
        onClick: r
      })]
    }), (0, i.jsxs)(m.ModalContent, {
      className: H.body,
      children: [_ ? (0, i.jsx)(m.FormErrorBlock, {
        className: H.errorBlock,
        children: Y.default.Messages.BILLING_ERROR_GENERIC
      }) : null, (0, i.jsx)("div", {
        className: H.cancelImage
      }), (0, i.jsx)("div", {
        children: R
      })]
    }), (0, i.jsxs)(m.ModalFooter, {
      justify: C.default.Justify.START,
      children: [L, g]
    })]
  })
}

function K(e) {
  var t, s;
  let {
    premiumSubscription: a
  } = e, {
    analyticsLocations: n
  } = (0, N.default)(), [l] = (0, L.useSubscriptionInvoicePreview)({
    subscriptionId: a.id,
    items: (0, M.getItemsWithoutPremiumPlanItem)(null !== (s = null === (t = a.renewalMutations) || void 0 === t ? void 0 : t.items) && void 0 !== s ? s : a.items),
    renewal: !0,
    analyticsLocations: n,
    analyticsLocation: I.default.CANCEL_INVOICE_PREVIEW
  }), r = (0, f.useStateFromStores)([P.default], () => P.default.get(a.planId));
  if (null == l || null == r) return (0, i.jsx)(m.Spinner, {
    className: H.loading
  });
  let {
    intervalType: u,
    intervalCount: o
  } = M.default.getIntervalForInvoice(l);
  return (0, i.jsxs)("div", {
    className: H.__invalid_bodyText,
    children: [(0, i.jsx)("div", {
      className: H.renewalInvoiceDate,
      children: 0 !== l.total ? Y.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE_WITH_CHARGE.format({
        renewalDate: l.subscriptionPeriodStart,
        rate: (0, h.formatRate)((0, h.formatPrice)(l.total, l.currency), u, o)
      }) : Y.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
        renewalDate: l.subscriptionPeriodStart
      })
    }), (0, i.jsxs)(x.PremiumInvoiceTable, {
      children: [(0, i.jsx)(x.PremiumInvoiceTableHeader, {
        children: Y.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
      }), (0, i.jsx)(x.PremiumInvoiceTableRow, {
        label: Y.default.Messages.PREMIUM_SUBSCRIPTION_CANCELLED.format({
          planName: M.default.getDisplayName(r.id)
        }),
        value: (0, M.getFormattedRateForPlan)(r),
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
  } = e, [o, d] = l.useState(!1), [c, f] = l.useState(!1), {
    analyticsLocations: E
  } = (0, N.default)();
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(j.default, {
      premiumType: s,
      onClose: n
    }), (0, i.jsxs)(m.ModalContent, {
      className: u()(H.previewStep, H.body),
      children: [c ? (0, i.jsx)(m.FormErrorBlock, {
        className: H.errorBlock,
        children: Y.default.Messages.BILLING_ERROR_GENERIC
      }) : null, (0, i.jsx)(K, {
        premiumSubscription: t
      })]
    }), (0, i.jsxs)(m.ModalFooter, {
      align: C.default.Align.CENTER,
      justify: C.default.Justify.BETWEEN,
      children: [(0, i.jsx)(m.Button, {
        color: m.Button.Colors.RED,
        disabled: o,
        onClick: async () => {
          await W({
            setHasError: f,
            onClose: n,
            premiumSubscription: t,
            setIsCancelling: d,
            analyticsLocations: E,
            analyticsLocation: r
          })
        },
        children: Y.default.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
          planPremiumType: M.default.getDisplayPremiumType(t.planId)
        })
      }), (0, i.jsx)(b.default, {
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
    subscription_plan_id: null === (t = (0, M.getPremiumPlanItem)(e)) || void 0 === t ? void 0 : t.id,
    subscription_plan_gateway_plan_id: e.paymentGatewayPlanId
  }
}
let X = {
  1: "What You're Losing",
  2: "Confirm Cancellation",
  3: "Preview Updated Subscription",
  4: "Redeem Churn Discount Started",
  5: "Redeem Churn Discount Completed",
  6: "Select Pause Duration",
  7: "Confirm Pause Duration"
};

function q(e) {
  var t;
  let s, {
      premiumSubscription: a,
      transitionState: n,
      onClose: r,
      analyticsLocations: u,
      analyticsLocation: d,
      initialStep: f
    } = e,
    _ = l.useRef(new o.Environment),
    [S, P] = l.useState(null),
    C = (0, y.useFreeBoostUserTenureReward)(),
    A = (null == C ? void 0 : C.showCard) === !0,
    h = null === (t = (0, M.getPremiumPlanItem)(a)) || void 0 === t ? void 0 : t.planId,
    L = null != h ? M.default.getPremiumType(h) : null;
  c()(null != L, "Should not be cancelling Nitro without premiumType");
  let x = (0, p.default)();
  l.useEffect(() => {
    T.default.track(w.AnalyticEvents.CANCELLATION_FLOW_STARTED, Z(a))
  }, [a]);
  let b = L === F.PremiumTypes.TIER_0 || L === F.PremiumTypes.TIER_1 || L === F.PremiumTypes.TIER_2;
  null == f && (f = b ? 1 : 2);
  let {
    analyticsLocations: B
  } = (0, N.default)(u, I.default.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL), [j, W, K, q] = function(e, t, s) {
    let [a, n] = l.useState(e), [i, r] = l.useState(Date.now()), [u] = l.useState(Date.now()), o = l.useCallback(e => {
      T.default.track(w.AnalyticEvents.CANCELLATION_FLOW_STEP, {
        from_step: X[a],
        to_step: X[e],
        step_duration_ms: Date.now() - i,
        flow_duration_ms: Date.now() - u,
        location_stack: s,
        ...Z(t)
      }), n(e), r(Date.now())
    }, [s, u, i, a, t]);
    return [a, o, i, u]
  }(f, a, u), [J, Q] = l.useState(null);
  (0, G.useUnsupportedExternalSubscriptionModalHandler)(a, r, !1);
  let $ = e => {
      r(), T.default.track(w.AnalyticEvents.CANCELLATION_FLOW_STEP, {
        from_step: X[e],
        to_step: null,
        step_duration_ms: Date.now() - K,
        flow_duration_ms: Date.now() - q,
        location_stack: u,
        ...Z(a)
      })
    },
    ee = (0, g.useShouldFetchChurnOffer)(),
    {
      churnUserDiscountOffer: et,
      isFetchingChurnDiscountOffer: es
    } = (0, g.useFetchChurnUserDiscountOffer)(!ee || 1 !== j);
  switch (j) {
    case 6:
      s = (0, i.jsx)(O.PremiumSubscriptionPauseModalSelect, {
        premiumSubscription: a,
        premiumType: L,
        setStep: W,
        onClose: () => $(j),
        pauseDuration: J,
        setPauseDuration: Q,
        footer: (0, i.jsxs)("div", {
          className: H.whatYouLoseButtonContainer,
          children: [(0, i.jsx)(m.Button, {
            disabled: null === J,
            onClick: () => {
              0 === J ? W(1) : W(7)
            },
            children: Y.default.Messages.CONTINUE
          }), (0, i.jsx)(m.Button, {
            look: m.Button.Looks.LINK,
            color: (0, E.isThemeDark)(x) ? m.Button.Colors.WHITE : m.Button.Colors.PRIMARY,
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
        throw (0, R.captureBillingException)(e, {
          extra: {
            subscriptionId: a.id,
            status: a.status
          }
        }), e
      }
      s = (0, i.jsx)(O.PremiumSubscriptionPauseModalConfirm, {
        premiumSubscription: a,
        premiumType: L,
        setStep: W,
        onClose: () => $(j),
        analyticsLocation: d,
        pauseDuration: J
      });
      break;
    case 1:
      s = (0, i.jsx)(v.default, {
        premiumType: L,
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
          children: [(0, i.jsx)(m.Button, {
            onClick: () => W(2),
            children: Y.default.Messages.CONTINUE
          }), (0, i.jsx)(m.Button, {
            look: m.Button.Looks.LINK,
            color: (0, E.isThemeDark)(x) ? m.Button.Colors.WHITE : m.Button.Colors.PRIMARY,
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
        premiumType: L,
        setStep: W,
        onClose: () => $(j),
        whatYouLoseExperienceEnabled: b,
        analyticsLocation: d
      });
      break;
    case 3:
      s = (0, i.jsx)(z, {
        premiumSubscription: a,
        premiumType: L,
        onBack: () => W(2),
        onClose: () => $(j),
        analyticsLocation: d
      });
      break;
    case 4:
      s = (0, i.jsx)(D.default, {
        premiumSubscription: a,
        premiumType: L,
        onClose: () => $(j),
        onConfirm: () => W(5),
        userDiscountOffer: et
      });
      break;
    case 5:
      s = (0, i.jsx)(U.PremiumSubscritionDiscountAppliedModal, {
        premiumSubscription: a,
        premiumType: L,
        onClose: () => $(j),
        confettiCanvas: S,
        userDiscountOffer: et
      });
      break;
    default:
      throw Error("Unexpected step: ".concat(j))
  }
  return (0, i.jsxs)(N.AnalyticsLocationProvider, {
    value: B,
    children: [(0, i.jsx)(o.ConfettiCanvas, {
      ref: P,
      className: H.confettiCanvas,
      environment: _.current
    }), (0, i.jsx)(m.ModalRoot, {
      transitionState: n,
      children: s
    })]
  })
}