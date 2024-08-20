t.d(n, {
    Z: function () {
        return s;
    }
}),
    t(47120);
var l = t(423875),
    i = t(740605),
    r = t(206583),
    a = t(616922),
    o = t(689938);
function s(e) {
    let n,
        { entry: t, baseEntryData: s } = e,
        c = t.extra.entries[0].media,
        u = c.artists[0],
        { title: d, provider: m, image_url: f } = c,
        _ = u.name,
        p = () => (0, i.o)(a.Hw.TRACK, c.external_id);
    return (
        m === l.p.SPOTIFY &&
            (n = {
                type: r.kG.SPOTIFY,
                'aria-label': o.Z.Messages.SPOTIFY
            }),
        {
            ...s,
            title: d,
            subtitle: _,
            thumbnailUrl: f,
            onClickTitle: p,
            onClickSubtitle: () => (0, i.o)(a.Hw.ARTIST, u.external_id),
            onClickThumbnail: p,
            userDescription: o.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
            providerIconProps: n
        }
    );
}
