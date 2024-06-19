n.d(t, {
  D: function() {
    return h
  }
}), n(47120), n(653041);
var l = n(470079),
  i = n(392711),
  s = n.n(i),
  a = n(442837),
  r = n(430824),
  o = n(159299),
  c = n(231338),
  u = n(689938);
let d = [];

function h(e, t) {
  let n = (0, a.e7)([r.Z], () => null != t ? r.Z.getRoles(t.id) : void 0),
    {
      version: i,
      members: h
    } = (0, a.cj)([o.Z], () => ({
      version: o.Z.getMemberListVersion(e),
      members: o.Z.getMemberListSections(e)
    })),
    m = l.useMemo(() => {
      if (null == t) return d;
      let e = s()(n).values().filter(e => e.hoist).sortBy(e => e.position).reverse().map(e => e.id).value();
      return e.push(c.Sk.ONLINE, c.Sk.OFFLINE), e.map(e => {
        var t, l, i, s;
        let a = e === c.Sk.ONLINE ? u.Z.Messages.STATUS_ONLINE : e === c.Sk.OFFLINE ? u.Z.Messages.STATUS_OFFLINE : null !== (i = null == n ? void 0 : null === (t = n[e]) || void 0 === t ? void 0 : t.name) && void 0 !== i ? i : "";
        return {
          label: a,
          userIds: null !== (s = null == h ? void 0 : null === (l = h[e]) || void 0 === l ? void 0 : l.userIds) && void 0 !== s ? s : [],
          id: e,
          roleId: e
        }
      })
    }, [n, h, i]);
  return null != h ? m : d
}