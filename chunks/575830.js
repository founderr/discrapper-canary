"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("47120");
var l = n("470079"),
  u = n("442837"),
  i = n("430824"),
  a = n("637565"),
  d = n("14263");

function s(e, t) {
  let n = (0, u.useStateFromStores)([i.default], () => null != e ? i.default.getRoles(e.id) : void 0),
    s = (0, d.default)(null == e ? void 0 : e.id);
  return l.useMemo(() => {
    let l = null != e && null != n ? (0, a.getChannelGuildRoleSubscriptions)(e, n, t) : [],
      u = 0;
    for (let e of l) {
      let t = e.id;
      if (null != t) {
        let e = null == s ? void 0 : s[t];
        null != e && (u += e)
      }
    }
    return u
  }, [s, e, t, n])
}