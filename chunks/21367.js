"use strict";
s.r(t), s.d(t, {
  Steps: function() {
    return n
  },
  default: function() {
    return V
  }
}), s("222007"), s("70102");
var n, a, i = s("37983"),
  l = s("884691"),
  r = s("414456"),
  u = s.n(r),
  o = s("516555"),
  c = s("627445"),
  d = s.n(c),
  _ = s("446674"),
  f = s("819855"),
  m = s("77078"),
  E = s("850068"),
  I = s("841098"),
  C = s("812204"),
  N = s("685665"),
  M = s("619935"),
  p = s("10514"),
  T = s("145131"),
  R = s("599110"),
  P = s("701909"),
  S = s("719923"),
  A = s("153160"),
  L = s("809071"),
  g = s("182650"),
  O = s("883662"),
  x = s("471131"),
  h = s("398309"),
  y = s("360262"),
  D = s("177998"),
  v = s("146163"),
  b = s("510928"),
  U = s("661128"),
  j = s("646718"),
  B = s("49111"),
  k = s("782340"),
  F = s("871556");
async function w(e) {
  let {
    premiumSubscription: t,
    onClose: s,
    setHasError: n,
    setIsCancelling: a,
    analyticsLocations: i,
    analyticsLocation: l
  } = e;
  try {
    if (a(!0), n(!1), t.status === B.SubscriptionStatusTypes.PAST_DUE) await (0, E.cancelSubscription)(t.id, i, l);
    else {
      var r, u;
      let e = null !== (u = null === (r = t.renewalMutations) || void 0 === r ? void 0 : r.items) && void 0 !== u ? u : t.items;
      await (0, E.updateSubscription)(t, {
        items: (0, S.getItemsWithoutPremiumPlanItem)(e)
      }, i, l)
    }
    s()
  } catch {
    n(!0), a(!1)
  }
}

function G(e) {
  var t;
  let {
    premiumSubscription: s,
    premiumType: n,
    setStep: a,
    onClose: r,
    whatYouLoseExperienceEnabled: u,
    analyticsLocation: o
  } = e, c = (0, M.useBlockedPaymentsConfig)(), [d, _] = l.useState(!1), [E, C] = l.useState(!1), p = (0, I.default)(), {
    analyticsLocations: R
  } = (0, N.default)(), A = null;
  A = s.status === B.SubscriptionStatusTypes.PAST_DUE ? k.default.Messages.PREMIUM_CANCEL_PAST_DUE_CONFIRM_BODY : n === j.PremiumTypes.TIER_0 ? c ? k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0_PAYMENT_BLOCKED_RUSSIA.format({
    date: s.currentPeriodEnd,
    helpdeskArticle: P.default.getArticleURL(B.HelpdeskArticles.BLOCKED_PAYMENTS)
  }) : k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0.format({
    date: s.currentPeriodEnd
  }) : n === j.PremiumTypes.TIER_1 ? c ? k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1_PAYMENT_BLOCKED_RUSSIA.format({
    date: s.currentPeriodEnd,
    helpdeskArticle: P.default.getArticleURL(B.HelpdeskArticles.BLOCKED_PAYMENTS)
  }) : k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1.format({
    date: s.currentPeriodEnd
  }) : c ? k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2_PAYMENT_BLOCKED_RUSSIA.format({
    date: s.currentPeriodEnd,
    helpdeskArticle: P.default.getArticleURL(B.HelpdeskArticles.BLOCKED_PAYMENTS)
  }) : k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2.format({
    date: s.currentPeriodEnd
  });
  let L = s.items.some(e => {
      let {
        planId: t
      } = e;
      return !j.PREMIUM_PLANS.has(t)
    }),
    g = L && null == s.renewalMutations || (null === (t = s.renewalMutations) || void 0 === t ? void 0 : t.items.find(e => {
      let {
        planId: t
      } = e;
      return !j.PREMIUM_PLANS.has(t)
    })) != null,
    O = g ? (0, i.jsx)(m.Button, {
      onClick: () => a(3),
      children: k.default.Messages.NEXT
    }) : (0, i.jsx)(m.Button, {
      color: m.Button.Colors.RED,
      disabled: d,
      onClick: async () => {
        await w({
          setHasError: C,
          onClose: r,
          premiumSubscription: s,
          setIsCancelling: _,
          analyticsLocations: R,
          analyticsLocation: o
        })
      },
      children: u ? k.default.Messages.CONFIRM : k.default.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
        planPremiumType: S.default.getDisplayPremiumType(s.planId)
      })
    }),
    x = (0, i.jsx)(m.Button, {
      look: m.Button.Looks.LINK,
      color: (0, f.isThemeLight)(p) ? m.Button.Colors.PRIMARY : m.Button.Colors.WHITE,
      onClick: r,
      children: u ? k.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK : k.default.Messages.CANCEL
    });
  return (0, i.jsxs)(i.Fragment, {
    children: [u ? (0, i.jsx)(b.default, {
      premiumType: n,
      className: F.cancellationHeader,
      onClose: r
    }) : (0, i.jsxs)(m.ModalHeader, {
      separator: !1,
      children: [(0, i.jsx)(m.FormTitle, {
        tag: m.FormTitleTags.H4,
        children: k.default.Messages.PREMIUM_CANCEL_CONFIRM_TITLE.format({
          planPremiumType: S.default.getDisplayPremiumType(s.planId)
        })
      }), (0, i.jsx)(m.ModalCloseButton, {
        onClick: r
      })]
    }), (0, i.jsxs)(m.ModalContent, {
      className: F.body,
      children: [E ? (0, i.jsx)(m.FormErrorBlock, {
        className: F.errorBlock,
        children: k.default.Messages.BILLING_ERROR_GENERIC
      }) : null, (0, i.jsx)("div", {
        className: F.cancelImage
      }), (0, i.jsx)("div", {
        children: A
      })]
    }), (0, i.jsxs)(m.ModalFooter, {
      justify: T.default.Justify.START,
      children: [O, x]
    })]
  })
}

