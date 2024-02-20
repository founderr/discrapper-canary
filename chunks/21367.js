"use strict";
a.r(t), a.d(t, {
  Steps: function() {
    return n
  },
  default: function() {
    return W
  }
}), a("222007"), a("70102");
var n, s, l = a("37983"),
  r = a("884691"),
  i = a("414456"),
  o = a.n(i),
  u = a("627445"),
  d = a.n(u),
  c = a("446674"),
  _ = a("819855"),
  f = a("77078"),
  E = a("850068"),
  I = a("841098"),
  m = a("812204"),
  C = a("685665"),
  N = a("619935"),
  p = a("10514"),
  M = a("145131"),
  L = a("599110"),
  R = a("701909"),
  T = a("719923"),
  P = a("153160"),
  A = a("809071"),
  S = a("182650"),
  g = a("883662"),
  y = a("360262"),
  O = a("177998"),
  h = a("146163"),
  b = a("510928"),
  v = a("661128"),
  x = a("646718"),
  D = a("49111"),
  B = a("782340"),
  k = a("871556");
async function U(e) {
  let {
    premiumSubscription: t,
    onClose: a,
    setHasError: n,
    setIsCancelling: s,
    analyticsLocations: l,
    analyticsLocation: r
  } = e;
  try {
    if (s(!0), n(!1), t.status === D.SubscriptionStatusTypes.PAST_DUE) await (0, E.cancelSubscription)(t.id, l, r);
    else {
      var i, o;
      let e = null !== (o = null === (i = t.renewalMutations) || void 0 === i ? void 0 : i.items) && void 0 !== o ? o : t.items;
      await (0, E.updateSubscription)(t, {
        items: (0, T.getItemsWithoutPremiumPlanItem)(e)
      }, l, r)
    }
    a()
  } catch {
    n(!0), s(!1)
  }
}

function G(e) {
  var t;
  let {
    premiumSubscription: a,
    premiumType: n,
    setStep: s,
    onClose: i,
    whatYouLoseExperienceEnabled: o,
    analyticsLocation: u
  } = e, d = (0, N.useBlockedPaymentsConfig)(), [c, E] = r.useState(!1), [m, p] = r.useState(!1), L = (0, I.default)(), {
    analyticsLocations: P
  } = (0, C.default)(), A = null;
  A = a.status === D.SubscriptionStatusTypes.PAST_DUE ? B.default.Messages.PREMIUM_CANCEL_PAST_DUE_CONFIRM_BODY : n === x.PremiumTypes.TIER_0 ? d ? B.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0_PAYMENT_BLOCKED_RUSSIA.format({
    date: a.currentPeriodEnd,
    helpdeskArticle: R.default.getArticleURL(D.HelpdeskArticles.BLOCKED_PAYMENTS)
  }) : B.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0.format({
    date: a.currentPeriodEnd
  }) : n === x.PremiumTypes.TIER_1 ? d ? B.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1_PAYMENT_BLOCKED_RUSSIA.format({
    date: a.currentPeriodEnd,
    helpdeskArticle: R.default.getArticleURL(D.HelpdeskArticles.BLOCKED_PAYMENTS)
  }) : B.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1.format({
    date: a.currentPeriodEnd
  }) : d ? B.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2_PAYMENT_BLOCKED_RUSSIA.format({
    date: a.currentPeriodEnd,
    helpdeskArticle: R.default.getArticleURL(D.HelpdeskArticles.BLOCKED_PAYMENTS)
  }) : B.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2.format({
    date: a.currentPeriodEnd
  });
  let S = a.items.some(e => {
      let {
        planId: t
      } = e;
      return !x.PREMIUM_PLANS.has(t)
    }),
    g = S && null == a.renewalMutations || (null === (t = a.renewalMutations) || void 0 === t ? void 0 : t.items.find(e => {
      let {
        planId: t
      } = e;
      return !x.PREMIUM_PLANS.has(t)
    })) != null,
    y = g ? (0, l.jsx)(f.Button, {
      onClick: () => s(3),
      children: B.default.Messages.NEXT
    }) : (0, l.jsx)(f.Button, {
      color: f.Button.Colors.RED,
      disabled: c,
      onClick: async () => {
        await U({
          setHasError: p,
          onClose: i,
          premiumSubscription: a,
          setIsCancelling: E,
          analyticsLocations: P,
          analyticsLocation: u
        })
      },
      children: o ? B.default.Messages.CONFIRM : B.default.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
        planPremiumType: T.default.getDisplayPremiumType(a.planId)
      })
    }),
    O = (0, l.jsx)(f.Button, {
      look: f.Button.Looks.LINK,
      color: (0, _.isThemeLight)(L) ? f.Button.Colors.PRIMARY : f.Button.Colors.WHITE,
      onClick: i,
      children: o ? B.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK : B.default.Messages.CANCEL
    });
  return (0, l.jsxs)(l.Fragment, {
    children: [o ? (0, l.jsx)(b.default, {
      premiumType: n,
      className: k.cancellationHeader,
      onClose: i
    }) : (0, l.jsxs)(f.ModalHeader, {
      separator: !1,
      children: [(0, l.jsx)(f.FormTitle, {
        tag: f.FormTitleTags.H4,
        children: B.default.Messages.PREMIUM_CANCEL_CONFIRM_TITLE.format({
          planPremiumType: T.default.getDisplayPremiumType(a.planId)
        })
      }), (0, l.jsx)(f.ModalCloseButton, {
        onClick: i
      })]
    }), (0, l.jsxs)(f.ModalContent, {
      className: k.body,
      children: [m ? (0, l.jsx)(f.FormErrorBlock, {
        className: k.errorBlock,
        children: B.default.Messages.BILLING_ERROR_GENERIC
      }) : null, (0, l.jsx)("div", {
        className: k.cancelImage
      }), (0, l.jsx)("div", {
        children: A
      })]
    }), (0, l.jsxs)(f.ModalFooter, {
      justify: M.default.Justify.START,
      children: [y, O]
    })]
  })
}

