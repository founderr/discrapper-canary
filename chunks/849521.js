"use strict";
n.r(t), n.d(t, {
  trackAppDirectoryProfileEmbed: function() {
    return l
  }
});
var i = n("873546"),
  r = n("944486"),
  s = n("914010"),
  a = n("626135"),
  o = n("981631");

function l(e, t) {
  a.default.track(o.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, {
    application_id: e,
    device_platform: i.isMobile ? "mobile_web" : "desktop_web",
    guild_id: s.default.getGuildId(),
    channel_id: r.default.getChannelId(),
    section: t
  })
}