"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("37983");
n("884691");
var i = n("77078"),
  a = n("599110"),
  s = n("49111");

function r(e) {
  a.default.track(s.AnalyticEvents.OPEN_MODAL, {
    type: "Clyde Share Profile",
    location_page: "Profile Popout",
    guild_id: e
  }), (0, i.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("736139").then(n.bind(n, "736139"));
    return n => (0, l.jsx)(t, {
      ...n,
      guildId: e
    })
  })
}