var r,
    i,
    a,
    s = n(754793);
function o(e) {
    for (var t = e.length; --t >= 0; ) e[t] = 0;
}
var l = 286,
    u = 2 * l + 1,
    c = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
    d = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
    f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
    _ = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    p = Array((l + 2) * 2);
o(p);
var h = Array(60);
o(h);
var m = Array(512);
o(m);
var g = Array(256);
o(g);
var E = Array(29);
o(E);
var v = Array(30);
function I(e, t, n, r, i) {
    (this.static_tree = e), (this.extra_bits = t), (this.extra_base = n), (this.elems = r), (this.max_length = i), (this.has_stree = e && e.length);
}
function T(e, t) {
    (this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = t);
}
function b(e) {
    return e < 256 ? m[e] : m[256 + (e >>> 7)];
}
function S(e, t) {
    (e.pending_buf[e.pending++] = 255 & t), (e.pending_buf[e.pending++] = (t >>> 8) & 255);
}
function y(e, t, n) {
    e.bi_valid > 16 - n ? ((e.bi_buf |= (t << e.bi_valid) & 65535), S(e, e.bi_buf), (e.bi_buf = t >> (16 - e.bi_valid)), (e.bi_valid += n - 16)) : ((e.bi_buf |= (t << e.bi_valid) & 65535), (e.bi_valid += n));
}
function A(e, t, n) {
    y(e, n[2 * t], n[2 * t + 1]);
}
function N(e, t) {
    var n = 0;
    do (n |= 1 & e), (e >>>= 1), (n <<= 1);
    while (--t > 0);
    return n >>> 1;
}
o(v);
function C(e, t, n) {
    var r,
        i,
        a = Array(16),
        s = 0;
    for (r = 1; r <= 15; r++) a[r] = s = (s + n[r - 1]) << 1;
    for (i = 0; i <= t; i++) {
        var o = e[2 * i + 1];
        if (0 !== o) e[2 * i] = N(a[o]++, o);
    }
}
function R(e) {
    var t;
    for (t = 0; t < l; t++) e.dyn_ltree[2 * t] = 0;
    for (t = 0; t < 30; t++) e.dyn_dtree[2 * t] = 0;
    for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0;
    (e.dyn_ltree[512] = 1), (e.opt_len = e.static_len = 0), (e.last_lit = e.matches = 0);
}
function O(e) {
    e.bi_valid > 8 ? S(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0);
}
function D(e, t, n, r) {
    var i = 2 * t,
        a = 2 * n;
    return e[i] < e[a] || (e[i] === e[a] && r[t] <= r[n]);
}
function L(e, t, n) {
    for (var r = e.heap[n], i = n << 1; i <= e.heap_len && (i < e.heap_len && D(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !D(t, r, e.heap[i], e.depth)); ) {
        (e.heap[n] = e.heap[i]), (n = i), (i <<= 1);
    }
    e.heap[n] = r;
}
function x(e, t, n) {
    var r,
        i,
        a,
        s,
        o = 0;
    if (0 !== e.last_lit)
        do (r = (e.pending_buf[e.d_buf + 2 * o] << 8) | e.pending_buf[e.d_buf + 2 * o + 1]), (i = e.pending_buf[e.l_buf + o]), o++, 0 === r ? A(e, i, t) : (A(e, (a = g[i]) + 256 + 1, t), 0 !== (s = c[a]) && y(e, (i -= E[a]), s), A(e, (a = b(--r)), n), 0 !== (s = d[a]) && y(e, (r -= v[a]), s));
        while (o < e.last_lit);
    A(e, 256, t);
}
function w(e, t) {
    var n,
        r,
        i,
        a = t.dyn_tree,
        s = t.stat_desc.static_tree,
        o = t.stat_desc.has_stree,
        l = t.stat_desc.elems,
        c = -1;
    for (n = 0, e.heap_len = 0, e.heap_max = u; n < l; n++) 0 !== a[2 * n] ? ((e.heap[++e.heap_len] = c = n), (e.depth[n] = 0)) : (a[2 * n + 1] = 0);
    for (; e.heap_len < 2; ) (a[2 * (i = e.heap[++e.heap_len] = c < 2 ? ++c : 0)] = 1), (e.depth[i] = 0), e.opt_len--, o && (e.static_len -= s[2 * i + 1]);
    for (t.max_code = c, n = e.heap_len >> 1; n >= 1; n--) L(e, a, n);
    i = l;
    do (n = e.heap[1]), (e.heap[1] = e.heap[e.heap_len--]), L(e, a, 1), (r = e.heap[1]), (e.heap[--e.heap_max] = n), (e.heap[--e.heap_max] = r), (a[2 * i] = a[2 * n] + a[2 * r]), (e.depth[i] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1), (a[2 * n + 1] = a[2 * r + 1] = i), (e.heap[1] = i++), L(e, a, 1);
    while (e.heap_len >= 2);
    (e.heap[--e.heap_max] = e.heap[1]),
        !(function (e, t) {
            var n,
                r,
                i,
                a,
                s,
                o,
                l = t.dyn_tree,
                c = t.max_code,
                d = t.stat_desc.static_tree,
                f = t.stat_desc.has_stree,
                _ = t.stat_desc.extra_bits,
                p = t.stat_desc.extra_base,
                h = t.stat_desc.max_length,
                m = 0;
            for (a = 0; a <= 15; a++) e.bl_count[a] = 0;
            for (l[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < u; n++) {
                if (((a = l[2 * l[2 * (r = e.heap[n]) + 1] + 1] + 1) > h && ((a = h), m++), (l[2 * r + 1] = a), !(r > c))) e.bl_count[a]++, (s = 0), r >= p && (s = _[r - p]), (o = l[2 * r]), (e.opt_len += o * (a + s)), f && (e.static_len += o * (d[2 * r + 1] + s));
            }
            if (0 !== m) {
                do {
                    for (a = h - 1; 0 === e.bl_count[a]; ) a--;
                    e.bl_count[a]--, (e.bl_count[a + 1] += 2), e.bl_count[h]--, (m -= 2);
                } while (m > 0);
                for (a = h; 0 !== a; a--)
                    for (r = e.bl_count[a]; 0 !== r; ) {
                        if (!((i = e.heap[--n]) > c)) l[2 * i + 1] !== a && ((e.opt_len += (a - l[2 * i + 1]) * l[2 * i]), (l[2 * i + 1] = a)), r--;
                    }
            }
        })(e, t),
        C(a, c, e.bl_count);
}
function P(e, t, n) {
    var r,
        i,
        a = -1,
        s = t[1],
        o = 0,
        l = 7,
        u = 4;
    for (0 === s && ((l = 138), (u = 3)), t[(n + 1) * 2 + 1] = 65535, r = 0; r <= n; r++) {
        if (((i = s), (s = t[(r + 1) * 2 + 1]), !(++o < l) || i !== s)) {
            o < u ? (e.bl_tree[2 * i] += o) : 0 !== i ? (i !== a && e.bl_tree[2 * i]++, e.bl_tree[32]++) : o <= 10 ? e.bl_tree[34]++ : e.bl_tree[36]++;
            (o = 0), (a = i), 0 === s ? ((l = 138), (u = 3)) : i === s ? ((l = 6), (u = 3)) : ((l = 7), (u = 4));
        }
    }
}
function M(e, t, n) {
    var r,
        i,
        a = -1,
        s = t[1],
        o = 0,
        l = 7,
        u = 4;
    for (0 === s && ((l = 138), (u = 3)), r = 0; r <= n; r++) {
        if (((i = s), (s = t[(r + 1) * 2 + 1]), !(++o < l) || i !== s)) {
            if (o < u)
                do A(e, i, e.bl_tree);
                while (0 != --o);
            else 0 !== i ? (i !== a && (A(e, i, e.bl_tree), o--), A(e, 16, e.bl_tree), y(e, o - 3, 2)) : o <= 10 ? (A(e, 17, e.bl_tree), y(e, o - 3, 3)) : (A(e, 18, e.bl_tree), y(e, o - 11, 7));
            (o = 0), (a = i), 0 === s ? ((l = 138), (u = 3)) : i === s ? ((l = 6), (u = 3)) : ((l = 7), (u = 4));
        }
    }
}
var k = !1;
function U(e, t, n, r) {
    var i, a, o, l;
    y(e, 0 + (r ? 1 : 0), 3), (i = e), (a = t), (o = n), (l = !0), O(i), l && (S(i, o), S(i, ~o)), s.arraySet(i.pending_buf, i.window, a, o, i.pending), (i.pending += o);
}
(t._tr_init = function (e) {
    !k &&
        (!(function () {
            var e,
                t,
                n,
                s,
                o,
                u = Array(16);
            for (s = 0, n = 0; s < 28; s++) for (e = 0, E[s] = n; e < 1 << c[s]; e++) g[n++] = s;
            for (g[n - 1] = s, o = 0, s = 0; s < 16; s++) for (e = 0, v[s] = o; e < 1 << d[s]; e++) m[o++] = s;
            for (o >>= 7; s < 30; s++) for (e = 0, v[s] = o << 7; e < 1 << (d[s] - 7); e++) m[256 + o++] = s;
            for (t = 0; t <= 15; t++) u[t] = 0;
            for (e = 0; e <= 143; ) (p[2 * e + 1] = 8), e++, u[8]++;
            for (; e <= 255; ) (p[2 * e + 1] = 9), e++, u[9]++;
            for (; e <= 279; ) (p[2 * e + 1] = 7), e++, u[7]++;
            for (; e <= 287; ) (p[2 * e + 1] = 8), e++, u[8]++;
            for (C(p, l + 1, u), e = 0; e < 30; e++) (h[2 * e + 1] = 5), (h[2 * e] = N(e, 5));
            (r = new I(p, c, 257, l, 15)), (i = new I(h, d, 0, 30, 15)), (a = new I([], f, 0, 19, 7));
        })(),
        (k = !0)),
        (e.l_desc = new T(e.dyn_ltree, r)),
        (e.d_desc = new T(e.dyn_dtree, i)),
        (e.bl_desc = new T(e.bl_tree, a)),
        (e.bi_buf = 0),
        (e.bi_valid = 0),
        R(e);
}),
    (t._tr_stored_block = U),
    (t._tr_flush_block = function (e, t, n, r) {
        var i,
            a,
            s = 0;
        e.level > 0
            ? (2 === e.strm.data_type &&
                  (e.strm.data_type = (function (e) {
                      var t,
                          n = 4093624447;
                      for (t = 0; t <= 31; t++, n >>>= 1) if (1 & n && 0 !== e.dyn_ltree[2 * t]) return 0;
                      if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return 1;
                      for (t = 32; t < 256; t++) if (0 !== e.dyn_ltree[2 * t]) return 1;
                      return 0;
                  })(e)),
              w(e, e.l_desc),
              w(e, e.d_desc),
              (s = (function (e) {
                  var t;
                  for (P(e, e.dyn_ltree, e.l_desc.max_code), P(e, e.dyn_dtree, e.d_desc.max_code), w(e, e.bl_desc), t = 18; t >= 3 && 0 === e.bl_tree[2 * _[t] + 1]; t--);
                  return (e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t;
              })(e)),
              (i = (e.opt_len + 3 + 7) >>> 3),
              (a = (e.static_len + 3 + 7) >>> 3) <= i && (i = a))
            : (i = a = n + 5),
            n + 4 <= i && -1 !== t
                ? U(e, t, n, r)
                : 4 === e.strategy || a === i
                  ? (y(e, 2 + (r ? 1 : 0), 3), x(e, p, h))
                  : (y(e, 4 + (r ? 1 : 0), 3),
                    !(function (e, t, n, r) {
                        var i;
                        for (y(e, t - 257, 5), y(e, n - 1, 5), y(e, r - 4, 4), i = 0; i < r; i++) y(e, e.bl_tree[2 * _[i] + 1], 3);
                        M(e, e.dyn_ltree, t - 1), M(e, e.dyn_dtree, n - 1);
                    })(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1),
                    x(e, e.dyn_ltree, e.dyn_dtree)),
            R(e),
            r && O(e);
    }),
    (t._tr_tally = function (e, t, n) {
        return (e.pending_buf[e.d_buf + 2 * e.last_lit] = (t >>> 8) & 255), (e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t), (e.pending_buf[e.l_buf + e.last_lit] = 255 & n), e.last_lit++, 0 === t ? e.dyn_ltree[2 * n]++ : (e.matches++, t--, e.dyn_ltree[(g[n] + 256 + 1) * 2]++, e.dyn_dtree[2 * b(t)]++), e.last_lit === e.lit_bufsize - 1;
    }),
    (t._tr_align = function (e) {
        var t;
        y(e, 2, 3), A(e, 256, p), 16 === (t = e).bi_valid ? (S(t, t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0)) : t.bi_valid >= 8 && ((t.pending_buf[t.pending++] = 255 & t.bi_buf), (t.bi_buf >>= 8), (t.bi_valid -= 8));
    });
