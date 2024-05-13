"use strict";
n.r(t), n.d(t, {
  CALL_ACCEPT: function() {
    return o
  },
  CALL_START: function() {
    return a
  }
});
var i = n("585483"),
  l = n("981631");
let o = {
    binds: ["mod+return"],
    comboKeysBindGlobal: !0,
    action() {
      if (i.ComponentDispatch.hasSubscribers(l.ComponentActions.CALL_ACCEPT)) return i.ComponentDispatch.dispatch(l.ComponentActions.CALL_ACCEPT), !1
    }
  },
  a = {
    binds: ["ctrl+'", "ctrl+shift+'"],
    comboKeysBindGlobal: !0,
    action(e) {
      if (i.ComponentDispatch.hasSubscribers(l.ComponentActions.CALL_START)) return i.ComponentDispatch.dispatch(l.ComponentActions.CALL_START, e), !1
    }
  }