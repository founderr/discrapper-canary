"use strict";
s.r(t), s.d(t, {
  useLongestChannelMessageBeforeReply: function() {
    return o
  }
}), s("222007");
var n = s("446674"),
  a = s("377253");

function o(e, t) {
  return (0, n.useStateFromStores)([a.default], () => {
    if (null == t) return;
    let s = a.default.getMessages(e),
      n = s.findOldest(e => e.author.id === t);
    if (null == n) return;
    let o = s.toArray();
    for (let e of o) {
      if (e.author.id !== t) break;
      e.content.length > (null == n ? void 0 : n.content.length) && (n = e)
    }
    return n
  }, [e, t])
}