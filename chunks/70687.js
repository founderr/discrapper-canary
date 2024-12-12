var i = r(546299),
    a = r(261638),
    s = r(411108),
    o = i.rotl32,
    l = i.sum32,
    u = i.sum32_5,
    c = s.ft_1,
    d = a.BlockHash,
    f = [1518500249, 1859775393, 2400959708, 3395469782];
function _() {
    if (!(this instanceof _)) return new _();
    d.call(this), (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]), (this.W = Array(80));
}
i.inherits(_, d),
    (e.exports = _),
    (_.blockSize = 512),
    (_.outSize = 160),
    (_.hmacStrength = 80),
    (_.padLength = 64),
    (_.prototype._update = function (e, n) {
        for (var r = this.W, i = 0; i < 16; i++) r[i] = e[n + i];
        for (; i < r.length; i++) r[i] = o(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
        var a = this.h[0],
            s = this.h[1],
            d = this.h[2],
            _ = this.h[3],
            h = this.h[4];
        for (i = 0; i < r.length; i++) {
            var p = ~~(i / 20),
                m = u(o(a, 5), c(p, s, d, _), h, r[i], f[p]);
            (h = _), (_ = d), (d = o(s, 30)), (s = a), (a = m);
        }
        (this.h[0] = l(this.h[0], a)), (this.h[1] = l(this.h[1], s)), (this.h[2] = l(this.h[2], d)), (this.h[3] = l(this.h[3], _)), (this.h[4] = l(this.h[4], h));
    }),
    (_.prototype._digest = function (e) {
        return 'hex' === e ? i.toHex32(this.h, 'big') : i.split32(this.h, 'big');
    });
