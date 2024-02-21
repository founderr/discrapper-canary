"use strict";
n.r(t), n.d(t, {
  Steps: function() {
    return s
  },
  default: function() {
    return V
  }
}), n("222007"), n("70102");
var s, a, l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  u = n.n(r),
  o = n("516555"),
  c = n("627445"),
  d = n.n(c),
  _ = n("446674"),
  f = n("819855"),
  m = n("77078"),
  I = n("850068"),
  E = n("841098"),
  C = n("812204"),
  N = n("685665"),
  M = n("619935"),
  p = n("10514"),
  T = n("145131"),
  R = n("599110"),
  P = n("701909"),
  S = n("719923"),
  A = n("153160"),
  L = n("809071"),
  g = n("182650"),
  O = n("883662"),
  x = n("471131"),
  h = n("398309"),
  y = n("360262"),
  D = n("177998"),
  v = n("146163"),
  b = n("510928"),
  U = n("661128"),
  j = n("646718"),
  B = n("49111"),
  k = n("782340"),
  F = n("871556");
async function w(e) {
  let {
    premiumSubscription: t,
    onClose: n,
    setHasError: s,
    setIsCancelling: a,
    analyticsLocations: l,
    analyticsLocation: i
  } = e;
  try {
    if (a(!0), s(!1), t.status === B.SubscriptionStatusTypes.PAST_DUE) await (0, I.cancelSubscription)(t.id, l, i);
    else {
      var r, u;
      let e = null !== (u = null === (r = t.renewalMutations) || void 0 === r ? void 0 : r.items) && void 0 !== u ? u : t.items;
      await (0, I.updateSubscription)(t, {
        items: (0, S.getItemsWithoutPremiumPlanItem)(e)
      }, l, i)
    }
    n()
  } catch {
    s(!0), a(!1)
  }
}

function G(e) {
  var t;
  let {
    premiumSubscription: n,
    premiumType: s,
    setStep: a,
    onClose: r,
    whatYouLoseExperienceEnabled: u,
    analyticsLocation: o
  } = e, c = (0, M.useBlockedPaymentsConfig)(), [d, _] = i.useState(!1), [I, C] = i.useState(!1), p = (0, E.default)(), {
    analyticsLocations: R
  } = (0, N.default)(), A = null;
  A = n.status === B.SubscriptionStatusTypes.PAST_DUE ? k.default.Messages.PREMIUM_CANCEL_PAST_DUE_CONFIRM_BODY : s === j.PremiumTypes.TIER_0 ? c ? k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0_PAYMENT_BLOCKED_RUSSIA.format({
    date: n.currentPeriodEnd,
    helpdeskArticle: P.default.getArticleURL(B.HelpdeskArticles.BLOCKED_PAYMENTS)
  }) : k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0.format({
    date: n.currentPeriodEnd
  }) : s === j.PremiumTypes.TIER_1 ? c ? k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1_PAYMENT_BLOCKED_RUSSIA.format({
    date: n.currentPeriodEnd,
    helpdeskArticle: P.default.getArticleURL(B.HelpdeskArticles.BLOCKED_PAYMENTS)
  }) : k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1.format({
    date: n.currentPeriodEnd
  }) : c ? k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2_PAYMENT_BLOCKED_RUSSIA.format({
    date: n.currentPeriodEnd,
    helpdeskArticle: P.default.getArticleURL(B.HelpdeskArticles.BLOCKED_PAYMENTS)
  }) : k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2.format({
    date: n.currentPeriodEnd
  });
  let L = n.items.some(e => {
      let {
        planId: t
      } = e;
      return !j.PREMIUM_PLANS.has(t)
    }),
    g = L && null == n.renewalMutations || (null === (t = n.renewalMutations) || void 0 === t ? void 0 : t.items.find(e => {
      let {
        planId: t
      } = e;
      return !j.PREMIUM_PLANS.has(t)
    })) != null,
    O = g ? (0, l.jsx)(m.Button, {
      onClick: () => a(3),
      children: k.default.Messages.NEXT
    }) : (0, l.jsx)(m.Button, {
      color: m.Button.Colors.RED,
      disabled: d,
      onClick: async () => {
        await w({
          setHasError: C,
          onClose: r,
          premiumSubscription: n,
          setIsCancelling: _,
          analyticsLocations: R,
          analyticsLocation: o
        })
      },
      children: u ? k.default.Messages.CONFIRM : k.default.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
        planPremiumType: S.default.getDisplayPremiumType(n.planId)
      })
    }),
    x = (0, l.jsx)(m.Button, {
      look: m.Button.Looks.LINK,
      color: (0, f.isThemeLight)(p) ? m.Button.Colors.PRIMARY : m.Button.Colors.WHITE,
      onClick: r,
      children: u ? k.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK : k.default.Messages.CANCEL
    });
  return (0, l.jsxs)(l.Fragment, {
    children: [u ? (0, l.jsx)(b.default, {
      premiumType: s,
      className: F.cancellationHeader,
      onClose: r
    }) : (0, l.jsxs)(m.ModalHeader, {
      separator: !1,
      children: [(0, l.jsx)(m.FormTitle, {
        tag: m.FormTitleTags.H4,
        children: k.default.Messages.PREMIUM_CANCEL_CONFIRM_TITLE.format({
          planPremiumType: S.default.getDisplayPremiumType(n.planId)
        })
      }), (0, l.jsx)(m.ModalCloseButton, {
        onClick: r
      })]
    }), (0, l.jsxs)(m.ModalContent, {
      className: F.body,
      children: [I ? (0, l.jsx)(m.FormErrorBlock, {
        className: F.errorBlock,
        children: k.default.Messages.BILLING_ERROR_GENERIC
      }) : null, (0, l.jsx)("div", {
        className: F.cancelImage
      }), (0, l.jsx)("div", {
        children: A
      })]
    }), (0, l.jsxs)(m.ModalFooter, {
      justify: T.default.Justify.START,
      children: [O, x]
    })]
  })
}

