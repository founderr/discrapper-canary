o.d(n, {
  Z: function() {
return c;
  }
});
var t = o(470079),
  i = o(442837),
  a = o(480608),
  r = o(243730);
let l = {};

function c(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
o = (0, i.e7)([r.Z], () => r.Z.getRoleMemberCount(e));
  return t.useEffect(() => {
if (null == e)
  return;
let o = l[e];
!(null != o && n > 0 && Date.now() - o < n) && (l[e] = Date.now(), a.E(e));
  }, [
e,
n
  ]), o;
}