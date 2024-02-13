"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var s = n("37983"),
  r = n("884691"),
  l = n("748820"),
  a = n("872717"),
  i = n("850068"),
  u = n("253981"),
  o = n("635357"),
  d = n("642906"),
  c = n("85336"),
  _ = n("149833"),
  I = n("523591"),
  E = n("153727"),
  f = n("650484"),
  S = n("49111"),
  P = n("646718");

function m(e) {
  let {
    handleStepChange: t
  } = e, {
    selectedPlan: n,
    browserCheckoutState: m,
    browserCheckoutStateLoadId: p,
    contextMetadata: T
  } = (0, d.usePaymentContext)(), {
    isGift: N
  } = (0, o.useGiftContext)(), [M, C] = r.useState(!1);
  return r.useEffect(() => {
    var e;
    !M && (C(!0), (0, i.startBrowserCheckout)(T.loadId), ! function(e, t, n, s) {
      let r = S.Endpoints.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n),
        i = new URL(u.default.makeUrl(S.Routes.BILLING_LOGIN_HANDOFF)),
        o = (0, l.v4)();
      i.searchParams.append("handoff_key", o), i.searchParams.append("redirect_to", r), a.default.post({
        url: S.Endpoints.HANDOFF,
        body: {
          key: o
        },
        oldFormErrors: !0
      }).then(e => {
        i.searchParams.append("handoff_token", e.body.handoff_token), window.open(i.href)
      }, () => {
        s()
      })
    }(null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : P.SubscriptionPlans.PREMIUM_MONTH_TIER_2, N, T.loadId, () => t(c.Step.ADD_PAYMENT_STEPS)))
  }, [n, N, M, C, T, t]), r.useEffect(() => {
    p === T.loadId && m === I.BrowserCheckoutState.DONE && t(c.Step.CONFIRM)
  }, [m, p, T, t]), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(E.default, {}), (0, s.jsx)(f.PaymentPortalBody, {
      children: (0, s.jsx)(_.AwaitingBrowserCheckoutStepBody, {})
    }), (0, s.jsx)(f.PaymentPortalFooter, {
      children: (0, s.jsx)(_.AwaitingBrowserCheckoutStepFooter, {
        onStepChange: t,
        onBackClick: () => t(c.Step.PLAN_SELECT)
      })
    })]
  })
}