"use strict";
n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102"), n("424973"), t.byteLength = function(e) {
  var t = l(e),
    n = t[0],
    r = t[1];
  return (n + r) * 3 / 4 - r
}, t.toByteArray = function(e) {
  var t, n, r, i, u = l(e),
    s = u[0],
    c = u[1];
  var f = new o((t = 0, (s + (n = c)) * 3 / 4 - n)),
    d = 0,
    p = c > 0 ? s - 4 : s;
  for (i = 0; i < p; i += 4) r = a[e.charCodeAt(i)] << 18 | a[e.charCodeAt(i + 1)] << 12 | a[e.charCodeAt(i + 2)] << 6 | a[e.charCodeAt(i + 3)], f[d++] = r >> 16 & 255, f[d++] = r >> 8 & 255, f[d++] = 255 & r;
  return 2 === c && (r = a[e.charCodeAt(i)] << 2 | a[e.charCodeAt(i + 1)] >> 4, f[d++] = 255 & r), 1 === c && (r = a[e.charCodeAt(i)] << 10 | a[e.charCodeAt(i + 1)] << 4 | a[e.charCodeAt(i + 2)] >> 2, f[d++] = r >> 8 & 255, f[d++] = 255 & r), f
}, t.fromByteArray = function(e) {
  for (var t, n = e.length, a = n % 3, o = [], i = 0, u = n - a; i < u; i += 16383) o.push(function(e, t, n) {
    for (var a, o, i = [], u = t; u < n; u += 3) {
      ;
      o = (e[u] << 16 & 16711680) + (e[u + 1] << 8 & 65280) + (255 & e[u + 2]), i.push(r[(a = o) >> 18 & 63] + r[a >> 12 & 63] + r[a >> 6 & 63] + r[63 & a])
    }
    return i.join("")
  }(e, i, i + 16383 > u ? u : i + 16383));
  return 1 === a ? (t = e[n - 1], o.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === a && (t = (e[n - 2] << 8) + e[n - 1], o.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "=")), o.join("")
};
for (var r = [], a = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = 0, s = i.length; u < s; ++u) r[u] = i[u], a[i.charCodeAt(u)] = u;

function l(e) {
  var t = e.length;
  if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
  var n = e.indexOf("="); - 1 === n && (n = t);
  var r = n === t ? 0 : 4 - n % 4;
  return [n, r]
}
a["-".charCodeAt(0)] = 62, a["_".charCodeAt(0)] = 63