var l = t("413135").Buffer,
  n = [255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255];
i.encode = function(e) {
  !l.isBuffer(e) && (e = new l(e));
  var i, t, n = 0,
    s = 0,
    r = 0,
    a = 0;
  for (var o = new l(8 * (t = Math.floor((i = e).length / 5), i.length % 5 == 0 ? t : t + 1)); n < e.length;) {
    var c = e[n];
    r > 3 ? (a = (a = c & 255 >> r) << (r = (r + 5) % 8) | (n + 1 < e.length ? e[n + 1] : 0) >> 8 - r, n++) : (a = c >> 8 - (r + 5) & 31, 0 == (r = (r + 5) % 8) && n++), o[s] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(a), s++
  }
  for (n = s; n < o.length; n++) o[n] = 61;
  return o
}, i.decode = function(e) {
  var i, t = 0,
    s = 0,
    r = 0;
  !l.isBuffer(e) && (e = new l(e));
  for (var a = new l(Math.ceil(5 * e.length / 8)), o = 0; o < e.length && 61 != e[o]; o++) {
    var c = e[o] - 48;
    if (c < n.length) s = n[c], t <= 3 ? 0 == (t = (t + 5) % 8) ? (i |= s, a[r] = i, r++, i = 0) : i |= 255 & s << 8 - t : (i |= 255 & s >>> (t = (t + 5) % 8), a[r] = i, r++, i = 255 & s << 8 - t);
    else throw Error("Invalid input - it is not base32 encoded string")
  }
  return a.slice(0, r)
}