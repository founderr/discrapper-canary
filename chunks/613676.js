"use strict";
n.r(t), n.d(t, {
  canInstallApplication: function() {
    return o
  },
  installApplication: function() {
    return c
  }
});
var i = n("394846"),
  r = n("316693"),
  l = n("33942"),
  a = n("599110"),
  s = n("128259"),
  u = n("49111");

function o(e, t, n) {
  return null != t || null != n
}

function c(e) {
  let {
    applicationId: t,
    customInstallUrl: n,
    installParams: o,
    guildId: c,
    channelId: d,
    disableGuildSelect: f,
    source: p
  } = e;
  if (null != n) return a.default.track(u.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
    application_id: t,
    guild_id: c,
    auth_type: "custom_url",
    source: p,
    device_platform: i.isMobile ? "mobile_web" : "desktop_web"
  }), (0, s.handleClick)({
    href: n
  });
  null != o && (a.default.track(u.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
    application_id: t,
    guild_id: c,
    auth_type: "in_app",
    source: p,
    device_platform: i.isMobile ? "mobile_web" : "desktop_web"
  }), (0, l.openOAuth2Modal)({
    guildId: c,
    clientId: t,
    scopes: o.scopes,
    channelId: d,
    disableGuildSelect: f,
    permissions: null != o.permissions ? r.default.deserialize(o.permissions) : void 0
  }))
}