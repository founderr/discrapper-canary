n.d(t, {
    d: function () {
        return p;
    }
});
var r = n(717029),
    i = n(25487),
    a = n(846042),
    s = n(823498),
    o = n(964415);
function l(e) {
    return (l =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
              })(e);
}
function u(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
}
function c(e, t) {
    return (c =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function d(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function f(e) {
    return (f = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function _(e, t, n) {
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
var p = (function (e) {
    !(function (e, t) {
        if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        })),
            t && c(e, t);
    })(g, e);
    var t,
        n,
        r,
        p,
        h,
        m =
            ((t = g),
            (n = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r = f(t);
                return (
                    (e = n ? Reflect.construct(r, arguments, f(this).constructor) : r.apply(this, arguments)),
                    (function (e, t) {
                        return t && ('object' === l(t) || 'function' == typeof t) ? t : d(e);
                    })(this, e)
                );
            });
    function g() {
        var e;
        !(function (e, t) {
            if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
        })(this, g);
        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return _(d((e = m.call.apply(m, [this].concat(n)))), 'priority', 100), _(d(e), 'incompatibleTokens', ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']), e;
    }
    return (
        (r = g),
        (p = [
            {
                key: 'parse',
                value: function (e, t, n) {
                    switch (t) {
                        case 'I':
                            return (0, a.ie)(i.z.week, e);
                        case 'Io':
                            return n.ordinalNumber(e, { unit: 'week' });
                        default:
                            return (0, a.ZL)(t.length, e);
                    }
                }
            },
            {
                key: 'validate',
                value: function (e, t) {
                    return t >= 1 && t <= 53;
                }
            },
            {
                key: 'set',
                value: function (e, t, n) {
                    return (0, o.Z)((0, s.Z)(e, n));
                }
            }
        ]),
        u(r.prototype, p),
        g
    );
})(r._);
