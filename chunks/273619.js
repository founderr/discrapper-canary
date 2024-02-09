"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("222007"), n("70102");
var r = n("37983"),
  i = n("884691"),
  u = n("41092"),
  a = n("414456"),
  l = n.n(a),
  o = n("862337"),
  s = n("77078"),
  c = n("812952"),
  d = n("448993"),
  E = n("736978"),
  _ = n("642906"),
  f = n("85336");
n("153727"), n("650484");
var T = n("454589"),
  A = n("978679"),
  S = n("745279"),
  R = n("718517"),
  I = n("49111"),
  p = n("782340"),
  N = n("129429");
let C = new Set([f.Step.SKU_SELECT, f.Step.AWAITING_AUTHENTICATION, f.Step.AWAITING_PURCHASE_TOKEN_AUTH, f.Step.CONFIRM]);

function P(e) {
  let {
    steps: t,
    currentStep: n,
    body: a,
    paymentError: P,
    header: U,
    footer: O,
    isGift: h = !1,
    giftMessage: M = p.default.Messages.PREMIUM_PAYMENT_IS_GIFT,
    hideBreadcrumbs: m = !1,
    isLoading: v = !1,
    purchaseError: L,
    purchaseErrorBlockRef: D,
    planError: g,
    onScroll: y,
    scrollerClassName: G,
    hasCurrencies: x = !1
  } = e, b = null;
  null != P && null == (0, f.errorToStep)(P) ? b = P : null != L ? b = L : null != g && (b = g);
  let B = null != b ? b.message : "";
  null != b && b instanceof d.BillingError && (b.code === E.ErrorCodes.CARD_DECLINED && x && (B += " ".concat(p.default.Messages.BILLING_ERROR_TRY_ANOTHER)), b.code === E.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (B = p.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), b.code === I.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (B = p.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
  let {
    stripe: H
  } = (0, _.usePaymentContext)();
  v = v || null == H;
  let V = i.useRef(new o.Timeout);
  i.useEffect(() => {
    let e = V.current;
    return null != H || e.isStarted() ? null != H && e.stop() : e.start(10 * R.default.Millis.SECOND, () => {
      let e = Error("Stripe took too long to load");
      (0, S.captureBillingException)(e)
    }), () => {
      e.stop()
    }
  }, [H]);
  let j = t.includes(f.Step.PAYMENT_TYPE) ? f.Step.PAYMENT_TYPE : f.Step.ADD_PAYMENT_STEPS;
  return (0, r.jsxs)(u.Elements, {
    options: I.StripeElementsOptions,
    stripe: H,
    children: [U, (0, r.jsxs)("div", {
      className: l("paymentModalContent", N.content),
      children: [h && n !== f.Step.CONFIRM ? (0, r.jsx)(c.default, {
        className: N.paymentNote,
        iconSize: c.default.Sizes.SMALL,
        icon: A.default,
        color: null == M ? c.default.Colors.PRIMARY : c.default.Colors.SECONDARY,
        children: M
      }) : null, m ? null : (0, r.jsx)("div", {
        className: N.breadcrumbsWrapper,
        children: (0, r.jsx)(T.default, {
          activeId: f.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(n) ? j : n,
          breadcrumbs: t.filter(e => !f.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(e) && !C.has(e)).map(e => ({
            id: e,
            label: (0, f.getLabelForStep)(e)
          }))
        })
      }), (0, r.jsxs)("div", {
        className: N.bodyWrapper,
        children: [null == b ? null : (0, r.jsx)("div", {
          className: N.errorBlockWrapper,
          children: (0, r.jsx)(s.FormErrorBlock, {
            ref: D,
            children: B
          })
        }), v ? (0, r.jsx)(s.Spinner, {
          className: N.loadingBlock
        }) : (0, r.jsx)(s.Sequencer, {
          className: N.sequencer,
          staticClassName: N.sequencerStatic,
          animatedNodeClassName: N.sequencerAnimatedNode,
          fillParent: !0,
          step: n,
          steps: t,
          sideMargin: 20,
          children: (0, r.jsx)(s.AdvancedScrollerThin, {
            onScroll: y,
            className: l(N.scroller, G),
            children: a
          })
        })]
      })]
    }), O]
  })
}