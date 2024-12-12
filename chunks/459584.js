var i = r(458340),
    a = r(957578).Buffer,
    s = r(764900),
    o = r(689118),
    l = r(285844),
    u = r(257693),
    c = r(875115);
function d(e, n) {
    var r = 0;
    e.length !== n.length && r++;
    for (var i = Math.min(e.length, n.length), a = 0; a < i; ++a) r += e[a] ^ n[a];
    return r;
}
function f(e, n, r) {
    if (12 === n.length) return (e._finID = a.concat([n, a.from([0, 0, 0, 1])])), a.concat([n, a.from([0, 0, 0, 2])]);
    var i = new l(r),
        s = n.length,
        o = s % 16;
    i.update(n), o && ((o = 16 - o), i.update(a.alloc(o, 0))), i.update(a.alloc(8, 0));
    var u = 8 * s,
        d = a.alloc(8);
    d.writeUIntBE(u, 0, 8), i.update(d), (e._finID = i.state);
    var f = a.from(e._finID);
    return c(f), f;
}
function _(e, n, r, o) {
    s.call(this);
    var u = a.alloc(4, 0);
    this._cipher = new i.AES(n);
    var c = this._cipher.encryptBlock(u);
    (this._ghash = new l(c)), (r = f(this, r, c)), (this._prev = a.from(r)), (this._cache = a.allocUnsafe(0)), (this._secCache = a.allocUnsafe(0)), (this._decrypt = o), (this._alen = 0), (this._len = 0), (this._mode = e), (this._authTag = null), (this._called = !1);
}
o(_, s),
    (_.prototype._update = function (e) {
        if (!this._called && this._alen) {
            var n = 16 - (this._alen % 16);
            n < 16 && ((n = a.alloc(n, 0)), this._ghash.update(n));
        }
        this._called = !0;
        var r = this._mode.encrypt(this, e);
        return this._decrypt ? this._ghash.update(e) : this._ghash.update(r), (this._len += e.length), r;
    }),
    (_.prototype._final = function () {
        if (this._decrypt && !this._authTag) throw Error('Unsupported state or unable to authenticate data');
        var e = u(this._ghash.final(8 * this._alen, 8 * this._len), this._cipher.encryptBlock(this._finID));
        if (this._decrypt && d(e, this._authTag)) throw Error('Unsupported state or unable to authenticate data');
        (this._authTag = e), this._cipher.scrub();
    }),
    (_.prototype.getAuthTag = function () {
        if (this._decrypt || !a.isBuffer(this._authTag)) throw Error('Attempting to get auth tag in unsupported state');
        return this._authTag;
    }),
    (_.prototype.setAuthTag = function (e) {
        if (!this._decrypt) throw Error('Attempting to set auth tag in unsupported state');
        this._authTag = e;
    }),
    (_.prototype.setAAD = function (e) {
        if (this._called) throw Error('Attempting to set AAD in unsupported state');
        this._ghash.update(e), (this._alen += e.length);
    }),
    (e.exports = _);
