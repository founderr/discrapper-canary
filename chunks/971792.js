"use strict";
i.r(s), i.d(s, {
  default: function() {
    return r
  }
});
var t = i("442837"),
  n = i("430824"),
  E = i("584825");

function r(e, s) {
  let i = (0, E.useSubscriptionListing)(s);
  return (0, t.useStateFromStores)([n.default], () => null != e && null != i ? n.default.getRole(e, i.role_id) : void 0)
}