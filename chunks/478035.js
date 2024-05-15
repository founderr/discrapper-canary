"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("735250");
n("470079");
var i = n("442837"),
  l = n("481060"),
  u = n("703656"),
  d = n("914010"),
  s = n("981631"),
  o = n("689938");

function r(e) {
  let t = (0, i.useStateFromStores)([d.default], () => d.default.getGuildId());
  return __OVERLAY__ || t !== s.FAVORITES ? null : (0, a.jsx)(l.MenuItem, {
    id: "go-to-original-guild",
    label: o.default.Messages.FAVORITES_GO_TO_ORIGINAL_GUILD,
    action: function() {
      (0, u.transitionToGuild)(e.guild_id, e.id)
    }
  })
}