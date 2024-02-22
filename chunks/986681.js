"use strict";
r.r(t), r.d(t, {
  default: function() {
    return l
  }
}), r("222007");
var a = r("884691"),
  n = r("446674"),
  u = r("850068"),
  i = r("357957");

function l(e) {
  let {
    isGift: t,
    activeSubscription: r
  } = e, {
    defaultPaymentSourceId: l,
    paymentSources: s,
    hasFetchedPaymentSources: o
  } = (0, n.useStateFromStoresObject)([i.default], () => ({
    defaultPaymentSourceId: i.default.defaultPaymentSourceId,
    paymentSources: i.default.paymentSources,
    hasFetchedPaymentSources: i.default.hasFetchedPaymentSources
  })), c = (e, t, r) => e || (null == t ? void 0 : t.paymentSourceId) == null ? r : t.paymentSourceId, [d, f] = a.useState(() => c(t, r, l));
  return a.useEffect(() => {
    o ? f(c(t, r, l)) : (0, u.fetchPaymentSources)()
  }, [o, t, r, l]), {
    paymentSources: s,
    hasPaymentSources: Object.keys(s).length > 0,
    paymentSourceId: d,
    setPaymentSourceId: f,
    hasFetchedPaymentSources: o
  }
}