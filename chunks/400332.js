"use strict";
n.r(t), n.d(t, {
  SEARCH_STICKERS: function() {
    return o
  }
});
var i = n("585483"),
  l = n("981631");
let o = {
  binds: ["mod+s"],
  comboKeysBindGlobal: !0,
  action: () => (i.ComponentDispatch.dispatchToLastSubscribed(l.ComponentActions.TOGGLE_STICKER_PICKER), !1)
}