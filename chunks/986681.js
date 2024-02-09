"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("222007");
var u = n("884691"),
  r = n("446674"),
  i = n("850068"),
  a = n("357957");

function l(e) {
  let {
    isGift: t,
    activeSubscription: n
  } = e, {
    defaultPaymentSourceId: l,
    paymentSources: s,
    hasFetchedPaymentSources: o
  } = (0, r.useStateFromStoresObject)([a.default], () => ({
    defaultPaymentSourceId: a.default.defaultPaymentSourceId,
    paymentSources: a.default.paymentSources,
    hasFetchedPaymentSources: a.default.hasFetchedPaymentSources
  })), c = (e, t, n) => e || (null == t ? void 0 : t.paymentSourceId) == null ? n : t.paymentSourceId, [d, f] = u.useState(() => c(t, n, l));
  return u.useEffect(() => {
    o ? f(c(t, n, l)) : (0, i.fetchPaymentSources)()
  }, [o, t, n, l]), {
    paymentSources: s,
    hasPaymentSources: Object.keys(s).length > 0,
    paymentSourceId: d,
    setPaymentSourceId: f,
    hasFetchedPaymentSources: o
  }
}