"use strict";
s.r(e), s.d(e, {
  TOGGLE_HOTKEYS: function() {
    return i
  }
});
var n = s("77078"),
  a = s("244030"),
  o = s("386867");
let i = {
  binds: ["mod+/", "mod+shift+/"],
  comboKeysBindGlobal: !0,
  action: () => ((0, n.hasModalOpen)(o.KEYBOARD_SHORTCUT_MODAL_KEY) ? a.hide() : a.show(), !1)
}