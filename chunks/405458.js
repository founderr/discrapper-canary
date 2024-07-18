var n = r(489161),
  a = Array.prototype.concat,
  o = Array.prototype.slice,
  s = e.exports = function(e) {
for (var t = [], r = 0, s = e.length; r < s; r++) {
  var i = e[r];
  n(i) ? t = a.call(t, o.call(i)) : t.push(i);
}
return t;
  };
s.wrap = function(e) {
  return function() {
return e(s(arguments));
  };
};