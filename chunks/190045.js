"use strict";
t.r(r), t.d(r, {
  default: function() {
    return a
  }
});
var l = t("37983");
t("884691");
var n = t("77078"),
  i = t("599110"),
  o = t("49111");

function a(e) {
  i.default.track(o.AnalyticEvents.OPEN_MODAL, {
    type: "Edit Clyde Profile",
    location_page: "Profile Popout",
    guild_id: e
  }), (0, n.openModalLazy)(async () => {
    let {
      default: r
    } = await t.el("485261").then(t.bind(t, "485261"));
    return t => (0, l.jsx)(r, {
      ...t,
      guildId: e
    })
  })
}