"use strict";
n.r(t), n.d(t, {
  canInstallApplication: function() {
    return u
  },
  installApplication: function() {
    return d
  }
});
var i = n("873546"),
  r = n("149765"),
  s = n("69580"),
  a = n("626135"),
  o = n("49012"),
  l = n("981631");

function u(e) {
  let {
    customInstallUrl: t,
    installParams: n,
    integrationTypesConfig: i
  } = e;
  return null != t || null != n || null != i && Object.values(i).some(e => null != e && null != e.oauth2_install_params)
}

function d(e) {
  let {
    applicationId: t,
    customInstallUrl: n,
    installParams: u,
    integrationTypesConfig: d,
    guildId: _,
    channelId: c,
    disableGuildSelect: E,
    source: I
  } = e;
  if (null != n) {
    a.default.track(l.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
      application_id: t,
      guild_id: _,
      auth_type: "custom_url",
      source: I,
      device_platform: i.isMobile ? "mobile_web" : "desktop_web"
    }), (0, o.handleClick)({
      href: n
    });
    return
  }
  if (null != d && Object.values(d).some(e => null != e && null != e.oauth2_install_params)) {
    a.default.track(l.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
      application_id: t,
      guild_id: _,
      auth_type: "in_app",
      source: I,
      device_platform: i.isMobile ? "mobile_web" : "desktop_web"
    }), (0, s.openOAuth2Modal)({
      clientId: t,
      guildId: _,
      channelId: c,
      disableGuildSelect: E
    });
    return
  }
  null != u && (a.default.track(l.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
    application_id: t,
    guild_id: _,
    auth_type: "in_app",
    source: I,
    device_platform: i.isMobile ? "mobile_web" : "desktop_web"
  }), (0, s.openOAuth2Modal)({
    clientId: t,
    guildId: _,
    channelId: c,
    disableGuildSelect: E,
    scopes: u.scopes,
    permissions: null != u.permissions ? r.deserialize(u.permissions) : void 0
  }))
}