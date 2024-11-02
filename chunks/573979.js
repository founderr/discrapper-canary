n.d(t, {
    Z: function () {
        return o;
    }
});
var i,
    r,
    l,
    a,
    s = n(358085);
function o(e) {
    if ((0, s.isIOS)()) return e;
    if (!(0, s.isAndroid)()) return -1;
    switch (e) {
        case 0:
            return 0;
        case 1:
        case 2:
            return 1;
        case 3:
            return 2;
        case 4:
        case 5:
        case 6:
            return 3;
        default:
            return -1;
    }
}
((i = l || (l = {}))[(i.UNHANDLED = -1)] = 'UNHANDLED'), (i[(i.NOMINAL = 0)] = 'NOMINAL'), (i[(i.FAIR = 1)] = 'FAIR'), (i[(i.SERIOUS = 2)] = 'SERIOUS'), (i[(i.CRITICAL = 3)] = 'CRITICAL'), ((r = a || (a = {}))[(r.NONE = 0)] = 'NONE'), (r[(r.LIGHT = 1)] = 'LIGHT'), (r[(r.MODERATE = 2)] = 'MODERATE'), (r[(r.SEVERE = 3)] = 'SEVERE'), (r[(r.CRITICAL = 4)] = 'CRITICAL'), (r[(r.EMERGENCY = 5)] = 'EMERGENCY'), (r[(r.SHUTDOWN = 6)] = 'SHUTDOWN');
