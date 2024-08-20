l.d(n, {
    Z: function () {
        return m;
    }
});
var t = l(442837),
    r = l(2052),
    i = l(99981),
    a = l(906732),
    s = l(835473),
    u = l(914010),
    o = l(561308),
    c = l(701488),
    d = l(689938);
function m(e) {
    let { entry: n } = e,
        l = (0, s.q)(n.extra.application_id),
        m = null == l ? void 0 : l.getIconURL(c.Si.LARGE),
        f = (0, t.e7)([u.Z], () => u.Z.getGuildId()),
        E = n.extra.activity_name,
        p = (0, r.O)(),
        { analyticsLocations: C } = (0, a.ZP)(),
        N = (0, o.kr)(n) && !(0, o.n2)(n) ? d.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING : d.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
        v = {
            onClick: () => {
                null != f &&
                    (0, i.q)({
                        guildId: f,
                        channelId: void 0,
                        locationObject: p.location,
                        initialSelectedApplicationId: n.extra.application_id,
                        initialSlide: c.ag.SELECT_CHANNEL,
                        analyticsLocations: C
                    });
            },
            ariaDescription: d.Z.Messages.CONTENT_INVENTORY_OPEN_ACTIVITY_A11Y_DESCRIPTION.format({ title: E })
        };
    return {
        thumbnailUrl: m,
        title: E,
        titleClickable: v,
        thumbnailClickable: v,
        userDescription: N
    };
}
