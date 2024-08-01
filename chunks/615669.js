n.d(t, {
  Z: function() {
return o;
  },
  z: function() {
return i;
  }
}), n(653041);
var i, s, a = n(442837),
  r = n(314897);
(s = i || (i = {}))[s.END_EARLY = 0] = 'END_EARLY';
let l = [];

function o(e) {
  let t = (0, a.e7)([r.default], () => r.default.getId()),
{
  poll: n
} = e;
  if (!e.isPoll() || null == n)
return l;
  let i = [];
  return !n.expiry.isSameOrBefore(Date.now()) && e.author.id === t && i.push(0), i;
}