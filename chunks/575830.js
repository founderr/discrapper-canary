"use strict";
l.r(t), l.d(t, {
  default: function() {
    return i
  }
}), l("47120");
var s = l("470079"),
  a = l("442837"),
  n = l("430824"),
  r = l("637565"),
  d = l("14263");

function i(e, t) {
  let l = (0, a.useStateFromStores)([n.default], () => null != e ? n.default.getRoles(e.id) : void 0),
    i = (0, d.default)(null == e ? void 0 : e.id);
  return s.useMemo(() => {
    let s = null != e && null != l ? (0, r.getChannelGuildRoleSubscriptions)(e, l, t) : [],
      a = 0;
    for (let e of s) {
      let t = e.id;
      if (null != t) {
        let e = null == i ? void 0 : i[t];
        null != e && (a += e)
      }
    }
    return a
  }, [i, e, t, l])
}