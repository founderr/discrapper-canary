r.d(n, {
    ps: function () {
        return c;
    },
    y9: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(703656);
r(956664);
var o = r(419061),
    l = r(981631);
function u(e) {
    return 'number' != typeof e ? (0, a.getAvatarSize)(e) * o.hs : e * o.hs;
}
let c = (e) => {
    let { analyticsLocations: n, initialSelectedDecoration: o, initialSelectedDecorationId: u, isTryItOutFlow: c, guild: d, onClose: f } = e;
    (0, a.openModalLazy)(async () => {
        (0, s.s1)().location.pathname === l.Z5c.COLLECTIBLES_SHOP_FULLSCREEN && (0, s.uL)(l.Z5c.APP);
        let { default: e } = await Promise.resolve().then(r.bind(r, 235400));
        return (r) =>
            (0, i.jsx)(e, {
                ...r,
                onCloseModal: r.onClose,
                onClose: f,
                analyticsLocations: n,
                initialSelectedDecoration: o,
                initialSelectedDecorationId: u,
                isTryItOutFlow: c,
                guild: d
            });
    }, {});
};
