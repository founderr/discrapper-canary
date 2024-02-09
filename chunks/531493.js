"use strict";
let a, l, n;
s.r(t), s.d(t, {
  default: function() {
    return F
  }
}), s("222007");
var i = s("917351"),
  r = s.n(i),
  o = s("316693"),
  d = s("509043"),
  u = s("446674"),
  c = s("913144"),
  E = s("382981"),
  _ = s("746574"),
  I = s("449008"),
  f = s("991170"),
  T = s("900938"),
  S = s("53948"),
  m = s("49111");
let N = new Set,
  g = m.FormStates.CLOSED,
  h = !1,
  C = !1,
  R = [],
  x = [],
  L = S.GuildSettingsRoleEditSections.DISPLAY,
  O = !1,
  p = new Set,
  A = new Map,
  M = new Map;

function D() {
  return null == a || null == R ? [] : _.default.calculatePositionDeltas({
    oldOrdering: r.values(a.roles),
    newOrdering: R,
    idGetter: e => {
      let {
        id: t
      } = e;
      return t
    },
    existingPositionGetter: e => {
      let {
        originalPosition: t
      } = e;
      return null != t ? t : 1 / 0
    },
    ascending: !1
  })
}

function v(e) {
  let {
    section: t
  } = e;
  if (null != a || t !== m.GuildSettingsSections.ROLES) return !1;
  j()
}

function j() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  a = T.default.getProps().guild, h = !1, C = !1, n = void 0, N.clear(), g = m.FormStates.OPEN, x = [...R = null != a ? r(a.roles).values().value() : []], O = !1, e && (M.clear(), A.forEach((e, t) => {
    M.set(t, [...e])
  }))
}
let G = r.debounce(() => {
  let e = !1;
  C && !(C = D().length > 0) && (e = !0), [...N].forEach(t => {
    r.isEqual(P(t), function(e) {
      return x.find(t => {
        let {
          id: s
        } = t;
        return s === e
      })
    }(t)) && (N.delete(t), e = !0)
  }), 0 === N.size && (h = !1), O && r.isEqual(A, M) && (e = !0, O = !1), e && y.emitChange()
}, 500);

function U(e, t) {
  let s = R.indexOf(e);
  if (s < 0) return !1;
  let a = {
    ...e,
    ...t
  };
  R[s] = a, R = [...R], h = !0, N.add(a.id), G()
}

function P(e) {
  return R.find(t => {
    let {
      id: s
    } = t;
    return s === e
  })
}

