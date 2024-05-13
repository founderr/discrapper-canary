"use strict";
n.r(t), n.d(t, {
  JUMP_TO_FIRST_UNREAD: function() {
    return a
  }
});
var i = n("904245"),
  l = n("306680"),
  o = n("944486");
let a = {
  binds: ["shift+pageup"],
  comboKeysBindGlobal: !0,
  action() {
    let e = o.default.getChannelId();
    if (null != e) {
      let t = l.default.ackMessageId(e);
      null != t && l.default.getOldestUnreadTimestamp(e) > 0 && i.default.jumpToMessage({
        channelId: e,
        messageId: t,
        offset: 1,
        context: "Keyboard Shortcut"
      })
    }
    return !1
  }
}