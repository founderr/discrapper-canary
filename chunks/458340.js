var i = r(957578).Buffer;
function a(e) {
    !i.isBuffer(e) && (e = i.from(e));
    for (var n = (e.length / 4) | 0, r = Array(n), a = 0; a < n; a++) r[a] = e.readUInt32BE(4 * a);
    return r;
}
function s(e) {
    for (var n = 0; n < e.length; e++) e[n] = 0;
}
function o(e, n, r, i, a) {
    for (var s, o, l, u, c = r[0], d = r[1], f = r[2], _ = r[3], h = e[0] ^ n[0], p = e[1] ^ n[1], m = e[2] ^ n[2], g = e[3] ^ n[3], E = 4, v = 1; v < a; v++) (s = c[h >>> 24] ^ d[(p >>> 16) & 255] ^ f[(m >>> 8) & 255] ^ _[255 & g] ^ n[E++]), (o = c[p >>> 24] ^ d[(m >>> 16) & 255] ^ f[(g >>> 8) & 255] ^ _[255 & h] ^ n[E++]), (l = c[m >>> 24] ^ d[(g >>> 16) & 255] ^ f[(h >>> 8) & 255] ^ _[255 & p] ^ n[E++]), (u = c[g >>> 24] ^ d[(h >>> 16) & 255] ^ f[(p >>> 8) & 255] ^ _[255 & m] ^ n[E++]), (h = s), (p = o), (m = l), (g = u);
    return (s = ((i[h >>> 24] << 24) | (i[(p >>> 16) & 255] << 16) | (i[(m >>> 8) & 255] << 8) | i[255 & g]) ^ n[E++]), (o = ((i[p >>> 24] << 24) | (i[(m >>> 16) & 255] << 16) | (i[(g >>> 8) & 255] << 8) | i[255 & h]) ^ n[E++]), (l = ((i[m >>> 24] << 24) | (i[(g >>> 16) & 255] << 16) | (i[(h >>> 8) & 255] << 8) | i[255 & p]) ^ n[E++]), (u = ((i[g >>> 24] << 24) | (i[(h >>> 16) & 255] << 16) | (i[(p >>> 8) & 255] << 8) | i[255 & m]) ^ n[E++]), [(s >>>= 0), (o >>>= 0), (l >>>= 0), (u >>>= 0)];
}
var l = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
    u = (function () {
        for (var e = Array(256), n = 0; n < 256; n++) n < 128 ? (e[n] = n << 1) : (e[n] = (n << 1) ^ 283);
        for (var r = [], i = [], a = [[], [], [], []], s = [[], [], [], []], o = 0, l = 0, u = 0; u < 256; ++u) {
            var c = l ^ (l << 1) ^ (l << 2) ^ (l << 3) ^ (l << 4);
            (c = (c >>> 8) ^ (255 & c) ^ 99), (r[o] = c), (i[c] = o);
            var d = e[o],
                f = e[d],
                _ = e[f],
                h = (257 * e[c]) ^ (16843008 * c);
            (a[0][o] = (h << 24) | (h >>> 8)), (a[1][o] = (h << 16) | (h >>> 16)), (a[2][o] = (h << 8) | (h >>> 24)), (a[3][o] = h), (h = (16843009 * _) ^ (65537 * f) ^ (257 * d) ^ (16843008 * o)), (s[0][c] = (h << 24) | (h >>> 8)), (s[1][c] = (h << 16) | (h >>> 16)), (s[2][c] = (h << 8) | (h >>> 24)), (s[3][c] = h), 0 === o ? (o = l = 1) : ((o = d ^ e[e[e[_ ^ d]]]), (l ^= e[e[l]]));
        }
        return {
            SBOX: r,
            INV_SBOX: i,
            SUB_MIX: a,
            INV_SUB_MIX: s
        };
    })();
function c(e) {
    (this._key = a(e)), this._reset();
}
(c.blockSize = 16),
    (c.keySize = 32),
    (c.prototype.blockSize = c.blockSize),
    (c.prototype.keySize = c.keySize),
    (c.prototype._reset = function () {
        for (var e = this._key, n = e.length, r = n + 6, i = (r + 1) * 4, a = [], s = 0; s < n; s++) a[s] = e[s];
        for (s = n; s < i; s++) {
            var o = a[s - 1];
            s % n == 0 ? ((o = (o << 8) | (o >>> 24)), (o = ((u.SBOX[o >>> 24] << 24) | (u.SBOX[(o >>> 16) & 255] << 16) | (u.SBOX[(o >>> 8) & 255] << 8) | u.SBOX[255 & o]) ^ (l[(s / n) | 0] << 24))) : n > 6 && s % n == 4 && (o = (u.SBOX[o >>> 24] << 24) | (u.SBOX[(o >>> 16) & 255] << 16) | (u.SBOX[(o >>> 8) & 255] << 8) | u.SBOX[255 & o]), (a[s] = a[s - n] ^ o);
        }
        for (var c = [], d = 0; d < i; d++) {
            var f = i - d,
                _ = a[f - (d % 4 ? 0 : 4)];
            d < 4 || f <= 4 ? (c[d] = _) : (c[d] = u.INV_SUB_MIX[0][u.SBOX[_ >>> 24]] ^ u.INV_SUB_MIX[1][u.SBOX[(_ >>> 16) & 255]] ^ u.INV_SUB_MIX[2][u.SBOX[(_ >>> 8) & 255]] ^ u.INV_SUB_MIX[3][u.SBOX[255 & _]]);
        }
        (this._nRounds = r), (this._keySchedule = a), (this._invKeySchedule = c);
    }),
    (c.prototype.encryptBlockRaw = function (e) {
        return o((e = a(e)), this._keySchedule, u.SUB_MIX, u.SBOX, this._nRounds);
    }),
    (c.prototype.encryptBlock = function (e) {
        var n = this.encryptBlockRaw(e),
            r = i.allocUnsafe(16);
        return r.writeUInt32BE(n[0], 0), r.writeUInt32BE(n[1], 4), r.writeUInt32BE(n[2], 8), r.writeUInt32BE(n[3], 12), r;
    }),
    (c.prototype.decryptBlock = function (e) {
        var n = (e = a(e))[1];
        (e[1] = e[3]), (e[3] = n);
        var r = o(e, this._invKeySchedule, u.INV_SUB_MIX, u.INV_SBOX, this._nRounds),
            s = i.allocUnsafe(16);
        return s.writeUInt32BE(r[0], 0), s.writeUInt32BE(r[3], 4), s.writeUInt32BE(r[2], 8), s.writeUInt32BE(r[1], 12), s;
    }),
    (c.prototype.scrub = function () {
        s(this._keySchedule), s(this._invKeySchedule), s(this._key);
    }),
    (e.exports.AES = c);
