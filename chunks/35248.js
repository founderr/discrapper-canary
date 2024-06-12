"use strict";
a.r(t), a.d(t, {
  AwaitingBrowserCheckoutStepBody: function() {
    return N
  },
  AwaitingBrowserCheckoutStepFooter: function() {
    return y
  }
}), a("315314"), a("610138"), a("216116"), a("78328"), a("815648"), a("47120");
var n = a("735250"),
  s = a("470079"),
  r = a("153832"),
  l = a("544891"),
  o = a("481060"),
  i = a("355467"),
  u = a("311821"),
  c = a("285952"),
  d = a("591759"),
  p = a("987209"),
  E = a("598"),
  m = a("737143"),
  S = a("362755"),
  A = a("981631"),
  f = a("474936"),
  T = a("689938"),
  _ = a("42680");
let N = e => {
    let {
      onPurchaseComplete: t,
      onHandoffFailure: a
    } = e, {
      selectedPlan: u,
      browserCheckoutState: c,
      browserCheckoutStateLoadId: N,
      contextMetadata: y
    } = (0, E.usePaymentContext)(), {
      isGift: C
    } = (0, p.useGiftContext)(), [P, h] = s.useState(!1), [I, R] = s.useState((0, m.inBrowserAutofillExperiment)().delay ? 3 : 0);
    return s.useEffect(() => {
      var e;
      if (I > 0) {
        let e = setTimeout(() => {
          R(I - 1)
        }, 1e3);
        return () => clearTimeout(e)
      }
      if (!P) h(!0), (0, i.startBrowserCheckout)(y.loadId), ! function(e, t, a, n) {
        let s = A.Endpoints.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, a),
          o = new URL(d.default.makeUrl(A.Routes.BILLING_LOGIN_HANDOFF)),
          i = (0, r.v4)();
        o.searchParams.append("handoff_key", i), o.searchParams.append("redirect_to", s), l.HTTP.post({
          url: A.Endpoints.HANDOFF,
          body: {
            key: i
          },
          oldFormErrors: !0
        }).then(e => {
          o.searchParams.append("handoff_token", e.body.handoff_token), window.open(o.href)
        }, () => {
          n()
        })
      }(null !== (e = null == u ? void 0 : u.id) && void 0 !== e ? e : f.SubscriptionPlans.PREMIUM_MONTH_TIER_2, C, y.loadId, a)
    }, [u, C, y, a, h, P, R, I]), s.useEffect(() => {
      N === y.loadId && c === S.BrowserCheckoutState.DONE && t()
    }, [c, N, y, t]), (0, n.jsxs)("div", {
      className: _.body,
      children: [(0, n.jsx)(o.Heading, {
        variant: "heading-xl/bold",
        children: I > 0 ? T.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_COUNTDOWN_HEADER.format({
          countdown: I
        }) : T.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_HEADER
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/normal",
        className: _.description,
        children: T.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_BODY
      })]
    })
  },
  y = e => {
    let {
      onPrimaryClick: t,
      onBackClick: a
    } = e;
    return (0, n.jsx)("div", {
      children: (0, n.jsxs)(o.ModalFooter, {
        justify: c.default.Justify.BETWEEN,
        align: c.default.Align.CENTER,
        children: [(0, n.jsx)(u.PaymentModalAnchor, {
          onClick: t,
          children: T.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_NEXT_BUTTON
        }), (0, n.jsx)(u.default, {
          onClick: a
        })]
      })
    })
  }