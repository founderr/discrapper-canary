l.d(n, {
    Z: function () {
        return u;
    }
}),
    l(47120);
var t = l(423875),
    r = l(740605),
    a = l(206583),
    i = l(616922),
    s = l(689938);
function u(e) {
    let n,
        { entry: l, baseEntryData: u } = e,
        o = l.extra.entries[0].media,
        c = o.artists[0],
        { title: d, provider: m, image_url: E } = o,
        p = c.name,
        N = {
            onClick: () => (0, r.o)(i.Hw.TRACK, o.external_id),
            ariaDescription: s.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format({ itemName: d })
        },
        f = {
            onClick: () => (0, r.o)(i.Hw.ARTIST, c.external_id),
            ariaDescription: s.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format({ itemName: p })
        };
    return (
        m === t.p.SPOTIFY && (n = { type: a.kG.SPOTIFY }),
        {
            ...u,
            title: d,
            subtitle: p,
            thumbnailUrl: E,
            titleClickable: N,
            subtitleClickable: f,
            thumbnailClickable: N,
            userDescription: s.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
            providerIconProps: n
        }
    );
}
