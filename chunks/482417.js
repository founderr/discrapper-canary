l.d(n, {
    Z: function () {
        return u;
    }
}),
    l(47120);
var t = l(423875),
    r = l(740605),
    i = l(206583),
    a = l(616922),
    s = l(689938);
function u(e) {
    let n,
        { entry: l, baseEntryData: u } = e,
        o = l.extra.entries[0].media,
        c = o.artists[0],
        { title: d, provider: m, image_url: f } = o,
        E = c.name,
        p = {
            onClick: () => (0, r.o)(a.Hw.TRACK, o.external_id),
            ariaDescription: s.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format({ itemName: d })
        },
        C = {
            onClick: () => (0, r.o)(a.Hw.ARTIST, c.external_id),
            ariaDescription: s.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format({ itemName: E })
        };
    return (
        m === t.p.SPOTIFY && (n = { type: i.kG.SPOTIFY }),
        {
            ...u,
            title: d,
            subtitle: E,
            thumbnailUrl: f,
            titleClickable: p,
            subtitleClickable: C,
            thumbnailClickable: p,
            userDescription: s.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
            providerIconProps: n
        }
    );
}
