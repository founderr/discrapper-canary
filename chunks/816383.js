function r(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function i(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
}
function a(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e;
}
function o(e, t, n) {
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
n.d(t, {
    I: function () {
        return s;
    }
});
var s = (function () {
    function e(t, n) {
        r(this, e), o(this, 'xs', void 0), o(this, 'ys', void 0), o(this, 'c1s', void 0), o(this, 'c2s', void 0), o(this, 'c3s', void 0);
        for (var i, a, s, l = t.length, u = [], c = 0; c < l; c++) u.push(c);
        u.sort(function (e, n) {
            return t[e] < t[n] ? -1 : 1;
        });
        for (var d = [], _ = [], E = [], f = 0; f < l - 1; f++) (i = t[f + 1] - t[f]), (a = n[f + 1] - n[f]), _.push(i), d.push(a), E.push(a / i);
        for (var h = [E[0]], p = 0; p < _.length - 1; p++) {
            var m = E[p],
                I = E[p + 1];
            if (m * I <= 0) h.push(0);
            else {
                i = _[p];
                var T = _[p + 1],
                    g = i + T;
                h.push((3 * g) / ((g + T) / m + (g + i) / I));
            }
        }
        h.push(E[E.length - 1]);
        for (var S = [], A = [], v = 0; v < h.length - 1; v++) {
            s = E[v];
            var N = h[v],
                O = 1 / _[v],
                R = N + h[v + 1] - s - s;
            S.push((s - N - R) * O), A.push(R * O * O);
        }
        (this.xs = t), (this.ys = n), (this.c1s = h), (this.c2s = S), (this.c3s = A);
    }
    return (
        a(e, [
            {
                key: 'interpolate',
                value: function (e) {
                    var t,
                        n = this.xs,
                        r = this.ys,
                        i = this.c1s,
                        a = this.c2s,
                        o = this.c3s,
                        s = n.length - 1;
                    if (e === n[s]) return r[s];
                    for (var l = 0, u = o.length - 1; l <= u; ) {
                        var c = n[(t = Math.floor(0.5 * (l + u)))];
                        if (c < e) l = t + 1;
                        else {
                            if (!(c > e)) return r[t];
                            u = t - 1;
                        }
                    }
                    var d = e - n[(s = Math.max(0, u))],
                        _ = d * d;
                    return r[s] + i[s] * d + a[s] * _ + o[s] * d * _;
                }
            }
        ]),
        e
    );
})();
