"use strict";
n.r(t), n.d(t, {
  TOGGLE_USERS: function() {
    return A
  }
});
var i = n("106351"),
  l = n("475179"),
  o = n("816782"),
  a = n("358221"),
  u = n("318661"),
  s = n("57048"),
  d = n("433355"),
  r = n("592125"),
  E = n("944486"),
  c = n("914010"),
  _ = n("981631");
let A = {
  binds: ["mod+u"],
  comboKeysBindGlobal: !0,
  action() {
    let e = c.default.getGuildId(),
      t = E.default.getChannelId(e),
      n = r.default.getChannel(t);
    if (null != t && null != n && n.type === i.ChannelTypes.GUILD_VOICE) return l.default.updateChatOpen(t, !a.default.getChatOpen(t)), !1;
    if (null != t && null != n && n.type === i.ChannelTypes.DM) {
      let e = d.default.getSection(t, null == n ? void 0 : n.isDM()),
        i = (0, u.getDisplayProfile)(n.getRecipientId()),
        l = e === _.ChannelSections.PROFILE;
      return (0, s.trackProfilePanelToggled)(i, !l), o.default.toggleProfilePanelSection(), !1
    }
    return o.default.toggleMembersSection(), !1
  }
}