"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var u = n("884691"),
  r = n("446674"),
  a = n("850068"),
  i = n("357957");

function o(e) {
  let {
    isGift: t,
    activeSubscription: n
  } = e, {
    defaultPaymentSourceId: o,
    paymentSources: l,
    hasFetchedPaymentSources: s
  } = (0, r.useStateFromStoresObject)([i.default], () => ({
    defaultPaymentSourceId: i.default.defaultPaymentSourceId,
    paymentSources: i.default.paymentSources,
    hasFetchedPaymentSources: i.default.hasFetchedPaymentSources
  })), c = (e, t, n) => e || (null == t ? void 0 : t.paymentSourceId) == null ? n : t.paymentSourceId, [d, f] = u.useState(() => c(t, n, o));
  return u.useEffect(() => {
    s ? f(c(t, n, o)) : (0, a.fetchPaymentSources)()
  }, [s, t, n, o]), {
    paymentSources: l,
    hasPaymentSources: Object.keys(l).length > 0,
    paymentSourceId: d,
    setPaymentSourceId: f,
    hasFetchedPaymentSources: s
  }
}