var i = r(814033),
    a = r(526808);
function s(e) {
    this.rand = e || new a.Rand();
}
(e.exports = s),
    (s.create = function (e) {
        return new s(e);
    }),
    (s.prototype._randbelow = function (e) {
        var n = Math.ceil(e.bitLength() / 8);
        do var r = new i(this.rand.generate(n));
        while (r.cmp(e) >= 0);
        return r;
    }),
    (s.prototype._randrange = function (e, n) {
        var r = n.sub(e);
        return e.add(this._randbelow(r));
    }),
    (s.prototype.test = function (e, n, r) {
        var a = e.bitLength(),
            s = i.mont(e),
            o = new i(1).toRed(s);
        !n && (n = Math.max(1, (a / 48) | 0));
        for (var l = e.subn(1), u = 0; !l.testn(u); u++);
        for (var c = e.shrn(u), d = l.toRed(s), f = !0; n > 0; n--) {
            var _ = this._randrange(new i(2), l);
            r && r(_);
            var h = _.toRed(s).redPow(c);
            if (0 !== h.cmp(o) && 0 !== h.cmp(d)) {
                for (var p = 1; p < u; p++) {
                    if (0 === (h = h.redSqr()).cmp(o)) return !1;
                    if (0 === h.cmp(d)) break;
                }
                if (p === u) return !1;
            }
        }
        return f;
    }),
    (s.prototype.getDivisor = function (e, n) {
        var r = e.bitLength(),
            a = i.mont(e),
            s = new i(1).toRed(a);
        !n && (n = Math.max(1, (r / 48) | 0));
        for (var o = e.subn(1), l = 0; !o.testn(l); l++);
        for (var u = e.shrn(l), c = o.toRed(a); n > 0; n--) {
            var d = this._randrange(new i(2), o),
                f = e.gcd(d);
            if (0 !== f.cmpn(1)) return f;
            var _ = d.toRed(a).redPow(u);
            if (0 !== _.cmp(s) && 0 !== _.cmp(c)) {
                for (var h = 1; h < l; h++) {
                    if (0 === (_ = _.redSqr()).cmp(s)) return _.fromRed().subn(1).gcd(e);
                    if (0 === _.cmp(c)) break;
                }
                if (h === l) return (_ = _.redSqr()).fromRed().subn(1).gcd(e);
            }
        }
        return !1;
    });
