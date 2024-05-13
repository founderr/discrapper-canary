"use strict";
n.r(t), n.d(t, {
  SUBMIT: function() {
    return a
  }
});
var i = n("607070"),
  l = n("585483"),
  o = n("981631");
let a = {
  binds: ["return"],
  action() {
    if (!i.default.keyboardModeEnabled && l.ComponentDispatch.hasSubscribers(o.ComponentActions.MODAL_SUBMIT)) return l.ComponentDispatch.dispatch(o.ComponentActions.MODAL_SUBMIT), !1
  }
}