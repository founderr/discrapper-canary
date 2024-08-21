t.d(n, {
    Z: function () {
        return m;
    }
});
var l = t(442837),
    i = t(2052),
    a = t(99981),
    r = t(906732),
    o = t(835473),
    s = t(914010),
    c = t(561308),
    u = t(701488),
    d = t(689938);
function m(e) {
    let { entry: n } = e,
        t = (0, o.q)(n.extra.application_id),
        m = null == t ? void 0 : t.getIconURL(u.Si.LARGE),
        f = (0, l.e7)([s.Z], () => s.Z.getGuildId()),
        _ = n.extra.activity_name,
        p = (0, i.O)(),
        { analyticsLocations: C } = (0, r.ZP)(),
        h = (0, c.kr)(n) && !(0, c.n2)(n) ? d.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING : d.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
        E = {
            onClick: () => {
                null != f &&
                    (0, a.q)({
                        guildId: f,
                        channelId: void 0,
                        locationObject: p.location,
                        initialSelectedApplicationId: n.extra.application_id,
                        initialSlide: u.ag.SELECT_CHANNEL,
                        analyticsLocations: C
                    });
            },
            ariaDescription: d.Z.Messages.CONTENT_INVENTORY_OPEN_ACTIVITY_A11Y_DESCRIPTION.format({ title: _ })
        };
    return {
        thumbnailUrl: m,
        title: _,
        titleClickable: E,
        thumbnailClickable: E,
        userDescription: h
    };
}
