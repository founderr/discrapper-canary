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
  l = n("160299"),
  s = n("357957");

function c() {
  let t = (0, i.useStateFromStores)([s.default], () => s.default.getDefaultBillingCountryCode()),
    e = (0, i.useStateFromStores)([l.default], () => l.default.ipCountryCode),
    n = (0, i.useStateFromStores)([a.default], () => a.default.isAuthenticated());
  return r.useEffect(() => {
    u.default.wait(() => {
      n && !l.default.isPaymentSourceFetching && !s.default.hasFetchedPaymentSources && o.fetchPaymentSources()
    })
  }, [n]), r.useEffect(() => {
    n && !l.default.ipCountryCodeLoaded && o.fetchIpCountryCode()
  }, [e, n]), {
    defaultBillingCountryCode: t,
    ipCountryCode: e
  }
}