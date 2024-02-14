"use strict";
e("311790"), e("477657"), e("811875"), e("90301"), e("652153"), e("28797"), e("817884"), e("597349"), e("667536"), e("690341"), e("70102"), e("424973"), r.byteLength = function(t) {
  var r = s(t),
    e = r[0],
    n = r[1];
  return (e + n) * 3 / 4 - n
}, r.toByteArray = function(t) {
  var r, e, n, u, a = s(t),
    f = a[0],
    c = a[1];
  var l = new o((r = 0, (f + (e = c)) * 3 / 4 - e)),
    h = 0,
    p = c > 0 ? f - 4 : f;
  for (u = 0; u < p; u += 4) n = i[t.charCodeAt(u)] << 18 | i[t.charCodeAt(u + 1)] << 12 | i[t.charCodeAt(u + 2)] << 6 | i[t.charCodeAt(u + 3)], l[h++] = n >> 16 & 255, l[h++] = n >> 8 & 255, l[h++] = 255 & n;
  return 2 === c && (n = i[t.charCodeAt(u)] << 2 | i[t.charCodeAt(u + 1)] >> 4, l[h++] = 255 & n), 1 === c && (n = i[t.charCodeAt(u)] << 10 | i[t.charCodeAt(u + 1)] << 4 | i[t.charCodeAt(u + 2)] >> 2, l[h++] = n >> 8 & 255, l[h++] = 255 & n), l
}, r.fromByteArray = function(t) {
  for (var r, e = t.length, i = e % 3, o = [], u = 0, a = e - i; u < a; u += 16383) o.push(function(t, r, e) {
    for (var i, o, u = [], a = r; a < e; a += 3) {
      ;
      o = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), u.push(n[(i = o) >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i])
    }
    return u.join("")
  }(t, u, u + 16383 > a ? a : u + 16383));
  return 1 === i ? (r = t[e - 1], o.push(n[r >> 2] + n[r << 4 & 63] + "==")) : 2 === i && (r = (t[e - 2] << 8) + t[e - 1], o.push(n[r >> 10] + n[r >> 4 & 63] + n[r << 2 & 63] + "=")), o.join("")
};
for (var n = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, f = u.length; a < f; ++a) n[a] = u[a], i[u.charCodeAt(a)] = a;

function s(t) {
  var r = t.length;
  if (r % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
  var e = t.indexOf("="); - 1 === e && (e = r);
  var n = e === r ? 0 : 4 - e % 4;
  return [e, n]
}
i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63