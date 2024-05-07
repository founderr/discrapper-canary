"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("470079"),
  n = s("442837"),
  i = s("339085"),
  E = s("889564");
let l = [];

function _(e) {
  let t = (0, n.useStateFromStores)([i.default], () => i.default.getGuildEmoji(e), [e]);
  return a.useMemo(() => null == t ? l : t.filter(t => (0, E.isRoleSubscriptionEmoji)(t, e)), [t, e])
}