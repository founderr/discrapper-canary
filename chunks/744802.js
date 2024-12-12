r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(9161),
    s = r(456644),
    o = r(527790),
    l = r(248930);
function u(e) {
    let { location: n, user: r, currentUser: u, ...c } = e,
        { recentActivityTabEnabled: d } = (0, a.O)({ location: n }),
        { recentActivityEnabled: f } = (0, s.i)({ location: n });
    return (d || f) && r.id !== u.id && !r.bot
        ? (0, i.jsx)(l.Z, {
              user: r,
              ...c
          })
        : (0, i.jsx)(o.Z, {
              user: r,
              ...c
          });
}
