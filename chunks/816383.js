n.d(t, {
    I: function () {
        return a;
    }
});
function r(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
}
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var a = (function () {
    var e, t, n;
    function a(e, t) {
        !(function (e, t) {
            if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
        })(this, a),
            i(this, 'xs', void 0),
            i(this, 'ys', void 0),
            i(this, 'c1s', void 0),
            i(this, 'c2s', void 0),
            i(this, 'c3s', void 0);
        for (var n, r, s, o = e.length, l = [], u = 0; u < o; u++) l.push(u);
        l.sort(function (t, n) {
            return e[t] < e[n] ? -1 : 1;
        });
        for (var c = [], d = [], f = [], _ = 0; _ < o - 1; _++) (n = e[_ + 1] - e[_]), (r = t[_ + 1] - t[_]), d.push(n), c.push(r), f.push(r / n);
        for (var p = [f[0]], h = 0; h < d.length - 1; h++) {
            var m = f[h],
                g = f[h + 1];
            if (m * g <= 0) p.push(0);
            else {
                n = d[h];
                var E = d[h + 1],
                    v = n + E;
                p.push((3 * v) / ((v + E) / m + (v + n) / g));
            }
        }
        p.push(f[f.length - 1]);
        for (var b = [], I = [], T = 0; T < p.length - 1; T++) {
            s = f[T];
            var S = p[T],
                y = 1 / d[T],
                A = S + p[T + 1] - s - s;
            b.push((s - S - A) * y), I.push(A * y * y);
        }
        (this.xs = e), (this.ys = t), (this.c1s = p), (this.c2s = b), (this.c3s = I);
    }
    return (
        (e = a),
        (t = [
            {
                key: 'interpolate',
                value: function (e) {
                    var t,
                        n = this.xs,
                        r = this.ys,
                        i = this.c1s,
                        a = this.c2s,
                        s = this.c3s,
                        o = n.length - 1;
                    if (e === n[o]) return r[o];
                    for (var l = 0, u = s.length - 1; l <= u; ) {
                        var c = n[(t = Math.floor(0.5 * (l + u)))];
                        if (c < e) l = t + 1;
                        else {
                            if (!(c > e)) return r[t];
                            u = t - 1;
                        }
                    }
                    var d = e - n[(o = Math.max(0, u))],
                        f = d * d;
                    return r[o] + i[o] * d + a[o] * f + s[o] * d * f;
                }
            }
        ]),
        r(e.prototype, t),
        a
    );
})();
