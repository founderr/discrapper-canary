"use strict";
n.r(t), n.d(t, {
  JUMP_TO_CURRENT_CALL: function() {
    return a
  }
});
var i = n("475468"),
  l = n("19780"),
  o = n("981631");
let a = {
  binds: ["mod+shift+alt+v"],
  comboKeysBindGlobal: !0,
  action(e) {
    e.preventDefault(), e.stopPropagation();
    let t = l.default.getGuildId(),
      n = l.default.getChannelId();
    return null != n && (0, i.transitionToChannel)(null != t ? t : o.ME, n), !1
  }
}