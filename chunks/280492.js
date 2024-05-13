"use strict";
n.r(t), n.d(t, {
  TOGGLE_DEAFEN: function() {
    return o
  },
  TOGGLE_MUTE: function() {
    return l
  }
});
var i = n("846027");
let l = {
    binds: ["mod+shift+m"],
    comboKeysBindGlobal: !0,
    action: () => (i.default.toggleSelfMute({
      usedKeybind: !0
    }), !1)
  },
  o = {
    binds: ["mod+shift+d"],
    comboKeysBindGlobal: !0,
    action: () => (i.default.toggleSelfDeaf(), !1)
  }