function H(e) {
  var t, s;
  let {
    premiumSubscription: n
  } = e, {
    analyticsLocations: a
  } = (0, N.default)(), [l] = (0, L.useSubscriptionInvoicePreview)({
    subscriptionId: n.id,
    items: (0, S.getItemsWithoutPremiumPlanItem)(null !== (s = null === (t = n.renewalMutations) || void 0 === t ? void 0 : t.items) && void 0 !== s ? s : n.items),
    renewal: !0,
    analyticsLocations: a,
    analyticsLocation: C.default.CANCEL_INVOICE_PREVIEW
  }), r = (0, _.useStateFromStores)([p.default], () => p.default.get(n.planId));
  if (null == l || null == r) return (0, i.jsx)(m.Spinner, {
    className: F.loading
  });
  let {
    intervalType: u,
    intervalCount: o
  } = S.default.getIntervalForInvoice(l);
  return (0, i.jsxs)("div", {
    className: F.bodyText,
    children: [(0, i.jsx)("div", {
      className: F.renewalInvoiceDate,
      children: 0 !== l.total ? k.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE_WITH_CHARGE.format({
        renewalDate: l.subscriptionPeriodStart,
        rate: (0, A.formatRate)((0, A.formatPrice)(l.total, l.currency), u, o)
      }) : k.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
        renewalDate: l.subscriptionPeriodStart
      })
    }), (0, i.jsxs)(O.PremiumInvoiceTable, {
      children: [(0, i.jsx)(O.PremiumInvoiceTableHeader, {
        children: k.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
      }), (0, i.jsx)(O.PremiumInvoiceTableRow, {
        label: k.default.Messages.PREMIUM_SUBSCRIPTION_CANCELLED.format({
          planName: S.default.getDisplayName(r.id)
        }),
        value: (0, S.getFormattedRateForPlan)(r),
        className: F.invoiceCancelRow
      }), (0, i.jsx)(O.PremiumInvoiceTableDivider, {}), (0, i.jsx)(v.SubscriptionInvoiceFooter, {
        premiumSubscription: n,
        renewalInvoice: l,
        isUpdate: !0
      })]
    })]
  })
}

