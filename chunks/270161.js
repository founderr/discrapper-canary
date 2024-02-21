"use strict";
n.r(t), n.d(t, {
  CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
    return u
  },
  CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
    return a
  },
  CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
    return s
  }
});
var i = n("316693"),
  r = n("923510"),
  l = n("49111");
let u = l.Permissions.VIEW_CHANNEL,
  a = i.default.combine(u, l.Permissions.CONNECT),
  s = i.default.combine(u, r.MODERATE_STAGE_CHANNEL_PERMISSIONS)