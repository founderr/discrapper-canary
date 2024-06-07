"use strict";
i.r(s), i.d(s, {
  default: function() {
    return o
  }
});
var n = i("470079"),
  t = i("442837"),
  E = i("339085"),
  r = i("889564");
let S = [];

function o(e) {
  let s = (0, t.useStateFromStores)([E.default], () => E.default.getGuildEmoji(e), [e]);
  return n.useMemo(() => null == s ? S : s.filter(s => (0, r.isRoleSubscriptionEmoji)(s, e)), [s, e])
}