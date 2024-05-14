"use strict";
n.r(t), n.d(t, {
  UPLOAD_FILE: function() {
    return u
  }
});
var i = n("592125"),
  o = n("944486"),
  l = n("585483"),
  a = n("981631");
let u = {
  binds: ["mod+shift+u"],
  comboKeysBindGlobal: !0,
  action() {
    let e = i.default.getChannel(o.default.getChannelId());
    return null != e && !e.isManaged() && l.ComponentDispatch.dispatch(a.ComponentActions.UPLOAD_FILE), !1
  }
}