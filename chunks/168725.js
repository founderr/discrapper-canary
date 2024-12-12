var i = r(413135).Buffer,
    a = r(814033),
    s = new (r(687363))(),
    o = new a(24),
    l = new a(11),
    u = new a(10),
    c = new a(3),
    d = new a(7),
    f = r(988608),
    _ = r(706178);
function h(e, n) {
    return (n = n || 'utf8'), !i.isBuffer(e) && (e = new i(e, n)), (this._pub = new a(e)), this;
}
function p(e, n) {
    return (n = n || 'utf8'), !i.isBuffer(e) && (e = new i(e, n)), (this._priv = new a(e)), this;
}
e.exports = E;
var m = {};
function g(e, n) {
    var r,
        i = n.toString('hex'),
        a = [i, e.toString(16)].join('_');
    if (a in m) return m[a];
    var _ = 0;
    if (e.isEven() || !f.simpleSieve || !f.fermatTest(e) || !s.test(e)) return (_ += 1), '02' === i || '05' === i ? (_ += 8) : (_ += 4), (m[a] = _), _;
    switch ((!s.test(e.shrn(1)) && (_ += 2), i)) {
        case '02':
            e.mod(o).cmp(l) && (_ += 8);
            break;
        case '05':
            (r = e.mod(u)).cmp(c) && r.cmp(d) && (_ += 8);
            break;
        default:
            _ += 4;
    }
    return (m[a] = _), _;
}
function E(e, n, r) {
    this.setGenerator(n), (this.__prime = new a(e)), (this._prime = a.mont(this.__prime)), (this._primeLen = e.length), (this._pub = void 0), (this._priv = void 0), (this._primeCode = void 0), r ? ((this.setPublicKey = h), (this.setPrivateKey = p)) : (this._primeCode = 8);
}
function v(e, n) {
    var r = new i(e.toArray());
    return n ? r.toString(n) : r;
}
Object.defineProperty(E.prototype, 'verifyError', {
    enumerable: !0,
    get: function () {
        return 'number' != typeof this._primeCode && (this._primeCode = g(this.__prime, this.__gen)), this._primeCode;
    }
}),
    (E.prototype.generateKeys = function () {
        return !this._priv && (this._priv = new a(_(this._primeLen))), (this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed()), this.getPublicKey();
    }),
    (E.prototype.computeSecret = function (e) {
        var n = new i((e = (e = new a(e)).toRed(this._prime)).redPow(this._priv).fromRed().toArray()),
            r = this.getPrime();
        if (n.length < r.length) {
            var s = new i(r.length - n.length);
            s.fill(0), (n = i.concat([s, n]));
        }
        return n;
    }),
    (E.prototype.getPublicKey = function (e) {
        return v(this._pub, e);
    }),
    (E.prototype.getPrivateKey = function (e) {
        return v(this._priv, e);
    }),
    (E.prototype.getPrime = function (e) {
        return v(this.__prime, e);
    }),
    (E.prototype.getGenerator = function (e) {
        return v(this._gen, e);
    }),
    (E.prototype.setGenerator = function (e, n) {
        return (n = n || 'utf8'), !i.isBuffer(e) && (e = new i(e, n)), (this.__gen = e), (this._gen = new a(e)), this;
    });
