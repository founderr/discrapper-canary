var i = r(814033),
    a = r(789188),
    s = r(685053),
    o = r(609513),
    l = r(526808),
    u = s.assert,
    c = r(175671),
    d = r(361879);
function f(e) {
    if (!(this instanceof f)) return new f(e);
    'string' == typeof e && (u(Object.prototype.hasOwnProperty.call(o, e), 'Unknown curve ' + e), (e = o[e])), e instanceof o.PresetCurve && (e = { curve: e }), (this.curve = e.curve.curve), (this.n = this.curve.n), (this.nh = this.n.ushrn(1)), (this.g = this.curve.g), (this.g = e.curve.g), this.g.precompute(e.curve.n.bitLength() + 1), (this.hash = e.hash || e.curve.hash);
}
(e.exports = f),
    (f.prototype.keyPair = function (e) {
        return new c(this, e);
    }),
    (f.prototype.keyFromPrivate = function (e, n) {
        return c.fromPrivate(this, e, n);
    }),
    (f.prototype.keyFromPublic = function (e, n) {
        return c.fromPublic(this, e, n);
    }),
    (f.prototype.genKeyPair = function (e) {
        !e && (e = {});
        for (
            var n = new a({
                    hash: this.hash,
                    pers: e.pers,
                    persEnc: e.persEnc || 'utf8',
                    entropy: e.entropy || l(this.hash.hmacStrength),
                    entropyEnc: (e.entropy && e.entropyEnc) || 'utf8',
                    nonce: this.n.toArray()
                }),
                r = this.n.byteLength(),
                s = this.n.sub(new i(2));
            ;

        ) {
            var o = new i(n.generate(r));
            if (!(o.cmp(s) > 0)) return o.iaddn(1), this.keyFromPrivate(o);
        }
    }),
    (f.prototype._truncateToN = function (e, n) {
        var r = 8 * e.byteLength() - this.n.bitLength();
        return (r > 0 && (e = e.ushrn(r)), !n && e.cmp(this.n) >= 0) ? e.sub(this.n) : e;
    }),
    (f.prototype.sign = function (e, n, r, s) {
        'object' == typeof r && ((s = r), (r = null)), !s && (s = {}), (n = this.keyFromPrivate(n, r)), (e = this._truncateToN(new i(e, 16)));
        for (
            var o = this.n.byteLength(),
                l = n.getPrivate().toArray('be', o),
                u = e.toArray('be', o),
                c = new a({
                    hash: this.hash,
                    entropy: l,
                    nonce: u,
                    pers: s.pers,
                    persEnc: s.persEnc || 'utf8'
                }),
                f = this.n.sub(new i(1)),
                _ = 0;
            ;
            _++
        ) {
            var h = s.k ? s.k(_) : new i(c.generate(this.n.byteLength()));
            if (0 >= (h = this._truncateToN(h, !0)).cmpn(1) || h.cmp(f) >= 0) continue;
            var p = this.g.mul(h);
            if (p.isInfinity()) continue;
            var m = p.getX(),
                g = m.umod(this.n);
            if (0 !== g.cmpn(0)) {
                var E = h.invm(this.n).mul(g.mul(n.getPrivate()).iadd(e));
                if (0 !== (E = E.umod(this.n)).cmpn(0)) {
                    var v = (p.getY().isOdd() ? 1 : 0) | (0 !== m.cmp(g) ? 2 : 0);
                    return (
                        s.canonical && E.cmp(this.nh) > 0 && ((E = this.n.sub(E)), (v ^= 1)),
                        new d({
                            r: g,
                            s: E,
                            recoveryParam: v
                        })
                    );
                }
            }
        }
    }),
    (f.prototype.verify = function (e, n, r, a) {
        (e = this._truncateToN(new i(e, 16))), (r = this.keyFromPublic(r, a));
        var s,
            o = (n = new d(n, 'hex')).r,
            l = n.s;
        if (0 > o.cmpn(1) || o.cmp(this.n) >= 0 || 0 > l.cmpn(1) || l.cmp(this.n) >= 0) return !1;
        var u = l.invm(this.n),
            c = u.mul(e).umod(this.n),
            f = u.mul(o).umod(this.n);
        if (!this.curve._maxwellTrick) return !(s = this.g.mulAdd(c, r.getPublic(), f)).isInfinity() && 0 === s.getX().umod(this.n).cmp(o);
        return !(s = this.g.jmulAdd(c, r.getPublic(), f)).isInfinity() && s.eqXToP(o);
    }),
    (f.prototype.recoverPubKey = function (e, n, r, a) {
        u((3 & r) === r, 'The recovery param is more than two bits'), (n = new d(n, a));
        var s = this.n,
            o = new i(e),
            l = n.r,
            c = n.s,
            f = 1 & r,
            _ = r >> 1;
        if (l.cmp(this.curve.p.umod(this.curve.n)) >= 0 && _) throw Error('Unable to find sencond key candinate');
        l = _ ? this.curve.pointFromX(l.add(this.curve.n), f) : this.curve.pointFromX(l, f);
        var h = n.r.invm(s),
            p = s.sub(o).mul(h).umod(s),
            m = c.mul(h).umod(s);
        return this.g.mulAdd(p, l, m);
    }),
    (f.prototype.getKeyRecoveryParam = function (e, n, r, i) {
        if (null !== (n = new d(n, i)).recoveryParam) return n.recoveryParam;
        for (var a, s = 0; s < 4; s++) {
            try {
                a = this.recoverPubKey(e, n, s);
            } catch (e) {
                continue;
            }
            if (a.eq(r)) return s;
        }
        throw Error('Unable to find valid recovery factor');
    });
