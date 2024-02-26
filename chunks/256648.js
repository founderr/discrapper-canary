"use strict";
n.r(t), n.d(t, {
  useThreadMemberListSections: function() {
    return c
  }
}), n("222007"), n("424973");
var l = n("884691"),
  a = n("917351"),
  s = n.n(a),
  i = n("446674"),
  r = n("593752"),
  u = n("843455"),
  o = n("782340");
let d = [];

function c(e, t) {
  let {
    version: n,
    members: a
  } = (0, i.useStateFromStoresObject)([r.default], () => ({
    version: r.default.getMemberListVersion(e),
    members: r.default.getMemberListSections(e)
  })), c = l.useMemo(() => {
    if (null == t) return d;
    let e = s(t.roles).values().filter(e => e.hoist).sortBy(e => e.position).reverse().map(e => e.id).value();
    return e.push(u.StatusTypes.ONLINE, u.StatusTypes.OFFLINE), e.map(e => {
      var n, l, s;
      let i = e === u.StatusTypes.ONLINE ? o.default.Messages.STATUS_ONLINE : e === u.StatusTypes.OFFLINE ? o.default.Messages.STATUS_OFFLINE : null === (n = t.roles[e]) || void 0 === n ? void 0 : n.name,
        r = null !== (s = null == a ? void 0 : null === (l = a[e]) || void 0 === l ? void 0 : l.userIds) && void 0 !== s ? s : [];
      return {
        label: i,
        userIds: r,
        id: e,
        roleId: e
      }
    })
  }, [null == t ? void 0 : t.roles, a, n]);
  return null != a ? c : d
}