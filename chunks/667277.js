n.r(t),
    n.d(t, {
        default: function () {
            return O;
        }
    });
var r = n(393655),
    i = n(465735),
    a = n(528734),
    s = n(544991),
    o = n(128961),
    l = n(424421),
    u = n(198050),
    c = n(217224),
    d = n(951516),
    _ = n(608297),
    E = n(416778),
    f = n(633605);
function h(e) {
    return (h =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
              })(e);
}
function p(e, t) {
    if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (
            Array.isArray(e) ||
            (i = (function (e, t) {
                if (e) {
                    if ('string' == typeof e) return I(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
                    if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t);
                }
            })(e)) ||
            (t && e && 'number' == typeof e.length)
        ) {
            i && (e = i);
            var n = 0,
                r = function () {};
            return {
                s: r,
                n: function () {
                    return n >= e.length
                        ? { done: !0 }
                        : {
                              done: !1,
                              value: e[n++]
                          };
                },
                e: function (e) {
                    throw e;
                },
                f: r
            };
        }
        throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    var i,
        a,
        s = !0,
        o = !1;
    return {
        s: function () {
            i = e[Symbol.iterator]();
        },
        n: function () {
            var e = i.next();
            return (s = e.done), e;
        },
        e: function (e) {
            (o = !0), (a = e);
        },
        f: function () {
            try {
                !s && null != i.return && i.return();
            } finally {
                if (o) throw a;
            }
        }
    };
}
function I(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
var m = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    T = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    S = /^'([^]*?)'?$/,
    g = /''/g,
    A = /\S/,
    N = /[a-zA-Z]/;
function O(e, t, n, I) {
    (0, d.Z)(3, arguments);
    var O = String(e),
        R = String(t),
        v = (0, f.j)(),
        C = null !== (U = null !== (w = null == I ? void 0 : I.locale) && void 0 !== w ? w : v.locale) && void 0 !== U ? U : r.Z;
    if (!C.match) throw RangeError('locale must contain match property');
    var L = (0, c.Z)(null !== (x = null !== (G = null !== (k = null !== (B = null == I ? void 0 : I.firstWeekContainsDate) && void 0 !== B ? B : null == I ? void 0 : null === (F = I.locale) || void 0 === F ? void 0 : null === (V = F.options) || void 0 === V ? void 0 : V.firstWeekContainsDate) && void 0 !== k ? k : v.firstWeekContainsDate) && void 0 !== G ? G : null === (H = v.locale) || void 0 === H ? void 0 : null === (Z = H.options) || void 0 === Z ? void 0 : Z.firstWeekContainsDate) && void 0 !== x ? x : 1);
    if (!(L >= 1 && L <= 7)) throw RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var D = (0, c.Z)(null !== (Y = null !== (j = null !== (W = null !== (K = null == I ? void 0 : I.weekStartsOn) && void 0 !== K ? K : null == I ? void 0 : null === (z = I.locale) || void 0 === z ? void 0 : null === (q = z.options) || void 0 === q ? void 0 : q.weekStartsOn) && void 0 !== W ? W : v.weekStartsOn) && void 0 !== j ? j : null === (Q = v.locale) || void 0 === Q ? void 0 : null === (X = Q.options) || void 0 === X ? void 0 : X.weekStartsOn) && void 0 !== Y ? Y : 0);
    if (!(D >= 0 && D <= 6)) throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
    if ('' === R) return '' === O ? (0, a.default)(n) : new Date(NaN);
    var y = {
            firstWeekContainsDate: L,
            weekStartsOn: D,
            locale: C
        },
        b = [new _.GT()],
        M = R.match(T)
            .map(function (e) {
                var t = e[0];
                return t in o.Z ? (0, o.Z[t])(e, C.formatLong) : e;
            })
            .join('')
            .match(m),
        P = [],
        U,
        w,
        x,
        G,
        k,
        B,
        F,
        V,
        H,
        Z,
        Y,
        j,
        W,
        K,
        z,
        q,
        Q,
        X,
        $,
        J = p(M);
    try {
        for (J.s(); !($ = J.n()).done; ) {
            var ee = (function () {
                var t = $.value;
                !(null != I && I.useAdditionalWeekYearTokens) && (0, u.Do)(t) && (0, u.qp)(t, R, e), !(null != I && I.useAdditionalDayOfYearTokens) && (0, u.Iu)(t) && (0, u.qp)(t, R, e);
                var n = t[0],
                    r = E.f[n];
                if (r) {
                    var i = r.incompatibleTokens;
                    if (Array.isArray(i)) {
                        var a = P.find(function (e) {
                            return i.includes(e.token) || e.token === n;
                        });
                        if (a) throw RangeError("The format string mustn't contain `".concat(a.fullToken, '` and `').concat(t, '` at the same time'));
                    } else if ('*' === r.incompatibleTokens && P.length > 0) throw RangeError("The format string mustn't contain `".concat(t, '` and any other token at the same time'));
                    P.push({
                        token: n,
                        fullToken: t
                    });
                    var s = r.run(O, t, C.match, y);
                    if (!s) return { v: new Date(NaN) };
                    b.push(s.setter), (O = s.rest);
                } else {
                    if (n.match(N)) throw RangeError('Format string contains an unescaped latin alphabet character `' + n + '`');
                    if (
                        ("''" === t
                            ? (t = "'")
                            : "'" === n &&
                              (t = (function (e) {
                                  return e.match(S)[1].replace(g, "'");
                              })(t)),
                        0 !== O.indexOf(t))
                    )
                        return { v: new Date(NaN) };
                    O = O.slice(t.length);
                }
            })();
            if ('object' === h(ee)) return ee.v;
        }
    } catch (e) {
        J.e(e);
    } finally {
        J.f();
    }
    if (O.length > 0 && A.test(O)) return new Date(NaN);
    var et = b
            .map(function (e) {
                return e.priority;
            })
            .sort(function (e, t) {
                return t - e;
            })
            .filter(function (e, t, n) {
                return n.indexOf(e) === t;
            })
            .map(function (e) {
                return b
                    .filter(function (t) {
                        return t.priority === e;
                    })
                    .sort(function (e, t) {
                        return t.subPriority - e.subPriority;
                    });
            })
            .map(function (e) {
                return e[0];
            }),
        en = (0, a.default)(n);
    if (isNaN(en.getTime())) return new Date(NaN);
    var er = (0, i.Z)(en, (0, l.Z)(en)),
        ei = {},
        ea,
        es = p(et);
    try {
        for (es.s(); !(ea = es.n()).done; ) {
            var eo = ea.value;
            if (!eo.validate(er, y)) return new Date(NaN);
            var el = eo.set(er, ei, y);
            Array.isArray(el) ? ((er = el[0]), (0, s.Z)(ei, el[1])) : (er = el);
        }
    } catch (e) {
        es.e(e);
    } finally {
        es.f();
    }
    return er;
}
