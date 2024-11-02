n.d(t, {
    N: function () {
        return l;
    }
});
var r = n(812975),
    i = n(686942),
    a = n(713267),
    s = n(695170),
    o = n(829105);
function l(e) {
    for (var t = [], n = '', l = Object.keys(e), u = Object.keys(r.WN), c = 0; c < l.length; c++) {
        if ('tzid' !== l[c] && !!(0, i.q9)(u, l[c])) {
            var d = l[c].toUpperCase(),
                f = e[l[c]],
                _ = '';
            if (!(!(0, i.EN)(f) || ((0, i.kJ)(f) && !f.length))) {
                switch (d) {
                    case 'FREQ':
                        _ = r.Ci.FREQUENCIES[e.freq];
                        break;
                    case 'WKST':
                        _ = (0, i.hj)(f) ? new a.O(f).toString() : f.toString();
                        break;
                    case 'BYWEEKDAY':
                        (d = 'BYDAY'),
                            (_ = (0, i.qo)(f)
                                .map(function (e) {
                                    return e instanceof a.O ? e : (0, i.kJ)(e) ? new a.O(e[0], e[1]) : new a.O(e);
                                })
                                .toString());
                        break;
                    case 'DTSTART':
                        n = (function (e, t) {
                            return e ? 'DTSTART' + new o.M(new Date(e), t).toString() : '';
                        })(f, e.tzid);
                        break;
                    case 'UNTIL':
                        _ = (0, s.Od)(f, !e.tzid);
                        break;
                    default:
                        if ((0, i.kJ)(f)) {
                            for (var h = [], p = 0; p < f.length; p++) h[p] = String(f[p]);
                            _ = h.toString();
                        } else _ = String(f);
                }
                _ && t.push([d, _]);
            }
        }
    }
    var m = t
            .map(function (e) {
                var t = e[0],
                    n = e[1];
                return ''.concat(t, '=').concat(n.toString());
            })
            .join(';'),
        g = '';
    return (
        '' !== m && (g = 'RRULE:'.concat(m)),
        [n, g]
            .filter(function (e) {
                return !!e;
            })
            .join('\n')
    );
}
