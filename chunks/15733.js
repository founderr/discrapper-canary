"use strict";
r.r(t), r.d(t, {
  default: function() {
    return c
  }
});
var a = r("884691"),
  n = r("446674"),
  u = r("913144"),
  i = r("850068"),
  s = r("271938"),
  l = r("160299"),
  o = r("357957");

function c() {
  let e = (0, n.useStateFromStores)([o.default], () => o.default.getDefaultBillingCountryCode()),
    t = (0, n.useStateFromStores)([l.default], () => l.default.ipCountryCode),
    r = (0, n.useStateFromStores)([s.default], () => s.default.isAuthenticated());
  return a.useEffect(() => {
    u.default.wait(() => {
      r && !l.default.isPaymentSourceFetching && !o.default.hasFetchedPaymentSources && i.fetchPaymentSources()
    })
  }, [r]), a.useEffect(() => {
    r && !l.default.ipCountryCodeLoaded && i.fetchIpCountryCode()
  }, [t, r]), {
    defaultBillingCountryCode: e,
    ipCountryCode: t
  }
}