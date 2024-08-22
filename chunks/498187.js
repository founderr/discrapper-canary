t.d(n, {
    Z: function () {
        return p;
    }
});
var l = t(876215),
    a = t(758713),
    i = t(835473),
    r = t(810568),
    o = t(168524),
    s = t(561308),
    c = t(206583),
    u = t(96513),
    d = t(701488),
    m = t(689938);
let _ = {
        [a.z.XBOX]: c.kG.XBOX,
        [a.z.PLAYSTATION]: c.kG.PLAYSTATION
    },
    f = { [u._.EMBED]: r.m1.Embed };
function p(e) {
    let n,
        t,
        { entry: a, location: r, baseEntryData: c } = e,
        u = (0, i.q)(a.extra.application_id),
        p = null == u ? void 0 : u.getIconURL(d.Si.LARGE),
        E = a.extra.game_name;
    if (null != a.extra.platform) {
        let e = _[a.extra.platform];
        null != e && (n = { type: e });
    }
    t = a.content_type === l.s.PLAYED_GAME ? ((0, s.kr)(a) && !(0, s.n2)(a) ? m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2) : m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2;
    let I = f[r],
        C = {
            onClick: (0, o.Z)({
                location: I,
                applicationId: a.extra.application_id,
                source: I,
                trackEntryPointImpression: !0,
                sourceUserId: a.author_id
            }),
            ariaDescription: m.Z.Messages.CONTENT_INVENTORY_OPEN_GAME_PROFILE_A11Y_DESCRIPTION.format({ gameName: E })
        };
    return {
        ...c,
        thumbnailUrl: p,
        title: E,
        titleClickable: C,
        thumbnailClickable: C,
        userDescription: t,
        providerIconProps: n
    };
}
