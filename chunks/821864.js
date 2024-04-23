"use strict";
n.r(t), n.d(t, {
  clearIntegrationPermissions: function() {
    return o
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
    return T
  },
  updateApplicationCommandPermissions: function() {
    return f
  }
});
var a = n("544891"),
  r = n("570140"),
  i = n("555573"),
  s = n("581364"),
  u = n("981631");

function o() {
  r.default.dispatch({
    type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR"
  })
}

function l(e, t, n) {
  r.default.dispatch({
    applicationId: e,
    commandId: t,
    permissions: n,
    type: "INTEGRATION_PERMISSION_SETTINGS_EDIT"
  })
}

function d(e, t) {
  a.HTTP.get(u.Endpoints.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then(n => {
    r.default.dispatch({
      type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
      applicationId: t,
      commands: n.body.application_commands,
      guildId: e,
      permissions: n.body.permissions
    })
  }, () => {
    r.default.dispatch({
      type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
      applicationId: t
    })
  })
}
async function E(e, t, n) {
  let i = [];
  try {
    let r = await a.HTTP.get(u.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n));
    r.ok && (i = r.body.permissions)
  } catch (a) {
    if (404 !== a.status) {
      r.default.dispatch({
        type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
        applicationId: e,
        commandId: n,
        guildId: t
      });
      return
    }
  }
  r.default.dispatch({
    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
    applicationId: e,
    commandId: n,
    guildId: t,
    permissions: i
  })
}

function c(e) {
  r.default.dispatch({
    applicationId: e,
    type: "INTEGRATION_PERMISSION_SETTINGS_INIT"
  })
}

function T(e) {
  r.default.dispatch({
    commandId: e,
    type: "INTEGRATION_PERMISSION_SETTINGS_RESET"
  })
}
async function f(e) {
  let {
    applicationId: t,
    commandId: n,
    defaultEveryoneValue: a,
    defaultEverywhereValue: u,
    guildId: o,
    permissions: l
  } = e, d = n === t ? function(e, t, n, a) {
    if (!n || !a) return t;
    let r = {
      [e]: n,
      [(0, s.allChannelsSentinel)(e)]: a
    };
    return t.filter(e => {
      let t = r[e.id];
      return null == t || e.permission !== t
    })
  }(o, l, a, u) : l, E = await i.updateApplicationGuildCommandPermissions(t, o, n, d);
  E.ok && r.default.dispatch({
    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
    applicationId: t,
    commandId: n,
    guildId: o,
    permissions: E.body.permissions
  })
}