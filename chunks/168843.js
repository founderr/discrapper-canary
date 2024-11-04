n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    s = n(816782),
    a = n(367907),
    o = n(433355),
    c = n(914010),
    u = n(665149),
    d = n(981631),
    h = n(388032);
function m(e) {
    let { channelId: t } = e,
        n = (0, l.e7)([o.ZP], () => o.ZP.getSection(t)),
        m = (0, l.e7)([c.Z], () => c.Z.getGuildId()),
        p = n === d.ULH.MEMBERS;
    return (0, i.jsx)(u.JO, {
        tooltip: p ? h.intl.string(h.t.Axvx8f) : h.intl.string(h.t.gxChDw),
        icon: r.GroupIcon,
        onClick: () => {
            a.ZP.trackWithMetadata(d.rMx.MEMBER_LIST_TOGGLED, {
                channel_id: t,
                guild_id: m,
                member_list_open: !p
            }),
                s.Z.toggleMembersSection();
        },
        selected: p
    });
}
