t.d(s, {
    Z: function () {
        return c;
    },
    a: function () {
        return n;
    }
}),
    t(411104);
var n,
    a,
    r = t(774078),
    o = t(55935),
    i = t(689938);
function c(e, s) {
    let t;
    switch (s) {
        case 0:
            t = {
                days: i.Z.Messages.FRACTIONAL_PREMIUM_DURATION_LEFT_DAYS_SHORT,
                hours: i.Z.Messages.FRACTIONAL_PREMIUM_DURATION_LEFT_HOURS_SHORT,
                minutes: i.Z.Messages.FRACTIONAL_PREMIUM_DURATION_LEFT_MINUTES_SHORT
            };
            break;
        case 1:
            t = {
                days: i.Z.Messages.FRACTIONAL_PREMIUM_DURATION_LEFT_DAYS,
                hours: i.Z.Messages.FRACTIONAL_PREMIUM_DURATION_LEFT_HOURS,
                minutes: i.Z.Messages.FRACTIONAL_PREMIUM_DURATION_LEFT_MINUTES
            };
            break;
        case 2:
            t = {
                days: i.Z.Messages.FRACTIONAL_PREMIUM_DURATION_ENDS_IN_DAYS,
                hours: i.Z.Messages.FRACTIONAL_PREMIUM_DURATION_ENDS_IN_HOURS,
                minutes: i.Z.Messages.FRACTIONAL_PREMIUM_DURATION_ENDS_IN_MINUTES
            };
            break;
        case 3:
            t = {
                days: i.Z.Messages.FRACTIONAL_PREMIUM_DURATION_DAYS_SHORT,
                hours: i.Z.Messages.FRACTIONAL_PREMIUM_DURATION_HOURS_SHORT,
                minutes: i.Z.Messages.FRACTIONAL_PREMIUM_DURATION_MINUTES_SHORT
            };
            break;
        default:
            throw Error('Unknown messageType ('.concat(s, ') when rendering time left'));
    }
    let n = (0, r.Z)(e.toDate(), 60000);
    return (0, o.QX)(n, t);
}
((a = n || (n = {}))[(a.SHORT_TIME_LEFT = 0)] = 'SHORT_TIME_LEFT'), (a[(a.LONG_TIME_LEFT = 1)] = 'LONG_TIME_LEFT'), (a[(a.ENDS_IN = 2)] = 'ENDS_IN'), (a[(a.SHORT_TIME = 3)] = 'SHORT_TIME');
