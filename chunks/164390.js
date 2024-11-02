(e.exports = s), (s.default = s), (s.stable = u), (s.stableStringify = u);
var t = '[...]',
    n = '[Circular]',
    r = [],
    i = [];
function a() {
    return {
        depthLimit: Number.MAX_SAFE_INTEGER,
        edgesLimit: Number.MAX_SAFE_INTEGER
    };
}
function s(e, s, l, u) {
    void 0 === u && (u = a()),
        (function e(r, i, a, s, l, u, c) {
            if (((u += 1), 'object' == typeof r && null !== r)) {
                for (d = 0; d < s.length; d++)
                    if (s[d] === r) {
                        o(n, r, i, l);
                        return;
                    }
                if ((void 0 !== c.depthLimit && u > c.depthLimit) || (void 0 !== c.edgesLimit && a + 1 > c.edgesLimit)) {
                    o(t, r, i, l);
                    return;
                }
                if ((s.push(r), Array.isArray(r))) for (d = 0; d < r.length; d++) e(r[d], d, d, s, r, u, c);
                else {
                    var d,
                        f = Object.keys(r);
                    for (d = 0; d < f.length; d++) {
                        var _ = f[d];
                        e(r[_], _, d, s, r, u, c);
                    }
                }
                s.pop();
            }
        })(e, '', 0, [], void 0, 0, u);
    try {
        d = 0 === i.length ? JSON.stringify(e, s, l) : JSON.stringify(e, c(s), l);
    } catch (e) {
        return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
    } finally {
        for (; 0 !== r.length; ) {
            var d,
                f = r.pop();
            4 === f.length ? Object.defineProperty(f[0], f[1], f[3]) : (f[0][f[1]] = f[2]);
        }
    }
    return d;
}
function o(e, t, n, a) {
    var s = Object.getOwnPropertyDescriptor(a, n);
    void 0 !== s.get ? (s.configurable ? (Object.defineProperty(a, n, { value: e }), r.push([a, n, t, s])) : i.push([t, n, e])) : ((a[n] = e), r.push([a, n, t]));
}
function l(e, t) {
    return e < t ? -1 : e > t ? 1 : 0;
}
function u(e, s, u, d) {
    void 0 === d && (d = a());
    var f,
        _ =
            (function e(i, a, s, u, c, d, f) {
                if (((d += 1), 'object' == typeof i && null !== i)) {
                    for (_ = 0; _ < u.length; _++)
                        if (u[_] === i) {
                            o(n, i, a, c);
                            return;
                        }
                    try {
                        if ('function' == typeof i.toJSON) return;
                    } catch (e) {
                        return;
                    }
                    if ((void 0 !== f.depthLimit && d > f.depthLimit) || (void 0 !== f.edgesLimit && s + 1 > f.edgesLimit)) {
                        o(t, i, a, c);
                        return;
                    }
                    if ((u.push(i), Array.isArray(i))) for (_ = 0; _ < i.length; _++) e(i[_], _, _, u, i, d, f);
                    else {
                        var _,
                            h = {},
                            p = Object.keys(i).sort(l);
                        for (_ = 0; _ < p.length; _++) {
                            var m = p[_];
                            e(i[m], m, _, u, i, d, f), (h[m] = i[m]);
                        }
                        if (void 0 === c) return h;
                        r.push([c, a, i]), (c[a] = h);
                    }
                    u.pop();
                }
            })(e, '', 0, [], void 0, 0, d) || e;
    try {
        f = 0 === i.length ? JSON.stringify(_, s, u) : JSON.stringify(_, c(s), u);
    } catch (e) {
        return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
    } finally {
        for (; 0 !== r.length; ) {
            var h = r.pop();
            4 === h.length ? Object.defineProperty(h[0], h[1], h[3]) : (h[0][h[1]] = h[2]);
        }
    }
    return f;
}
function c(e) {
    return (
        (e =
            void 0 !== e
                ? e
                : function (e, t) {
                      return t;
                  }),
        function (t, n) {
            if (i.length > 0)
                for (var r = 0; r < i.length; r++) {
                    var a = i[r];
                    if (a[1] === t && a[0] === n) {
                        (n = a[2]), i.splice(r, 1);
                        break;
                    }
                }
            return e.call(this, t, n);
        }
    );
}
