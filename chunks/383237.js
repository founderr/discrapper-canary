r.d(t, {
  Z: function() {
return a;
  }
});
var n = r(781212);

function a(e, t) {
  if (null == e)
return {};
  var r, a, o = (0, n.Z)(e, t);
  if (Object.getOwnPropertySymbols) {
var s = Object.getOwnPropertySymbols(e);
for (a = 0; a < s.length; a++) {
  if (r = s[a], !(t.indexOf(r) >= 0))
    Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
}
  }
  return o;
}