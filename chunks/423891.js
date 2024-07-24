var n, i, o, a;
r(444675), i = {}, t.exports = i, n = r(457854), o = i, a = n, o.toRGBA8 = function(t) {
  var e = t.width,
r = t.height;
  if (null == t.tabs.acTL)
return [o.toRGBA8.decodeImage(t.data, e, r, t).buffer];
  var n = [];
  null == t.frames[0].data && (t.frames[0].data = t.data);
  for (var i, a = new Uint8Array(e * r * 4), s = 0; s < t.frames.length; s++) {
var u = t.frames[s],
  c = u.rect.x,
  h = u.rect.y,
  l = u.rect.width,
  f = u.rect.height,
  p = o.toRGBA8.decodeImage(u.data, l, f, t);
if (0 == s ? i = p : 0 == u.blend ? o._copyTile(p, l, f, i, e, r, c, h, 0) : 1 == u.blend && o._copyTile(p, l, f, i, e, r, c, h, 1), n.push(i.buffer), i = i.slice(0), 0 == u.dispose);
else if (1 == u.dispose)
  o._copyTile(a, l, f, i, e, r, c, h, 0);
else if (2 == u.dispose) {
  for (var m = s - 1; 2 == t.frames[m].dispose;)
    m--;
  i = new Uint8Array(n[m]).slice(0);
}
  }
  return n;
}, o.toRGBA8.decodeImage = function(t, e, r, n) {
  var i = e * r,
a = Math.ceil(e * o.decode._getBPP(n) / 8),
s = new Uint8Array(4 * i),
u = new Uint32Array(s.buffer),
c = n.ctype,
h = n.depth,
l = o._bin.readUshort;
  if (6 == c) {
var f = i << 2;
if (8 == h)
  for (var p = 0; p < f; p++)
    s[p] = t[p];
if (16 == h)
  for (var p = 0; p < f; p++)
    s[p] = t[p << 1];
  } else if (2 == c) {
var m = n.tabs.tRNS,
  d = -1,
  v = -1,
  g = -1;
if (m && (d = m[0], v = m[1], g = m[2]), 8 == h)
  for (var p = 0; p < i; p++) {
    var b = p << 2,
      E = 3 * p;
    s[b] = t[E], s[b + 1] = t[E + 1], s[b + 2] = t[E + 2], s[b + 3] = 255, -1 != d && t[E] == d && t[E + 1] == v && t[E + 2] == g && (s[b + 3] = 0);
  }
if (16 == h)
  for (var p = 0; p < i; p++) {
    var b = p << 2,
      E = 6 * p;
    s[b] = t[E], s[b + 1] = t[E + 2], s[b + 2] = t[E + 4], s[b + 3] = 255, -1 != d && l(t, E) == d && l(t, E + 2) == v && l(t, E + 4) == g && (s[b + 3] = 0);
  }
  } else if (3 == c) {
var y = n.tabs.PLTE,
  T = n.tabs.tRNS,
  A = T ? T.length : 0;
if (1 == h)
  for (var _ = 0; _ < r; _++) {
    for (var H = _ * a, I = _ * e, p = 0; p < e; p++) {
      var b = I + p << 2,
        S = t[H + (p >> 3)] >> 7 - ((7 & p) << 0) & 1,
        B = 3 * S;
      s[b] = y[B], s[b + 1] = y[B + 1], s[b + 2] = y[B + 2], s[b + 3] = S < A ? T[S] : 255;
    }
  }
if (2 == h)
  for (var _ = 0; _ < r; _++) {
    for (var H = _ * a, I = _ * e, p = 0; p < e; p++) {
      var b = I + p << 2,
        S = t[H + (p >> 2)] >> 6 - ((3 & p) << 1) & 3,
        B = 3 * S;
      s[b] = y[B], s[b + 1] = y[B + 1], s[b + 2] = y[B + 2], s[b + 3] = S < A ? T[S] : 255;
    }
  }
if (4 == h)
  for (var _ = 0; _ < r; _++) {
    for (var H = _ * a, I = _ * e, p = 0; p < e; p++) {
      var b = I + p << 2,
        S = t[H + (p >> 1)] >> 4 - ((1 & p) << 2) & 15,
        B = 3 * S;
      s[b] = y[B], s[b + 1] = y[B + 1], s[b + 2] = y[B + 2], s[b + 3] = S < A ? T[S] : 255;
    }
  }
if (8 == h)
  for (var p = 0; p < i; p++) {
    var b = p << 2,
      S = t[p],
      B = 3 * S;
    s[b] = y[B], s[b + 1] = y[B + 1], s[b + 2] = y[B + 2], s[b + 3] = S < A ? T[S] : 255;
  }
  } else if (4 == c) {
if (8 == h)
  for (var p = 0; p < i; p++) {
    var b = p << 2,
      N = p << 1,
      L = t[N];
    s[b] = L, s[b + 1] = L, s[b + 2] = L, s[b + 3] = t[N + 1];
  }
if (16 == h)
  for (var p = 0; p < i; p++) {
    var b = p << 2,
      N = p << 2,
      L = t[N];
    s[b] = L, s[b + 1] = L, s[b + 2] = L, s[b + 3] = t[N + 2];
  }
  } else if (0 == c) {
var d = n.tabs.tRNS ? n.tabs.tRNS : -1;
if (1 == h)
  for (var p = 0; p < i; p++) {
    var L = 255 * (t[p >> 3] >> 7 - (7 & p) & 1),
      R = L == 255 * d ? 0 : 255;
    u[p] = R << 24 | L << 16 | L << 8 | L;
  }
if (2 == h)
  for (var p = 0; p < i; p++) {
    var L = 85 * (t[p >> 2] >> 6 - ((3 & p) << 1) & 3),
      R = L == 85 * d ? 0 : 255;
    u[p] = R << 24 | L << 16 | L << 8 | L;
  }
if (4 == h)
  for (var p = 0; p < i; p++) {
    var L = 17 * (t[p >> 1] >> 4 - ((1 & p) << 2) & 15),
      R = L == 17 * d ? 0 : 255;
    u[p] = R << 24 | L << 16 | L << 8 | L;
  }
if (8 == h)
  for (var p = 0; p < i; p++) {
    var L = t[p],
      R = L == d ? 0 : 255;
    u[p] = R << 24 | L << 16 | L << 8 | L;
  }
if (16 == h)
  for (var p = 0; p < i; p++) {
    var L = t[p << 1],
      R = l(t, p << 1) == d ? 0 : 255;
    u[p] = R << 24 | L << 16 | L << 8 | L;
  }
  }
  return s;
}, o.decode = function(t) {
  for (var e = new Uint8Array(t), r = 8, n = o._bin, i = n.readUshort, a = n.readUint, s = {
  tabs: {},
  frames: []
}, u = new Uint8Array(e.length), c = 0, h, l = 0, f = [
  137,
  80,
  78,
  71,
  13,
  10,
  26,
  10
], p = 0; p < 8; p++)
if (e[p] != f[p])
  throw 'The input is not a PNG file!';
  for (; r < e.length;) {
var m = n.readUint(e, r);
r += 4;
var d = n.readASCII(e, r, 4);
if (r += 4, 'IHDR' == d)
  o.decode._IHDR(e, r, s);
else if ('IDAT' == d) {
  for (var p = 0; p < m; p++)
    u[c + p] = e[r + p];
  c += m;
} else if ('acTL' == d)
  s.tabs[d] = {
    num_frames: a(e, r),
    num_plays: a(e, r + 4)
  }, h = new Uint8Array(e.length);
else if ('fcTL' == d) {
  if (0 != l) {
    var v = s.frames[s.frames.length - 1];
    v.data = o.decode._decompress(s, h.slice(0, l), v.rect.width, v.rect.height), l = 0;
  }
  var g = {
      x: a(e, r + 12),
      y: a(e, r + 16),
      width: a(e, r + 4),
      height: a(e, r + 8)
    },
    b = i(e, r + 22),
    E = {
      rect: g,
      delay: Math.round(1000 * (b = i(e, r + 20) / (0 == b ? 100 : b))),
      dispose: e[r + 24],
      blend: e[r + 25]
    };
  s.frames.push(E);
} else if ('fdAT' == d) {
  for (var p = 0; p < m - 4; p++)
    h[l + p] = e[r + p + 4];
  l += m - 4;
} else if ('pHYs' == d)
  s.tabs[d] = [
    n.readUint(e, r),
    n.readUint(e, r + 4),
    e[r + 8]
  ];
else if ('cHRM' == d) {
  s.tabs[d] = [];
  for (var p = 0; p < 8; p++)
    s.tabs[d].push(n.readUint(e, r + 4 * p));
} else if ('tEXt' == d) {
  null == s.tabs[d] && (s.tabs[d] = {});
  var y = n.nextZero(e, r),
    T = n.readASCII(e, r, y - r),
    A = n.readASCII(e, y + 1, r + m - y - 1);
  s.tabs[d][T] = A;
} else if ('iTXt' == d) {
  null == s.tabs[d] && (s.tabs[d] = {});
  var y = 0,
    _ = r;
  y = n.nextZero(e, _);
  var T = n.readASCII(e, _, y - _);
  e[_ = y + 1], e[_ + 1], _ += 2, y = n.nextZero(e, _), n.readASCII(e, _, y - _), _ = y + 1, y = n.nextZero(e, _), n.readUTF8(e, _, y - _), _ = y + 1;
  var A = n.readUTF8(e, _, m - (_ - r));
  s.tabs[d][T] = A;
} else if ('PLTE' == d)
  s.tabs[d] = n.readBytes(e, r, m);
else if ('hIST' == d) {
  var H = s.tabs.PLTE.length / 3;
  s.tabs[d] = [];
  for (var p = 0; p < H; p++)
    s.tabs[d].push(i(e, r + 2 * p));
} else if ('tRNS' == d)
  3 == s.ctype ? s.tabs[d] = n.readBytes(e, r, m) : 0 == s.ctype ? s.tabs[d] = i(e, r) : 2 == s.ctype && (s.tabs[d] = [
    i(e, r),
    i(e, r + 2),
    i(e, r + 4)
  ]);
else if ('gAMA' == d)
  s.tabs[d] = n.readUint(e, r) / 100000;
else if ('sRGB' == d)
  s.tabs[d] = e[r];
else if ('bKGD' == d)
  0 == s.ctype || 4 == s.ctype ? s.tabs[d] = [i(e, r)] : 2 == s.ctype || 6 == s.ctype ? s.tabs[d] = [
    i(e, r),
    i(e, r + 2),
    i(e, r + 4)
  ] : 3 == s.ctype && (s.tabs[d] = e[r]);
else if ('IEND' == d) {
  if (0 != l) {
    var v = s.frames[s.frames.length - 1];
    v.data = o.decode._decompress(s, h.slice(0, l), v.rect.width, v.rect.height), l = 0;
  }
  s.data = o.decode._decompress(s, u, s.width, s.height);
  break;
}
r += m, n.readUint(e, r), r += 4;
  }
  return delete s.compress, delete s.interlace, delete s.filter, s;
}, o.decode._decompress = function(t, e, r, n) {
  return 0 == t.compress && (e = o.decode._inflate(e)), 0 == t.interlace ? e = o.decode._filterZero(e, t, 0, r, n) : 1 == t.interlace && (e = o.decode._readInterlace(e, t)), e;
}, o.decode._inflate = function(t) {
  return a.inflate(t);
}, o.decode._readInterlace = function(t, e) {
  for (var r = e.width, n = e.height, i = o.decode._getBPP(e), a = i >> 3, s = Math.ceil(r * i / 8), u = new Uint8Array(n * s), c = 0, h = [
  0,
  0,
  4,
  0,
  2,
  0,
  1
], l = [
  0,
  4,
  0,
  2,
  0,
  1,
  0
], f = [
  8,
  8,
  8,
  4,
  4,
  2,
  2
], p = [
  8,
  8,
  4,
  4,
  2,
  2,
  1
], m = 0; m < 7;) {
for (var d = f[m], v = p[m], g = 0, b = 0, E = h[m]; E < n;)
  E += d, b++;
for (var y = l[m]; y < r;)
  y += v, g++;
var T = Math.ceil(g * i / 8);
o.decode._filterZero(t, e, c, g, b);
for (var A = 0, _ = h[m]; _ < n;) {
  for (var H = l[m], I = c + A * T << 3; H < r;) {
    if (1 == i) {
      var S = t[I >> 3];
      S = S >> 7 - (7 & I) & 1, u[_ * s + (H >> 3)] |= S << 7 - ((3 & H) << 0);
    }
    if (2 == i) {
      var S = t[I >> 3];
      S = S >> 6 - (7 & I) & 3, u[_ * s + (H >> 2)] |= S << 6 - ((3 & H) << 1);
    }
    if (4 == i) {
      var S = t[I >> 3];
      S = S >> 4 - (7 & I) & 15, u[_ * s + (H >> 1)] |= S << 4 - ((1 & H) << 2);
    }
    if (i >= 8) {
      for (var B = _ * s + H * a, N = 0; N < a; N++)
        u[B + N] = t[(I >> 3) + N];
    }
    I += i, H += v;
  }
  A++, _ += d;
}
g * b != 0 && (c += b * (1 + T)), m += 1;
  }
  return u;
}, o.decode._getBPP = function(t) {
  return [
1,
null,
3,
1,
2,
null,
4
  ][t.ctype] * t.depth;
}, o.decode._filterZero = function(t, e, r, n, i) {
  var a = o.decode._getBPP(e),
s = Math.ceil(n * a / 8),
u = o.decode._paeth;
  a = Math.ceil(a / 8);
  for (var c = 0; c < i; c++) {
var h = r + c * s,
  l = h + c + 1,
  f = t[l - 1];
if (0 == f)
  for (var p = 0; p < s; p++)
    t[h + p] = t[l + p];
else if (1 == f) {
  for (var p = 0; p < a; p++)
    t[h + p] = t[l + p];
  for (var p = a; p < s; p++)
    t[h + p] = t[l + p] + t[h + p - a] & 255;
} else if (0 == c) {
  for (var p = 0; p < a; p++)
    t[h + p] = t[l + p];
  if (2 == f)
    for (var p = a; p < s; p++)
      t[h + p] = 255 & t[l + p];
  if (3 == f)
    for (var p = a; p < s; p++)
      t[h + p] = t[l + p] + (t[h + p - a] >> 1) & 255;
  if (4 == f)
    for (var p = a; p < s; p++)
      t[h + p] = t[l + p] + u(t[h + p - a], 0, 0) & 255;
} else {
  if (2 == f)
    for (var p = 0; p < s; p++)
      t[h + p] = t[l + p] + t[h + p - s] & 255;
  if (3 == f) {
    for (var p = 0; p < a; p++)
      t[h + p] = t[l + p] + (t[h + p - s] >> 1) & 255;
    for (var p = a; p < s; p++)
      t[h + p] = t[l + p] + (t[h + p - s] + t[h + p - a] >> 1) & 255;
  }
  if (4 == f) {
    for (var p = 0; p < a; p++)
      t[h + p] = t[l + p] + u(0, t[h + p - s], 0) & 255;
    for (var p = a; p < s; p++)
      t[h + p] = t[l + p] + u(t[h + p - a], t[h + p - s], t[h + p - a - s]) & 255;
  }
}
  }
  return t;
}, o.decode._paeth = function(t, e, r) {
  var n = t + e - r,
i = Math.abs(n - t),
o = Math.abs(n - e),
a = Math.abs(n - r);
  return i <= o && i <= a ? t : o <= a ? e : r;
}, o.decode._IHDR = function(t, e, r) {
  var n = o._bin;
  r.width = n.readUint(t, e), e += 4, r.height = n.readUint(t, e), e += 4, r.depth = t[e], e++, r.ctype = t[e], e++, r.compress = t[e], e++, r.filter = t[e], e++, r.interlace = t[e], e++;
}, o._bin = {
  nextZero: function(t, e) {
for (; 0 != t[e];)
  e++;
return e;
  },
  readUshort: function(t, e) {
return t[e] << 8 | t[e + 1];
  },
  writeUshort: function(t, e, r) {
t[e] = r >> 8 & 255, t[e + 1] = 255 & r;
  },
  readUint: function(t, e) {
return 16777216 * t[e] + (t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]);
  },
  writeUint: function(t, e, r) {
t[e] = r >> 24 & 255, t[e + 1] = r >> 16 & 255, t[e + 2] = r >> 8 & 255, t[e + 3] = 255 & r;
  },
  readASCII: function(t, e, r) {
for (var n = '', i = 0; i < r; i++)
  n += String.fromCharCode(t[e + i]);
return n;
  },
  writeASCII: function(t, e, r) {
for (var n = 0; n < r.length; n++)
  t[e + n] = r.charCodeAt(n);
  },
  readBytes: function(t, e, r) {
for (var n = [], i = 0; i < r; i++)
  n.push(t[e + i]);
return n;
  },
  pad: function(t) {
return t.length < 2 ? '0' + t : t;
  },
  readUTF8: function(t, e, r) {
for (var n, i = '', a = 0; a < r; a++)
  i += '%' + o._bin.pad(t[e + a].toString(16));
try {
  n = decodeURIComponent(i);
} catch (n) {
  return o._bin.readASCII(t, e, r);
}
return n;
  }
}, o._copyTile = function(t, e, r, n, i, o, a, s, u) {
  for (var c = Math.min(e, i), h = Math.min(r, o), l = 0, f = 0, p = 0; p < h; p++)
for (var m = 0; m < c; m++)
  if (a >= 0 && s >= 0 ? (l = p * e + m << 2, f = (s + p) * i + a + m << 2) : (l = (-s + p) * e - a + m << 2, f = p * i + m << 2), 0 == u)
    n[f] = t[l], n[f + 1] = t[l + 1], n[f + 2] = t[l + 2], n[f + 3] = t[l + 3];
  else if (1 == u) {
var d = t[l + 3] * (1 / 255),
  v = t[l] * d,
  g = t[l + 1] * d,
  b = t[l + 2] * d,
  E = n[f + 3] * (1 / 255),
  y = n[f] * E,
  T = n[f + 1] * E,
  A = n[f + 2] * E,
  _ = 1 - d,
  H = d + E * _,
  I = 0 == H ? 0 : 1 / H;
n[f + 3] = 255 * H, n[f + 0] = (v + y * _) * I, n[f + 1] = (g + T * _) * I, n[f + 2] = (b + A * _) * I;
  } else if (2 == u) {
var d = t[l + 3],
  v = t[l],
  g = t[l + 1],
  b = t[l + 2],
  E = n[f + 3],
  y = n[f],
  T = n[f + 1],
  A = n[f + 2];
d == E && v == y && g == T && b == A ? (n[f] = 0, n[f + 1] = 0, n[f + 2] = 0, n[f + 3] = 0) : (n[f] = v, n[f + 1] = g, n[f + 2] = b, n[f + 3] = d);
  } else if (3 == u) {
var d = t[l + 3],
  v = t[l],
  g = t[l + 1],
  b = t[l + 2],
  E = n[f + 3],
  y = n[f],
  T = n[f + 1],
  A = n[f + 2];
if (d == E && v == y && g == T && b == A)
  continue;
if (d < 220 && E > 20)
  return !1;
  }
  return !0;
}, o.encode = function(t, e, r, n, i, a) {
  null == n && (n = 0), null == a && (a = !1);
  for (var s = new Uint8Array(t[0].byteLength * t.length + 100), u = [
  137,
  80,
  78,
  71,
  13,
  10,
  26,
  10
], c = 0; c < 8; c++)
s[c] = u[c];
  var h = 8,
l = o._bin,
f = o.crc.crc,
p = l.writeUint,
m = l.writeUshort,
d = l.writeASCII,
v = o.encode.compressPNG(t, e, r, n, a);
  p(s, h, 13), d(s, h += 4, 'IHDR'), p(s, h += 4, e), p(s, h += 4, r), s[h += 4] = v.depth, s[++h] = v.ctype, s[++h] = 0, s[++h] = 0, s[++h] = 0, p(s, ++h, f(s, h - 17, 17)), p(s, h += 4, 1), d(s, h += 4, 'sRGB'), s[h += 4] = 1, p(s, ++h, f(s, h - 5, 5)), h += 4;
  var g = t.length > 1;
  if (g && (p(s, h, 8), d(s, h += 4, 'acTL'), p(s, h += 4, t.length), p(s, h += 4, 0), p(s, h += 4, f(s, h - 12, 12)), h += 4), 3 == v.ctype) {
var b = v.plte.length;
p(s, h, 3 * b), d(s, h += 4, 'PLTE'), h += 4;
for (var c = 0; c < b; c++) {
  var E = 3 * c,
    y = v.plte[c],
    T = 255 & y,
    A = y >> 8 & 255,
    _ = y >> 16 & 255;
  s[h + E + 0] = T, s[h + E + 1] = A, s[h + E + 2] = _;
}
if (p(s, h += 3 * b, f(s, h - 3 * b - 4, 3 * b + 4)), h += 4, v.gotAlpha) {
  p(s, h, b), d(s, h += 4, 'tRNS'), h += 4;
  for (var c = 0; c < b; c++)
    s[h + c] = v.plte[c] >> 24 & 255;
  p(s, h += b, f(s, h - b - 4, b + 4)), h += 4;
}
  }
  for (var H = 0, I = 0; I < v.frames.length; I++) {
var S = v.frames[I];
g && (p(s, h, 26), d(s, h += 4, 'fcTL'), p(s, h += 4, H++), p(s, h += 4, S.rect.width), p(s, h += 4, S.rect.height), p(s, h += 4, S.rect.x), p(s, h += 4, S.rect.y), m(s, h += 4, i[I]), m(s, h += 2, 1000), s[h += 2] = S.dispose, s[++h] = S.blend, p(s, ++h, f(s, h - 30, 30)), h += 4);
var B = S.cimg,
  b = B.length;
p(s, h, b + (0 == I ? 0 : 4));
var N = h += 4;
d(s, h, 0 == I ? 'IDAT' : 'fdAT'), h += 4, 0 != I && (p(s, h, H++), h += 4);
for (var c = 0; c < b; c++)
  s[h + c] = B[c];
p(s, h += b, f(s, N, h - N)), h += 4;
  }
  return p(s, h, 0), d(s, h += 4, 'IEND'), p(s, h += 4, f(s, h - 4, 4)), h += 4, s.buffer.slice(0, h);
}, o.encode.compressPNG = function(t, e, r, n, i) {
  for (var a = o.encode.compress(t, e, r, n, !1, i), s = 0; s < t.length; s++) {
var u = a.frames[s],
  c = (u.rect.width, u.rect.height),
  h = u.bpl,
  l = u.bpp,
  f = new Uint8Array(c * h + c);
u.cimg = o.encode._filterZero(u.img, c, l, h, f);
  }
  return a;
}, o.encode.compress = function(t, e, r, n, i, a) {
  null == a && (a = !1);
  for (var s = 6, u = 8, c = 4, h = 255, l = 0; l < t.length; l++) {
for (var f = new Uint8Array(t[l]), p = f.length, m = 0; m < p; m += 4)
  h &= f[m + 3];
  }
  var d = 255 != h,
v = {},
g = [];
  if (0 != t.length && (v[0] = 0, g.push(0), 0 != n && n--), 0 != n) {
var b = o.quantize(t, n, i);
t = b.bufs;
for (var m = 0; m < b.plte.length; m++) {
  var E = b.plte[m].est.rgba;
  null == v[E] && (v[E] = g.length, g.push(E));
}
  } else
for (var l = 0; l < t.length; l++) {
  for (var y = new Uint32Array(t[l]), p = y.length, m = 0; m < p; m++) {
    var E = y[m];
    if ((m < e || E != y[m - 1] && E != y[m - e]) && null == v[E] && (v[E] = g.length, g.push(E), g.length >= 300))
      break;
  }
}
  var T = !!d && i,
A = g.length;
  A <= 256 && !1 == a && (u = A <= 2 ? 1 : A <= 4 ? 2 : A <= 16 ? 4 : 8, i && (u = 8), d = !0);
  for (var _ = [], l = 0; l < t.length; l++) {
var H = new Uint8Array(t[l]),
  I = new Uint32Array(H.buffer),
  S = 0,
  B = 0,
  N = e,
  L = r,
  R = 0;
if (0 != l && !T) {
  for (var w = i || 1 == l || 2 == _[_.length - 2].dispose ? 1 : 2, P = 0, M = 1000000000, U = 0; U < w; U++) {
    for (var C = new Uint8Array(t[l - 1 - U]), D = new Uint32Array(t[l - 1 - U]), O = e, G = r, F = -1, k = -1, x = 0; x < r; x++)
      for (var V = 0; V < e; V++) {
        var m = x * e + V;
        I[m] != D[m] && (V < O && (O = V), V > F && (F = V), x < G && (G = x), x > k && (k = x));
      }
    var Z = -1 == F ? 1 : (F - O + 1) * (k - G + 1);
    Z < M && (M = Z, P = U, -1 == F ? (S = B = 0, N = L = 1) : (S = O, B = G, N = F - O + 1, L = k - G + 1));
  }
  var C = new Uint8Array(t[l - 1 - P]);
  1 == P && (_[_.length - 1].dispose = 2);
  var j = new Uint8Array(N * L * 4);
  new Uint32Array(j.buffer), o._copyTile(C, e, r, j, N, L, -S, -B, 0), o._copyTile(H, e, r, j, N, L, -S, -B, 3) ? (o._copyTile(H, e, r, j, N, L, -S, -B, 2), R = 1) : (o._copyTile(H, e, r, j, N, L, -S, -B, 0), R = 0), I = new Uint32Array((H = j).buffer);
}
var X = 4 * N;
if (A <= 256 && !1 == a) {
  for (var j = new Uint8Array((X = Math.ceil(u * N / 8)) * L), x = 0; x < L; x++) {
    var m = x * X,
      K = x * N;
    if (8 == u)
      for (var V = 0; V < N; V++)
        j[m + V] = v[I[K + V]];
    else if (4 == u)
      for (var V = 0; V < N; V++)
        j[m + (V >> 1)] |= v[I[K + V]] << 4 - (1 & V) * 4;
    else if (2 == u)
      for (var V = 0; V < N; V++)
        j[m + (V >> 2)] |= v[I[K + V]] << 6 - (3 & V) * 2;
    else if (1 == u)
      for (var V = 0; V < N; V++)
        j[m + (V >> 3)] |= v[I[K + V]] << 7 - (7 & V) * 1;
  }
  H = j, s = 3, c = 1;
} else if (!1 == d && 1 == t.length) {
  for (var j = new Uint8Array(N * L * 3), q = N * L, m = 0; m < q; m++) {
    var z = 3 * m,
      W = 4 * m;
    j[z] = H[W], j[z + 1] = H[W + 1], j[z + 2] = H[W + 2];
  }
  H = j, s = 2, c = 3, X = 3 * N;
}
_.push({
  rect: {
    x: S,
    y: B,
    width: N,
    height: L
  },
  img: H,
  bpl: X,
  bpp: c,
  blend: R,
  dispose: T ? 1 : 0
});
  }
  return {
ctype: s,
depth: u,
plte: g,
gotAlpha: d,
frames: _
  };
}, o.encode._filterZero = function(t, e, r, n, i) {
  for (var s = [], u = 0; u < 5; u++)
if (!(e * n > 500000) || 2 != u && 3 != u && 4 != u) {
  for (var c = 0; c < e; c++)
    o.encode._filterLine(i, t, c, n, r, u);
  if (s.push(a.deflate(i)), 1 == r)
    break;
}
  for (var h, l = 1000000000, f = 0; f < s.length; f++)
s[f].length < l && (h = f, l = s[f].length);
  return s[h];
}, o.encode._filterLine = function(t, e, r, n, i, a) {
  var s = r * n,
u = s + r,
c = o.decode._paeth;
  if (t[u] = a, u++, 0 == a)
for (var h = 0; h < n; h++)
  t[u + h] = e[s + h];
  else if (1 == a) {
for (var h = 0; h < i; h++)
  t[u + h] = e[s + h];
for (var h = i; h < n; h++)
  t[u + h] = e[s + h] - e[s + h - i] + 256 & 255;
  } else if (0 == r) {
for (var h = 0; h < i; h++)
  t[u + h] = e[s + h];
if (2 == a)
  for (var h = i; h < n; h++)
    t[u + h] = e[s + h];
if (3 == a)
  for (var h = i; h < n; h++)
    t[u + h] = e[s + h] - (e[s + h - i] >> 1) + 256 & 255;
if (4 == a)
  for (var h = i; h < n; h++)
    t[u + h] = e[s + h] - c(e[s + h - i], 0, 0) + 256 & 255;
  } else {
if (2 == a)
  for (var h = 0; h < n; h++)
    t[u + h] = e[s + h] + 256 - e[s + h - n] & 255;
if (3 == a) {
  for (var h = 0; h < i; h++)
    t[u + h] = e[s + h] + 256 - (e[s + h - n] >> 1) & 255;
  for (var h = i; h < n; h++)
    t[u + h] = e[s + h] + 256 - (e[s + h - n] + e[s + h - i] >> 1) & 255;
}
if (4 == a) {
  for (var h = 0; h < i; h++)
    t[u + h] = e[s + h] + 256 - c(0, e[s + h - n], 0) & 255;
  for (var h = i; h < n; h++)
    t[u + h] = e[s + h] + 256 - c(e[s + h - i], e[s + h - n], e[s + h - i - n]) & 255;
}
  }
}, o.crc = {
  table: function() {
for (var t = new Uint32Array(256), e = 0; e < 256; e++) {
  for (var r = e, n = 0; n < 8; n++)
    1 & r ? r = 3988292384 ^ r >>> 1 : r >>>= 1;
  t[e] = r;
}
return t;
  }(),
  update: function(t, e, r, n) {
for (var i = 0; i < n; i++)
  t = o.crc.table[(t ^ e[r + i]) & 255] ^ t >>> 8;
return t;
  },
  crc: function(t, e, r) {
return 4294967295 ^ o.crc.update(4294967295, t, e, r);
  }
}, o.quantize = function(t, e, r) {
  for (var n = [], i = 0, a = 0; a < t.length; a++)
n.push(o.encode.alphaMul(new Uint8Array(t[a]), r)), i += t[a].byteLength;
  for (var s = new Uint8Array(i), u = new Uint32Array(s.buffer), c = 0, a = 0; a < n.length; a++) {
for (var h = n[a], l = h.length, f = 0; f < l; f++)
  s[c + f] = h[f];
c += l;
  }
  var p = {
i0: 0,
i1: s.length,
bst: null,
est: null,
tdst: 0,
left: null,
right: null
  };
  p.bst = o.quantize.stats(s, p.i0, p.i1), p.est = o.quantize.estats(p.bst);
  for (var m = [p]; m.length < e;) {
for (var d = 0, v = 0, a = 0; a < m.length; a++)
  m[a].est.L > d && (d = m[a].est.L, v = a);
if (d < 0.001)
  break;
var g = m[v],
  b = o.quantize.splitPixels(s, u, g.i0, g.i1, g.est.e, g.est.eMq255),
  E = {
    i0: g.i0,
    i1: b,
    bst: null,
    est: null,
    tdst: 0,
    left: null,
    right: null
  };
E.bst = o.quantize.stats(s, E.i0, E.i1), E.est = o.quantize.estats(E.bst);
var y = {
  i0: b,
  i1: g.i1,
  bst: null,
  est: null,
  tdst: 0,
  left: null,
  right: null
};
y.bst = {
  R: [],
  m: [],
  N: g.bst.N - E.bst.N
};
for (var a = 0; a < 16; a++)
  y.bst.R[a] = g.bst.R[a] - E.bst.R[a];
for (var a = 0; a < 4; a++)
  y.bst.m[a] = g.bst.m[a] - E.bst.m[a];
y.est = o.quantize.estats(y.bst), g.left = E, g.right = y, m[v] = E, m.push(y);
  }
  m.sort(function(t, e) {
return e.bst.N - t.bst.N;
  });
  for (var T = 0; T < n.length; T++) {
for (var A = o.quantize.planeDst, _ = new Uint8Array(n[T].buffer), H = new Uint32Array(n[T].buffer), I = _.length, a = 0; a < I; a += 4) {
  for (var S = _[a] * (1 / 255), B = _[a + 1] * (1 / 255), N = _[a + 2] * (1 / 255), L = _[a + 3] * (1 / 255), R = p; R.left;)
    R = 0 >= A(R.est, S, B, N, L) ? R.left : R.right;
  H[a >> 2] = R.est.rgba;
}
n[T] = H.buffer;
  }
  return {
bufs: n,
plte: m
  };
}, o.quantize.getNearest = function(t, e, r, n, i) {
  if (null == t.left)
return t.tdst = o.quantize.dist(t.est.q, e, r, n, i), t;
  var a = o.quantize.planeDst(t.est, e, r, n, i),
s = t.left,
u = t.right;
  a > 0 && (s = t.right, u = t.left);
  var c = o.quantize.getNearest(s, e, r, n, i);
  if (c.tdst <= a * a)
return c;
  var h = o.quantize.getNearest(u, e, r, n, i);
  return h.tdst < c.tdst ? h : c;
}, o.quantize.planeDst = function(t, e, r, n, i) {
  var o = t.e;
  return o[0] * e + o[1] * r + o[2] * n + o[3] * i - t.eMq;
}, o.quantize.dist = function(t, e, r, n, i) {
  var o = e - t[0],
a = r - t[1],
s = n - t[2],
u = i - t[3];
  return o * o + a * a + s * s + u * u;
}, o.quantize.splitPixels = function(t, e, r, n, i, a) {
  var s = o.quantize.vecDot;
  for (n -= 4; r < n;) {
for (; s(t, r, i) <= a;)
  r += 4;
for (; s(t, n, i) > a;)
  n -= 4;
if (r >= n)
  break;
var u = e[r >> 2];
e[r >> 2] = e[n >> 2], e[n >> 2] = u, r += 4, n -= 4;
  }
  for (; s(t, r, i) > a;)
r -= 4;
  return r + 4;
}, o.quantize.vecDot = function(t, e, r) {
  return t[e] * r[0] + t[e + 1] * r[1] + t[e + 2] * r[2] + t[e + 3] * r[3];
}, o.quantize.stats = function(t, e, r) {
  for (var n = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
], i = [
  0,
  0,
  0,
  0
], o = e; o < r; o += 4) {
var a = t[o] * (1 / 255),
  s = t[o + 1] * (1 / 255),
  u = t[o + 2] * (1 / 255),
  c = t[o + 3] * (1 / 255);
i[0] += a, i[1] += s, i[2] += u, i[3] += c, n[0] += a * a, n[1] += a * s, n[2] += a * u, n[3] += a * c, n[5] += s * s, n[6] += s * u, n[7] += s * c, n[10] += u * u, n[11] += u * c, n[15] += c * c;
  }
  return n[4] = n[1], n[8] = n[2], n[12] = n[3], n[9] = n[6], n[13] = n[7], n[14] = n[11], {
R: n,
m: i,
N: r - e >> 2
  };
}, o.quantize.estats = function(t) {
  var e = t.R,
r = t.m,
n = t.N,
i = r[0],
a = r[1],
s = r[2],
u = r[3],
c = 0 == n ? 0 : 1 / n,
h = [
  e[0] - i * i * c,
  e[1] - i * a * c,
  e[2] - i * s * c,
  e[3] - i * u * c,
  e[4] - a * i * c,
  e[5] - a * a * c,
  e[6] - a * s * c,
  e[7] - a * u * c,
  e[8] - s * i * c,
  e[9] - s * a * c,
  e[10] - s * s * c,
  e[11] - s * u * c,
  e[12] - u * i * c,
  e[13] - u * a * c,
  e[14] - u * s * c,
  e[15] - u * u * c
],
l = o.M4,
f = [
  0.5,
  0.5,
  0.5,
  0.5
],
p = 0,
m = 0;
  if (0 != n)
for (var d = 0; d < 10 && (f = l.multVec(h, f), m = Math.sqrt(l.dot(f, f)), f = l.sml(1 / m, f), !(1e-9 > Math.abs(m - p))); d++) {
  ;
  p = m;
}
  var v = [
  i * c,
  a * c,
  s * c,
  u * c
],
g = l.dot(l.sml(255, v), f),
b = v[3] < 0.001 ? 0 : 1 / v[3];
  return {
Cov: h,
q: v,
e: f,
L: p,
eMq255: g,
eMq: l.dot(f, v),
rgba: (Math.round(255 * v[3]) << 24 | Math.round(255 * v[2] * b) << 16 | Math.round(255 * v[1] * b) << 8 | Math.round(255 * v[0] * b) << 0) >>> 0
  };
}, o.M4 = {
  multVec: function(t, e) {
return [
  t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3],
  t[4] * e[0] + t[5] * e[1] + t[6] * e[2] + t[7] * e[3],
  t[8] * e[0] + t[9] * e[1] + t[10] * e[2] + t[11] * e[3],
  t[12] * e[0] + t[13] * e[1] + t[14] * e[2] + t[15] * e[3]
];
  },
  dot: function(t, e) {
return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
  },
  sml: function(t, e) {
return [
  t * e[0],
  t * e[1],
  t * e[2],
  t * e[3]
];
  }
}, o.encode.alphaMul = function(t, e) {
  for (var r = new Uint8Array(t.length), n = t.length >> 2, i = 0; i < n; i++) {
var o = i << 2,
  a = t[o + 3];
e && (a = a < 128 ? 0 : 255);
var s = 1 / 255 * a;
r[o + 0] = t[o + 0] * s, r[o + 1] = t[o + 1] * s, r[o + 2] = t[o + 2] * s, r[o + 3] = a;
  }
  return r;
};