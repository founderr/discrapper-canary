"use strict";
a.r(t), a.d(t, {
  Steps: function() {
    return s
  },
  default: function() {
    return W
  }
}), a("222007"), a("70102");
var s, n, l = a("37983"),
  i = a("884691"),
  r = a("414456"),
  o = a.n(r),
  u = a("627445"),
  c = a.n(u),
  d = a("446674"),
  _ = a("819855"),
  m = a("77078"),
  f = a("850068"),
  I = a("841098"),
  E = a("812204"),
  C = a("685665"),
  N = a("619935"),
  p = a("10514"),
  M = a("145131"),
  R = a("599110"),
  T = a("701909"),
  L = a("719923"),
  P = a("153160"),
  A = a("809071"),
  g = a("182650"),
  S = a("883662"),
  O = a("330189"),
  h = a("360262"),
  x = a("177998"),
  y = a("146163"),
  D = a("510928"),
  b = a("661128"),
  v = a("646718"),
  U = a("49111"),
  k = a("782340"),
  j = a("871556");
async function B(e) {
  let {
    premiumSubscription: t,
    onClose: a,
    setHasError: s,
    setIsCancelling: n,
    analyticsLocations: l,
    analyticsLocation: i
  } = e;
  try {
    if (n(!0), s(!1), t.status === U.SubscriptionStatusTypes.PAST_DUE) await (0, f.cancelSubscription)(t.id, l, i);
    else {
      var r, o;
      let e = null !== (o = null === (r = t.renewalMutations) || void 0 === r ? void 0 : r.items) && void 0 !== o ? o : t.items;
      await (0, f.updateSubscription)(t, {
        items: (0, L.getItemsWithoutPremiumPlanItem)(e)
      }, l, i)
    }
    a()
  } catch {
    s(!0), n(!1)
  }
}

function G(e) {
  var t;
  let {
    premiumSubscription: a,
    premiumType: s,
    setStep: n,
    onClose: r,
    whatYouLoseExperienceEnabled: o,
    analyticsLocation: u
  } = e, c = (0, N.useBlockedPaymentsConfig)(), [d, f] = i.useState(!1), [E, p] = i.useState(!1), R = (0, I.default)(), {
    analyticsLocations: P
  } = (0, C.default)(), A = null;
  A = a.status === U.SubscriptionStatusTypes.PAST_DUE ? k.default.Messages.PREMIUM_CANCEL_PAST_DUE_CONFIRM_BODY : s === v.PremiumTypes.TIER_0 ? c ? k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0_PAYMENT_BLOCKED_RUSSIA.format({
    date: a.currentPeriodEnd,
    helpdeskArticle: T.default.getArticleURL(U.HelpdeskArticles.BLOCKED_PAYMENTS)
  }) : k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0.format({
    date: a.currentPeriodEnd
  }) : s === v.PremiumTypes.TIER_1 ? c ? k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1_PAYMENT_BLOCKED_RUSSIA.format({
    date: a.currentPeriodEnd,
    helpdeskArticle: T.default.getArticleURL(U.HelpdeskArticles.BLOCKED_PAYMENTS)
  }) : k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1.format({
    date: a.currentPeriodEnd
  }) : c ? k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2_PAYMENT_BLOCKED_RUSSIA.format({
    date: a.currentPeriodEnd,
    helpdeskArticle: T.default.getArticleURL(U.HelpdeskArticles.BLOCKED_PAYMENTS)
  }) : k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2.format({
    date: a.currentPeriodEnd
  });
  let g = a.items.some(e => {
      let {
        planId: t
      } = e;
      return !v.PREMIUM_PLANS.has(t)
    }),
    S = g && null == a.renewalMutations || (null === (t = a.renewalMutations) || void 0 === t ? void 0 : t.items.find(e => {
      let {
        planId: t
      } = e;
      return !v.PREMIUM_PLANS.has(t)
    })) != null,
    O = S ? (0, l.jsx)(m.Button, {
      onClick: () => n(3),
      children: k.default.Messages.NEXT
    }) : (0, l.jsx)(m.Button, {
      color: m.Button.Colors.RED,
      disabled: d,
      onClick: async () => {
        await B({
          setHasError: p,
          onClose: r,
          premiumSubscription: a,
          setIsCancelling: f,
          analyticsLocations: P,
          analyticsLocation: u
        })
      },
      children: o ? k.default.Messages.CONFIRM : k.default.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
        planPremiumType: L.default.getDisplayPremiumType(a.planId)
      })
    }),
    h = (0, l.jsx)(m.Button, {
      look: m.Button.Looks.LINK,
      color: (0, _.isThemeLight)(R) ? m.Button.Colors.PRIMARY : m.Button.Colors.WHITE,
      onClick: r,
      children: o ? k.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK : k.default.Messages.CANCEL
    });
  return (0, l.jsxs)(l.Fragment, {
    children: [o ? (0, l.jsx)(D.default, {
      premiumType: s,
      className: j.cancellationHeader,
      onClose: r
    }) : (0, l.jsxs)(m.ModalHeader, {
      separator: !1,
      children: [(0, l.jsx)(m.FormTitle, {
        tag: m.FormTitleTags.H4,
        children: k.default.Messages.PREMIUM_CANCEL_CONFIRM_TITLE.format({
          planPremiumType: L.default.getDisplayPremiumType(a.planId)
        })
      }), (0, l.jsx)(m.ModalCloseButton, {
        onClick: r
      })]
    }), (0, l.jsxs)(m.ModalContent, {
      className: j.body,
      children: [E ? (0, l.jsx)(m.FormErrorBlock, {
        className: j.errorBlock,
        children: k.default.Messages.BILLING_ERROR_GENERIC
      }) : null, (0, l.jsx)("div", {
        className: j.cancelImage
      }), (0, l.jsx)("div", {
        children: A
      })]
    }), (0, l.jsxs)(m.ModalFooter, {
      justify: M.default.Justify.START,
      children: [O, h]
    })]
  })
}

