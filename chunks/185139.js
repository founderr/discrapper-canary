"use strict";
r.r(l), r.d(l, {
  default: function() {
    return C
  }
}), r("47120"), r("411104");
var n = r("735250"),
  t = r("470079"),
  s = r("160612"),
  a = r("120356"),
  o = r.n(a),
  i = r("846519"),
  d = r("481060"),
  c = r("609194"),
  u = r("881052"),
  p = r("128069"),
  m = r("598"),
  E = r("409813");
r("51499"), r("614277");
var f = r("559629"),
  S = r("122289"),
  N = r("70956"),
  _ = r("981631"),
  x = r("689938"),
  T = r("913175");
let P = new Set([E.Step.SKU_SELECT, E.Step.AWAITING_AUTHENTICATION, E.Step.AWAITING_PURCHASE_TOKEN_AUTH, E.Step.CONFIRM]);

function C(e) {
  let {
    steps: l,
    currentStep: r,
    body: a,
    paymentError: C,
    header: A,
    footer: I,
    isGift: h = !1,
    giftMessage: j = x.default.Messages.PREMIUM_PAYMENT_IS_GIFT,
    hideBreadcrumbs: v = !1,
    isLoading: M = !1,
    purchaseError: L,
    purchaseErrorBlockRef: R,
    planError: g,
    onScroll: y,
    scrollerClassName: b,
    hasCurrencies: D = !1
  } = e, B = null;
  null != C && null == (0, E.errorToStep)(C) ? B = C : null != L ? B = L : null != g && (B = g);
  let O = null != B ? B.message : "";
  null != B && B instanceof u.BillingError && (B.code === p.ErrorCodes.CARD_DECLINED && D && (O += " ".concat(x.default.Messages.BILLING_ERROR_TRY_ANOTHER)), B.code === p.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (O = x.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), B.code === _.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (O = x.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
  let {
    stripe: U
  } = (0, m.usePaymentContext)();
  M = M || null == U;
  let k = t.useRef(new i.Timeout);
  t.useEffect(() => {
    let e = k.current;
    return null != U || e.isStarted() ? null != U && e.stop() : e.start(10 * N.default.Millis.SECOND, () => {
      let e = Error("Stripe took too long to load");
      (0, S.captureBillingException)(e)
    }), () => {
      e.stop()
    }
  }, [U]);
  let Y = l.includes(E.Step.PAYMENT_TYPE) ? E.Step.PAYMENT_TYPE : E.Step.ADD_PAYMENT_STEPS;
  return (0, n.jsxs)(s.Elements, {
    options: _.StripeElementsOptions,
    stripe: U,
    children: [A, (0, n.jsxs)("div", {
      className: o()("paymentModalContent", T.content),
      children: [h && r !== E.Step.CONFIRM ? (0, n.jsx)(c.default, {
        className: T.paymentNote,
        iconSize: c.default.Sizes.SMALL,
        icon: f.default,
        color: null == j ? c.default.Colors.PRIMARY : c.default.Colors.SECONDARY,
        children: j
      }) : null, v ? null : (0, n.jsx)("div", {
        className: T.breadcrumbsWrapper,
        children: (0, n.jsx)(d.Breadcrumbs, {
          activeId: E.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(r) ? Y : r,
          breadcrumbs: l.filter(e => !E.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(e) && !P.has(e)).map(e => ({
            id: e,
            label: (0, E.getLabelForStep)(e)
          }))
        })
      }), (0, n.jsxs)("div", {
        className: T.bodyWrapper,
        children: [null == B ? null : (0, n.jsx)("div", {
          className: T.errorBlockWrapper,
          children: (0, n.jsx)(d.FormErrorBlock, {
            ref: R,
            children: O
          })
        }), M ? (0, n.jsx)(d.Spinner, {
          className: T.loadingBlock
        }) : (0, n.jsx)(d.Sequencer, {
          className: T.sequencer,
          staticClassName: T.sequencerStatic,
          animatedNodeClassName: T.sequencerAnimatedNode,
          fillParent: !0,
          step: r,
          steps: l,
          sideMargin: 20,
          children: (0, n.jsx)(d.AdvancedScrollerThin, {
            onScroll: y,
            className: o()(T.scroller, b),
            children: a
          })
        })]
      })]
    }), I]
  })
}