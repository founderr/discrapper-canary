"use strict";
i.r(s), i.d(s, {
  default: function() {
    return r
  }
});
var n = i("442837"),
  t = i("430824"),
  E = i("584825");

function r(e, s) {
  let i = (0, E.useSubscriptionListing)(s);
  return (0, n.useStateFromStores)([t.default], () => null != e && null != i ? t.default.getRole(e, i.role_id) : void 0)
}