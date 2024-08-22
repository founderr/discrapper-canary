t.d(n, {
    Z: function () {
        return m;
    }
});
var l = t(442837),
    a = t(2052),
    i = t(99981),
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
        _ = (0, l.e7)([s.Z], () => s.Z.getGuildId()),
        f = n.extra.activity_name,
        p = (0, a.O)(),
        { analyticsLocations: E } = (0, r.ZP)(),
        I = (0, c.kr)(n) && !(0, c.n2)(n) ? d.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : d.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
        C = {
            onClick: () => {
                null != _ &&
                    (0, i.q)({
                        guildId: _,
                        channelId: void 0,
                        locationObject: p.location,
                        initialSelectedApplicationId: n.extra.application_id,
                        initialSlide: u.ag.SELECT_CHANNEL,
                        analyticsLocations: E
                    });
            },
            ariaDescription: d.Z.Messages.CONTENT_INVENTORY_OPEN_ACTIVITY_A11Y_DESCRIPTION.format({ title: f })
        };
    return {
        thumbnailUrl: m,
        title: f,
        titleClickable: C,
        thumbnailClickable: C,
        userDescription: I
    };
}
