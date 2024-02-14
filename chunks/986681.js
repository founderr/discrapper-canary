"use strict";
r.r(t), r.d(t, {
  default: function() {
    return s
  }
}), r("222007");
var n = r("884691"),
  a = r("446674"),
  u = r("850068"),
  i = r("357957");

function s(e) {
  let {
    isGift: t,
    activeSubscription: r
  } = e, {
    defaultPaymentSourceId: s,
    paymentSources: l,
    hasFetchedPaymentSources: o
  } = (0, a.useStateFromStoresObject)([i.default], () => ({
    defaultPaymentSourceId: i.default.defaultPaymentSourceId,
    paymentSources: i.default.paymentSources,
    hasFetchedPaymentSources: i.default.hasFetchedPaymentSources
  })), c = (e, t, r) => e || (null == t ? void 0 : t.paymentSourceId) == null ? r : t.paymentSourceId, [d, f] = n.useState(() => c(t, r, s));
  return n.useEffect(() => {
    o ? f(c(t, r, s)) : (0, u.fetchPaymentSources)()
  }, [o, t, r, s]), {
    paymentSources: l,
    hasPaymentSources: Object.keys(l).length > 0,
    paymentSourceId: d,
    setPaymentSourceId: f,
    hasFetchedPaymentSources: o
  }
}