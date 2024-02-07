"use strict";
n.r(t), n.d(t, {
  CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
    return l
  },
  CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
    return s
  },
  CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
    return a
  }
});
var i = n("316693"),
  r = n("923510"),
  u = n("49111");
let l = u.Permissions.VIEW_CHANNEL,
  s = i.default.combine(l, u.Permissions.CONNECT),
  a = i.default.combine(l, r.MODERATE_STAGE_CHANNEL_PERMISSIONS)