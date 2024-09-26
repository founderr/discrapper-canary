n.d(t, {
    VK: function () {
        return d;
    },
    rU: function () {
        return I;
    }
});
var r = n(266067),
    i = n(919499),
    a = n(470079),
    o = n(539528),
    s = n(476400);
var l = n(599295),
    u = n(781212),
    c = n(568895),
    d = (function (e) {
        function t() {
            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return ((t = e.call.apply(e, [this].concat(r)) || this).history = (0, o.lX)(t.props)), t;
        }
        return (
            (0, i.Z)(t, e),
            (t.prototype.render = function () {
                return a.createElement(r.F0, {
                    history: this.history,
                    children: this.props.children
                });
            }),
            t
        );
    })(a.Component);
a.Component;
var _ = function (e, t) {
        return 'function' == typeof e ? e(t) : e;
    },
    E = function (e, t) {
        return 'string' == typeof e ? (0, o.ob)(e, null, null, t) : e;
    },
    f = function (e) {
        return e;
    },
    h = a.forwardRef;
function p(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
void 0 === h && (h = f);
var m = h(function (e, t) {
        var n = e.innerRef,
            r = e.navigate,
            i = e.onClick,
            o = (0, u.Z)(e, ['innerRef', 'navigate', 'onClick']),
            s = o.target,
            c = (0, l.Z)({}, o, {
                onClick: function (e) {
                    try {
                        i && i(e);
                    } catch (t) {
                        throw (e.preventDefault(), t);
                    }
                    !e.defaultPrevented && 0 === e.button && (!s || '_self' === s) && !p(e) && (e.preventDefault(), r());
                }
            });
        return f !== h ? (c.ref = t || n) : (c.ref = n), a.createElement('a', c);
    }),
    I = h(function (e, t) {
        var n = e.component,
            i = void 0 === n ? m : n,
            o = e.replace,
            s = e.to,
            d = e.innerRef,
            p = (0, u.Z)(e, ['component', 'replace', 'to', 'innerRef']);
        return a.createElement(r.s6.Consumer, null, function (e) {
            e || (0, c.Z)(!1);
            var n = e.history,
                r = E(_(s, e.location), e.location),
                u = r ? n.createHref(r) : '',
                m = (0, l.Z)({}, p, {
                    href: u,
                    navigate: function () {
                        var t = _(s, e.location);
                        (o ? n.replace : n.push)(t);
                    }
                });
            return f !== h ? (m.ref = t || d) : (m.innerRef = d), a.createElement(i, m);
        });
    }),
    T = function (e) {
        return e;
    },
    g = a.forwardRef;
function S() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t
        .filter(function (e) {
            return e;
        })
        .join(' ');
}
void 0 === g && (g = T),
    g(function (e, t) {
        var n = e['aria-current'],
            i = void 0 === n ? 'page' : n,
            o = e.activeClassName,
            s = void 0 === o ? 'active' : o,
            d = e.activeStyle,
            f = e.className,
            h = e.exact,
            p = e.isActive,
            m = e.location,
            A = e.sensitive,
            v = e.strict,
            N = e.style,
            O = e.to,
            R = e.innerRef,
            C = (0, u.Z)(e, ['aria-current', 'activeClassName', 'activeStyle', 'className', 'exact', 'isActive', 'location', 'sensitive', 'strict', 'style', 'to', 'innerRef']);
        return a.createElement(r.s6.Consumer, null, function (e) {
            e || (0, c.Z)(!1);
            var n = m || e.location,
                o = E(_(O, n), n),
                u = o.pathname,
                y = u && u.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1'),
                L = y
                    ? (0, r.LX)(n.pathname, {
                          path: y,
                          exact: h,
                          sensitive: A,
                          strict: v
                      })
                    : null,
                b = !!(p ? p(L, n) : L),
                D = b ? S(f, s) : f,
                M = b ? (0, l.Z)({}, N, {}, d) : N,
                P = (0, l.Z)(
                    {
                        'aria-current': (b && i) || null,
                        className: D,
                        style: M,
                        to: o
                    },
                    C
                );
            return T !== g ? (P.ref = t || R) : (P.innerRef = R), a.createElement(I, P);
        });
    });
