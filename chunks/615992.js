"use strict";
s.r(t), s.d(t, {
  useLastChannelMessage: function() {
    return l
  }
});
var n = s("446674"),
  a = s("377253");
let l = e => (0, n.useStateFromStores)([a.default], () => {
  var t;
  return null !== (t = a.default.getLastNonCurrentUserMessage(e)) && void 0 !== t ? t : a.default.getLastMessage(e)
})