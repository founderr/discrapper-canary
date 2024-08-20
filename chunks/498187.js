l.d(n, {
    Z: function () {
        return p;
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
let E = {
        [r.z.XBOX]: o.kG.XBOX,
        [r.z.PLAYSTATION]: o.kG.PLAYSTATION
    },
    f = { [c._.EMBED]: a.m1.Embed };
function p(e) {
    let n,
        l,
        { entry: r, location: a, baseEntryData: o } = e,
        c = (0, i.q)(r.extra.application_id),
        p = null == c ? void 0 : c.getIconURL(d.Si.LARGE),
        C = r.extra.game_name;
    if (null != r.extra.platform) {
        let e = E[r.extra.platform];
        null != e && (n = { type: e });
    }
    l = r.content_type === t.s.PLAYED_GAME ? ((0, u.kr)(r) && !(0, u.n2)(r) ? m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING : m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED) : m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED;
    let N = f[a],
        _ = {
            onClick: (0, s.Z)({
                location: N,
                applicationId: r.extra.application_id,
                source: N,
                trackEntryPointImpression: !0,
                sourceUserId: r.author_id
            }),
            ariaDescription: m.Z.Messages.CONTENT_INVENTORY_OPEN_GAME_PROFILE_A11Y_DESCRIPTION.format({ gameName: C })
        };
    return {
        ...o,
        thumbnailUrl: p,
        title: C,
        titleClickable: _,
        thumbnailClickable: _,
        userDescription: l,
        providerIconProps: n
    };
}
