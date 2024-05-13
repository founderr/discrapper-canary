"use strict";
n.r(t), n.d(t, {
  SERVER_NEXT: function() {
    return l
  },
  SERVER_PREV: function() {
    return o
  }
});
var i = n("452913");
let l = {
    binds: ["mod+alt+down", "mod+shift+]", "ctrl+tab"],
    comboKeysBindGlobal: !0,
    action: e => (e.preventDefault(), e.stopPropagation(), (0, i.default)(), !1)
  },
  o = {
    binds: ["mod+alt+up", "mod+shift+[", "ctrl+shift+tab"],
    comboKeysBindGlobal: !0,
    action: e => (e.preventDefault(), e.stopPropagation(), (0, i.default)(-1), !1)
  }