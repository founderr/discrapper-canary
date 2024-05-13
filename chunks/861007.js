"use strict";
n.r(t), n.d(t, {
  TOGGLE_CHANNEL_PINS: function() {
    return o
  }
});
var i = n("585483"),
  l = n("981631");
let o = {
  binds: ["mod+p"],
  comboKeysBindGlobal: !0,
  action: () => (i.ComponentDispatch.dispatch(l.ComponentActions.TOGGLE_CHANNEL_PINS), !1)
}