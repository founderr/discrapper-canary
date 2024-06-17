"use strict";
n.r(e), n.d(e, {
  clearIntegrationPermissions: function() {
    return d
  },
  editPermissions: function() {
    return s
  },
  getApplicationCommandPermissions: function() {
    return E
  },
  getApplicationCommands: function() {
    return T
  },
  initIntegrationPermissions: function() {
    return l
  },
  resetPermissions: function() {
    return I
  },
  updateApplicationCommandPermissions: function() {
    return c
  }
});
var i = n("544891"),
  a = n("570140"),
  r = n("555573"),
  u = n("581364"),
  o = n("981631");

function d() {
  a.default.dispatch({
    type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR"
  })
}

function s(t, e, n) {
  a.default.dispatch({
    applicationId: t,
    commandId: e,
    permissions: n,
    type: "INTEGRATION_PERMISSION_SETTINGS_EDIT"
  })
}

function T(t, e) {
  i.HTTP.get(o.Endpoints.GUILD_COMMANDS_FOR_APPLICATION(t, e)).then(n => {
    a.default.dispatch({
      type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
      applicationId: e,
      commands: n.body.application_commands,
      guildId: t,
      permissions: n.body.permissions
    })
  }, () => {
    a.default.dispatch({
      type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
      applicationId: e
    })
  })
}
async function E(t, e, n) {
  let r = [];
  try {
    let a = await i.HTTP.get(o.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(t, e, n));
    a.ok && (r = a.body.permissions)
  } catch (i) {
    if (404 !== i.status) {
      a.default.dispatch({
        type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
        applicationId: t,
        commandId: n,
        guildId: e
      });
      return
    }
  }
  a.default.dispatch({
    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
    applicationId: t,
    commandId: n,
    guildId: e,
    permissions: r
  })
}

function l(t) {
  a.default.dispatch({
    applicationId: t,
    type: "INTEGRATION_PERMISSION_SETTINGS_INIT"
  })
}

function I(t) {
  a.default.dispatch({
    commandId: t,
    type: "INTEGRATION_PERMISSION_SETTINGS_RESET"
  })
}
async function c(t) {
  let {
    applicationId: e,
    commandId: n,
    defaultEveryoneValue: i,
    defaultEverywhereValue: o,
    guildId: d,
    permissions: s
  } = t, T = n === e ? function(t, e, n, i) {
    if (!n || !i) return e;
    let a = {
      [t]: n,
      [(0, u.allChannelsSentinel)(t)]: i
    };
    return e.filter(t => {
      let e = a[t.id];
      return null == e || t.permission !== e
    })
  }(d, s, i, o) : s, E = await r.updateApplicationGuildCommandPermissions(e, d, n, T);
  E.ok && a.default.dispatch({
    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
    applicationId: e,
    commandId: n,
    guildId: d,
    permissions: E.body.permissions
  })
}