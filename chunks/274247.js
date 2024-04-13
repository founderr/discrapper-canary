"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
}), s("315314"), s("610138"), s("216116"), s("78328"), s("815648"), s("47120");
var n = s("735250"),
  r = s("470079"),
  i = s("153832"),
  l = s("544891"),
  a = s("355467"),
  o = s("591759"),
  C = s("987209"),
  d = s("598"),
  u = s("409813"),
  c = s("35248"),
  p = s("362755"),
  f = s("51499"),
  x = s("614277"),
  _ = s("981631"),
  m = s("474936");

function L(e) {
  let {
    handleStepChange: t
  } = e, {
    selectedPlan: s,
    browserCheckoutState: L,
    browserCheckoutStateLoadId: h,
    contextMetadata: E
  } = (0, d.usePaymentContext)(), {
    isGift: S
  } = (0, C.useGiftContext)(), [j, P] = r.useState(!1);
  return r.useEffect(() => {
    var e;
    !j && (P(!0), (0, a.startBrowserCheckout)(E.loadId), ! function(e, t, s, n) {
      let r = _.Endpoints.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, s),
        a = new URL(o.default.makeUrl(_.Routes.BILLING_LOGIN_HANDOFF)),
        C = (0, i.v4)();
      a.searchParams.append("handoff_key", C), a.searchParams.append("redirect_to", r), l.HTTP.post({
        url: _.Endpoints.HANDOFF,
        body: {
          key: C
        },
        oldFormErrors: !0
      }).then(e => {
        a.searchParams.append("handoff_token", e.body.handoff_token), window.open(a.href)
      }, () => {
        n()
      })
    }(null !== (e = null == s ? void 0 : s.id) && void 0 !== e ? e : m.SubscriptionPlans.PREMIUM_MONTH_TIER_2, S, E.loadId, () => t(u.Step.ADD_PAYMENT_STEPS)))
  }, [s, S, j, P, E, t]), r.useEffect(() => {
    h === E.loadId && L === p.BrowserCheckoutState.DONE && t(u.Step.CONFIRM)
  }, [L, h, E, t]), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(f.default, {}), (0, n.jsx)(x.PaymentPortalBody, {
      children: (0, n.jsx)(c.AwaitingBrowserCheckoutStepBody, {})
    }), (0, n.jsx)(x.PaymentPortalFooter, {
      children: (0, n.jsx)(c.AwaitingBrowserCheckoutStepFooter, {
        onStepChange: t,
        onBackClick: () => t(u.Step.PLAN_SELECT)
      })
    })]
  })
}