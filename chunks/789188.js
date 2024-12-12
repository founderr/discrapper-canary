var i = r(903799),
    a = r(847651),
    s = r(21841);
function o(e) {
    if (!(this instanceof o)) return new o(e);
    (this.hash = e.hash), (this.predResist = !!e.predResist), (this.outLen = this.hash.outSize), (this.minEntropy = e.minEntropy || this.hash.hmacStrength), (this._reseed = null), (this.reseedInterval = null), (this.K = null), (this.V = null);
    var n = a.toArray(e.entropy, e.entropyEnc || 'hex'),
        r = a.toArray(e.nonce, e.nonceEnc || 'hex'),
        i = a.toArray(e.pers, e.persEnc || 'hex');
    s(n.length >= this.minEntropy / 8, 'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'), this._init(n, r, i);
}
(e.exports = o),
    (o.prototype._init = function (e, n, r) {
        var i = e.concat(n).concat(r);
        (this.K = Array(this.outLen / 8)), (this.V = Array(this.outLen / 8));
        for (var a = 0; a < this.V.length; a++) (this.K[a] = 0), (this.V[a] = 1);
        this._update(i), (this._reseed = 1), (this.reseedInterval = 281474976710656);
    }),
    (o.prototype._hmac = function () {
        return new i.hmac(this.hash, this.K);
    }),
    (o.prototype._update = function (e) {
        var n = this._hmac().update(this.V).update([0]);
        e && (n = n.update(e)), (this.K = n.digest()), (this.V = this._hmac().update(this.V).digest()), e && ((this.K = this._hmac().update(this.V).update([1]).update(e).digest()), (this.V = this._hmac().update(this.V).digest()));
    }),
    (o.prototype.reseed = function (e, n, r, i) {
        'string' != typeof n && ((i = r), (r = n), (n = null)), (e = a.toArray(e, n)), (r = a.toArray(r, i)), s(e.length >= this.minEntropy / 8, 'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'), this._update(e.concat(r || [])), (this._reseed = 1);
    }),
    (o.prototype.generate = function (e, n, r, i) {
        if (this._reseed > this.reseedInterval) throw Error('Reseed is required');
        'string' != typeof n && ((i = r), (r = n), (n = null)), r && ((r = a.toArray(r, i || 'hex')), this._update(r));
        for (var s = []; s.length < e; ) (this.V = this._hmac().update(this.V).digest()), (s = s.concat(this.V));
        var o = s.slice(0, e);
        return this._update(r), this._reseed++, a.encode(o, n);
    });
