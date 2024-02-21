"use strict";
n.r(t), n.d(t, {
  isFirstMessageIdInMediaPost: function() {
    return l
  }
}), n("65597");
var a = n("42203"),
  s = n("299039");

function l(e, t) {
  if (e !== s.default.castChannelIdAsMessageId(t)) return !1;
  let n = a.default.getChannel(t);
  if (null == n || !n.isForumPost()) return !1;
  let l = a.default.getChannel(n.parent_id);
  return (null == l ? void 0 : l.isMediaChannel()) === !0
}