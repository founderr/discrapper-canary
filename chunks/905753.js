let i, s, l;
t(47120);
var a, r, o, c, d = t(442837),
  u = t(570140),
  I = t(581364),
  N = t(399860);
let E = {},
  T = {},
  m = !1;

function _() {
  i = void 0, E = {}, T = {}, s = void 0, l = void 0, m = !1
}
class h extends(a = d.ZP.Store) {
  getApplicationPermissions() {
    return E
  }
  getCommands() {
    return T
  }
  getCommand(e) {
    return null == T ? void 0 : T[e]
  }
  getEditedApplication() {
    return s
  }
  getEditedCommand() {
    return l
  }
  isUnavailable() {
    return m
  }
  getApplicationId() {
    return i
  }
}
c = "IntegrationPermissionStore", (o = "displayName") in(r = h) ? Object.defineProperty(r, o, {
  value: c,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[o] = c, n.Z = new h(u.Z, {
  LOGOUT: _,
  INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE: function(e) {
    let {
      applicationId: n
    } = e;
    if (n !== i) return !1;
    m = !0
  },
  INTEGRATION_PERMISSION_SETTINGS_CLEAR: _,
  INTEGRATION_PERMISSION_SETTINGS_INIT: function(e) {
    let {
      applicationId: n
    } = e;
    _(), i = n
  },
  INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE: function(e) {
    let {
      applicationId: n,
      commandId: t,
      permissions: s
    } = e;
    if (n !== i) return !1;
    if (t === i) {
      E = (0, N.tk)(s);
      return
    }
    let l = T[t];
    if (null == l) return !1;
    T[t] = {
      ...l,
      permissions: (0, N.tk)(s)
    }
  },
  INTEGRATION_PERMISSION_SETTINGS_EDIT: function(e) {
    let {
      applicationId: n,
      commandId: t,
      permissions: a
    } = e;
    if (n !== i) return !1;
    t === i ? s = a : l = {
      commandId: t,
      permissions: a
    }
  },
  INTEGRATION_PERMISSION_SETTINGS_RESET: function(e) {
    let {
      commandId: n
    } = e;
    null == n ? s = void 0 : l = void 0
  },
  INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE: function(e) {
    let {
      applicationId: n
    } = e;
    if (n !== i) return !1;
    m = !0
  },
  INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS: function(e) {
    let {
      applicationId: n,
      commands: t,
      permissions: s
    } = e;
    if (n !== i) return !1;
    let l = Object.fromEntries(s.map(e => [e.id, e.permissions])),
      a = {};
    for (let e of t)
      if (e.application_id === i) {
        let n = (0, I.Z8)({
            rootCommand: e,
            command: e,
            applicationId: e.application_id
          }),
          t = l[e.id];
        null != t && (n.permissions = (0, N.tk)(t)), a[e.id] = n
      } T = a
  }
})