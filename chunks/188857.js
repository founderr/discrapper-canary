"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
}), l("47120"), l("724458"), l("653041");
var s = l("470079"),
  a = l("442837"),
  n = l("749210"),
  i = l("911969"),
  r = l("271383"),
  o = l("594174"),
  d = l("823379");

function u(e, t) {
  let [l, u] = (0, a.useStateFromStoresArray)([r.default], () => null == t || null == e ? [
    [],
    []
  ] : Object.values(t).reduce((t, l) => {
    if (l.type !== i.PermissionOverwriteType.MEMBER) return t;
    let s = l.id;
    return r.default.isMember(e, s) ? t[0].push(s) : t[1].push(s), t
  }, [
    [],
    []
  ]), [e, t]);
  return s.useEffect(() => {
    u.length > 0 && null != e && n.default.requestMembersById(e, u, !1)
  }, [u, e]), (0, a.useStateFromStoresArray)([o.default], () => l.map(o.default.getUser).filter(d.isNotNullish), [l])
}