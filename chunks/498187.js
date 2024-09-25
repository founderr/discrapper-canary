n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(876215),
    i = n(758713),
    a = n(835473),
    o = n(810568),
    s = n(168524),
    l = n(561308),
    u = n(206583),
    c = n(96513),
    d = n(701488),
    _ = n(689938);
let E = {
        [i.z.XBOX]: u.kG.XBOX,
        [i.z.PLAYSTATION]: u.kG.PLAYSTATION
    },
    f = { [c._.EMBED]: o.m1.Embed };
function h(e) {
    let t,
        n,
        { entry: i, location: o, baseEntryData: u } = e,
        c = (0, a.q)(i.extra.application_id),
        h = null == c ? void 0 : c.getIconURL(d.Si.LARGE),
        p = i.extra.game_name;
    if (null != i.extra.platform) {
        let e = E[i.extra.platform];
        null != e && (t = { type: e });
    }
    n = i.content_type === r.s.PLAYED_GAME ? ((0, l.kr)(i) && !(0, l.n2)(i) ? _.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : _.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2) : _.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2;
    let m = f[o],
        I = {
            onClick: (0, s.Z)({
                location: m,
                applicationId: i.extra.application_id,
                source: m,
                trackEntryPointImpression: !0,
                sourceUserId: i.author_id
            }),
            ariaDescription: _.Z.Messages.CONTENT_INVENTORY_OPEN_GAME_PROFILE_A11Y_DESCRIPTION.format({ gameName: p })
        };
    return {
        ...u,
        thumbnailUrl: h,
        title: p,
        titleClickable: I,
        thumbnailClickable: I,
        userDescription: n,
        providerIconProps: t
    };
}
