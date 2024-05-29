"use strict";
a.r(t), a.d(t, {
  AddressStepBody: function() {
    return S
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("442837"),
  r = a("481060"),
  o = a("464179"),
  i = a("812169"),
  u = a("706454"),
  c = a("351402");
a("285952");
var d = a("603421"),
  p = a("981631"),
  E = a("689938"),
  m = a("868312");
let S = e => {
  let t, {
      billingAddressInfo: a,
      billingError: S,
      onBillingAddressChange: A,
      paymentSourceType: f
    } = e,
    T = null != S && (null == S.code || (0, d.errorToStep)(S) === d.Steps.ADDRESS),
    _ = (0, l.useStateFromStores)([u.default], () => u.default.locale);
  switch (f) {
    case p.PaymentSourceTypes.CARD:
      t = "en-US" === _ ? 1 === (0, i.reducedPaymentInfoExperiment)().bucket ? o.default.Layouts.MODAL_US_REDUCED : o.default.Layouts.MODAL_US : o.default.Layouts.MODAL_INTL;
      break;
    case p.PaymentSourceTypes.GIROPAY:
    case p.PaymentSourceTypes.PAYSAFE_CARD:
    case p.PaymentSourceTypes.GCASH:
    case p.PaymentSourceTypes.GRABPAY_MY:
    case p.PaymentSourceTypes.MOMO_WALLET:
    case p.PaymentSourceTypes.KAKAOPAY:
    case p.PaymentSourceTypes.GOPAY_WALLET:
    case p.PaymentSourceTypes.BANCONTACT:
      t = "en-US" === _ ? o.default.Layouts.MODAL_US_WITH_NAME : o.default.Layouts.MODAL_INTL_WITH_NAME;
      break;
    case p.PaymentSourceTypes.VENMO:
    case p.PaymentSourceTypes.CASH_APP:
      t = o.default.Layouts.MODAL_US_WITH_NAME;
      break;
    default:
      t = "en-US" === _ ? o.default.Layouts.MODAL_US : o.default.Layouts.MODAL_INTL
  }
  let y = (0, l.useStateFromStores)([c.default], () => c.default.ipCountryCode);
  return 0 === a.country.length && (a.country = null != y ? y : ""), (0, n.jsxs)(s.Fragment, {
    children: [T ? (0, n.jsx)(r.FormErrorBlock, {
      className: m.errorBlock,
      children: E.default.Messages.BILLING_ERROR_SECTION_ADDRESS
    }) : null, (0, n.jsx)(o.default, {
      className: m.__invalid_formItem,
      onBillingAddressChange: A,
      error: S,
      layout: t,
      ...a
    })]
  })
}