var i = r(685053),
    a = r(814033),
    s = r(689118),
    o = r(806981),
    l = i.assert;
function u(e) {
    (this.twisted = (0 | e.a) != 1), (this.mOneA = this.twisted && (0 | e.a) == -1), (this.extended = this.mOneA), o.call(this, 'edwards', e), (this.a = new a(e.a, 16).umod(this.red.m)), (this.a = this.a.toRed(this.red)), (this.c = new a(e.c, 16).toRed(this.red)), (this.c2 = this.c.redSqr()), (this.d = new a(e.d, 16).toRed(this.red)), (this.dd = this.d.redAdd(this.d)), l(!this.twisted || 0 === this.c.fromRed().cmpn(1)), (this.oneC = (0 | e.c) == 1);
}
function c(e, n, r, i, s) {
    o.BasePoint.call(this, e, 'projective'), null === n && null === r && null === i ? ((this.x = this.curve.zero), (this.y = this.curve.one), (this.z = this.curve.one), (this.t = this.curve.zero), (this.zOne = !0)) : ((this.x = new a(n, 16)), (this.y = new a(r, 16)), (this.z = i ? new a(i, 16) : this.curve.one), (this.t = s && new a(s, 16)), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.y.red && (this.y = this.y.toRed(this.curve.red)), !this.z.red && (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), (this.zOne = this.z === this.curve.one), this.curve.extended && !this.t && ((this.t = this.x.redMul(this.y)), !this.zOne && (this.t = this.t.redMul(this.z.redInvm()))));
}
s(u, o),
    (e.exports = u),
    (u.prototype._mulA = function (e) {
        return this.mOneA ? e.redNeg() : this.a.redMul(e);
    }),
    (u.prototype._mulC = function (e) {
        return this.oneC ? e : this.c.redMul(e);
    }),
    (u.prototype.jpoint = function (e, n, r, i) {
        return this.point(e, n, r, i);
    }),
    (u.prototype.pointFromX = function (e, n) {
        !(e = new a(e, 16)).red && (e = e.toRed(this.red));
        var r = e.redSqr(),
            i = this.c2.redSub(this.a.redMul(r)),
            s = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
            o = i.redMul(s.redInvm()),
            l = o.redSqrt();
        if (0 !== l.redSqr().redSub(o).cmp(this.zero)) throw Error('invalid point');
        var u = l.fromRed().isOdd();
        return ((n && !u) || (!n && u)) && (l = l.redNeg()), this.point(e, l);
    }),
    (u.prototype.pointFromY = function (e, n) {
        !(e = new a(e, 16)).red && (e = e.toRed(this.red));
        var r = e.redSqr(),
            i = r.redSub(this.c2),
            s = r.redMul(this.d).redMul(this.c2).redSub(this.a),
            o = i.redMul(s.redInvm());
        if (0 === o.cmp(this.zero)) {
            if (!n) return this.point(this.zero, e);
            throw Error('invalid point');
        }
        var l = o.redSqrt();
        if (0 !== l.redSqr().redSub(o).cmp(this.zero)) throw Error('invalid point');
        return l.fromRed().isOdd() !== n && (l = l.redNeg()), this.point(l, e);
    }),
    (u.prototype.validate = function (e) {
        if (e.isInfinity()) return !0;
        e.normalize();
        var n = e.x.redSqr(),
            r = e.y.redSqr(),
            i = n.redMul(this.a).redAdd(r),
            a = this.c2.redMul(this.one.redAdd(this.d.redMul(n).redMul(r)));
        return 0 === i.cmp(a);
    }),
    s(c, o.BasePoint),
    (u.prototype.pointFromJSON = function (e) {
        return c.fromJSON(this, e);
    }),
    (u.prototype.point = function (e, n, r, i) {
        return new c(this, e, n, r, i);
    }),
    (c.fromJSON = function (e, n) {
        return new c(e, n[0], n[1], n[2]);
    }),
    (c.prototype.inspect = function () {
        return this.isInfinity() ? '<EC Point Infinity>' : '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' y: ' + this.y.fromRed().toString(16, 2) + ' z: ' + this.z.fromRed().toString(16, 2) + '>';
    }),
    (c.prototype.isInfinity = function () {
        return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || (this.zOne && 0 === this.y.cmp(this.curve.c)));
    }),
    (c.prototype._extDbl = function () {
        var e = this.x.redSqr(),
            n = this.y.redSqr(),
            r = this.z.redSqr();
        r = r.redIAdd(r);
        var i = this.curve._mulA(e),
            a = this.x.redAdd(this.y).redSqr().redISub(e).redISub(n),
            s = i.redAdd(n),
            o = s.redSub(r),
            l = i.redSub(n),
            u = a.redMul(o),
            c = s.redMul(l),
            d = a.redMul(l),
            f = o.redMul(s);
        return this.curve.point(u, c, f, d);
    }),
    (c.prototype._projDbl = function () {
        var e,
            n,
            r,
            i,
            a,
            s,
            o = this.x.redAdd(this.y).redSqr(),
            l = this.x.redSqr(),
            u = this.y.redSqr();
        if (this.curve.twisted) {
            var c = (i = this.curve._mulA(l)).redAdd(u);
            this.zOne ? ((e = o.redSub(l).redSub(u).redMul(c.redSub(this.curve.two))), (n = c.redMul(i.redSub(u))), (r = c.redSqr().redSub(c).redSub(c))) : ((a = this.z.redSqr()), (s = c.redSub(a).redISub(a)), (e = o.redSub(l).redISub(u).redMul(s)), (n = c.redMul(i.redSub(u))), (r = c.redMul(s)));
        } else (i = l.redAdd(u)), (a = this.curve._mulC(this.z).redSqr()), (s = i.redSub(a).redSub(a)), (e = this.curve._mulC(o.redISub(i)).redMul(s)), (n = this.curve._mulC(i).redMul(l.redISub(u))), (r = i.redMul(s));
        return this.curve.point(e, n, r);
    }),
    (c.prototype.dbl = function () {
        return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl();
    }),
    (c.prototype._extAdd = function (e) {
        var n = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
            r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
            i = this.t.redMul(this.curve.dd).redMul(e.t),
            a = this.z.redMul(e.z.redAdd(e.z)),
            s = r.redSub(n),
            o = a.redSub(i),
            l = a.redAdd(i),
            u = r.redAdd(n),
            c = s.redMul(o),
            d = l.redMul(u),
            f = s.redMul(u),
            _ = o.redMul(l);
        return this.curve.point(c, d, _, f);
    }),
    (c.prototype._projAdd = function (e) {
        var n,
            r,
            i = this.z.redMul(e.z),
            a = i.redSqr(),
            s = this.x.redMul(e.x),
            o = this.y.redMul(e.y),
            l = this.curve.d.redMul(s).redMul(o),
            u = a.redSub(l),
            c = a.redAdd(l),
            d = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(s).redISub(o),
            f = i.redMul(u).redMul(d);
        return this.curve.twisted ? ((n = i.redMul(c).redMul(o.redSub(this.curve._mulA(s)))), (r = u.redMul(c))) : ((n = i.redMul(c).redMul(o.redSub(s))), (r = this.curve._mulC(u).redMul(c))), this.curve.point(f, n, r);
    }),
    (c.prototype.add = function (e) {
        return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e);
    }),
    (c.prototype.mul = function (e) {
        return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e);
    }),
    (c.prototype.mulAdd = function (e, n, r) {
        return this.curve._wnafMulAdd(1, [this, n], [e, r], 2, !1);
    }),
    (c.prototype.jmulAdd = function (e, n, r) {
        return this.curve._wnafMulAdd(1, [this, n], [e, r], 2, !0);
    }),
    (c.prototype.normalize = function () {
        if (this.zOne) return this;
        var e = this.z.redInvm();
        return (this.x = this.x.redMul(e)), (this.y = this.y.redMul(e)), this.t && (this.t = this.t.redMul(e)), (this.z = this.curve.one), (this.zOne = !0), this;
    }),
    (c.prototype.neg = function () {
        return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg());
    }),
    (c.prototype.getX = function () {
        return this.normalize(), this.x.fromRed();
    }),
    (c.prototype.getY = function () {
        return this.normalize(), this.y.fromRed();
    }),
    (c.prototype.eq = function (e) {
        return this === e || (0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY()));
    }),
    (c.prototype.eqXToP = function (e) {
        var n = e.toRed(this.curve.red).redMul(this.z);
        if (0 === this.x.cmp(n)) return !0;
        for (var r = e.clone(), i = this.curve.redN.redMul(this.z); ; ) {
            if ((r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0)) return !1;
            if ((n.redIAdd(i), 0 === this.x.cmp(n))) return !0;
        }
    }),
    (c.prototype.toP = c.prototype.normalize),
    (c.prototype.mixedAdd = c.prototype.add);
