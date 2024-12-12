(e.exports = o), (o.default = o), (o.stable = d), (o.stableStringify = d);
var n = '[...]',
    r = '[Circular]',
    i = [],
    a = [];
function s() {
    return {
        depthLimit: Number.MAX_SAFE_INTEGER,
        edgesLimit: Number.MAX_SAFE_INTEGER
    };
}
function o(e, n, r, o) {
    void 0 === o && (o = s()), u(e, '', 0, [], void 0, 0, o);
    try {
        l = 0 === a.length ? JSON.stringify(e, n, r) : JSON.stringify(e, _(n), r);
    } catch (e) {
        return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
    } finally {
        for (; 0 !== i.length; ) {
            var l,
                c = i.pop();
            4 === c.length ? Object.defineProperty(c[0], c[1], c[3]) : (c[0][c[1]] = c[2]);
        }
    }
    return l;
}
function l(e, n, r, s) {
    var o = Object.getOwnPropertyDescriptor(s, r);
    void 0 !== o.get ? (o.configurable ? (Object.defineProperty(s, r, { value: e }), i.push([s, r, n, o])) : a.push([n, r, e])) : ((s[r] = e), i.push([s, r, n]));
}
function u(e, i, a, s, o, c, d) {
    if (((c += 1), 'object' == typeof e && null !== e)) {
        for (f = 0; f < s.length; f++)
            if (s[f] === e) {
                l(r, e, i, o);
                return;
            }
        if ((void 0 !== d.depthLimit && c > d.depthLimit) || (void 0 !== d.edgesLimit && a + 1 > d.edgesLimit)) {
            l(n, e, i, o);
            return;
        }
        if ((s.push(e), Array.isArray(e))) for (f = 0; f < e.length; f++) u(e[f], f, f, s, e, c, d);
        else {
            var f,
                _ = Object.keys(e);
            for (f = 0; f < _.length; f++) {
                var h = _[f];
                u(e[h], h, f, s, e, c, d);
            }
        }
        s.pop();
    }
}
function c(e, n) {
    return e < n ? -1 : e > n ? 1 : 0;
}
function d(e, n, r, o) {
    void 0 === o && (o = s());
    var l,
        u = f(e, '', 0, [], void 0, 0, o) || e;
    try {
        l = 0 === a.length ? JSON.stringify(u, n, r) : JSON.stringify(u, _(n), r);
    } catch (e) {
        return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
    } finally {
        for (; 0 !== i.length; ) {
            var c = i.pop();
            4 === c.length ? Object.defineProperty(c[0], c[1], c[3]) : (c[0][c[1]] = c[2]);
        }
    }
    return l;
}
function f(e, a, s, o, u, d, _) {
    if (((d += 1), 'object' == typeof e && null !== e)) {
        for (h = 0; h < o.length; h++)
            if (o[h] === e) {
                l(r, e, a, u);
                return;
            }
        try {
            if ('function' == typeof e.toJSON) return;
        } catch (e) {
            return;
        }
        if ((void 0 !== _.depthLimit && d > _.depthLimit) || (void 0 !== _.edgesLimit && s + 1 > _.edgesLimit)) {
            l(n, e, a, u);
            return;
        }
        if ((o.push(e), Array.isArray(e))) for (h = 0; h < e.length; h++) f(e[h], h, h, o, e, d, _);
        else {
            var h,
                p = {},
                m = Object.keys(e).sort(c);
            for (h = 0; h < m.length; h++) {
                var g = m[h];
                f(e[g], g, h, o, e, d, _), (p[g] = e[g]);
            }
            if (void 0 === u) return p;
            i.push([u, a, e]), (u[a] = p);
        }
        o.pop();
    }
}
function _(e) {
    return (
        (e =
            void 0 !== e
                ? e
                : function (e, n) {
                      return n;
                  }),
        function (n, r) {
            if (a.length > 0)
                for (var i = 0; i < a.length; i++) {
                    var s = a[i];
                    if (s[1] === n && s[0] === r) {
                        (r = s[2]), a.splice(i, 1);
                        break;
                    }
                }
            return e.call(this, n, r);
        }
    );
}
