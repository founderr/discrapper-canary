n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(200651);
n(192379);
var l = n(829750),
    a = n(280102);
function r(e) {
    let { channel: t, video: n, userCount: r } = e,
        { limit: s } = (0, l.Z)(t),
        o = -1,
        c = !1;
    return (
        t.userLimit > 0 && (o = t.userLimit),
        n && s > 0 && ((c = o < 0 || s < o), (o = o > 0 ? Math.min(o, s) : s)),
        (0, i.jsx)(a.Z, {
            users: r,
            total: o,
            videoLimit: c
        })
    );
}
