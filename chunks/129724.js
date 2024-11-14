n.d(t, {
    A: function () {
        return r;
    }
});
var i = n(913527),
    l = n.n(i),
    s = n(388032);
function r(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.intl.string(s.t['Yl1D8/']),
        i = l().duration(e, 'seconds');
    if (i.days() > 0) return s.intl.formatToPlainString(t ? s.t.GBLpQ0 : s.t.k2UNz8, { days: i.days() });
    if (i.hours() > 0) return s.intl.formatToPlainString(t ? s.t.rhY1Rk : s.t.xCjYxM, { hours: i.hours() });
    if (i.minutes() > 0) return s.intl.formatToPlainString(t ? s.t['XIGt+f'] : s.t.iXLF9f, { minutes: i.minutes() });
    else if (e > 0) return s.intl.formatToPlainString(t ? s.t.pyvjRk : s.t.geSp4O, { seconds: i.seconds() });
    else return t ? s.intl.string(s.t['Yl1D8/']) : n;
}
