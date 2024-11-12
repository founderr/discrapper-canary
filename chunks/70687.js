var r = n(546299),
    i = n(261638),
    a = n(411108),
    s = r.rotl32,
    o = r.sum32,
    l = r.sum32_5,
    u = a.ft_1,
    c = i.BlockHash,
    d = [1518500249, 1859775393, 2400959708, 3395469782];
function f() {
    if (!(this instanceof f)) return new f();
    c.call(this), (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]), (this.W = Array(80));
}
r.inherits(f, c),
    (e.exports = f),
    (f.blockSize = 512),
    (f.outSize = 160),
    (f.hmacStrength = 80),
    (f.padLength = 64),
    (f.prototype._update = function (e, t) {
        for (var n = this.W, r = 0; r < 16; r++) n[r] = e[t + r];
        for (; r < n.length; r++) n[r] = s(n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16], 1);
        var i = this.h[0],
            a = this.h[1],
            c = this.h[2],
            f = this.h[3],
            _ = this.h[4];
        for (r = 0; r < n.length; r++) {
            var p = ~~(r / 20),
                h = l(s(i, 5), u(p, a, c, f), _, n[r], d[p]);
            (_ = f), (f = c), (c = s(a, 30)), (a = i), (i = h);
        }
        (this.h[0] = o(this.h[0], i)), (this.h[1] = o(this.h[1], a)), (this.h[2] = o(this.h[2], c)), (this.h[3] = o(this.h[3], f)), (this.h[4] = o(this.h[4], _));
    }),
    (f.prototype._digest = function (e) {
        return 'hex' === e ? r.toHex32(this.h, 'big') : r.split32(this.h, 'big');
    });
