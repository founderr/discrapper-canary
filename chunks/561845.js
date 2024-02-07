"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("446674"),
  i = n("888355"),
  a = n("267567"),
  s = n("845579"),
  r = n("271938"),
  o = n("26989"),
  u = n("27618"),
  d = n("680894");

function c(e, t) {
  let n = (0, l.useStateFromStores)([r.default], () => r.default.getId() === e),
    c = (0, l.useStateFromStores)([a.default], () => null != t && a.default.isLurking(t)),
    f = s.RestrictedGuildIds.useSetting(),
    p = (0, i.useIsDMsToClydeEnabled)() && e === d.CLYDE_AI_USER_ID;
  return (0, l.useStateFromStores)([u.default, o.default], () => !n && !c && (u.default.isFriend(e) || null != o.default.memberOf(e).find(e => !f.includes(e))) || p)
}