function w(e) {
  var t, a;
  let {
    premiumSubscription: n
  } = e, {
    analyticsLocations: s
  } = (0, C.default)(), [r] = (0, A.useSubscriptionInvoicePreview)({
    subscriptionId: n.id,
    items: (0, T.getItemsWithoutPremiumPlanItem)(null !== (a = null === (t = n.renewalMutations) || void 0 === t ? void 0 : t.items) && void 0 !== a ? a : n.items),
    renewal: !0,
    analyticsLocations: s,
    analyticsLocation: m.default.CANCEL_INVOICE_PREVIEW
  }), i = (0, c.useStateFromStores)([p.default], () => p.default.get(n.planId));
  if (null == r || null == i) return (0, l.jsx)(f.Spinner, {
    className: k.loading
  });
  let {
    intervalType: o,
    intervalCount: u
  } = T.default.getIntervalForInvoice(r);
  return (0, l.jsxs)("div", {
    className: k.bodyText,
    children: [(0, l.jsx)("div", {
      className: k.renewalInvoiceDate,
      children: 0 !== r.total ? B.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE_WITH_CHARGE.format({
        renewalDate: r.subscriptionPeriodStart,
        rate: (0, P.formatRate)((0, P.formatPrice)(r.total, r.currency), o, u)
      }) : B.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
        renewalDate: r.subscriptionPeriodStart
      })
    }), (0, l.jsxs)(g.PremiumInvoiceTable, {
      children: [(0, l.jsx)(g.PremiumInvoiceTableHeader, {
        children: B.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
      }), (0, l.jsx)(g.PremiumInvoiceTableRow, {
        label: B.default.Messages.PREMIUM_SUBSCRIPTION_CANCELLED.format({
          planName: T.default.getDisplayName(i.id)
        }),
        value: (0, T.getFormattedRateForPlan)(i),
        className: k.invoiceCancelRow
      }), (0, l.jsx)(g.PremiumInvoiceTableDivider, {}), (0, l.jsx)(h.SubscriptionInvoiceFooter, {
        premiumSubscription: n,
        renewalInvoice: r,
        isUpdate: !0
      })]
    })]
  })
}

function j(e) {
  let {
    premiumSubscription: t,
    premiumType: a,
    onBack: n,
    onClose: s,
    analyticsLocation: i
  } = e, [u, d] = r.useState(!1), [c, _] = r.useState(!1), {
    analyticsLocations: E
  } = (0, C.default)();
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(b.default, {
      premiumType: a,
      onClose: s
    }), (0, l.jsxs)(f.ModalContent, {
      className: o(k.previewStep, k.body),
      children: [c ? (0, l.jsx)(f.FormErrorBlock, {
        className: k.errorBlock,
        children: B.default.Messages.BILLING_ERROR_GENERIC
      }) : null, (0, l.jsx)(w, {
        premiumSubscription: t
      })]
    }), (0, l.jsxs)(f.ModalFooter, {
      align: M.default.Align.CENTER,
      justify: M.default.Justify.BETWEEN,
      children: [(0, l.jsx)(f.Button, {
        color: f.Button.Colors.RED,
        disabled: u,
        onClick: async () => {
          await U({
            setHasError: _,
            onClose: s,
            premiumSubscription: t,
            setIsCancelling: d,
            analyticsLocations: E,
            analyticsLocation: i
          })
        },
        children: B.default.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
          planPremiumType: T.default.getDisplayPremiumType(t.planId)
        })
      }), (0, l.jsx)(O.default, {
        onClick: n
      })]
    })]
  })
}

