r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(9161),
    s = r(490231),
    o = r(456644),
    l = r(769140),
    u = r(382425);
function c(e) {
    let { location: n, profileGuildId: r, user: c, currentUser: d, ...f } = e,
        { fadeInAndOutEnabled: _ } = (0, s.o)({
            location: n,
            autoTrackExposure: !1
        }),
        { recentActivityTabEnabled: h } = (0, a.O)({
            location: n,
            autoTrackExposure: !1
        }),
        { recentActivityEnabled: p } = (0, o.i)({
            location: n,
            autoTrackExposure: !1
        }),
        m = _ || h || p;
    return c.id !== d.id && m
        ? (0, i.jsx)(u.Z, {
              currentUser: d,
              user: c,
              profileGuildId: r,
              ...f
          })
        : (0, i.jsx)(l.Z, {
              currentUser: d,
              user: c,
              ...f
          });
}
