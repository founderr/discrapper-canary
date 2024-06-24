n.d(t, {
  M8: function() {
    return h
  },
  Rd: function() {
    return T
  },
  VM: function() {
    return E
  },
  gU: function() {
    return _
  },
  j_: function() {
    return I
  },
  mq: function() {
    return d
  },
  rW: function() {
    return u
  }
});
var s = n(399606),
  i = n(594174),
  a = n(914788),
  l = n(546791),
  r = n(652262),
  c = n(880257),
  o = n(292352);

function d(e) {
  let t = Object.values((0, s.e7)([a.Z], () => a.Z.getLinkedUsers())).filter(t => null != t && t.link_status === e).sort((e, t) => new Date(e.updated_at).getTime() - new Date(t.updated_at).getTime()).map(e => {
    var t;
    return null !== (t = e.user_id) && void 0 !== t ? t : void 0
  }).filter(e => null != e);
  return (0, s.Wu)([i.default], () => t.map(e => i.default.getUser(e))).filter(e => null != e)
}

function u() {
  let e = (0, s.e7)([a.Z], () => a.Z.getLinkCode()),
    t = (0, s.e7)([i.default], () => i.default.getCurrentUser());
  return null == e || null == t ? null : (0, o._w)(t.id, e)
}

function E() {
  let e = (0, c.Z)(),
    t = d(o.ne.ACTIVE),
    n = e ? o.AG : o.i0;
  return t.length >= n
}

function _() {
  let e = (0, s.e7)([i.default], () => i.default.getCurrentUser()),
    t = (0, s.e7)([a.Z], () => a.Z.getLinkedUsers());
  return null == e ? 0 : Object.values(t).filter(t => null != t && t.link_status === o.ne.PENDING && e.id !== t.requestor_id).length
}

function h() {
  let e = (0, s.e7)([i.default], () => i.default.getCurrentUser()),
    t = (0, s.e7)([a.Z], () => a.Z.getLinkedUsers());
  return null == e ? 0 : Object.values(t).filter(e => null != e && e.link_status === o.ne.ACTIVE).length
}

function T(e) {
  let t = (0, r.M)(),
    n = (0, s.e7)([a.Z], () => null == t ? null : a.Z.getRangeStartTimestamp());
  return null == n ? null : (0, l.LI)(new Date(n).getTime(), () => e, 7)
}

function I(e, t) {
  let n = (0, s.e7)([a.Z], () => a.Z.getLinkTimestamp(e));
  return null != n ? (0, l.lx)(Date.parse(n), t === o.ne.PENDING ? o.TX : o.Wz) : null
}