var i = n(392711),
  s = n.n(i),
  l = n(243814),
  a = n(814443),
  r = n(699516),
  o = n(594174),
  c = n(914946),
  u = n(981631);
t.Z = {
  [u.Etm.GET_RELATIONSHIPS]: {
    scope: l.x.RELATIONSHIPS_READ,
    handler() {
      let e = {
        ...r.Z.getRelationships()
      };
      return a.Z.getUserAffinitiesUserIds().forEach(t => {
        null == e[t] && null != o.default.getUser(t) && (e[t] = u.OGo.IMPLICIT)
      }), {
        relationships: s().map(e, (e, t) => (0, c.cD)(e, t))
      }
    }
  }
}