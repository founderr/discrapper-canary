"use strict";
r.r(t), r.d(t, {
  default: function() {
    return i
  }
}), r("222007");
var a = r("884691"),
  n = r("446674"),
  u = r("850068"),
  s = r("357957");

function i(e) {
  let {
    isGift: t,
    activeSubscription: r
  } = e, {
    defaultPaymentSourceId: i,
    paymentSources: l,
    hasFetchedPaymentSources: o
  } = (0, n.useStateFromStoresObject)([s.default], () => ({
    defaultPaymentSourceId: s.default.defaultPaymentSourceId,
    paymentSources: s.default.paymentSources,
    hasFetchedPaymentSources: s.default.hasFetchedPaymentSources
  })), c = (e, t, r) => e || (null == t ? void 0 : t.paymentSourceId) == null ? r : t.paymentSourceId, [d, f] = a.useState(() => c(t, r, i));
  return a.useEffect(() => {
    o ? f(c(t, r, i)) : (0, u.fetchPaymentSources)()
  }, [o, t, r, i]), {
    paymentSources: l,
    hasPaymentSources: Object.keys(l).length > 0,
    paymentSourceId: d,
    setPaymentSourceId: f,
    hasFetchedPaymentSources: o
  }
}