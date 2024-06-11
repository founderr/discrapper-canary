"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
}), s("47120");
var a = s("442837"),
  n = s("687476"),
  i = s("293810");

function l() {
  return (0, a.useStateFromStores)([n.default], () => (function() {
    let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [n.default], t = e.getGuildIdsWithPurchasableRoles(), s = !1;
    return (t.forEach(t => {
      e.getUserSubscriptionRoles(t).size > 0 && (s = !0)
    }), s) ? i.UserGuildRoleSubscriptionRelationship.SUBSCRIBED : 0 === t.size ? i.UserGuildRoleSubscriptionRelationship.NONE : i.UserGuildRoleSubscriptionRelationship.IN_SUBSCRIPTION_SERVER
  })([n.default]))
}