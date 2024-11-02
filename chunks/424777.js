var r = n(814033),
    i = n(789188),
    a = n(685053),
    s = n(609513),
    o = n(526808),
    l = a.assert,
    u = n(175671),
    c = n(361879);
function d(e) {
    if (!(this instanceof d)) return new d(e);
    'string' == typeof e && (l(Object.prototype.hasOwnProperty.call(s, e), 'Unknown curve ' + e), (e = s[e])), e instanceof s.PresetCurve && (e = { curve: e }), (this.curve = e.curve.curve), (this.n = this.curve.n), (this.nh = this.n.ushrn(1)), (this.g = this.curve.g), (this.g = e.curve.g), this.g.precompute(e.curve.n.bitLength() + 1), (this.hash = e.hash || e.curve.hash);
}
(e.exports = d),
    (d.prototype.keyPair = function (e) {
        return new u(this, e);
    }),
    (d.prototype.keyFromPrivate = function (e, t) {
        return u.fromPrivate(this, e, t);
    }),
    (d.prototype.keyFromPublic = function (e, t) {
        return u.fromPublic(this, e, t);
    }),
    (d.prototype.genKeyPair = function (e) {
        !e && (e = {});
        for (
            var t = new i({
                    hash: this.hash,
                    pers: e.pers,
                    persEnc: e.persEnc || 'utf8',
                    entropy: e.entropy || o(this.hash.hmacStrength),
                    entropyEnc: (e.entropy && e.entropyEnc) || 'utf8',
                    nonce: this.n.toArray()
                }),
                n = this.n.byteLength(),
                a = this.n.sub(new r(2));
            ;

        ) {
            var s = new r(t.generate(n));
            if (!(s.cmp(a) > 0)) return s.iaddn(1), this.keyFromPrivate(s);
        }
    }),
    (d.prototype._truncateToN = function (e, t) {
        var n = 8 * e.byteLength() - this.n.bitLength();
        return (n > 0 && (e = e.ushrn(n)), !t && e.cmp(this.n) >= 0) ? e.sub(this.n) : e;
    }),
    (d.prototype.sign = function (e, t, n, a) {
        'object' == typeof n && ((a = n), (n = null)), !a && (a = {}), (t = this.keyFromPrivate(t, n)), (e = this._truncateToN(new r(e, 16)));
        for (
            var s = this.n.byteLength(),
                o = t.getPrivate().toArray('be', s),
                l = e.toArray('be', s),
                u = new i({
                    hash: this.hash,
                    entropy: o,
                    nonce: l,
                    pers: a.pers,
                    persEnc: a.persEnc || 'utf8'
                }),
                d = this.n.sub(new r(1)),
                f = 0;
            ;
            f++
        ) {
            var _ = a.k ? a.k(f) : new r(u.generate(this.n.byteLength()));
            if (0 >= (_ = this._truncateToN(_, !0)).cmpn(1) || _.cmp(d) >= 0) continue;
            var h = this.g.mul(_);
            if (h.isInfinity()) continue;
            var p = h.getX(),
                m = p.umod(this.n);
            if (0 !== m.cmpn(0)) {
                var g = _.invm(this.n).mul(m.mul(t.getPrivate()).iadd(e));
                if (0 !== (g = g.umod(this.n)).cmpn(0)) {
                    var E = (h.getY().isOdd() ? 1 : 0) | (0 !== p.cmp(m) ? 2 : 0);
                    return (
                        a.canonical && g.cmp(this.nh) > 0 && ((g = this.n.sub(g)), (E ^= 1)),
                        new c({
                            r: m,
                            s: g,
                            recoveryParam: E
                        })
                    );
                }
            }
        }
    }),
    (d.prototype.verify = function (e, t, n, i) {
        (e = this._truncateToN(new r(e, 16))), (n = this.keyFromPublic(n, i));
        var a,
            s = (t = new c(t, 'hex')).r,
            o = t.s;
        if (0 > s.cmpn(1) || s.cmp(this.n) >= 0 || 0 > o.cmpn(1) || o.cmp(this.n) >= 0) return !1;
        var l = o.invm(this.n),
            u = l.mul(e).umod(this.n),
            d = l.mul(s).umod(this.n);
        if (!this.curve._maxwellTrick) return !(a = this.g.mulAdd(u, n.getPublic(), d)).isInfinity() && 0 === a.getX().umod(this.n).cmp(s);
        return !(a = this.g.jmulAdd(u, n.getPublic(), d)).isInfinity() && a.eqXToP(s);
    }),
    (d.prototype.recoverPubKey = function (e, t, n, i) {
        l((3 & n) === n, 'The recovery param is more than two bits'), (t = new c(t, i));
        var a = this.n,
            s = new r(e),
            o = t.r,
            u = t.s,
            d = 1 & n,
            f = n >> 1;
        if (o.cmp(this.curve.p.umod(this.curve.n)) >= 0 && f) throw Error('Unable to find sencond key candinate');
        o = f ? this.curve.pointFromX(o.add(this.curve.n), d) : this.curve.pointFromX(o, d);
        var _ = t.r.invm(a),
            h = a.sub(s).mul(_).umod(a),
            p = u.mul(_).umod(a);
        return this.g.mulAdd(h, o, p);
    }),
    (d.prototype.getKeyRecoveryParam = function (e, t, n, r) {
        if (null !== (t = new c(t, r)).recoveryParam) return t.recoveryParam;
        for (var i, a = 0; a < 4; a++) {
            try {
                i = this.recoverPubKey(e, t, a);
            } catch (e) {
                continue;
            }
            if (i.eq(n)) return a;
        }
        throw Error('Unable to find valid recovery factor');
    });
