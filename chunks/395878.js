"use strict";
n.r(t), n.d(t, {
  CREATE_DM_GROUP: function() {
    return u
  }
});
var i = n("475468"),
  l = n("914010"),
  o = n("585483"),
  a = n("981631");
let u = {
  binds: ["mod+shift+t"],
  comboKeysBindGlobal: !0,
  action: () => (null != l.default.getGuildId() && (0, i.transitionToChannel)(a.ME), o.ComponentDispatch.safeDispatch(a.ComponentActions.TOGGLE_DM_CREATE), !1)
}