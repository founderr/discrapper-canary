n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(200651);
n(192379);
var i = n(984173),
    a = n(769140),
    s = n(382425);
function o(e) {
    let { location: t, profileGuildId: n, user: o, currentUser: l, ...u } = e,
        { activityReactReplyEnabled: c, allProfileReactReplyEnabled: d } = (0, i.F)({ location: t });
    return o.id !== l.id && (c || d)
        ? (0, r.jsx)(s.Z, {
              currentUser: l,
              user: o,
              profileGuildId: n,
              ...u
          })
        : (0, r.jsx)(a.Z, {
              currentUser: l,
              user: o,
              ...u
          });
}
