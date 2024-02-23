"use strict";
n.r(t), n.d(t, {
  CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
    return s
  },
  CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
    return a
  },
  CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
    return u
  }
});
var i = n("316693"),
  l = n("923510"),
  r = n("49111");
let s = r.Permissions.VIEW_CHANNEL,
  a = i.default.combine(s, r.Permissions.CONNECT),
  u = i.default.combine(s, l.MODERATE_STAGE_CHANNEL_PERMISSIONS)