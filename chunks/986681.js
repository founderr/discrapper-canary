"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("222007");
var i = n("884691"),
  r = n("446674"),
  u = n("850068"),
  o = n("357957");

function l(e) {
  let {
    isGift: t,
    activeSubscription: n
  } = e, {
    defaultPaymentSourceId: l,
    paymentSources: a,
    hasFetchedPaymentSources: s
  } = (0, r.useStateFromStoresObject)([o.default], () => ({
    defaultPaymentSourceId: o.default.defaultPaymentSourceId,
    paymentSources: o.default.paymentSources,
    hasFetchedPaymentSources: o.default.hasFetchedPaymentSources
  })), c = (e, t, n) => e || (null == t ? void 0 : t.paymentSourceId) == null ? n : t.paymentSourceId, [d, f] = i.useState(() => c(t, n, l));
  return i.useEffect(() => {
    s ? f(c(t, n, l)) : (0, u.fetchPaymentSources)()
  }, [s, t, n, l]), {
    paymentSources: a,
    hasPaymentSources: Object.keys(a).length > 0,
    paymentSourceId: d,
    setPaymentSourceId: f,
    hasFetchedPaymentSources: s
  }
}