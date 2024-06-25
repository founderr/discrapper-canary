t.d(a, {
  P: function() {
    return m
  }
});
var n = t(735250),
  r = t(470079),
  s = t(442837),
  l = t(481060),
  o = t(464179),
  i = t(812169),
  c = t(706454),
  u = t(351402);
t(285952);
var d = t(603421),
  E = t(981631),
  _ = t(689938),
  p = t(202675);
let m = e => {
  let a, {
      billingAddressInfo: t,
      billingError: m,
      onBillingAddressChange: A,
      paymentSourceType: N
    } = e,
    h = null != m && (null == m.code || (0, d.ly)(m) === d.Rg.ADDRESS),
    T = (0, s.e7)([c.default], () => c.default.locale);
  switch (N) {
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
  let I = (0, s.e7)([u.Z], () => u.Z.ipCountryCode);
  return 0 === t.country.length && (t.country = null != I ? I : ""), (0, n.jsxs)(r.Fragment, {
    children: [h ? (0, n.jsx)(l.FormErrorBlock, {
      className: p.errorBlock,
      children: _.Z.Messages.BILLING_ERROR_SECTION_ADDRESS
    }) : null, (0, n.jsx)(o.ZP, {
      className: p.__invalid_formItem,
      onBillingAddressChange: A,
      error: m,
      layout: a,
      ...t
    })]
  })
}