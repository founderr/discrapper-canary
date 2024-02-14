"use strict";
E.r(_), E.d(_, {
  maybeGetEmojiCaptionsForUser: function() {
    return r
  }
});
var t = E("697218"),
  o = E("558986"),
  n = E("802461"),
  a = E("269579");
async function r() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown",
    _ = t.default.getCurrentUser();
  if (null == _) return;
  let {
    isEmojiCaptionsEnabled: E
  } = a.default.getCurrentConfig({
    location: e
  });
  if (!E) {
    n.default.hasPersistedState() && n.default.clear();
    return
  }
  if (n.default.getIsFetching()) return;
  let r = n.default.getEmojiCaptionsTTL();
  !(null != r && Date.now() < r) && await (0, o.getEmojiCaptionsForUser)()
}