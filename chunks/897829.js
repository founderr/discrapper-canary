"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var r = n("470079"),
  u = n("442837"),
  i = n("355467"),
  a = n("78839");

function l() {
  let e = (0, u.useStateFromStores)([a.default], () => a.default.hasFetchedSubscriptions());
  return r.useEffect(() => {
    !e && (0, i.fetchSubscriptions)()
  }, [e]), e
}