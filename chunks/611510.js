n.d(t, {
    C: function () {
        return s;
    }
});
var r = n(135891),
    i = n(695170),
    a = n(686942);
function o(e, t) {
    if (Array.isArray(e))
        return (
            !!Array.isArray(t) &&
            e.length === t.length &&
            e.every(function (e, n) {
                return e.getTime() === t[n].getTime();
            })
        );
    return e instanceof Date ? t instanceof Date && e.getTime() === t.getTime() : e === t;
}
var s = (function () {
    function e() {
        (this.all = !1), (this.before = []), (this.after = []), (this.between = []);
    }
    return (
        (e.prototype._cacheAdd = function (e, t, n) {
            t && (t = t instanceof Date ? (0, i.d9)(t) : (0, i.L1)(t)), 'all' === e ? (this.all = t) : ((n._value = t), this[e].push(n));
        }),
        (e.prototype._cacheGet = function (e, t) {
            var n = !1,
                s = t ? Object.keys(t) : [],
                l = function (e) {
                    for (var n = 0; n < s.length; n++) {
                        var r = s[n];
                        if (!o(t[r], e[r])) return !0;
                    }
                    return !1;
                },
                u = this[e];
            if ('all' === e) n = this.all;
            else if ((0, a.kJ)(u))
                for (var c = 0; c < u.length; c++) {
                    var d = u[c];
                    if (!(s.length && l(d))) {
                        n = d._value;
                        break;
                    }
                }
            if (!n && this.all) {
                for (var _ = new r.Z(e, t), c = 0; c < this.all.length && _.accept(this.all[c]); c++);
                (n = _.getValue()), this._cacheAdd(e, n, t);
            }
            return (0, a.kJ)(n) ? (0, i.L1)(n) : n instanceof Date ? (0, i.d9)(n) : n;
        }),
        e
    );
})();
