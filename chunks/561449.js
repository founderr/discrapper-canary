e.exports = function(e, t) {
  var n = -1,
    l = e.length;
  for (t || (t = Array(l)); ++n < l;) t[n] = e[n];
  return t
}