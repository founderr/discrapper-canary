r.d(n, {
    N: function () {
        return u;
    }
});
var i = r(812975),
    a = r(686942),
    s = r(713267),
    o = r(695170),
    l = r(829105);
function u(e) {
    for (var n = [], r = '', l = Object.keys(e), u = Object.keys(i.WN), d = 0; d < l.length; d++) {
        if ('tzid' !== l[d] && !!(0, a.q9)(u, l[d])) {
            var f = l[d].toUpperCase(),
                _ = e[l[d]],
                h = '';
            if (!(!(0, a.EN)(_) || ((0, a.kJ)(_) && !_.length))) {
                switch (f) {
                    case 'FREQ':
                        h = i.Ci.FREQUENCIES[e.freq];
                        break;
                    case 'WKST':
                        h = (0, a.hj)(_) ? new s.O(_).toString() : _.toString();
                        break;
                    case 'BYWEEKDAY':
                        (f = 'BYDAY'),
                            (h = (0, a.qo)(_)
                                .map(function (e) {
                                    return e instanceof s.O ? e : (0, a.kJ)(e) ? new s.O(e[0], e[1]) : new s.O(e);
                                })
                                .toString());
                        break;
                    case 'DTSTART':
                        r = c(_, e.tzid);
                        break;
                    case 'UNTIL':
                        h = (0, o.Od)(_, !e.tzid);
                        break;
                    default:
                        if ((0, a.kJ)(_)) {
                            for (var p = [], m = 0; m < _.length; m++) p[m] = String(_[m]);
                            h = p.toString();
                        } else h = String(_);
                }
                h && n.push([f, h]);
            }
        }
    }
    var g = n
            .map(function (e) {
                var n = e[0],
                    r = e[1];
                return ''.concat(n, '=').concat(r.toString());
            })
            .join(';'),
        E = '';
    return (
        '' !== g && (E = 'RRULE:'.concat(g)),
        [r, E]
            .filter(function (e) {
                return !!e;
            })
            .join('\n')
    );
}
function c(e, n) {
    return e ? 'DTSTART' + new l.M(new Date(e), n).toString() : '';
}
