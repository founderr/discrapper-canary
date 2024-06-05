"use strict";
l.r(t), l.d(t, {
  useIntegrationPermissionMemberSearch: function() {
    return T
  }
}), l("653041"), l("47120"), l("733860");
var n = l("470079"),
  a = l("512722"),
  s = l.n(a),
  i = l("149765"),
  r = l("442837"),
  o = l("271383"),
  d = l("430824"),
  u = l("496675"),
  c = l("594174"),
  f = l("700785"),
  I = l("282923"),
  m = l("981631");

function T(e) {
  let t = (0, r.useStateFromStores)([d.default], () => d.default.getGuild(e));
  s()(null != t, "guild must be present to be editing its integration settings");
  let l = (0, r.useStateFromStores)([u.default], () => u.default.getHighestRole(t)),
    a = (0, r.useStateFromStoresArray)([o.default], () => o.default.getMembers(e), [e]),
    T = (0, r.useStateFromStoresObject)([c.default], () => c.default.getUsers()),
    _ = (0, r.useStateFromStoresArray)([d.default], () => Object.values(d.default.getRoles(e)), [e]),
    S = n.useMemo(() => {
      let e = [];
      for (let l of a) {
        let n = T[l.userId];
        if (null == n || n.bot) continue;
        let a = n.id !== t.ownerId && !f.can({
          permission: m.Permissions.ADMINISTRATOR,
          user: n,
          context: t
        }) && u.default.canManageUser(m.Permissions.USE_APPLICATION_COMMANDS, n, t);
        e.push({
          id: n.id,
          canManage: a,
          nick: l.nick,
          username: n.username
        })
      }
      return e
    }, [t, a, T]),
    h = e => {
      var t;
      return e.managed && (null === (t = e.tags) || void 0 === t ? void 0 : t.bot_id) != null
    },
    g = n.useMemo(() => {
      let n = [];
      for (let a of _) {
        if (h(a)) continue;
        let s = !i.has(a.permissions, m.Permissions.ADMINISTRATOR) && u.default.isRoleHigher(t, l, a),
          r = {
            id: a.id,
            name: a.name,
            canManage: s
          };
        a.id === e ? n.unshift(r) : n.push(r)
      }
      return n
    }, [_, e, t, l]),
    [p, O] = n.useState(""),
    A = n.useMemo(() => {
      let t = function(e) {
          return e.startsWith("@") ? e.substr(1) : e
        }(p),
        l = p.startsWith("@") ? g.filter(t => t.id === e) : g,
        n = (0, I.filterPermissionSearchItems)(S, E, t);
      return {
        members: n,
        roles: (0, I.filterPermissionSearchItems)(l, N, t)
      }
    }, [e, S, p, g]);
  return {
    query: p,
    results: A,
    setQuery: O,
    unfilteredCount: A.members.length + A.roles.length
  }
}

function E(e) {
  let t = [e.username];
  return (null == e ? void 0 : e.nick) != null && t.push(e.nick), {
    id: e.id,
    names: t
  }
}

function N(e) {
  return {
    id: e.id,
    names: [e.name]
  }
}