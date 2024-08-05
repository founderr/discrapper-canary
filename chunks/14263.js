t.d(n, {
  Z: function() {
return a;
  }
});
var r = t(470079),
  i = t(442837),
  o = t(480608),
  l = t(243730);
let u = {};

function a(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
t = (0, i.e7)([l.Z], () => l.Z.getRoleMemberCount(e));
  return r.useEffect(() => {
if (null == e)
  return;
let t = u[e];
!(null != t && n > 0 && Date.now() - t < n) && (u[e] = Date.now(), o.E(e));
  }, [
e,
n
  ]), t;
}