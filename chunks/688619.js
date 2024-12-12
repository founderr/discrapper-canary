!(function (n, r) {
    e.exports = r();
})(0, function () {
    for (
        var e = function (e, n, r) {
                return void 0 === n && (n = 0), void 0 === r && (r = 1), e < n ? n : e > r ? r : e;
            },
            n = e,
            r = function (e) {
                (e._clipped = !1), (e._unclipped = e.slice(0));
                for (var r = 0; r <= 3; r++) r < 3 ? ((e[r] < 0 || e[r] > 255) && (e._clipped = !0), (e[r] = n(e[r], 0, 255))) : 3 === r && (e[r] = n(e[r], 0, 1));
                return e;
            },
            i = {},
            a = 0,
            s = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Undefined', 'Null'];
        a < s.length;
        a += 1
    ) {
        var o = s[a];
        i['[object ' + o + ']'] = o.toLowerCase();
    }
    var l = function (e) {
            return i[Object.prototype.toString.call(e)] || 'object';
        },
        u = l,
        c = l,
        d = Math.PI,
        f = {
            clip_rgb: r,
            limit: e,
            type: l,
            unpack: function (e, n) {
                return (void 0 === n && (n = null), e.length >= 3)
                    ? Array.prototype.slice.call(e)
                    : 'object' == u(e[0]) && n
                      ? n
                            .split('')
                            .filter(function (n) {
                                return void 0 !== e[0][n];
                            })
                            .map(function (n) {
                                return e[0][n];
                            })
                      : e[0];
            },
            last: function (e) {
                if (e.length < 2) return null;
                var n = e.length - 1;
                return 'string' == c(e[n]) ? e[n].toLowerCase() : null;
            },
            TWOPI: 2 * d,
            PITHIRD: d / 3,
            DEG2RAD: d / 180,
            RAD2DEG: 180 / d
        },
        _ = {
            format: {},
            autodetect: []
        },
        h = f.last,
        p = f.clip_rgb,
        m = f.type,
        g = _,
        E = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            var r = this;
            if ('object' === m(e[0]) && e[0].constructor && e[0].constructor === this.constructor) return e[0];
            var i = h(e),
                a = !1;
            if (!i) {
                (a = !0),
                    !g.sorted &&
                        ((g.autodetect = g.autodetect.sort(function (e, n) {
                            return n.p - e.p;
                        })),
                        (g.sorted = !0));
                for (var s = 0, o = g.autodetect; s < o.length; s += 1) {
                    var l = o[s];
                    if ((i = l.test.apply(l, e))) break;
                }
            }
            if (g.format[i]) {
                var u = g.format[i].apply(null, a ? e : e.slice(0, -1));
                r._rgb = p(u);
            } else throw Error('unknown format: ' + e);
            3 === r._rgb.length && r._rgb.push(1);
        };
    E.prototype.toString = function () {
        return 'function' == m(this.hex) ? this.hex() : '[' + this._rgb.join(',') + ']';
    };
    var v = E,
        I = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            return new (Function.prototype.bind.apply(I.Color, [null].concat(e)))();
        };
    (I.Color = v), (I.version = '2.4.2');
    var T = I,
        b = f.unpack,
        y = Math.max,
        S = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            var r = b(e, 'rgb'),
                i = r[0],
                a = r[1],
                s = r[2],
                o = 1 - y((i /= 255), y((a /= 255), (s /= 255))),
                l = o < 1 ? 1 / (1 - o) : 0;
            return [(1 - i - o) * l, (1 - a - o) * l, (1 - s - o) * l, o];
        },
        A = f.unpack,
        N = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            var r = (e = A(e, 'cmyk'))[0],
                i = e[1],
                a = e[2],
                s = e[3],
                o = e.length > 4 ? e[4] : 1;
            return 1 === s ? [0, 0, 0, o] : [r >= 1 ? 0 : 255 * (1 - r) * (1 - s), i >= 1 ? 0 : 255 * (1 - i) * (1 - s), a >= 1 ? 0 : 255 * (1 - a) * (1 - s), o];
        },
        C = T,
        R = v,
        O = _,
        D = f.unpack,
        L = f.type,
        x = S;
    (R.prototype.cmyk = function () {
        return x(this._rgb);
    }),
        (C.cmyk = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            return new (Function.prototype.bind.apply(R, [null].concat(e, ['cmyk'])))();
        }),
        (O.format.cmyk = N),
        O.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
                if ('array' === L((e = D(e, 'cmyk'))) && 4 === e.length) return 'cmyk';
            }
        });
    var w = f.unpack,
        P = f.last,
        M = function (e) {
            return Math.round(100 * e) / 100;
        },
        k = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            var r = w(e, 'hsla'),
                i = P(e) || 'lsa';
            return (r[0] = M(r[0] || 0)), (r[1] = M(100 * r[1]) + '%'), (r[2] = M(100 * r[2]) + '%'), 'hsla' === i || (r.length > 3 && r[3] < 1) ? ((r[3] = r.length > 3 ? r[3] : 1), (i = 'hsla')) : (r.length = 3), i + '(' + r.join(',') + ')';
        },
        U = f.unpack,
        B = function () {
            for (var e, n, r = [], i = arguments.length; i--; ) r[i] = arguments[i];
            var a = (r = U(r, 'rgba'))[0],
                s = r[1],
                o = r[2],
                l = Math.min((a /= 255), (s /= 255), (o /= 255)),
                u = Math.max(a, s, o),
                c = (u + l) / 2;
            return (u === l ? ((e = 0), (n = Number.NaN)) : (e = c < 0.5 ? (u - l) / (u + l) : (u - l) / (2 - u - l)), a == u ? (n = (s - o) / (u - l)) : s == u ? (n = 2 + (o - a) / (u - l)) : o == u && (n = 4 + (a - s) / (u - l)), (n *= 60) < 0 && (n += 360), r.length > 3 && void 0 !== r[3]) ? [n, e, c, r[3]] : [n, e, c];
        },
        G = f.unpack,
        Z = f.last,
        F = k,
        V = B,
        j = Math.round,
        H = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            var r = G(e, 'rgba'),
                i = Z(e) || 'rgb';
            return 'hsl' == i.substr(0, 3) ? F(V(r), i) : ((r[0] = j(r[0])), (r[1] = j(r[1])), (r[2] = j(r[2])), ('rgba' === i || (r.length > 3 && r[3] < 1)) && ((r[3] = r.length > 3 ? r[3] : 1), (i = 'rgba')), i + '(' + r.slice(0, 'rgb' === i ? 3 : 4).join(',') + ')');
        },
        Y = f.unpack,
        W = Math.round,
        K = function () {
            for (var e, n, r, i, a = [], s = arguments.length; s--; ) a[s] = arguments[s];
            var o = (a = Y(a, 'hsl'))[0],
                l = a[1],
                u = a[2];
            if (0 === l) n = r = i = 255 * u;
            else {
                var c = [0, 0, 0],
                    d = [0, 0, 0],
                    f = u < 0.5 ? u * (1 + l) : u + l - u * l,
                    _ = 2 * u - f,
                    h = o / 360;
                (c[0] = h + 1 / 3), (c[1] = h), (c[2] = h - 1 / 3);
                for (var p = 0; p < 3; p++) c[p] < 0 && (c[p] += 1), c[p] > 1 && (c[p] -= 1), 6 * c[p] < 1 ? (d[p] = _ + (f - _) * 6 * c[p]) : 2 * c[p] < 1 ? (d[p] = f) : 3 * c[p] < 2 ? (d[p] = _ + (f - _) * (2 / 3 - c[p]) * 6) : (d[p] = _);
                (n = (e = [W(255 * d[0]), W(255 * d[1]), W(255 * d[2])])[0]), (r = e[1]), (i = e[2]);
            }
            return a.length > 3 ? [n, r, i, a[3]] : [n, r, i, 1];
        },
        z = K,
        q = _,
        Q = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
        X = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
        J = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
        $ = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
        ee = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
        et = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
        en = Math.round,
        er = function (e) {
            if (((e = e.toLowerCase().trim()), q.format.named))
                try {
                    return q.format.named(e);
                } catch (e) {}
            if ((n = e.match(Q))) {
                for (var n, r = n.slice(1, 4), i = 0; i < 3; i++) r[i] = +r[i];
                return (r[3] = 1), r;
            }
            if ((n = e.match(X))) {
                for (var a = n.slice(1, 5), s = 0; s < 4; s++) a[s] = +a[s];
                return a;
            }
            if ((n = e.match(J))) {
                for (var o = n.slice(1, 4), l = 0; l < 3; l++) o[l] = en(2.55 * o[l]);
                return (o[3] = 1), o;
            }
            if ((n = e.match($))) {
                for (var u = n.slice(1, 5), c = 0; c < 3; c++) u[c] = en(2.55 * u[c]);
                return (u[3] = +u[3]), u;
            }
            if ((n = e.match(ee))) {
                var d = n.slice(1, 4);
                (d[1] *= 0.01), (d[2] *= 0.01);
                var f = z(d);
                return (f[3] = 1), f;
            }
            if ((n = e.match(et))) {
                var _ = n.slice(1, 4);
                (_[1] *= 0.01), (_[2] *= 0.01);
                var h = z(_);
                return (h[3] = +n[4]), h;
            }
        };
    er.test = function (e) {
        return Q.test(e) || X.test(e) || J.test(e) || $.test(e) || ee.test(e) || et.test(e);
    };
    var ei = er,
        ea = T,
        es = v,
        eo = _,
        el = f.type,
        eu = H,
        ec = ei;
    (es.prototype.css = function (e) {
        return eu(this._rgb, e);
    }),
        (ea.css = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            return new (Function.prototype.bind.apply(es, [null].concat(e, ['css'])))();
        }),
        (eo.format.css = ec),
        eo.autodetect.push({
            p: 5,
            test: function (e) {
                for (var n = [], r = arguments.length - 1; r-- > 0; ) n[r] = arguments[r + 1];
                if (!n.length && 'string' === el(e) && ec.test(e)) return 'css';
            }
        });
    var ed = v,
        ef = T,
        e_ = _,
        eh = f.unpack;
    (e_.format.gl = function () {
        for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
        var r = eh(e, 'rgba');
        return (r[0] *= 255), (r[1] *= 255), (r[2] *= 255), r;
    }),
        (ef.gl = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            return new (Function.prototype.bind.apply(ed, [null].concat(e, ['gl'])))();
        }),
        (ed.prototype.gl = function () {
            var e = this._rgb;
            return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
        });
    var ep = f.unpack,
        em = function () {
            for (var e, n = [], r = arguments.length; r--; ) n[r] = arguments[r];
            var i = ep(n, 'rgb'),
                a = i[0],
                s = i[1],
                o = i[2],
                l = Math.min(a, s, o),
                u = Math.max(a, s, o),
                c = u - l,
                d = (100 * c) / 255,
                f = (l / (255 - c)) * 100;
            return 0 === c ? (e = Number.NaN) : (a === u && (e = (s - o) / c), s === u && (e = 2 + (o - a) / c), o === u && (e = 4 + (a - s) / c), (e *= 60) < 0 && (e += 360)), [e, d, f];
        },
        eg = f.unpack,
        eE = Math.floor,
        ev = function () {
            for (var e, n, r, i, a, s, o, l, u, c = [], d = arguments.length; d--; ) c[d] = arguments[d];
            var f = (c = eg(c, 'hcg'))[0],
                _ = c[1],
                h = c[2];
            h *= 255;
            var p = 255 * _;
            if (0 === _) o = l = u = h;
            else {
                360 === f && (f = 0), f > 360 && (f -= 360), f < 0 && (f += 360);
                var m = eE((f /= 60)),
                    g = f - m,
                    E = h * (1 - _),
                    v = E + p * (1 - g),
                    I = E + p * g,
                    T = E + p;
                switch (m) {
                    case 0:
                        (o = (e = [T, I, E])[0]), (l = e[1]), (u = e[2]);
                        break;
                    case 1:
                        (o = (n = [v, T, E])[0]), (l = n[1]), (u = n[2]);
                        break;
                    case 2:
                        (o = (r = [E, T, I])[0]), (l = r[1]), (u = r[2]);
                        break;
                    case 3:
                        (o = (i = [E, v, T])[0]), (l = i[1]), (u = i[2]);
                        break;
                    case 4:
                        (o = (a = [I, E, T])[0]), (l = a[1]), (u = a[2]);
                        break;
                    case 5:
                        (o = (s = [T, E, v])[0]), (l = s[1]), (u = s[2]);
                }
            }
            return [o, l, u, c.length > 3 ? c[3] : 1];
        },
        eI = f.unpack,
        eT = f.type,
        eb = T,
        ey = v,
        eS = _,
        eA = em;
    (ey.prototype.hcg = function () {
        return eA(this._rgb);
    }),
        (eb.hcg = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            return new (Function.prototype.bind.apply(ey, [null].concat(e, ['hcg'])))();
        }),
        (eS.format.hcg = ev),
        eS.autodetect.push({
            p: 1,
            test: function () {
                for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
                if ('array' === eT((e = eI(e, 'hcg'))) && 3 === e.length) return 'hcg';
            }
        });
    var eN = f.unpack,
        eC = f.last,
        eR = Math.round,
        eO = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            var r = eN(e, 'rgba'),
                i = r[0],
                a = r[1],
                s = r[2],
                o = r[3],
                l = eC(e) || 'auto';
            void 0 === o && (o = 1), 'auto' === l && (l = o < 1 ? 'rgba' : 'rgb'), (i = eR(i)), (a = eR(a));
            var u = '000000' + ((i << 16) | (a << 8) | (s = eR(s))).toString(16);
            u = u.substr(u.length - 6);
            var c = '0' + eR(255 * o).toString(16);
            switch (((c = c.substr(c.length - 2)), l.toLowerCase())) {
                case 'rgba':
                    return '#' + u + c;
                case 'argb':
                    return '#' + c + u;
                default:
                    return '#' + u;
            }
        },
        eD = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
        eL = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
        ex = function (e) {
            if (e.match(eD)) {
                (4 === e.length || 7 === e.length) && (e = e.substr(1)), 3 === e.length && (e = (e = e.split(''))[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
                var n = parseInt(e, 16);
                return [n >> 16, (n >> 8) & 255, 255 & n, 1];
            }
            if (e.match(eL)) {
                (5 === e.length || 9 === e.length) && (e = e.substr(1)), 4 === e.length && (e = (e = e.split(''))[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
                var r = parseInt(e, 16);
                return [(r >> 24) & 255, (r >> 16) & 255, (r >> 8) & 255, Math.round(((255 & r) / 255) * 100) / 100];
            }
            throw Error('unknown hex color: ' + e);
        },
        ew = T,
        eP = v,
        eM = f.type,
        ek = _,
        eU = eO;
    (eP.prototype.hex = function (e) {
        return eU(this._rgb, e);
    }),
        (ew.hex = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            return new (Function.prototype.bind.apply(eP, [null].concat(e, ['hex'])))();
        }),
        (ek.format.hex = ex),
        ek.autodetect.push({
            p: 4,
            test: function (e) {
                for (var n = [], r = arguments.length - 1; r-- > 0; ) n[r] = arguments[r + 1];
                if (!n.length && 'string' === eM(e) && [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0) return 'hex';
            }
        });
    var eB = f.unpack,
        eG = f.TWOPI,
        eZ = Math.min,
        eF = Math.sqrt,
        eV = Math.acos,
        ej = function () {
            for (var e, n = [], r = arguments.length; r--; ) n[r] = arguments[r];
            var i = eB(n, 'rgb'),
                a = i[0],
                s = i[1],
                o = i[2],
                l = eZ((a /= 255), (s /= 255), (o /= 255)),
                u = (a + s + o) / 3,
                c = u > 0 ? 1 - l / u : 0;
            return 0 === c ? (e = NaN) : ((e = eV((e = (a - s + (a - o)) / 2 / eF((a - s) * (a - s) + (a - o) * (s - o))))), o > s && (e = eG - e), (e /= eG)), [360 * e, c, u];
        },
        eH = f.unpack,
        eY = f.limit,
        eW = f.TWOPI,
        eK = f.PITHIRD,
        ez = Math.cos,
        eq = function () {
            for (var e, n, r, i = [], a = arguments.length; a--; ) i[a] = arguments[a];
            var s = (i = eH(i, 'hsi'))[0],
                o = i[1],
                l = i[2];
            return isNaN(s) && (s = 0), isNaN(o) && (o = 0), s > 360 && (s -= 360), s < 0 && (s += 360), (s /= 360) < 1 / 3 ? (n = 1 - ((r = (1 - o) / 3) + (e = (1 + (o * ez(eW * s)) / ez(eK - eW * s)) / 3))) : s < 2 / 3 ? ((s -= 1 / 3), (r = 1 - ((e = (1 - o) / 3) + (n = (1 + (o * ez(eW * s)) / ez(eK - eW * s)) / 3)))) : ((s -= 2 / 3), (e = 1 - ((n = (1 - o) / 3) + (r = (1 + (o * ez(eW * s)) / ez(eK - eW * s)) / 3)))), (e = eY(l * e * 3)), (n = eY(l * n * 3)), [255 * e, 255 * n, 255 * (r = eY(l * r * 3)), i.length > 3 ? i[3] : 1];
        },
        eQ = f.unpack,
        eX = f.type,
        eJ = T,
        e$ = v,
        e0 = _,
        e1 = ej;
    (e$.prototype.hsi = function () {
        return e1(this._rgb);
    }),
        (eJ.hsi = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            return new (Function.prototype.bind.apply(e$, [null].concat(e, ['hsi'])))();
        }),
        (e0.format.hsi = eq),
        e0.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
                if ('array' === eX((e = eQ(e, 'hsi'))) && 3 === e.length) return 'hsi';
            }
        });
    var e2 = f.unpack,
        e3 = f.type,
        e4 = T,
        e6 = v,
        e5 = _,
        e7 = B;
    (e6.prototype.hsl = function () {
        return e7(this._rgb);
    }),
        (e4.hsl = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            return new (Function.prototype.bind.apply(e6, [null].concat(e, ['hsl'])))();
        }),
        (e5.format.hsl = K),
        e5.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
                if ('array' === e3((e = e2(e, 'hsl'))) && 3 === e.length) return 'hsl';
            }
        });
    var e8 = f.unpack,
        e9 = Math.min,
        te = Math.max,
        tt = function () {
            for (var e, n, r, i = [], a = arguments.length; a--; ) i[a] = arguments[a];
            var s = (i = e8(i, 'rgb'))[0],
                o = i[1],
                l = i[2],
                u = e9(s, o, l),
                c = te(s, o, l),
                d = c - u;
            return (r = c / 255), 0 === c ? ((e = Number.NaN), (n = 0)) : ((n = d / c), s === c && (e = (o - l) / d), o === c && (e = 2 + (l - s) / d), l === c && (e = 4 + (s - o) / d), (e *= 60) < 0 && (e += 360)), [e, n, r];
        },
        tn = f.unpack,
        tr = Math.floor,
        ti = function () {
            for (var e, n, r, i, a, s, o, l, u, c = [], d = arguments.length; d--; ) c[d] = arguments[d];
            var f = (c = tn(c, 'hsv'))[0],
                _ = c[1],
                h = c[2];
            if (((h *= 255), 0 === _)) o = l = u = h;
            else {
                360 === f && (f = 0), f > 360 && (f -= 360), f < 0 && (f += 360);
                var p = tr((f /= 60)),
                    m = f - p,
                    g = h * (1 - _),
                    E = h * (1 - _ * m),
                    v = h * (1 - _ * (1 - m));
                switch (p) {
                    case 0:
                        (o = (e = [h, v, g])[0]), (l = e[1]), (u = e[2]);
                        break;
                    case 1:
                        (o = (n = [E, h, g])[0]), (l = n[1]), (u = n[2]);
                        break;
                    case 2:
                        (o = (r = [g, h, v])[0]), (l = r[1]), (u = r[2]);
                        break;
                    case 3:
                        (o = (i = [g, E, h])[0]), (l = i[1]), (u = i[2]);
                        break;
                    case 4:
                        (o = (a = [v, g, h])[0]), (l = a[1]), (u = a[2]);
                        break;
                    case 5:
                        (o = (s = [h, g, E])[0]), (l = s[1]), (u = s[2]);
                }
            }
            return [o, l, u, c.length > 3 ? c[3] : 1];
        },
        ta = f.unpack,
        ts = f.type,
        to = T,
        tl = v,
        tu = _,
        tc = tt;
    (tl.prototype.hsv = function () {
        return tc(this._rgb);
    }),
        (to.hsv = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            return new (Function.prototype.bind.apply(tl, [null].concat(e, ['hsv'])))();
        }),
        (tu.format.hsv = ti),
        tu.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
                if ('array' === ts((e = ta(e, 'hsv'))) && 3 === e.length) return 'hsv';
            }
        });
    var td = {
            Kn: 18,
            Xn: 0.95047,
            Yn: 1,
            Zn: 1.08883,
            t0: 0.137931034,
            t1: 0.206896552,
            t2: 0.12841855,
            t3: 0.008856452
        },
        tf = td,
        t_ = f.unpack,
        th = Math.pow,
        tp = function (e) {
            return (e /= 255) <= 0.04045 ? e / 12.92 : th((e + 0.055) / 1.055, 2.4);
        },
        tm = function (e) {
            return e > tf.t3 ? th(e, 1 / 3) : e / tf.t2 + tf.t0;
        },
        tg = function (e, n, r) {
            return (e = tp(e)), (n = tp(n)), [tm((0.4124564 * e + 0.3575761 * n + 0.1804375 * (r = tp(r))) / tf.Xn), tm((0.2126729 * e + 0.7151522 * n + 0.072175 * r) / tf.Yn), tm((0.0193339 * e + 0.119192 * n + 0.9503041 * r) / tf.Zn)];
        },
        tE = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            var r = t_(e, 'rgb'),
                i = tg(r[0], r[1], r[2]),
                a = i[0],
                s = i[1],
                o = i[2],
                l = 116 * s - 16;
            return [l < 0 ? 0 : l, 500 * (a - s), 200 * (s - o)];
        },
        tv = td,
        tI = f.unpack,
        tT = Math.pow,
        tb = function (e) {
            return 255 * (e <= 0.00304 ? 12.92 * e : 1.055 * tT(e, 1 / 2.4) - 0.055);
        },
        ty = function (e) {
            return e > tv.t1 ? e * e * e : tv.t2 * (e - tv.t0);
        },
        tS = function () {
            for (var e, n, r, i, a, s = [], o = arguments.length; o--; ) s[o] = arguments[o];
            var l = (s = tI(s, 'lab'))[0],
                u = s[1],
                c = s[2];
            return (n = (l + 16) / 116), (e = isNaN(u) ? n : n + u / 500), (r = isNaN(c) ? n : n - c / 200), (n = tv.Yn * ty(n)), (e = tv.Xn * ty(e)), (i = tb(3.2404542 * e - 1.5371385 * n - 0.4985314 * (r = tv.Zn * ty(r)))), (a = tb(-0.969266 * e + 1.8760108 * n + 0.041556 * r)), [i, a, tb(0.0556434 * e - 0.2040259 * n + 1.0572252 * r), s.length > 3 ? s[3] : 1];
        },
        tA = f.unpack,
        tN = f.type,
        tC = T,
        tR = v,
        tO = _,
        tD = tE;
    (tR.prototype.lab = function () {
        return tD(this._rgb);
    }),
        (tC.lab = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            return new (Function.prototype.bind.apply(tR, [null].concat(e, ['lab'])))();
        }),
        (tO.format.lab = tS),
        tO.autodetect.push({
            p: 2,
            test: function () {
                for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
                if ('array' === tN((e = tA(e, 'lab'))) && 3 === e.length) return 'lab';
            }
        });
    var tL = f.unpack,
        tx = f.RAD2DEG,
        tw = Math.sqrt,
        tP = Math.atan2,
        tM = Math.round,
        tk = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            var r = tL(e, 'lab'),
                i = r[0],
                a = r[1],
                s = r[2],
                o = tw(a * a + s * s),
                l = (tP(s, a) * tx + 360) % 360;
            return 0 === tM(10000 * o) && (l = Number.NaN), [i, o, l];
        },
        tU = f.unpack,
        tB = tE,
        tG = tk,
        tZ = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            var r = tU(e, 'rgb'),
                i = tB(r[0], r[1], r[2]);
            return tG(i[0], i[1], i[2]);
        },
        tF = f.unpack,
        tV = f.DEG2RAD,
        tj = Math.sin,
        tH = Math.cos,
        tY = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            var r = tF(e, 'lch'),
                i = r[0],
                a = r[1],
                s = r[2];
            return isNaN(s) && (s = 0), [i, tH((s *= tV)) * a, tj(s) * a];
        },
        tW = f.unpack,
        tK = tY,
        tz = tS,
        tq = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            var r = tK((e = tW(e, 'lch'))[0], e[1], e[2]),
                i = tz(r[0], r[1], r[2]);
            return [i[0], i[1], i[2], e.length > 3 ? e[3] : 1];
        },
        tQ = f.unpack,
        tX = tq,
        tJ = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            var r = tQ(e, 'hcl').reverse();
            return tX.apply(void 0, r);
        },
        t$ = f.unpack,
        t0 = f.type,
        t1 = T,
        t2 = v,
        t3 = _,
        t4 = tZ;
    (t2.prototype.lch = function () {
        return t4(this._rgb);
    }),
        (t2.prototype.hcl = function () {
            return t4(this._rgb).reverse();
        }),
        (t1.lch = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            return new (Function.prototype.bind.apply(t2, [null].concat(e, ['lch'])))();
        }),
        (t1.hcl = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            return new (Function.prototype.bind.apply(t2, [null].concat(e, ['hcl'])))();
        }),
        (t3.format.lch = tq),
        (t3.format.hcl = tJ),
        ['lch', 'hcl'].forEach(function (e) {
            return t3.autodetect.push({
                p: 2,
                test: function () {
                    for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];
                    if ('array' === t0((n = t$(n, e))) && 3 === n.length) return e;
                }
            });
        });
    var t6 = {
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
        t5 = v,
        t7 = _,
        t8 = f.type,
        t9 = t6,
        ne = ex,
        nt = eO;
    (t5.prototype.name = function () {
        for (var e = nt(this._rgb, 'rgb'), n = 0, r = Object.keys(t9); n < r.length; n += 1) {
            var i = r[n];
            if (t9[i] === e) return i.toLowerCase();
        }
        return e;
    }),
        (t7.format.named = function (e) {
            if (t9[(e = e.toLowerCase())]) return ne(t9[e]);
            throw Error('unknown color name: ' + e);
        }),
        t7.autodetect.push({
            p: 5,
            test: function (e) {
                for (var n = [], r = arguments.length - 1; r-- > 0; ) n[r] = arguments[r + 1];
                if (!n.length && 'string' === t8(e) && t9[e.toLowerCase()]) return 'named';
            }
        });
    var nn = f.unpack,
        nr = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            var r = nn(e, 'rgb');
            return (r[0] << 16) + (r[1] << 8) + r[2];
        },
        ni = f.type,
        na = function (e) {
            if ('number' == ni(e) && e >= 0 && e <= 16777215) return [e >> 16, (e >> 8) & 255, 255 & e, 1];
            throw Error('unknown num color: ' + e);
        },
        ns = T,
        no = v,
        nl = _,
        nu = f.type,
        nc = nr;
    (no.prototype.num = function () {
        return nc(this._rgb);
    }),
        (ns.num = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            return new (Function.prototype.bind.apply(no, [null].concat(e, ['num'])))();
        }),
        (nl.format.num = na),
        nl.autodetect.push({
            p: 5,
            test: function () {
                for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
                if (1 === e.length && 'number' === nu(e[0]) && e[0] >= 0 && e[0] <= 16777215) return 'num';
            }
        });
    var nd = T,
        nf = v,
        n_ = _,
        nh = f.unpack,
        np = f.type,
        nm = Math.round;
    (nf.prototype.rgb = function (e) {
        return (void 0 === e && (e = !0), !1 === e) ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(nm);
    }),
        (nf.prototype.rgba = function (e) {
            return (
                void 0 === e && (e = !0),
                this._rgb.slice(0, 4).map(function (n, r) {
                    return r < 3 ? (!1 === e ? n : nm(n)) : n;
                })
            );
        }),
        (nd.rgb = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            return new (Function.prototype.bind.apply(nf, [null].concat(e, ['rgb'])))();
        }),
        (n_.format.rgb = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            var r = nh(e, 'rgba');
            return void 0 === r[3] && (r[3] = 1), r;
        }),
        n_.autodetect.push({
            p: 3,
            test: function () {
                for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
                if ('array' === np((e = nh(e, 'rgba'))) && (3 === e.length || (4 === e.length && 'number' == np(e[3]) && e[3] >= 0 && e[3] <= 1))) return 'rgb';
            }
        });
    var ng = Math.log,
        nE = function (e) {
            var n,
                r,
                i,
                a = e / 100;
            return a < 66 ? ((n = 255), (r = a < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (r = a - 2) + 104.49216199393888 * ng(r)), (i = a < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (i = a - 10) + 115.67994401066147 * ng(i))) : ((n = 351.97690566805693 + 0.114206453784165 * (n = a - 55) - 40.25366309332127 * ng(n)), (r = 325.4494125711974 + 0.07943456536662342 * (r = a - 50) - 28.0852963507957 * ng(r)), (i = 255)), [n, r, i, 1];
        },
        nv = nE,
        nI = f.unpack,
        nT = Math.round,
        nb = T,
        ny = v,
        nS = _,
        nA = function () {
            for (var e, n = [], r = arguments.length; r--; ) n[r] = arguments[r];
            for (var i = nI(n, 'rgb'), a = i[0], s = i[2], o = 1000, l = 40000, u = 0.4; l - o > u; ) {
                var c = nv((e = (l + o) * 0.5));
                c[2] / c[0] >= s / a ? (l = e) : (o = e);
            }
            return nT(e);
        };
    (ny.prototype.temp =
        ny.prototype.kelvin =
        ny.prototype.temperature =
            function () {
                return nA(this._rgb);
            }),
        (nb.temp =
            nb.kelvin =
            nb.temperature =
                function () {
                    for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
                    return new (Function.prototype.bind.apply(ny, [null].concat(e, ['temp'])))();
                }),
        (nS.format.temp = nS.format.kelvin = nS.format.temperature = nE);
    var nN = f.unpack,
        nC = Math.cbrt,
        nR = Math.pow,
        nO = Math.sign,
        nD = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            var r = nN(e, 'rgb'),
                i = r[0],
                a = r[1],
                s = r[2],
                o = [nL(i / 255), nL(a / 255), nL(s / 255)],
                l = o[0],
                u = o[1],
                c = o[2],
                d = nC(0.4122214708 * l + 0.5363325363 * u + 0.0514459929 * c),
                f = nC(0.2119034982 * l + 0.6806995451 * u + 0.1073969566 * c),
                _ = nC(0.0883024619 * l + 0.2817188376 * u + 0.6299787005 * c);
            return [0.2104542553 * d + 0.793617785 * f - 0.0040720468 * _, 1.9779984951 * d - 2.428592205 * f + 0.4505937099 * _, 0.0259040371 * d + 0.7827717662 * f - 0.808675766 * _];
        };
    function nL(e) {
        var n = Math.abs(e);
        return n < 0.04045 ? e / 12.92 : (nO(e) || 1) * nR((n + 0.055) / 1.055, 2.4);
    }
    var nx = f.unpack,
        nw = Math.pow,
        nP = Math.sign,
        nM = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            var r = (e = nx(e, 'lab'))[0],
                i = e[1],
                a = e[2],
                s = nw(r + 0.3963377774 * i + 0.2158037573 * a, 3),
                o = nw(r - 0.1055613458 * i - 0.0638541728 * a, 3),
                l = nw(r - 0.0894841775 * i - 1.291485548 * a, 3);
            return [255 * nk(4.0767416621 * s - 3.3077115913 * o + 0.2309699292 * l), 255 * nk(-1.2684380046 * s + 2.6097574011 * o - 0.3413193965 * l), 255 * nk(-0.0041960863 * s - 0.7034186147 * o + 1.707614701 * l), e.length > 3 ? e[3] : 1];
        };
    function nk(e) {
        var n = Math.abs(e);
        return n > 0.0031308 ? (nP(e) || 1) * (1.055 * nw(n, 1 / 2.4) - 0.055) : 12.92 * e;
    }
    var nU = f.unpack,
        nB = f.type,
        nG = T,
        nZ = v,
        nF = _,
        nV = nD;
    (nZ.prototype.oklab = function () {
        return nV(this._rgb);
    }),
        (nG.oklab = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            return new (Function.prototype.bind.apply(nZ, [null].concat(e, ['oklab'])))();
        }),
        (nF.format.oklab = nM),
        nF.autodetect.push({
            p: 3,
            test: function () {
                for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
                if ('array' === nB((e = nU(e, 'oklab'))) && 3 === e.length) return 'oklab';
            }
        });
    var nj = f.unpack,
        nH = nD,
        nY = tk,
        nW = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            var r = nj(e, 'rgb'),
                i = nH(r[0], r[1], r[2]);
            return nY(i[0], i[1], i[2]);
        },
        nK = f.unpack,
        nz = tY,
        nq = nM,
        nQ = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            var r = nz((e = nK(e, 'lch'))[0], e[1], e[2]),
                i = nq(r[0], r[1], r[2]);
            return [i[0], i[1], i[2], e.length > 3 ? e[3] : 1];
        },
        nX = f.unpack,
        nJ = f.type,
        n$ = T,
        n0 = v,
        n1 = _,
        n2 = nW;
    (n0.prototype.oklch = function () {
        return n2(this._rgb);
    }),
        (n$.oklch = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
            return new (Function.prototype.bind.apply(n0, [null].concat(e, ['oklch'])))();
        }),
        (n1.format.oklch = nQ),
        n1.autodetect.push({
            p: 3,
            test: function () {
                for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
                if ('array' === nJ((e = nX(e, 'oklch'))) && 3 === e.length) return 'oklch';
            }
        });
    var n3 = v,
        n4 = f.type;
    (n3.prototype.alpha = function (e, n) {
        if ((void 0 === n && (n = !1), void 0 !== e && 'number' === n4(e))) return n ? ((this._rgb[3] = e), this) : new n3([this._rgb[0], this._rgb[1], this._rgb[2], e], 'rgb');
        return this._rgb[3];
    }),
        (v.prototype.clipped = function () {
            return this._rgb._clipped || !1;
        });
    var n6 = v,
        n5 = td;
    (n6.prototype.darken = function (e) {
        void 0 === e && (e = 1);
        var n = this,
            r = n.lab();
        return (r[0] -= n5.Kn * e), new n6(r, 'lab').alpha(n.alpha(), !0);
    }),
        (n6.prototype.brighten = function (e) {
            return void 0 === e && (e = 1), this.darken(-e);
        }),
        (n6.prototype.darker = n6.prototype.darken),
        (n6.prototype.brighter = n6.prototype.brighten),
        (v.prototype.get = function (e) {
            var n = e.split('.'),
                r = n[0],
                i = n[1],
                a = this[r]();
            if (!i) return a;
            var s = r.indexOf(i) - ('ok' === r.substr(0, 2) ? 2 : 0);
            if (s > -1) return a[s];
            throw Error('unknown channel ' + i + ' in mode ' + r);
        });
    var n7 = v,
        n8 = f.type,
        n9 = Math.pow,
        re = 1e-7,
        rt = 20;
    n7.prototype.luminance = function (e) {
        if (void 0 !== e && 'number' === n8(e)) {
            if (0 === e) return new n7([0, 0, 0, this._rgb[3]], 'rgb');
            if (1 === e) return new n7([255, 255, 255, this._rgb[3]], 'rgb');
            var n = this.luminance(),
                r = 'rgb',
                i = rt,
                a = function (n, s) {
                    var o = n.interpolate(s, 0.5, r),
                        l = o.luminance();
                    return !(Math.abs(e - l) < re) && i-- ? (l > e ? a(n, o) : a(o, s)) : o;
                },
                s = (n > e ? a(new n7([0, 0, 0]), this) : a(this, new n7([255, 255, 255]))).rgb();
            return new n7(s.concat([this._rgb[3]]));
        }
        return rn.apply(void 0, this._rgb.slice(0, 3));
    };
    var rn = function (e, n, r) {
            return (e = rr(e)), (n = rr(n)), 0.2126 * e + 0.7152 * n + 0.0722 * (r = rr(r));
        },
        rr = function (e) {
            return (e /= 255) <= 0.03928 ? e / 12.92 : n9((e + 0.055) / 1.055, 2.4);
        },
        ri = {},
        ra = v,
        rs = f.type,
        ro = ri,
        rl = function (e, n, r) {
            void 0 === r && (r = 0.5);
            for (var i = [], a = arguments.length - 3; a-- > 0; ) i[a] = arguments[a + 3];
            var s = i[0] || 'lrgb';
            if ((!ro[s] && !i.length && (s = Object.keys(ro)[0]), !ro[s])) throw Error('interpolation mode ' + s + ' is not defined');
            return 'object' !== rs(e) && (e = new ra(e)), 'object' !== rs(n) && (n = new ra(n)), ro[s](e, n, r).alpha(e.alpha() + r * (n.alpha() - e.alpha()));
        },
        ru = v,
        rc = rl;
    ru.prototype.mix = ru.prototype.interpolate = function (e, n) {
        void 0 === n && (n = 0.5);
        for (var r = [], i = arguments.length - 2; i-- > 0; ) r[i] = arguments[i + 2];
        return rc.apply(void 0, [this, e, n].concat(r));
    };
    var rd = v;
    rd.prototype.premultiply = function (e) {
        void 0 === e && (e = !1);
        var n = this._rgb,
            r = n[3];
        return e ? ((this._rgb = [n[0] * r, n[1] * r, n[2] * r, r]), this) : new rd([n[0] * r, n[1] * r, n[2] * r, r], 'rgb');
    };
    var rf = v,
        r_ = td;
    (rf.prototype.saturate = function (e) {
        void 0 === e && (e = 1);
        var n = this,
            r = n.lch();
        return (r[1] += r_.Kn * e), r[1] < 0 && (r[1] = 0), new rf(r, 'lch').alpha(n.alpha(), !0);
    }),
        (rf.prototype.desaturate = function (e) {
            return void 0 === e && (e = 1), this.saturate(-e);
        });
    var rh = v,
        rp = f.type;
    rh.prototype.set = function (e, n, r) {
        void 0 === r && (r = !1);
        var i = e.split('.'),
            a = i[0],
            s = i[1],
            o = this[a]();
        if (!s) return o;
        var l = a.indexOf(s) - ('ok' === a.substr(0, 2) ? 2 : 0);
        if (l > -1) {
            if ('string' == rp(n))
                switch (n.charAt(0)) {
                    case '+':
                    case '-':
                        o[l] += +n;
                        break;
                    case '*':
                        o[l] *= +n.substr(1);
                        break;
                    case '/':
                        o[l] /= +n.substr(1);
                        break;
                    default:
                        o[l] = +n;
                }
            else if ('number' === rp(n)) o[l] = n;
            else throw Error('unsupported value for Color.set');
            var u = new rh(o, a);
            return r ? ((this._rgb = u._rgb), this) : u;
        }
        throw Error('unknown channel ' + s + ' in mode ' + a);
    };
    var rm = v,
        rg = function (e, n, r) {
            var i = e._rgb,
                a = n._rgb;
            return new rm(i[0] + r * (a[0] - i[0]), i[1] + r * (a[1] - i[1]), i[2] + r * (a[2] - i[2]), 'rgb');
        };
    ri.rgb = rg;
    var rE = v,
        rv = Math.sqrt,
        rI = Math.pow,
        rT = function (e, n, r) {
            var i = e._rgb,
                a = i[0],
                s = i[1],
                o = i[2],
                l = n._rgb,
                u = l[0],
                c = l[1],
                d = l[2];
            return new rE(rv(rI(a, 2) * (1 - r) + rI(u, 2) * r), rv(rI(s, 2) * (1 - r) + rI(c, 2) * r), rv(rI(o, 2) * (1 - r) + rI(d, 2) * r), 'rgb');
        };
    ri.lrgb = rT;
    var rb = v,
        ry = function (e, n, r) {
            var i = e.lab(),
                a = n.lab();
            return new rb(i[0] + r * (a[0] - i[0]), i[1] + r * (a[1] - i[1]), i[2] + r * (a[2] - i[2]), 'lab');
        };
    ri.lab = ry;
    var rS = v,
        rA = function (e, n, r, i) {
            var a, s, o, l, u, c, d, f, _, h, p, m, g, E;
            return 'hsl' === i ? ((o = e.hsl()), (l = n.hsl())) : 'hsv' === i ? ((o = e.hsv()), (l = n.hsv())) : 'hcg' === i ? ((o = e.hcg()), (l = n.hcg())) : 'hsi' === i ? ((o = e.hsi()), (l = n.hsi())) : 'lch' === i || 'hcl' === i ? ((i = 'hcl'), (o = e.hcl()), (l = n.hcl())) : 'oklch' === i && ((o = e.oklch().reverse()), (l = n.oklch().reverse())), ('h' === i.substr(0, 1) || 'oklch' === i) && ((u = (a = o)[0]), (d = a[1]), (_ = a[2]), (c = (s = l)[0]), (f = s[1]), (h = s[2])), isNaN(u) || isNaN(c) ? (isNaN(u) ? (isNaN(c) ? (m = Number.NaN) : ((m = c), (1 == _ || 0 == _) && 'hsv' != i && (p = f))) : ((m = u), (1 == h || 0 == h) && 'hsv' != i && (p = d))) : ((E = c > u && c - u > 180 ? c - (u + 360) : c < u && u - c > 180 ? c + 360 - u : c - u), (m = u + r * E)), void 0 === p && (p = d + r * (f - d)), (g = _ + r * (h - _)), 'oklch' === i ? new rS([g, p, m], i) : new rS([m, p, g], i);
        },
        rN = rA,
        rC = function (e, n, r) {
            return rN(e, n, r, 'lch');
        };
    (ri.lch = rC), (ri.hcl = rC);
    var rR = v,
        rO = function (e, n, r) {
            var i = e.num();
            return new rR(i + r * (n.num() - i), 'num');
        };
    ri.num = rO;
    var rD = rA,
        rL = function (e, n, r) {
            return rD(e, n, r, 'hcg');
        };
    ri.hcg = rL;
    var rx = rA,
        rw = function (e, n, r) {
            return rx(e, n, r, 'hsi');
        };
    ri.hsi = rw;
    var rP = rA,
        rM = function (e, n, r) {
            return rP(e, n, r, 'hsl');
        };
    ri.hsl = rM;
    var rk = rA,
        rU = function (e, n, r) {
            return rk(e, n, r, 'hsv');
        };
    ri.hsv = rU;
    var rB = v,
        rG = function (e, n, r) {
            var i = e.oklab(),
                a = n.oklab();
            return new rB(i[0] + r * (a[0] - i[0]), i[1] + r * (a[1] - i[1]), i[2] + r * (a[2] - i[2]), 'oklab');
        };
    ri.oklab = rG;
    var rZ = rA,
        rF = function (e, n, r) {
            return rZ(e, n, r, 'oklch');
        };
    ri.oklch = rF;
    var rV = v,
        rj = f.clip_rgb,
        rH = Math.pow,
        rY = Math.sqrt,
        rW = Math.PI,
        rK = Math.cos,
        rz = Math.sin,
        rq = Math.atan2,
        rQ = function (e, n, r) {
            void 0 === n && (n = 'lrgb'), void 0 === r && (r = null);
            var i = e.length;
            !r &&
                (r = Array.from(Array(i)).map(function () {
                    return 1;
                }));
            var a =
                i /
                r.reduce(function (e, n) {
                    return e + n;
                });
            if (
                (r.forEach(function (e, n) {
                    r[n] *= a;
                }),
                (e = e.map(function (e) {
                    return new rV(e);
                })),
                'lrgb' === n)
            )
                return rX(e, r);
            for (var s = e.shift(), o = s.get(n), l = [], u = 0, c = 0, d = 0; d < o.length; d++)
                if (((o[d] = (o[d] || 0) * r[0]), l.push(isNaN(o[d]) ? 0 : r[0]), 'h' === n.charAt(d) && !isNaN(o[d]))) {
                    var f = (o[d] / 180) * rW;
                    (u += rK(f) * r[0]), (c += rz(f) * r[0]);
                }
            var _ = s.alpha() * r[0];
            e.forEach(function (e, i) {
                var a = e.get(n);
                _ += e.alpha() * r[i + 1];
                for (var s = 0; s < o.length; s++)
                    if (!isNaN(a[s])) {
                        if (((l[s] += r[i + 1]), 'h' === n.charAt(s))) {
                            var d = (a[s] / 180) * rW;
                            (u += rK(d) * r[i + 1]), (c += rz(d) * r[i + 1]);
                        } else o[s] += a[s] * r[i + 1];
                    }
            });
            for (var h = 0; h < o.length; h++)
                if ('h' === n.charAt(h)) {
                    for (var p = (rq(c / l[h], u / l[h]) / rW) * 180; p < 0; ) p += 360;
                    for (; p >= 360; ) p -= 360;
                    o[h] = p;
                } else o[h] = o[h] / l[h];
            return (_ /= i), new rV(o, n).alpha(_ > 0.99999 ? 1 : _, !0);
        },
        rX = function (e, n) {
            for (var r = e.length, i = [0, 0, 0, 0], a = 0; a < e.length; a++) {
                var s = e[a],
                    o = n[a] / r,
                    l = s._rgb;
                (i[0] += rH(l[0], 2) * o), (i[1] += rH(l[1], 2) * o), (i[2] += rH(l[2], 2) * o), (i[3] += l[3] * o);
            }
            return (i[0] = rY(i[0])), (i[1] = rY(i[1])), (i[2] = rY(i[2])), i[3] > 0.9999999 && (i[3] = 1), new rV(rj(i));
        },
        rJ = T,
        r$ = f.type,
        r0 = Math.pow,
        r1 = function (e) {
            var n = 'rgb',
                r = rJ('#ccc'),
                i = 0,
                a = [0, 1],
                s = [],
                o = [0, 0],
                l = !1,
                u = [],
                c = !1,
                d = 0,
                f = 1,
                _ = !1,
                h = {},
                p = !0,
                m = 1,
                g = function (e) {
                    if (((e = e || ['#fff', '#000']), 'string' === r$(e) && rJ.brewer && rJ.brewer[e.toLowerCase()] && (e = rJ.brewer[e.toLowerCase()]), 'array' === r$(e))) {
                        1 === e.length && (e = [e[0], e[0]]), (e = e.slice(0));
                        for (var n = 0; n < e.length; n++) e[n] = rJ(e[n]);
                        s.length = 0;
                        for (var r = 0; r < e.length; r++) s.push(r / (e.length - 1));
                    }
                    return b(), (u = e);
                },
                E = function (e) {
                    if (null != l) {
                        for (var n = l.length - 1, r = 0; r < n && e >= l[r]; ) r++;
                        return r - 1;
                    }
                    return 0;
                },
                v = function (e) {
                    return e;
                },
                I = function (e) {
                    return e;
                },
                T = function (e, i) {
                    if ((null == i && (i = !1), isNaN(e) || null === e)) return r;
                    if (i) c = e;
                    else if (l && l.length > 2) {
                        var a, c;
                        c = E(e) / (l.length - 2);
                    } else c = f !== d ? (e - d) / (f - d) : 1;
                    (c = I(c)), !i && (c = v(c)), 1 !== m && (c = r0(c, m));
                    var _ = Math.floor(10000 * (c = Math.min(1, Math.max(0, (c = o[0] + c * (1 - o[0] - o[1]))))));
                    if (p && h[_]) a = h[_];
                    else {
                        if ('array' === r$(u))
                            for (var g = 0; g < s.length; g++) {
                                var T = s[g];
                                if (c <= T || (c >= T && g === s.length - 1)) {
                                    a = u[g];
                                    break;
                                }
                                if (c > T && c < s[g + 1]) {
                                    (c = (c - T) / (s[g + 1] - T)), (a = rJ.interpolate(u[g], u[g + 1], c, n));
                                    break;
                                }
                            }
                        else 'function' === r$(u) && (a = u(c));
                        p && (h[_] = a);
                    }
                    return a;
                },
                b = function () {
                    return (h = {});
                };
            g(e);
            var y = function (e) {
                var n = rJ(T(e));
                return c && n[c] ? n[c]() : n;
            };
            return (
                (y.classes = function (e) {
                    if (null != e) {
                        if ('array' === r$(e)) (l = e), (a = [e[0], e[e.length - 1]]);
                        else {
                            var n = rJ.analyze(a);
                            l = 0 === e ? [n.min, n.max] : rJ.limits(n, 'e', e);
                        }
                        return y;
                    }
                    return l;
                }),
                (y.domain = function (e) {
                    if (!arguments.length) return a;
                    (d = e[0]), (f = e[e.length - 1]), (s = []);
                    var n = u.length;
                    if (e.length === n && d !== f)
                        for (var r = 0, i = Array.from(e); r < i.length; r += 1) {
                            var o = i[r];
                            s.push((o - d) / (f - d));
                        }
                    else {
                        for (var l = 0; l < n; l++) s.push(l / (n - 1));
                        if (e.length > 2) {
                            var c = e.map(function (n, r) {
                                    return r / (e.length - 1);
                                }),
                                _ = e.map(function (e) {
                                    return (e - d) / (f - d);
                                });
                            !_.every(function (e, n) {
                                return c[n] === e;
                            }) &&
                                (I = function (e) {
                                    if (e <= 0 || e >= 1) return e;
                                    for (var n = 0; e >= _[n + 1]; ) n++;
                                    var r = (e - _[n]) / (_[n + 1] - _[n]);
                                    return c[n] + r * (c[n + 1] - c[n]);
                                });
                        }
                    }
                    return (a = [d, f]), y;
                }),
                (y.mode = function (e) {
                    return arguments.length ? ((n = e), b(), y) : n;
                }),
                (y.range = function (e, n) {
                    return g(e), y;
                }),
                (y.out = function (e) {
                    return (c = e), y;
                }),
                (y.spread = function (e) {
                    return arguments.length ? ((i = e), y) : i;
                }),
                (y.correctLightness = function (e) {
                    return (
                        null == e && (e = !0),
                        (_ = e),
                        b(),
                        (v = _
                            ? function (e) {
                                  for (var n = T(0, !0).lab()[0], r = T(1, !0).lab()[0], i = n > r, a = T(e, !0).lab()[0], s = n + (r - n) * e, o = a - s, l = 0, u = 1, c = 20; Math.abs(o) > 0.01 && c-- > 0; )
                                      !(function () {
                                          i && (o *= -1), o < 0 ? ((l = e), (e += (u - e) * 0.5)) : ((u = e), (e += (l - e) * 0.5)), (o = (a = T(e, !0).lab()[0]) - s);
                                      })();
                                  return e;
                              }
                            : function (e) {
                                  return e;
                              }),
                        y
                    );
                }),
                (y.padding = function (e) {
                    return null != e ? ('number' === r$(e) && (e = [e, e]), (o = e), y) : o;
                }),
                (y.colors = function (n, r) {
                    arguments.length < 2 && (r = 'hex');
                    var i = [];
                    if (0 == arguments.length) i = u.slice(0);
                    else if (1 === n) i = [y(0.5)];
                    else if (n > 1) {
                        var s = a[0],
                            o = a[1] - s;
                        i = r2(0, n, !1).map(function (e) {
                            return y(s + (e / (n - 1)) * o);
                        });
                    } else {
                        e = [];
                        var c = [];
                        if (l && l.length > 2) for (var d = 1, f = l.length, _ = 1 <= f; _ ? d < f : d > f; _ ? d++ : d--) c.push((l[d - 1] + l[d]) * 0.5);
                        else c = a;
                        i = c.map(function (e) {
                            return y(e);
                        });
                    }
                    return (
                        rJ[r] &&
                            (i = i.map(function (e) {
                                return e[r]();
                            })),
                        i
                    );
                }),
                (y.cache = function (e) {
                    return null != e ? ((p = e), y) : p;
                }),
                (y.gamma = function (e) {
                    return null != e ? ((m = e), y) : m;
                }),
                (y.nodata = function (e) {
                    return null != e ? ((r = rJ(e)), y) : r;
                }),
                y
            );
        };
    function r2(e, n, r) {
        for (var i = [], a = e < n, s = r ? (a ? n + 1 : n - 1) : n, o = e; a ? o < s : o > s; a ? o++ : o--) i.push(o);
        return i;
    }
    var r3 = v,
        r4 = r1,
        r6 = function (e) {
            for (var n = [1, 1], r = 1; r < e; r++) {
                for (var i = [1], a = 1; a <= n.length; a++) i[a] = (n[a] || 0) + n[a - 1];
                n = i;
            }
            return n;
        },
        r5 = function (e) {
            var n, r, i, a, s, o, l, u, c, d, f;
            if (
                2 ===
                (e = e.map(function (e) {
                    return new r3(e);
                })).length
            )
                (s = (n = e.map(function (e) {
                    return e.lab();
                }))[0]),
                    (o = n[1]),
                    (a = function (e) {
                        return new r3(
                            [0, 1, 2].map(function (n) {
                                return s[n] + e * (o[n] - s[n]);
                            }),
                            'lab'
                        );
                    });
            else if (3 === e.length)
                (s = (r = e.map(function (e) {
                    return e.lab();
                }))[0]),
                    (o = r[1]),
                    (l = r[2]),
                    (a = function (e) {
                        return new r3(
                            [0, 1, 2].map(function (n) {
                                return (1 - e) * (1 - e) * s[n] + 2 * (1 - e) * e * o[n] + e * e * l[n];
                            }),
                            'lab'
                        );
                    });
            else if (4 === e.length)
                (s = (i = e.map(function (e) {
                    return e.lab();
                }))[0]),
                    (o = i[1]),
                    (l = i[2]),
                    (u = i[3]),
                    (a = function (e) {
                        return new r3(
                            [0, 1, 2].map(function (n) {
                                return (1 - e) * (1 - e) * (1 - e) * s[n] + 3 * (1 - e) * (1 - e) * e * o[n] + 3 * (1 - e) * e * e * l[n] + e * e * e * u[n];
                            }),
                            'lab'
                        );
                    });
            else if (e.length >= 5)
                (c = e.map(function (e) {
                    return e.lab();
                })),
                    (d = r6((f = e.length - 1))),
                    (a = function (e) {
                        var n = 1 - e;
                        return new r3(
                            [0, 1, 2].map(function (r) {
                                return c.reduce(function (i, a, s) {
                                    return i + d[s] * Math.pow(n, f - s) * Math.pow(e, s) * a[r];
                                }, 0);
                            }),
                            'lab'
                        );
                    });
            else throw RangeError('No point in running bezier with only one color.');
            return a;
        },
        r7 = function (e) {
            var n = r5(e);
            return (
                (n.scale = function () {
                    return r4(n);
                }),
                n
            );
        },
        r8 = T,
        r9 = function (e, n, r) {
            if (!r9[r]) throw Error('unknown blend mode ' + r);
            return r9[r](e, n);
        },
        ie = function (e) {
            return function (n, r) {
                var i = r8(r).rgb(),
                    a = r8(n).rgb();
                return r8.rgb(e(i, a));
            };
        },
        it = function (e) {
            return function (n, r) {
                var i = [];
                return (i[0] = e(n[0], r[0])), (i[1] = e(n[1], r[1])), (i[2] = e(n[2], r[2])), i;
            };
        },
        ir = function (e) {
            return e;
        },
        ii = function (e, n) {
            return (e * n) / 255;
        },
        ia = function (e, n) {
            return e > n ? n : e;
        },
        is = function (e, n) {
            return e > n ? e : n;
        },
        io = function (e, n) {
            return 255 * (1 - (1 - e / 255) * (1 - n / 255));
        },
        il = function (e, n) {
            return n < 128 ? (2 * e * n) / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - n / 255));
        },
        iu = function (e, n) {
            return 255 * (1 - (1 - n / 255) / (e / 255));
        },
        ic = function (e, n) {
            return 255 === e ? 255 : (e = ((n / 255) * 255) / (1 - e / 255)) > 255 ? 255 : e;
        };
    (r9.normal = ie(it(ir))), (r9.multiply = ie(it(ii))), (r9.screen = ie(it(io))), (r9.overlay = ie(it(il))), (r9.darken = ie(it(ia))), (r9.lighten = ie(it(is))), (r9.dodge = ie(it(ic))), (r9.burn = ie(it(iu)));
    for (
        var id = r9,
            i_ = f.type,
            ih = f.clip_rgb,
            ip = f.TWOPI,
            im = Math.pow,
            ig = Math.sin,
            iE = Math.cos,
            iv = T,
            iI = function (e, n, r, i, a) {
                void 0 === e && (e = 300), void 0 === n && (n = -1.5), void 0 === r && (r = 1), void 0 === i && (i = 1), void 0 === a && (a = [0, 1]);
                var s,
                    o = 0;
                'array' === i_(a) ? (s = a[1] - a[0]) : ((s = 0), (a = [a, a]));
                var l = function (l) {
                    var u = ip * ((e + 120) / 360 + n * l),
                        c = im(a[0] + s * l, i),
                        d = ((0 !== o ? r[0] + l * o : r) * c * (1 - c)) / 2,
                        f = iE(u),
                        _ = ig(u);
                    return iv(ih([255 * (c + d * (-0.14861 * f + 1.78277 * _)), 255 * (c + d * (-0.29227 * f - 0.90649 * _)), 255 * (c + 1.97294 * f * d), 1]));
                };
                return (
                    (l.start = function (n) {
                        return null == n ? e : ((e = n), l);
                    }),
                    (l.rotations = function (e) {
                        return null == e ? n : ((n = e), l);
                    }),
                    (l.gamma = function (e) {
                        return null == e ? i : ((i = e), l);
                    }),
                    (l.hue = function (e) {
                        return null == e ? r : ('array' === i_((r = e)) ? 0 == (o = r[1] - r[0]) && (r = r[1]) : (o = 0), l);
                    }),
                    (l.lightness = function (e) {
                        return null == e ? a : ('array' === i_(e) ? ((a = e), (s = e[1] - e[0])) : ((a = [e, e]), (s = 0)), l);
                    }),
                    (l.scale = function () {
                        return iv.scale(l);
                    }),
                    l.hue(r),
                    l
                );
            },
            iT = v,
            ib = '0123456789abcdef',
            iy = Math.floor,
            iS = Math.random,
            iA = function () {
                for (var e = '#', n = 0; n < 6; n++) e += ib.charAt(iy(16 * iS()));
                return new iT(e, 'hex');
            },
            iN = l,
            iC = Math.log,
            iR = Math.pow,
            iO = Math.floor,
            iD = Math.abs,
            iL = function (e, n) {
                void 0 === n && (n = null);
                var r = {
                    min: Number.MAX_VALUE,
                    max: -1 * Number.MAX_VALUE,
                    sum: 0,
                    values: [],
                    count: 0
                };
                return (
                    'object' === iN(e) && (e = Object.values(e)),
                    e.forEach(function (e) {
                        n && 'object' === iN(e) && (e = e[n]), null != e && !isNaN(e) && (r.values.push(e), (r.sum += e), e < r.min && (r.min = e), e > r.max && (r.max = e), (r.count += 1));
                    }),
                    (r.domain = [r.min, r.max]),
                    (r.limits = function (e, n) {
                        return ix(r, e, n);
                    }),
                    r
                );
            },
            ix = function (e, n, r) {
                void 0 === n && (n = 'equal'), void 0 === r && (r = 7), 'array' == iN(e) && (e = iL(e));
                var i = e.min,
                    a = e.max,
                    s = e.values.sort(function (e, n) {
                        return e - n;
                    });
                if (1 === r) return [i, a];
                var o = [];
                if (('c' === n.substr(0, 1) && (o.push(i), o.push(a)), 'e' === n.substr(0, 1))) {
                    o.push(i);
                    for (var l = 1; l < r; l++) o.push(i + (l / r) * (a - i));
                    o.push(a);
                } else if ('l' === n.substr(0, 1)) {
                    if (i <= 0) throw Error('Logarithmic scales are only possible for values > 0');
                    var u = Math.LOG10E * iC(i),
                        c = Math.LOG10E * iC(a);
                    o.push(i);
                    for (var d = 1; d < r; d++) o.push(iR(10, u + (d / r) * (c - u)));
                    o.push(a);
                } else if ('q' === n.substr(0, 1)) {
                    o.push(i);
                    for (var f = 1; f < r; f++) {
                        var _ = ((s.length - 1) * f) / r,
                            h = iO(_);
                        if (h === _) o.push(s[h]);
                        else {
                            var p = _ - h;
                            o.push(s[h] * (1 - p) + s[h + 1] * p);
                        }
                    }
                    o.push(a);
                } else if ('k' === n.substr(0, 1)) {
                    var m,
                        g = s.length,
                        E = Array(g),
                        v = Array(r),
                        I = !0,
                        T = 0,
                        b = null;
                    (b = []).push(i);
                    for (var y = 1; y < r; y++) b.push(i + (y / r) * (a - i));
                    for (b.push(a); I; ) {
                        for (var S = 0; S < r; S++) v[S] = 0;
                        for (var A = 0; A < g; A++) {
                            for (var N = s[A], C = Number.MAX_VALUE, R = void 0, O = 0; O < r; O++) {
                                var D = iD(b[O] - N);
                                D < C && ((C = D), (R = O)), v[R]++, (E[A] = R);
                            }
                        }
                        for (var L = Array(r), x = 0; x < r; x++) L[x] = null;
                        for (var w = 0; w < g; w++) null === L[(m = E[w])] ? (L[m] = s[w]) : (L[m] += s[w]);
                        for (var P = 0; P < r; P++) L[P] *= 1 / v[P];
                        I = !1;
                        for (var M = 0; M < r; M++)
                            if (L[M] !== b[M]) {
                                I = !0;
                                break;
                            }
                        (b = L), ++T > 200 && (I = !1);
                    }
                    for (var k = {}, U = 0; U < r; U++) k[U] = [];
                    for (var B = 0; B < g; B++) k[(m = E[B])].push(s[B]);
                    for (var G = [], Z = 0; Z < r; Z++) G.push(k[Z][0]), G.push(k[Z][k[Z].length - 1]);
                    (G = G.sort(function (e, n) {
                        return e - n;
                    })),
                        o.push(G[0]);
                    for (var F = 1; F < G.length; F += 2) {
                        var V = G[F];
                        !isNaN(V) && -1 === o.indexOf(V) && o.push(V);
                    }
                }
                return o;
            },
            iw = iL,
            iP = ix,
            iM = v,
            ik = function (e, n) {
                (e = new iM(e)), (n = new iM(n));
                var r = e.luminance(),
                    i = n.luminance();
                return r > i ? (r + 0.05) / (i + 0.05) : (i + 0.05) / (r + 0.05);
            },
            iU = v,
            iB = Math.sqrt,
            iG = Math.pow,
            iZ = Math.min,
            iF = Math.max,
            iV = Math.atan2,
            ij = Math.abs,
            iH = Math.cos,
            iY = Math.sin,
            iW = Math.exp,
            iK = Math.PI,
            iz = function (e, n, r, i, a) {
                void 0 === r && (r = 1), void 0 === i && (i = 1), void 0 === a && (a = 1);
                var s = function (e) {
                        return (360 * e) / (2 * iK);
                    },
                    o = function (e) {
                        return (2 * iK * e) / 360;
                    };
                (e = new iU(e)), (n = new iU(n));
                var l = Array.from(e.lab()),
                    u = l[0],
                    c = l[1],
                    d = l[2],
                    f = Array.from(n.lab()),
                    _ = f[0],
                    h = f[1],
                    p = f[2],
                    m = (u + _) / 2,
                    g = (iB(iG(c, 2) + iG(d, 2)) + iB(iG(h, 2) + iG(p, 2))) / 2,
                    E = 0.5 * (1 - iB(iG(g, 7) / (iG(g, 7) + iG(25, 7)))),
                    v = c * (1 + E),
                    I = h * (1 + E),
                    T = iB(iG(v, 2) + iG(d, 2)),
                    b = iB(iG(I, 2) + iG(p, 2)),
                    y = (T + b) / 2,
                    S = s(iV(d, v)),
                    A = s(iV(p, I)),
                    N = S >= 0 ? S : S + 360,
                    C = A >= 0 ? A : A + 360,
                    R = ij(N - C) > 180 ? (N + C + 360) / 2 : (N + C) / 2,
                    O = 1 - 0.17 * iH(o(R - 30)) + 0.24 * iH(o(2 * R)) + 0.32 * iH(o(3 * R + 6)) - 0.2 * iH(o(4 * R - 63)),
                    D = C - N;
                (D = 180 >= ij(D) ? D : C <= N ? D + 360 : D - 360), (D = 2 * iB(T * b) * iY(o(D) / 2));
                var L = _ - u,
                    x = b - T,
                    w = 1 + (0.015 * iG(m - 50, 2)) / iB(20 + iG(m - 50, 2)),
                    P = 1 + 0.045 * y,
                    M = 1 + 0.015 * y * O,
                    k = 30 * iW(-iG((R - 275) / 25, 2)),
                    U = -(2 * iB(iG(y, 7) / (iG(y, 7) + iG(25, 7)))) * iY(2 * o(k));
                return iF(0, iZ(100, iB(iG(L / (r * w), 2) + iG(x / (i * P), 2) + iG(D / (a * M), 2) + (x / (i * P)) * U * (D / (a * M)))));
            },
            iq = v,
            iQ = function (e, n, r) {
                void 0 === r && (r = 'lab'), (e = new iq(e)), (n = new iq(n));
                var i = e.get(r),
                    a = n.get(r),
                    s = 0;
                for (var o in i) {
                    var l = (i[o] || 0) - (a[o] || 0);
                    s += l * l;
                }
                return Math.sqrt(s);
            },
            iX = v,
            iJ = function () {
                for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
                try {
                    return new (Function.prototype.bind.apply(iX, [null].concat(e)))(), !0;
                } catch (e) {
                    return !1;
                }
            },
            i$ = T,
            i0 = r1,
            i1 = {
                cool: function () {
                    return i0([i$.hsl(180, 1, 0.9), i$.hsl(250, 0.7, 0.4)]);
                },
                hot: function () {
                    return i0(['#000', '#f00', '#ff0', '#fff']).mode('rgb');
                }
            },
            i2 = {
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
            i3 = 0,
            i4 = Object.keys(i2);
        i3 < i4.length;
        i3 += 1
    ) {
        var i6 = i4[i3];
        i2[i6.toLowerCase()] = i2[i6];
    }
    var i5 = i2,
        i7 = T;
    return (i7.average = rQ), (i7.bezier = r7), (i7.blend = id), (i7.cubehelix = iI), (i7.mix = i7.interpolate = rl), (i7.random = iA), (i7.scale = r1), (i7.analyze = iw), (i7.contrast = ik), (i7.deltaE = iz), (i7.distance = iQ), (i7.limits = iP), (i7.valid = iJ), (i7.scales = i1), (i7.colors = t6), (i7.brewer = i5), i7;
});
