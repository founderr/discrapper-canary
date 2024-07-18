var n = r(553616),
  a = r(64774),
  o = {},
  s = Object.keys(n);
s.forEach(function(e) {
  o[e] = {}, Object.defineProperty(o[e], 'channels', {
value: n[e].channels
  }), Object.defineProperty(o[e], 'labels', {
value: n[e].labels
  });
  var t = a(e);
  Object.keys(t).forEach(function(r) {
var n, a, s, i, c = t[r];
o[e][r] = (n = c, a = function(e) {
  if (null == e)
    return e;
  arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
  var t = n(e);
  if ('object' == typeof t)
    for (var r = t.length, a = 0; a < r; a++)
      t[a] = Math.round(t[a]);
  return t;
}, 'conversion' in n && (a.conversion = n.conversion), a), o[e][r].raw = (s = c, i = function(e) {
  return null == e ? e : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)), s(e));
}, 'conversion' in s && (i.conversion = s.conversion), i);
  });
}), e.exports = o;