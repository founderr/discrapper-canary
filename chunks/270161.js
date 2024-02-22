"use strict";
n.r(t), n.d(t, {
  CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
    return l
  },
  CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
    return a
  },
  CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
    return u
  }
});
var i = n("316693"),
  r = n("923510"),
  s = n("49111");
let l = s.Permissions.VIEW_CHANNEL,
  a = i.default.combine(l, s.Permissions.CONNECT),
  u = i.default.combine(l, r.MODERATE_STAGE_CHANNEL_PERMISSIONS)