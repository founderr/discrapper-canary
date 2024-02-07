t.exports = function(t, e) {
  var n = -1,
    r = t.length;
  for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
  return e
}