function b(e) {
  let {
    guildId: t
  } = e;
  if (null == a || t !== a.id || g === m.FormStates.SUBMITTING) return !1;
  a = T.default.getProps().guild;
  let s = [];
  null != a && (s = r(a.roles).values().value()), N.forEach(e => {
    let t = P(e),
      a = -1,
      l = s.find((t, s) => {
        let {
          id: l
        } = t;
        if (l === e) return a = s, !0
      });
    null == l || null == t ? N.delete(e) : s[a] = t
  }), 0 === N.size && (h = !1), C = !1, R = [...s]
}
class B extends u.default.Store {
  initialize() {
    this.waitFor(T.default, E.default)
  }
  hasChanges() {
    return h || C || O
  }
  get errorMessage() {
    return n
  }
  get hasSortChanges() {
    return C
  }
  get hasRoleConfigurationChanges() {
    return O
  }
  get guild() {
    return a
  }
  get editedRoleIds() {
    return Array.from(N)
  }
  get editedRoleIdsForConfigurations() {
    return p
  }
  get roles() {
    return R
  }
  get formState() {
    return g
  }
  get lastRoleEditSection() {
    return L
  }
  getSortDeltas() {
    return D()
  }
  showNotice() {
    return this.hasChanges()
  }
  getRole(e) {
    return P(e)
  }
  getPermissionSearchQuery() {
    return l
  }
  getEditedRoleConnectionConfigurationsMap() {
    return M
  }
}
B.displayName = "GuildSettingsRolesStore";
let y = new B(c.default, __OVERLAY__ ? {} : {
  GUILD_SETTINGS_ROLES_INIT: () => j(),
  GUILD_SETTINGS_INIT: v,
  GUILD_SETTINGS_SET_SECTION: v,
  GUILD_SETTINGS_ROLES_SORT_UPDATE: function(e) {
    let {
      roles: t
    } = e;
    if (null != R && t.length !== R.length) return !1;
    R = t.map(e => P(e)).filter(I.isNotNullish), C = !0, G()
  },
  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function(e) {
    let {
      id: t,
      flag: s,
      allow: a
    } = e, l = P(t);
    if (null == l) return !1;
    let {
      permissions: n
    } = l;
    return U(l, {
      permissions: n = a ? o.default.add(n, s) : o.default.remove(n, s)
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function(e) {
    let {
      id: t,
      permissions: s
    } = e, a = P(t);
    return null != a && U(a, {
      permissions: s
    })
  },
  GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function(e) {
    let {
      id: t
    } = e, s = P(t);
    return null != s && U(s, {
      permissions: f.default.NONE
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_NAME: function(e) {
    let {
      id: t,
      name: s
    } = e, a = P(t);
    return null != a && U(a, {
      name: s
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function(e) {
    let {
      id: t,
      description: s
    } = e, a = P(t);
    return null != a && U(a, {
      description: s
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_COLOR: function(e) {
    let {
      id: t,
      color: s
    } = e, a = 0 === s ? null : (0, d.int2hex)(s), l = P(t);
    return null != l && U(l, {
      color: s,
      colorString: a
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function(e) {
    let {
      id: t,
      hoist: s,
      mentionable: a
    } = e, l = P(t);
    return null != l && U(l, {
      hoist: s,
      mentionable: a
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function(e) {
    let {
      id: t,
      icon: s,
      unicodeEmoji: a
    } = e, l = P(t);
    return null != l && U(l, {
      icon: s,
      unicodeEmoji: a
    })
  },
  GUILD_SETTINGS_ROLE_SELECT: function(e) {
    let {
      role: t,
      searchQuery: s
    } = e;
    if (l = s, null != t) {
      if (null != P(t.id)) {
        U(t, t);
        return
      }
      R = [...R, t], G()
    }
  },
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function(e) {
    let {
      roleId: t,
      roleConnectionConfigurations: s
    } = e, a = P(t);
    if (null == a) return !1;
    let l = A.get(a.id);
    if (r.isEqual(l, s)) return !1;
    M.set(a.id, s), A.set(a.id, s), G()
  },
  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function(e) {
    let {
      roleId: t,
      roleConnectionConfigurations: s
    } = e, a = P(t);
    if (null == a) return !1;
    O = !0, p.add(a.id), M.set(a.id, s), G()
  },
  GUILD_SETTINGS_CLOSE: function() {
    a = null, x = R = [], A.clear(), N.clear(), M.clear(), p = new Set, h = !1, C = !1, O = !1, g = m.FormStates.CLOSED
  },
  GUILD_ROLE_CREATE: b,
  GUILD_ROLE_UPDATE: b,
  GUILD_ROLE_DELETE: function(e) {
    return p.has(e.roleId) && (p.delete(e.roleId), A.delete(e.roleId), M.delete(e.roleId), O = !1), b(e)
  },
  GUILD_SETTINGS_ROLES_SUBMITTING: function() {
    g = m.FormStates.SUBMITTING
  },
  GUILD_SETTINGS_ROLES_SAVE_FAIL: function(e) {
    let {
      message: t
    } = e;
    g = m.FormStates.OPEN, n = t
  },
  GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function() {
    j(!1)
  },
  GUILD_SETTINGS_ROLES_EDIT_SECTION_UPDATE: function(e) {
    let {
      section: t
    } = e;
    L = t
  }
});
var F = y