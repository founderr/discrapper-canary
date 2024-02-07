var r = /\s/;
t.exports = function(t) {
  for (var n = t.length; n-- && r.test(t.charAt(n)););
  return n
}