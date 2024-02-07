"use strict";
n.r(e), n.d(e, {
  canInstallApplication: function() {
    return o
  },
  installApplication: function() {
    return c
  }
});
var i = n("394846"),
  l = n("316693"),
  a = n("33942"),
  r = n("599110"),
  u = n("128259"),
  s = n("49111");

function o(t, e, n) {
  return null != e || null != n
}

function c(t) {
  let {
    applicationId: e,
    customInstallUrl: n,
    installParams: o,
    guildId: c,
    channelId: d,
    disableGuildSelect: f,
    source: p
  } = t;
  if (null != n) return r.default.track(s.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
    application_id: e,
    guild_id: c,
    auth_type: "custom_url",
    source: p,
    device_platform: i.isMobile ? "mobile_web" : "desktop_web"
  }), (0, u.handleClick)({
    href: n
  });
  null != o && (r.default.track(s.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
    application_id: e,
    guild_id: c,
    auth_type: "in_app",
    source: p,
    device_platform: i.isMobile ? "mobile_web" : "desktop_web"
  }), (0, a.openOAuth2Modal)({
    guildId: c,
    clientId: e,
    scopes: o.scopes,
    channelId: d,
    disableGuildSelect: f,
    permissions: null != o.permissions ? l.default.deserialize(o.permissions) : void 0
  }))
}