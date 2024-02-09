"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var u = n("884691"),
  r = n("446674"),
  a = n("913144"),
  i = n("850068"),
  o = n("271938"),
  l = n("160299"),
  s = n("357957");

function c() {
  let e = (0, r.useStateFromStores)([s.default], () => s.default.getDefaultBillingCountryCode()),
    t = (0, r.useStateFromStores)([l.default], () => l.default.ipCountryCode),
    n = (0, r.useStateFromStores)([o.default], () => o.default.isAuthenticated());
  return u.useEffect(() => {
    a.default.wait(() => {
      n && !l.default.isPaymentSourceFetching && !s.default.hasFetchedPaymentSources && i.fetchPaymentSources()
    })
  }, [n]), u.useEffect(() => {
    n && !l.default.ipCountryCodeLoaded && i.fetchIpCountryCode()
  }, [t, n]), {
    defaultBillingCountryCode: e,
    ipCountryCode: t
  }
}