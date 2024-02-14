r.read = function(t, r, e, n, i) {
  var o, u, a = 8 * i - n - 1,
    f = (1 << a) - 1,
    s = f >> 1,
    c = -7,
    l = e ? i - 1 : 0,
    h = e ? -1 : 1,
    p = t[r + l];
  for (l += h, o = p & (1 << -c) - 1, p >>= -c, c += a; c > 0; o = 256 * o + t[r + l], l += h, c -= 8);
  for (u = o & (1 << -c) - 1, o >>= -c, c += n; c > 0; u = 256 * u + t[r + l], l += h, c -= 8);
  if (0 === o) o = 1 - s;
  else {
    if (o === f) return u ? NaN : (p ? -1 : 1) * (1 / 0);
    u += Math.pow(2, n), o -= s
  }
  return (p ? -1 : 1) * u * Math.pow(2, o - n)
}, r.write = function(t, r, e, n, i, o) {
  var u, a, f, s = 8 * o - i - 1,
    c = (1 << s) - 1,
    l = c >> 1,
    h = 23 === i ? 5960464477539062e-23 : 0,
    p = n ? 0 : o - 1,
    v = n ? 1 : -1,
    d = r < 0 || 0 === r && 1 / r < 0 ? 1 : 0;
  for (isNaN(r = Math.abs(r)) || r === 1 / 0 ? (a = isNaN(r) ? 1 : 0, u = c) : (u = Math.floor(Math.log(r) / Math.LN2), r * (f = Math.pow(2, -u)) < 1 && (u--, f *= 2), u + l >= 1 ? r += h / f : r += h * Math.pow(2, 1 - l), r * f >= 2 && (u++, f /= 2), u + l >= c ? (a = 0, u = c) : u + l >= 1 ? (a = (r * f - 1) * Math.pow(2, i), u += l) : (a = r * Math.pow(2, l - 1) * Math.pow(2, i), u = 0)); i >= 8; t[e + p] = 255 & a, p += v, a /= 256, i -= 8);
  for (u = u << i | a, s += i; s > 0; t[e + p] = 255 & u, p += v, u /= 256, s -= 8);
  t[e + p - v] |= 128 * d
}