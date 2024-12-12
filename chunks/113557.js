r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(984173),
    s = r(718107),
    o = r(899007),
    l = r(995250);
function u(e) {
    let { location: n, ...r } = e,
        { avatarReactReplyEnabled: u } = (0, s.t)({ location: n }),
        { allProfileReactReplyEnabled: c } = (0, a.F)({ location: n });
    return u || c ? (0, i.jsx)(l.Z, { ...r }) : (0, i.jsx)(o.Z, { ...r });
}
