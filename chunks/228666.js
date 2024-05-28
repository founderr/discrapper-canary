"use strict";
a.r(t), a.d(t, {
  AddressStepBody: function() {
    return S
  },
  AddressStepFooter: function() {
    return f
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("442837"),
  r = a("481060"),
  o = a("464179"),
  i = a("812169"),
  u = a("706454"),
  d = a("351402"),
  c = a("285952"),
  E = a("603421"),
  m = a("981631"),
  p = a("689938"),
  _ = a("868312");
let S = e => {
    let t, {
        billingAddressInfo: a,
        billingError: c,
        onBillingAddressChange: S,
        paymentSourceType: f
      } = e,
      N = null != c && (null == c.code || (0, E.errorToStep)(c) === E.Steps.ADDRESS),
      A = (0, l.useStateFromStores)([u.default], () => u.default.locale);
    switch (f) {
      case m.PaymentSourceTypes.CARD:
        t = "en-US" === A ? 1 === (0, i.reducedPaymentInfoExperiment)().bucket ? o.default.Layouts.MODAL_US_REDUCED : o.default.Layouts.MODAL_US : o.default.Layouts.MODAL_INTL;
        break;
      case m.PaymentSourceTypes.GIROPAY:
      case m.PaymentSourceTypes.PAYSAFE_CARD:
      case m.PaymentSourceTypes.GCASH:
      case m.PaymentSourceTypes.GRABPAY_MY:
      case m.PaymentSourceTypes.MOMO_WALLET:
      case m.PaymentSourceTypes.KAKAOPAY:
      case m.PaymentSourceTypes.GOPAY_WALLET:
      case m.PaymentSourceTypes.BANCONTACT:
        t = "en-US" === A ? o.default.Layouts.MODAL_US_WITH_NAME : o.default.Layouts.MODAL_INTL_WITH_NAME;
        break;
      case m.PaymentSourceTypes.VENMO:
      case m.PaymentSourceTypes.CASH_APP:
        t = o.default.Layouts.MODAL_US_WITH_NAME;
        break;
      default:
        t = "en-US" === A ? o.default.Layouts.MODAL_US : o.default.Layouts.MODAL_INTL
    }
    let I = (0, l.useStateFromStores)([d.default], () => d.default.ipCountryCode);
    return 0 === a.country.length && (a.country = null != I ? I : ""), (0, n.jsxs)(s.Fragment, {
      children: [N ? (0, n.jsx)(r.FormErrorBlock, {
        className: _.errorBlock,
        children: p.default.Messages.BILLING_ERROR_SECTION_ADDRESS
      }) : null, (0, n.jsx)(o.default, {
        className: _.__invalid_formItem,
        onBillingAddressChange: S,
        error: c,
        layout: t,
        ...a
      })]
    })
  },
  f = e => {
    let {
      isBillingAddressInfoValid: t,
      submitting: a,
      onContinue: s,
      renderBackButton: l
    } = e;
    return (0, n.jsxs)(r.ModalFooter, {
      justify: c.default.Justify.BETWEEN,
      direction: c.default.Direction.HORIZONTAL,
      children: [l(), (0, n.jsx)(r.Button, {
        type: "submit",
        disabled: !t,
        submitting: a,
        onClick: s,
        children: p.default.Messages.NEXT
      })]
    })
  }