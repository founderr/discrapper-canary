e.exports = function(e) {
  var t = void 0;
  t = 'string' == typeof e ? [e] : e.raw;
  for (var r = '', n = 0; n < t.length; n++)
r += t[n].replace(/\\\n[ \t]*/g, '').replace(/\\`/g, '`'), n < (arguments.length <= 1 ? 0 : arguments.length - 1) && (r += arguments.length <= n + 1 ? void 0 : arguments[n + 1]);
  var a = r.split('\n'),
o = null;
  return a.forEach(function(e) {
var t = e.match(/^(\s+)\S+/);
if (t) {
  var r = t[1].length;
  o = o ? Math.min(o, r) : r;
}
  }), null !== o && (r = a.map(function(e) {
return ' ' === e[0] ? e.slice(o) : e;
  }).join('\n')), (r = r.trim()).replace(/\\n/g, '\n');
};