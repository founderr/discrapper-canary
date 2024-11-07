n.d(t, {
    Z: function () {
        return l;
    },
    a: function () {
        return r;
    }
}),
    n(411104);
var r,
    i,
    a = n(774078),
    s = n(55935),
    o = n(388032);
function l(e, t) {
    let n;
    switch (t) {
        case 0:
            n = {
                days: o.t['/wnvqK'],
                hours: o.t.Jsq0XF,
                minutes: o.t['SBd+Bg']
            };
            break;
        case 1:
            n = {
                days: o.t.UD5nn5,
                hours: o.t.Hg8FeX,
                minutes: o.t.XSbQZW
            };
            break;
        case 2:
            n = {
                days: o.t.rLqNaW,
                hours: o.t.d1LvCA,
                minutes: o.t.Z2LX7O
            };
            break;
        case 3:
            n = {
                days: o.t.fYmir6,
                hours: o.t['C3RO+v'],
                minutes: o.t.r77oHR
            };
            break;
        default:
            throw Error('Unknown messageType ('.concat(t, ') when rendering time left'));
    }
    let r = (0, a.Z)(e.toDate(), 60000);
    return (0, s.QX)(r, n);
}
((i = r || (r = {}))[(i.SHORT_TIME_LEFT = 0)] = 'SHORT_TIME_LEFT'), (i[(i.LONG_TIME_LEFT = 1)] = 'LONG_TIME_LEFT'), (i[(i.ENDS_IN = 2)] = 'ENDS_IN'), (i[(i.SHORT_TIME = 3)] = 'SHORT_TIME');
