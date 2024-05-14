"use strict";
n.r(t), n.d(t, {
  MARK_TOP_INBOX_CHANNEL_READ: function() {
    return s
  },
  TOGGLE_INBOX_UNREADS_TAB: function() {
    return u
  }
});
var i = n("392711"),
  o = n.n(i),
  l = n("585483"),
  a = n("981631");
let u = {
    binds: ["mod+i"],
    comboKeysBindGlobal: !0,
    action: () => (l.ComponentDispatch.dispatch(a.ComponentActions.TOGGLE_INBOX_UNREADS_TAB), !1)
  },
  s = {
    binds: ["mod+shift+e"],
    comboKeysBindGlobal: !0,
    action: o().debounce(() => {
      if (l.ComponentDispatch.hasSubscribers(a.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ)) return l.ComponentDispatch.dispatch(a.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ), !1
    }, 100, {
      leading: !0
    })
  }