"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var r = n("884691"),
  u = n("446674"),
  a = n("913144"),
  i = n("850068"),
  l = n("271938"),
  o = n("160299"),
  s = n("357957");

function c() {
  let e = (0, u.useStateFromStores)([s.default], () => s.default.getDefaultBillingCountryCode()),
    t = (0, u.useStateFromStores)([o.default], () => o.default.ipCountryCode),
    n = (0, u.useStateFromStores)([l.default], () => l.default.isAuthenticated());
  return r.useEffect(() => {
    a.default.wait(() => {
      n && !o.default.isPaymentSourceFetching && !s.default.hasFetchedPaymentSources && i.fetchPaymentSources()
    })
  }, [n]), r.useEffect(() => {
    n && !o.default.ipCountryCodeLoaded && i.fetchIpCountryCode()
  }, [t, n]), {
    defaultBillingCountryCode: e,
    ipCountryCode: t
  }
}