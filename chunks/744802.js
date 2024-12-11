n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(200651);
n(192379);
var i = n(9161),
    a = n(456644),
    s = n(527790),
    o = n(248930);
function l(e) {
    let { location: t, user: n, currentUser: l, ...u } = e,
        { recentActivityTabEnabled: c } = (0, i.O)({ location: t }),
        { recentActivityEnabled: d } = (0, a.i)({ location: t });
    return (c || d) && n.id !== l.id && !n.bot
        ? (0, r.jsx)(o.Z, {
              user: n,
              ...u
          })
        : (0, r.jsx)(s.Z, {
              user: n,
              ...u
          });
}