function H(e) {
  var t, n;
  let {
    premiumSubscription: s
  } = e, {
    analyticsLocations: a
  } = (0, N.default)(), [i] = (0, L.useSubscriptionInvoicePreview)({
    subscriptionId: s.id,
    items: (0, S.getItemsWithoutPremiumPlanItem)(null !== (n = null === (t = s.renewalMutations) || void 0 === t ? void 0 : t.items) && void 0 !== n ? n : s.items),
    renewal: !0,
    analyticsLocations: a,
    analyticsLocation: C.default.CANCEL_INVOICE_PREVIEW
  }), r = (0, _.useStateFromStores)([p.default], () => p.default.get(s.planId));
  if (null == i || null == r) return (0, l.jsx)(m.Spinner, {
    className: F.loading
  });
  let {
    intervalType: u,
    intervalCount: o
  } = S.default.getIntervalForInvoice(i);
  return (0, l.jsxs)("div", {
    className: F.bodyText,
    children: [(0, l.jsx)("div", {
      className: F.renewalInvoiceDate,
      children: 0 !== i.total ? k.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE_WITH_CHARGE.format({
        renewalDate: i.subscriptionPeriodStart,
        rate: (0, A.formatRate)((0, A.formatPrice)(i.total, i.currency), u, o)
      }) : k.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
        renewalDate: i.subscriptionPeriodStart
      })
    }), (0, l.jsxs)(O.PremiumInvoiceTable, {
      children: [(0, l.jsx)(O.PremiumInvoiceTableHeader, {
        children: k.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
      }), (0, l.jsx)(O.PremiumInvoiceTableRow, {
        label: k.default.Messages.PREMIUM_SUBSCRIPTION_CANCELLED.format({
          planName: S.default.getDisplayName(r.id)
        }),
        value: (0, S.getFormattedRateForPlan)(r),
        className: F.invoiceCancelRow
      }), (0, l.jsx)(O.PremiumInvoiceTableDivider, {}), (0, l.jsx)(v.SubscriptionInvoiceFooter, {
        premiumSubscription: s,
        renewalInvoice: i,
        isUpdate: !0
      })]
    })]
  })
}

function W(e) {
  let {
    premiumSubscription: t,
    premiumType: n,
    onBack: s,
    onClose: a,
    analyticsLocation: r
  } = e, [o, c] = i.useState(!1), [d, _] = i.useState(!1), {
    analyticsLocations: f
  } = (0, N.default)();
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(b.default, {
      premiumType: n,
      onClose: a
    }), (0, l.jsxs)(m.ModalContent, {
      className: u(F.previewStep, F.body),
      children: [d ? (0, l.jsx)(m.FormErrorBlock, {
        className: F.errorBlock,
        children: k.default.Messages.BILLING_ERROR_GENERIC
      }) : null, (0, l.jsx)(H, {
        premiumSubscription: t
      })]
    }), (0, l.jsxs)(m.ModalFooter, {
      align: T.default.Align.CENTER,
      justify: T.default.Justify.BETWEEN,
      children: [(0, l.jsx)(m.Button, {
        color: m.Button.Colors.RED,
        disabled: o,
        onClick: async () => {
          await w({
            setHasError: _,
            onClose: a,
            premiumSubscription: t,
            setIsCancelling: c,
            analyticsLocations: f,
            analyticsLocation: r
          })
        },
        children: k.default.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
          planPremiumType: S.default.getDisplayPremiumType(t.planId)
        })
      }), (0, l.jsx)(D.default, {
        onClick: s
      })]
    })]
  })
}

function Y(e) {
  var t;
  return {
    subscription_id: e.id,
    subscription_type: e.type,
    subscription_plan_id: null === (t = (0, S.getPremiumPlanItem)(e)) || void 0 === t ? void 0 : t.id,
    subscription_plan_gateway_plan_id: e.paymentGatewayPlanId
  }
}(a = s || (s = {}))[a.WHAT_YOU_LOSE = 1] = "WHAT_YOU_LOSE", a[a.CONFIRM = 2] = "CONFIRM", a[a.PREVIEW = 3] = "PREVIEW", a[a.CONFIRM_DISCOUNT = 4] = "CONFIRM_DISCOUNT", a[a.DISCOUNT_APPLIED = 5] = "DISCOUNT_APPLIED";
let K = {
  1: "What You're Losing",
  2: "Confirm Cancellation",
  3: "Preview Updated Subscription",
  4: "Confirm Discount",
  5: "Discount Successfully Applied"
};