function w(e) {
  var t, a;
  let {
    premiumSubscription: s
  } = e, {
    analyticsLocations: n
  } = (0, C.default)(), [i] = (0, A.useSubscriptionInvoicePreview)({
    subscriptionId: s.id,
    items: (0, L.getItemsWithoutPremiumPlanItem)(null !== (a = null === (t = s.renewalMutations) || void 0 === t ? void 0 : t.items) && void 0 !== a ? a : s.items),
    renewal: !0,
    analyticsLocations: n,
    analyticsLocation: E.default.CANCEL_INVOICE_PREVIEW
  }), r = (0, d.useStateFromStores)([p.default], () => p.default.get(s.planId));
  if (null == i || null == r) return (0, l.jsx)(m.Spinner, {
    className: j.loading
  });
  let {
    intervalType: o,
    intervalCount: u
  } = L.default.getIntervalForInvoice(i);
  return (0, l.jsxs)("div", {
    className: j.bodyText,
    children: [(0, l.jsx)("div", {
      className: j.renewalInvoiceDate,
      children: 0 !== i.total ? k.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE_WITH_CHARGE.format({
        renewalDate: i.subscriptionPeriodStart,
        rate: (0, P.formatRate)((0, P.formatPrice)(i.total, i.currency), o, u)
      }) : k.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
        renewalDate: i.subscriptionPeriodStart
      })
    }), (0, l.jsxs)(S.PremiumInvoiceTable, {
      children: [(0, l.jsx)(S.PremiumInvoiceTableHeader, {
        children: k.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
      }), (0, l.jsx)(S.PremiumInvoiceTableRow, {
        label: k.default.Messages.PREMIUM_SUBSCRIPTION_CANCELLED.format({
          planName: L.default.getDisplayName(r.id)
        }),
        value: (0, L.getFormattedRateForPlan)(r),
        className: j.invoiceCancelRow
      }), (0, l.jsx)(S.PremiumInvoiceTableDivider, {}), (0, l.jsx)(y.SubscriptionInvoiceFooter, {
        premiumSubscription: s,
        renewalInvoice: i,
        isUpdate: !0
      })]
    })]
  })
}

function F(e) {
  let {
    premiumSubscription: t,
    premiumType: a,
    onBack: s,
    onClose: n,
    analyticsLocation: r
  } = e, [u, c] = i.useState(!1), [d, _] = i.useState(!1), {
    analyticsLocations: f
  } = (0, C.default)();
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(D.default, {
      premiumType: a,
      onClose: n
    }), (0, l.jsxs)(m.ModalContent, {
      className: o(j.previewStep, j.body),
      children: [d ? (0, l.jsx)(m.FormErrorBlock, {
        className: j.errorBlock,
        children: k.default.Messages.BILLING_ERROR_GENERIC
      }) : null, (0, l.jsx)(w, {
        premiumSubscription: t
      })]
    }), (0, l.jsxs)(m.ModalFooter, {
      align: M.default.Align.CENTER,
      justify: M.default.Justify.BETWEEN,
      children: [(0, l.jsx)(m.Button, {
        color: m.Button.Colors.RED,
        disabled: u,
        onClick: async () => {
          await B({
            setHasError: _,
            onClose: n,
            premiumSubscription: t,
            setIsCancelling: c,
            analyticsLocations: f,
            analyticsLocation: r
          })
        },
        children: k.default.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
          planPremiumType: L.default.getDisplayPremiumType(t.planId)
        })
      }), (0, l.jsx)(x.default, {
        onClick: s
      })]
    })]
  })
}

