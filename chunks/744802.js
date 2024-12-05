n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(200651);
n(192379);
var i = n(456644),
    a = n(527790),
    s = n(248930);
function o(e) {
    let { location: t, user: n, currentUser: o, ...l } = e,
        { recentActivityEnabled: u } = (0, i.i)({ location: t });
    return u && n.id !== o.id && !n.bot
        ? (0, r.jsx)(s.Z, {
              user: n,
              ...l
          })
        : (0, r.jsx)(a.Z, {
              user: n,
              ...l
          });
}
