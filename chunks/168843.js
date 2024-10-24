n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var s = n(442837),
    a = n(481060),
    l = n(816782),
    r = n(367907),
    o = n(433355),
    c = n(914010),
    u = n(665149),
    d = n(981631),
    h = n(689938);
function p(e) {
    let { channelId: t } = e,
        n = (0, s.e7)([o.ZP], () => o.ZP.getSection(t)),
        p = (0, s.e7)([c.Z], () => c.Z.getGuildId()),
        m = n === d.ULH.MEMBERS;
    return (0, i.jsx)(u.JO, {
        tooltip: m ? h.Z.Messages.MEMBER_LIST_SHOWN : h.Z.Messages.MEMBER_LIST_HIDDEN,
        icon: a.GroupIcon,
        onClick: () => {
            r.ZP.trackWithMetadata(d.rMx.MEMBER_LIST_TOGGLED, {
                channel_id: t,
                guild_id: p,
                member_list_open: !m
            }),
                l.Z.toggleMembersSection();
        },
        selected: m
    });
}
