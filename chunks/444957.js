n.d(t, {
    h: function () {
        return l;
    }
});
var i = n(237292),
    s = n(403485),
    a = n(604849);
function l(e) {
    let t = (0, i.y0)({ location: 'safety-tools-button' }),
        n = (0, a.c)(),
        l = (0, s.h)(e);
    if (!t || !n) return;
    let r = l.filter((e) => null != e.dismiss_timestamp);
    if (0 !== r.length) return r.sort((e, t) => (e.type > t.type ? 1 : e.dismiss_timestamp < t.dismiss_timestamp ? 1 : -1))[0];
}
