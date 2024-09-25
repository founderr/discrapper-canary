n.r(t),
    n.d(t, {
        default: function () {
            return O;
        }
    });
var r = n(393655),
    i = n(465735),
    a = n(528734),
    o = n(544991),
    s = n(128961),
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
        if (Array.isArray(e) || (i = m(e)) || (t && e && 'number' == typeof e.length)) {
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
        o = !0,
        s = !1;
    return {
        s: function () {
            i = e[Symbol.iterator]();
        },
        n: function () {
            var e = i.next();
            return (o = e.done), e;
        },
        e: function (e) {
            (s = !0), (a = e);
        },
        f: function () {
            try {
                !o && null != i.return && i.return();
            } finally {
                if (s) throw a;
            }
        }
    };
}
function m(e, t) {
    if (e) {
        if ('string' == typeof e) return I(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t);
    }
}
function I(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
var T = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    g = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    S = /^'([^]*?)'?$/,
    A = /''/g,
    v = /\S/,
    N = /[a-zA-Z]/;
function O(e, t, n, m) {
    (0, d.Z)(3, arguments);
    var I = String(e),
        S = String(t),
        A = (0, f.j)(),
        O = null !== (P = null !== (U = null == m ? void 0 : m.locale) && void 0 !== U ? U : A.locale) && void 0 !== P ? P : r.Z;
    if (!O.match) throw RangeError('locale must contain match property');
    var C = (0, c.Z)(null !== (w = null !== (x = null !== (G = null !== (k = null == m ? void 0 : m.firstWeekContainsDate) && void 0 !== k ? k : null == m ? void 0 : null === (B = m.locale) || void 0 === B ? void 0 : null === (F = B.options) || void 0 === F ? void 0 : F.firstWeekContainsDate) && void 0 !== G ? G : A.firstWeekContainsDate) && void 0 !== x ? x : null === (Z = A.locale) || void 0 === Z ? void 0 : null === (V = Z.options) || void 0 === V ? void 0 : V.firstWeekContainsDate) && void 0 !== w ? w : 1);
    if (!(C >= 1 && C <= 7)) throw RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var y = (0, c.Z)(null !== (H = null !== (Y = null !== (j = null !== (W = null == m ? void 0 : m.weekStartsOn) && void 0 !== W ? W : null == m ? void 0 : null === (K = m.locale) || void 0 === K ? void 0 : null === (z = K.options) || void 0 === z ? void 0 : z.weekStartsOn) && void 0 !== j ? j : A.weekStartsOn) && void 0 !== Y ? Y : null === (q = A.locale) || void 0 === q ? void 0 : null === (Q = q.options) || void 0 === Q ? void 0 : Q.weekStartsOn) && void 0 !== H ? H : 0);
    if (!(y >= 0 && y <= 6)) throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
    if ('' === S) return '' === I ? (0, a.default)(n) : new Date(NaN);
    var b = {
            firstWeekContainsDate: C,
            weekStartsOn: y,
            locale: O
        },
        L = [new _.GT()],
        D = S.match(g)
            .map(function (e) {
                var t = e[0];
                return t in s.Z ? (0, s.Z[t])(e, O.formatLong) : e;
            })
            .join('')
            .match(T),
        M = [],
        P,
        U,
        w,
        x,
        G,
        k,
        B,
        F,
        Z,
        V,
        H,
        Y,
        j,
        W,
        K,
        z,
        q,
        Q,
        X,
        $ = p(D);
    try {
        var J = function () {
            var t = X.value;
            !(null != m && m.useAdditionalWeekYearTokens) && (0, u.Do)(t) && (0, u.qp)(t, S, e), !(null != m && m.useAdditionalDayOfYearTokens) && (0, u.Iu)(t) && (0, u.qp)(t, S, e);
            var n = t[0],
                r = E.f[n];
            if (r) {
                var i = r.incompatibleTokens;
                if (Array.isArray(i)) {
                    var a = M.find(function (e) {
                        return i.includes(e.token) || e.token === n;
                    });
                    if (a) throw RangeError("The format string mustn't contain `".concat(a.fullToken, '` and `').concat(t, '` at the same time'));
                } else if ('*' === r.incompatibleTokens && M.length > 0) throw RangeError("The format string mustn't contain `".concat(t, '` and any other token at the same time'));
                M.push({
                    token: n,
                    fullToken: t
                });
                var o = r.run(I, t, O.match, b);
                if (!o) return { v: new Date(NaN) };
                L.push(o.setter), (I = o.rest);
            } else {
                if (n.match(N)) throw RangeError('Format string contains an unescaped latin alphabet character `' + n + '`');
                if (("''" === t ? (t = "'") : "'" === n && (t = R(t)), 0 !== I.indexOf(t))) return { v: new Date(NaN) };
                I = I.slice(t.length);
            }
        };
        for ($.s(); !(X = $.n()).done; ) {
            var ee = J();
            if ('object' === h(ee)) return ee.v;
        }
    } catch (e) {
        $.e(e);
    } finally {
        $.f();
    }
    if (I.length > 0 && v.test(I)) return new Date(NaN);
    var et = L.map(function (e) {
            return e.priority;
        })
            .sort(function (e, t) {
                return t - e;
            })
            .filter(function (e, t, n) {
                return n.indexOf(e) === t;
            })
            .map(function (e) {
                return L.filter(function (t) {
                    return t.priority === e;
                }).sort(function (e, t) {
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
        eo = p(et);
    try {
        for (eo.s(); !(ea = eo.n()).done; ) {
            var es = ea.value;
            if (!es.validate(er, b)) return new Date(NaN);
            var el = es.set(er, ei, b);
            Array.isArray(el) ? ((er = el[0]), (0, o.Z)(ei, el[1])) : (er = el);
        }
    } catch (e) {
        eo.e(e);
    } finally {
        eo.f();
    }
    return er;
}
function R(e) {
    return e.match(S)[1].replace(A, "'");
}
