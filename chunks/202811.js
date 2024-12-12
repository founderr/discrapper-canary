r.d(t, {
    Fv: function () {
        return E;
    },
    Qy: function () {
        return function e(t, r = 3, a = 102400) {
            let n = E(t, r);
            return (function (e) {
                return ~-encodeURI(JSON.stringify(e)).split(/%..|./).length;
            })(n) > a
                ? e(t, r - 1, a)
                : n;
        };
    }
});
var a = r(573736),
    n = r(41754),
    _ = r(370336),
    o = r(688838);
function E(e, t = 100, r = Infinity) {
    try {
        return (function e(t, r, E = Infinity, i = Infinity, c = (0, n.i)()) {
            let [s, l] = c;
            if (null == r || (['number', 'boolean', 'string'].includes(typeof r) && !Number.isNaN(r))) return r;
            let I = (function (e, t) {
                try {
                    if ('domain' === e && t && 'object' == typeof t && t._events) return '[Domain]';
                    if ('domainEmitter' === e) return '[DomainEmitter]';
                    if ('undefined' != typeof global && t === global) return '[Global]';
                    if ('undefined' != typeof window && t === window) return '[Window]';
                    if ('undefined' != typeof document && t === document) return '[Document]';
                    if ((0, a.y1)(t)) return '[VueViewModel]';
                    if ((0, a.Cy)(t)) return '[SyntheticEvent]';
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
            if (!I.startsWith('[object ')) return I;
            if (r.__sentry_skip_normalization__) return r;
            let u = 'number' == typeof r.__sentry_override_normalization_depth__ ? r.__sentry_override_normalization_depth__ : E;
            if (0 === u) return I.replace('object ', '');
            if (s(r)) return '[Circular ~]';
            if (r && 'function' == typeof r.toJSON)
                try {
                    let t = r.toJSON();
                    return e('', t, u - 1, i, c);
                } catch (e) {}
            let R = Array.isArray(r) ? [] : {},
                A = 0,
                T = (0, _.Sh)(r);
            for (let t in T) {
                if (!Object.prototype.hasOwnProperty.call(T, t)) continue;
                if (A >= i) {
                    R[t] = '[MaxProperties ~]';
                    break;
                }
                let r = T[t];
                (R[t] = e(t, r, u - 1, i, c)), A++;
            }
            return l(r), R;
        })('', e, t, r);
    } catch (e) {
        return { ERROR: `**non-serializable** (${e})` };
    }
}