function V(e) {
  var t;
  let n, {
      premiumSubscription: s,
      transitionState: a,
      onClose: r,
      analyticsLocations: u,
      analyticsLocation: c
    } = e,
    _ = i.useRef(new o.Environment),
    [I, M] = i.useState(null),
    p = null === (t = (0, S.getPremiumPlanItem)(s)) || void 0 === t ? void 0 : t.planId,
    T = null != p ? S.default.getPremiumType(p) : null;
  d(null != T, "Should not be cancelling Nitro without premiumType");
  let P = (0, E.default)();
  i.useEffect(() => {
    R.default.track(B.AnalyticEvents.CANCELLATION_FLOW_STARTED, Y(s))
  }, [s]);
  let A = T === j.PremiumTypes.TIER_0 || T === j.PremiumTypes.TIER_1 || T === j.PremiumTypes.TIER_2,
    L = A ? 1 : 2,
    {
      AnalyticsLocationProvider: O
    } = (0, N.default)(u, C.default.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL),
    [D, v, b, w] = function(e, t, n) {
      let [s, a] = i.useState(e), [l, r] = i.useState(Date.now()), [u] = i.useState(Date.now()), o = i.useCallback(e => {
        R.default.track(B.AnalyticEvents.CANCELLATION_FLOW_STEP, {
          from_step: K[s],
          to_step: K[e],
          step_duration_ms: Date.now() - l,
          flow_duration_ms: Date.now() - u,
          location_stack: n,
          ...Y(t)
        }), a(e), r(Date.now())
      }, [n, u, l, s, t]);
      return [s, o, l, u]
    }(L, s, u);
  (0, U.useUnsupportedExternalSubscriptionModalHandler)(s, r, !1);
  let H = e => {
      r(), R.default.track(B.AnalyticEvents.CANCELLATION_FLOW_STEP, {
        from_step: K[e],
        to_step: null,
        step_duration_ms: Date.now() - b,
        flow_duration_ms: Date.now() - w,
        location_stack: u,
        ...Y(s)
      })
    },
    V = (0, g.useShouldFetchChurnOffer)(),
    {
      churnUserDiscountOffer: Z,
      isFetchingChurnDiscountOffer: z
    } = (0, g.useFetchChurnUserDiscountOffer)(!V || 1 !== D);
  switch (D) {
    case 1:
      n = (0, l.jsx)(y.default, {
        premiumType: T,
        titleText: k.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_TITLE,
        subtitleText: k.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SUBTITLE.format(),
        footer: (0, l.jsxs)("div", {
          className: F.whatYouLoseButtonContainer,
          children: [(0, l.jsx)(m.Button, {
            onClick: () => v(2),
            children: k.default.Messages.CONTINUE
          }), (0, l.jsx)(m.Button, {
            look: m.Button.Looks.LINK,
            color: (0, f.isThemeDark)(P) ? m.Button.Colors.WHITE : m.Button.Colors.PRIMARY,
            onClick: () => H(D),
            children: k.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
          })]
        }),
        onClose: () => H(D),
        onDiscountClaim: () => v(4),
        onContinue: () => v(2),
        isLoading: V && z,
        churnUserDiscountOffer: Z,
        analyticsLocations: u
      });
      break;
    case 2:
      n = (0, l.jsx)(G, {
        premiumSubscription: s,
        premiumType: T,
        setStep: v,
        onClose: () => H(D),
        whatYouLoseExperienceEnabled: A,
        analyticsLocation: c
      });
      break;
    case 3:
      n = (0, l.jsx)(W, {
        premiumSubscription: s,
        premiumType: T,
        onBack: () => v(2),
        onClose: () => H(D),
        analyticsLocation: c
      });
      break;
    case 4:
      n = (0, l.jsx)(x.default, {
        premiumSubscription: s,
        premiumType: T,
        onClose: () => H(D),
        onConfirm: () => v(5),
        userDiscountOffer: Z
      });
      break;
    case 5:
      n = (0, l.jsx)(h.PremiumSubscritionDiscountAppliedModal, {
        premiumSubscription: s,
        premiumType: T,
        onClose: () => H(D),
        confettiCanvas: I,
        userDiscountOffer: Z
      });
      break;
    default:
      throw Error("Unexpected step: ".concat(D))
  }
  return (0, l.jsxs)(O, {
    children: [(0, l.jsx)(o.ConfettiCanvas, {
      ref: M,
      className: F.confettiCanvas,
      environment: _.current
    }), (0, l.jsx)(m.ModalRoot, {
      transitionState: a,
      children: n
    })]
  })
}