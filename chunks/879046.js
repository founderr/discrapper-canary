l.d(n, {
    Z: function () {
        return m;
    }
});
var t = l(442837),
    r = l(2052),
    a = l(99981),
    i = l(906732),
    s = l(835473),
    u = l(914010),
    o = l(561308),
    c = l(701488),
    d = l(689938);
function m(e) {
    let { entry: n } = e,
        l = (0, s.q)(n.extra.application_id),
        m = null == l ? void 0 : l.getIconURL(c.Si.LARGE),
        E = (0, t.e7)([u.Z], () => u.Z.getGuildId()),
        p = n.extra.activity_name,
        N = (0, r.O)(),
        { analyticsLocations: f } = (0, i.ZP)(),
        _ = (0, o.kr)(n) && !(0, o.n2)(n) ? d.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : d.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
        C = {
            onClick: () => {
                null != E &&
                    (0, a.q)({
                        guildId: E,
                        channelId: void 0,
                        locationObject: N.location,
                        initialSelectedApplicationId: n.extra.application_id,
                        initialSlide: c.ag.SELECT_CHANNEL,
                        analyticsLocations: f
                    });
            },
            ariaDescription: d.Z.Messages.CONTENT_INVENTORY_OPEN_ACTIVITY_A11Y_DESCRIPTION.format({ title: p })
        };
    return {
        thumbnailUrl: m,
        title: p,
        titleClickable: C,
        thumbnailClickable: C,
        userDescription: _
    };
}
