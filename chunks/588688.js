n.d(t, {
    FK: function () {
        return function e(t, n, r, l, u, c, d) {
            if (1 === t.length && (0, a.O4)(t[0]))
                return [
                    {
                        type: i.literal,
                        value: t[0].value
                    }
                ];
            for (var _, E = [], f = 0; f < t.length; f++) {
                var h = t[f];
                if ((0, a.O4)(h)) {
                    E.push({
                        type: i.literal,
                        value: h.value
                    });
                    continue;
                }
                if ((0, a.yx)(h)) {
                    'number' == typeof c &&
                        E.push({
                            type: i.literal,
                            value: r.getNumberFormat(n).format(c)
                        });
                    continue;
                }
                var p = h.value;
                if (!(u && p in u)) throw new s.HR(p, d);
                var I = u[p];
                if ((0, a.VG)(h)) {
                    (!I || 'string' == typeof I || 'number' == typeof I) && (I = 'string' == typeof I || 'number' == typeof I ? String(I) : ''),
                        E.push({
                            type: 'string' == typeof I ? i.literal : i.object,
                            value: I
                        });
                    continue;
                }
                if ((0, a.rp)(h)) {
                    var m = 'string' == typeof h.style ? l.date[h.style] : (0, a.Ii)(h.style) ? h.style.parsedOptions : void 0;
                    E.push({
                        type: i.literal,
                        value: r.getDateTimeFormat(n, m).format(I)
                    });
                    continue;
                }
                if ((0, a.pe)(h)) {
                    var m = 'string' == typeof h.style ? l.time[h.style] : (0, a.Ii)(h.style) ? h.style.parsedOptions : l.time.medium;
                    E.push({
                        type: i.literal,
                        value: r.getDateTimeFormat(n, m).format(I)
                    });
                    continue;
                }
                if ((0, a.uf)(h)) {
                    var m = 'string' == typeof h.style ? l.number[h.style] : (0, a.Wh)(h.style) ? h.style.parsedOptions : void 0;
                    m && m.scale && (I *= m.scale || 1),
                        E.push({
                            type: i.literal,
                            value: r.getNumberFormat(n, m).format(I)
                        });
                    continue;
                }
                if ((0, a.HI)(h)) {
                    var T = h.children,
                        S = h.value,
                        g = u[S];
                    if (!o(g)) throw new s.YR(S, 'function', d);
                    var A = g(
                        e(T, n, r, l, u, c).map(function (e) {
                            return e.value;
                        })
                    );
                    !Array.isArray(A) && (A = [A]),
                        E.push.apply(
                            E,
                            A.map(function (e) {
                                return {
                                    type: 'string' == typeof e ? i.literal : i.object,
                                    value: e
                                };
                            })
                        );
                }
                if ((0, a.Wi)(h)) {
                    var N = h.options[I] || h.options.other;
                    if (!N) throw new s.C8(h.value, I, Object.keys(h.options), d);
                    E.push.apply(E, e(N.value, n, r, l, u));
                    continue;
                }
                if ((0, a.Jo)(h)) {
                    var N = h.options['='.concat(I)];
                    if (!N) {
                        if (!Intl.PluralRules) throw new s.u_('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', s.jK.MISSING_INTL_API, d);
                        var R = r.getPluralRules(n, { type: h.pluralType }).select(I - (h.offset || 0));
                        N = h.options[R] || h.options.other;
                    }
                    if (!N) throw new s.C8(h.value, I, Object.keys(h.options), d);
                    E.push.apply(E, e(N.value, n, r, l, u, I - (h.offset || 0)));
                    continue;
                }
            }
            return (_ = E).length < 2
                ? _
                : _.reduce(function (e, t) {
                      var n = e[e.length - 1];
                      return n && n.type === i.literal && t.type === i.literal ? (n.value += t.value) : e.push(t), e;
                  }, []);
        };
    },
    Gt: function () {
        return o;
    },
    du: function () {
        return i;
    }
});
var r,
    i,
    a = n(322182),
    s = n(584811);
((r = i || (i = {}))[(r.literal = 0)] = 'literal'), (r[(r.object = 1)] = 'object');
function o(e) {
    return 'function' == typeof e;
}
