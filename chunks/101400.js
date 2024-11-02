n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(924489),
    l = n(824606),
    a = n(889280);
function s(e) {
    let { className: t, application: n } = e,
        s = (0, l.Z)({ application: n });
    return (0, i.jsx)('div', {
        className: t,
        children: (0, i.jsx)(r.Z, {
            application: n,
            mutualGuilds: s,
            mutualGuildShownMax: 3,
            className: a.guildCountContainer,
            guildIconSize: r.x.SMALL,
            guildsClassName: a.guildsIconContainer,
            compact: !0
        })
    });
}
