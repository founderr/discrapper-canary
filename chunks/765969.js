"use strict";
n.r(t), n.d(t, {
  maybeGetEmojiCaptionsForUser: function() {
    return r
  }
});
var i = n("697218"),
  a = n("558986"),
  l = n("802461"),
  s = n("269579");
async function r() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown",
    t = i.default.getCurrentUser();
  if (null == t) return;
  let {
    isEmojiCaptionsEnabled: n
  } = s.default.getCurrentConfig({
    location: e
  });
  if (!n) {
    l.default.hasPersistedState() && l.default.clear();
    return
  }
  if (l.default.getIsFetching()) return;
  let r = l.default.getEmojiCaptionsTTL();
  !(null != r && Date.now() < r) && await (0, a.getEmojiCaptionsForUser)()
}