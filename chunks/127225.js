r.d(n, {
    W: function () {
        return v;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(468204),
    o = r(348288),
    l = ['children'];
function u(e, n) {
    return h(e) || _(e, n) || d(e, n) || c();
}
function c() {
    throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function d(e, n) {
    if (e) {
        if ('string' == typeof e) return f(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
        if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return f(e, n);
    }
}
function f(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var r = 0, i = Array(n); r < n; r++) i[r] = e[r];
    return i;
}
function _(e, n) {
    var r,
        i,
        a = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (null != a) {
        var s = [],
            o = !0,
            l = !1;
        try {
            for (a = a.call(e); !(o = (r = a.next()).done) && (s.push(r.value), !n || s.length !== n); o = !0);
        } catch (e) {
            (l = !0), (i = e);
        } finally {
            try {
                !o && null != a.return && a.return();
            } finally {
                if (l) throw i;
            }
        }
        return s;
    }
}
function h(e) {
    if (Array.isArray(e)) return e;
}
function p(e, n) {
    if (null == e) return {};
    var r,
        i,
        a = m(e, n);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++) {
            if (((r = s[i]), !(n.indexOf(r) >= 0))) Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        }
    }
    return a;
}
function m(e, n) {
    if (null == e) return {};
    var r,
        i,
        a = {},
        s = Object.keys(e);
    for (i = 0; i < s.length; i++) (r = s[i]), !(n.indexOf(r) >= 0) && (a[r] = e[r]);
    return a;
}
var g = 0,
    E = Symbol.for('__REACT_DND_CONTEXT_INSTANCE__'),
    v = (0, a.memo)(function (e) {
        var n = e.children,
            r = u(I(p(e, l)), 2),
            s = r[0],
            c = r[1];
        return (
            (0, a.useEffect)(function () {
                if (c) {
                    var e = b();
                    return (
                        ++g,
                        function () {
                            0 == --g && (e[E] = null);
                        }
                    );
                }
            }, []),
            (0, i.jsx)(o.L.Provider, Object.assign({ value: s }, { children: n }), void 0)
        );
    });
function I(e) {
    return 'manager' in e ? [{ dragDropManager: e.manager }, !1] : [T(e.backend, e.context, e.options, e.debugMode), !e.context];
}
function T(e) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b(),
        r = arguments.length > 2 ? arguments[2] : void 0,
        i = arguments.length > 3 ? arguments[3] : void 0,
        a = n;
    return !a[E] && (a[E] = { dragDropManager: (0, s.i)(e, n, r, i) }), a[E];
}
function b() {
    return void 0 !== r.g ? r.g : window;
}
