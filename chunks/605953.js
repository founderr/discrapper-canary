n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    s = n(479313),
    a = n(765104),
    o = n(626135),
    c = n(665149),
    u = n(981631),
    d = n(814249),
    h = n(388032);
function m(e) {
    let { channel: t } = e,
        n = (0, l.e7)([a.Z], () => a.Z.shouldShowTopicsBar());
    return (0, i.jsx)(c.ZP.Icon, {
        icon: r.TopicsIcon,
        onClick: () => {
            o.default.track(u.rMx.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !n,
                source: d.Dc.TOOLBAR_BUTTON,
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type
            }),
                (0, s.e7)();
        },
        tooltip: n ? h.intl.string(h.t.nGs3kJ) : h.intl.string(h.t.bIm2sL),
        selected: n,
        'aria-expanded': n
    });
}
