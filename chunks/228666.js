"use strict";
a.r(t), a.d(t, {
  AddressStepBody: function() {
    return S
  },
  AddressStepFooter: function() {
    return _
  }
});
var n = a("735250"),
  l = a("470079"),
  s = a("442837"),
  r = a("481060"),
  o = a("464179"),
  i = a("812169"),
  u = a("706454"),
  d = a("351402"),
  c = a("285952"),
  E = a("603421"),
  p = a("981631"),
  m = a("689938"),
  f = a("868312");
let S = e => {
    let t, {
        billingAddressInfo: a,
        billingError: c,
        onBillingAddressChange: S,
        paymentSourceType: _
      } = e,
      A = null != c && (null == c.code || (0, E.errorToStep)(c) === E.Steps.ADDRESS),
      N = (0, s.useStateFromStores)([u.default], () => u.default.locale);
    switch (_) {
      case p.PaymentSourceTypes.CARD:
        t = "en-US" === N ? 1 === (0, i.reducedPaymentInfoExperiment)().bucket ? o.default.Layouts.MODAL_US_REDUCED : o.default.Layouts.MODAL_US : o.default.Layouts.MODAL_INTL;
        break;
      case p.PaymentSourceTypes.GIROPAY:
      case p.PaymentSourceTypes.PAYSAFE_CARD:
      case p.PaymentSourceTypes.GCASH:
      case p.PaymentSourceTypes.GRABPAY_MY:
      case p.PaymentSourceTypes.MOMO_WALLET:
      case p.PaymentSourceTypes.KAKAOPAY:
      case p.PaymentSourceTypes.GOPAY_WALLET:
      case p.PaymentSourceTypes.BANCONTACT:
        t = "en-US" === N ? o.default.Layouts.MODAL_US_WITH_NAME : o.default.Layouts.MODAL_INTL_WITH_NAME;
        break;
      case p.PaymentSourceTypes.VENMO:
      case p.PaymentSourceTypes.CASH_APP:
        t = o.default.Layouts.MODAL_US_WITH_NAME;
        break;
      default:
        t = "en-US" === N ? o.default.Layouts.MODAL_US : o.default.Layouts.MODAL_INTL
    }
    let I = (0, s.useStateFromStores)([d.default], () => d.default.ipCountryCode);
    return 0 === a.country.length && (a.country = null != I ? I : ""), (0, n.jsxs)(l.Fragment, {
      children: [A ? (0, n.jsx)(r.FormErrorBlock, {
        className: f.errorBlock,
        children: m.default.Messages.BILLING_ERROR_SECTION_ADDRESS
      }) : null, (0, n.jsx)(o.default, {
        className: f.__invalid_formItem,
        onBillingAddressChange: S,
        error: c,
        layout: t,
        ...a
      })]
    })
  },
  _ = e => {
    let {
      isBillingAddressInfoValid: t,
      submitting: a,
      onContinue: l,
      renderBackButton: s
    } = e;
    return (0, n.jsxs)(r.ModalFooter, {
      justify: c.default.Justify.BETWEEN,
      direction: c.default.Direction.HORIZONTAL,
      children: [s(), (0, n.jsx)(r.Button, {
        type: "submit",
        disabled: !t,
        submitting: a,
        onClick: l,
        children: m.default.Messages.NEXT
      })]
    })
  }