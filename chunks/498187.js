l.d(n, {
    Z: function () {
        return x;
    }
});
var t = l(876215),
    i = l(758713),
    r = l(835473),
    a = l(810568),
    s = l(168524),
    o = l(561308),
    u = l(206583),
    c = l(96513),
    d = l(701488),
    m = l(388032);
let p = {
        [i.z.XBOX]: u.kG.XBOX,
        [i.z.PLAYSTATION]: u.kG.PLAYSTATION
    },
    f = { [c._.EMBED]: a.m1.Embed };
function x(e) {
    let n,
        l,
        { entry: i, location: a, baseEntryData: u } = e,
        c = (0, r.q)(i.extra.application_id),
        x = null == c ? void 0 : c.getIconURL(d.Si.LARGE),
        v = i.extra.game_name;
    if (null != i.extra.platform) {
        let e = p[i.extra.platform];
        null != e && (n = { type: e });
    }
    l = i.content_type === t.s.PLAYED_GAME ? ((0, o.kr)(i) && !(0, o.n2)(i) ? m.t.vPg1JS : m.t.rPqqtr) : m.t.rPqqtr;
    let h = f[a],
        C = {
            onClick: (0, s.Z)({
                location: h,
                applicationId: i.extra.application_id,
                source: h,
                trackEntryPointImpression: !0,
                sourceUserId: i.author_id
            }),
            ariaDescription: m.intl.formatToPlainString(m.t['9sZWVl'], { gameName: v })
        };
    return {
        ...u,
        thumbnailUrl: x,
        title: v,
        titleClickable: C,
        thumbnailClickable: C,
        userDescription: l,
        providerIconProps: n
    };
}
