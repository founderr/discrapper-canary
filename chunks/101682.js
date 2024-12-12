var i = r(685053),
    a = r(814033),
    s = r(689118),
    o = r(806981),
    l = i.assert;
function u(e) {
    o.call(this, 'short', e), (this.a = new a(e.a, 16).toRed(this.red)), (this.b = new a(e.b, 16).toRed(this.red)), (this.tinv = this.two.redInvm()), (this.zeroA = 0 === this.a.fromRed().cmpn(0)), (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)), (this.endo = this._getEndomorphism(e)), (this._endoWnafT1 = [, , , ,]), (this._endoWnafT2 = [, , , ,]);
}
function c(e, n, r, i) {
    o.BasePoint.call(this, e, 'affine'), null === n && null === r ? ((this.x = null), (this.y = null), (this.inf = !0)) : ((this.x = new a(n, 16)), (this.y = new a(r, 16)), i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.y.red && (this.y = this.y.toRed(this.curve.red)), (this.inf = !1));
}
function d(e, n, r, i) {
    o.BasePoint.call(this, e, 'jacobian'), null === n && null === r && null === i ? ((this.x = this.curve.one), (this.y = this.curve.one), (this.z = new a(0))) : ((this.x = new a(n, 16)), (this.y = new a(r, 16)), (this.z = new a(i, 16))), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.y.red && (this.y = this.y.toRed(this.curve.red)), !this.z.red && (this.z = this.z.toRed(this.curve.red)), (this.zOne = this.z === this.curve.one);
}
s(u, o),
    (e.exports = u),
    (u.prototype._getEndomorphism = function (e) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            if (e.beta) n = new a(e.beta, 16).toRed(this.red);
            else {
                var n,
                    r,
                    i,
                    s = this._getEndoRoots(this.p);
                n = (n = 0 > s[0].cmp(s[1]) ? s[0] : s[1]).toRed(this.red);
            }
            if (e.lambda) r = new a(e.lambda, 16);
            else {
                var o = this._getEndoRoots(this.n);
                0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(n)) ? (r = o[0]) : ((r = o[1]), l(0 === this.g.mul(r).x.cmp(this.g.x.redMul(n))));
            }
            return (
                (i = e.basis
                    ? e.basis.map(function (e) {
                          return {
                              a: new a(e.a, 16),
                              b: new a(e.b, 16)
                          };
                      })
                    : this._getEndoBasis(r)),
                {
                    beta: n,
                    lambda: r,
                    basis: i
                }
            );
        }
    }),
    (u.prototype._getEndoRoots = function (e) {
        var n = e === this.p ? this.red : a.mont(e),
            r = new a(2).toRed(n).redInvm(),
            i = r.redNeg(),
            s = new a(3).toRed(n).redNeg().redSqrt().redMul(r);
        return [i.redAdd(s).fromRed(), i.redSub(s).fromRed()];
    }),
    (u.prototype._getEndoBasis = function (e) {
        for (var n, r, i, s, o, l, u, c, d, f = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), _ = e, h = this.n.clone(), p = new a(1), m = new a(0), g = new a(0), E = new a(1), v = 0; 0 !== _.cmpn(0); ) {
            var I = h.div(_);
            (c = h.sub(I.mul(_))), (d = g.sub(I.mul(p)));
            var T = E.sub(I.mul(m));
            if (!i && 0 > c.cmp(f)) (n = u.neg()), (r = p), (i = c.neg()), (s = d);
            else if (i && 2 == ++v) break;
            (u = c), (h = _), (_ = c), (g = p), (p = d), (E = m), (m = T);
        }
        (o = c.neg()), (l = d);
        var b = i.sqr().add(s.sqr());
        return (
            o.sqr().add(l.sqr()).cmp(b) >= 0 && ((o = n), (l = r)),
            i.negative && ((i = i.neg()), (s = s.neg())),
            o.negative && ((o = o.neg()), (l = l.neg())),
            [
                {
                    a: i,
                    b: s
                },
                {
                    a: o,
                    b: l
                }
            ]
        );
    }),
    (u.prototype._endoSplit = function (e) {
        var n = this.endo.basis,
            r = n[0],
            i = n[1],
            a = i.b.mul(e).divRound(this.n),
            s = r.b.neg().mul(e).divRound(this.n),
            o = a.mul(r.a),
            l = s.mul(i.a),
            u = a.mul(r.b),
            c = s.mul(i.b);
        return {
            k1: e.sub(o).sub(l),
            k2: u.add(c).neg()
        };
    }),
    (u.prototype.pointFromX = function (e, n) {
        !(e = new a(e, 16)).red && (e = e.toRed(this.red));
        var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
            i = r.redSqrt();
        if (0 !== i.redSqr().redSub(r).cmp(this.zero)) throw Error('invalid point');
        var s = i.fromRed().isOdd();
        return ((n && !s) || (!n && s)) && (i = i.redNeg()), this.point(e, i);
    }),
    (u.prototype.validate = function (e) {
        if (e.inf) return !0;
        var n = e.x,
            r = e.y,
            i = this.a.redMul(n),
            a = n.redSqr().redMul(n).redIAdd(i).redIAdd(this.b);
        return 0 === r.redSqr().redISub(a).cmpn(0);
    }),
    (u.prototype._endoWnafMulAdd = function (e, n, r) {
        for (var i = this._endoWnafT1, a = this._endoWnafT2, s = 0; s < e.length; s++) {
            var o = this._endoSplit(n[s]),
                l = e[s],
                u = l._getBeta();
            o.k1.negative && (o.k1.ineg(), (l = l.neg(!0))), o.k2.negative && (o.k2.ineg(), (u = u.neg(!0))), (i[2 * s] = l), (i[2 * s + 1] = u), (a[2 * s] = o.k1), (a[2 * s + 1] = o.k2);
        }
        for (var c = this._wnafMulAdd(1, i, a, 2 * s, r), d = 0; d < 2 * s; d++) (i[d] = null), (a[d] = null);
        return c;
    }),
    s(c, o.BasePoint),
    (u.prototype.point = function (e, n, r) {
        return new c(this, e, n, r);
    }),
    (u.prototype.pointFromJSON = function (e, n) {
        return c.fromJSON(this, e, n);
    }),
    (c.prototype._getBeta = function () {
        if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta) return e.beta;
            var n = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
            if (e) {
                var r = this.curve,
                    i = function (e) {
                        return r.point(e.x.redMul(r.endo.beta), e.y);
                    };
                (e.beta = n),
                    (n.precomputed = {
                        beta: null,
                        naf: e.naf && {
                            wnd: e.naf.wnd,
                            points: e.naf.points.map(i)
                        },
                        doubles: e.doubles && {
                            step: e.doubles.step,
                            points: e.doubles.points.map(i)
                        }
                    });
            }
            return n;
        }
    }),
    (c.prototype.toJSON = function () {
        return this.precomputed
            ? [
                  this.x,
                  this.y,
                  this.precomputed && {
                      doubles: this.precomputed.doubles && {
                          step: this.precomputed.doubles.step,
                          points: this.precomputed.doubles.points.slice(1)
                      },
                      naf: this.precomputed.naf && {
                          wnd: this.precomputed.naf.wnd,
                          points: this.precomputed.naf.points.slice(1)
                      }
                  }
              ]
            : [this.x, this.y];
    }),
    (c.fromJSON = function (e, n, r) {
        'string' == typeof n && (n = JSON.parse(n));
        var i = e.point(n[0], n[1], r);
        if (!n[2]) return i;
        function a(n) {
            return e.point(n[0], n[1], r);
        }
        var s = n[2];
        return (
            (i.precomputed = {
                beta: null,
                doubles: s.doubles && {
                    step: s.doubles.step,
                    points: [i].concat(s.doubles.points.map(a))
                },
                naf: s.naf && {
                    wnd: s.naf.wnd,
                    points: [i].concat(s.naf.points.map(a))
                }
            }),
            i
        );
    }),
    (c.prototype.inspect = function () {
        return this.isInfinity() ? '<EC Point Infinity>' : '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' y: ' + this.y.fromRed().toString(16, 2) + '>';
    }),
    (c.prototype.isInfinity = function () {
        return this.inf;
    }),
    (c.prototype.add = function (e) {
        if (this.inf) return e;
        if (e.inf) return this;
        if (this.eq(e)) return this.dbl();
        if (this.neg().eq(e) || 0 === this.x.cmp(e.x)) return this.curve.point(null, null);
        var n = this.y.redSub(e.y);
        0 !== n.cmpn(0) && (n = n.redMul(this.x.redSub(e.x).redInvm()));
        var r = n.redSqr().redISub(this.x).redISub(e.x),
            i = n.redMul(this.x.redSub(r)).redISub(this.y);
        return this.curve.point(r, i);
    }),
    (c.prototype.dbl = function () {
        if (this.inf) return this;
        var e = this.y.redAdd(this.y);
        if (0 === e.cmpn(0)) return this.curve.point(null, null);
        var n = this.curve.a,
            r = this.x.redSqr(),
            i = e.redInvm(),
            a = r.redAdd(r).redIAdd(r).redIAdd(n).redMul(i),
            s = a.redSqr().redISub(this.x.redAdd(this.x)),
            o = a.redMul(this.x.redSub(s)).redISub(this.y);
        return this.curve.point(s, o);
    }),
    (c.prototype.getX = function () {
        return this.x.fromRed();
    }),
    (c.prototype.getY = function () {
        return this.y.fromRed();
    }),
    (c.prototype.mul = function (e) {
        if (((e = new a(e, 16)), this.isInfinity())) return this;
        if (this._hasDoubles(e)) return this.curve._fixedNafMul(this, e);
        if (this.curve.endo) return this.curve._endoWnafMulAdd([this], [e]);
        else return this.curve._wnafMul(this, e);
    }),
    (c.prototype.mulAdd = function (e, n, r) {
        var i = [this, n],
            a = [e, r];
        return this.curve.endo ? this.curve._endoWnafMulAdd(i, a) : this.curve._wnafMulAdd(1, i, a, 2);
    }),
    (c.prototype.jmulAdd = function (e, n, r) {
        var i = [this, n],
            a = [e, r];
        return this.curve.endo ? this.curve._endoWnafMulAdd(i, a, !0) : this.curve._wnafMulAdd(1, i, a, 2, !0);
    }),
    (c.prototype.eq = function (e) {
        return this === e || (this.inf === e.inf && (this.inf || (0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))));
    }),
    (c.prototype.neg = function (e) {
        if (this.inf) return this;
        var n = this.curve.point(this.x, this.y.redNeg());
        if (e && this.precomputed) {
            var r = this.precomputed,
                i = function (e) {
                    return e.neg();
                };
            n.precomputed = {
                naf: r.naf && {
                    wnd: r.naf.wnd,
                    points: r.naf.points.map(i)
                },
                doubles: r.doubles && {
                    step: r.doubles.step,
                    points: r.doubles.points.map(i)
                }
            };
        }
        return n;
    }),
    (c.prototype.toJ = function () {
        return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one);
    }),
    s(d, o.BasePoint),
    (u.prototype.jpoint = function (e, n, r) {
        return new d(this, e, n, r);
    }),
    (d.prototype.toP = function () {
        if (this.isInfinity()) return this.curve.point(null, null);
        var e = this.z.redInvm(),
            n = e.redSqr(),
            r = this.x.redMul(n),
            i = this.y.redMul(n).redMul(e);
        return this.curve.point(r, i);
    }),
    (d.prototype.neg = function () {
        return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
    }),
    (d.prototype.add = function (e) {
        if (this.isInfinity()) return e;
        if (e.isInfinity()) return this;
        var n = e.z.redSqr(),
            r = this.z.redSqr(),
            i = this.x.redMul(n),
            a = e.x.redMul(r),
            s = this.y.redMul(n.redMul(e.z)),
            o = e.y.redMul(r.redMul(this.z)),
            l = i.redSub(a),
            u = s.redSub(o);
        if (0 === l.cmpn(0)) return 0 !== u.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var c = l.redSqr(),
            d = c.redMul(l),
            f = i.redMul(c),
            _ = u.redSqr().redIAdd(d).redISub(f).redISub(f),
            h = u.redMul(f.redISub(_)).redISub(s.redMul(d)),
            p = this.z.redMul(e.z).redMul(l);
        return this.curve.jpoint(_, h, p);
    }),
    (d.prototype.mixedAdd = function (e) {
        if (this.isInfinity()) return e.toJ();
        if (e.isInfinity()) return this;
        var n = this.z.redSqr(),
            r = this.x,
            i = e.x.redMul(n),
            a = this.y,
            s = e.y.redMul(n).redMul(this.z),
            o = r.redSub(i),
            l = a.redSub(s);
        if (0 === o.cmpn(0)) return 0 !== l.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var u = o.redSqr(),
            c = u.redMul(o),
            d = r.redMul(u),
            f = l.redSqr().redIAdd(c).redISub(d).redISub(d),
            _ = l.redMul(d.redISub(f)).redISub(a.redMul(c)),
            h = this.z.redMul(o);
        return this.curve.jpoint(f, _, h);
    }),
    (d.prototype.dblp = function (e) {
        if (0 === e || this.isInfinity()) return this;
        if (!e) return this.dbl();
        if (this.curve.zeroA || this.curve.threeA) {
            var n,
                r = this;
            for (n = 0; n < e; n++) r = r.dbl();
            return r;
        }
        var i = this.curve.a,
            a = this.curve.tinv,
            s = this.x,
            o = this.y,
            l = this.z,
            u = l.redSqr().redSqr(),
            c = o.redAdd(o);
        for (n = 0; n < e; n++) {
            var d = s.redSqr(),
                f = c.redSqr(),
                _ = f.redSqr(),
                h = d.redAdd(d).redIAdd(d).redIAdd(i.redMul(u)),
                p = s.redMul(f),
                m = h.redSqr().redISub(p.redAdd(p)),
                g = p.redISub(m),
                E = h.redMul(g);
            E = E.redIAdd(E).redISub(_);
            var v = c.redMul(l);
            n + 1 < e && (u = u.redMul(_)), (s = m), (l = v), (c = E);
        }
        return this.curve.jpoint(s, c.redMul(a), l);
    }),
    (d.prototype.dbl = function () {
        return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
    }),
    (d.prototype._zeroDbl = function () {
        if (this.zOne) {
            var e,
                n,
                r,
                i = this.x.redSqr(),
                a = this.y.redSqr(),
                s = a.redSqr(),
                o = this.x.redAdd(a).redSqr().redISub(i).redISub(s);
            o = o.redIAdd(o);
            var l = i.redAdd(i).redIAdd(i),
                u = l.redSqr().redISub(o).redISub(o),
                c = s.redIAdd(s);
            (c = (c = c.redIAdd(c)).redIAdd(c)), (e = u), (n = l.redMul(o.redISub(u)).redISub(c)), (r = this.y.redAdd(this.y));
        } else {
            var d = this.x.redSqr(),
                f = this.y.redSqr(),
                _ = f.redSqr(),
                h = this.x.redAdd(f).redSqr().redISub(d).redISub(_);
            h = h.redIAdd(h);
            var p = d.redAdd(d).redIAdd(d),
                m = p.redSqr(),
                g = _.redIAdd(_);
            (g = (g = g.redIAdd(g)).redIAdd(g)), (e = m.redISub(h).redISub(h)), (n = p.redMul(h.redISub(e)).redISub(g)), (r = (r = this.y.redMul(this.z)).redIAdd(r));
        }
        return this.curve.jpoint(e, n, r);
    }),
    (d.prototype._threeDbl = function () {
        if (this.zOne) {
            var e,
                n,
                r,
                i = this.x.redSqr(),
                a = this.y.redSqr(),
                s = a.redSqr(),
                o = this.x.redAdd(a).redSqr().redISub(i).redISub(s);
            o = o.redIAdd(o);
            var l = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
                u = l.redSqr().redISub(o).redISub(o);
            e = u;
            var c = s.redIAdd(s);
            (c = (c = c.redIAdd(c)).redIAdd(c)), (n = l.redMul(o.redISub(u)).redISub(c)), (r = this.y.redAdd(this.y));
        } else {
            var d = this.z.redSqr(),
                f = this.y.redSqr(),
                _ = this.x.redMul(f),
                h = this.x.redSub(d).redMul(this.x.redAdd(d));
            h = h.redAdd(h).redIAdd(h);
            var p = _.redIAdd(_),
                m = (p = p.redIAdd(p)).redAdd(p);
            (e = h.redSqr().redISub(m)), (r = this.y.redAdd(this.z).redSqr().redISub(f).redISub(d));
            var g = f.redSqr();
            (g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g)), (n = h.redMul(p.redISub(e)).redISub(g));
        }
        return this.curve.jpoint(e, n, r);
    }),
    (d.prototype._dbl = function () {
        var e = this.curve.a,
            n = this.x,
            r = this.y,
            i = this.z,
            a = i.redSqr().redSqr(),
            s = n.redSqr(),
            o = r.redSqr(),
            l = s.redAdd(s).redIAdd(s).redIAdd(e.redMul(a)),
            u = n.redAdd(n),
            c = (u = u.redIAdd(u)).redMul(o),
            d = l.redSqr().redISub(c.redAdd(c)),
            f = c.redISub(d),
            _ = o.redSqr();
        _ = (_ = (_ = _.redIAdd(_)).redIAdd(_)).redIAdd(_);
        var h = l.redMul(f).redISub(_),
            p = r.redAdd(r).redMul(i);
        return this.curve.jpoint(d, h, p);
    }),
    (d.prototype.trpl = function () {
        if (!this.curve.zeroA) return this.dbl().add(this);
        var e = this.x.redSqr(),
            n = this.y.redSqr(),
            r = this.z.redSqr(),
            i = n.redSqr(),
            a = e.redAdd(e).redIAdd(e),
            s = a.redSqr(),
            o = this.x.redAdd(n).redSqr().redISub(e).redISub(i),
            l = (o = (o = (o = o.redIAdd(o)).redAdd(o).redIAdd(o)).redISub(s)).redSqr(),
            u = i.redIAdd(i);
        u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
        var c = a.redIAdd(o).redSqr().redISub(s).redISub(l).redISub(u),
            d = n.redMul(c);
        d = (d = d.redIAdd(d)).redIAdd(d);
        var f = this.x.redMul(l).redISub(d);
        f = (f = f.redIAdd(f)).redIAdd(f);
        var _ = this.y.redMul(c.redMul(u.redISub(c)).redISub(o.redMul(l)));
        _ = (_ = (_ = _.redIAdd(_)).redIAdd(_)).redIAdd(_);
        var h = this.z.redAdd(o).redSqr().redISub(r).redISub(l);
        return this.curve.jpoint(f, _, h);
    }),
    (d.prototype.mul = function (e, n) {
        return (e = new a(e, n)), this.curve._wnafMul(this, e);
    }),
    (d.prototype.eq = function (e) {
        if ('affine' === e.type) return this.eq(e.toJ());
        if (this === e) return !0;
        var n = this.z.redSqr(),
            r = e.z.redSqr();
        if (0 !== this.x.redMul(r).redISub(e.x.redMul(n)).cmpn(0)) return !1;
        var i = n.redMul(this.z),
            a = r.redMul(e.z);
        return 0 === this.y.redMul(a).redISub(e.y.redMul(i)).cmpn(0);
    }),
    (d.prototype.eqXToP = function (e) {
        var n = this.z.redSqr(),
            r = e.toRed(this.curve.red).redMul(n);
        if (0 === this.x.cmp(r)) return !0;
        for (var i = e.clone(), a = this.curve.redN.redMul(n); ; ) {
            if ((i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)) return !1;
            if ((r.redIAdd(a), 0 === this.x.cmp(r))) return !0;
        }
    }),
    (d.prototype.inspect = function () {
        return this.isInfinity() ? '<EC JPoint Infinity>' : '<EC JPoint x: ' + this.x.toString(16, 2) + ' y: ' + this.y.toString(16, 2) + ' z: ' + this.z.toString(16, 2) + '>';
    }),
    (d.prototype.isInfinity = function () {
        return 0 === this.z.cmpn(0);
    });
