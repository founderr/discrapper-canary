"use strict";
n.r(t), n.d(t, {
  clearIntegrationPermissions: function() {
    return l
  },
  editPermissions: function() {
    return o
  },
  getApplicationCommandPermissions: function() {
    return _
  },
  getApplicationCommands: function() {
    return E
  },
  initIntegrationPermissions: function() {
    return d
  },
  resetPermissions: function() {
    return S
  },
  updateApplicationCommandPermissions: function() {
    return T
  }
});
var a = n("544891"),
  s = n("570140"),
  r = n("555573"),
  i = n("581364"),
  u = n("981631");

function l() {
  s.default.dispatch({
    type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR"
  })
}

function o(e, t, n) {
  s.default.dispatch({
    applicationId: e,
    commandId: t,
    permissions: n,
    type: "INTEGRATION_PERMISSION_SETTINGS_EDIT"
  })
}

function E(e, t) {
  a.HTTP.get(u.Endpoints.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then(n => {
    s.default.dispatch({
      type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
      applicationId: t,
      commands: n.body.application_commands,
      guildId: e,
      permissions: n.body.permissions
    })
  }, () => {
    s.default.dispatch({
      type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
      applicationId: t
    })
  })
}
async function _(e, t, n) {
  let r = [];
  try {
    let s = await a.HTTP.get(u.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n));
    s.ok && (r = s.body.permissions)
  } catch (a) {
    if (404 !== a.status) {
      s.default.dispatch({
        type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
        applicationId: e,
        commandId: n,
        guildId: t
      });
      return
    }
  }
  s.default.dispatch({
    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
    applicationId: e,
    commandId: n,
    guildId: t,
    permissions: r
  })
}

function d(e) {
  s.default.dispatch({
    applicationId: e,
    type: "INTEGRATION_PERMISSION_SETTINGS_INIT"
  })
}

function S(e) {
  s.default.dispatch({
    commandId: e,
    type: "INTEGRATION_PERMISSION_SETTINGS_RESET"
  })
}
async function T(e) {
  let {
    applicationId: t,
    commandId: n,
    defaultEveryoneValue: a,
    defaultEverywhereValue: u,
    guildId: l,
    permissions: o
  } = e, E = n === t ? function(e, t, n, a) {
    if (!n || !a) return t;
    let s = {
      [e]: n,
      [(0, i.allChannelsSentinel)(e)]: a
    };
    return t.filter(e => {
      let t = s[e.id];
      return null == t || e.permission !== t
    })
  }(l, o, a, u) : o, _ = await r.updateApplicationGuildCommandPermissions(t, l, n, E);
  _.ok && s.default.dispatch({
    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
    applicationId: t,
    commandId: n,
    guildId: l,
    permissions: _.body.permissions
  })
}