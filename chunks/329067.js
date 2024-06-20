"use strict";
t.d(s, {
  N: function() {
    return b
  },
  Z: function() {
    return v
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  r = t(512722),
  i = t.n(r),
  l = t(481060),
  o = t(16084),
  c = t(244526),
  u = t(881052),
  d = t(128069),
  C = t(906732),
  f = t(176919),
  E = t(626135),
  p = t(63063),
  g = t(937615),
  m = t(598),
  x = t(409813),
  h = t(333867),
  I = t(74179),
  _ = t(981631),
  T = t(689938),
  N = t(764578);
let L = e => {
    let {
      children: s,
      style: t,
      className: a,
      ...r
    } = e;
    return (0, n.jsx)(l.Button, {
      size: l.ButtonSizes.SMALL,
      fullWidth: !0,
      look: l.Button.Looks.FILLED,
      color: l.ButtonColors.GREEN,
      style: t,
      className: a,
      ...r,
      children: s
    })
  },
  S = e => {
    let {
      children: s,
      className: t,
      ...a
    } = e;
    return (0, n.jsx)(l.Button, {
      size: l.ButtonSizes.SMALL,
      look: l.ButtonLooks.BLANK,
      color: l.ButtonColors.TRANSPARENT,
      className: t,
      fullWidth: !0,
      ...a,
      children: s
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
    onPurchaseComplete: s,
    onError: t,
    onReviewPurchase: r,
    paymentSource: I,
    loadId: b,
    skuId: v,
    isGift: O = !1,
    baseAnalyticsData: A
  } = e, {
    step: Z,
    setStep: R,
    paymentError: j,
    paymentAuthenticationState: P,
    application: M,
    skuPricePreviewsById: k
  } = (0, m.usePaymentContext)(), {
    analyticsLocations: B
  } = (0, C.ZP)(), [y, F] = a.useState(!1), D = a.useRef(null), U = k[v], H = null != U ? U[I.id] : null, w = null != H ? (0, g.T4)(null == H ? void 0 : H.amount, null == H ? void 0 : H.currency) : null, G = a.useMemo(() => ({
    ...A,
    load_id: b,
    payment_type: _.Zuq[_.GZQ.ONE_TIME],
    price: null == H ? void 0 : H.amount,
    currency: null == H ? void 0 : H.currency
  }), [A, H, b]);
  a.useEffect(() => {
    Z !== x.h8.REVIEW && R(x.h8.REVIEW)
  }), a.useEffect(() => {
    P === f.wr.ERROR && t(j)
  }, [t, j, P]);
  let W = async () => {
    await E.default.track(_.rMx.PAYMENT_FLOW_COMPLETED, G), i()(null != H, "skuPricePreview can't be null"), i()(null != M, "application can't be null");
    try {
      await (0, o.ZZ)(M.id, v, {
        expectedAmount: H.amount,
        expectedCurrency: H.currency,
        isGift: O,
        paymentSource: I,
        loadId: b
      }), F(!1), s()
    } catch (s) {
      let e = s instanceof u.HF ? s : new u.HF(s);
      e.code !== d.SM.CONFIRMATION_REQUIRED && e.code !== d.SM.AUTHENTICATION_REQUIRED && t(s)
    }
  }, V = a.useCallback(e => {
    E.default.track(_.rMx.PAYMENT_FLOW_STEP, {
      ...G,
      to_step: e
    }), e === x.h8.CONFIRM && (F(!1), s()), R(e)
  }, [G, R, s]);
  return (0, f.bp)(Z, P, V), (0, n.jsxs)("div", {
    className: N.reviewContainer,
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
      className: N.legalTerms,
      children: (0, n.jsx)("p", {
        children: T.Z.Messages.LIGHTNING_CHECKOUT_NON_REFUNDABLE_DISCLAIMER.format({
          paidURL: p.Z.getArticleURL(_.BhN.PAID_TERMS)
        })
      })
    }), (0, n.jsx)(L, {
      className: N.buyButton,
      submitting: y,
      submittingStartedLabel: "Payment Processing",
      onClick: async () => {
        F(!0), await W()
      },
      children: null !== w ? T.Z.Messages.LIGHTNING_CHECKOUT_PAY_CTA.format({
        price: w
      }) : (0, n.jsx)(l.Spinner, {
        type: l.Spinner.Type.PULSING_ELLIPSIS
      })
    }), !y && (0, n.jsx)(S, {
      className: N.reviewButton,
      onClick: () => {
        r(), (0, h.Z)({
          skuId: v,
          analyticsLocations: B,
          returnRef: D
        })
      },
      children: T.Z.Messages.LIGHTNING_CHECKOUT_REVIEW_PURCHASE
    })]
  })
}