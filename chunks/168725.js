var r = n(413135).Buffer,
    i = n(814033),
    a = new (n(687363))(),
    s = new i(24),
    o = new i(11),
    l = new i(10),
    u = new i(3),
    c = new i(7),
    d = n(988608),
    f = n(706178);
function _(e, t) {
    return (t = t || 'utf8'), !r.isBuffer(e) && (e = new r(e, t)), (this._pub = new i(e)), this;
}
function h(e, t) {
    return (t = t || 'utf8'), !r.isBuffer(e) && (e = new r(e, t)), (this._priv = new i(e)), this;
}
e.exports = m;
var p = {};
function m(e, t, n) {
    this.setGenerator(t), (this.__prime = new i(e)), (this._prime = i.mont(this.__prime)), (this._primeLen = e.length), (this._pub = void 0), (this._priv = void 0), (this._primeCode = void 0), n ? ((this.setPublicKey = _), (this.setPrivateKey = h)) : (this._primeCode = 8);
}
function g(e, t) {
    var n = new r(e.toArray());
    return t ? n.toString(t) : n;
}
Object.defineProperty(m.prototype, 'verifyError', {
    enumerable: !0,
    get: function () {
        return (
            'number' != typeof this._primeCode &&
                (this._primeCode = (function (e, t) {
                    var n,
                        r = t.toString('hex'),
                        i = [r, e.toString(16)].join('_');
                    if (i in p) return p[i];
                    var f = 0;
                    if (e.isEven() || !d.simpleSieve || !d.fermatTest(e) || !a.test(e)) return (f += 1), '02' === r || '05' === r ? (f += 8) : (f += 4), (p[i] = f), f;
                    switch ((!a.test(e.shrn(1)) && (f += 2), r)) {
                        case '02':
                            e.mod(s).cmp(o) && (f += 8);
                            break;
                        case '05':
                            (n = e.mod(l)).cmp(u) && n.cmp(c) && (f += 8);
                            break;
                        default:
                            f += 4;
                    }
                    return (p[i] = f), f;
                })(this.__prime, this.__gen)),
            this._primeCode
        );
    }
}),
    (m.prototype.generateKeys = function () {
        return !this._priv && (this._priv = new i(f(this._primeLen))), (this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed()), this.getPublicKey();
    }),
    (m.prototype.computeSecret = function (e) {
        var t = new r((e = (e = new i(e)).toRed(this._prime)).redPow(this._priv).fromRed().toArray()),
            n = this.getPrime();
        if (t.length < n.length) {
            var a = new r(n.length - t.length);
            a.fill(0), (t = r.concat([a, t]));
        }
        return t;
    }),
    (m.prototype.getPublicKey = function (e) {
        return g(this._pub, e);
    }),
    (m.prototype.getPrivateKey = function (e) {
        return g(this._priv, e);
    }),
    (m.prototype.getPrime = function (e) {
        return g(this.__prime, e);
    }),
    (m.prototype.getGenerator = function (e) {
        return g(this._gen, e);
    }),
    (m.prototype.setGenerator = function (e, t) {
        return (t = t || 'utf8'), !r.isBuffer(e) && (e = new r(e, t)), (this.__gen = e), (this._gen = new i(e)), this;
    });
