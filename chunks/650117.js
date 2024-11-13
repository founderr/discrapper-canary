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
            for (var f, _ = [], p = 0; p < t.length; p++) {
                var h = t[p];
                if ((0, a.O4)(h)) {
                    _.push({
                        type: i.literal,
                        value: h.value
                    });
                    continue;
                }
                if ((0, a.yx)(h)) {
                    'number' == typeof c &&
                        _.push({
                            type: i.literal,
                            value: r.getNumberFormat(n).format(c)
                        });
                    continue;
                }
                var m = h.value;
                if (!(u && m in u)) throw new s.HR(m, d);
                var g = u[m];
                if ((0, a.VG)(h)) {
                    (!g || 'string' == typeof g || 'number' == typeof g) && (g = 'string' == typeof g || 'number' == typeof g ? String(g) : ''),
                        _.push({
                            type: 'string' == typeof g ? i.literal : i.object,
                            value: g
                        });
                    continue;
                }
                if ((0, a.rp)(h)) {
                    var E = 'string' == typeof h.style ? l.date[h.style] : (0, a.Ii)(h.style) ? h.style.parsedOptions : void 0;
                    _.push({
                        type: i.literal,
                        value: r.getDateTimeFormat(n, E).format(g)
                    });
                    continue;
                }
                if ((0, a.pe)(h)) {
                    var E = 'string' == typeof h.style ? l.time[h.style] : (0, a.Ii)(h.style) ? h.style.parsedOptions : l.time.medium;
                    _.push({
                        type: i.literal,
                        value: r.getDateTimeFormat(n, E).format(g)
                    });
                    continue;
                }
                if ((0, a.uf)(h)) {
                    var E = 'string' == typeof h.style ? l.number[h.style] : (0, a.Wh)(h.style) ? h.style.parsedOptions : void 0;
                    E && E.scale && (g *= E.scale || 1),
                        _.push({
                            type: i.literal,
                            value: r.getNumberFormat(n, E).format(g)
                        });
                    continue;
                }
                if ((0, a.HI)(h)) {
                    var v = h.children,
                        I = h.value,
                        b = u[I];
                    if (!o(b)) throw new s.YR(I, 'function', d);
                    var S = b(
                        e(v, n, r, l, u, c).map(function (e) {
                            return e.value;
                        })
                    );
                    !Array.isArray(S) && (S = [S]),
                        _.push.apply(
                            _,
                            S.map(function (e) {
                                return {
                                    type: 'string' == typeof e ? i.literal : i.object,
                                    value: e
                                };
                            })
                        );
                }
                if ((0, a.Wi)(h)) {
                    var T = h.options[g] || h.options.other;
                    if (!T) throw new s.C8(h.value, g, Object.keys(h.options), d);
                    _.push.apply(_, e(T.value, n, r, l, u));
                    continue;
                }
                if ((0, a.Jo)(h)) {
                    var T = h.options['='.concat(g)];
                    if (!T) {
                        if (!Intl.PluralRules) throw new s.u_('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', s.jK.MISSING_INTL_API, d);
                        var y = r.getPluralRules(n, { type: h.pluralType }).select(g - (h.offset || 0));
                        T = h.options[y] || h.options.other;
                    }
                    if (!T) throw new s.C8(h.value, g, Object.keys(h.options), d);
                    _.push.apply(_, e(T.value, n, r, l, u, g - (h.offset || 0)));
                    continue;
                }
            }
            return (f = _).length < 2
                ? f
                : f.reduce(function (e, t) {
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
    a = n(739292),
    s = n(968735);
((r = i || (i = {}))[(r.literal = 0)] = 'literal'), (r[(r.object = 1)] = 'object');
function o(e) {
    return 'function' == typeof e;
}
