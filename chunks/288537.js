var r,
    i = n(754793),
    a = n(831868),
    o = n(660694),
    s = n(899203),
    l = n(441234),
    u = 0,
    c = 1,
    d = 3,
    _ = 4,
    E = 5,
    f = 0,
    h = 1,
    p = -2,
    m = -3,
    I = -5,
    T = -1,
    g = 1,
    S = 2,
    A = 3,
    v = 4,
    N = 0,
    O = 2,
    R = 8,
    C = 9,
    y = 15,
    b = 8,
    L = 286,
    D = 30,
    M = 19,
    P = 573,
    U = 15,
    w = 3,
    x = 258,
    G = 262,
    k = 32,
    B = 42,
    F = 69,
    Z = 73,
    V = 91,
    H = 103,
    Y = 113,
    j = 666,
    W = 1,
    K = 2,
    z = 3,
    q = 4,
    Q = 3;
function X(e, t) {
    return (e.msg = l[t]), t;
}
function $(e) {
    return (e << 1) - (e > 4 ? 9 : 0);
}
function J(e) {
    for (var t = e.length; --t >= 0; ) e[t] = 0;
}
function ee(e) {
    var t = e.state,
        n = t.pending;
    if ((n > e.avail_out && (n = e.avail_out), 0 !== n)) i.arraySet(e.output, t.pending_buf, t.pending_out, n, e.next_out), (e.next_out += n), (t.pending_out += n), (e.total_out += n), (e.avail_out -= n), (t.pending -= n), 0 === t.pending && (t.pending_out = 0);
}
function et(e, t) {
    a._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t), (e.block_start = e.strstart), ee(e.strm);
}
function en(e, t) {
    e.pending_buf[e.pending++] = t;
}
function er(e, t) {
    (e.pending_buf[e.pending++] = (t >>> 8) & 255), (e.pending_buf[e.pending++] = 255 & t);
}
function ei(e, t, n, r) {
    var a = e.avail_in;
    return (a > r && (a = r), 0 === a) ? 0 : ((e.avail_in -= a), i.arraySet(t, e.input, e.next_in, a, n), 1 === e.state.wrap ? (e.adler = o(e.adler, t, a, n)) : 2 === e.state.wrap && (e.adler = s(e.adler, t, a, n)), (e.next_in += a), (e.total_in += a), a);
}
function ea(e, t) {
    var n,
        r,
        i = e.max_chain_length,
        a = e.strstart,
        o = e.prev_length,
        s = e.nice_match,
        l = e.strstart > e.w_size - G ? e.strstart - (e.w_size - G) : 0,
        u = e.window,
        c = e.w_mask,
        d = e.prev,
        _ = e.strstart + x,
        E = u[a + o - 1],
        f = u[a + o];
    e.prev_length >= e.good_match && (i >>= 2), s > e.lookahead && (s = e.lookahead);
    do {
        if (u[(n = t) + o] !== f || u[n + o - 1] !== E || u[n] !== u[a] || u[++n] !== u[a + 1]) continue;
        (a += 2), n++;
        do;
        while (u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && a < _);
        if (((r = x - (_ - a)), (a = _ - x), r > o)) {
            if (((e.match_start = t), (o = r), r >= s)) break;
            (E = u[a + o - 1]), (f = u[a + o]);
        }
    } while ((t = d[t & c]) > l && 0 != --i);
    return o <= e.lookahead ? o : e.lookahead;
}
function eo(e) {
    var t,
        n,
        r,
        a,
        o,
        s = e.w_size;
    do {
        if (((a = e.window_size - e.lookahead - e.strstart), e.strstart >= s + (s - G))) {
            i.arraySet(e.window, e.window, s, s, 0), (e.match_start -= s), (e.strstart -= s), (e.block_start -= s), (t = n = e.hash_size);
            do (r = e.head[--t]), (e.head[t] = r >= s ? r - s : 0);
            while (--n);
            t = n = s;
            do (r = e.prev[--t]), (e.prev[t] = r >= s ? r - s : 0);
            while (--n);
            a += s;
        }
        if (0 === e.strm.avail_in) break;
        if (((n = ei(e.strm, e.window, e.strstart + e.lookahead, a)), (e.lookahead += n), e.lookahead + e.insert >= w)) for (o = e.strstart - e.insert, e.ins_h = e.window[o], e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[o + 1]) & e.hash_mask; e.insert && ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[o + w - 1]) & e.hash_mask), (e.prev[o & e.w_mask] = e.head[e.ins_h]), (e.head[e.ins_h] = o), o++, e.insert--, !(e.lookahead + e.insert < w)); );
    } while (e.lookahead < G && 0 !== e.strm.avail_in);
}
function es(e, t) {
    for (var n, r; ; ) {
        if (e.lookahead < G) {
            if ((eo(e), e.lookahead < G && t === u)) return W;
            if (0 === e.lookahead) break;
        }
        if (((n = 0), e.lookahead >= w && ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + w - 1]) & e.hash_mask), (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]), (e.head[e.ins_h] = e.strstart)), 0 !== n && e.strstart - n <= e.w_size - G && (e.match_length = ea(e, n)), e.match_length >= w)) {
            if (((r = a._tr_tally(e, e.strstart - e.match_start, e.match_length - w)), (e.lookahead -= e.match_length), e.match_length <= e.max_lazy_match && e.lookahead >= w)) {
                e.match_length--;
                do e.strstart++, (e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + w - 1]) & e.hash_mask), (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]), (e.head[e.ins_h] = e.strstart);
                while (0 != --e.match_length);
                e.strstart++;
            } else (e.strstart += e.match_length), (e.match_length = 0), (e.ins_h = e.window[e.strstart]), (e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 1]) & e.hash_mask);
        } else (r = a._tr_tally(e, 0, e.window[e.strstart])), e.lookahead--, e.strstart++;
        if (r && (et(e, !1), 0 === e.strm.avail_out)) return W;
    }
    if (((e.insert = e.strstart < w - 1 ? e.strstart : w - 1), t === _)) return (et(e, !0), 0 === e.strm.avail_out) ? z : q;
    return e.last_lit && (et(e, !1), 0 === e.strm.avail_out) ? W : K;
}
function el(e, t) {
    for (var n, r, i; ; ) {
        if (e.lookahead < G) {
            if ((eo(e), e.lookahead < G && t === u)) return W;
            if (0 === e.lookahead) break;
        }
        if (((n = 0), e.lookahead >= w && ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + w - 1]) & e.hash_mask), (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]), (e.head[e.ins_h] = e.strstart)), (e.prev_length = e.match_length), (e.prev_match = e.match_start), (e.match_length = w - 1), 0 !== n && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - G && ((e.match_length = ea(e, n)), e.match_length <= 5 && (e.strategy === g || (e.match_length === w && e.strstart - e.match_start > 4096)) && (e.match_length = w - 1)), e.prev_length >= w && e.match_length <= e.prev_length)) {
            (i = e.strstart + e.lookahead - w), (r = a._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - w)), (e.lookahead -= e.prev_length - 1), (e.prev_length -= 2);
            do ++e.strstart <= i && ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + w - 1]) & e.hash_mask), (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]), (e.head[e.ins_h] = e.strstart));
            while (0 != --e.prev_length);
            if (((e.match_available = 0), (e.match_length = w - 1), e.strstart++, r && (et(e, !1), 0 === e.strm.avail_out))) return W;
        } else if (e.match_available) {
            if (((r = a._tr_tally(e, 0, e.window[e.strstart - 1])) && et(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out)) return W;
        } else (e.match_available = 1), e.strstart++, e.lookahead--;
    }
    if ((e.match_available && ((r = a._tr_tally(e, 0, e.window[e.strstart - 1])), (e.match_available = 0)), (e.insert = e.strstart < w - 1 ? e.strstart : w - 1), t === _)) return (et(e, !0), 0 === e.strm.avail_out) ? z : q;
    return e.last_lit && (et(e, !1), 0 === e.strm.avail_out) ? W : K;
}
function eu(e, t) {
    for (var n, r, i, o, s = e.window; ; ) {
        if (e.lookahead <= x) {
            if ((eo(e), e.lookahead <= x && t === u)) return W;
            if (0 === e.lookahead) break;
        }
        if (((e.match_length = 0), e.lookahead >= w && e.strstart > 0 && (r = s[(i = e.strstart - 1)]) === s[++i] && r === s[++i] && r === s[++i])) {
            o = e.strstart + x;
            do;
            while (r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && i < o);
            (e.match_length = x - (o - i)), e.match_length > e.lookahead && (e.match_length = e.lookahead);
        }
        if ((e.match_length >= w ? ((n = a._tr_tally(e, 1, e.match_length - w)), (e.lookahead -= e.match_length), (e.strstart += e.match_length), (e.match_length = 0)) : ((n = a._tr_tally(e, 0, e.window[e.strstart])), e.lookahead--, e.strstart++), n && (et(e, !1), 0 === e.strm.avail_out))) return W;
    }
    if (((e.insert = 0), t === _)) return (et(e, !0), 0 === e.strm.avail_out) ? z : q;
    return e.last_lit && (et(e, !1), 0 === e.strm.avail_out) ? W : K;
}
function ec(e, t) {
    for (var n; ; ) {
        if (0 === e.lookahead && (eo(e), 0 === e.lookahead)) {
            if (t === u) return W;
            break;
        }
        if (((e.match_length = 0), (n = a._tr_tally(e, 0, e.window[e.strstart])), e.lookahead--, e.strstart++, n && (et(e, !1), 0 === e.strm.avail_out))) return W;
    }
    if (((e.insert = 0), t === _)) return (et(e, !0), 0 === e.strm.avail_out) ? z : q;
    return e.last_lit && (et(e, !1), 0 === e.strm.avail_out) ? W : K;
}
function ed(e, t, n, r, i) {
    (this.good_length = e), (this.max_lazy = t), (this.nice_length = n), (this.max_chain = r), (this.func = i);
}
function e_(e) {
    (e.window_size = 2 * e.w_size), J(e.head), (e.max_lazy_match = r[e.level].max_lazy), (e.good_match = r[e.level].good_length), (e.nice_match = r[e.level].nice_length), (e.max_chain_length = r[e.level].max_chain), (e.strstart = 0), (e.block_start = 0), (e.lookahead = 0), (e.insert = 0), (e.match_length = e.prev_length = w - 1), (e.match_available = 0), (e.ins_h = 0);
}
function eE() {
    (this.strm = null), (this.status = 0), (this.pending_buf = null), (this.pending_buf_size = 0), (this.pending_out = 0), (this.pending = 0), (this.wrap = 0), (this.gzhead = null), (this.gzindex = 0), (this.method = R), (this.last_flush = -1), (this.w_size = 0), (this.w_bits = 0), (this.w_mask = 0), (this.window = null), (this.window_size = 0), (this.prev = null), (this.head = null), (this.ins_h = 0), (this.hash_size = 0), (this.hash_bits = 0), (this.hash_mask = 0), (this.hash_shift = 0), (this.block_start = 0), (this.match_length = 0), (this.prev_match = 0), (this.match_available = 0), (this.strstart = 0), (this.match_start = 0), (this.lookahead = 0), (this.prev_length = 0), (this.max_chain_length = 0), (this.max_lazy_match = 0), (this.level = 0), (this.strategy = 0), (this.good_match = 0), (this.nice_match = 0), (this.dyn_ltree = new i.Buf16(2 * P)), (this.dyn_dtree = new i.Buf16((2 * D + 1) * 2)), (this.bl_tree = new i.Buf16((2 * M + 1) * 2)), J(this.dyn_ltree), J(this.dyn_dtree), J(this.bl_tree), (this.l_desc = null), (this.d_desc = null), (this.bl_desc = null), (this.bl_count = new i.Buf16(U + 1)), (this.heap = new i.Buf16(2 * L + 1)), J(this.heap), (this.heap_len = 0), (this.heap_max = 0), (this.depth = new i.Buf16(2 * L + 1)), J(this.depth), (this.l_buf = 0), (this.lit_bufsize = 0), (this.last_lit = 0), (this.d_buf = 0), (this.opt_len = 0), (this.static_len = 0), (this.matches = 0), (this.insert = 0), (this.bi_buf = 0), (this.bi_valid = 0);
}
function ef(e) {
    var t;
    return e && e.state ? ((e.total_in = e.total_out = 0), (e.data_type = O), ((t = e.state).pending = 0), (t.pending_out = 0), t.wrap < 0 && (t.wrap = -t.wrap), (t.status = t.wrap ? B : Y), (e.adler = 2 === t.wrap ? 0 : 1), (t.last_flush = u), a._tr_init(t), f) : X(e, p);
}
function eh(e) {
    var t = ef(e);
    return t === f && e_(e.state), t;
}
function ep(e, t) {
    return e && e.state && 2 === e.state.wrap ? ((e.state.gzhead = t), f) : p;
}
function em(e, t, n, r, a, o) {
    if (!e) return p;
    var s = 1;
    if ((t === T && (t = 6), r < 0 ? ((s = 0), (r = -r)) : r > 15 && ((s = 2), (r -= 16)), a < 1 || a > C || n !== R || r < 8 || r > 15 || t < 0 || t > 9 || o < 0 || o > v)) return X(e, p);
    8 === r && (r = 9);
    var l = new eE();
    return (e.state = l), (l.strm = e), (l.wrap = s), (l.gzhead = null), (l.w_bits = r), (l.w_size = 1 << l.w_bits), (l.w_mask = l.w_size - 1), (l.hash_bits = a + 7), (l.hash_size = 1 << l.hash_bits), (l.hash_mask = l.hash_size - 1), (l.hash_shift = ~~((l.hash_bits + w - 1) / w)), (l.window = new i.Buf8(2 * l.w_size)), (l.head = new i.Buf16(l.hash_size)), (l.prev = new i.Buf16(l.w_size)), (l.lit_bufsize = 1 << (a + 6)), (l.pending_buf_size = 4 * l.lit_bufsize), (l.pending_buf = new i.Buf8(l.pending_buf_size)), (l.d_buf = 1 * l.lit_bufsize), (l.l_buf = 3 * l.lit_bufsize), (l.level = t), (l.strategy = o), (l.method = n), eh(e);
}
function eI(e, t) {
    return em(e, t, R, y, b, N);
}
function eT(e, t) {
    if (!e || !e.state || t > E || t < 0) return e ? X(e, p) : p;
    if (((i = e.state), !e.output || (!e.input && 0 !== e.avail_in) || (i.status === j && t !== _))) return X(e, 0 === e.avail_out ? I : p);
    if (((i.strm = e), (n = i.last_flush), (i.last_flush = t), i.status === B)) {
        if (2 === i.wrap) (e.adler = 0), en(i, 31), en(i, 139), en(i, 8), i.gzhead ? (en(i, (i.gzhead.text ? 1 : 0) + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0)), en(i, 255 & i.gzhead.time), en(i, (i.gzhead.time >> 8) & 255), en(i, (i.gzhead.time >> 16) & 255), en(i, (i.gzhead.time >> 24) & 255), en(i, 9 === i.level ? 2 : i.strategy >= S || i.level < 2 ? 4 : 0), en(i, 255 & i.gzhead.os), i.gzhead.extra && i.gzhead.extra.length && (en(i, 255 & i.gzhead.extra.length), en(i, (i.gzhead.extra.length >> 8) & 255)), i.gzhead.hcrc && (e.adler = s(e.adler, i.pending_buf, i.pending, 0)), (i.gzindex = 0), (i.status = F)) : (en(i, 0), en(i, 0), en(i, 0), en(i, 0), en(i, 0), en(i, 9 === i.level ? 2 : i.strategy >= S || i.level < 2 ? 4 : 0), en(i, Q), (i.status = Y));
        else {
            var n,
                i,
                o,
                l,
                m = (R + ((i.w_bits - 8) << 4)) << 8,
                T = -1;
            (m |= (T = i.strategy >= S || i.level < 2 ? 0 : i.level < 6 ? 1 : 6 === i.level ? 2 : 3) << 6), 0 !== i.strstart && (m |= k), (m += 31 - (m % 31)), (i.status = Y), er(i, m), 0 !== i.strstart && (er(i, e.adler >>> 16), er(i, 65535 & e.adler)), (e.adler = 1);
        }
    }
    if (i.status === F) {
        if (i.gzhead.extra) {
            for (o = i.pending; i.gzindex < (65535 & i.gzhead.extra.length) && (i.pending !== i.pending_buf_size || (i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), ee(e), (o = i.pending), i.pending !== i.pending_buf_size)); ) {
                en(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++;
            }
            i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), i.gzindex === i.gzhead.extra.length && ((i.gzindex = 0), (i.status = Z));
        } else i.status = Z;
    }
    if (i.status === Z) {
        if (i.gzhead.name) {
            o = i.pending;
            do {
                if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), ee(e), (o = i.pending), i.pending === i.pending_buf_size)) {
                    l = 1;
                    break;
                }
                (l = i.gzindex < i.gzhead.name.length ? 255 & i.gzhead.name.charCodeAt(i.gzindex++) : 0), en(i, l);
            } while (0 !== l);
            i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), 0 === l && ((i.gzindex = 0), (i.status = V));
        } else i.status = V;
    }
    if (i.status === V) {
        if (i.gzhead.comment) {
            o = i.pending;
            do {
                if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), ee(e), (o = i.pending), i.pending === i.pending_buf_size)) {
                    l = 1;
                    break;
                }
                (l = i.gzindex < i.gzhead.comment.length ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++) : 0), en(i, l);
            } while (0 !== l);
            i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), 0 === l && (i.status = H);
        } else i.status = H;
    }
    if ((i.status === H && (i.gzhead.hcrc ? (i.pending + 2 > i.pending_buf_size && ee(e), i.pending + 2 <= i.pending_buf_size && (en(i, 255 & e.adler), en(i, (e.adler >> 8) & 255), (e.adler = 0), (i.status = Y))) : (i.status = Y)), 0 !== i.pending)) {
        if ((ee(e), 0 === e.avail_out)) return (i.last_flush = -1), f;
    } else if (0 === e.avail_in && $(t) <= $(n) && t !== _) return X(e, I);
    if (i.status === j && 0 !== e.avail_in) return X(e, I);
    if (0 !== e.avail_in || 0 !== i.lookahead || (t !== u && i.status !== j)) {
        var g = i.strategy === S ? ec(i, t) : i.strategy === A ? eu(i, t) : r[i.level].func(i, t);
        if (((g === z || g === q) && (i.status = j), g === W || g === z)) return 0 === e.avail_out && (i.last_flush = -1), f;
        if (g === K && (t === c ? a._tr_align(i) : t !== E && (a._tr_stored_block(i, 0, 0, !1), t === d && (J(i.head), 0 === i.lookahead && ((i.strstart = 0), (i.block_start = 0), (i.insert = 0)))), ee(e), 0 === e.avail_out)) return (i.last_flush = -1), f;
    }
    return t !== _ ? f : i.wrap <= 0 ? h : (2 === i.wrap ? (en(i, 255 & e.adler), en(i, (e.adler >> 8) & 255), en(i, (e.adler >> 16) & 255), en(i, (e.adler >> 24) & 255), en(i, 255 & e.total_in), en(i, (e.total_in >> 8) & 255), en(i, (e.total_in >> 16) & 255), en(i, (e.total_in >> 24) & 255)) : (er(i, e.adler >>> 16), er(i, 65535 & e.adler)), ee(e), i.wrap > 0 && (i.wrap = -i.wrap), 0 !== i.pending ? f : h);
}
function eg(e) {
    var t;
    return e && e.state ? ((t = e.state.status) !== B && t !== F && t !== Z && t !== V && t !== H && t !== Y && t !== j ? X(e, p) : ((e.state = null), t === Y ? X(e, m) : f)) : p;
}
function eS(e, t) {
    var n,
        r,
        a,
        s,
        l,
        u,
        c,
        d,
        _ = t.length;
    if (!e || !e.state || 2 === (s = (n = e.state).wrap) || (1 === s && n.status !== B) || n.lookahead) return p;
    for (1 === s && (e.adler = o(e.adler, t, _, 0)), n.wrap = 0, _ >= n.w_size && (0 === s && (J(n.head), (n.strstart = 0), (n.block_start = 0), (n.insert = 0)), (d = new i.Buf8(n.w_size)), i.arraySet(d, t, _ - n.w_size, n.w_size, 0), (t = d), (_ = n.w_size)), l = e.avail_in, u = e.next_in, c = e.input, e.avail_in = _, e.next_in = 0, e.input = t, eo(n); n.lookahead >= w; ) {
        (r = n.strstart), (a = n.lookahead - (w - 1));
        do (n.ins_h = ((n.ins_h << n.hash_shift) ^ n.window[r + w - 1]) & n.hash_mask), (n.prev[r & n.w_mask] = n.head[n.ins_h]), (n.head[n.ins_h] = r), r++;
        while (--a);
        (n.strstart = r), (n.lookahead = w - 1), eo(n);
    }
    return (n.strstart += n.lookahead), (n.block_start = n.strstart), (n.insert = n.lookahead), (n.lookahead = 0), (n.match_length = n.prev_length = w - 1), (n.match_available = 0), (e.next_in = u), (e.input = c), (e.avail_in = l), (n.wrap = s), f;
}
(r = [
    new ed(0, 0, 0, 0, function e(e, t) {
        var n = 65535;
        for (65535 > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5); ; ) {
            if (e.lookahead <= 1) {
                if ((eo(e), 0 === e.lookahead && t === u)) return W;
                if (0 === e.lookahead) break;
            }
            (e.strstart += e.lookahead), (e.lookahead = 0);
            var r = e.block_start + n;
            if (((0 === e.strstart || e.strstart >= r) && ((e.lookahead = e.strstart - r), (e.strstart = r), et(e, !1), 0 === e.strm.avail_out)) || (e.strstart - e.block_start >= e.w_size - G && (et(e, !1), 0 === e.strm.avail_out))) return W;
        }
        if (((e.insert = 0), t === _)) return (et(e, !0), 0 === e.strm.avail_out) ? z : q;
        return e.strstart > e.block_start && (et(e, !1), e.strm.avail_out), W;
    }),
    new ed(4, 4, 8, 4, es),
    new ed(4, 5, 16, 8, es),
    new ed(4, 6, 32, 32, es),
    new ed(4, 4, 16, 16, el),
    new ed(8, 16, 32, 32, el),
    new ed(8, 16, 128, 128, el),
    new ed(8, 32, 128, 256, el),
    new ed(32, 128, 258, 1024, el),
    new ed(32, 258, 258, 4096, el)
]),
    (t.deflateInit = eI),
    (t.deflateInit2 = em),
    (t.deflateReset = eh),
    (t.deflateResetKeep = ef),
    (t.deflateSetHeader = ep),
    (t.deflate = eT),
    (t.deflateEnd = eg),
    (t.deflateSetDictionary = eS),
    (t.deflateInfo = 'pako deflate (from Nodeca project)');
