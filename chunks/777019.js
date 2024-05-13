"use strict";
n.r(t), n.d(t, {
  SEARCH_GIFS: function() {
    return o
  }
});
var i = n("585483"),
  l = n("981631");
let o = {
  binds: ["mod+g"],
  comboKeysBindGlobal: !0,
  action: () => (i.ComponentDispatch.dispatchToLastSubscribed(l.ComponentActions.TOGGLE_GIF_PICKER), !1)
}