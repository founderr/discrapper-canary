"use strict";
E.r(_), E.d(_, {
  maybeGetEmojiCaptionsForUser: function() {
    return a
  }
});
var t = E("697218"),
  o = E("558986"),
  n = E("236266"),
  r = E("802461");
async function a() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown",
    _ = t.default.getCurrentUser();
  if (null == _) return;
  let E = (0, n.getEmojiCaptionsExperimentConfig)({
    location: e
  });
  if (!E.isEnabledOnDesktop) {
    r.default.hasPersistedState() && r.default.clear();
    return
  }
  if (r.default.getIsFetching()) return;
  let a = r.default.getEmojiCaptionsTTL();
  !(null != a && Date.now() < a) && await (0, o.getEmojiCaptionsForUser)()
}