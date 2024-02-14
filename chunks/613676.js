"use strict";
n.r(t), n.d(t, {
  canInstallApplication: function() {
    return u
  },
  installApplication: function() {
    return d
  }
});
var l = n("394846"),
  i = n("316693"),
  a = n("33942"),
  s = n("599110"),
  r = n("128259"),
  o = n("49111");

function u(e, t, n) {
  return null != t || null != n
}

function d(e) {
  let {
    applicationId: t,
    customInstallUrl: n,
    installParams: u,
    guildId: d,
    channelId: c,
    disableGuildSelect: f,
    source: m
  } = e;
  if (null != n) return s.default.track(o.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
    application_id: t,
    guild_id: d,
    auth_type: "custom_url",
    source: m,
    device_platform: l.isMobile ? "mobile_web" : "desktop_web"
  }), (0, r.handleClick)({
    href: n
  });
  null != u && (s.default.track(o.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
    application_id: t,
    guild_id: d,
    auth_type: "in_app",
    source: m,
    device_platform: l.isMobile ? "mobile_web" : "desktop_web"
  }), (0, a.openOAuth2Modal)({
    guildId: d,
    clientId: t,
    scopes: u.scopes,
    channelId: c,
    disableGuildSelect: f,
    permissions: null != u.permissions ? i.default.deserialize(u.permissions) : void 0
  }))
}