t.d(n, {
  Gf: function() {
    return S
  },
  OW: function() {
    return I
  },
  S1: function() {
    return l
  },
  TY: function() {
    return c
  },
  Uv: function() {
    return _
  },
  _l: function() {
    return d
  },
  d_: function() {
    return N
  },
  lO: function() {
    return r
  },
  sI: function() {
    return a
  },
  we: function() {
    return E
  }
}), t(47120);
var s = t(570140),
  i = t(749210),
  o = t(228643);

function a(e) {
  s.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_SORT_UPDATE",
    roles: e
  })
}

function l() {
  s.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_INIT"
  })
}

function r(e, n, t) {
  s.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS",
    id: e,
    flag: n,
    allow: t
  })
}

function c(e) {
  s.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS",
    id: e
  })
}

function _(e, n) {
  s.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_NAME",
    id: e,
    name: n
  })
}

function I(e, n) {
  s.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR",
    id: e,
    color: n
  })
}

function E(e, n, t) {
  s.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS",
    id: e,
    hoist: n,
    mentionable: t
  })
}

function d(e, n, t) {
  s.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON",
    id: e,
    icon: n,
    unicodeEmoji: t
  })
}

function N(e, n) {
  s.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
    roleId: e,
    roleConnectionConfigurations: n
  })
}
async function S(e, n, t, a, l) {
  s.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_SUBMITTING"
  });
  try {
    let s = async () => {
      if (null == n || 0 === n.length) return;
      let t = n.pop();
      if (null == t || "" === t.name) return s();
      await i.Z.updateRole(e, t.id, {
        name: t.name,
        description: t.description,
        permissions: t.permissions,
        color: t.color,
        hoist: t.hoist,
        mentionable: t.mentionable,
        icon: t.icon,
        unicodeEmoji: t.unicodeEmoji
      }).then(s, s)
    };
    if (null != t && t.length > 0 ? await i.Z.batchRoleUpdate(e, t).then(s, s) : await s(), null != l && null != a)
      for await (let n of a) {
        let t = l.get(n);
        await (0, o.L_)(e, n, null != t ? t : [])
      }
  } catch (e) {
    var r, c;
    s.Z.dispatch({
      type: "GUILD_SETTINGS_ROLES_SAVE_FAIL",
      message: null !== (c = null === (r = e.body) || void 0 === r ? void 0 : r.message) && void 0 !== c ? c : Object.values(e.body)[0]
    });
    return
  }
  s.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS"
  })
}