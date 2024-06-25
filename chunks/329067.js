"use strict";
s.d(t, {
  N: function() {
    return b
  },
  Z: function() {
    return v
  }
}), s(47120);
var n = s(735250),
  r = s(470079),
  a = s(512722),
  i = s.n(a),
  l = s(481060),
  o = s(16084),
  c = s(244526),
  u = s(881052),
  d = s(128069),
  C = s(906732),
  f = s(176919),
  p = s(626135),
  g = s(63063),
  E = s(937615),
  m = s(598),
  h = s(409813),
  x = s(333867),
  I = s(74179),
  _ = s(981631),
  T = s(689938),
  L = s(764578);
let N = e => {
    let {
      children: t,
      style: s,
      className: r,
      ...a
    } = e;
    return (0, n.jsx)(l.Button, {
      size: l.ButtonSizes.SMALL,
      fullWidth: !0,
      look: l.Button.Looks.FILLED,
      color: l.ButtonColors.GREEN,
      style: s,
      className: r,
      ...a,
      children: t
    })
  },
  S = e => {
    let {
      children: t,
      className: s,
      ...r
    } = e;
    return (0, n.jsx)(l.Button, {
      size: l.ButtonSizes.SMALL,
      look: l.ButtonLooks.BLANK,
      color: l.ButtonColors.TRANSPARENT,
      className: s,
      fullWidth: !0,
      ...r,
      children: t
    })
  };

function b() {
  let {
    defaultPaymentSource: e
  } = (0, I.Z)({
    isGift: !1,
    activeSubscription: null
  });
  return {
    userIsEligible: null !== e && !_.j8d.has(e.type)
  }
}

function v(e) {
  let {
    onPurchaseComplete: t,
    onError: s,
    onReviewPurchase: a,
    paymentSource: I,
    loadId: b,
    skuId: v,
    isGift: O = !1,
    baseAnalyticsData: Z
  } = e, {
    step: A,
    setStep: R,
    paymentError: j,
    paymentAuthenticationState: P,
    application: M,
    skuPricePreviewsById: k
  } = (0, m.usePaymentContext)(), {
    analyticsLocations: y
  } = (0, C.ZP)(), [B, F] = r.useState(!1), D = r.useRef(null), U = k[v], H = null != U ? U[I.id] : null, w = null != H ? (0, E.T4)(null == H ? void 0 : H.amount, null == H ? void 0 : H.currency) : null, G = r.useMemo(() => ({
    ...Z,
    load_id: b,
    payment_type: _.Zuq[_.GZQ.ONE_TIME],
    price: null == H ? void 0 : H.amount,
    currency: null == H ? void 0 : H.currency
  }), [Z, H, b]);
  r.useEffect(() => {
    A !== h.h8.REVIEW && R(h.h8.REVIEW)
  }), r.useEffect(() => {
    P === f.wr.ERROR && s(j)
  }, [s, j, P]);
  let W = async () => {
    await p.default.track(_.rMx.PAYMENT_FLOW_COMPLETED, G), i()(null != H, "skuPricePreview can't be null"), i()(null != M, "application can't be null");
    try {
      await (0, o.ZZ)(M.id, v, {
        expectedAmount: H.amount,
        expectedCurrency: H.currency,
        isGift: O,
        paymentSource: I,
        loadId: b
      }), F(!1), t()
    } catch (t) {
      let e = t instanceof u.HF ? t : new u.HF(t);
      e.code !== d.SM.CONFIRMATION_REQUIRED && e.code !== d.SM.AUTHENTICATION_REQUIRED && s(t)
    }
  }, V = r.useCallback(e => {
    p.default.track(_.rMx.PAYMENT_FLOW_STEP, {
      ...G,
      to_step: e
    }), e === h.h8.CONFIRM && (F(!1), t()), R(e)
  }, [G, R, t]);
  return (0, f.bp)(A, P, V), (0, n.jsxs)("div", {
    className: L.reviewContainer,
    children: [(0, n.jsx)(l.FormSection, {
      children: (0, n.jsx)(l.FormItem, {
        children: (0, n.jsx)(c.Z, {
          paymentSource: I,
          isDefault: !0,
          showSubtext: !1,
          showPaymentSourceIcon: !1,
          showLabels: !1,
          locale: "en-US"
        })
      })
    }), (0, n.jsx)("div", {
      className: L.legalTerms,
      children: (0, n.jsx)("p", {
        children: T.Z.Messages.LIGHTNING_CHECKOUT_NON_REFUNDABLE_DISCLAIMER.format({
          paidURL: g.Z.getArticleURL(_.BhN.PAID_TERMS)
        })
      })
    }), (0, n.jsx)(N, {
      className: L.buyButton,
      submitting: B,
      submittingStartedLabel: "Payment Processing",
      onClick: async () => {
        F(!0), await W()
      },
      children: null !== w ? T.Z.Messages.LIGHTNING_CHECKOUT_PAY_CTA.format({
        price: w
      }) : (0, n.jsx)(l.Spinner, {
        type: l.Spinner.Type.PULSING_ELLIPSIS
      })
    }), !B && (0, n.jsx)(S, {
      className: L.reviewButton,
      onClick: () => {
        a(), (0, x.Z)({
          skuId: v,
          analyticsLocations: y,
          returnRef: D
        })
      },
      children: T.Z.Messages.LIGHTNING_CHECKOUT_REVIEW_PURCHASE
    })]
  })
}