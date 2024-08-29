l.d(n, {
    Z: function () {
        return N;
    }
});
var t = l(876215),
    r = l(758713),
    a = l(835473),
    i = l(810568),
    s = l(168524),
    u = l(561308),
    o = l(206583),
    c = l(96513),
    d = l(701488),
    m = l(689938);
let E = {
        [r.z.XBOX]: o.kG.XBOX,
        [r.z.PLAYSTATION]: o.kG.PLAYSTATION
    },
    p = { [c._.EMBED]: i.m1.Embed };
function N(e) {
    let n,
        l,
        { entry: r, location: i, baseEntryData: o } = e,
        c = (0, a.q)(r.extra.application_id),
        N = null == c ? void 0 : c.getIconURL(d.Si.LARGE),
        f = r.extra.game_name;
    if (null != r.extra.platform) {
        let e = E[r.extra.platform];
        null != e && (n = { type: e });
    }
    l = r.content_type === t.s.PLAYED_GAME ? ((0, u.kr)(r) && !(0, u.n2)(r) ? m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2) : m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2;
    let _ = p[i],
        C = {
            onClick: (0, s.Z)({
                location: _,
                applicationId: r.extra.application_id,
                source: _,
                trackEntryPointImpression: !0,
                sourceUserId: r.author_id
            }),
            ariaDescription: m.Z.Messages.CONTENT_INVENTORY_OPEN_GAME_PROFILE_A11Y_DESCRIPTION.format({ gameName: f })
        };
    return {
        ...o,
        thumbnailUrl: N,
        title: f,
        titleClickable: C,
        thumbnailClickable: C,
        userDescription: l,
        providerIconProps: n
    };
}
