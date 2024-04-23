"use strict";
n.r(t);
var s = n("544891"),
  l = n("900849"),
  a = n("981631");
t.default = e => s.HTTP.get({
  url: a.Endpoints.STICKER_GUILD_DATA(e),
  oldFormErrors: !0
}).then(e => (null == e ? void 0 : e.body) != null ? (0, l.makeDiscoverableGuild)(e.body) : null).catch(() => null)