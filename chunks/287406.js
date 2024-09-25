var r = n(288537),
    i = n(754793),
    a = n(911725),
    o = n(441234),
    s = n(404625),
    l = Object.prototype.toString,
    u = 0,
    c = 4,
    d = 0,
    _ = 1,
    E = 2,
    f = -1,
    h = 0,
    p = 8;
function m(e) {
    if (!(this instanceof m)) return new m(e);
    this.options = i.assign(
        {
            level: f,
            method: p,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: h,
            to: ''
        },
        e || {}
    );
    var t,
        n = this.options;
    n.raw && n.windowBits > 0 ? (n.windowBits = -n.windowBits) : n.gzip && n.windowBits > 0 && n.windowBits < 16 && (n.windowBits += 16), (this.err = 0), (this.msg = ''), (this.ended = !1), (this.chunks = []), (this.strm = new s()), (this.strm.avail_out = 0);
    var u = r.deflateInit2(this.strm, n.level, n.method, n.windowBits, n.memLevel, n.strategy);
    if (u !== d) throw Error(o[u]);
    if ((n.header && r.deflateSetHeader(this.strm, n.header), n.dictionary)) {
        if (((t = 'string' == typeof n.dictionary ? a.string2buf(n.dictionary) : '[object ArrayBuffer]' === l.call(n.dictionary) ? new Uint8Array(n.dictionary) : n.dictionary), (u = r.deflateSetDictionary(this.strm, t)) !== d)) throw Error(o[u]);
        this._dict_set = !0;
    }
}
function I(e, t) {
    var n = new m(t);
    if ((n.push(e, !0), n.err)) throw n.msg || o[n.err];
    return n.result;
}
function T(e, t) {
    return ((t = t || {}).raw = !0), I(e, t);
}
function g(e, t) {
    return ((t = t || {}).gzip = !0), I(e, t);
}
(m.prototype.push = function (e, t) {
    var n,
        o,
        s = this.strm,
        f = this.options.chunkSize;
    if (this.ended) return !1;
    (o = t === ~~t ? t : !0 === t ? c : u), 'string' == typeof e ? (s.input = a.string2buf(e)) : '[object ArrayBuffer]' === l.call(e) ? (s.input = new Uint8Array(e)) : (s.input = e), (s.next_in = 0), (s.avail_in = s.input.length);
    do {
        if ((0 === s.avail_out && ((s.output = new i.Buf8(f)), (s.next_out = 0), (s.avail_out = f)), (n = r.deflate(s, o)) !== _ && n !== d)) return this.onEnd(n), (this.ended = !0), !1;
        (0 === s.avail_out || (0 === s.avail_in && (o === c || o === E))) && ('string' === this.options.to ? this.onData(a.buf2binstring(i.shrinkBuf(s.output, s.next_out))) : this.onData(i.shrinkBuf(s.output, s.next_out)));
    } while ((s.avail_in > 0 || 0 === s.avail_out) && n !== _);
    return o === c ? ((n = r.deflateEnd(this.strm)), this.onEnd(n), (this.ended = !0), n === d) : (o === E && (this.onEnd(d), (s.avail_out = 0)), !0);
}),
    (m.prototype.onData = function (e) {
        this.chunks.push(e);
    }),
    (m.prototype.onEnd = function (e) {
        e === d && ('string' === this.options.to ? (this.result = this.chunks.join('')) : (this.result = i.flattenChunks(this.chunks))), (this.chunks = []), (this.err = e), (this.msg = this.strm.msg);
    }),
    (t.Deflate = m),
    (t.deflate = I),
    (t.deflateRaw = T),
    (t.gzip = g);
