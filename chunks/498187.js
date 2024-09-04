l.d(n, {
    Z: function () {
        return E;
    }
});
var t = l(876215),
    r = l(758713),
    i = l(835473),
    a = l(810568),
    s = l(168524),
    u = l(561308),
    o = l(206583),
    c = l(96513),
    d = l(701488),
    m = l(689938);
let p = {
        [r.z.XBOX]: o.kG.XBOX,
        [r.z.PLAYSTATION]: o.kG.PLAYSTATION
    },
    f = { [c._.EMBED]: a.m1.Embed };
function E(e) {
    let n,
        l,
        { entry: r, location: a, baseEntryData: o } = e,
        c = (0, i.q)(r.extra.application_id),
        E = null == c ? void 0 : c.getIconURL(d.Si.LARGE),
        N = r.extra.game_name;
    if (null != r.extra.platform) {
        let e = p[r.extra.platform];
        null != e && (n = { type: e });
    }
    l = r.content_type === t.s.PLAYED_GAME ? ((0, u.kr)(r) && !(0, u.n2)(r) ? m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2) : m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2;
    let C = f[a],
        v = {
            onClick: (0, s.Z)({
                location: C,
                applicationId: r.extra.application_id,
                source: C,
                trackEntryPointImpression: !0,
                sourceUserId: r.author_id
            }),
            ariaDescription: m.Z.Messages.CONTENT_INVENTORY_OPEN_GAME_PROFILE_A11Y_DESCRIPTION.format({ gameName: N })
        };
    return {
        ...o,
        thumbnailUrl: E,
        title: N,
        titleClickable: v,
        thumbnailClickable: v,
        userDescription: l,
        providerIconProps: n
    };
}
