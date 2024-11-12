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
            for (var d, f = [], _ = 0; _ < t.length; _++) {
                var p = t[_];
                if ((0, a.O4)(p)) {
                    f.push({
                        type: i.literal,
                        value: p.value
                    });
                    continue;
                }
                if ((0, a.yx)(p)) {
                    'number' == typeof u &&
                        f.push({
                            type: i.literal,
                            value: r.getNumberFormat(n).format(u)
                        });
                    continue;
                }
                var h = p.value;
                if (!(l && h in l)) throw new s.HR(h, c);
                var m = l[h];
                if ((0, a.VG)(p)) {
                    (!m || 'string' == typeof m || 'number' == typeof m) && (m = 'string' == typeof m || 'number' == typeof m ? String(m) : ''),
                        f.push({
                            type: 'string' == typeof m ? i.literal : i.object,
                            value: m
                        });
                    continue;
                }
                if ((0, a.rp)(p)) {
                    var g = 'string' == typeof p.style ? o.date[p.style] : (0, a.Ii)(p.style) ? p.style.parsedOptions : void 0;
                    f.push({
                        type: i.literal,
                        value: r.getDateTimeFormat(n, g).format(m)
                    });
                    continue;
                }
                if ((0, a.pe)(p)) {
                    var g = 'string' == typeof p.style ? o.time[p.style] : (0, a.Ii)(p.style) ? p.style.parsedOptions : o.time.medium;
                    f.push({
                        type: i.literal,
                        value: r.getDateTimeFormat(n, g).format(m)
                    });
                    continue;
                }
                if ((0, a.uf)(p)) {
                    var g = 'string' == typeof p.style ? o.number[p.style] : (0, a.Wh)(p.style) ? p.style.parsedOptions : void 0;
                    g && g.scale && (m *= g.scale || 1),
                        f.push({
                            type: i.literal,
                            value: r.getNumberFormat(n, g).format(m)
                        });
                    continue;
                }
                if ((0, a.HI)(p)) {
                    var E = p.children,
                        v = p.value,
                        I = l[v];
                    if ('function' != typeof I) throw new s.YR(v, 'function', c);
                    var b = I(
                        e(E, n, r, o, l, u).map(function (e) {
                            return e.value;
                        })
                    );
                    !Array.isArray(b) && (b = [b]),
                        f.push.apply(
                            f,
                            b.map(function (e) {
                                return {
                                    type: 'string' == typeof e ? i.literal : i.object,
                                    value: e
                                };
                            })
                        );
                }
                if ((0, a.Wi)(p)) {
                    var S = p.options[m] || p.options.other;
                    if (!S) throw new s.C8(p.value, m, Object.keys(p.options), c);
                    f.push.apply(f, e(S.value, n, r, o, l));
                    continue;
                }
                if ((0, a.Jo)(p)) {
                    var S = p.options['='.concat(m)];
                    if (!S) {
                        if (!Intl.PluralRules) throw new s.u_('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', s.jK.MISSING_INTL_API, c);
                        var T = r.getPluralRules(n, { type: p.pluralType }).select(m - (p.offset || 0));
                        S = p.options[T] || p.options.other;
                    }
                    if (!S) throw new s.C8(p.value, m, Object.keys(p.options), c);
                    f.push.apply(f, e(S.value, n, r, o, l, m - (p.offset || 0)));
                    continue;
                }
            }
            return (d = f).length < 2
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
    a = n(739292),
    s = n(968735);
((r = i || (i = {}))[(r.literal = 0)] = 'literal'), (r[(r.object = 1)] = 'object');
