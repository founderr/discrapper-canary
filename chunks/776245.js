var i = r(926515),
    a = r(24033),
    s = r(995739);
e.exports = function (e, n, r) {
    var o, l;
    a(e);
    try {
        if (!(o = s(e, 'return'))) {
            if ('throw' === n) throw r;
            return r;
        }
        o = i(o, e);
    } catch (e) {
        (l = !0), (o = e);
    }
    if ('throw' === n) throw r;
    if (l) throw o;
    return a(o), r;
};
