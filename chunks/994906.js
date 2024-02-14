"use strict";
n.r(t), n.d(t, {
  openGuildMemberModViewSidebar: function() {
    return u
  }
});
var a = n("812204"),
  l = n("208021"),
  s = n("582713"),
  i = n("383606"),
  r = n("459824"),
  o = n("789150");

function u(e, t, n) {
  var u, d, c;
  let f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
    modViewPanel: o.ModViewPanel.INFO
  };
  if (!(0, r.canAccessGuildMemberModViewWithExperiment)(e)) return Promise.resolve();
  let h = null !== (u = f.modViewPanel) && void 0 !== u ? u : o.ModViewPanel.INFO,
    m = null !== (d = f.sourceLocation) && void 0 !== d ? d : a.default.MEMBER_SAFETY_PAGE;
  return (0, i.trackModViewOpened)(e, t, h, m), l.default.openGuildSidebar({
    guildId: e,
    baseChannelId: n,
    sidebarType: s.GuildSidebarType.GUILD_MEMBER_MOD_VIEW,
    details: {
      type: s.SidebarOpenDetailsType.GUILD_MEMBER_MOD_VIEW,
      userId: t,
      guildId: e,
      ...f,
      modViewPanel: null !== (c = f.modViewPanel) && void 0 !== c ? c : o.ModViewPanel.INFO
    }
  })
}