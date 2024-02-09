"use strict";
E.r(t), E.d(t, {
  default: function() {
    return T
  }
});
var _ = E("446674"),
  s = E("305961"),
  a = E("837008");

function T(e, t) {
  let E = (0, _.useStateFromStores)([s.default], () => s.default.getGuild(e), [e]),
    T = (0, a.useSubscriptionListing)(t);
  return null == E || null == T ? null : E.roles[T.role_id]
}