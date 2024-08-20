t.d(n, {
    Z: function () {
        return p;
    }
});
var l = t(876215),
    i = t(758713),
    r = t(835473),
    a = t(810568),
    o = t(168524),
    s = t(561308),
    c = t(206583),
    u = t(96513),
    d = t(701488),
    m = t(689938);
let f = {
        [i.z.XBOX]: c.kG.XBOX,
        [i.z.PLAYSTATION]: c.kG.PLAYSTATION
    },
    _ = { [u._.EMBED]: a.m1.Embed };
function p(e) {
    let n,
        t,
        { entry: i, location: a, baseEntryData: c } = e,
        u = (0, r.q)(i.extra.application_id),
        p = null == u ? void 0 : u.getIconURL(d.Si.LARGE),
        h = i.extra.game_name;
    if (null != i.extra.platform) {
        let e = f[i.extra.platform];
        null != e &&
            (n = {
                type: e,
                'aria-label': m.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM
            });
    }
    t = i.content_type === l.s.PLAYED_GAME ? ((0, s.kr)(i) && !(0, s.n2)(i) ? m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING : m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED) : m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED;
    let C = _[a],
        v = (0, o.Z)({
            location: C,
            applicationId: i.extra.application_id,
            source: C,
            trackEntryPointImpression: !0,
            sourceUserId: i.author_id
        });
    return {
        ...c,
        thumbnailUrl: p,
        title: h,
        onClickTitle: v,
        onClickThumbnail: v,
        userDescription: t,
        providerIconProps: n
    };
}
