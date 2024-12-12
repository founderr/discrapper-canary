var i = r(21841),
    a = r(689118),
    s = {};
function o(e) {
    i.equal(e.length, 8, 'Invalid IV length'), (this.iv = Array(8));
    for (var n = 0; n < this.iv.length; n++) this.iv[n] = e[n];
}
function l(e) {
    function n(n) {
        e.call(this, n), this._cbcInit();
    }
    a(n, e);
    for (var r = Object.keys(s), i = 0; i < r.length; i++) {
        var o = r[i];
        n.prototype[o] = s[o];
    }
    return (
        (n.create = function (e) {
            return new n(e);
        }),
        n
    );
}
(n.instantiate = l),
    (s._cbcInit = function () {
        var e = new o(this.options.iv);
        this._cbcState = e;
    }),
    (s._update = function (e, n, r, i) {
        var a = this._cbcState,
            s = this.constructor.super_.prototype,
            o = a.iv;
        if ('encrypt' === this.type) {
            for (var l = 0; l < this.blockSize; l++) o[l] ^= e[n + l];
            s._update.call(this, o, 0, r, i);
            for (var l = 0; l < this.blockSize; l++) o[l] = r[i + l];
        } else {
            s._update.call(this, e, n, r, i);
            for (var l = 0; l < this.blockSize; l++) r[i + l] ^= o[l];
            for (var l = 0; l < this.blockSize; l++) o[l] = e[n + l];
        }
    });
