n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(703656),
    r = n(434479),
    s = n(981631),
    o = n(176505),
    c = n(689938);
function u(e) {
    let { guild: t, selected: n } = e;
    return (0, i.jsx)(r.m, {
        id: 'home-tab-'.concat(t.id),
        renderIcon: (e) =>
            (0, i.jsx)(l.SignPostIcon, {
                size: 'md',
                color: 'currentColor',
                className: e
            }),
        text: c.Z.Messages.SERVER_GUIDE,
        selected: n,
        onClick: function () {
            (0, a.uL)(s.Z5c.CHANNEL(t.id, o.oC.GUILD_HOME));
        }
    });
}
