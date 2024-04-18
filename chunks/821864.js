"use strict";
n.r(t), n.d(t, {
  clearIntegrationPermissions: function() {
    return u
  },
  editPermissions: function() {
    return l
  },
  getApplicationCommandPermissions: function() {
    return c
  },
  getApplicationCommands: function() {
    return d
  },
  initIntegrationPermissions: function() {
    return E
  },
  resetPermissions: function() {
    return T
  },
  updateApplicationCommandPermissions: function() {
    return f
  }
});
var a = n("544891"),
  i = n("570140"),
  r = n("555573"),
  s = n("581364"),
  o = n("981631");

function u() {
  i.default.dispatch({
    type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR"
  })
}

function l(e, t, n) {
  i.default.dispatch({
    applicationId: e,
    commandId: t,
    permissions: n,
    type: "INTEGRATION_PERMISSION_SETTINGS_EDIT"
  })
}

function d(e, t) {
  a.HTTP.get(o.Endpoints.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then(n => {
    i.default.dispatch({
      type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
      applicationId: t,
      commands: n.body.application_commands,
      guildId: e,
      permissions: n.body.permissions
    })
  }, () => {
    i.default.dispatch({
      type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
      applicationId: t
    })
  })
}
async function c(e, t, n) {
  let r = [];
  try {
    let i = await a.HTTP.get(o.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n));
    i.ok && (r = i.body.permissions)
  } catch (a) {
    if (404 !== a.status) {
      i.default.dispatch({
        type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
        applicationId: e,
        commandId: n,
        guildId: t
      });
      return
    }
  }
  i.default.dispatch({
    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
    applicationId: e,
    commandId: n,
    guildId: t,
    permissions: r
  })
}

function E(e) {
  i.default.dispatch({
    applicationId: e,
    type: "INTEGRATION_PERMISSION_SETTINGS_INIT"
  })
}

function T(e) {
  i.default.dispatch({
    commandId: e,
    type: "INTEGRATION_PERMISSION_SETTINGS_RESET"
  })
}
async function f(e) {
  let {
    applicationId: t,
    commandId: n,
    defaultEveryoneValue: a,
    defaultEverywhereValue: o,
    guildId: u,
    permissions: l
  } = e, d = n === t ? function(e, t, n, a) {
    if (!n || !a) return t;
    let i = {
      [e]: n,
      [(0, s.allChannelsSentinel)(e)]: a
    };
    return t.filter(e => {
      let t = i[e.id];
      return null == t || e.permission !== t
    })
  }(u, l, a, o) : l, c = await r.updateApplicationGuildCommandPermissions(t, u, n, d);
  c.ok && i.default.dispatch({
    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
    applicationId: t,
    commandId: n,
    guildId: u,
    permissions: c.body.permissions
  })
}