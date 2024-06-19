t.d(a, {
  P: function() {
    return _
  }
});
var n = t(735250),
  s = t(470079),
  l = t(442837),
  r = t(481060),
  o = t(464179),
  i = t(812169),
  c = t(706454),
  u = t(351402);
t(285952);
var d = t(603421),
  E = t(981631),
  A = t(689938),
  p = t(202675);
let _ = e => {
  let a, {
      billingAddressInfo: t,
      billingError: _,
      onBillingAddressChange: N,
      paymentSourceType: m
    } = e,
    h = null != _ && (null == _.code || (0, d.ly)(_) === d.Rg.ADDRESS),
    T = (0, l.e7)([c.default], () => c.default.locale);
  switch (m) {
    case E.HeQ.CARD:
      a = "en-US" === T ? 1 === (0, i._)().bucket ? o.ZP.Layouts.MODAL_US_REDUCED : o.ZP.Layouts.MODAL_US : o.ZP.Layouts.MODAL_INTL;
      break;
    case E.HeQ.GIROPAY:
    case E.HeQ.PAYSAFE_CARD:
    case E.HeQ.GCASH:
    case E.HeQ.GRABPAY_MY:
    case E.HeQ.MOMO_WALLET:
    case E.HeQ.KAKAOPAY:
    case E.HeQ.GOPAY_WALLET:
    case E.HeQ.BANCONTACT:
      a = "en-US" === T ? o.ZP.Layouts.MODAL_US_WITH_NAME : o.ZP.Layouts.MODAL_INTL_WITH_NAME;
      break;
    case E.HeQ.VENMO:
    case E.HeQ.CASH_APP:
      a = o.ZP.Layouts.MODAL_US_WITH_NAME;
      break;
    default:
      a = "en-US" === T ? o.ZP.Layouts.MODAL_US : o.ZP.Layouts.MODAL_INTL
  }
  let C = (0, l.e7)([u.Z], () => u.Z.ipCountryCode);
  return 0 === t.country.length && (t.country = null != C ? C : ""), (0, n.jsxs)(s.Fragment, {
    children: [h ? (0, n.jsx)(r.FormErrorBlock, {
      className: p.errorBlock,
      children: A.Z.Messages.BILLING_ERROR_SECTION_ADDRESS
    }) : null, (0, n.jsx)(o.ZP, {
      className: p.__invalid_formItem,
      onBillingAddressChange: N,
      error: _,
      layout: a,
      ...t
    })]
  })
}