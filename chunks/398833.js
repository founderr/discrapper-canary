var i = r(413135).Buffer,
    a = r(136924),
    s = r(814033);
e.exports = function (e) {
    return new l(e);
};
var o = {
    secp256k1: {
        name: 'secp256k1',
        byteLength: 32
    },
    secp224r1: {
        name: 'p224',
        byteLength: 28
    },
    prime256v1: {
        name: 'p256',
        byteLength: 32
    },
    prime192v1: {
        name: 'p192',
        byteLength: 24
    },
    ed25519: {
        name: 'ed25519',
        byteLength: 32
    },
    secp384r1: {
        name: 'p384',
        byteLength: 48
    },
    secp521r1: {
        name: 'p521',
        byteLength: 66
    }
};
function l(e) {
    (this.curveType = o[e]), !this.curveType && (this.curveType = { name: e }), (this.curve = new a.ec(this.curveType.name)), (this.keys = void 0);
}
function u(e, n, r) {
    !Array.isArray(e) && (e = e.toArray());
    var a = new i(e);
    if (r && a.length < r) {
        var s = new i(r - a.length);
        s.fill(0), (a = i.concat([s, a]));
    }
    return n ? a.toString(n) : a;
}
(o.p224 = o.secp224r1),
    (o.p256 = o.secp256r1 = o.prime256v1),
    (o.p192 = o.secp192r1 = o.prime192v1),
    (o.p384 = o.secp384r1),
    (o.p521 = o.secp521r1),
    (l.prototype.generateKeys = function (e, n) {
        return (this.keys = this.curve.genKeyPair()), this.getPublicKey(e, n);
    }),
    (l.prototype.computeSecret = function (e, n, r) {
        return (n = n || 'utf8'), !i.isBuffer(e) && (e = new i(e, n)), u(this.curve.keyFromPublic(e).getPublic().mul(this.keys.getPrivate()).getX(), r, this.curveType.byteLength);
    }),
    (l.prototype.getPublicKey = function (e, n) {
        var r = this.keys.getPublic('compressed' === n, !0);
        return 'hybrid' === n && (r[r.length - 1] % 2 ? (r[0] = 7) : (r[0] = 6)), u(r, e);
    }),
    (l.prototype.getPrivateKey = function (e) {
        return u(this.keys.getPrivate(), e);
    }),
    (l.prototype.setPublicKey = function (e, n) {
        return (n = n || 'utf8'), !i.isBuffer(e) && (e = new i(e, n)), this.keys._importPublic(e), this;
    }),
    (l.prototype.setPrivateKey = function (e, n) {
        (n = n || 'utf8'), !i.isBuffer(e) && (e = new i(e, n));
        var r = new s(e);
        return (r = r.toString(16)), (this.keys = this.curve.genKeyPair()), this.keys._importPrivate(r), this;
    });
