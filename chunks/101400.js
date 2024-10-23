n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(200651);
n(192379);
var a = n(924489),
    s = n(824606),
    r = n(889280);
function l(e) {
    let { className: t, application: n } = e,
        l = (0, s.Z)({ application: n });
    return (0, i.jsx)('div', {
        className: t,
        children: (0, i.jsx)(a.Z, {
            application: n,
            mutualGuilds: l,
            mutualGuildShownMax: 3,
            className: r.guildCountContainer,
            guildIconSize: a.x.SMALL,
            guildsClassName: r.guildsIconContainer,
            compact: !0
        })
    });
}
