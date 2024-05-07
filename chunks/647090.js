"use strict";
n.r(t), n.d(t, {
  useHasUserRepliedInChannel: function() {
    return l
  }
});
var a = n("442837"),
  s = n("375954"),
  i = n("594174");
let l = e => (0, a.useStateFromStores)([s.default, i.default], () => {
  if (null == e) return !1;
  let t = i.default.getCurrentUser();
  return null != s.default.getMessages(e).findNewest(e => e.author.id === (null == t ? void 0 : t.id))
})