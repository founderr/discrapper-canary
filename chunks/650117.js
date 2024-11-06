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
                var h = t[_];
                if ((0, a.O4)(h)) {
                    f.push({
                        type: i.literal,
                        value: h.value
                    });
                    continue;
                }
                if ((0, a.yx)(h)) {
                    'number' == typeof u &&
                        f.push({
                            type: i.literal,
                            value: r.getNumberFormat(n).format(u)
                        });
                    continue;
                }
                var p = h.value;
                if (!(l && p in l)) throw new s.HR(p, c);
                var m = l[p];
                if ((0, a.VG)(h)) {
                    (!m || 'string' == typeof m || 'number' == typeof m) && (m = 'string' == typeof m || 'number' == typeof m ? String(m) : ''),
                        f.push({
                            type: 'string' == typeof m ? i.literal : i.object,
                            value: m
                        });
                    continue;
                }
                if ((0, a.rp)(h)) {
                    var g = 'string' == typeof h.style ? o.date[h.style] : (0, a.Ii)(h.style) ? h.style.parsedOptions : void 0;
                    f.push({
                        type: i.literal,
                        value: r.getDateTimeFormat(n, g).format(m)
                    });
                    continue;
                }
                if ((0, a.pe)(h)) {
                    var g = 'string' == typeof h.style ? o.time[h.style] : (0, a.Ii)(h.style) ? h.style.parsedOptions : o.time.medium;
                    f.push({
                        type: i.literal,
                        value: r.getDateTimeFormat(n, g).format(m)
                    });
                    continue;
                }
                if ((0, a.uf)(h)) {
                    var g = 'string' == typeof h.style ? o.number[h.style] : (0, a.Wh)(h.style) ? h.style.parsedOptions : void 0;
                    g && g.scale && (m *= g.scale || 1),
                        f.push({
                            type: i.literal,
                            value: r.getNumberFormat(n, g).format(m)
                        });
                    continue;
                }
                if ((0, a.HI)(h)) {
                    var E = h.children,
                        v = h.value,
                        I = l[v];
                    if ('function' != typeof I) throw new s.YR(v, 'function', c);
                    var S = I(
                        e(E, n, r, o, l, u).map(function (e) {
                            return e.value;
                        })
                    );
                    !Array.isArray(S) && (S = [S]),
                        f.push.apply(
                            f,
                            S.map(function (e) {
                                return {
                                    type: 'string' == typeof e ? i.literal : i.object,
                                    value: e
                                };
                            })
                        );
                }
                if ((0, a.Wi)(h)) {
                    var T = h.options[m] || h.options.other;
                    if (!T) throw new s.C8(h.value, m, Object.keys(h.options), c);
                    f.push.apply(f, e(T.value, n, r, o, l));
                    continue;
                }
                if ((0, a.Jo)(h)) {
                    var T = h.options['='.concat(m)];
                    if (!T) {
                        if (!Intl.PluralRules) throw new s.u_('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', s.jK.MISSING_INTL_API, c);
                        var b = r.getPluralRules(n, { type: h.pluralType }).select(m - (h.offset || 0));
                        T = h.options[b] || h.options.other;
                    }
                    if (!T) throw new s.C8(h.value, m, Object.keys(h.options), c);
                    f.push.apply(f, e(T.value, n, r, o, l, m - (h.offset || 0)));
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
