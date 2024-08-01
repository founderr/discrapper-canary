t.d(n, {
  Z: function() {
return s;
  }
});
var i = t(470079),
  o = t(442837),
  a = t(480608),
  l = t(243730);
let r = {};

function s(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
t = (0, o.e7)([l.Z], () => l.Z.getRoleMemberCount(e));
  return i.useEffect(() => {
if (null == e)
  return;
let t = r[e];
!(null != t && n > 0 && Date.now() - t < n) && (r[e] = Date.now(), a.E(e));
  }, [
e,
n
  ]), t;
}