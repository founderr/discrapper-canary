"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("222007");
var i = n("884691"),
  l = n("446674"),
  r = n("850068"),
  s = n("357957");

function a(e) {
  let {
    isGift: t,
    activeSubscription: n
  } = e, {
    defaultPaymentSourceId: a,
    paymentSources: o,
    hasFetchedPaymentSources: u
  } = (0, l.useStateFromStoresObject)([s.default], () => ({
    defaultPaymentSourceId: s.default.defaultPaymentSourceId,
    paymentSources: s.default.paymentSources,
    hasFetchedPaymentSources: s.default.hasFetchedPaymentSources
  })), d = (e, t, n) => e || (null == t ? void 0 : t.paymentSourceId) == null ? n : t.paymentSourceId, [c, f] = i.useState(() => d(t, n, a));
  return i.useEffect(() => {
    u ? f(d(t, n, a)) : (0, r.fetchPaymentSources)()
  }, [u, t, n, a]), {
    paymentSources: o,
    hasPaymentSources: Object.keys(o).length > 0,
    paymentSourceId: c,
    setPaymentSourceId: f,
    hasFetchedPaymentSources: u
  }
}