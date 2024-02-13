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
var a = n("316693"),
  l = n("65597"),
  s = n("26989"),
  i = n("305961"),
  r = n("697218"),
  o = n("991170"),
  u = n("49111"),
  d = n("69741");
let c = [u.Permissions.USE_CLYDE_AI],
  f = Object.keys(u.Permissions).filter(e => !c.includes(u.Permissions[e])),
  h = d.MODERATOR_PERMISSIONS.map(e => {
    let t = f.find(t => u.Permissions[t] === e);
    if (null == t) throw Error("Permission ".concat(e, " not found in Permissions"));
    return t
  }),
  m = new Set(u.ElevatedPermissionsList);

function p(e, t, n) {
  let d = (0, l.default)([i.default], () => i.default.getGuild(t), [t]);
  return (0, l.default)([s.default, r.default], () => {
    let l = {},
      i = s.default.getMember(t, e),
      c = r.default.getUser(e);
    if (null == d || null == i || null == c) return l;
    let f = d.getRole(d.id),
      h = o.default.computePermissions({
        user: c,
        context: d
      });
    for (let e of n) {
      let t = u.Permissions[e];
      if (a.default.has(h, t)) {
        for (let n of (l[e] = [], i.roles)) {
          let s = null == d ? void 0 : d.roles[n];
          if (null == s) continue;
          let i = a.default.has(s.permissions, u.Permissions.ADMINISTRATOR);
          (i || a.default.hasAny(s.permissions, t)) && l[e].push(s.id)
        }
        if (null != f) {
          let n = a.default.has(f.permissions, u.Permissions.ADMINISTRATOR);
          (n || a.default.hasAny(f.permissions, t)) && l[e].push(f.id)
        }
        d.isOwner(c) && l[e].push(c.id)
      }
    }
    return l
  }, [d, t, n, e])
}