"use strict";
a.r(t), a.d(t, {
  AwaitingBrowserCheckoutStepBody: function() {
    return _
  },
  AwaitingBrowserCheckoutStepFooter: function() {
    return N
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
  m = a("362755"),
  S = a("981631"),
  A = a("474936"),
  f = a("689938"),
  T = a("42680");
let _ = e => {
    let {
      onPurchaseComplete: t,
      onHandoffFailure: a
    } = e, {
      selectedPlan: u,
      browserCheckoutState: c,
      browserCheckoutStateLoadId: _,
      contextMetadata: N
    } = (0, E.usePaymentContext)(), {
      isGift: y
    } = (0, p.useGiftContext)(), [C, P] = s.useState(!1), [h, I] = s.useState(3);
    return s.useEffect(() => {
      var e;
      if (h > 0) {
        let e = setTimeout(() => {
          I(h - 1)
        }, 1e3);
        return () => clearTimeout(e)
      }
      if (!C) P(!0), (0, i.startBrowserCheckout)(N.loadId), ! function(e, t, a, n) {
        let s = S.Endpoints.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, a),
          o = new URL(d.default.makeUrl(S.Routes.BILLING_LOGIN_HANDOFF)),
          i = (0, r.v4)();
        o.searchParams.append("handoff_key", i), o.searchParams.append("redirect_to", s), l.HTTP.post({
          url: S.Endpoints.HANDOFF,
          body: {
            key: i
          },
          oldFormErrors: !0
        }).then(e => {
          o.searchParams.append("handoff_token", e.body.handoff_token), window.open(o.href)
        }, () => {
          n()
        })
      }(null !== (e = null == u ? void 0 : u.id) && void 0 !== e ? e : A.SubscriptionPlans.PREMIUM_MONTH_TIER_2, y, N.loadId, a)
    }, [u, y, N, a, P, C, I, h]), s.useEffect(() => {
      _ === N.loadId && c === m.BrowserCheckoutState.DONE && t()
    }, [c, _, N, t]), (0, n.jsxs)("div", {
      className: T.body,
      children: [(0, n.jsx)(o.Heading, {
        variant: "heading-xl/bold",
        children: h > 0 ? f.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_COUNTDOWN_HEADER.format({
          countdown: h
        }) : f.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_HEADER
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/normal",
        className: T.description,
        children: f.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_BODY
      })]
    })
  },
  N = e => {
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
          children: f.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_NEXT_BUTTON
        }), (0, n.jsx)(u.default, {
          onClick: a
        })]
      })
    })
  }