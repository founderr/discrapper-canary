var r,
    i,
    a,
    o = n(754793),
    s = 4,
    l = 0,
    u = 1,
    c = 2;
function d(e) {
    for (var t = e.length; --t >= 0; ) e[t] = 0;
}
var _ = 0,
    E = 1,
    f = 2,
    h = 3,
    p = 258,
    m = 29,
    I = 256,
    T = 286,
    g = 30,
    S = 19,
    A = 573,
    v = 15,
    N = 16,
    O = 7,
    R = 256,
    C = 16,
    y = 17,
    b = 18,
    L = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
    D = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
    M = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
    P = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    U = 512,
    w = Array(576);
d(w);
var x = Array(2 * g);
d(x);
var G = Array(U);
d(G);
var k = Array(p - h + 1);
d(k);
var B = Array(m);
d(B);
var F = Array(g);
function Z(e, t, n, r, i) {
    (this.static_tree = e), (this.extra_bits = t), (this.extra_base = n), (this.elems = r), (this.max_length = i), (this.has_stree = e && e.length);
}
function V(e, t) {
    (this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = t);
}
function H(e) {
    return e < 256 ? G[e] : G[256 + (e >>> 7)];
}
function Y(e, t) {
    (e.pending_buf[e.pending++] = 255 & t), (e.pending_buf[e.pending++] = (t >>> 8) & 255);
}
function j(e, t, n) {
    e.bi_valid > N - n ? ((e.bi_buf |= (t << e.bi_valid) & 65535), Y(e, e.bi_buf), (e.bi_buf = t >> (N - e.bi_valid)), (e.bi_valid += n - N)) : ((e.bi_buf |= (t << e.bi_valid) & 65535), (e.bi_valid += n));
}
function W(e, t, n) {
    j(e, n[2 * t], n[2 * t + 1]);
}
function K(e, t) {
    var n = 0;
    do (n |= 1 & e), (e >>>= 1), (n <<= 1);
    while (--t > 0);
    return n >>> 1;
}
function z(e) {
    16 === e.bi_valid ? (Y(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0)) : e.bi_valid >= 8 && ((e.pending_buf[e.pending++] = 255 & e.bi_buf), (e.bi_buf >>= 8), (e.bi_valid -= 8));
}
function q(e, t) {
    var n,
        r,
        i,
        a,
        o,
        s,
        l = t.dyn_tree,
        u = t.max_code,
        c = t.stat_desc.static_tree,
        d = t.stat_desc.has_stree,
        _ = t.stat_desc.extra_bits,
        E = t.stat_desc.extra_base,
        f = t.stat_desc.max_length,
        h = 0;
    for (a = 0; a <= v; a++) e.bl_count[a] = 0;
    for (l[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < A; n++) {
        if (((a = l[2 * l[2 * (r = e.heap[n]) + 1] + 1] + 1) > f && ((a = f), h++), (l[2 * r + 1] = a), !(r > u))) e.bl_count[a]++, (o = 0), r >= E && (o = _[r - E]), (s = l[2 * r]), (e.opt_len += s * (a + o)), d && (e.static_len += s * (c[2 * r + 1] + o));
    }
    if (0 !== h) {
        do {
            for (a = f - 1; 0 === e.bl_count[a]; ) a--;
            e.bl_count[a]--, (e.bl_count[a + 1] += 2), e.bl_count[f]--, (h -= 2);
        } while (h > 0);
        for (a = f; 0 !== a; a--)
            for (r = e.bl_count[a]; 0 !== r; ) {
                if (!((i = e.heap[--n]) > u)) l[2 * i + 1] !== a && ((e.opt_len += (a - l[2 * i + 1]) * l[2 * i]), (l[2 * i + 1] = a)), r--;
            }
    }
}
function Q(e, t, n) {
    var r,
        i,
        a = Array(v + 1),
        o = 0;
    for (r = 1; r <= v; r++) a[r] = o = (o + n[r - 1]) << 1;
    for (i = 0; i <= t; i++) {
        var s = e[2 * i + 1];
        if (0 !== s) e[2 * i] = K(a[s]++, s);
    }
}
function X() {
    var e,
        t,
        n,
        o,
        s,
        l = Array(v + 1);
    for (o = 0, n = 0; o < m - 1; o++) for (e = 0, B[o] = n; e < 1 << L[o]; e++) k[n++] = o;
    for (k[n - 1] = o, s = 0, o = 0; o < 16; o++) for (e = 0, F[o] = s; e < 1 << D[o]; e++) G[s++] = o;
    for (s >>= 7; o < g; o++) for (e = 0, F[o] = s << 7; e < 1 << (D[o] - 7); e++) G[256 + s++] = o;
    for (t = 0; t <= v; t++) l[t] = 0;
    for (e = 0; e <= 143; ) (w[2 * e + 1] = 8), e++, l[8]++;
    for (; e <= 255; ) (w[2 * e + 1] = 9), e++, l[9]++;
    for (; e <= 279; ) (w[2 * e + 1] = 7), e++, l[7]++;
    for (; e <= 287; ) (w[2 * e + 1] = 8), e++, l[8]++;
    for (Q(w, T + 1, l), e = 0; e < g; e++) (x[2 * e + 1] = 5), (x[2 * e] = K(e, 5));
    (r = new Z(w, L, I + 1, T, v)), (i = new Z(x, D, 0, g, v)), (a = new Z([], M, 0, S, O));
}
function $(e) {
    var t;
    for (t = 0; t < T; t++) e.dyn_ltree[2 * t] = 0;
    for (t = 0; t < g; t++) e.dyn_dtree[2 * t] = 0;
    for (t = 0; t < S; t++) e.bl_tree[2 * t] = 0;
    (e.dyn_ltree[2 * R] = 1), (e.opt_len = e.static_len = 0), (e.last_lit = e.matches = 0);
}
function J(e) {
    e.bi_valid > 8 ? Y(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0);
}
function ee(e, t, n, r) {
    J(e), r && (Y(e, n), Y(e, ~n)), o.arraySet(e.pending_buf, e.window, t, n, e.pending), (e.pending += n);
}
function et(e, t, n, r) {
    var i = 2 * t,
        a = 2 * n;
    return e[i] < e[a] || (e[i] === e[a] && r[t] <= r[n]);
}
function en(e, t, n) {
    for (var r = e.heap[n], i = n << 1; i <= e.heap_len && (i < e.heap_len && et(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !et(t, r, e.heap[i], e.depth)); ) {
        (e.heap[n] = e.heap[i]), (n = i), (i <<= 1);
    }
    e.heap[n] = r;
}
function er(e, t, n) {
    var r,
        i,
        a,
        o,
        s = 0;
    if (0 !== e.last_lit)
        do (r = (e.pending_buf[e.d_buf + 2 * s] << 8) | e.pending_buf[e.d_buf + 2 * s + 1]), (i = e.pending_buf[e.l_buf + s]), s++, 0 === r ? W(e, i, t) : (W(e, (a = k[i]) + I + 1, t), 0 !== (o = L[a]) && j(e, (i -= B[a]), o), W(e, (a = H(--r)), n), 0 !== (o = D[a]) && j(e, (r -= F[a]), o));
        while (s < e.last_lit);
    W(e, R, t);
}
function ei(e, t) {
    var n,
        r,
        i,
        a = t.dyn_tree,
        o = t.stat_desc.static_tree,
        s = t.stat_desc.has_stree,
        l = t.stat_desc.elems,
        u = -1;
    for (n = 0, e.heap_len = 0, e.heap_max = A; n < l; n++) 0 !== a[2 * n] ? ((e.heap[++e.heap_len] = u = n), (e.depth[n] = 0)) : (a[2 * n + 1] = 0);
    for (; e.heap_len < 2; ) (a[2 * (i = e.heap[++e.heap_len] = u < 2 ? ++u : 0)] = 1), (e.depth[i] = 0), e.opt_len--, s && (e.static_len -= o[2 * i + 1]);
    for (t.max_code = u, n = e.heap_len >> 1; n >= 1; n--) en(e, a, n);
    i = l;
    do (n = e.heap[1]), (e.heap[1] = e.heap[e.heap_len--]), en(e, a, 1), (r = e.heap[1]), (e.heap[--e.heap_max] = n), (e.heap[--e.heap_max] = r), (a[2 * i] = a[2 * n] + a[2 * r]), (e.depth[i] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1), (a[2 * n + 1] = a[2 * r + 1] = i), (e.heap[1] = i++), en(e, a, 1);
    while (e.heap_len >= 2);
    (e.heap[--e.heap_max] = e.heap[1]), q(e, t), Q(a, u, e.bl_count);
}
function ea(e, t, n) {
    var r,
        i,
        a = -1,
        o = t[1],
        s = 0,
        l = 7,
        u = 4;
    for (0 === o && ((l = 138), (u = 3)), t[(n + 1) * 2 + 1] = 65535, r = 0; r <= n; r++) {
        if (((i = o), (o = t[(r + 1) * 2 + 1]), !(++s < l) || i !== o)) {
            s < u ? (e.bl_tree[2 * i] += s) : 0 !== i ? (i !== a && e.bl_tree[2 * i]++, e.bl_tree[2 * C]++) : s <= 10 ? e.bl_tree[2 * y]++ : e.bl_tree[2 * b]++;
            (s = 0), (a = i), 0 === o ? ((l = 138), (u = 3)) : i === o ? ((l = 6), (u = 3)) : ((l = 7), (u = 4));
        }
    }
}
function eo(e, t, n) {
    var r,
        i,
        a = -1,
        o = t[1],
        s = 0,
        l = 7,
        u = 4;
    for (0 === o && ((l = 138), (u = 3)), r = 0; r <= n; r++) {
        if (((i = o), (o = t[(r + 1) * 2 + 1]), !(++s < l) || i !== o)) {
            if (s < u)
                do W(e, i, e.bl_tree);
                while (0 != --s);
            else 0 !== i ? (i !== a && (W(e, i, e.bl_tree), s--), W(e, C, e.bl_tree), j(e, s - 3, 2)) : s <= 10 ? (W(e, y, e.bl_tree), j(e, s - 3, 3)) : (W(e, b, e.bl_tree), j(e, s - 11, 7));
            (s = 0), (a = i), 0 === o ? ((l = 138), (u = 3)) : i === o ? ((l = 6), (u = 3)) : ((l = 7), (u = 4));
        }
    }
}
function es(e) {
    var t;
    for (ea(e, e.dyn_ltree, e.l_desc.max_code), ea(e, e.dyn_dtree, e.d_desc.max_code), ei(e, e.bl_desc), t = S - 1; t >= 3 && 0 === e.bl_tree[2 * P[t] + 1]; t--);
    return (e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t;
}
function el(e, t, n, r) {
    var i;
    for (j(e, t - 257, 5), j(e, n - 1, 5), j(e, r - 4, 4), i = 0; i < r; i++) j(e, e.bl_tree[2 * P[i] + 1], 3);
    eo(e, e.dyn_ltree, t - 1), eo(e, e.dyn_dtree, n - 1);
}
function eu(e) {
    var t,
        n = 4093624447;
    for (t = 0; t <= 31; t++, n >>>= 1) if (1 & n && 0 !== e.dyn_ltree[2 * t]) return l;
    if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return u;
    for (t = 32; t < I; t++) if (0 !== e.dyn_ltree[2 * t]) return u;
    return l;
}
d(F);
var ec = !1;
function ed(e) {
    !ec && (X(), (ec = !0)), (e.l_desc = new V(e.dyn_ltree, r)), (e.d_desc = new V(e.dyn_dtree, i)), (e.bl_desc = new V(e.bl_tree, a)), (e.bi_buf = 0), (e.bi_valid = 0), $(e);
}
function e_(e, t, n, r) {
    j(e, (_ << 1) + (r ? 1 : 0), 3), ee(e, t, n, !0);
}
function eE(e) {
    j(e, E << 1, 3), W(e, R, w), z(e);
}
function ef(e, t, n, r) {
    var i,
        a,
        o = 0;
    e.level > 0 ? (e.strm.data_type === c && (e.strm.data_type = eu(e)), ei(e, e.l_desc), ei(e, e.d_desc), (o = es(e)), (i = (e.opt_len + 3 + 7) >>> 3), (a = (e.static_len + 3 + 7) >>> 3) <= i && (i = a)) : (i = a = n + 5), n + 4 <= i && -1 !== t ? e_(e, t, n, r) : e.strategy === s || a === i ? (j(e, (E << 1) + (r ? 1 : 0), 3), er(e, w, x)) : (j(e, (f << 1) + (r ? 1 : 0), 3), el(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, o + 1), er(e, e.dyn_ltree, e.dyn_dtree)), $(e), r && J(e);
}
function eh(e, t, n) {
    return (e.pending_buf[e.d_buf + 2 * e.last_lit] = (t >>> 8) & 255), (e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t), (e.pending_buf[e.l_buf + e.last_lit] = 255 & n), e.last_lit++, 0 === t ? e.dyn_ltree[2 * n]++ : (e.matches++, t--, e.dyn_ltree[(k[n] + I + 1) * 2]++, e.dyn_dtree[2 * H(t)]++), e.last_lit === e.lit_bufsize - 1;
}
(t._tr_init = ed), (t._tr_stored_block = e_), (t._tr_flush_block = ef), (t._tr_tally = eh), (t._tr_align = eE);
