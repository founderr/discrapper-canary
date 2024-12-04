var t, r;
(t = 0),
    (r = function () {
        for (
            var e = function (e, t, r) {
                    return void 0 === t && (t = 0), void 0 === r && (r = 1), e < t ? t : e > r ? r : e;
                },
                t = {},
                r = 0,
                a = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Undefined', 'Null'];
            r < a.length;
            r += 1
        ) {
            var n = a[r];
            t['[object ' + n + ']'] = n.toLowerCase();
        }
        var _ = function (e) {
                return t[Object.prototype.toString.call(e)] || 'object';
            },
            o = Math.PI,
            E = {
                clip_rgb: function (t) {
                    (t._clipped = !1), (t._unclipped = t.slice(0));
                    for (var r = 0; r <= 3; r++) r < 3 ? ((t[r] < 0 || t[r] > 255) && (t._clipped = !0), (t[r] = e(t[r], 0, 255))) : 3 === r && (t[r] = e(t[r], 0, 1));
                    return t;
                },
                limit: e,
                type: _,
                unpack: function (e, t) {
                    return (void 0 === t && (t = null), e.length >= 3)
                        ? Array.prototype.slice.call(e)
                        : 'object' == _(e[0]) && t
                          ? t
                                .split('')
                                .filter(function (t) {
                                    return void 0 !== e[0][t];
                                })
                                .map(function (t) {
                                    return e[0][t];
                                })
                          : e[0];
                },
                last: function (e) {
                    if (e.length < 2) return null;
                    var t = e.length - 1;
                    return 'string' == _(e[t]) ? e[t].toLowerCase() : null;
                },
                TWOPI: 2 * o,
                PITHIRD: o / 3,
                DEG2RAD: o / 180,
                RAD2DEG: 180 / o
            },
            i = {
                format: {},
                autodetect: []
            },
            c = E.last,
            s = E.clip_rgb,
            l = E.type,
            I = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ('object' === l(e[0]) && e[0].constructor && e[0].constructor === this.constructor) return e[0];
                var r = c(e),
                    a = !1;
                if (!r) {
                    (a = !0),
                        !i.sorted &&
                            ((i.autodetect = i.autodetect.sort(function (e, t) {
                                return t.p - e.p;
                            })),
                            (i.sorted = !0));
                    for (var n = 0, _ = i.autodetect; n < _.length; n += 1) {
                        var o = _[n];
                        if ((r = o.test.apply(o, e))) break;
                    }
                }
                if (i.format[r]) {
                    var E = i.format[r].apply(null, a ? e : e.slice(0, -1));
                    this._rgb = s(E);
                } else throw Error('unknown format: ' + e);
                3 === this._rgb.length && this._rgb.push(1);
            };
        I.prototype.toString = function () {
            return 'function' == l(this.hex) ? this.hex() : '[' + this._rgb.join(',') + ']';
        };
        var u = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(u.Color, [null].concat(e)))();
        };
        (u.Color = I), (u.version = '2.4.2');
        var R = E.unpack,
            A = Math.max,
            T = E.unpack,
            N = E.unpack,
            d = E.type,
            f = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = R(e, 'rgb'),
                    a = r[0],
                    n = r[1],
                    _ = r[2],
                    o = 1 - A((a /= 255), A((n /= 255), (_ /= 255))),
                    E = o < 1 ? 1 / (1 - o) : 0;
                return [(1 - a - o) * E, (1 - n - o) * E, (1 - _ - o) * E, o];
            };
        (I.prototype.cmyk = function () {
            return f(this._rgb);
        }),
            (u.cmyk = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(I, [null].concat(e, ['cmyk'])))();
            }),
            (i.format.cmyk = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = (e = T(e, 'cmyk'))[0],
                    a = e[1],
                    n = e[2],
                    _ = e[3],
                    o = e.length > 4 ? e[4] : 1;
                return 1 === _ ? [0, 0, 0, o] : [r >= 1 ? 0 : 255 * (1 - r) * (1 - _), a >= 1 ? 0 : 255 * (1 - a) * (1 - _), n >= 1 ? 0 : 255 * (1 - n) * (1 - _), o];
            }),
            i.autodetect.push({
                p: 2,
                test: function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    if ('array' === d((e = N(e, 'cmyk'))) && 4 === e.length) return 'cmyk';
                }
            });
        var O = E.unpack,
            L = E.last,
            p = function (e) {
                return Math.round(100 * e) / 100;
            },
            h = E.unpack,
            D = function () {
                for (var e, t, r = [], a = arguments.length; a--; ) r[a] = arguments[a];
                var n = (r = h(r, 'rgba'))[0],
                    _ = r[1],
                    o = r[2],
                    E = Math.min((n /= 255), (_ /= 255), (o /= 255)),
                    i = Math.max(n, _, o),
                    c = (i + E) / 2;
                return (i === E ? ((e = 0), (t = Number.NaN)) : (e = c < 0.5 ? (i - E) / (i + E) : (i - E) / (2 - i - E)), n == i ? (t = (_ - o) / (i - E)) : _ == i ? (t = 2 + (o - n) / (i - E)) : o == i && (t = 4 + (n - _) / (i - E)), (t *= 60) < 0 && (t += 360), r.length > 3 && void 0 !== r[3]) ? [t, e, c, r[3]] : [t, e, c];
            },
            S = E.unpack,
            C = E.last,
            P = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = O(e, 'hsla'),
                    a = L(e) || 'lsa';
                return (r[0] = p(r[0] || 0)), (r[1] = p(100 * r[1]) + '%'), (r[2] = p(100 * r[2]) + '%'), 'hsla' === a || (r.length > 3 && r[3] < 1) ? ((r[3] = r.length > 3 ? r[3] : 1), (a = 'hsla')) : (r.length = 3), a + '(' + r.join(',') + ')';
            },
            g = Math.round,
            U = E.unpack,
            M = Math.round,
            G = function () {
                for (var e, t, r, a, n = [], _ = arguments.length; _--; ) n[_] = arguments[_];
                var o = (n = U(n, 'hsl'))[0],
                    E = n[1],
                    i = n[2];
                if (0 === E) t = r = a = 255 * i;
                else {
                    var c = [0, 0, 0],
                        s = [0, 0, 0],
                        l = i < 0.5 ? i * (1 + E) : i + E - i * E,
                        I = 2 * i - l,
                        u = o / 360;
                    (c[0] = u + 1 / 3), (c[1] = u), (c[2] = u - 1 / 3);
                    for (var R = 0; R < 3; R++) c[R] < 0 && (c[R] += 1), c[R] > 1 && (c[R] -= 1), 6 * c[R] < 1 ? (s[R] = I + (l - I) * 6 * c[R]) : 2 * c[R] < 1 ? (s[R] = l) : 3 * c[R] < 2 ? (s[R] = I + (l - I) * (2 / 3 - c[R]) * 6) : (s[R] = I);
                    (t = (e = [M(255 * s[0]), M(255 * s[1]), M(255 * s[2])])[0]), (r = e[1]), (a = e[2]);
                }
                return n.length > 3 ? [t, r, a, n[3]] : [t, r, a, 1];
            },
            m = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
            y = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
            b = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
            v = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
            w = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
            B = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
            W = Math.round,
            Y = function (e) {
                if (((e = e.toLowerCase().trim()), i.format.named))
                    try {
                        return i.format.named(e);
                    } catch (e) {}
                if ((t = e.match(m))) {
                    for (var t, r = t.slice(1, 4), a = 0; a < 3; a++) r[a] = +r[a];
                    return (r[3] = 1), r;
                }
                if ((t = e.match(y))) {
                    for (var n = t.slice(1, 5), _ = 0; _ < 4; _++) n[_] = +n[_];
                    return n;
                }
                if ((t = e.match(b))) {
                    for (var o = t.slice(1, 4), E = 0; E < 3; E++) o[E] = W(2.55 * o[E]);
                    return (o[3] = 1), o;
                }
                if ((t = e.match(v))) {
                    for (var c = t.slice(1, 5), s = 0; s < 3; s++) c[s] = W(2.55 * c[s]);
                    return (c[3] = +c[3]), c;
                }
                if ((t = e.match(w))) {
                    var l = t.slice(1, 4);
                    (l[1] *= 0.01), (l[2] *= 0.01);
                    var I = G(l);
                    return (I[3] = 1), I;
                }
                if ((t = e.match(B))) {
                    var u = t.slice(1, 4);
                    (u[1] *= 0.01), (u[2] *= 0.01);
                    var R = G(u);
                    return (R[3] = +t[4]), R;
                }
            };
        Y.test = function (e) {
            return m.test(e) || y.test(e) || b.test(e) || v.test(e) || w.test(e) || B.test(e);
        };
        var H = E.type,
            x = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = S(e, 'rgba'),
                    a = C(e) || 'rgb';
                return 'hsl' == a.substr(0, 3) ? P(D(r), a) : ((r[0] = g(r[0])), (r[1] = g(r[1])), (r[2] = g(r[2])), ('rgba' === a || (r.length > 3 && r[3] < 1)) && ((r[3] = r.length > 3 ? r[3] : 1), (a = 'rgba')), a + '(' + r.slice(0, 'rgb' === a ? 3 : 4).join(',') + ')');
            };
        (I.prototype.css = function (e) {
            return x(this._rgb, e);
        }),
            (u.css = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(I, [null].concat(e, ['css'])))();
            }),
            (i.format.css = Y),
            i.autodetect.push({
                p: 5,
                test: function (e) {
                    for (var t = [], r = arguments.length - 1; r-- > 0; ) t[r] = arguments[r + 1];
                    if (!t.length && 'string' === H(e) && Y.test(e)) return 'css';
                }
            });
        var K = E.unpack;
        (i.format.gl = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = K(e, 'rgba');
            return (r[0] *= 255), (r[1] *= 255), (r[2] *= 255), r;
        }),
            (u.gl = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(I, [null].concat(e, ['gl'])))();
            }),
            (I.prototype.gl = function () {
                var e = this._rgb;
                return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
            });
        var k = E.unpack,
            V = E.unpack,
            F = Math.floor,
            X = E.unpack,
            j = E.type,
            $ = function () {
                for (var e, t = [], r = arguments.length; r--; ) t[r] = arguments[r];
                var a = k(t, 'rgb'),
                    n = a[0],
                    _ = a[1],
                    o = a[2],
                    E = Math.min(n, _, o),
                    i = Math.max(n, _, o),
                    c = i - E;
                return 0 === c ? (e = Number.NaN) : (n === i && (e = (_ - o) / c), _ === i && (e = 2 + (o - n) / c), o === i && (e = 4 + (n - _) / c), (e *= 60) < 0 && (e += 360)), [e, (100 * c) / 255, (E / (255 - c)) * 100];
            };
        (I.prototype.hcg = function () {
            return $(this._rgb);
        }),
            (u.hcg = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(I, [null].concat(e, ['hcg'])))();
            }),
            (i.format.hcg = function () {
                for (var e, t, r, a, n, _, o, E, i, c = [], s = arguments.length; s--; ) c[s] = arguments[s];
                var l = (c = V(c, 'hcg'))[0],
                    I = c[1],
                    u = c[2];
                u *= 255;
                var R = 255 * I;
                if (0 === I) o = E = i = u;
                else {
                    360 === l && (l = 0), l > 360 && (l -= 360), l < 0 && (l += 360);
                    var A = F((l /= 60)),
                        T = l - A,
                        N = u * (1 - I),
                        d = N + R * (1 - T),
                        f = N + R * T,
                        O = N + R;
                    switch (A) {
                        case 0:
                            (o = (e = [O, f, N])[0]), (E = e[1]), (i = e[2]);
                            break;
                        case 1:
                            (o = (t = [d, O, N])[0]), (E = t[1]), (i = t[2]);
                            break;
                        case 2:
                            (o = (r = [N, O, f])[0]), (E = r[1]), (i = r[2]);
                            break;
                        case 3:
                            (o = (a = [N, d, O])[0]), (E = a[1]), (i = a[2]);
                            break;
                        case 4:
                            (o = (n = [f, N, O])[0]), (E = n[1]), (i = n[2]);
                            break;
                        case 5:
                            (o = (_ = [O, N, d])[0]), (E = _[1]), (i = _[2]);
                    }
                }
                return [o, E, i, c.length > 3 ? c[3] : 1];
            }),
            i.autodetect.push({
                p: 1,
                test: function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    if ('array' === j((e = X(e, 'hcg'))) && 3 === e.length) return 'hcg';
                }
            });
        var q = E.unpack,
            z = E.last,
            J = Math.round,
            Q = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = q(e, 'rgba'),
                    a = r[0],
                    n = r[1],
                    _ = r[2],
                    o = r[3],
                    E = z(e) || 'auto';
                void 0 === o && (o = 1), 'auto' === E && (E = o < 1 ? 'rgba' : 'rgb'), (a = J(a)), (n = J(n));
                var i = '000000' + ((a << 16) | (n << 8) | (_ = J(_))).toString(16);
                i = i.substr(i.length - 6);
                var c = '0' + J(255 * o).toString(16);
                switch (((c = c.substr(c.length - 2)), E.toLowerCase())) {
                    case 'rgba':
                        return '#' + i + c;
                    case 'argb':
                        return '#' + c + i;
                    default:
                        return '#' + i;
                }
            },
            Z = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
            ee = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
            et = function (e) {
                if (e.match(Z)) {
                    (4 === e.length || 7 === e.length) && (e = e.substr(1)), 3 === e.length && (e = (e = e.split(''))[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
                    var t = parseInt(e, 16);
                    return [t >> 16, (t >> 8) & 255, 255 & t, 1];
                }
                if (e.match(ee)) {
                    (5 === e.length || 9 === e.length) && (e = e.substr(1)), 4 === e.length && (e = (e = e.split(''))[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
                    var r = parseInt(e, 16),
                        a = Math.round(((255 & r) / 255) * 100) / 100;
                    return [(r >> 24) & 255, (r >> 16) & 255, (r >> 8) & 255, a];
                }
                throw Error('unknown hex color: ' + e);
            },
            er = E.type;
        (I.prototype.hex = function (e) {
            return Q(this._rgb, e);
        }),
            (u.hex = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(I, [null].concat(e, ['hex'])))();
            }),
            (i.format.hex = et),
            i.autodetect.push({
                p: 4,
                test: function (e) {
                    for (var t = [], r = arguments.length - 1; r-- > 0; ) t[r] = arguments[r + 1];
                    if (!t.length && 'string' === er(e) && [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0) return 'hex';
                }
            });
        var ea = E.unpack,
            en = E.TWOPI,
            e_ = Math.min,
            eo = Math.sqrt,
            eE = Math.acos,
            ei = E.unpack,
            ec = E.limit,
            es = E.TWOPI,
            el = E.PITHIRD,
            eI = Math.cos,
            eu = E.unpack,
            eR = E.type,
            eA = function () {
                for (var e, t = [], r = arguments.length; r--; ) t[r] = arguments[r];
                var a = ea(t, 'rgb'),
                    n = a[0],
                    _ = a[1],
                    o = a[2],
                    E = e_((n /= 255), (_ /= 255), (o /= 255)),
                    i = (n + _ + o) / 3,
                    c = i > 0 ? 1 - E / i : 0;
                return 0 === c ? (e = NaN) : ((e = eE((e = (n - _ + (n - o)) / 2 / eo((n - _) * (n - _) + (n - o) * (_ - o))))), o > _ && (e = en - e), (e /= en)), [360 * e, c, i];
            };
        (I.prototype.hsi = function () {
            return eA(this._rgb);
        }),
            (u.hsi = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(I, [null].concat(e, ['hsi'])))();
            }),
            (i.format.hsi = function () {
                for (var e, t, r, a = [], n = arguments.length; n--; ) a[n] = arguments[n];
                var _ = (a = ei(a, 'hsi'))[0],
                    o = a[1],
                    E = a[2];
                return isNaN(_) && (_ = 0), isNaN(o) && (o = 0), _ > 360 && (_ -= 360), _ < 0 && (_ += 360), (_ /= 360) < 1 / 3 ? (t = 1 - ((r = (1 - o) / 3) + (e = (1 + (o * eI(es * _)) / eI(el - es * _)) / 3))) : _ < 2 / 3 ? ((_ -= 1 / 3), (r = 1 - ((e = (1 - o) / 3) + (t = (1 + (o * eI(es * _)) / eI(el - es * _)) / 3)))) : ((_ -= 2 / 3), (e = 1 - ((t = (1 - o) / 3) + (r = (1 + (o * eI(es * _)) / eI(el - es * _)) / 3)))), (e = ec(E * e * 3)), (t = ec(E * t * 3)), [255 * e, 255 * t, 255 * (r = ec(E * r * 3)), a.length > 3 ? a[3] : 1];
            }),
            i.autodetect.push({
                p: 2,
                test: function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    if ('array' === eR((e = eu(e, 'hsi'))) && 3 === e.length) return 'hsi';
                }
            });
        var eT = E.unpack,
            eN = E.type;
        (I.prototype.hsl = function () {
            return D(this._rgb);
        }),
            (u.hsl = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(I, [null].concat(e, ['hsl'])))();
            }),
            (i.format.hsl = G),
            i.autodetect.push({
                p: 2,
                test: function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    if ('array' === eN((e = eT(e, 'hsl'))) && 3 === e.length) return 'hsl';
                }
            });
        var ed = E.unpack,
            ef = Math.min,
            eO = Math.max,
            eL = E.unpack,
            ep = Math.floor,
            eh = E.unpack,
            eD = E.type,
            eS = function () {
                for (var e, t, r, a = [], n = arguments.length; n--; ) a[n] = arguments[n];
                var _ = (a = ed(a, 'rgb'))[0],
                    o = a[1],
                    E = a[2],
                    i = ef(_, o, E),
                    c = eO(_, o, E),
                    s = c - i;
                return (r = c / 255), 0 === c ? ((e = Number.NaN), (t = 0)) : ((t = s / c), _ === c && (e = (o - E) / s), o === c && (e = 2 + (E - _) / s), E === c && (e = 4 + (_ - o) / s), (e *= 60) < 0 && (e += 360)), [e, t, r];
            };
        (I.prototype.hsv = function () {
            return eS(this._rgb);
        }),
            (u.hsv = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(I, [null].concat(e, ['hsv'])))();
            }),
            (i.format.hsv = function () {
                for (var e, t, r, a, n, _, o, E, i, c = [], s = arguments.length; s--; ) c[s] = arguments[s];
                var l = (c = eL(c, 'hsv'))[0],
                    I = c[1],
                    u = c[2];
                if (((u *= 255), 0 === I)) o = E = i = u;
                else {
                    360 === l && (l = 0), l > 360 && (l -= 360), l < 0 && (l += 360);
                    var R = ep((l /= 60)),
                        A = l - R,
                        T = u * (1 - I),
                        N = u * (1 - I * A),
                        d = u * (1 - I * (1 - A));
                    switch (R) {
                        case 0:
                            (o = (e = [u, d, T])[0]), (E = e[1]), (i = e[2]);
                            break;
                        case 1:
                            (o = (t = [N, u, T])[0]), (E = t[1]), (i = t[2]);
                            break;
                        case 2:
                            (o = (r = [T, u, d])[0]), (E = r[1]), (i = r[2]);
                            break;
                        case 3:
                            (o = (a = [T, N, u])[0]), (E = a[1]), (i = a[2]);
                            break;
                        case 4:
                            (o = (n = [d, T, u])[0]), (E = n[1]), (i = n[2]);
                            break;
                        case 5:
                            (o = (_ = [u, T, N])[0]), (E = _[1]), (i = _[2]);
                    }
                }
                return [o, E, i, c.length > 3 ? c[3] : 1];
            }),
            i.autodetect.push({
                p: 2,
                test: function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    if ('array' === eD((e = eh(e, 'hsv'))) && 3 === e.length) return 'hsv';
                }
            });
        var eC = {
                Kn: 18,
                Xn: 0.95047,
                Yn: 1,
                Zn: 1.08883,
                t0: 0.137931034,
                t1: 0.206896552,
                t2: 0.12841855,
                t3: 0.008856452
            },
            eP = E.unpack,
            eg = Math.pow,
            eU = function (e) {
                return (e /= 255) <= 0.04045 ? e / 12.92 : eg((e + 0.055) / 1.055, 2.4);
            },
            eM = function (e) {
                return e > eC.t3 ? eg(e, 1 / 3) : e / eC.t2 + eC.t0;
            },
            eG = function (e, t, r) {
                return (e = eU(e)), (t = eU(t)), [eM((0.4124564 * e + 0.3575761 * t + 0.1804375 * (r = eU(r))) / eC.Xn), eM((0.2126729 * e + 0.7151522 * t + 0.072175 * r) / eC.Yn), eM((0.0193339 * e + 0.119192 * t + 0.9503041 * r) / eC.Zn)];
            },
            em = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = eP(e, 'rgb'),
                    a = eG(r[0], r[1], r[2]),
                    n = a[0],
                    _ = a[1],
                    o = a[2],
                    E = 116 * _ - 16;
                return [E < 0 ? 0 : E, 500 * (n - _), 200 * (_ - o)];
            },
            ey = E.unpack,
            eb = Math.pow,
            ev = function (e) {
                return 255 * (e <= 0.00304 ? 12.92 * e : 1.055 * eb(e, 1 / 2.4) - 0.055);
            },
            ew = function (e) {
                return e > eC.t1 ? e * e * e : eC.t2 * (e - eC.t0);
            },
            eB = function () {
                for (var e, t, r, a, n, _ = [], o = arguments.length; o--; ) _[o] = arguments[o];
                var E = (_ = ey(_, 'lab'))[0],
                    i = _[1],
                    c = _[2];
                return (t = (E + 16) / 116), (e = isNaN(i) ? t : t + i / 500), (r = isNaN(c) ? t : t - c / 200), (t = eC.Yn * ew(t)), (e = eC.Xn * ew(e)), (a = ev(3.2404542 * e - 1.5371385 * t - 0.4985314 * (r = eC.Zn * ew(r)))), (n = ev(-0.969266 * e + 1.8760108 * t + 0.041556 * r)), [a, n, ev(0.0556434 * e - 0.2040259 * t + 1.0572252 * r), _.length > 3 ? _[3] : 1];
            },
            eW = E.unpack,
            eY = E.type;
        (I.prototype.lab = function () {
            return em(this._rgb);
        }),
            (u.lab = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(I, [null].concat(e, ['lab'])))();
            }),
            (i.format.lab = eB),
            i.autodetect.push({
                p: 2,
                test: function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    if ('array' === eY((e = eW(e, 'lab'))) && 3 === e.length) return 'lab';
                }
            });
        var eH = E.unpack,
            ex = E.RAD2DEG,
            eK = Math.sqrt,
            ek = Math.atan2,
            eV = Math.round,
            eF = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = eH(e, 'lab'),
                    a = r[0],
                    n = r[1],
                    _ = r[2],
                    o = eK(n * n + _ * _),
                    E = (ek(_, n) * ex + 360) % 360;
                return 0 === eV(10000 * o) && (E = Number.NaN), [a, o, E];
            },
            eX = E.unpack,
            ej = E.unpack,
            e$ = E.DEG2RAD,
            eq = Math.sin,
            ez = Math.cos,
            eJ = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = ej(e, 'lch'),
                    a = r[0],
                    n = r[1],
                    _ = r[2];
                return isNaN(_) && (_ = 0), [a, ez((_ *= e$)) * n, eq(_) * n];
            },
            eQ = E.unpack,
            eZ = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = eJ((e = eQ(e, 'lch'))[0], e[1], e[2]),
                    a = eB(r[0], r[1], r[2]);
                return [a[0], a[1], a[2], e.length > 3 ? e[3] : 1];
            },
            e0 = E.unpack,
            e1 = E.unpack,
            e2 = E.type,
            e3 = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = eX(e, 'rgb'),
                    a = em(r[0], r[1], r[2]);
                return eF(a[0], a[1], a[2]);
            };
        (I.prototype.lch = function () {
            return e3(this._rgb);
        }),
            (I.prototype.hcl = function () {
                return e3(this._rgb).reverse();
            }),
            (u.lch = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(I, [null].concat(e, ['lch'])))();
            }),
            (u.hcl = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(I, [null].concat(e, ['hcl'])))();
            }),
            (i.format.lch = eZ),
            (i.format.hcl = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = e0(e, 'hcl').reverse();
                return eZ.apply(void 0, r);
            }),
            ['lch', 'hcl'].forEach(function (e) {
                return i.autodetect.push({
                    p: 2,
                    test: function () {
                        for (var t = [], r = arguments.length; r--; ) t[r] = arguments[r];
                        if ('array' === e2((t = e1(t, e))) && 3 === t.length) return e;
                    }
                });
            });
        var e6 = {
                aliceblue: '#f0f8ff',
                antiquewhite: '#faebd7',
                aqua: '#00ffff',
                aquamarine: '#7fffd4',
                azure: '#f0ffff',
                beige: '#f5f5dc',
                bisque: '#ffe4c4',
                black: '#000000',
                blanchedalmond: '#ffebcd',
                blue: '#0000ff',
                blueviolet: '#8a2be2',
                brown: '#a52a2a',
                burlywood: '#deb887',
                cadetblue: '#5f9ea0',
                chartreuse: '#7fff00',
                chocolate: '#d2691e',
                coral: '#ff7f50',
                cornflower: '#6495ed',
                cornflowerblue: '#6495ed',
                cornsilk: '#fff8dc',
                crimson: '#dc143c',
                cyan: '#00ffff',
                darkblue: '#00008b',
                darkcyan: '#008b8b',
                darkgoldenrod: '#b8860b',
                darkgray: '#a9a9a9',
                darkgreen: '#006400',
                darkgrey: '#a9a9a9',
                darkkhaki: '#bdb76b',
                darkmagenta: '#8b008b',
                darkolivegreen: '#556b2f',
                darkorange: '#ff8c00',
                darkorchid: '#9932cc',
                darkred: '#8b0000',
                darksalmon: '#e9967a',
                darkseagreen: '#8fbc8f',
                darkslateblue: '#483d8b',
                darkslategray: '#2f4f4f',
                darkslategrey: '#2f4f4f',
                darkturquoise: '#00ced1',
                darkviolet: '#9400d3',
                deeppink: '#ff1493',
                deepskyblue: '#00bfff',
                dimgray: '#696969',
                dimgrey: '#696969',
                dodgerblue: '#1e90ff',
                firebrick: '#b22222',
                floralwhite: '#fffaf0',
                forestgreen: '#228b22',
                fuchsia: '#ff00ff',
                gainsboro: '#dcdcdc',
                ghostwhite: '#f8f8ff',
                gold: '#ffd700',
                goldenrod: '#daa520',
                gray: '#808080',
                green: '#008000',
                greenyellow: '#adff2f',
                grey: '#808080',
                honeydew: '#f0fff0',
                hotpink: '#ff69b4',
                indianred: '#cd5c5c',
                indigo: '#4b0082',
                ivory: '#fffff0',
                khaki: '#f0e68c',
                laserlemon: '#ffff54',
                lavender: '#e6e6fa',
                lavenderblush: '#fff0f5',
                lawngreen: '#7cfc00',
                lemonchiffon: '#fffacd',
                lightblue: '#add8e6',
                lightcoral: '#f08080',
                lightcyan: '#e0ffff',
                lightgoldenrod: '#fafad2',
                lightgoldenrodyellow: '#fafad2',
                lightgray: '#d3d3d3',
                lightgreen: '#90ee90',
                lightgrey: '#d3d3d3',
                lightpink: '#ffb6c1',
                lightsalmon: '#ffa07a',
                lightseagreen: '#20b2aa',
                lightskyblue: '#87cefa',
                lightslategray: '#778899',
                lightslategrey: '#778899',
                lightsteelblue: '#b0c4de',
                lightyellow: '#ffffe0',
                lime: '#00ff00',
                limegreen: '#32cd32',
                linen: '#faf0e6',
                magenta: '#ff00ff',
                maroon: '#800000',
                maroon2: '#7f0000',
                maroon3: '#b03060',
                mediumaquamarine: '#66cdaa',
                mediumblue: '#0000cd',
                mediumorchid: '#ba55d3',
                mediumpurple: '#9370db',
                mediumseagreen: '#3cb371',
                mediumslateblue: '#7b68ee',
                mediumspringgreen: '#00fa9a',
                mediumturquoise: '#48d1cc',
                mediumvioletred: '#c71585',
                midnightblue: '#191970',
                mintcream: '#f5fffa',
                mistyrose: '#ffe4e1',
                moccasin: '#ffe4b5',
                navajowhite: '#ffdead',
                navy: '#000080',
                oldlace: '#fdf5e6',
                olive: '#808000',
                olivedrab: '#6b8e23',
                orange: '#ffa500',
                orangered: '#ff4500',
                orchid: '#da70d6',
                palegoldenrod: '#eee8aa',
                palegreen: '#98fb98',
                paleturquoise: '#afeeee',
                palevioletred: '#db7093',
                papayawhip: '#ffefd5',
                peachpuff: '#ffdab9',
                peru: '#cd853f',
                pink: '#ffc0cb',
                plum: '#dda0dd',
                powderblue: '#b0e0e6',
                purple: '#800080',
                purple2: '#7f007f',
                purple3: '#a020f0',
                rebeccapurple: '#663399',
                red: '#ff0000',
                rosybrown: '#bc8f8f',
                royalblue: '#4169e1',
                saddlebrown: '#8b4513',
                salmon: '#fa8072',
                sandybrown: '#f4a460',
                seagreen: '#2e8b57',
                seashell: '#fff5ee',
                sienna: '#a0522d',
                silver: '#c0c0c0',
                skyblue: '#87ceeb',
                slateblue: '#6a5acd',
                slategray: '#708090',
                slategrey: '#708090',
                snow: '#fffafa',
                springgreen: '#00ff7f',
                steelblue: '#4682b4',
                tan: '#d2b48c',
                teal: '#008080',
                thistle: '#d8bfd8',
                tomato: '#ff6347',
                turquoise: '#40e0d0',
                violet: '#ee82ee',
                wheat: '#f5deb3',
                white: '#ffffff',
                whitesmoke: '#f5f5f5',
                yellow: '#ffff00',
                yellowgreen: '#9acd32'
            },
            e4 = E.type;
        (I.prototype.name = function () {
            for (var e = Q(this._rgb, 'rgb'), t = 0, r = Object.keys(e6); t < r.length; t += 1) {
                var a = r[t];
                if (e6[a] === e) return a.toLowerCase();
            }
            return e;
        }),
            (i.format.named = function (e) {
                if (e6[(e = e.toLowerCase())]) return et(e6[e]);
                throw Error('unknown color name: ' + e);
            }),
            i.autodetect.push({
                p: 5,
                test: function (e) {
                    for (var t = [], r = arguments.length - 1; r-- > 0; ) t[r] = arguments[r + 1];
                    if (!t.length && 'string' === e4(e) && e6[e.toLowerCase()]) return 'named';
                }
            });
        var e5 = E.unpack,
            e8 = E.type,
            e7 = E.type,
            e9 = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = e5(e, 'rgb');
                return (r[0] << 16) + (r[1] << 8) + r[2];
            };
        (I.prototype.num = function () {
            return e9(this._rgb);
        }),
            (u.num = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(I, [null].concat(e, ['num'])))();
            }),
            (i.format.num = function (e) {
                if ('number' == e8(e) && e >= 0 && e <= 16777215) return [e >> 16, (e >> 8) & 255, 255 & e, 1];
                throw Error('unknown num color: ' + e);
            }),
            i.autodetect.push({
                p: 5,
                test: function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    if (1 === e.length && 'number' === e7(e[0]) && e[0] >= 0 && e[0] <= 16777215) return 'num';
                }
            });
        var te = E.unpack,
            tt = E.type,
            tr = Math.round;
        (I.prototype.rgb = function (e) {
            return (void 0 === e && (e = !0), !1 === e) ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(tr);
        }),
            (I.prototype.rgba = function (e) {
                return (
                    void 0 === e && (e = !0),
                    this._rgb.slice(0, 4).map(function (t, r) {
                        return r < 3 ? (!1 === e ? t : tr(t)) : t;
                    })
                );
            }),
            (u.rgb = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(I, [null].concat(e, ['rgb'])))();
            }),
            (i.format.rgb = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = te(e, 'rgba');
                return void 0 === r[3] && (r[3] = 1), r;
            }),
            i.autodetect.push({
                p: 3,
                test: function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    if ('array' === tt((e = te(e, 'rgba'))) && (3 === e.length || (4 === e.length && 'number' == tt(e[3]) && e[3] >= 0 && e[3] <= 1))) return 'rgb';
                }
            });
        var ta = Math.log,
            tn = function (e) {
                var t,
                    r,
                    a,
                    n = e / 100;
                return n < 66 ? ((t = 255), (r = n < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (r = n - 2) + 104.49216199393888 * ta(r)), (a = n < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (a = n - 10) + 115.67994401066147 * ta(a))) : ((t = 351.97690566805693 + 0.114206453784165 * (t = n - 55) - 40.25366309332127 * ta(t)), (r = 325.4494125711974 + 0.07943456536662342 * (r = n - 50) - 28.0852963507957 * ta(r)), (a = 255)), [t, r, a, 1];
            },
            t_ = E.unpack,
            to = Math.round,
            tE = function () {
                for (var e, t = [], r = arguments.length; r--; ) t[r] = arguments[r];
                for (var a = t_(t, 'rgb'), n = a[0], _ = a[2], o = 1000, E = 40000; E - o > 0.4; ) {
                    var i = tn((e = (E + o) * 0.5));
                    i[2] / i[0] >= _ / n ? (E = e) : (o = e);
                }
                return to(e);
            };
        (I.prototype.temp =
            I.prototype.kelvin =
            I.prototype.temperature =
                function () {
                    return tE(this._rgb);
                }),
            (u.temp =
                u.kelvin =
                u.temperature =
                    function () {
                        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                        return new (Function.prototype.bind.apply(I, [null].concat(e, ['temp'])))();
                    }),
            (i.format.temp = i.format.kelvin = i.format.temperature = tn);
        var ti = E.unpack,
            tc = Math.cbrt,
            ts = Math.pow,
            tl = Math.sign,
            tI = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = ti(e, 'rgb'),
                    a = r[0],
                    n = r[1],
                    _ = r[2],
                    o = [tu(a / 255), tu(n / 255), tu(_ / 255)],
                    E = o[0],
                    i = o[1],
                    c = o[2],
                    s = tc(0.4122214708 * E + 0.5363325363 * i + 0.0514459929 * c),
                    l = tc(0.2119034982 * E + 0.6806995451 * i + 0.1073969566 * c),
                    I = tc(0.0883024619 * E + 0.2817188376 * i + 0.6299787005 * c);
                return [0.2104542553 * s + 0.793617785 * l - 0.0040720468 * I, 1.9779984951 * s - 2.428592205 * l + 0.4505937099 * I, 0.0259040371 * s + 0.7827717662 * l - 0.808675766 * I];
            };
        function tu(e) {
            var t = Math.abs(e);
            return t < 0.04045 ? e / 12.92 : (tl(e) || 1) * ts((t + 0.055) / 1.055, 2.4);
        }
        var tR = E.unpack,
            tA = Math.pow,
            tT = Math.sign,
            tN = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = (e = tR(e, 'lab'))[0],
                    a = e[1],
                    n = e[2],
                    _ = tA(r + 0.3963377774 * a + 0.2158037573 * n, 3),
                    o = tA(r - 0.1055613458 * a - 0.0638541728 * n, 3),
                    E = tA(r - 0.0894841775 * a - 1.291485548 * n, 3);
                return [255 * td(4.0767416621 * _ - 3.3077115913 * o + 0.2309699292 * E), 255 * td(-1.2684380046 * _ + 2.6097574011 * o - 0.3413193965 * E), 255 * td(-0.0041960863 * _ - 0.7034186147 * o + 1.707614701 * E), e.length > 3 ? e[3] : 1];
            };
        function td(e) {
            var t = Math.abs(e);
            return t > 0.0031308 ? (tT(e) || 1) * (1.055 * tA(t, 1 / 2.4) - 0.055) : 12.92 * e;
        }
        var tf = E.unpack,
            tO = E.type;
        (I.prototype.oklab = function () {
            return tI(this._rgb);
        }),
            (u.oklab = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(I, [null].concat(e, ['oklab'])))();
            }),
            (i.format.oklab = tN),
            i.autodetect.push({
                p: 3,
                test: function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    if ('array' === tO((e = tf(e, 'oklab'))) && 3 === e.length) return 'oklab';
                }
            });
        var tL = E.unpack,
            tp = E.unpack,
            th = E.unpack,
            tD = E.type,
            tS = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = tL(e, 'rgb'),
                    a = tI(r[0], r[1], r[2]);
                return eF(a[0], a[1], a[2]);
            };
        (I.prototype.oklch = function () {
            return tS(this._rgb);
        }),
            (u.oklch = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(I, [null].concat(e, ['oklch'])))();
            }),
            (i.format.oklch = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = eJ((e = tp(e, 'lch'))[0], e[1], e[2]),
                    a = tN(r[0], r[1], r[2]);
                return [a[0], a[1], a[2], e.length > 3 ? e[3] : 1];
            }),
            i.autodetect.push({
                p: 3,
                test: function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    if ('array' === tD((e = th(e, 'oklch'))) && 3 === e.length) return 'oklch';
                }
            });
        var tC = E.type;
        I.prototype.alpha = function (e, t) {
            if ((void 0 === t && (t = !1), void 0 !== e && 'number' === tC(e))) return t ? ((this._rgb[3] = e), this) : new I([this._rgb[0], this._rgb[1], this._rgb[2], e], 'rgb');
            return this._rgb[3];
        };
        I.prototype.clipped = function () {
            return this._rgb._clipped || !1;
        };
        (I.prototype.darken = function (e) {
            void 0 === e && (e = 1);
            var t = this.lab();
            return (t[0] -= eC.Kn * e), new I(t, 'lab').alpha(this.alpha(), !0);
        }),
            (I.prototype.brighten = function (e) {
                return void 0 === e && (e = 1), this.darken(-e);
            }),
            (I.prototype.darker = I.prototype.darken),
            (I.prototype.brighter = I.prototype.brighten);
        I.prototype.get = function (e) {
            var t = e.split('.'),
                r = t[0],
                a = t[1],
                n = this[r]();
            if (!a) return n;
            var _ = r.indexOf(a) - ('ok' === r.substr(0, 2) ? 2 : 0);
            if (_ > -1) return n[_];
            throw Error('unknown channel ' + a + ' in mode ' + r);
        };
        var tP = E.type,
            tg = Math.pow;
        I.prototype.luminance = function (e) {
            if (void 0 !== e && 'number' === tP(e)) {
                if (0 === e) return new I([0, 0, 0, this._rgb[3]], 'rgb');
                if (1 === e) return new I([255, 255, 255, this._rgb[3]], 'rgb');
                var t = this.luminance(),
                    r = 20,
                    a = function (t, n) {
                        var _ = t.interpolate(n, 0.5, 'rgb'),
                            o = _.luminance();
                        return !(1e-7 > Math.abs(e - o)) && r-- ? (o > e ? a(t, _) : a(_, n)) : _;
                    },
                    n = (t > e ? a(new I([0, 0, 0]), this) : a(this, new I([255, 255, 255]))).rgb();
                return new I(n.concat([this._rgb[3]]));
            }
            return tU.apply(void 0, this._rgb.slice(0, 3));
        };
        var tU = function (e, t, r) {
                return (e = tM(e)), (t = tM(t)), 0.2126 * e + 0.7152 * t + 0.0722 * (r = tM(r));
            },
            tM = function (e) {
                return (e /= 255) <= 0.03928 ? e / 12.92 : tg((e + 0.055) / 1.055, 2.4);
            },
            tG = {},
            tm = E.type,
            ty = function (e, t, r) {
                void 0 === r && (r = 0.5);
                for (var a = [], n = arguments.length - 3; n-- > 0; ) a[n] = arguments[n + 3];
                var _ = a[0] || 'lrgb';
                if ((!tG[_] && !a.length && (_ = Object.keys(tG)[0]), !tG[_])) throw Error('interpolation mode ' + _ + ' is not defined');
                return 'object' !== tm(e) && (e = new I(e)), 'object' !== tm(t) && (t = new I(t)), tG[_](e, t, r).alpha(e.alpha() + r * (t.alpha() - e.alpha()));
            };
        I.prototype.mix = I.prototype.interpolate = function (e, t) {
            void 0 === t && (t = 0.5);
            for (var r = [], a = arguments.length - 2; a-- > 0; ) r[a] = arguments[a + 2];
            return ty.apply(void 0, [this, e, t].concat(r));
        };
        I.prototype.premultiply = function (e) {
            void 0 === e && (e = !1);
            var t = this._rgb,
                r = t[3];
            return e ? ((this._rgb = [t[0] * r, t[1] * r, t[2] * r, r]), this) : new I([t[0] * r, t[1] * r, t[2] * r, r], 'rgb');
        };
        (I.prototype.saturate = function (e) {
            void 0 === e && (e = 1);
            var t = this.lch();
            return (t[1] += eC.Kn * e), t[1] < 0 && (t[1] = 0), new I(t, 'lch').alpha(this.alpha(), !0);
        }),
            (I.prototype.desaturate = function (e) {
                return void 0 === e && (e = 1), this.saturate(-e);
            });
        var tb = E.type;
        I.prototype.set = function (e, t, r) {
            void 0 === r && (r = !1);
            var a = e.split('.'),
                n = a[0],
                _ = a[1],
                o = this[n]();
            if (!_) return o;
            var E = n.indexOf(_) - ('ok' === n.substr(0, 2) ? 2 : 0);
            if (E > -1) {
                if ('string' == tb(t))
                    switch (t.charAt(0)) {
                        case '+':
                        case '-':
                            o[E] += +t;
                            break;
                        case '*':
                            o[E] *= +t.substr(1);
                            break;
                        case '/':
                            o[E] /= +t.substr(1);
                            break;
                        default:
                            o[E] = +t;
                    }
                else if ('number' === tb(t)) o[E] = t;
                else throw Error('unsupported value for Color.set');
                var i = new I(o, n);
                return r ? ((this._rgb = i._rgb), this) : i;
            }
            throw Error('unknown channel ' + _ + ' in mode ' + n);
        };
        tG.rgb = function (e, t, r) {
            var a = e._rgb,
                n = t._rgb;
            return new I(a[0] + r * (n[0] - a[0]), a[1] + r * (n[1] - a[1]), a[2] + r * (n[2] - a[2]), 'rgb');
        };
        var tv = Math.sqrt,
            tw = Math.pow;
        tG.lrgb = function (e, t, r) {
            var a = e._rgb,
                n = a[0],
                _ = a[1],
                o = a[2],
                E = t._rgb,
                i = E[0],
                c = E[1],
                s = E[2];
            return new I(tv(tw(n, 2) * (1 - r) + tw(i, 2) * r), tv(tw(_, 2) * (1 - r) + tw(c, 2) * r), tv(tw(o, 2) * (1 - r) + tw(s, 2) * r), 'rgb');
        };
        tG.lab = function (e, t, r) {
            var a = e.lab(),
                n = t.lab();
            return new I(a[0] + r * (n[0] - a[0]), a[1] + r * (n[1] - a[1]), a[2] + r * (n[2] - a[2]), 'lab');
        };
        var tB = function (e, t, r, a) {
                var n, _, o, E, i, c, s, l, u, R, A, T, N, d;
                return 'hsl' === a ? ((o = e.hsl()), (E = t.hsl())) : 'hsv' === a ? ((o = e.hsv()), (E = t.hsv())) : 'hcg' === a ? ((o = e.hcg()), (E = t.hcg())) : 'hsi' === a ? ((o = e.hsi()), (E = t.hsi())) : 'lch' === a || 'hcl' === a ? ((a = 'hcl'), (o = e.hcl()), (E = t.hcl())) : 'oklch' === a && ((o = e.oklch().reverse()), (E = t.oklch().reverse())), ('h' === a.substr(0, 1) || 'oklch' === a) && ((i = (n = o)[0]), (s = n[1]), (u = n[2]), (c = (_ = E)[0]), (l = _[1]), (R = _[2])), isNaN(i) || isNaN(c) ? (isNaN(i) ? (isNaN(c) ? (T = Number.NaN) : ((T = c), (1 == u || 0 == u) && 'hsv' != a && (A = l))) : ((T = i), (1 == R || 0 == R) && 'hsv' != a && (A = s))) : ((d = c > i && c - i > 180 ? c - (i + 360) : c < i && i - c > 180 ? c + 360 - i : c - i), (T = i + r * d)), void 0 === A && (A = s + r * (l - s)), (N = u + r * (R - u)), 'oklch' === a ? new I([N, A, T], a) : new I([T, A, N], a);
            },
            tW = function (e, t, r) {
                return tB(e, t, r, 'lch');
            };
        (tG.lch = tW), (tG.hcl = tW);
        tG.num = function (e, t, r) {
            var a = e.num();
            return new I(a + r * (t.num() - a), 'num');
        };
        tG.hcg = function (e, t, r) {
            return tB(e, t, r, 'hcg');
        };
        tG.hsi = function (e, t, r) {
            return tB(e, t, r, 'hsi');
        };
        tG.hsl = function (e, t, r) {
            return tB(e, t, r, 'hsl');
        };
        tG.hsv = function (e, t, r) {
            return tB(e, t, r, 'hsv');
        };
        tG.oklab = function (e, t, r) {
            var a = e.oklab(),
                n = t.oklab();
            return new I(a[0] + r * (n[0] - a[0]), a[1] + r * (n[1] - a[1]), a[2] + r * (n[2] - a[2]), 'oklab');
        };
        tG.oklch = function (e, t, r) {
            return tB(e, t, r, 'oklch');
        };
        var tY = E.clip_rgb,
            tH = Math.pow,
            tx = Math.sqrt,
            tK = Math.PI,
            tk = Math.cos,
            tV = Math.sin,
            tF = Math.atan2,
            tX = function (e, t) {
                for (var r = e.length, a = [0, 0, 0, 0], n = 0; n < e.length; n++) {
                    var _ = e[n],
                        o = t[n] / r,
                        E = _._rgb;
                    (a[0] += tH(E[0], 2) * o), (a[1] += tH(E[1], 2) * o), (a[2] += tH(E[2], 2) * o), (a[3] += E[3] * o);
                }
                return (a[0] = tx(a[0])), (a[1] = tx(a[1])), (a[2] = tx(a[2])), a[3] > 0.9999999 && (a[3] = 1), new I(tY(a));
            },
            tj = E.type,
            t$ = Math.pow,
            tq = function (e) {
                var t = 'rgb',
                    r = u('#ccc'),
                    a = 0,
                    n = [0, 1],
                    _ = [],
                    o = [0, 0],
                    E = !1,
                    i = [],
                    c = !1,
                    s = 0,
                    l = 1,
                    I = !1,
                    R = {},
                    A = !0,
                    T = 1,
                    N = function (e) {
                        if (((e = e || ['#fff', '#000']), 'string' === tj(e) && u.brewer && u.brewer[e.toLowerCase()] && (e = u.brewer[e.toLowerCase()]), 'array' === tj(e))) {
                            1 === e.length && (e = [e[0], e[0]]), (e = e.slice(0));
                            for (var t = 0; t < e.length; t++) e[t] = u(e[t]);
                            _.length = 0;
                            for (var r = 0; r < e.length; r++) _.push(r / (e.length - 1));
                        }
                        return p(), (i = e);
                    },
                    d = function (e) {
                        if (null != E) {
                            for (var t = E.length - 1, r = 0; r < t && e >= E[r]; ) r++;
                            return r - 1;
                        }
                        return 0;
                    },
                    f = function (e) {
                        return e;
                    },
                    O = function (e) {
                        return e;
                    },
                    L = function (e, a) {
                        if ((null == a && (a = !1), isNaN(e) || null === e)) return r;
                        if (a) c = e;
                        else if (E && E.length > 2) {
                            var n, c;
                            c = d(e) / (E.length - 2);
                        } else c = l !== s ? (e - s) / (l - s) : 1;
                        (c = O(c)), !a && (c = f(c)), 1 !== T && (c = t$(c, T));
                        var I = Math.floor(10000 * (c = Math.min(1, Math.max(0, (c = o[0] + c * (1 - o[0] - o[1]))))));
                        if (A && R[I]) n = R[I];
                        else {
                            if ('array' === tj(i))
                                for (var N = 0; N < _.length; N++) {
                                    var L = _[N];
                                    if (c <= L || (c >= L && N === _.length - 1)) {
                                        n = i[N];
                                        break;
                                    }
                                    if (c > L && c < _[N + 1]) {
                                        (c = (c - L) / (_[N + 1] - L)), (n = u.interpolate(i[N], i[N + 1], c, t));
                                        break;
                                    }
                                }
                            else 'function' === tj(i) && (n = i(c));
                            A && (R[I] = n);
                        }
                        return n;
                    },
                    p = function () {
                        return (R = {});
                    };
                N(e);
                var h = function (e) {
                    var t = u(L(e));
                    return c && t[c] ? t[c]() : t;
                };
                return (
                    (h.classes = function (e) {
                        if (null != e) {
                            if ('array' === tj(e)) (E = e), (n = [e[0], e[e.length - 1]]);
                            else {
                                var t = u.analyze(n);
                                E = 0 === e ? [t.min, t.max] : u.limits(t, 'e', e);
                            }
                            return h;
                        }
                        return E;
                    }),
                    (h.domain = function (e) {
                        if (!arguments.length) return n;
                        (s = e[0]), (l = e[e.length - 1]), (_ = []);
                        var t = i.length;
                        if (e.length === t && s !== l)
                            for (var r = 0, a = Array.from(e); r < a.length; r += 1) {
                                var o = a[r];
                                _.push((o - s) / (l - s));
                            }
                        else {
                            for (var E = 0; E < t; E++) _.push(E / (t - 1));
                            if (e.length > 2) {
                                var c = e.map(function (t, r) {
                                        return r / (e.length - 1);
                                    }),
                                    I = e.map(function (e) {
                                        return (e - s) / (l - s);
                                    });
                                !I.every(function (e, t) {
                                    return c[t] === e;
                                }) &&
                                    (O = function (e) {
                                        if (e <= 0 || e >= 1) return e;
                                        for (var t = 0; e >= I[t + 1]; ) t++;
                                        var r = (e - I[t]) / (I[t + 1] - I[t]);
                                        return c[t] + r * (c[t + 1] - c[t]);
                                    });
                            }
                        }
                        return (n = [s, l]), h;
                    }),
                    (h.mode = function (e) {
                        return arguments.length ? ((t = e), p(), h) : t;
                    }),
                    (h.range = function (e, t) {
                        return N(e), h;
                    }),
                    (h.out = function (e) {
                        return (c = e), h;
                    }),
                    (h.spread = function (e) {
                        return arguments.length ? ((a = e), h) : a;
                    }),
                    (h.correctLightness = function (e) {
                        return (
                            null == e && (e = !0),
                            (I = e),
                            p(),
                            (f = I
                                ? function (e) {
                                      for (var t = L(0, !0).lab()[0], r = L(1, !0).lab()[0], a = t > r, n = L(e, !0).lab()[0], _ = t + (r - t) * e, o = n - _, E = 0, i = 1, c = 20; Math.abs(o) > 0.01 && c-- > 0; ) a && (o *= -1), o < 0 ? ((E = e), (e += (i - e) * 0.5)) : ((i = e), (e += (E - e) * 0.5)), (o = (n = L(e, !0).lab()[0]) - _);
                                      return e;
                                  }
                                : function (e) {
                                      return e;
                                  }),
                            h
                        );
                    }),
                    (h.padding = function (e) {
                        return null != e ? ('number' === tj(e) && (e = [e, e]), (o = e), h) : o;
                    }),
                    (h.colors = function (t, r) {
                        arguments.length < 2 && (r = 'hex');
                        var a = [];
                        if (0 == arguments.length) a = i.slice(0);
                        else if (1 === t) a = [h(0.5)];
                        else if (t > 1) {
                            var _ = n[0],
                                o = n[1] - _;
                            a = (function (e, t, r) {
                                for (var a = [], n = e < t, _ = r ? (n ? t + 1 : t - 1) : t, o = e; n ? o < _ : o > _; n ? o++ : o--) a.push(o);
                                return a;
                            })(0, t, !1).map(function (e) {
                                return h(_ + (e / (t - 1)) * o);
                            });
                        } else {
                            e = [];
                            var c = [];
                            if (E && E.length > 2) for (var s = 1, l = E.length, I = 1 <= l; I ? s < l : s > l; I ? s++ : s--) c.push((E[s - 1] + E[s]) * 0.5);
                            else c = n;
                            a = c.map(function (e) {
                                return h(e);
                            });
                        }
                        return (
                            u[r] &&
                                (a = a.map(function (e) {
                                    return e[r]();
                                })),
                            a
                        );
                    }),
                    (h.cache = function (e) {
                        return null != e ? ((A = e), h) : A;
                    }),
                    (h.gamma = function (e) {
                        return null != e ? ((T = e), h) : T;
                    }),
                    (h.nodata = function (e) {
                        return null != e ? ((r = u(e)), h) : r;
                    }),
                    h
                );
            },
            tz = function (e) {
                for (var t = [1, 1], r = 1; r < e; r++) {
                    for (var a = [1], n = 1; n <= t.length; n++) a[n] = (t[n] || 0) + t[n - 1];
                    t = a;
                }
                return t;
            },
            tJ = function (e) {
                var t, r, a, n, _, o, E, i, c, s, l;
                if (
                    2 ===
                    (e = e.map(function (e) {
                        return new I(e);
                    })).length
                )
                    (_ = (t = e.map(function (e) {
                        return e.lab();
                    }))[0]),
                        (o = t[1]),
                        (n = function (e) {
                            return new I(
                                [0, 1, 2].map(function (t) {
                                    return _[t] + e * (o[t] - _[t]);
                                }),
                                'lab'
                            );
                        });
                else if (3 === e.length)
                    (_ = (r = e.map(function (e) {
                        return e.lab();
                    }))[0]),
                        (o = r[1]),
                        (E = r[2]),
                        (n = function (e) {
                            return new I(
                                [0, 1, 2].map(function (t) {
                                    return (1 - e) * (1 - e) * _[t] + 2 * (1 - e) * e * o[t] + e * e * E[t];
                                }),
                                'lab'
                            );
                        });
                else if (4 === e.length)
                    (_ = (a = e.map(function (e) {
                        return e.lab();
                    }))[0]),
                        (o = a[1]),
                        (E = a[2]),
                        (i = a[3]),
                        (n = function (e) {
                            return new I(
                                [0, 1, 2].map(function (t) {
                                    return (1 - e) * (1 - e) * (1 - e) * _[t] + 3 * (1 - e) * (1 - e) * e * o[t] + 3 * (1 - e) * e * e * E[t] + e * e * e * i[t];
                                }),
                                'lab'
                            );
                        });
                else if (e.length >= 5)
                    (c = e.map(function (e) {
                        return e.lab();
                    })),
                        (s = tz((l = e.length - 1))),
                        (n = function (e) {
                            var t = 1 - e;
                            return new I(
                                [0, 1, 2].map(function (r) {
                                    return c.reduce(function (a, n, _) {
                                        return a + s[_] * Math.pow(t, l - _) * Math.pow(e, _) * n[r];
                                    }, 0);
                                }),
                                'lab'
                            );
                        });
                else throw RangeError('No point in running bezier with only one color.');
                return n;
            },
            tQ = function (e, t, r) {
                if (!tQ[r]) throw Error('unknown blend mode ' + r);
                return tQ[r](e, t);
            },
            tZ = function (e) {
                return function (t, r) {
                    var a = u(r).rgb(),
                        n = u(t).rgb();
                    return u.rgb(e(a, n));
                };
            },
            t0 = function (e) {
                return function (t, r) {
                    var a = [];
                    return (a[0] = e(t[0], r[0])), (a[1] = e(t[1], r[1])), (a[2] = e(t[2], r[2])), a;
                };
            };
        (tQ.normal = tZ(
            t0(function (e) {
                return e;
            })
        )),
            (tQ.multiply = tZ(
                t0(function (e, t) {
                    return (e * t) / 255;
                })
            )),
            (tQ.screen = tZ(
                t0(function (e, t) {
                    return 255 * (1 - (1 - e / 255) * (1 - t / 255));
                })
            )),
            (tQ.overlay = tZ(
                t0(function (e, t) {
                    return t < 128 ? (2 * e * t) / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255));
                })
            )),
            (tQ.darken = tZ(
                t0(function (e, t) {
                    return e > t ? t : e;
                })
            )),
            (tQ.lighten = tZ(
                t0(function (e, t) {
                    return e > t ? e : t;
                })
            )),
            (tQ.dodge = tZ(
                t0(function (e, t) {
                    return 255 === e ? 255 : (e = ((t / 255) * 255) / (1 - e / 255)) > 255 ? 255 : e;
                })
            )),
            (tQ.burn = tZ(
                t0(function (e, t) {
                    return 255 * (1 - (1 - t / 255) / (e / 255));
                })
            ));
        for (
            var t1 = E.type,
                t2 = E.clip_rgb,
                t3 = E.TWOPI,
                t6 = Math.pow,
                t4 = Math.sin,
                t5 = Math.cos,
                t8 = Math.floor,
                t7 = Math.random,
                t9 = Math.log,
                re = Math.pow,
                rt = Math.floor,
                rr = Math.abs,
                ra = function (e, t) {
                    void 0 === t && (t = null);
                    var r = {
                        min: Number.MAX_VALUE,
                        max: -1 * Number.MAX_VALUE,
                        sum: 0,
                        values: [],
                        count: 0
                    };
                    return (
                        'object' === _(e) && (e = Object.values(e)),
                        e.forEach(function (e) {
                            t && 'object' === _(e) && (e = e[t]), null != e && !isNaN(e) && (r.values.push(e), (r.sum += e), e < r.min && (r.min = e), e > r.max && (r.max = e), (r.count += 1));
                        }),
                        (r.domain = [r.min, r.max]),
                        (r.limits = function (e, t) {
                            return rn(r, e, t);
                        }),
                        r
                    );
                },
                rn = function (e, t, r) {
                    void 0 === t && (t = 'equal'), void 0 === r && (r = 7), 'array' == _(e) && (e = ra(e));
                    var a = e.min,
                        n = e.max,
                        o = e.values.sort(function (e, t) {
                            return e - t;
                        });
                    if (1 === r) return [a, n];
                    var E = [];
                    if (('c' === t.substr(0, 1) && (E.push(a), E.push(n)), 'e' === t.substr(0, 1))) {
                        E.push(a);
                        for (var i = 1; i < r; i++) E.push(a + (i / r) * (n - a));
                        E.push(n);
                    } else if ('l' === t.substr(0, 1)) {
                        if (a <= 0) throw Error('Logarithmic scales are only possible for values > 0');
                        var c = Math.LOG10E * t9(a),
                            s = Math.LOG10E * t9(n);
                        E.push(a);
                        for (var l = 1; l < r; l++) E.push(re(10, c + (l / r) * (s - c)));
                        E.push(n);
                    } else if ('q' === t.substr(0, 1)) {
                        E.push(a);
                        for (var I = 1; I < r; I++) {
                            var u = ((o.length - 1) * I) / r,
                                R = rt(u);
                            if (R === u) E.push(o[R]);
                            else {
                                var A = u - R;
                                E.push(o[R] * (1 - A) + o[R + 1] * A);
                            }
                        }
                        E.push(n);
                    } else if ('k' === t.substr(0, 1)) {
                        var T,
                            N = o.length,
                            d = Array(N),
                            f = Array(r),
                            O = !0,
                            L = 0,
                            p = null;
                        (p = []).push(a);
                        for (var h = 1; h < r; h++) p.push(a + (h / r) * (n - a));
                        for (p.push(n); O; ) {
                            for (var D = 0; D < r; D++) f[D] = 0;
                            for (var S = 0; S < N; S++) {
                                for (var C = o[S], P = Number.MAX_VALUE, g = void 0, U = 0; U < r; U++) {
                                    var M = rr(p[U] - C);
                                    M < P && ((P = M), (g = U)), f[g]++, (d[S] = g);
                                }
                            }
                            for (var G = Array(r), m = 0; m < r; m++) G[m] = null;
                            for (var y = 0; y < N; y++) null === G[(T = d[y])] ? (G[T] = o[y]) : (G[T] += o[y]);
                            for (var b = 0; b < r; b++) G[b] *= 1 / f[b];
                            O = !1;
                            for (var v = 0; v < r; v++)
                                if (G[v] !== p[v]) {
                                    O = !0;
                                    break;
                                }
                            (p = G), ++L > 200 && (O = !1);
                        }
                        for (var w = {}, B = 0; B < r; B++) w[B] = [];
                        for (var W = 0; W < N; W++) w[(T = d[W])].push(o[W]);
                        for (var Y = [], H = 0; H < r; H++) Y.push(w[H][0]), Y.push(w[H][w[H].length - 1]);
                        (Y = Y.sort(function (e, t) {
                            return e - t;
                        })),
                            E.push(Y[0]);
                        for (var x = 1; x < Y.length; x += 2) {
                            var K = Y[x];
                            !isNaN(K) && -1 === E.indexOf(K) && E.push(K);
                        }
                    }
                    return E;
                },
                r_ = ra,
                ro = rn,
                rE = Math.sqrt,
                ri = Math.pow,
                rc = Math.min,
                rs = Math.max,
                rl = Math.atan2,
                rI = Math.abs,
                ru = Math.cos,
                rR = Math.sin,
                rA = Math.exp,
                rT = Math.PI,
                rN = {
                    OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
                    PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
                    BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
                    Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
                    BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
                    YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
                    YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
                    Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                    RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
                    Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
                    YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
                    Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
                    GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
                    Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
                    YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
                    PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
                    Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
                    PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
                    Viridis: ['#440154', '#482777', '#3f4a8a', '#31678e', '#26838f', '#1f9d8a', '#6cce5a', '#b6de2b', '#fee825'],
                    Spectral: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
                    RdYlGn: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
                    RdBu: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
                    PiYG: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
                    PRGn: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
                    RdYlBu: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
                    BrBG: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
                    RdGy: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
                    PuOr: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],
                    Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
                    Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
                    Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
                    Set3: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
                    Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
                    Paired: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
                    Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
                    Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2']
                },
                rd = 0,
                rf = Object.keys(rN);
            rd < rf.length;
            rd += 1
        ) {
            var rO = rf[rd];
            rN[rO.toLowerCase()] = rN[rO];
        }
        return (
            (u.average = function (e, t, r) {
                void 0 === t && (t = 'lrgb'), void 0 === r && (r = null);
                var a = e.length;
                !r &&
                    (r = Array.from(Array(a)).map(function () {
                        return 1;
                    }));
                var n =
                    a /
                    r.reduce(function (e, t) {
                        return e + t;
                    });
                if (
                    (r.forEach(function (e, t) {
                        r[t] *= n;
                    }),
                    (e = e.map(function (e) {
                        return new I(e);
                    })),
                    'lrgb' === t)
                )
                    return tX(e, r);
                for (var _ = e.shift(), o = _.get(t), E = [], i = 0, c = 0, s = 0; s < o.length; s++)
                    if (((o[s] = (o[s] || 0) * r[0]), E.push(isNaN(o[s]) ? 0 : r[0]), 'h' === t.charAt(s) && !isNaN(o[s]))) {
                        var l = (o[s] / 180) * tK;
                        (i += tk(l) * r[0]), (c += tV(l) * r[0]);
                    }
                var u = _.alpha() * r[0];
                e.forEach(function (e, a) {
                    var n = e.get(t);
                    u += e.alpha() * r[a + 1];
                    for (var _ = 0; _ < o.length; _++)
                        if (!isNaN(n[_])) {
                            if (((E[_] += r[a + 1]), 'h' === t.charAt(_))) {
                                var s = (n[_] / 180) * tK;
                                (i += tk(s) * r[a + 1]), (c += tV(s) * r[a + 1]);
                            } else o[_] += n[_] * r[a + 1];
                        }
                });
                for (var R = 0; R < o.length; R++)
                    if ('h' === t.charAt(R)) {
                        for (var A = (tF(c / E[R], i / E[R]) / tK) * 180; A < 0; ) A += 360;
                        for (; A >= 360; ) A -= 360;
                        o[R] = A;
                    } else o[R] = o[R] / E[R];
                return (u /= a), new I(o, t).alpha(u > 0.99999 ? 1 : u, !0);
            }),
            (u.bezier = function (e) {
                var t = tJ(e);
                return (
                    (t.scale = function () {
                        return tq(t);
                    }),
                    t
                );
            }),
            (u.blend = tQ),
            (u.cubehelix = function (e, t, r, a, n) {
                void 0 === e && (e = 300), void 0 === t && (t = -1.5), void 0 === r && (r = 1), void 0 === a && (a = 1), void 0 === n && (n = [0, 1]);
                var _,
                    o = 0;
                'array' === t1(n) ? (_ = n[1] - n[0]) : ((_ = 0), (n = [n, n]));
                var E = function (E) {
                    var i = t3 * ((e + 120) / 360 + t * E),
                        c = t6(n[0] + _ * E, a),
                        s = ((0 !== o ? r[0] + E * o : r) * c * (1 - c)) / 2,
                        l = t5(i),
                        I = t4(i);
                    return u(t2([255 * (c + s * (-0.14861 * l + 1.78277 * I)), 255 * (c + s * (-0.29227 * l - 0.90649 * I)), 255 * (c + 1.97294 * l * s), 1]));
                };
                return (
                    (E.start = function (t) {
                        return null == t ? e : ((e = t), E);
                    }),
                    (E.rotations = function (e) {
                        return null == e ? t : ((t = e), E);
                    }),
                    (E.gamma = function (e) {
                        return null == e ? a : ((a = e), E);
                    }),
                    (E.hue = function (e) {
                        return null == e ? r : ('array' === t1((r = e)) ? 0 == (o = r[1] - r[0]) && (r = r[1]) : (o = 0), E);
                    }),
                    (E.lightness = function (e) {
                        return null == e ? n : ('array' === t1(e) ? ((n = e), (_ = e[1] - e[0])) : ((n = [e, e]), (_ = 0)), E);
                    }),
                    (E.scale = function () {
                        return u.scale(E);
                    }),
                    E.hue(r),
                    E
                );
            }),
            (u.mix = u.interpolate = ty),
            (u.random = function () {
                for (var e = '#', t = 0; t < 6; t++) e += '0123456789abcdef'.charAt(t8(16 * t7()));
                return new I(e, 'hex');
            }),
            (u.scale = tq),
            (u.analyze = r_),
            (u.contrast = function (e, t) {
                (e = new I(e)), (t = new I(t));
                var r = e.luminance(),
                    a = t.luminance();
                return r > a ? (r + 0.05) / (a + 0.05) : (a + 0.05) / (r + 0.05);
            }),
            (u.deltaE = function (e, t, r, a, n) {
                void 0 === r && (r = 1), void 0 === a && (a = 1), void 0 === n && (n = 1);
                var _ = function (e) {
                        return (360 * e) / (2 * rT);
                    },
                    o = function (e) {
                        return (2 * rT * e) / 360;
                    };
                (e = new I(e)), (t = new I(t));
                var E = Array.from(e.lab()),
                    i = E[0],
                    c = E[1],
                    s = E[2],
                    l = Array.from(t.lab()),
                    u = l[0],
                    R = l[1],
                    A = l[2],
                    T = (i + u) / 2,
                    N = (rE(ri(c, 2) + ri(s, 2)) + rE(ri(R, 2) + ri(A, 2))) / 2,
                    d = 0.5 * (1 - rE(ri(N, 7) / (ri(N, 7) + ri(25, 7)))),
                    f = c * (1 + d),
                    O = R * (1 + d),
                    L = rE(ri(f, 2) + ri(s, 2)),
                    p = rE(ri(O, 2) + ri(A, 2)),
                    h = (L + p) / 2,
                    D = _(rl(s, f)),
                    S = _(rl(A, O)),
                    C = D >= 0 ? D : D + 360,
                    P = S >= 0 ? S : S + 360,
                    g = rI(C - P) > 180 ? (C + P + 360) / 2 : (C + P) / 2,
                    U = 1 - 0.17 * ru(o(g - 30)) + 0.24 * ru(o(2 * g)) + 0.32 * ru(o(3 * g + 6)) - 0.2 * ru(o(4 * g - 63)),
                    M = P - C;
                (M = 180 >= rI(M) ? M : P <= C ? M + 360 : M - 360), (M = 2 * rE(L * p) * rR(o(M) / 2));
                var G = p - L,
                    m = 1 + (0.015 * ri(T - 50, 2)) / rE(20 + ri(T - 50, 2)),
                    y = 1 + 0.045 * h,
                    b = 1 + 0.015 * h * U,
                    v = 30 * rA(-ri((g - 275) / 25, 2)),
                    w = -(2 * rE(ri(h, 7) / (ri(h, 7) + ri(25, 7)))) * rR(2 * o(v));
                return rs(0, rc(100, rE(ri((u - i) / (r * m), 2) + ri(G / (a * y), 2) + ri(M / (n * b), 2) + (G / (a * y)) * w * (M / (n * b)))));
            }),
            (u.distance = function (e, t, r) {
                void 0 === r && (r = 'lab'), (e = new I(e)), (t = new I(t));
                var a = e.get(r),
                    n = t.get(r),
                    _ = 0;
                for (var o in a) {
                    var E = (a[o] || 0) - (n[o] || 0);
                    _ += E * E;
                }
                return Math.sqrt(_);
            }),
            (u.limits = ro),
            (u.valid = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                try {
                    return new (Function.prototype.bind.apply(I, [null].concat(e)))(), !0;
                } catch (e) {
                    return !1;
                }
            }),
            (u.scales = {
                cool: function () {
                    return tq([u.hsl(180, 1, 0.9), u.hsl(250, 0.7, 0.4)]);
                },
                hot: function () {
                    return tq(['#000', '#f00', '#ff0', '#fff']).mode('rgb');
                }
            }),
            (u.colors = e6),
            (u.brewer = rN),
            u
        );
    }),
    (e.exports = r());
