"use strict";
n.r(e), n.d(e, {
  default: function() {
    return c
  }
});
var r = n("884691"),
  i = n("446674"),
  u = n("913144"),
  o = n("850068"),
  a = n("271938"),
  s = n("160299"),
  l = n("357957");

function c() {
  let t = (0, i.useStateFromStores)([l.default], () => l.default.getDefaultBillingCountryCode()),
    e = (0, i.useStateFromStores)([s.default], () => s.default.ipCountryCode),
    n = (0, i.useStateFromStores)([a.default], () => a.default.isAuthenticated());
  return r.useEffect(() => {
    u.default.wait(() => {
      n && !s.default.isPaymentSourceFetching && !l.default.hasFetchedPaymentSources && o.fetchPaymentSources()
    })
  }, [n]), r.useEffect(() => {
    n && !s.default.ipCountryCodeLoaded && o.fetchIpCountryCode()
  }, [e, n]), {
    defaultBillingCountryCode: t,
    ipCountryCode: e
  }
}