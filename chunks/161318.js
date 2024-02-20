t.read = function(e, t, n, r, a) {
  var o, i, u = 8 * a - r - 1,
    s = (1 << u) - 1,
    l = s >> 1,
    c = -7,
    f = n ? a - 1 : 0,
    d = n ? -1 : 1,
    p = e[t + f];
  for (f += d, o = p & (1 << -c) - 1, p >>= -c, c += u; c > 0; o = 256 * o + e[t + f], f += d, c -= 8);
  for (i = o & (1 << -c) - 1, o >>= -c, c += r; c > 0; i = 256 * i + e[t + f], f += d, c -= 8);
  if (0 === o) o = 1 - l;
  else {
    if (o === s) return i ? NaN : (p ? -1 : 1) * (1 / 0);
    i += Math.pow(2, r), o -= l
  }
  return (p ? -1 : 1) * i * Math.pow(2, o - r)
}, t.write = function(e, t, n, r, a, o) {
  var i, u, s, l = 8 * o - a - 1,
    c = (1 << l) - 1,
    f = c >> 1,
    d = 23 === a ? 5960464477539062e-23 : 0,
    p = r ? 0 : o - 1,
    h = r ? 1 : -1,
    m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
  for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (u = isNaN(t) ? 1 : 0, i = c) : (i = Math.floor(Math.log(t) / Math.LN2), t * (s = Math.pow(2, -i)) < 1 && (i--, s *= 2), i + f >= 1 ? t += d / s : t += d * Math.pow(2, 1 - f), t * s >= 2 && (i++, s /= 2), i + f >= c ? (u = 0, i = c) : i + f >= 1 ? (u = (t * s - 1) * Math.pow(2, a), i += f) : (u = t * Math.pow(2, f - 1) * Math.pow(2, a), i = 0)); a >= 8; e[n + p] = 255 & u, p += h, u /= 256, a -= 8);
  for (i = i << a | u, l += a; l > 0; e[n + p] = 255 & i, p += h, i /= 256, l -= 8);
  e[n + p - h] |= 128 * m
}