"use strict";
n.r(t), n.d(t, {
  CREATE_GUILD: function() {
    return a
  }
});
var i = n("481060"),
  l = n("560067"),
  o = n("675999");
let a = {
  binds: ["mod+shift+n"],
  comboKeysBindGlobal: !0,
  action() {
    (0, i.hasModalOpen)(o.CREATE_GUILD_MODAL_KEY) ? l.default.updateCreateGuildModal({
      slide: o.CreateGuildSlideTypes.JOIN_GUILD,
      location: "Keyboard Shortcut"
    }): l.default.openCreateGuildModal({
      location: "Keyboard Shortcut"
    })
  }
}