"use strict";
n.r(t), n.d(t, {
  UPLOAD_FILE: function() {
    return u
  }
});
var i = n("592125"),
  l = n("944486"),
  o = n("585483"),
  a = n("981631");
let u = {
  binds: ["mod+shift+u"],
  comboKeysBindGlobal: !0,
  action() {
    let e = i.default.getChannel(l.default.getChannelId());
    return null != e && !e.isManaged() && o.ComponentDispatch.dispatch(a.ComponentActions.UPLOAD_FILE), !1
  }
}