function H(e) {
  var t;
  return {
    subscription_id: e.id,
    subscription_type: e.type,
    subscription_plan_id: null === (t = (0, L.getPremiumPlanItem)(e)) || void 0 === t ? void 0 : t.id,
    subscription_plan_gateway_plan_id: e.paymentGatewayPlanId
  }
}(n = s || (s = {}))[n.WHAT_YOU_LOSE = 1] = "WHAT_YOU_LOSE", n[n.CONFIRM = 2] = "CONFIRM", n[n.PREVIEW = 3] = "PREVIEW", n[n.CONFIRM_DISCOUNT = 4] = "CONFIRM_DISCOUNT";
let Y = {
  1: "What You're Losing",
  2: "Confirm Cancellation",
  3: "Preview Updated Subscription",
  4: "Confirm Discount"
};

function W(e) {
  var t;
  let a, {
      premiumSubscription: s,
      transitionState: n,
      onClose: r,
      analyticsLocations: o,
      analyticsLocation: u
    } = e,
    d = null === (t = (0, L.getPremiumPlanItem)(s)) || void 0 === t ? void 0 : t.planId,
    f = null != d ? L.default.getPremiumType(d) : null;
  c(null != f, "Should not be cancelling Nitro without premiumType");
  let N = (0, I.default)();
  i.useEffect(() => {
    R.default.track(U.AnalyticEvents.CANCELLATION_FLOW_STARTED, H(s))
  }, [s]);
  let p = f === v.PremiumTypes.TIER_0 || f === v.PremiumTypes.TIER_1 || f === v.PremiumTypes.TIER_2,
    M = p ? 1 : 2,
    {
      AnalyticsLocationProvider: T
    } = (0, C.default)(o, E.default.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL),
    [P, A, S, x] = function(e, t, a) {
      let [s, n] = i.useState(e), [l, r] = i.useState(Date.now()), [o] = i.useState(Date.now()), u = i.useCallback(e => {
        R.default.track(U.AnalyticEvents.CANCELLATION_FLOW_STEP, {
          from_step: Y[s],
          to_step: Y[e],
          step_duration_ms: Date.now() - l,
          flow_duration_ms: Date.now() - o,
          location_stack: a,
          ...H(t)
        }), n(e), r(Date.now())
      }, [a, o, l, s, t]);
      return [s, u, l, o]
    }(M, s, o);
  (0, b.useUnsupportedExternalSubscriptionModalHandler)(s, r, !1);
  let y = e => {
      r(), R.default.track(U.AnalyticEvents.CANCELLATION_FLOW_STEP, {
        from_step: Y[e],
        to_step: null,
        step_duration_ms: Date.now() - S,
        flow_duration_ms: Date.now() - x,
        location_stack: o,
        ...H(s)
      })
    },
    D = (0, g.useShouldFetchChurnOffer)(),
    {
      churnUserDiscountOffer: B,
      isFetchingChurnDiscountOffer: w
    } = (0, g.useFetchChurnUserDiscountOffer)(!D || 1 !== P);
  switch (P) {
    case 1:
      a = (0, l.jsx)(h.default, {
        premiumType: f,
        titleText: k.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_TITLE,
        subtitleText: k.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SUBTITLE.format(),
        footer: (0, l.jsxs)("div", {
          className: j.whatYouLoseButtonContainer,
          children: [(0, l.jsx)(m.Button, {
            onClick: () => A(2),
            children: k.default.Messages.CONTINUE
          }), (0, l.jsx)(m.Button, {
            look: m.Button.Looks.LINK,
            color: (0, _.isThemeDark)(N) ? m.Button.Colors.WHITE : m.Button.Colors.PRIMARY,
            onClick: () => y(P),
            children: k.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
          })]
        }),
        onClose: () => y(P),
        onDiscountClaim: () => A(4),
        onContinue: () => A(2),
        isLoading: D && w,
        churnUserDiscountOffer: B
      });
      break;
    case 2:
      a = (0, l.jsx)(G, {
        premiumSubscription: s,
        premiumType: f,
        setStep: A,
        onClose: () => y(P),
        whatYouLoseExperienceEnabled: p,
        analyticsLocation: u
      });
      break;
    case 3:
      a = (0, l.jsx)(F, {
        premiumSubscription: s,
        premiumType: f,
        onBack: () => A(2),
        onClose: () => y(P),
        analyticsLocation: u
      });
      break;
    case 4:
      a = (0, l.jsx)(O.default, {
        premiumSubscription: s,
        premiumType: f,
        onClose: () => y(P),
        userDiscountOffer: B
      });
      break;
    default:
      throw Error("Unexpected step: ".concat(P))
  }
  return (0, l.jsx)(T, {
    children: (0, l.jsx)(m.ModalRoot, {
      transitionState: n,
      children: a
    })
  })
}