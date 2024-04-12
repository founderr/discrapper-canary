"use strict";
l.r(t), l.d(t, {
  TOGGLE_HOTKEYS: function() {
    return a
  }
});
var s = l("481060"),
  n = l("191980"),
  u = l("285371");
let a = {
  binds: ["mod+/", "mod+shift+/"],
  comboKeysBindGlobal: !0,
  action: () => ((0, s.hasModalOpen)(u.KEYBOARD_SHORTCUT_MODAL_KEY) ? n.hide() : n.show(), !1)
}