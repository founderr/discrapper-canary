var t, r;
(t = 0),
    (r = function () {
        for (
            var e = function (e, t, r) {
                    return void 0 === t && (t = 0), void 0 === r && (r = 1), e < t ? t : e > r ? r : e;
                },
                t = {},
                r = 0,
                n = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Undefined', 'Null'];
            r < n.length;
            r += 1
        ) {
            var a = n[r];
            t['[object ' + a + ']'] = a.toLowerCase();
        }
        var _ = function (e) {
                return t[Object.prototype.toString.call(e)] || 'object';
            },
            o = Math.PI,
            i = {
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
            E = {
                format: {},
                autodetect: []
            },
            c = i.last,
            s = i.clip_rgb,
            I = i.type,
            u = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                if ('object' === I(e[0]) && e[0].constructor && e[0].constructor === this.constructor) return e[0];
                var r = c(e),
                    n = !1;
                if (!r) {
                    (n = !0),
                        !E.sorted &&
                            ((E.autodetect = E.autodetect.sort(function (e, t) {
                                return t.p - e.p;
                            })),
                            (E.sorted = !0));
                    for (var a = 0, _ = E.autodetect; a < _.length; a += 1) {
                        var o = _[a];
                        if ((r = o.test.apply(o, e))) break;
                    }
                }
                if (E.format[r]) {
                    var i = E.format[r].apply(null, n ? e : e.slice(0, -1));
                    this._rgb = s(i);
                } else throw Error('unknown format: ' + e);
                3 === this._rgb.length && this._rgb.push(1);
            };
        u.prototype.toString = function () {
            return 'function' == I(this.hex) ? this.hex() : '[' + this._rgb.join(',') + ']';
        };
        var l = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(l.Color, [null].concat(e)))();
        };
        (l.Color = u), (l.version = '2.4.2');
        var R = i.unpack,
            A = Math.max,
            T = i.unpack,
            N = i.unpack,
            d = i.type,
            O = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = R(e, 'rgb'),
                    n = r[0],
                    a = r[1],
                    _ = r[2],
                    o = 1 - A((n /= 255), A((a /= 255), (_ /= 255))),
                    i = o < 1 ? 1 / (1 - o) : 0;
                return [(1 - n - o) * i, (1 - a - o) * i, (1 - _ - o) * i, o];
            };
        (u.prototype.cmyk = function () {
            return O(this._rgb);
        }),
            (l.cmyk = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(u, [null].concat(e, ['cmyk'])))();
            }),
            (E.format.cmyk = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = (e = T(e, 'cmyk'))[0],
                    n = e[1],
                    a = e[2],
                    _ = e[3],
                    o = e.length > 4 ? e[4] : 1;
                return 1 === _ ? [0, 0, 0, o] : [r >= 1 ? 0 : 255 * (1 - r) * (1 - _), n >= 1 ? 0 : 255 * (1 - n) * (1 - _), a >= 1 ? 0 : 255 * (1 - a) * (1 - _), o];
            }),
            E.autodetect.push({
                p: 2,
                test: function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    if ('array' === d((e = N(e, 'cmyk'))) && 4 === e.length) return 'cmyk';
                }
            });
        var p = i.unpack,
            f = i.last,
            L = function (e) {
                return Math.round(100 * e) / 100;
            },
            S = i.unpack,
            D = function () {
                for (var e, t, r = [], n = arguments.length; n--; ) r[n] = arguments[n];
                var a = (r = S(r, 'rgba'))[0],
                    _ = r[1],
                    o = r[2],
                    i = Math.min((a /= 255), (_ /= 255), (o /= 255)),
                    E = Math.max(a, _, o),
                    c = (E + i) / 2;
                return (E === i ? ((e = 0), (t = Number.NaN)) : (e = c < 0.5 ? (E - i) / (E + i) : (E - i) / (2 - E - i)), a == E ? (t = (_ - o) / (E - i)) : _ == E ? (t = 2 + (o - a) / (E - i)) : o == E && (t = 4 + (a - _) / (E - i)), (t *= 60) < 0 && (t += 360), r.length > 3 && void 0 !== r[3]) ? [t, e, c, r[3]] : [t, e, c];
            },
            h = i.unpack,
            C = i.last,
            g = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = p(e, 'hsla'),
                    n = f(e) || 'lsa';
                return (r[0] = L(r[0] || 0)), (r[1] = L(100 * r[1]) + '%'), (r[2] = L(100 * r[2]) + '%'), 'hsla' === n || (r.length > 3 && r[3] < 1) ? ((r[3] = r.length > 3 ? r[3] : 1), (n = 'hsla')) : (r.length = 3), n + '(' + r.join(',') + ')';
            },
            M = Math.round,
            P = i.unpack,
            U = Math.round,
            m = function () {
                for (var e, t, r, n, a = [], _ = arguments.length; _--; ) a[_] = arguments[_];
                var o = (a = P(a, 'hsl'))[0],
                    i = a[1],
                    E = a[2];
                if (0 === i) t = r = n = 255 * E;
                else {
                    var c = [0, 0, 0],
                        s = [0, 0, 0],
                        I = E < 0.5 ? E * (1 + i) : E + i - E * i,
                        u = 2 * E - I,
                        l = o / 360;
                    (c[0] = l + 1 / 3), (c[1] = l), (c[2] = l - 1 / 3);
                    for (var R = 0; R < 3; R++) c[R] < 0 && (c[R] += 1), c[R] > 1 && (c[R] -= 1), 6 * c[R] < 1 ? (s[R] = u + (I - u) * 6 * c[R]) : 2 * c[R] < 1 ? (s[R] = I) : 3 * c[R] < 2 ? (s[R] = u + (I - u) * (2 / 3 - c[R]) * 6) : (s[R] = u);
                    (t = (e = [U(255 * s[0]), U(255 * s[1]), U(255 * s[2])])[0]), (r = e[1]), (n = e[2]);
                }
                return a.length > 3 ? [t, r, n, a[3]] : [t, r, n, 1];
            },
            G = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
            y = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
            b = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
            v = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
            B = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
            w = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
            H = Math.round,
            Y = function (e) {
                if (((e = e.toLowerCase().trim()), E.format.named))
                    try {
                        return E.format.named(e);
                    } catch (e) {}
                if ((t = e.match(G))) {
                    for (var t, r = t.slice(1, 4), n = 0; n < 3; n++) r[n] = +r[n];
                    return (r[3] = 1), r;
                }
                if ((t = e.match(y))) {
                    for (var a = t.slice(1, 5), _ = 0; _ < 4; _++) a[_] = +a[_];
                    return a;
                }
                if ((t = e.match(b))) {
                    for (var o = t.slice(1, 4), i = 0; i < 3; i++) o[i] = H(2.55 * o[i]);
                    return (o[3] = 1), o;
                }
                if ((t = e.match(v))) {
                    for (var c = t.slice(1, 5), s = 0; s < 3; s++) c[s] = H(2.55 * c[s]);
                    return (c[3] = +c[3]), c;
                }
                if ((t = e.match(B))) {
                    var I = t.slice(1, 4);
                    (I[1] *= 0.01), (I[2] *= 0.01);
                    var u = m(I);
                    return (u[3] = 1), u;
                }
                if ((t = e.match(w))) {
                    var l = t.slice(1, 4);
                    (l[1] *= 0.01), (l[2] *= 0.01);
                    var R = m(l);
                    return (R[3] = +t[4]), R;
                }
            };
        Y.test = function (e) {
            return G.test(e) || y.test(e) || b.test(e) || v.test(e) || B.test(e) || w.test(e);
        };
        var W = i.type,
            K = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = h(e, 'rgba'),
                    n = C(e) || 'rgb';
                return 'hsl' == n.substr(0, 3) ? g(D(r), n) : ((r[0] = M(r[0])), (r[1] = M(r[1])), (r[2] = M(r[2])), ('rgba' === n || (r.length > 3 && r[3] < 1)) && ((r[3] = r.length > 3 ? r[3] : 1), (n = 'rgba')), n + '(' + r.slice(0, 'rgb' === n ? 3 : 4).join(',') + ')');
            };
        (u.prototype.css = function (e) {
            return K(this._rgb, e);
        }),
            (l.css = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(u, [null].concat(e, ['css'])))();
            }),
            (E.format.css = Y),
            E.autodetect.push({
                p: 5,
                test: function (e) {
                    for (var t = [], r = arguments.length - 1; r-- > 0; ) t[r] = arguments[r + 1];
                    if (!t.length && 'string' === W(e) && Y.test(e)) return 'css';
                }
            });
        var k = i.unpack;
        (E.format.gl = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = k(e, 'rgba');
            return (r[0] *= 255), (r[1] *= 255), (r[2] *= 255), r;
        }),
            (l.gl = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(u, [null].concat(e, ['gl'])))();
            }),
            (u.prototype.gl = function () {
                var e = this._rgb;
                return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
            });
        var V = i.unpack,
            x = i.unpack,
            F = Math.floor,
            X = i.unpack,
            j = i.type,
            $ = function () {
                for (var e, t = [], r = arguments.length; r--; ) t[r] = arguments[r];
                var n = V(t, 'rgb'),
                    a = n[0],
                    _ = n[1],
                    o = n[2],
                    i = Math.min(a, _, o),
                    E = Math.max(a, _, o),
                    c = E - i;
                return 0 === c ? (e = Number.NaN) : (a === E && (e = (_ - o) / c), _ === E && (e = 2 + (o - a) / c), o === E && (e = 4 + (a - _) / c), (e *= 60) < 0 && (e += 360)), [e, (100 * c) / 255, (i / (255 - c)) * 100];
            };
        (u.prototype.hcg = function () {
            return $(this._rgb);
        }),
            (l.hcg = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(u, [null].concat(e, ['hcg'])))();
            }),
            (E.format.hcg = function () {
                for (var e, t, r, n, a, _, o, i, E, c = [], s = arguments.length; s--; ) c[s] = arguments[s];
                var I = (c = x(c, 'hcg'))[0],
                    u = c[1],
                    l = c[2];
                l *= 255;
                var R = 255 * u;
                if (0 === u) o = i = E = l;
                else {
                    360 === I && (I = 0), I > 360 && (I -= 360), I < 0 && (I += 360);
                    var A = F((I /= 60)),
                        T = I - A,
                        N = l * (1 - u),
                        d = N + R * (1 - T),
                        O = N + R * T,
                        p = N + R;
                    switch (A) {
                        case 0:
                            (o = (e = [p, O, N])[0]), (i = e[1]), (E = e[2]);
                            break;
                        case 1:
                            (o = (t = [d, p, N])[0]), (i = t[1]), (E = t[2]);
                            break;
                        case 2:
                            (o = (r = [N, p, O])[0]), (i = r[1]), (E = r[2]);
                            break;
                        case 3:
                            (o = (n = [N, d, p])[0]), (i = n[1]), (E = n[2]);
                            break;
                        case 4:
                            (o = (a = [O, N, p])[0]), (i = a[1]), (E = a[2]);
                            break;
                        case 5:
                            (o = (_ = [p, N, d])[0]), (i = _[1]), (E = _[2]);
                    }
                }
                return [o, i, E, c.length > 3 ? c[3] : 1];
            }),
            E.autodetect.push({
                p: 1,
                test: function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    if ('array' === j((e = X(e, 'hcg'))) && 3 === e.length) return 'hcg';
                }
            });
        var J = i.unpack,
            q = i.last,
            z = Math.round,
            Q = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = J(e, 'rgba'),
                    n = r[0],
                    a = r[1],
                    _ = r[2],
                    o = r[3],
                    i = q(e) || 'auto';
                void 0 === o && (o = 1), 'auto' === i && (i = o < 1 ? 'rgba' : 'rgb'), (n = z(n)), (a = z(a));
                var E = '000000' + ((n << 16) | (a << 8) | (_ = z(_))).toString(16);
                E = E.substr(E.length - 6);
                var c = '0' + z(255 * o).toString(16);
                switch (((c = c.substr(c.length - 2)), i.toLowerCase())) {
                    case 'rgba':
                        return '#' + E + c;
                    case 'argb':
                        return '#' + c + E;
                    default:
                        return '#' + E;
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
                        n = Math.round(((255 & r) / 255) * 100) / 100;
                    return [(r >> 24) & 255, (r >> 16) & 255, (r >> 8) & 255, n];
                }
                throw Error('unknown hex color: ' + e);
            },
            er = i.type;
        (u.prototype.hex = function (e) {
            return Q(this._rgb, e);
        }),
            (l.hex = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(u, [null].concat(e, ['hex'])))();
            }),
            (E.format.hex = et),
            E.autodetect.push({
                p: 4,
                test: function (e) {
                    for (var t = [], r = arguments.length - 1; r-- > 0; ) t[r] = arguments[r + 1];
                    if (!t.length && 'string' === er(e) && [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0) return 'hex';
                }
            });
        var en = i.unpack,
            ea = i.TWOPI,
            e_ = Math.min,
            eo = Math.sqrt,
            ei = Math.acos,
            eE = i.unpack,
            ec = i.limit,
            es = i.TWOPI,
            eI = i.PITHIRD,
            eu = Math.cos,
            el = i.unpack,
            eR = i.type,
            eA = function () {
                for (var e, t = [], r = arguments.length; r--; ) t[r] = arguments[r];
                var n = en(t, 'rgb'),
                    a = n[0],
                    _ = n[1],
                    o = n[2],
                    i = e_((a /= 255), (_ /= 255), (o /= 255)),
                    E = (a + _ + o) / 3,
                    c = E > 0 ? 1 - i / E : 0;
                return 0 === c ? (e = NaN) : ((e = ei((e = (a - _ + (a - o)) / 2 / eo((a - _) * (a - _) + (a - o) * (_ - o))))), o > _ && (e = ea - e), (e /= ea)), [360 * e, c, E];
            };
        (u.prototype.hsi = function () {
            return eA(this._rgb);
        }),
            (l.hsi = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(u, [null].concat(e, ['hsi'])))();
            }),
            (E.format.hsi = function () {
                for (var e, t, r, n = [], a = arguments.length; a--; ) n[a] = arguments[a];
                var _ = (n = eE(n, 'hsi'))[0],
                    o = n[1],
                    i = n[2];
                return isNaN(_) && (_ = 0), isNaN(o) && (o = 0), _ > 360 && (_ -= 360), _ < 0 && (_ += 360), (_ /= 360) < 1 / 3 ? (t = 1 - ((r = (1 - o) / 3) + (e = (1 + (o * eu(es * _)) / eu(eI - es * _)) / 3))) : _ < 2 / 3 ? ((_ -= 1 / 3), (r = 1 - ((e = (1 - o) / 3) + (t = (1 + (o * eu(es * _)) / eu(eI - es * _)) / 3)))) : ((_ -= 2 / 3), (e = 1 - ((t = (1 - o) / 3) + (r = (1 + (o * eu(es * _)) / eu(eI - es * _)) / 3)))), (e = ec(i * e * 3)), (t = ec(i * t * 3)), [255 * e, 255 * t, 255 * (r = ec(i * r * 3)), n.length > 3 ? n[3] : 1];
            }),
            E.autodetect.push({
                p: 2,
                test: function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    if ('array' === eR((e = el(e, 'hsi'))) && 3 === e.length) return 'hsi';
                }
            });
        var eT = i.unpack,
            eN = i.type;
        (u.prototype.hsl = function () {
            return D(this._rgb);
        }),
            (l.hsl = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(u, [null].concat(e, ['hsl'])))();
            }),
            (E.format.hsl = m),
            E.autodetect.push({
                p: 2,
                test: function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    if ('array' === eN((e = eT(e, 'hsl'))) && 3 === e.length) return 'hsl';
                }
            });
        var ed = i.unpack,
            eO = Math.min,
            ep = Math.max,
            ef = i.unpack,
            eL = Math.floor,
            eS = i.unpack,
            eD = i.type,
            eh = function () {
                for (var e, t, r, n = [], a = arguments.length; a--; ) n[a] = arguments[a];
                var _ = (n = ed(n, 'rgb'))[0],
                    o = n[1],
                    i = n[2],
                    E = eO(_, o, i),
                    c = ep(_, o, i),
                    s = c - E;
                return (r = c / 255), 0 === c ? ((e = Number.NaN), (t = 0)) : ((t = s / c), _ === c && (e = (o - i) / s), o === c && (e = 2 + (i - _) / s), i === c && (e = 4 + (_ - o) / s), (e *= 60) < 0 && (e += 360)), [e, t, r];
            };
        (u.prototype.hsv = function () {
            return eh(this._rgb);
        }),
            (l.hsv = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(u, [null].concat(e, ['hsv'])))();
            }),
            (E.format.hsv = function () {
                for (var e, t, r, n, a, _, o, i, E, c = [], s = arguments.length; s--; ) c[s] = arguments[s];
                var I = (c = ef(c, 'hsv'))[0],
                    u = c[1],
                    l = c[2];
                if (((l *= 255), 0 === u)) o = i = E = l;
                else {
                    360 === I && (I = 0), I > 360 && (I -= 360), I < 0 && (I += 360);
                    var R = eL((I /= 60)),
                        A = I - R,
                        T = l * (1 - u),
                        N = l * (1 - u * A),
                        d = l * (1 - u * (1 - A));
                    switch (R) {
                        case 0:
                            (o = (e = [l, d, T])[0]), (i = e[1]), (E = e[2]);
                            break;
                        case 1:
                            (o = (t = [N, l, T])[0]), (i = t[1]), (E = t[2]);
                            break;
                        case 2:
                            (o = (r = [T, l, d])[0]), (i = r[1]), (E = r[2]);
                            break;
                        case 3:
                            (o = (n = [T, N, l])[0]), (i = n[1]), (E = n[2]);
                            break;
                        case 4:
                            (o = (a = [d, T, l])[0]), (i = a[1]), (E = a[2]);
                            break;
                        case 5:
                            (o = (_ = [l, T, N])[0]), (i = _[1]), (E = _[2]);
                    }
                }
                return [o, i, E, c.length > 3 ? c[3] : 1];
            }),
            E.autodetect.push({
                p: 2,
                test: function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    if ('array' === eD((e = eS(e, 'hsv'))) && 3 === e.length) return 'hsv';
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
            eg = i.unpack,
            eM = Math.pow,
            eP = function (e) {
                return (e /= 255) <= 0.04045 ? e / 12.92 : eM((e + 0.055) / 1.055, 2.4);
            },
            eU = function (e) {
                return e > eC.t3 ? eM(e, 1 / 3) : e / eC.t2 + eC.t0;
            },
            em = function (e, t, r) {
                return (e = eP(e)), (t = eP(t)), [eU((0.4124564 * e + 0.3575761 * t + 0.1804375 * (r = eP(r))) / eC.Xn), eU((0.2126729 * e + 0.7151522 * t + 0.072175 * r) / eC.Yn), eU((0.0193339 * e + 0.119192 * t + 0.9503041 * r) / eC.Zn)];
            },
            eG = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = eg(e, 'rgb'),
                    n = em(r[0], r[1], r[2]),
                    a = n[0],
                    _ = n[1],
                    o = n[2],
                    i = 116 * _ - 16;
                return [i < 0 ? 0 : i, 500 * (a - _), 200 * (_ - o)];
            },
            ey = i.unpack,
            eb = Math.pow,
            ev = function (e) {
                return 255 * (e <= 0.00304 ? 12.92 * e : 1.055 * eb(e, 1 / 2.4) - 0.055);
            },
            eB = function (e) {
                return e > eC.t1 ? e * e * e : eC.t2 * (e - eC.t0);
            },
            ew = function () {
                for (var e, t, r, n, a, _ = [], o = arguments.length; o--; ) _[o] = arguments[o];
                var i = (_ = ey(_, 'lab'))[0],
                    E = _[1],
                    c = _[2];
                return (t = (i + 16) / 116), (e = isNaN(E) ? t : t + E / 500), (r = isNaN(c) ? t : t - c / 200), (t = eC.Yn * eB(t)), (e = eC.Xn * eB(e)), (n = ev(3.2404542 * e - 1.5371385 * t - 0.4985314 * (r = eC.Zn * eB(r)))), (a = ev(-0.969266 * e + 1.8760108 * t + 0.041556 * r)), [n, a, ev(0.0556434 * e - 0.2040259 * t + 1.0572252 * r), _.length > 3 ? _[3] : 1];
            },
            eH = i.unpack,
            eY = i.type;
        (u.prototype.lab = function () {
            return eG(this._rgb);
        }),
            (l.lab = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(u, [null].concat(e, ['lab'])))();
            }),
            (E.format.lab = ew),
            E.autodetect.push({
                p: 2,
                test: function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    if ('array' === eY((e = eH(e, 'lab'))) && 3 === e.length) return 'lab';
                }
            });
        var eW = i.unpack,
            eK = i.RAD2DEG,
            ek = Math.sqrt,
            eV = Math.atan2,
            ex = Math.round,
            eF = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = eW(e, 'lab'),
                    n = r[0],
                    a = r[1],
                    _ = r[2],
                    o = ek(a * a + _ * _),
                    i = (eV(_, a) * eK + 360) % 360;
                return 0 === ex(10000 * o) && (i = Number.NaN), [n, o, i];
            },
            eX = i.unpack,
            ej = i.unpack,
            e$ = i.DEG2RAD,
            eJ = Math.sin,
            eq = Math.cos,
            ez = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = ej(e, 'lch'),
                    n = r[0],
                    a = r[1],
                    _ = r[2];
                return isNaN(_) && (_ = 0), [n, eq((_ *= e$)) * a, eJ(_) * a];
            },
            eQ = i.unpack,
            eZ = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = ez((e = eQ(e, 'lch'))[0], e[1], e[2]),
                    n = ew(r[0], r[1], r[2]);
                return [n[0], n[1], n[2], e.length > 3 ? e[3] : 1];
            },
            e0 = i.unpack,
            e1 = i.unpack,
            e2 = i.type,
            e3 = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = eX(e, 'rgb'),
                    n = eG(r[0], r[1], r[2]);
                return eF(n[0], n[1], n[2]);
            };
        (u.prototype.lch = function () {
            return e3(this._rgb);
        }),
            (u.prototype.hcl = function () {
                return e3(this._rgb).reverse();
            }),
            (l.lch = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(u, [null].concat(e, ['lch'])))();
            }),
            (l.hcl = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(u, [null].concat(e, ['hcl'])))();
            }),
            (E.format.lch = eZ),
            (E.format.hcl = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = e0(e, 'hcl').reverse();
                return eZ.apply(void 0, r);
            }),
            ['lch', 'hcl'].forEach(function (e) {
                return E.autodetect.push({
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
            e5 = i.type;
        (u.prototype.name = function () {
            for (var e = Q(this._rgb, 'rgb'), t = 0, r = Object.keys(e6); t < r.length; t += 1) {
                var n = r[t];
                if (e6[n] === e) return n.toLowerCase();
            }
            return e;
        }),
            (E.format.named = function (e) {
                if (e6[(e = e.toLowerCase())]) return et(e6[e]);
                throw Error('unknown color name: ' + e);
            }),
            E.autodetect.push({
                p: 5,
                test: function (e) {
                    for (var t = [], r = arguments.length - 1; r-- > 0; ) t[r] = arguments[r + 1];
                    if (!t.length && 'string' === e5(e) && e6[e.toLowerCase()]) return 'named';
                }
            });
        var e4 = i.unpack,
            e8 = i.type,
            e7 = i.type,
            e9 = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = e4(e, 'rgb');
                return (r[0] << 16) + (r[1] << 8) + r[2];
            };
        (u.prototype.num = function () {
            return e9(this._rgb);
        }),
            (l.num = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(u, [null].concat(e, ['num'])))();
            }),
            (E.format.num = function (e) {
                if ('number' == e8(e) && e >= 0 && e <= 16777215) return [e >> 16, (e >> 8) & 255, 255 & e, 1];
                throw Error('unknown num color: ' + e);
            }),
            E.autodetect.push({
                p: 5,
                test: function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    if (1 === e.length && 'number' === e7(e[0]) && e[0] >= 0 && e[0] <= 16777215) return 'num';
                }
            });
        var te = i.unpack,
            tt = i.type,
            tr = Math.round;
        (u.prototype.rgb = function (e) {
            return (void 0 === e && (e = !0), !1 === e) ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(tr);
        }),
            (u.prototype.rgba = function (e) {
                return (
                    void 0 === e && (e = !0),
                    this._rgb.slice(0, 4).map(function (t, r) {
                        return r < 3 ? (!1 === e ? t : tr(t)) : t;
                    })
                );
            }),
            (l.rgb = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(u, [null].concat(e, ['rgb'])))();
            }),
            (E.format.rgb = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = te(e, 'rgba');
                return void 0 === r[3] && (r[3] = 1), r;
            }),
            E.autodetect.push({
                p: 3,
                test: function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    if ('array' === tt((e = te(e, 'rgba'))) && (3 === e.length || (4 === e.length && 'number' == tt(e[3]) && e[3] >= 0 && e[3] <= 1))) return 'rgb';
                }
            });
        var tn = Math.log,
            ta = function (e) {
                var t,
                    r,
                    n,
                    a = e / 100;
                return a < 66 ? ((t = 255), (r = a < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (r = a - 2) + 104.49216199393888 * tn(r)), (n = a < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (n = a - 10) + 115.67994401066147 * tn(n))) : ((t = 351.97690566805693 + 0.114206453784165 * (t = a - 55) - 40.25366309332127 * tn(t)), (r = 325.4494125711974 + 0.07943456536662342 * (r = a - 50) - 28.0852963507957 * tn(r)), (n = 255)), [t, r, n, 1];
            },
            t_ = i.unpack,
            to = Math.round,
            ti = function () {
                for (var e, t = [], r = arguments.length; r--; ) t[r] = arguments[r];
                for (var n = t_(t, 'rgb'), a = n[0], _ = n[2], o = 1000, i = 40000; i - o > 0.4; ) {
                    var E = ta((e = (i + o) * 0.5));
                    E[2] / E[0] >= _ / a ? (i = e) : (o = e);
                }
                return to(e);
            };
        (u.prototype.temp =
            u.prototype.kelvin =
            u.prototype.temperature =
                function () {
                    return ti(this._rgb);
                }),
            (l.temp =
                l.kelvin =
                l.temperature =
                    function () {
                        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                        return new (Function.prototype.bind.apply(u, [null].concat(e, ['temp'])))();
                    }),
            (E.format.temp = E.format.kelvin = E.format.temperature = ta);
        var tE = i.unpack,
            tc = Math.cbrt,
            ts = Math.pow,
            tI = Math.sign,
            tu = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = tE(e, 'rgb'),
                    n = r[0],
                    a = r[1],
                    _ = r[2],
                    o = [tl(n / 255), tl(a / 255), tl(_ / 255)],
                    i = o[0],
                    E = o[1],
                    c = o[2],
                    s = tc(0.4122214708 * i + 0.5363325363 * E + 0.0514459929 * c),
                    I = tc(0.2119034982 * i + 0.6806995451 * E + 0.1073969566 * c),
                    u = tc(0.0883024619 * i + 0.2817188376 * E + 0.6299787005 * c);
                return [0.2104542553 * s + 0.793617785 * I - 0.0040720468 * u, 1.9779984951 * s - 2.428592205 * I + 0.4505937099 * u, 0.0259040371 * s + 0.7827717662 * I - 0.808675766 * u];
            };
        function tl(e) {
            var t = Math.abs(e);
            return t < 0.04045 ? e / 12.92 : (tI(e) || 1) * ts((t + 0.055) / 1.055, 2.4);
        }
        var tR = i.unpack,
            tA = Math.pow,
            tT = Math.sign,
            tN = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = (e = tR(e, 'lab'))[0],
                    n = e[1],
                    a = e[2],
                    _ = tA(r + 0.3963377774 * n + 0.2158037573 * a, 3),
                    o = tA(r - 0.1055613458 * n - 0.0638541728 * a, 3),
                    i = tA(r - 0.0894841775 * n - 1.291485548 * a, 3);
                return [255 * td(4.0767416621 * _ - 3.3077115913 * o + 0.2309699292 * i), 255 * td(-1.2684380046 * _ + 2.6097574011 * o - 0.3413193965 * i), 255 * td(-0.0041960863 * _ - 0.7034186147 * o + 1.707614701 * i), e.length > 3 ? e[3] : 1];
            };
        function td(e) {
            var t = Math.abs(e);
            return t > 0.0031308 ? (tT(e) || 1) * (1.055 * tA(t, 1 / 2.4) - 0.055) : 12.92 * e;
        }
        var tO = i.unpack,
            tp = i.type;
        (u.prototype.oklab = function () {
            return tu(this._rgb);
        }),
            (l.oklab = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(u, [null].concat(e, ['oklab'])))();
            }),
            (E.format.oklab = tN),
            E.autodetect.push({
                p: 3,
                test: function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    if ('array' === tp((e = tO(e, 'oklab'))) && 3 === e.length) return 'oklab';
                }
            });
        var tf = i.unpack,
            tL = i.unpack,
            tS = i.unpack,
            tD = i.type,
            th = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = tf(e, 'rgb'),
                    n = tu(r[0], r[1], r[2]);
                return eF(n[0], n[1], n[2]);
            };
        (u.prototype.oklch = function () {
            return th(this._rgb);
        }),
            (l.oklch = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(u, [null].concat(e, ['oklch'])))();
            }),
            (E.format.oklch = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = ez((e = tL(e, 'lch'))[0], e[1], e[2]),
                    n = tN(r[0], r[1], r[2]);
                return [n[0], n[1], n[2], e.length > 3 ? e[3] : 1];
            }),
            E.autodetect.push({
                p: 3,
                test: function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    if ('array' === tD((e = tS(e, 'oklch'))) && 3 === e.length) return 'oklch';
                }
            });
        var tC = i.type;
        u.prototype.alpha = function (e, t) {
            if ((void 0 === t && (t = !1), void 0 !== e && 'number' === tC(e))) return t ? ((this._rgb[3] = e), this) : new u([this._rgb[0], this._rgb[1], this._rgb[2], e], 'rgb');
            return this._rgb[3];
        };
        u.prototype.clipped = function () {
            return this._rgb._clipped || !1;
        };
        (u.prototype.darken = function (e) {
            void 0 === e && (e = 1);
            var t = this.lab();
            return (t[0] -= eC.Kn * e), new u(t, 'lab').alpha(this.alpha(), !0);
        }),
            (u.prototype.brighten = function (e) {
                return void 0 === e && (e = 1), this.darken(-e);
            }),
            (u.prototype.darker = u.prototype.darken),
            (u.prototype.brighter = u.prototype.brighten);
        u.prototype.get = function (e) {
            var t = e.split('.'),
                r = t[0],
                n = t[1],
                a = this[r]();
            if (!n) return a;
            var _ = r.indexOf(n) - ('ok' === r.substr(0, 2) ? 2 : 0);
            if (_ > -1) return a[_];
            throw Error('unknown channel ' + n + ' in mode ' + r);
        };
        var tg = i.type,
            tM = Math.pow;
        u.prototype.luminance = function (e) {
            if (void 0 !== e && 'number' === tg(e)) {
                if (0 === e) return new u([0, 0, 0, this._rgb[3]], 'rgb');
                if (1 === e) return new u([255, 255, 255, this._rgb[3]], 'rgb');
                var t = this.luminance(),
                    r = 20,
                    n = function (t, a) {
                        var _ = t.interpolate(a, 0.5, 'rgb'),
                            o = _.luminance();
                        return !(1e-7 > Math.abs(e - o)) && r-- ? (o > e ? n(t, _) : n(_, a)) : _;
                    },
                    a = (t > e ? n(new u([0, 0, 0]), this) : n(this, new u([255, 255, 255]))).rgb();
                return new u(a.concat([this._rgb[3]]));
            }
            return tP.apply(void 0, this._rgb.slice(0, 3));
        };
        var tP = function (e, t, r) {
                return (e = tU(e)), (t = tU(t)), 0.2126 * e + 0.7152 * t + 0.0722 * (r = tU(r));
            },
            tU = function (e) {
                return (e /= 255) <= 0.03928 ? e / 12.92 : tM((e + 0.055) / 1.055, 2.4);
            },
            tm = {},
            tG = i.type,
            ty = function (e, t, r) {
                void 0 === r && (r = 0.5);
                for (var n = [], a = arguments.length - 3; a-- > 0; ) n[a] = arguments[a + 3];
                var _ = n[0] || 'lrgb';
                if ((!tm[_] && !n.length && (_ = Object.keys(tm)[0]), !tm[_])) throw Error('interpolation mode ' + _ + ' is not defined');
                return 'object' !== tG(e) && (e = new u(e)), 'object' !== tG(t) && (t = new u(t)), tm[_](e, t, r).alpha(e.alpha() + r * (t.alpha() - e.alpha()));
            };
        u.prototype.mix = u.prototype.interpolate = function (e, t) {
            void 0 === t && (t = 0.5);
            for (var r = [], n = arguments.length - 2; n-- > 0; ) r[n] = arguments[n + 2];
            return ty.apply(void 0, [this, e, t].concat(r));
        };
        u.prototype.premultiply = function (e) {
            void 0 === e && (e = !1);
            var t = this._rgb,
                r = t[3];
            return e ? ((this._rgb = [t[0] * r, t[1] * r, t[2] * r, r]), this) : new u([t[0] * r, t[1] * r, t[2] * r, r], 'rgb');
        };
        (u.prototype.saturate = function (e) {
            void 0 === e && (e = 1);
            var t = this.lch();
            return (t[1] += eC.Kn * e), t[1] < 0 && (t[1] = 0), new u(t, 'lch').alpha(this.alpha(), !0);
        }),
            (u.prototype.desaturate = function (e) {
                return void 0 === e && (e = 1), this.saturate(-e);
            });
        var tb = i.type;
        u.prototype.set = function (e, t, r) {
            void 0 === r && (r = !1);
            var n = e.split('.'),
                a = n[0],
                _ = n[1],
                o = this[a]();
            if (!_) return o;
            var i = a.indexOf(_) - ('ok' === a.substr(0, 2) ? 2 : 0);
            if (i > -1) {
                if ('string' == tb(t))
                    switch (t.charAt(0)) {
                        case '+':
                        case '-':
                            o[i] += +t;
                            break;
                        case '*':
                            o[i] *= +t.substr(1);
                            break;
                        case '/':
                            o[i] /= +t.substr(1);
                            break;
                        default:
                            o[i] = +t;
                    }
                else if ('number' === tb(t)) o[i] = t;
                else throw Error('unsupported value for Color.set');
                var E = new u(o, a);
                return r ? ((this._rgb = E._rgb), this) : E;
            }
            throw Error('unknown channel ' + _ + ' in mode ' + a);
        };
        tm.rgb = function (e, t, r) {
            var n = e._rgb,
                a = t._rgb;
            return new u(n[0] + r * (a[0] - n[0]), n[1] + r * (a[1] - n[1]), n[2] + r * (a[2] - n[2]), 'rgb');
        };
        var tv = Math.sqrt,
            tB = Math.pow;
        tm.lrgb = function (e, t, r) {
            var n = e._rgb,
                a = n[0],
                _ = n[1],
                o = n[2],
                i = t._rgb,
                E = i[0],
                c = i[1],
                s = i[2];
            return new u(tv(tB(a, 2) * (1 - r) + tB(E, 2) * r), tv(tB(_, 2) * (1 - r) + tB(c, 2) * r), tv(tB(o, 2) * (1 - r) + tB(s, 2) * r), 'rgb');
        };
        tm.lab = function (e, t, r) {
            var n = e.lab(),
                a = t.lab();
            return new u(n[0] + r * (a[0] - n[0]), n[1] + r * (a[1] - n[1]), n[2] + r * (a[2] - n[2]), 'lab');
        };
        var tw = function (e, t, r, n) {
                var a, _, o, i, E, c, s, I, l, R, A, T, N, d;
                return 'hsl' === n ? ((o = e.hsl()), (i = t.hsl())) : 'hsv' === n ? ((o = e.hsv()), (i = t.hsv())) : 'hcg' === n ? ((o = e.hcg()), (i = t.hcg())) : 'hsi' === n ? ((o = e.hsi()), (i = t.hsi())) : 'lch' === n || 'hcl' === n ? ((n = 'hcl'), (o = e.hcl()), (i = t.hcl())) : 'oklch' === n && ((o = e.oklch().reverse()), (i = t.oklch().reverse())), ('h' === n.substr(0, 1) || 'oklch' === n) && ((E = (a = o)[0]), (s = a[1]), (l = a[2]), (c = (_ = i)[0]), (I = _[1]), (R = _[2])), isNaN(E) || isNaN(c) ? (isNaN(E) ? (isNaN(c) ? (T = Number.NaN) : ((T = c), (1 == l || 0 == l) && 'hsv' != n && (A = I))) : ((T = E), (1 == R || 0 == R) && 'hsv' != n && (A = s))) : ((d = c > E && c - E > 180 ? c - (E + 360) : c < E && E - c > 180 ? c + 360 - E : c - E), (T = E + r * d)), void 0 === A && (A = s + r * (I - s)), (N = l + r * (R - l)), 'oklch' === n ? new u([N, A, T], n) : new u([T, A, N], n);
            },
            tH = function (e, t, r) {
                return tw(e, t, r, 'lch');
            };
        (tm.lch = tH), (tm.hcl = tH);
        tm.num = function (e, t, r) {
            var n = e.num();
            return new u(n + r * (t.num() - n), 'num');
        };
        tm.hcg = function (e, t, r) {
            return tw(e, t, r, 'hcg');
        };
        tm.hsi = function (e, t, r) {
            return tw(e, t, r, 'hsi');
        };
        tm.hsl = function (e, t, r) {
            return tw(e, t, r, 'hsl');
        };
        tm.hsv = function (e, t, r) {
            return tw(e, t, r, 'hsv');
        };
        tm.oklab = function (e, t, r) {
            var n = e.oklab(),
                a = t.oklab();
            return new u(n[0] + r * (a[0] - n[0]), n[1] + r * (a[1] - n[1]), n[2] + r * (a[2] - n[2]), 'oklab');
        };
        tm.oklch = function (e, t, r) {
            return tw(e, t, r, 'oklch');
        };
        var tY = i.clip_rgb,
            tW = Math.pow,
            tK = Math.sqrt,
            tk = Math.PI,
            tV = Math.cos,
            tx = Math.sin,
            tF = Math.atan2,
            tX = function (e, t) {
                for (var r = e.length, n = [0, 0, 0, 0], a = 0; a < e.length; a++) {
                    var _ = e[a],
                        o = t[a] / r,
                        i = _._rgb;
                    (n[0] += tW(i[0], 2) * o), (n[1] += tW(i[1], 2) * o), (n[2] += tW(i[2], 2) * o), (n[3] += i[3] * o);
                }
                return (n[0] = tK(n[0])), (n[1] = tK(n[1])), (n[2] = tK(n[2])), n[3] > 0.9999999 && (n[3] = 1), new u(tY(n));
            },
            tj = i.type,
            t$ = Math.pow,
            tJ = function (e) {
                var t = 'rgb',
                    r = l('#ccc'),
                    n = 0,
                    a = [0, 1],
                    _ = [],
                    o = [0, 0],
                    i = !1,
                    E = [],
                    c = !1,
                    s = 0,
                    I = 1,
                    u = !1,
                    R = {},
                    A = !0,
                    T = 1,
                    N = function (e) {
                        if (((e = e || ['#fff', '#000']), 'string' === tj(e) && l.brewer && l.brewer[e.toLowerCase()] && (e = l.brewer[e.toLowerCase()]), 'array' === tj(e))) {
                            1 === e.length && (e = [e[0], e[0]]), (e = e.slice(0));
                            for (var t = 0; t < e.length; t++) e[t] = l(e[t]);
                            _.length = 0;
                            for (var r = 0; r < e.length; r++) _.push(r / (e.length - 1));
                        }
                        return L(), (E = e);
                    },
                    d = function (e) {
                        if (null != i) {
                            for (var t = i.length - 1, r = 0; r < t && e >= i[r]; ) r++;
                            return r - 1;
                        }
                        return 0;
                    },
                    O = function (e) {
                        return e;
                    },
                    p = function (e) {
                        return e;
                    },
                    f = function (e, n) {
                        if ((null == n && (n = !1), isNaN(e) || null === e)) return r;
                        if (n) c = e;
                        else if (i && i.length > 2) {
                            var a, c;
                            c = d(e) / (i.length - 2);
                        } else c = I !== s ? (e - s) / (I - s) : 1;
                        (c = p(c)), !n && (c = O(c)), 1 !== T && (c = t$(c, T));
                        var u = Math.floor(10000 * (c = Math.min(1, Math.max(0, (c = o[0] + c * (1 - o[0] - o[1]))))));
                        if (A && R[u]) a = R[u];
                        else {
                            if ('array' === tj(E))
                                for (var N = 0; N < _.length; N++) {
                                    var f = _[N];
                                    if (c <= f || (c >= f && N === _.length - 1)) {
                                        a = E[N];
                                        break;
                                    }
                                    if (c > f && c < _[N + 1]) {
                                        (c = (c - f) / (_[N + 1] - f)), (a = l.interpolate(E[N], E[N + 1], c, t));
                                        break;
                                    }
                                }
                            else 'function' === tj(E) && (a = E(c));
                            A && (R[u] = a);
                        }
                        return a;
                    },
                    L = function () {
                        return (R = {});
                    };
                N(e);
                var S = function (e) {
                    var t = l(f(e));
                    return c && t[c] ? t[c]() : t;
                };
                return (
                    (S.classes = function (e) {
                        if (null != e) {
                            if ('array' === tj(e)) (i = e), (a = [e[0], e[e.length - 1]]);
                            else {
                                var t = l.analyze(a);
                                i = 0 === e ? [t.min, t.max] : l.limits(t, 'e', e);
                            }
                            return S;
                        }
                        return i;
                    }),
                    (S.domain = function (e) {
                        if (!arguments.length) return a;
                        (s = e[0]), (I = e[e.length - 1]), (_ = []);
                        var t = E.length;
                        if (e.length === t && s !== I)
                            for (var r = 0, n = Array.from(e); r < n.length; r += 1) {
                                var o = n[r];
                                _.push((o - s) / (I - s));
                            }
                        else {
                            for (var i = 0; i < t; i++) _.push(i / (t - 1));
                            if (e.length > 2) {
                                var c = e.map(function (t, r) {
                                        return r / (e.length - 1);
                                    }),
                                    u = e.map(function (e) {
                                        return (e - s) / (I - s);
                                    });
                                !u.every(function (e, t) {
                                    return c[t] === e;
                                }) &&
                                    (p = function (e) {
                                        if (e <= 0 || e >= 1) return e;
                                        for (var t = 0; e >= u[t + 1]; ) t++;
                                        var r = (e - u[t]) / (u[t + 1] - u[t]);
                                        return c[t] + r * (c[t + 1] - c[t]);
                                    });
                            }
                        }
                        return (a = [s, I]), S;
                    }),
                    (S.mode = function (e) {
                        return arguments.length ? ((t = e), L(), S) : t;
                    }),
                    (S.range = function (e, t) {
                        return N(e), S;
                    }),
                    (S.out = function (e) {
                        return (c = e), S;
                    }),
                    (S.spread = function (e) {
                        return arguments.length ? ((n = e), S) : n;
                    }),
                    (S.correctLightness = function (e) {
                        return (
                            null == e && (e = !0),
                            (u = e),
                            L(),
                            (O = u
                                ? function (e) {
                                      for (var t = f(0, !0).lab()[0], r = f(1, !0).lab()[0], n = t > r, a = f(e, !0).lab()[0], _ = t + (r - t) * e, o = a - _, i = 0, E = 1, c = 20; Math.abs(o) > 0.01 && c-- > 0; ) n && (o *= -1), o < 0 ? ((i = e), (e += (E - e) * 0.5)) : ((E = e), (e += (i - e) * 0.5)), (o = (a = f(e, !0).lab()[0]) - _);
                                      return e;
                                  }
                                : function (e) {
                                      return e;
                                  }),
                            S
                        );
                    }),
                    (S.padding = function (e) {
                        return null != e ? ('number' === tj(e) && (e = [e, e]), (o = e), S) : o;
                    }),
                    (S.colors = function (t, r) {
                        arguments.length < 2 && (r = 'hex');
                        var n = [];
                        if (0 == arguments.length) n = E.slice(0);
                        else if (1 === t) n = [S(0.5)];
                        else if (t > 1) {
                            var _ = a[0],
                                o = a[1] - _;
                            n = (function (e, t, r) {
                                for (var n = [], a = e < t, _ = r ? (a ? t + 1 : t - 1) : t, o = e; a ? o < _ : o > _; a ? o++ : o--) n.push(o);
                                return n;
                            })(0, t, !1).map(function (e) {
                                return S(_ + (e / (t - 1)) * o);
                            });
                        } else {
                            e = [];
                            var c = [];
                            if (i && i.length > 2) for (var s = 1, I = i.length, u = 1 <= I; u ? s < I : s > I; u ? s++ : s--) c.push((i[s - 1] + i[s]) * 0.5);
                            else c = a;
                            n = c.map(function (e) {
                                return S(e);
                            });
                        }
                        return (
                            l[r] &&
                                (n = n.map(function (e) {
                                    return e[r]();
                                })),
                            n
                        );
                    }),
                    (S.cache = function (e) {
                        return null != e ? ((A = e), S) : A;
                    }),
                    (S.gamma = function (e) {
                        return null != e ? ((T = e), S) : T;
                    }),
                    (S.nodata = function (e) {
                        return null != e ? ((r = l(e)), S) : r;
                    }),
                    S
                );
            },
            tq = function (e) {
                for (var t = [1, 1], r = 1; r < e; r++) {
                    for (var n = [1], a = 1; a <= t.length; a++) n[a] = (t[a] || 0) + t[a - 1];
                    t = n;
                }
                return t;
            },
            tz = function (e) {
                var t, r, n, a, _, o, i, E, c, s, I;
                if (
                    2 ===
                    (e = e.map(function (e) {
                        return new u(e);
                    })).length
                )
                    (_ = (t = e.map(function (e) {
                        return e.lab();
                    }))[0]),
                        (o = t[1]),
                        (a = function (e) {
                            return new u(
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
                        (i = r[2]),
                        (a = function (e) {
                            return new u(
                                [0, 1, 2].map(function (t) {
                                    return (1 - e) * (1 - e) * _[t] + 2 * (1 - e) * e * o[t] + e * e * i[t];
                                }),
                                'lab'
                            );
                        });
                else if (4 === e.length)
                    (_ = (n = e.map(function (e) {
                        return e.lab();
                    }))[0]),
                        (o = n[1]),
                        (i = n[2]),
                        (E = n[3]),
                        (a = function (e) {
                            return new u(
                                [0, 1, 2].map(function (t) {
                                    return (1 - e) * (1 - e) * (1 - e) * _[t] + 3 * (1 - e) * (1 - e) * e * o[t] + 3 * (1 - e) * e * e * i[t] + e * e * e * E[t];
                                }),
                                'lab'
                            );
                        });
                else if (e.length >= 5)
                    (c = e.map(function (e) {
                        return e.lab();
                    })),
                        (s = tq((I = e.length - 1))),
                        (a = function (e) {
                            var t = 1 - e;
                            return new u(
                                [0, 1, 2].map(function (r) {
                                    return c.reduce(function (n, a, _) {
                                        return n + s[_] * Math.pow(t, I - _) * Math.pow(e, _) * a[r];
                                    }, 0);
                                }),
                                'lab'
                            );
                        });
                else throw RangeError('No point in running bezier with only one color.');
                return a;
            },
            tQ = function (e, t, r) {
                if (!tQ[r]) throw Error('unknown blend mode ' + r);
                return tQ[r](e, t);
            },
            tZ = function (e) {
                return function (t, r) {
                    var n = l(r).rgb(),
                        a = l(t).rgb();
                    return l.rgb(e(n, a));
                };
            },
            t0 = function (e) {
                return function (t, r) {
                    var n = [];
                    return (n[0] = e(t[0], r[0])), (n[1] = e(t[1], r[1])), (n[2] = e(t[2], r[2])), n;
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
            var t1 = i.type,
                t2 = i.clip_rgb,
                t3 = i.TWOPI,
                t6 = Math.pow,
                t5 = Math.sin,
                t4 = Math.cos,
                t8 = Math.floor,
                t7 = Math.random,
                t9 = Math.log,
                re = Math.pow,
                rt = Math.floor,
                rr = Math.abs,
                rn = function (e, t) {
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
                            return ra(r, e, t);
                        }),
                        r
                    );
                },
                ra = function (e, t, r) {
                    void 0 === t && (t = 'equal'), void 0 === r && (r = 7), 'array' == _(e) && (e = rn(e));
                    var n = e.min,
                        a = e.max,
                        o = e.values.sort(function (e, t) {
                            return e - t;
                        });
                    if (1 === r) return [n, a];
                    var i = [];
                    if (('c' === t.substr(0, 1) && (i.push(n), i.push(a)), 'e' === t.substr(0, 1))) {
                        i.push(n);
                        for (var E = 1; E < r; E++) i.push(n + (E / r) * (a - n));
                        i.push(a);
                    } else if ('l' === t.substr(0, 1)) {
                        if (n <= 0) throw Error('Logarithmic scales are only possible for values > 0');
                        var c = Math.LOG10E * t9(n),
                            s = Math.LOG10E * t9(a);
                        i.push(n);
                        for (var I = 1; I < r; I++) i.push(re(10, c + (I / r) * (s - c)));
                        i.push(a);
                    } else if ('q' === t.substr(0, 1)) {
                        i.push(n);
                        for (var u = 1; u < r; u++) {
                            var l = ((o.length - 1) * u) / r,
                                R = rt(l);
                            if (R === l) i.push(o[R]);
                            else {
                                var A = l - R;
                                i.push(o[R] * (1 - A) + o[R + 1] * A);
                            }
                        }
                        i.push(a);
                    } else if ('k' === t.substr(0, 1)) {
                        var T,
                            N = o.length,
                            d = Array(N),
                            O = Array(r),
                            p = !0,
                            f = 0,
                            L = null;
                        (L = []).push(n);
                        for (var S = 1; S < r; S++) L.push(n + (S / r) * (a - n));
                        for (L.push(a); p; ) {
                            for (var D = 0; D < r; D++) O[D] = 0;
                            for (var h = 0; h < N; h++) {
                                for (var C = o[h], g = Number.MAX_VALUE, M = void 0, P = 0; P < r; P++) {
                                    var U = rr(L[P] - C);
                                    U < g && ((g = U), (M = P)), O[M]++, (d[h] = M);
                                }
                            }
                            for (var m = Array(r), G = 0; G < r; G++) m[G] = null;
                            for (var y = 0; y < N; y++) null === m[(T = d[y])] ? (m[T] = o[y]) : (m[T] += o[y]);
                            for (var b = 0; b < r; b++) m[b] *= 1 / O[b];
                            p = !1;
                            for (var v = 0; v < r; v++)
                                if (m[v] !== L[v]) {
                                    p = !0;
                                    break;
                                }
                            (L = m), ++f > 200 && (p = !1);
                        }
                        for (var B = {}, w = 0; w < r; w++) B[w] = [];
                        for (var H = 0; H < N; H++) B[(T = d[H])].push(o[H]);
                        for (var Y = [], W = 0; W < r; W++) Y.push(B[W][0]), Y.push(B[W][B[W].length - 1]);
                        (Y = Y.sort(function (e, t) {
                            return e - t;
                        })),
                            i.push(Y[0]);
                        for (var K = 1; K < Y.length; K += 2) {
                            var k = Y[K];
                            !isNaN(k) && -1 === i.indexOf(k) && i.push(k);
                        }
                    }
                    return i;
                },
                r_ = rn,
                ro = ra,
                ri = Math.sqrt,
                rE = Math.pow,
                rc = Math.min,
                rs = Math.max,
                rI = Math.atan2,
                ru = Math.abs,
                rl = Math.cos,
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
                rO = Object.keys(rN);
            rd < rO.length;
            rd += 1
        ) {
            var rp = rO[rd];
            rN[rp.toLowerCase()] = rN[rp];
        }
        return (
            (l.average = function (e, t, r) {
                void 0 === t && (t = 'lrgb'), void 0 === r && (r = null);
                var n = e.length;
                !r &&
                    (r = Array.from(Array(n)).map(function () {
                        return 1;
                    }));
                var a =
                    n /
                    r.reduce(function (e, t) {
                        return e + t;
                    });
                if (
                    (r.forEach(function (e, t) {
                        r[t] *= a;
                    }),
                    (e = e.map(function (e) {
                        return new u(e);
                    })),
                    'lrgb' === t)
                )
                    return tX(e, r);
                for (var _ = e.shift(), o = _.get(t), i = [], E = 0, c = 0, s = 0; s < o.length; s++)
                    if (((o[s] = (o[s] || 0) * r[0]), i.push(isNaN(o[s]) ? 0 : r[0]), 'h' === t.charAt(s) && !isNaN(o[s]))) {
                        var I = (o[s] / 180) * tk;
                        (E += tV(I) * r[0]), (c += tx(I) * r[0]);
                    }
                var l = _.alpha() * r[0];
                e.forEach(function (e, n) {
                    var a = e.get(t);
                    l += e.alpha() * r[n + 1];
                    for (var _ = 0; _ < o.length; _++)
                        if (!isNaN(a[_])) {
                            if (((i[_] += r[n + 1]), 'h' === t.charAt(_))) {
                                var s = (a[_] / 180) * tk;
                                (E += tV(s) * r[n + 1]), (c += tx(s) * r[n + 1]);
                            } else o[_] += a[_] * r[n + 1];
                        }
                });
                for (var R = 0; R < o.length; R++)
                    if ('h' === t.charAt(R)) {
                        for (var A = (tF(c / i[R], E / i[R]) / tk) * 180; A < 0; ) A += 360;
                        for (; A >= 360; ) A -= 360;
                        o[R] = A;
                    } else o[R] = o[R] / i[R];
                return (l /= n), new u(o, t).alpha(l > 0.99999 ? 1 : l, !0);
            }),
            (l.bezier = function (e) {
                var t = tz(e);
                return (
                    (t.scale = function () {
                        return tJ(t);
                    }),
                    t
                );
            }),
            (l.blend = tQ),
            (l.cubehelix = function (e, t, r, n, a) {
                void 0 === e && (e = 300), void 0 === t && (t = -1.5), void 0 === r && (r = 1), void 0 === n && (n = 1), void 0 === a && (a = [0, 1]);
                var _,
                    o = 0;
                'array' === t1(a) ? (_ = a[1] - a[0]) : ((_ = 0), (a = [a, a]));
                var i = function (i) {
                    var E = t3 * ((e + 120) / 360 + t * i),
                        c = t6(a[0] + _ * i, n),
                        s = ((0 !== o ? r[0] + i * o : r) * c * (1 - c)) / 2,
                        I = t4(E),
                        u = t5(E);
                    return l(t2([255 * (c + s * (-0.14861 * I + 1.78277 * u)), 255 * (c + s * (-0.29227 * I - 0.90649 * u)), 255 * (c + 1.97294 * I * s), 1]));
                };
                return (
                    (i.start = function (t) {
                        return null == t ? e : ((e = t), i);
                    }),
                    (i.rotations = function (e) {
                        return null == e ? t : ((t = e), i);
                    }),
                    (i.gamma = function (e) {
                        return null == e ? n : ((n = e), i);
                    }),
                    (i.hue = function (e) {
                        return null == e ? r : ('array' === t1((r = e)) ? 0 == (o = r[1] - r[0]) && (r = r[1]) : (o = 0), i);
                    }),
                    (i.lightness = function (e) {
                        return null == e ? a : ('array' === t1(e) ? ((a = e), (_ = e[1] - e[0])) : ((a = [e, e]), (_ = 0)), i);
                    }),
                    (i.scale = function () {
                        return l.scale(i);
                    }),
                    i.hue(r),
                    i
                );
            }),
            (l.mix = l.interpolate = ty),
            (l.random = function () {
                for (var e = '#', t = 0; t < 6; t++) e += '0123456789abcdef'.charAt(t8(16 * t7()));
                return new u(e, 'hex');
            }),
            (l.scale = tJ),
            (l.analyze = r_),
            (l.contrast = function (e, t) {
                (e = new u(e)), (t = new u(t));
                var r = e.luminance(),
                    n = t.luminance();
                return r > n ? (r + 0.05) / (n + 0.05) : (n + 0.05) / (r + 0.05);
            }),
            (l.deltaE = function (e, t, r, n, a) {
                void 0 === r && (r = 1), void 0 === n && (n = 1), void 0 === a && (a = 1);
                var _ = function (e) {
                        return (360 * e) / (2 * rT);
                    },
                    o = function (e) {
                        return (2 * rT * e) / 360;
                    };
                (e = new u(e)), (t = new u(t));
                var i = Array.from(e.lab()),
                    E = i[0],
                    c = i[1],
                    s = i[2],
                    I = Array.from(t.lab()),
                    l = I[0],
                    R = I[1],
                    A = I[2],
                    T = (E + l) / 2,
                    N = (ri(rE(c, 2) + rE(s, 2)) + ri(rE(R, 2) + rE(A, 2))) / 2,
                    d = 0.5 * (1 - ri(rE(N, 7) / (rE(N, 7) + rE(25, 7)))),
                    O = c * (1 + d),
                    p = R * (1 + d),
                    f = ri(rE(O, 2) + rE(s, 2)),
                    L = ri(rE(p, 2) + rE(A, 2)),
                    S = (f + L) / 2,
                    D = _(rI(s, O)),
                    h = _(rI(A, p)),
                    C = D >= 0 ? D : D + 360,
                    g = h >= 0 ? h : h + 360,
                    M = ru(C - g) > 180 ? (C + g + 360) / 2 : (C + g) / 2,
                    P = 1 - 0.17 * rl(o(M - 30)) + 0.24 * rl(o(2 * M)) + 0.32 * rl(o(3 * M + 6)) - 0.2 * rl(o(4 * M - 63)),
                    U = g - C;
                (U = 180 >= ru(U) ? U : g <= C ? U + 360 : U - 360), (U = 2 * ri(f * L) * rR(o(U) / 2));
                var m = L - f,
                    G = 1 + (0.015 * rE(T - 50, 2)) / ri(20 + rE(T - 50, 2)),
                    y = 1 + 0.045 * S,
                    b = 1 + 0.015 * S * P,
                    v = 30 * rA(-rE((M - 275) / 25, 2)),
                    B = -(2 * ri(rE(S, 7) / (rE(S, 7) + rE(25, 7)))) * rR(2 * o(v));
                return rs(0, rc(100, ri(rE((l - E) / (r * G), 2) + rE(m / (n * y), 2) + rE(U / (a * b), 2) + (m / (n * y)) * B * (U / (a * b)))));
            }),
            (l.distance = function (e, t, r) {
                void 0 === r && (r = 'lab'), (e = new u(e)), (t = new u(t));
                var n = e.get(r),
                    a = t.get(r),
                    _ = 0;
                for (var o in n) {
                    var i = (n[o] || 0) - (a[o] || 0);
                    _ += i * i;
                }
                return Math.sqrt(_);
            }),
            (l.limits = ro),
            (l.valid = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                try {
                    return new (Function.prototype.bind.apply(u, [null].concat(e)))(), !0;
                } catch (e) {
                    return !1;
                }
            }),
            (l.scales = {
                cool: function () {
                    return tJ([l.hsl(180, 1, 0.9), l.hsl(250, 0.7, 0.4)]);
                },
                hot: function () {
                    return tJ(['#000', '#f00', '#ff0', '#fff']).mode('rgb');
                }
            }),
            (l.colors = e6),
            (l.brewer = rN),
            l
        );
    }),
    (e.exports = r());
