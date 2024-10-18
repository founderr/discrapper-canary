n.d(t, {
    Z: function () {
        return a;
    },
    a: function () {
        return s;
    }
}),
    n(411104);
var s,
    i,
    r = n(774078),
    l = n(55935),
    o = n(689938);
function a(e, t) {
    let n;
    switch (t) {
        case 0:
            n = {
                days: o.Z.Messages.FRACTIONAL_PREMIUM_DURATION_LEFT_DAYS_SHORT,
                hours: o.Z.Messages.FRACTIONAL_PREMIUM_DURATION_LEFT_HOURS_SHORT,
                minutes: o.Z.Messages.FRACTIONAL_PREMIUM_DURATION_LEFT_MINUTES_SHORT
            };
            break;
        case 1:
            n = {
                days: o.Z.Messages.FRACTIONAL_PREMIUM_DURATION_LEFT_DAYS,
                hours: o.Z.Messages.FRACTIONAL_PREMIUM_DURATION_LEFT_HOURS,
                minutes: o.Z.Messages.FRACTIONAL_PREMIUM_DURATION_LEFT_MINUTES
            };
            break;
        case 2:
            n = {
                days: o.Z.Messages.FRACTIONAL_PREMIUM_DURATION_ENDS_IN_DAYS,
                hours: o.Z.Messages.FRACTIONAL_PREMIUM_DURATION_ENDS_IN_HOURS,
                minutes: o.Z.Messages.FRACTIONAL_PREMIUM_DURATION_ENDS_IN_MINUTES
            };
            break;
        case 3:
            n = {
                days: o.Z.Messages.FRACTIONAL_PREMIUM_DURATION_DAYS_SHORT,
                hours: o.Z.Messages.FRACTIONAL_PREMIUM_DURATION_HOURS_SHORT,
                minutes: o.Z.Messages.FRACTIONAL_PREMIUM_DURATION_MINUTES_SHORT
            };
            break;
        default:
            throw Error('Unknown messageType ('.concat(t, ') when rendering time left'));
    }
    let s = (0, r.Z)(e.toDate(), 60000);
    return (0, l.QX)(s, n);
}
((i = s || (s = {}))[(i.SHORT_TIME_LEFT = 0)] = 'SHORT_TIME_LEFT'), (i[(i.LONG_TIME_LEFT = 1)] = 'LONG_TIME_LEFT'), (i[(i.ENDS_IN = 2)] = 'ENDS_IN'), (i[(i.SHORT_TIME = 3)] = 'SHORT_TIME');
