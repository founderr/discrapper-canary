(e.exports = o), (o.default = o), (o.stable = c), (o.stableStringify = c);
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
function o(e, t, n, o) {
    void 0 === o && (o = a()), l(e, '', 0, [], void 0, 0, o);
    try {
        s = 0 === i.length ? JSON.stringify(e, t, n) : JSON.stringify(e, _(t), n);
    } catch (e) {
        return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
    } finally {
        for (; 0 !== r.length; ) {
            var s,
                u = r.pop();
            4 === u.length ? Object.defineProperty(u[0], u[1], u[3]) : (u[0][u[1]] = u[2]);
        }
    }
    return s;
}
function s(e, t, n, a) {
    var o = Object.getOwnPropertyDescriptor(a, n);
    void 0 !== o.get ? (o.configurable ? (Object.defineProperty(a, n, { value: e }), r.push([a, n, t, o])) : i.push([t, n, e])) : ((a[n] = e), r.push([a, n, t]));
}
function l(e, r, i, a, o, u, c) {
    if (((u += 1), 'object' == typeof e && null !== e)) {
        for (d = 0; d < a.length; d++)
            if (a[d] === e) {
                s(n, e, r, o);
                return;
            }
        if ((void 0 !== c.depthLimit && u > c.depthLimit) || (void 0 !== c.edgesLimit && i + 1 > c.edgesLimit)) {
            s(t, e, r, o);
            return;
        }
        if ((a.push(e), Array.isArray(e))) for (d = 0; d < e.length; d++) l(e[d], d, d, a, e, u, c);
        else {
            var d,
                _ = Object.keys(e);
            for (d = 0; d < _.length; d++) {
                var E = _[d];
                l(e[E], E, d, a, e, u, c);
            }
        }
        a.pop();
    }
}
function u(e, t) {
    return e < t ? -1 : e > t ? 1 : 0;
}
function c(e, t, n, o) {
    void 0 === o && (o = a());
    var s,
        l = d(e, '', 0, [], void 0, 0, o) || e;
    try {
        s = 0 === i.length ? JSON.stringify(l, t, n) : JSON.stringify(l, _(t), n);
    } catch (e) {
        return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
    } finally {
        for (; 0 !== r.length; ) {
            var u = r.pop();
            4 === u.length ? Object.defineProperty(u[0], u[1], u[3]) : (u[0][u[1]] = u[2]);
        }
    }
    return s;
}
function d(e, i, a, o, l, c, _) {
    if (((c += 1), 'object' == typeof e && null !== e)) {
        for (E = 0; E < o.length; E++)
            if (o[E] === e) {
                s(n, e, i, l);
                return;
            }
        try {
            if ('function' == typeof e.toJSON) return;
        } catch (e) {
            return;
        }
        if ((void 0 !== _.depthLimit && c > _.depthLimit) || (void 0 !== _.edgesLimit && a + 1 > _.edgesLimit)) {
            s(t, e, i, l);
            return;
        }
        if ((o.push(e), Array.isArray(e))) for (E = 0; E < e.length; E++) d(e[E], E, E, o, e, c, _);
        else {
            var E,
                f = {},
                h = Object.keys(e).sort(u);
            for (E = 0; E < h.length; E++) {
                var p = h[E];
                d(e[p], p, E, o, e, c, _), (f[p] = e[p]);
            }
            if (void 0 === l) return f;
            r.push([l, i, e]), (l[i] = f);
        }
        o.pop();
    }
}
function _(e) {
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
