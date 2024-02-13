"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("471671"),
  r = n("674644"),
  u = n("198442"),
  o = n("49111");

function d(e) {
  let {
    guild: t,
    invite: n
  } = e, d = a.useMemo(() => (0, r.createGuildNode)(t.id), [t.id]), c = (0, s.useStateFromStores)([i.default], () => i.default.isFocused());
  return null == t ? null : (0, l.jsx)(u.default, {
    guildNode: d,
    guild: t,
    animatable: c,
    draggable: !1,
    contextMenu: () => {},
    selected: !0,
    route: o.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(t.id, n.code)
  })
}