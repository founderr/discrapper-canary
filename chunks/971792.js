"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("442837"),
  n = s("430824"),
  i = s("584825");

function E(e, t) {
  let s = (0, i.useSubscriptionListing)(t);
  return (0, a.useStateFromStores)([n.default], () => null != e && null != s ? n.default.getRole(e, s.role_id) : void 0)
}