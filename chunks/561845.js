"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var s = l("446674"),
  i = l("888355"),
  n = l("267567"),
  u = l("845579"),
  a = l("271938"),
  o = l("26989"),
  r = l("27618"),
  d = l("680894");

function c(e, t) {
  let l = (0, s.useStateFromStores)([a.default], () => a.default.getId() === e),
    c = (0, s.useStateFromStores)([n.default], () => null != t && n.default.isLurking(t)),
    f = u.RestrictedGuildIds.useSetting(),
    _ = (0, i.useIsDMsToClydeEnabled)() && e === d.CLYDE_AI_USER_ID;
  return (0, s.useStateFromStores)([r.default, o.default], () => !l && !c && (r.default.isFriend(e) || null != o.default.memberOf(e).find(e => !f.includes(e))) || _)
}