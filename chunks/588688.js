n.d(t, {
    FK: function () {
        return function e(t, n, r, o, l, u, c) {
            if (1 === t.length && (0, a.O4)(t[0]))
                return [
                    {
                        type: i.literal,
                        value: t[0].value
                    }
                ];
            for (var d, _ = [], E = 0; E < t.length; E++) {
                var f = t[E];
                if ((0, a.O4)(f)) {
                    _.push({
                        type: i.literal,
                        value: f.value
                    });
                    continue;
                }
                if ((0, a.yx)(f)) {
                    'number' == typeof u &&
                        _.push({
                            type: i.literal,
                            value: r.getNumberFormat(n).format(u)
                        });
                    continue;
                }
                var h = f.value;
                if (!(l && h in l)) throw new s.HR(h, c);
                var p = l[h];
                if ((0, a.VG)(f)) {
                    (!p || 'string' == typeof p || 'number' == typeof p) && (p = 'string' == typeof p || 'number' == typeof p ? String(p) : ''),
                        _.push({
                            type: 'string' == typeof p ? i.literal : i.object,
                            value: p
                        });
                    continue;
                }
                if ((0, a.rp)(f)) {
                    var I = 'string' == typeof f.style ? o.date[f.style] : (0, a.Ii)(f.style) ? f.style.parsedOptions : void 0;
                    _.push({
                        type: i.literal,
                        value: r.getDateTimeFormat(n, I).format(p)
                    });
                    continue;
                }
                if ((0, a.pe)(f)) {
                    var I = 'string' == typeof f.style ? o.time[f.style] : (0, a.Ii)(f.style) ? f.style.parsedOptions : o.time.medium;
                    _.push({
                        type: i.literal,
                        value: r.getDateTimeFormat(n, I).format(p)
                    });
                    continue;
                }
                if ((0, a.uf)(f)) {
                    var I = 'string' == typeof f.style ? o.number[f.style] : (0, a.Wh)(f.style) ? f.style.parsedOptions : void 0;
                    I && I.scale && (p *= I.scale || 1),
                        _.push({
                            type: i.literal,
                            value: r.getNumberFormat(n, I).format(p)
                        });
                    continue;
                }
                if ((0, a.HI)(f)) {
                    var m = f.children,
                        T = f.value,
                        S = l[T];
                    if ('function' != typeof S) throw new s.YR(T, 'function', c);
                    var g = S(
                        e(m, n, r, o, l, u).map(function (e) {
                            return e.value;
                        })
                    );
                    !Array.isArray(g) && (g = [g]),
                        _.push.apply(
                            _,
                            g.map(function (e) {
                                return {
                                    type: 'string' == typeof e ? i.literal : i.object,
                                    value: e
                                };
                            })
                        );
                }
                if ((0, a.Wi)(f)) {
                    var A = f.options[p] || f.options.other;
                    if (!A) throw new s.C8(f.value, p, Object.keys(f.options), c);
                    _.push.apply(_, e(A.value, n, r, o, l));
                    continue;
                }
                if ((0, a.Jo)(f)) {
                    var A = f.options['='.concat(p)];
                    if (!A) {
                        if (!Intl.PluralRules) throw new s.u_('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', s.jK.MISSING_INTL_API, c);
                        var N = r.getPluralRules(n, { type: f.pluralType }).select(p - (f.offset || 0));
                        A = f.options[N] || f.options.other;
                    }
                    if (!A) throw new s.C8(f.value, p, Object.keys(f.options), c);
                    _.push.apply(_, e(A.value, n, r, o, l, p - (f.offset || 0)));
                    continue;
                }
            }
            return (d = _).length < 2
                ? d
                : d.reduce(function (e, t) {
                      var n = e[e.length - 1];
                      return n && n.type === i.literal && t.type === i.literal ? (n.value += t.value) : e.push(t), e;
                  }, []);
        };
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