function F(e) {
  var t;
  return {
    subscription_id: e.id,
    subscription_type: e.type,
    subscription_plan_id: null === (t = (0, T.getPremiumPlanItem)(e)) || void 0 === t ? void 0 : t.id,
    subscription_plan_gateway_plan_id: e.paymentGatewayPlanId
  }
}(s = n || (n = {}))[s.WHAT_YOU_LOSE = 1] = "WHAT_YOU_LOSE", s[s.CONFIRM = 2] = "CONFIRM", s[s.PREVIEW = 3] = "PREVIEW", s[s.CONFIRM_DISCOUNT = 4] = "CONFIRM_DISCOUNT";
let Y = {
  1: "What You're Losing",
  2: "Confirm Cancellation",
  3: "Preview Updated Subscription",
  4: "Confirm Discount"
};

function W(e) {
  var t;
  let a, {
      premiumSubscription: n,
      transitionState: s,
      onClose: i,
      analyticsLocations: o,
      analyticsLocation: u
    } = e,
    c = null === (t = (0, T.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId,
    E = null != c ? T.default.getPremiumType(c) : null;
  d(null != E, "Should not be cancelling Nitro without premiumType");
  let N = (0, I.default)();
  r.useEffect(() => {
    L.default.track(D.AnalyticEvents.CANCELLATION_FLOW_STARTED, F(n))
  }, [n]);
  let p = E === x.PremiumTypes.TIER_0 || E === x.PremiumTypes.TIER_1 || E === x.PremiumTypes.TIER_2,
    M = p ? 1 : 2,
    {
      AnalyticsLocationProvider: R
    } = (0, C.default)(o, m.default.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL),
    [P, A, g, O] = function(e, t, a) {
      let [n, s] = r.useState(e), [l, i] = r.useState(Date.now()), [o] = r.useState(Date.now()), u = r.useCallback(e => {
        L.default.track(D.AnalyticEvents.CANCELLATION_FLOW_STEP, {
          from_step: Y[n],
          to_step: Y[e],
          step_duration_ms: Date.now() - l,
          flow_duration_ms: Date.now() - o,
          location_stack: a,
          ...F(t)
        }), s(e), i(Date.now())
      }, [a, o, l, n, t]);
      return [n, u, l, o]
    }(M, n, o);
  (0, v.useUnsupportedExternalSubscriptionModalHandler)(n, i, !1);
  let h = e => {
      i(), L.default.track(D.AnalyticEvents.CANCELLATION_FLOW_STEP, {
        from_step: Y[e],
        to_step: null,
        step_duration_ms: Date.now() - g,
        flow_duration_ms: Date.now() - O,
        location_stack: o,
        ...F(n)
      })
    },
    b = (0, S.useShouldFetchChurnOffer)(),
    {
      churnUserDiscountOffer: U,
      isFetchingChurnDiscountOffer: w
    } = (0, S.useFetchChurnUserDiscountOffer)(!b || 1 !== P);
  switch (P) {
    case 1:
      a = (0, l.jsx)(y.default, {
        premiumType: E,
        titleText: B.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_TITLE,
        subtitleText: B.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SUBTITLE.format(),
        footer: (0, l.jsxs)("div", {
          className: k.whatYouLoseButtonContainer,
          children: [(0, l.jsx)(f.Button, {
            onClick: () => A(2),
            children: B.default.Messages.CONTINUE
          }), (0, l.jsx)(f.Button, {
            look: f.Button.Looks.LINK,
            color: (0, _.isThemeDark)(N) ? f.Button.Colors.WHITE : f.Button.Colors.PRIMARY,
            onClick: () => h(P),
            children: B.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
          })]
        }),
        onClose: () => h(P),
        onDiscountClaim: () => A(4),
        onContinue: () => A(2),
        isLoading: b && w,
        churnUserDiscountOffer: U
      });
      break;
    case 2:
      a = (0, l.jsx)(G, {
        premiumSubscription: n,
        premiumType: E,
        setStep: A,
        onClose: () => h(P),
        whatYouLoseExperienceEnabled: p,
        analyticsLocation: u
      });
      break;
    case 3:
      a = (0, l.jsx)(j, {
        premiumSubscription: n,
        premiumType: E,
        onBack: () => A(2),
        onClose: () => h(P),
        analyticsLocation: u
      });
      break;
    default:
      throw Error("Unexpected step: ".concat(P))
  }
  return (0, l.jsx)(R, {
    children: (0, l.jsx)(f.ModalRoot, {
      transitionState: s,
      children: a
    })
  })
}