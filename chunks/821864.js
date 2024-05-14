"use strict";
n.r(t), n.d(t, {
  clearIntegrationPermissions: function() {
    return u
  },
  editPermissions: function() {
    return l
  },
  getApplicationCommandPermissions: function() {
    return E
  },
  getApplicationCommands: function() {
    return d
  },
  initIntegrationPermissions: function() {
    return c
  },
  resetPermissions: function() {
    return f
  },
  updateApplicationCommandPermissions: function() {
    return T
  }
});
var r = n("544891"),
  a = n("570140"),
  i = n("555573"),
  s = n("581364"),
  o = n("981631");

function u() {
  a.default.dispatch({
    type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR"
  })
}

function l(e, t, n) {
  a.default.dispatch({
    applicationId: e,
    commandId: t,
    permissions: n,
    type: "INTEGRATION_PERMISSION_SETTINGS_EDIT"
  })
}

function d(e, t) {
  r.HTTP.get(o.Endpoints.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then(n => {
    a.default.dispatch({
      type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
      applicationId: t,
      commands: n.body.application_commands,
      guildId: e,
      permissions: n.body.permissions
    })
  }, () => {
    a.default.dispatch({
      type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
      applicationId: t
    })
  })
}
async function E(e, t, n) {
  let i = [];
  try {
    let a = await r.HTTP.get(o.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n));
    a.ok && (i = a.body.permissions)
  } catch (r) {
    if (404 !== r.status) {
      a.default.dispatch({
        type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
        applicationId: e,
        commandId: n,
        guildId: t
      });
      return
    }
  }
  a.default.dispatch({
    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
    applicationId: e,
    commandId: n,
    guildId: t,
    permissions: i
  })
}

function c(e) {
  a.default.dispatch({
    applicationId: e,
    type: "INTEGRATION_PERMISSION_SETTINGS_INIT"
  })
}

function f(e) {
  a.default.dispatch({
    commandId: e,
    type: "INTEGRATION_PERMISSION_SETTINGS_RESET"
  })
}
async function T(e) {
  let {
    applicationId: t,
    commandId: n,
    defaultEveryoneValue: r,
    defaultEverywhereValue: o,
    guildId: u,
    permissions: l
  } = e, d = n === t ? function(e, t, n, r) {
    if (!n || !r) return t;
    let a = {
      [e]: n,
      [(0, s.allChannelsSentinel)(e)]: r
    };
    return t.filter(e => {
      let t = a[e.id];
      return null == t || e.permission !== t
    })
  }(u, l, r, o) : l, E = await i.updateApplicationGuildCommandPermissions(t, u, n, d);
  E.ok && a.default.dispatch({
    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
    applicationId: t,
    commandId: n,
    guildId: u,
    permissions: E.body.permissions
  })
}