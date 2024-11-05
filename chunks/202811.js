r.d(t, {
    Fv: function () {
        return i;
    },
    Qy: function () {
        return function e(t, r = 3, n = 102400) {
            let a = i(t, r);
            return (function (e) {
                return ~-encodeURI(JSON.stringify(e)).split(/%..|./).length;
            })(a) > n
                ? e(t, r - 1, n)
                : a;
        };
    }
});
var n = r(573736),
    a = r(41754),
    _ = r(370336),
    o = r(688838);
function i(e, t = 100, r = Infinity) {
    try {
        return (function e(t, r, i = Infinity, E = Infinity, c = (0, a.i)()) {
            let [s, l] = c;
            if (null == r || (['number', 'boolean', 'string'].includes(typeof r) && !Number.isNaN(r))) return r;
            let u = (function (e, t) {
                try {
                    if ('domain' === e && t && 'object' == typeof t && t._events) return '[Domain]';
                    if ('domainEmitter' === e) return '[DomainEmitter]';
                    if ('undefined' != typeof global && t === global) return '[Global]';
                    if ('undefined' != typeof window && t === window) return '[Window]';
                    if ('undefined' != typeof document && t === document) return '[Document]';
                    if ((0, n.y1)(t)) return '[VueViewModel]';
                    if ((0, n.Cy)(t)) return '[SyntheticEvent]';
                    if ('number' == typeof t && t != t) return '[NaN]';
                    if ('function' == typeof t) return `[Function: ${(0, o.$P)(t)}]`;
                    if ('symbol' == typeof t) return `[${String(t)}]`;
                    if ('bigint' == typeof t) return `[BigInt: ${String(t)}]`;
                    let r = (function (e) {
                        let t = Object.getPrototypeOf(e);
                        return t ? t.constructor.name : 'null prototype';
                    })(t);
                    if (/^HTML(\w*)Element$/.test(r)) return `[HTMLElement: ${r}]`;
                    return `[object ${r}]`;
                } catch (e) {
                    return `**non-serializable** (${e})`;
                }
            })(t, r);
            if (!u.startsWith('[object ')) return u;
            if (r.__sentry_skip_normalization__) return r;
            let I = 'number' == typeof r.__sentry_override_normalization_depth__ ? r.__sentry_override_normalization_depth__ : i;
            if (0 === I) return u.replace('object ', '');
            if (s(r)) return '[Circular ~]';
            if (r && 'function' == typeof r.toJSON)
                try {
                    let t = r.toJSON();
                    return e('', t, I - 1, E, c);
                } catch (e) {}
            let R = Array.isArray(r) ? [] : {},
                A = 0,
                N = (0, _.Sh)(r);
            for (let t in N) {
                if (!Object.prototype.hasOwnProperty.call(N, t)) continue;
                if (A >= E) {
                    R[t] = '[MaxProperties ~]';
                    break;
                }
                let r = N[t];
                (R[t] = e(t, r, I - 1, E, c)), A++;
            }
            return l(r), R;
        })('', e, t, r);
    } catch (e) {
        return { ERROR: `**non-serializable** (${e})` };
    }
}
