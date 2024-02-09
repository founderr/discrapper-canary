"use strict";
E.r(t), E.d(t, {
  default: function() {
    return A
  }
});
var _ = E("884691"),
  s = E("446674"),
  a = E("385976"),
  T = E("153043");
let n = [];

function A(e) {
  let t = (0, s.useStateFromStores)([a.default], () => a.default.getGuildEmoji(e), [e]);
  return _.useMemo(() => null == t ? n : t.filter(t => (0, T.isRoleSubscriptionEmoji)(t, e)), [t, e])
}