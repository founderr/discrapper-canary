"use strict";
a.r(t), a.d(t, {
  useHasUserRepliedInChannel: function() {
    return i
  }
});
var n = a("442837"),
  s = a("375954"),
  l = a("594174");
let i = e => (0, n.useStateFromStores)([s.default, l.default], () => {
  if (null == e) return !1;
  let t = l.default.getCurrentUser();
  return null != s.default.getMessages(e).findNewest(e => e.author.id === (null == t ? void 0 : t.id))
})