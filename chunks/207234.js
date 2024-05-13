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
  l = n.n(i),
  o = n("585483"),
  a = n("981631");
let u = {
    binds: ["mod+i"],
    comboKeysBindGlobal: !0,
    action: () => (o.ComponentDispatch.dispatch(a.ComponentActions.TOGGLE_INBOX_UNREADS_TAB), !1)
  },
  s = {
    binds: ["mod+shift+e"],
    comboKeysBindGlobal: !0,
    action: l().debounce(() => {
      if (o.ComponentDispatch.hasSubscribers(a.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ)) return o.ComponentDispatch.dispatch(a.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ), !1
    }, 100, {
      leading: !0
    })
  }