var l = t("413135").Buffer,
  n = [255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255];
i.encode = function(e) {
  !l.isBuffer(e) && (e = new l(e));
  var i, t, n = 0,
    a = 0,
    s = 0,
    r = 0;
  for (var c = new l(8 * (t = Math.floor((i = e).length / 5), i.length % 5 == 0 ? t : t + 1)); n < e.length;) {
    var o = e[n];
    s > 3 ? (r = (r = o & 255 >> s) << (s = (s + 5) % 8) | (n + 1 < e.length ? e[n + 1] : 0) >> 8 - s, n++) : (r = o >> 8 - (s + 5) & 31, 0 == (s = (s + 5) % 8) && n++), c[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(r), a++
  }
  for (n = a; n < c.length; n++) c[n] = 61;
  return c
}, i.decode = function(e) {
  var i, t = 0,
    a = 0,
    s = 0;
  !l.isBuffer(e) && (e = new l(e));
  for (var r = new l(Math.ceil(5 * e.length / 8)), c = 0; c < e.length && 61 != e[c]; c++) {
    var o = e[c] - 48;
    if (o < n.length) a = n[o], t <= 3 ? 0 == (t = (t + 5) % 8) ? (i |= a, r[s] = i, s++, i = 0) : i |= 255 & a << 8 - t : (i |= 255 & a >>> (t = (t + 5) % 8), r[s] = i, s++, i = 255 & a << 8 - t);
    else throw Error("Invalid input - it is not base32 encoded string")
  }
  return r.slice(0, s)
}