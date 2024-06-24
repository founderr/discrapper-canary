t.d(a, {
  P: function() {
    return N
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
var E = t(603421),
  d = t(981631),
  A = t(689938),
  _ = t(202675);
let N = e => {
  let a, {
      billingAddressInfo: t,
      billingError: N,
      onBillingAddressChange: m,
      paymentSourceType: p
    } = e,
    h = null != N && (null == N.code || (0, E.ly)(N) === E.Rg.ADDRESS),
    T = (0, l.e7)([c.default], () => c.default.locale);
  switch (p) {
    case d.HeQ.CARD:
      a = "en-US" === T ? 1 === (0, i._)().bucket ? o.ZP.Layouts.MODAL_US_REDUCED : o.ZP.Layouts.MODAL_US : o.ZP.Layouts.MODAL_INTL;
      break;
    case d.HeQ.GIROPAY:
    case d.HeQ.PAYSAFE_CARD:
    case d.HeQ.GCASH:
    case d.HeQ.GRABPAY_MY:
    case d.HeQ.MOMO_WALLET:
    case d.HeQ.KAKAOPAY:
    case d.HeQ.GOPAY_WALLET:
    case d.HeQ.BANCONTACT:
      a = "en-US" === T ? o.ZP.Layouts.MODAL_US_WITH_NAME : o.ZP.Layouts.MODAL_INTL_WITH_NAME;
      break;
    case d.HeQ.VENMO:
    case d.HeQ.CASH_APP:
      a = o.ZP.Layouts.MODAL_US_WITH_NAME;
      break;
    default:
      a = "en-US" === T ? o.ZP.Layouts.MODAL_US : o.ZP.Layouts.MODAL_INTL
  }
  let C = (0, l.e7)([u.Z], () => u.Z.ipCountryCode);
  return 0 === t.country.length && (t.country = null != C ? C : ""), (0, n.jsxs)(s.Fragment, {
    children: [h ? (0, n.jsx)(r.FormErrorBlock, {
      className: _.errorBlock,
      children: A.Z.Messages.BILLING_ERROR_SECTION_ADDRESS
    }) : null, (0, n.jsx)(o.ZP, {
      className: _.__invalid_formItem,
      onBillingAddressChange: m,
      error: N,
      layout: a,
      ...t
    })]
  })
}