function W(e) {
  let {
    premiumSubscription: t,
    premiumType: s,
    onBack: n,
    onClose: a,
    analyticsLocation: r
  } = e, [o, c] = l.useState(!1), [d, _] = l.useState(!1), {
    analyticsLocations: f
  } = (0, N.default)();
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(b.default, {
      premiumType: s,
      onClose: a
    }), (0, i.jsxs)(m.ModalContent, {
      className: u(F.previewStep, F.body),
      children: [d ? (0, i.jsx)(m.FormErrorBlock, {
        className: F.errorBlock,
        children: k.default.Messages.BILLING_ERROR_GENERIC
      }) : null, (0, i.jsx)(H, {
        premiumSubscription: t
      })]
    }), (0, i.jsxs)(m.ModalFooter, {
      align: T.default.Align.CENTER,
      justify: T.default.Justify.BETWEEN,
      children: [(0, i.jsx)(m.Button, {
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
      }), (0, i.jsx)(D.default, {
        onClick: n
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
}(a = n || (n = {}))[a.WHAT_YOU_LOSE = 1] = "WHAT_YOU_LOSE", a[a.CONFIRM = 2] = "CONFIRM", a[a.PREVIEW = 3] = "PREVIEW", a[a.CONFIRM_DISCOUNT = 4] = "CONFIRM_DISCOUNT", a[a.DISCOUNT_APPLIED = 5] = "DISCOUNT_APPLIED";
let K = {
  1: "What You're Losing",
  2: "Confirm Cancellation",
  3: "Preview Updated Subscription",
  4: "Confirm Discount",
  5: "Discount Successfully Applied"
};

function V(e) {
  var t;
  let s, {
      premiumSubscription: n,
      transitionState: a,
      onClose: r,
      analyticsLocations: u,
      analyticsLocation: c
    } = e,
    _ = l.useRef(new o.Environment),
    [E, M] = l.useState(null),
    p = null === (t = (0, S.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId,
    T = null != p ? S.default.getPremiumType(p) : null;
  d(null != T, "Should not be cancelling Nitro without premiumType");
  let P = (0, I.default)();
  l.useEffect(() => {
    R.default.track(B.AnalyticEvents.CANCELLATION_FLOW_STARTED, Y(n))
  }, [n]);
  let A = T === j.PremiumTypes.TIER_0 || T === j.PremiumTypes.TIER_1 || T === j.PremiumTypes.TIER_2,
    L = A ? 1 : 2,
    {
      AnalyticsLocationProvider: O
    } = (0, N.default)(u, C.default.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL),
    [D, v, b, w] = function(e, t, s) {
      let [n, a] = l.useState(e), [i, r] = l.useState(Date.now()), [u] = l.useState(Date.now()), o = l.useCallback(e => {
        R.default.track(B.AnalyticEvents.CANCELLATION_FLOW_STEP, {
          from_step: K[n],
          to_step: K[e],
          step_duration_ms: Date.now() - i,
          flow_duration_ms: Date.now() - u,
          location_stack: s,
          ...Y(t)
        }), a(e), r(Date.now())
      }, [s, u, i, n, t]);
      return [n, o, i, u]
    }(L, n, u);
  (0, U.useUnsupportedExternalSubscriptionModalHandler)(n, r, !1);
  let H = e => {
      r(), R.default.track(B.AnalyticEvents.CANCELLATION_FLOW_STEP, {
        from_step: K[e],
        to_step: null,
        step_duration_ms: Date.now() - b,
        flow_duration_ms: Date.now() - w,
        location_stack: u,
        ...Y(n)
      })
    },
    V = (0, g.useShouldFetchChurnOffer)(),
    {
      churnUserDiscountOffer: Z,
      isFetchingChurnDiscountOffer: z
    } = (0, g.useFetchChurnUserDiscountOffer)(!V || 1 !== D);
  switch (D) {
    case 1:
      s = (0, i.jsx)(y.default, {
        premiumType: T,
        titleText: k.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_TITLE,
        subtitleText: k.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SUBTITLE.format(),
        footer: (0, i.jsxs)("div", {
          className: F.whatYouLoseButtonContainer,
          children: [(0, i.jsx)(m.Button, {
            onClick: () => v(2),
            children: k.default.Messages.CONTINUE
          }), (0, i.jsx)(m.Button, {
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
      s = (0, i.jsx)(G, {
        premiumSubscription: n,
        premiumType: T,
        setStep: v,
        onClose: () => H(D),
        whatYouLoseExperienceEnabled: A,
        analyticsLocation: c
      });
      break;
    case 3:
      s = (0, i.jsx)(W, {
        premiumSubscription: n,
        premiumType: T,
        onBack: () => v(2),
        onClose: () => H(D),
        analyticsLocation: c
      });
      break;
    case 4:
      s = (0, i.jsx)(x.default, {
        premiumSubscription: n,
        premiumType: T,
        onClose: () => H(D),
        onConfirm: () => v(5),
        userDiscountOffer: Z
      });
      break;
    case 5:
      s = (0, i.jsx)(h.PremiumSubscritionDiscountAppliedModal, {
        premiumSubscription: n,
        premiumType: T,
        onClose: () => H(D),
        confettiCanvas: E,
        userDiscountOffer: Z
      });
      break;
    default:
      throw Error("Unexpected step: ".concat(D))
  }
  return (0, i.jsxs)(O, {
    children: [(0, i.jsx)(o.ConfettiCanvas, {
      ref: M,
      className: F.confettiCanvas,
      environment: _.current
    }), (0, i.jsx)(m.ModalRoot, {
      transitionState: a,
      children: s
    })]
  })
}