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
    let { location: t, profileGuildId: n, ...o } = e,
        { activityReactReplyEnabled: l, allProfileReactReplyEnabled: u } = (0, i.F)({ location: t });
    return l || u
        ? (0, r.jsx)(s.Z, {
              profileGuildId: n,
              ...o
          })
        : (0, r.jsx)(a.Z, { ...o });
}
