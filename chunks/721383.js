"use strict";
n.r(t), n.d(t, {
  TOGGLE_HOTKEYS: function() {
    return a
  }
});
var i = n("481060"),
  o = n("191980"),
  l = n("285371");
let a = {
  binds: ["mod+/", "mod+shift+/"],
  comboKeysBindGlobal: !0,
  action: () => ((0, i.hasModalOpen)(l.KEYBOARD_SHORTCUT_MODAL_KEY) ? o.hide() : o.show(), !1)
}