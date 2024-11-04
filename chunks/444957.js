n.d(t, {
    h: function () {
        return s;
    }
});
var i = n(237292),
    l = n(403485),
    r = n(604849);
function s(e) {
    let t = (0, i.y0)({ location: 'safety-tools-button' }),
        n = (0, r.c)(),
        s = (0, l.h)(e);
    if (!t || !n) return;
    let a = s.filter((e) => null != e.dismiss_timestamp);
    if (0 !== a.length) return a.sort((e, t) => (e.type > t.type ? 1 : e.dismiss_timestamp < t.dismiss_timestamp ? 1 : -1))[0];
}
