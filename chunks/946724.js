let i, r, l;
n(47120);
var s,
    a,
    o,
    c,
    d = n(392711),
    u = n.n(d),
    m = n(149765),
    h = n(866442),
    g = n(442837),
    x = n(570140),
    p = n(561654),
    f = n(430824),
    C = n(990492),
    I = n(823379),
    _ = n(700785),
    N = n(999382),
    v = n(981631);
let T = new Set(),
    j = v.QZA.CLOSED,
    E = !1,
    S = !1,
    b = [],
    R = [],
    Z = !1,
    A = new Set(),
    L = new Map(),
    y = new Map();
function D() {
    if (null == i || null == b) return [];
    let e = u()(f.Z.getRoles(i.id))
        .values()
        .sortBy((e) => {
            let { position: t } = e;
            return t;
        })
        .reverse()
        .value();
    return C.ZP.calculatePositionDeltas({
        oldOrdering: e,
        newOrdering: b,
        idGetter: (e) => {
            let { id: t } = e;
            return t;
        },
        existingPositionGetter: (e) => {
            let { originalPosition: t } = e;
            return null != t ? t : 1 / 0;
        },
        ascending: !1
    });
}
function O(e) {
    let { section: t } = e;
    if (null != i || t !== v.pNK.ROLES) return !1;
    M();
}
function M() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    (i = N.Z.getProps().guild),
        (E = !1),
        (S = !1),
        (l = void 0),
        T.clear(),
        (j = v.QZA.OPEN),
        (R = [
            ...(b =
                null != i
                    ? u()(f.Z.getRoles(i.id))
                          .values()
                          .sortBy((e) => {
                              let { position: t } = e;
                              return t;
                          })
                          .reverse()
                          .value()
                    : [])
        ]),
        (Z = !1),
        e &&
            (y.clear(),
            L.forEach((e, t) => {
                y.set(t, [...e]);
            }));
}
let P = u().debounce(() => {
    let e = !1;
    S && !(S = D().length > 0) && (e = !0),
        [...T].forEach((t) => {
            u().isEqual(
                w(t),
                (function (e) {
                    return R.find((t) => {
                        let { id: n } = t;
                        return n === e;
                    });
                })(t)
            ) && (T.delete(t), (e = !0));
        }),
        0 === T.size && (E = !1),
        Z && u().isEqual(L, y) && ((e = !0), (Z = !1)),
        e && G.emitChange();
}, 500);
function k(e, t) {
    let n = b.indexOf(e);
    if (n < 0) return !1;
    let i = {
        ...e,
        ...t
    };
    (b[n] = i), (b = [...b]), (E = !0), T.add(i.id), P();
}
function w(e) {
    return b.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function B(e) {
    let { guildId: t } = e;
    if (null == i || t !== i.id || j === v.QZA.SUBMITTING) return !1;
    i = N.Z.getProps().guild;
    let n = [];
    null != i &&
        (n = u()(f.Z.getRoles(i.id))
            .values()
            .sortBy((e) => {
                let { position: t } = e;
                return t;
            })
            .reverse()
            .value()),
        T.forEach((e) => {
            let t = w(e),
                i = -1;
            null ==
                n.find((t, n) => {
                    let { id: r } = t;
                    if (r === e) return (i = n), !0;
                }) || null == t
                ? T.delete(e)
                : (n[i] = t);
        }),
        0 === T.size && (E = !1),
        (S = !1),
        (b = [...n]);
}
class U extends (s = g.ZP.Store) {
    initialize() {
        this.waitFor(N.Z, p.Z, f.Z);
    }
    hasChanges() {
        return E || S || Z;
    }
    get errorMessage() {
        return l;
    }
    get hasSortChanges() {
        return S;
    }
    get hasRoleConfigurationChanges() {
        return Z;
    }
    get guild() {
        return i;
    }
    get editedRoleIds() {
        return Array.from(T);
    }
    get editedRoleIdsForConfigurations() {
        return A;
    }
    get roles() {
        return b;
    }
    get formState() {
        return j;
    }
    getSortDeltas() {
        return D();
    }
    showNotice() {
        return this.hasChanges();
    }
    getRole(e) {
        return w(e);
    }
    getPermissionSearchQuery() {
        return r;
    }
    getEditedRoleConnectionConfigurationsMap() {
        return y;
    }
}
(c = 'GuildSettingsRolesStore'),
    (o = 'displayName') in (a = U)
        ? Object.defineProperty(a, o, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[o] = c);
let G = new U(
    x.Z,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_ROLES_INIT: () => M(),
              GUILD_SETTINGS_INIT: O,
              GUILD_SETTINGS_SET_SECTION: O,
              GUILD_SETTINGS_ROLES_SORT_UPDATE: function (e) {
                  let { roles: t } = e;
                  if (null != b && t.length !== b.length) return !1;
                  (b = t.map((e) => w(e)).filter(I.lm)), (S = !0), P();
              },
              GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function (e) {
                  let { id: t, flag: n, allow: i } = e,
                      r = w(t);
                  if (null == r) return !1;
                  let { permissions: l } = r;
                  return k(r, { permissions: (l = i ? m.IH(l, n) : m.Od(l, n)) });
              },
              GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function (e) {
                  let { id: t, permissions: n } = e,
                      i = w(t);
                  return null != i && k(i, { permissions: n });
              },
              GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function (e) {
                  let { id: t } = e,
                      n = w(t);
                  return null != n && k(n, { permissions: _.Hn });
              },
              GUILD_SETTINGS_ROLES_UPDATE_NAME: function (e) {
                  let { id: t, name: n } = e,
                      i = w(t);
                  return null != i && k(i, { name: n });
              },
              GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function (e) {
                  let { id: t, description: n } = e,
                      i = w(t);
                  return null != i && k(i, { description: n });
              },
              GUILD_SETTINGS_ROLES_UPDATE_COLOR: function (e) {
                  let { id: t, color: n } = e,
                      i = 0 === n ? null : (0, h.Rf)(n),
                      r = w(t);
                  return (
                      null != r &&
                      k(r, {
                          color: n,
                          colorString: i
                      })
                  );
              },
              GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function (e) {
                  let { id: t, hoist: n, mentionable: i } = e,
                      r = w(t);
                  return (
                      null != r &&
                      k(r, {
                          hoist: n,
                          mentionable: i
                      })
                  );
              },
              GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function (e) {
                  let { id: t, icon: n, unicodeEmoji: i } = e,
                      r = w(t);
                  return (
                      null != r &&
                      k(r, {
                          icon: n,
                          unicodeEmoji: i
                      })
                  );
              },
              GUILD_SETTINGS_ROLE_SELECT: function (e) {
                  let { role: t, searchQuery: n } = e;
                  if (((r = n), null != t)) {
                      if (null != w(t.id)) {
                          k(t, t);
                          return;
                      }
                      (b = [...b, t]), P();
                  }
              },
              GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
                  let { roleId: t, roleConnectionConfigurations: n } = e,
                      i = w(t);
                  if (null == i) return !1;
                  let r = L.get(i.id);
                  if (u().isEqual(r, n)) return !1;
                  y.set(i.id, n), L.set(i.id, n), P();
              },
              GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function (e) {
                  let { roleId: t, roleConnectionConfigurations: n } = e,
                      i = w(t);
                  if (null == i) return !1;
                  (Z = !0), A.add(i.id), y.set(i.id, n), P();
              },
              GUILD_SETTINGS_CLOSE: function () {
                  (i = null), (R = b = []), L.clear(), T.clear(), y.clear(), (A = new Set()), (E = !1), (S = !1), (Z = !1), (j = v.QZA.CLOSED);
              },
              GUILD_ROLE_CREATE: B,
              GUILD_ROLE_UPDATE: B,
              GUILD_ROLE_DELETE: function (e) {
                  return A.has(e.roleId) && (A.delete(e.roleId), L.delete(e.roleId), y.delete(e.roleId), (Z = !1)), B(e);
              },
              GUILD_SETTINGS_ROLES_SUBMITTING: function () {
                  j = v.QZA.SUBMITTING;
              },
              GUILD_SETTINGS_ROLES_SAVE_FAIL: function (e) {
                  let { message: t } = e;
                  (j = v.QZA.OPEN), (l = t);
              },
              GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function () {
                  M(!1);
              }
          }
);
t.Z = G;
