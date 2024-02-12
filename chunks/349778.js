"use strict";
n.r(t), n.d(t, {
  isForumActivityExperimentEnabled: function() {
    return s
  }
});
var i = n("943314"),
  l = n("531869"),
  a = n("49111");

function s(e) {
  let t = l.default.getCurrentConfig({
      guildId: null != e ? e : a.EMPTY_STRING_GUILD_ID,
      location: "3fde52_1"
    }),
    n = i.default.getCurrentConfig({
      location: "3fde52_2"
    });
  return !!(t.enabled || n.enabled)
}