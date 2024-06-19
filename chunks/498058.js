n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(470079),
  s = n(442837),
  l = n(592125),
  a = n(594174),
  r = n(292584),
  o = n(158631);

function c(e) {
  var t;
  let n = (0, s.e7)([a.default], () => a.default.getCurrentUser()),
    c = (0, s.e7)([l.Z], () => l.Z.getChannel(e)),
    u = (0, s.e7)([r.Z], () => null != e ? r.Z.getBroadcastByChannel(e) : null),
    d = (0, o.ZP)(),
    E = i.useMemo(() => {
      var e, t;
      return null !== (t = null == c ? void 0 : null === (e = c.recipients) || void 0 === e ? void 0 : e.map(e => a.default.getUser(e)).filter(e => null != e && e.id !== (null == u ? void 0 : u.userId))) && void 0 !== t ? t : []
    }, [null == u ? void 0 : u.userId, null == c ? void 0 : c.recipients]);
  return null == n ? [] : d ? E : null !== (t = E.length > 0 ? [n].concat(E) : null == u ? void 0 : u.viewers) && void 0 !== t ? t : []
}