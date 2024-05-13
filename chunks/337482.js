"use strict";
n.r(t), n.d(t, {
  SCROLL_DOWN: function() {
    return a
  },
  SCROLL_UP: function() {
    return o
  }
});
var i = n("585483"),
  l = n("981631");
let o = {
    binds: ["pageup"],
    comboKeysBindGlobal: !0,
    action: () => (i.ComponentDispatch.dispatchToLastSubscribed(l.ComponentActions.SCROLL_PAGE_UP), !1)
  },
  a = {
    binds: ["pagedown"],
    comboKeysBindGlobal: !0,
    action: () => (i.ComponentDispatch.dispatchToLastSubscribed(l.ComponentActions.SCROLL_PAGE_DOWN), !1)
  }