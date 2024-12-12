r.d(n, {
    C: function () {
        return o;
    },
    s: function () {
        return l;
    }
});
var i = r(939639),
    a = r(99815),
    s = r(388032);
function o(e) {
    var n;
    return null !==
        (n = {
            [a.E.LOL_TOTAL_KILLS]: s.intl.string(s.t.aIbY2N),
            [a.E.LOL_TOTAL_DEATHS]: s.intl.string(s.t.Jec90d),
            [a.E.LOL_TOTAL_ASSISTS]: s.intl.string(s.t['8+lHWV']),
            [a.E.LOL_TOTAL_DAMAGE_DEALT]: s.intl.string(s.t['XEmO+P']),
            [a.E.LOL_TOTAL_DAMAGE_TAKEN]: s.intl.string(s.t['TcQ7//']),
            [a.E.LOL_TOTAL_WINS]: s.intl.string(s.t['/QfLjI']),
            [a.E.LOL_MAX_CREEP_SCORE]: s.intl.string(s.t.M5pp7e)
        }[e]) && void 0 !== n
        ? n
        : s.intl.string(s.t['IraB/v']);
}
function l(e) {
    let { statisticId: n, sortDesc: r, aggregationType: a } = e,
        l = o(n);
    if (a === i.k.MAX) return r ? s.intl.formatToPlainString(s.t.nJYOFx, { statisticName: l }) : s.intl.formatToPlainString(s.t.SYKIbW, { statisticName: l });
    return r ? s.intl.formatToPlainString(s.t.M9sOp6, { statisticName: l }) : s.intl.formatToPlainString(s.t.USfwd3, { statisticName: l });
}
