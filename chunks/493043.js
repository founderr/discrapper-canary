r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(200651);
r(192379);
var a = r(984173),
    s = r(769140),
    o = r(382425);
function l(e) {
    let { location: n, profileGuildId: r, user: l, currentUser: u, ...c } = e,
        { activityReactReplyEnabled: d, allProfileReactReplyEnabled: f } = (0, a.F)({ location: n });
    return l.id !== u.id && (d || f)
        ? (0, i.jsx)(o.Z, {
              currentUser: u,
              user: l,
              profileGuildId: r,
              ...c
          })
        : (0, i.jsx)(s.Z, {
              currentUser: u,
              user: l,
              ...c
          });
}
