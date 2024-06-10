"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var r = n("470079"),
  u = n("442837"),
  i = n("355467"),
  l = n("78839");

function a() {
  let e = (0, u.useStateFromStores)([l.default], () => l.default.hasFetchedSubscriptions());
  return r.useEffect(() => {
    !e && (0, i.fetchSubscriptions)()
  }, [e]), e
}