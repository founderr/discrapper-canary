"use strict";
s.r(t), s.d(t, {
  useLastChannelMessage: function() {
    return n
  }
});
var a = s("446674"),
  l = s("377253");
let n = e => (0, a.useStateFromStores)([l.default], () => {
  var t;
  return null !== (t = l.default.getLastNonCurrentUserMessage(e)) && void 0 !== t ? t : l.default.getLastMessage(e)
})