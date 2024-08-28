r.d(t, {
    $Q: function () {
        return c;
    },
    HK: function () {
        return I;
    },
    Jr: function () {
        return d;
    },
    Sh: function () {
        return l;
    },
    _j: function () {
        return u;
    },
    hl: function () {
        return E;
    },
    xp: function () {
        return s;
    },
    zf: function () {
        return T;
    }
});
var n = r(467510),
    a = r(309544),
    o = r(573736),
    i = r(622916),
    _ = r(886115);
function E(e, t, r) {
    if (!(t in e)) return;
    let n = e[t],
        a = r(n);
    'function' == typeof a && c(a, n), (e[t] = a);
}
function s(e, t, r) {
    try {
        Object.defineProperty(e, t, {
            value: r,
            writable: !0,
            configurable: !0
        });
    } catch (r) {
        a.X && i.kg.log(`Failed to add non-enumerable property "${t}" to object`, e);
    }
}
function c(e, t) {
    try {
        let r = t.prototype || {};
        (e.prototype = t.prototype = r), s(e, '__sentry_original__', t);
    } catch (e) {}
}
function I(e) {
    return e.__sentry_original__;
}
function u(e) {
    return Object.keys(e)
        .map((t) => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)
        .join('&');
}
function l(e) {
    if ((0, o.VZ)(e))
        return {
            message: e.message,
            name: e.name,
            stack: e.stack,
            ...A(e)
        };
    if (!(0, o.cO)(e)) return e;
    {
        let t = {
            type: e.type,
            target: R(e.target),
            currentTarget: R(e.currentTarget),
            ...A(e)
        };
        return 'undefined' != typeof CustomEvent && (0, o.V9)(e, CustomEvent) && (t.detail = e.detail), t;
    }
}
function R(e) {
    try {
        return (0, o.kK)(e) ? (0, n.Rt)(e) : Object.prototype.toString.call(e);
    } catch (e) {
        return '<unknown>';
    }
}
function A(e) {
    if ('object' != typeof e || null === e) return {};
    {
        let t = {};
        for (let r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t;
    }
}
function T(e, t = 40) {
    let r = Object.keys(l(e));
    r.sort();
    let n = r[0];
    if (!n) return '[object has no keys]';
    if (n.length >= t) return (0, _.$G)(n, t);
    for (let e = r.length; e > 0; e--) {
        let n = r.slice(0, e).join(', ');
        if (!(n.length > t)) {
            if (e === r.length) return n;
            return (0, _.$G)(n, t);
        }
    }
    return '';
}
function d(e) {
    return (function e(t, r) {
        if (
            (function (e) {
                if (!(0, o.PO)(e)) return !1;
                try {
                    let t = Object.getPrototypeOf(e).constructor.name;
                    return !t || 'Object' === t;
                } catch (e) {
                    return !0;
                }
            })(t)
        ) {
            let n = r.get(t);
            if (void 0 !== n) return n;
            let a = {};
            for (let n of (r.set(t, a), Object.keys(t))) void 0 !== t[n] && (a[n] = e(t[n], r));
            return a;
        }
        if (Array.isArray(t)) {
            let n = r.get(t);
            if (void 0 !== n) return n;
            let a = [];
            return (
                r.set(t, a),
                t.forEach((t) => {
                    a.push(e(t, r));
                }),
                a
            );
        }
        return t;
    })(e, new Map());
}
