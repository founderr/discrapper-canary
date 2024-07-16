n.d(t, {
  Z: function() {
return s;
  }
});
var r = n(718922),
  i = n(55935),
  a = n(745735);

function s(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1000,
n = arguments.length > 2 ? arguments[2] : void 0,
s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
o = (0, i.TD)(Date.now(), e),
l = (0, r.Z)();
  return (0, a.Z)(() => {
if ((0 !== o.days || 0 !== o.hours || 0 !== o.minutes || 0 !== o.seconds) && !s)
  l(), null == n || n();
  }, s ? null : t), o;
}