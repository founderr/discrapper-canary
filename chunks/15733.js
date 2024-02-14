"use strict";
r.r(t), r.d(t, {
  default: function() {
    return c
  }
});
var n = r("884691"),
  a = r("446674"),
  u = r("913144"),
  i = r("850068"),
  s = r("271938"),
  l = r("160299"),
  o = r("357957");

function c() {
  let e = (0, a.useStateFromStores)([o.default], () => o.default.getDefaultBillingCountryCode()),
    t = (0, a.useStateFromStores)([l.default], () => l.default.ipCountryCode),
    r = (0, a.useStateFromStores)([s.default], () => s.default.isAuthenticated());
  return n.useEffect(() => {
    u.default.wait(() => {
      r && !l.default.isPaymentSourceFetching && !o.default.hasFetchedPaymentSources && i.fetchPaymentSources()
    })
  }, [r]), n.useEffect(() => {
    r && !l.default.ipCountryCodeLoaded && i.fetchIpCountryCode()
  }, [t, r]), {
    defaultBillingCountryCode: e,
    ipCountryCode: t
  }
}