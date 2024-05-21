"use strict";
l.r(t), l.d(t, {
  default: function() {
    return E
  }
}), l("47120");
var s = l("470079"),
  a = l("149765"),
  n = l("442837"),
  d = l("430824"),
  r = l("973542"),
  i = l("790285"),
  o = l("14263"),
  u = l("981631");

function E(e, t) {
  let l = (0, n.useStateFromStores)([d.default], () => null != e ? d.default.getRoles(e.id) : void 0),
    E = (0, o.default)(null == e ? void 0 : e.id);
  return s.useMemo(() => {
    let s = null != e && null != l ? function(e, t, l) {
        let s = new Set;
        for (let e of Object.keys(l.permissionOverwrites)) {
          let a = t[e],
            n = l.permissionOverwrites[e];
          (0, r.isSubscriptionRole)(a) && (0, i.isChannelAccessGrantedBy)(l, n) && s.add(a)
        }
        let n = t[e.getEveryoneRoleId()],
          d = null != n && !a.has(n.permissions, u.Permissions.VIEW_CHANNEL),
          o = (0, i.isChannelAccessDeniedBy)(l, l.permissionOverwrites[e.id]);
        if (d && !o)
          for (let e of Object.values(t))(0, r.isSubscriptionRole)(e) && (0, i.isAllChannelsRole)(e) && s.add(e);
        return [...s]
      }(e, l, t) : [],
      n = 0;
    for (let e of s) {
      let t = e.id;
      if (null != t) {
        let e = null == E ? void 0 : E[t];
        null != e && (n += e)
      }
    }
    return n
  }, [E, e, t, l])
}