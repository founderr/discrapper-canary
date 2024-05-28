"use strict";
s.r(t);
var a = s("470079"),
  n = s("442837"),
  i = s("78839"),
  r = s("231338");
t.default = function(e) {
  let {
    subscriptionFilter: t
  } = e, s = (0, n.useStateFromStores)([i.default], () => i.default.getSubscriptions(!0)), l = a.useMemo(() => null == s ? [] : Object.values(s).filter(e => !!(e.type === r.SubscriptionTypes.PREMIUM && (null == t || t(e)) && (0, i.authenticatedUserFilter)(e)) || !1), [s, t]);
  return l.sort((e, t) => {
    var s, a;
    let n = null !== (s = e.paymentGateway) && void 0 !== s ? s : 0,
      i = null !== (a = t.paymentGateway) && void 0 !== a ? a : 0;
    return n < i ? -1 : n > i ? 1 : 0
  }), l
}