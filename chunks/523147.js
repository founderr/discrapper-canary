"use strict";
n.r(t);
var i = n("594174"),
  o = n("585483"),
  l = n("981631");
t.default = {
  binds: ["mod+shift+b"],
  comboKeysBindGlobal: !0,
  action() {
    let e = i.default.getCurrentUser();
    return (null == e ? void 0 : e.isStaff()) === !0 && (o.ComponentDispatch.dispatch(l.ComponentActions.TOGGLE_SOUNDBOARD), !1)
  }
}