r.d(n, {
    r: function () {
        return l;
    },
    z: function () {
        return u;
    }
});
var i = r(51407),
    a = r(46973),
    s = r(36703),
    o = r(526761);
function l(e, n) {
    let r = n === a.Yn.STREAM ? i.h.STREAM : i.h.USER;
    return 1 > Math.abs((0, s.P)(r) - (0, s.P)(e)) ? r : e;
}
function u(e) {
    switch (e) {
        case a.Yn.DEFAULT:
            return o.u0.USER;
        case a.Yn.STREAM:
            return o.u0.STREAM;
        default:
            return;
    }
}
