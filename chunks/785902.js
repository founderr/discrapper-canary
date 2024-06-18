n.exports = function(n, E, e, t) {
  for (var I = -1, _ = null == n ? 0 : n.length; ++I < _;) {
    var N = n[I];
    E(t, N, e(N), n)
  }
  return t
}