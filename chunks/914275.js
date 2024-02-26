"use strict";
n.r(t), n.d(t, {
  ALL_PERMISSIONS: function() {
    return f
  },
  MOD_PERMISSIONS: function() {
    return h
  },
  ELEVATED_PERMISSIONS: function() {
    return m
  },
  useUserPermissionsAndRoles: function() {
    return p
  }
}), n("70102"), n("222007"), n("424973");
var l = n("316693"),
  a = n("65597"),
  s = n("26989"),
  i = n("305961"),
  r = n("697218"),
  u = n("991170"),
  o = n("49111"),
  d = n("69741");
let c = [o.Permissions.USE_CLYDE_AI],
  f = Object.keys(o.Permissions).filter(e => !c.includes(o.Permissions[e])),
  h = d.MODERATOR_PERMISSIONS.map(e => {
    let t = f.find(t => o.Permissions[t] === e);
    if (null == t) throw Error("Permission ".concat(e, " not found in Permissions"));
    return t
  }),
  m = new Set(o.ElevatedPermissionsList);

function p(e, t, n) {
  let d = (0, a.default)([i.default], () => i.default.getGuild(t), [t]);
  return (0, a.default)([s.default, r.default], () => {
    let a = {},
      i = s.default.getMember(t, e),
      c = r.default.getUser(e);
    if (null == d || null == i || null == c) return a;
    let f = d.getRole(d.getEveryoneRoleId()),
      h = u.default.computePermissions({
        user: c,
        context: d
      });
    for (let e of n) {
      let t = o.Permissions[e];
      if (l.default.has(h, t)) {
        for (let n of (a[e] = [], i.roles)) {
          let s = null == d ? void 0 : d.roles[n];
          if (null == s) continue;
          let i = l.default.has(s.permissions, o.Permissions.ADMINISTRATOR);
          (i || l.default.hasAny(s.permissions, t)) && a[e].push(s.id)
        }
        if (null != f) {
          let n = l.default.has(f.permissions, o.Permissions.ADMINISTRATOR);
          (n || l.default.hasAny(f.permissions, t)) && a[e].push(f.id)
        }
        d.isOwner(c) && a[e].push(c.id)
      }
    }
    return a
  }, [d, t, n, e])
}