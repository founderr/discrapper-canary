"use strict";
n.r(t), n.d(t, {
  CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
    return a
  },
  CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
    return s
  },
  CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
    return l
  }
});
var i = n("316693"),
  r = n("923510"),
  u = n("49111");
let a = u.Permissions.VIEW_CHANNEL,
  s = i.default.combine(a, u.Permissions.CONNECT),
  l = i.default.combine(a, r.MODERATE_STAGE_CHANNEL_PERMISSIONS)