r.d(n, {
    FK: function () {
        return u;
    },
    Gt: function () {
        return l;
    },
    du: function () {
        return i;
    }
});
var i,
    a = r(739292),
    s = r(968735);
function o(e) {
    return e.length < 2
        ? e
        : e.reduce(function (e, n) {
              var r = e[e.length - 1];
              return r && r.type === i.literal && n.type === i.literal ? (r.value += n.value) : e.push(n), e;
          }, []);
}
function l(e) {
    return 'function' == typeof e;
}
function u(e, n, r, c, d, f, _) {
    if (1 === e.length && (0, a.O4)(e[0]))
        return [
            {
                type: i.literal,
                value: e[0].value
            }
        ];
    for (var h = [], p = 0, m = e; p < m.length; p++) {
        var g = m[p];
        if ((0, a.O4)(g)) {
            h.push({
                type: i.literal,
                value: g.value
            });
            continue;
        }
        if ((0, a.yx)(g)) {
            'number' == typeof f &&
                h.push({
                    type: i.literal,
                    value: r.getNumberFormat(n).format(f)
                });
            continue;
        }
        var E = g.value;
        if (!(d && E in d)) throw new s.HR(E, _);
        var v = d[E];
        if ((0, a.VG)(g)) {
            (!v || 'string' == typeof v || 'number' == typeof v) && (v = 'string' == typeof v || 'number' == typeof v ? String(v) : ''),
                h.push({
                    type: 'string' == typeof v ? i.literal : i.object,
                    value: v
                });
            continue;
        }
        if ((0, a.rp)(g)) {
            var I = 'string' == typeof g.style ? c.date[g.style] : (0, a.Ii)(g.style) ? g.style.parsedOptions : void 0;
            h.push({
                type: i.literal,
                value: r.getDateTimeFormat(n, I).format(v)
            });
            continue;
        }
        if ((0, a.pe)(g)) {
            var I = 'string' == typeof g.style ? c.time[g.style] : (0, a.Ii)(g.style) ? g.style.parsedOptions : c.time.medium;
            h.push({
                type: i.literal,
                value: r.getDateTimeFormat(n, I).format(v)
            });
            continue;
        }
        if ((0, a.uf)(g)) {
            var I = 'string' == typeof g.style ? c.number[g.style] : (0, a.Wh)(g.style) ? g.style.parsedOptions : void 0;
            I && I.scale && (v *= I.scale || 1),
                h.push({
                    type: i.literal,
                    value: r.getNumberFormat(n, I).format(v)
                });
            continue;
        }
        if ((0, a.HI)(g)) {
            var T = g.children,
                b = g.value,
                y = d[b];
            if (!l(y)) throw new s.YR(b, 'function', _);
            var S = y(
                u(T, n, r, c, d, f).map(function (e) {
                    return e.value;
                })
            );
            !Array.isArray(S) && (S = [S]),
                h.push.apply(
                    h,
                    S.map(function (e) {
                        return {
                            type: 'string' == typeof e ? i.literal : i.object,
                            value: e
                        };
                    })
                );
        }
        if ((0, a.Wi)(g)) {
            var A = g.options[v] || g.options.other;
            if (!A) throw new s.C8(g.value, v, Object.keys(g.options), _);
            h.push.apply(h, u(A.value, n, r, c, d));
            continue;
        }
        if ((0, a.Jo)(g)) {
            var A = g.options['='.concat(v)];
            if (!A) {
                if (!Intl.PluralRules) throw new s.u_('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', s.jK.MISSING_INTL_API, _);
                var N = r.getPluralRules(n, { type: g.pluralType }).select(v - (g.offset || 0));
                A = g.options[N] || g.options.other;
            }
            if (!A) throw new s.C8(g.value, v, Object.keys(g.options), _);
            h.push.apply(h, u(A.value, n, r, c, d, v - (g.offset || 0)));
            continue;
        }
    }
    return o(h);
}
!(function (e) {
    (e[(e.literal = 0)] = 'literal'), (e[(e.object = 1)] = 'object');
})(i || (i = {}));
