n.d(t, {
  Z: function() {
return d;
  }
}), n(47120);
var r = n(470079),
  i = n(442837),
  a = n(81897),
  s = n(27144),
  o = n(70956),
  l = n(564990),
  u = n(353647);
let c = o.Z.Millis.MINUTE;

function d(e) {
  let {
pastActivityEnabled: t
  } = (0, s.z)({
location: 'useMaybeFetchUserOutbox'
  }), [n, o] = (0, i.Wu)([u.Z], () => [
u.Z.getUserOutbox(e.id),
u.Z.isFetchingUserOutbox(e.id)
  ]), d = (0, a.Z)();
  return r.useEffect(() => {
var r;
if (o || !t)
  return;
let i = null !== (r = null == n ? void 0 : n.lastFetched) && void 0 !== r ? r : 0;
if (!(Date.now() - i < c))
  (0, l.JX)(e.id, d);
  }, [
null == n ? void 0 : n.lastFetched,
e.id,
o,
t,
d
  ]), {
outbox: n,
isFetching: o
  };
}