"use strict";
n.r(t), n.d(t, {
  openGuildMemberModViewSidebar: function() {
    return o
  }
});
var a = n("812204"),
  l = n("208021"),
  s = n("582713"),
  i = n("383606"),
  r = n("459824"),
  u = n("789150");

function o(e, t, n) {
  var o, d, c;
  let f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
    modViewPanel: u.ModViewPanel.INFO
  };
  if (!(0, r.canAccessGuildMemberModViewWithExperiment)(e)) return;
  let h = null !== (o = f.modViewPanel) && void 0 !== o ? o : u.ModViewPanel.INFO,
    p = null !== (d = f.sourceLocation) && void 0 !== d ? d : a.default.MEMBER_SAFETY_PAGE;
  (0, i.trackModViewOpened)(e, t, h, p), l.default.openGuildSidebar({
    guildId: e,
    baseChannelId: n,
    sidebarType: s.GuildSidebarType.GUILD_MEMBER_MOD_VIEW,
    details: {
      type: s.SidebarOpenDetailsType.GUILD_MEMBER_MOD_VIEW,
      userId: t,
      guildId: e,
      ...f,
      modViewPanel: null !== (c = f.modViewPanel) && void 0 !== c ? c : u.ModViewPanel.INFO
    }
  })
}