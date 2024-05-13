"use strict";
n.r(t), n.d(t, {
  FOCUS_SEARCH: function() {
    return o
  }
});
var i = n("585483"),
  l = n("981631");
let o = {
  binds: ["mod+f"],
  comboKeysBindGlobal: !0,
  action(e) {
    e.preventDefault(), e.stopPropagation(), i.ComponentDispatch.dispatch(l.ComponentActions.FOCUS_SEARCH, {
      prefillCurrentChannel: !0
    })
  }
}