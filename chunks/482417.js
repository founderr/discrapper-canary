t.d(n, {
    Z: function () {
        return s;
    }
}),
    t(47120);
var l = t(423875),
    a = t(740605),
    i = t(206583),
    r = t(616922),
    o = t(689938);
function s(e) {
    let n,
        { entry: t, baseEntryData: s } = e,
        c = t.extra.entries[0].media,
        u = c.artists[0],
        { title: d, provider: m, image_url: _ } = c,
        f = u.name,
        p = {
            onClick: () => (0, a.o)(r.Hw.TRACK, c.external_id),
            ariaDescription: o.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format({ itemName: d })
        },
        E = {
            onClick: () => (0, a.o)(r.Hw.ARTIST, u.external_id),
            ariaDescription: o.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format({ itemName: f })
        };
    return (
        m === l.p.SPOTIFY && (n = { type: i.kG.SPOTIFY }),
        {
            ...s,
            title: d,
            subtitle: f,
            thumbnailUrl: _,
            titleClickable: p,
            subtitleClickable: E,
            thumbnailClickable: p,
            userDescription: o.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
            providerIconProps: n
        }
    );
}
