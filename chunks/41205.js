"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var i = n("37983");
n("884691");
var a = n("446674"),
  l = n("77078"),
  d = n("393414"),
  u = n("162771"),
  s = n("49111"),
  o = n("782340");

function r(e) {
  let t = (0, a.useStateFromStores)([u.default], () => u.default.getGuildId());
  return __OVERLAY__ || t !== s.FAVORITES ? null : (0, i.jsx)(l.MenuItem, {
    id: "go-to-original-guild",
    label: o.default.Messages.FAVORITES_GO_TO_ORIGINAL_GUILD,
    action: function() {
      (0, d.transitionToGuild)(e.guild_id, e.id)
    }
  })
}