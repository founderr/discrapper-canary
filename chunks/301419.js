n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(423875),
    i = n(740605),
    a = n(206583),
    o = n(616922),
    s = n(689938);
function l(e) {
    let t,
        { entry: n, baseEntryData: l } = e,
        { provider: u, image_url: c } = n.extra.media,
        d = n.extra.artist.name,
        _ = {
            onClick: () => (0, i.o)(o.Hw.ALBUM, n.extra.media.external_parent_id),
            ariaDescription: s.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format({ itemName: n.extra.media.parent_title })
        },
        E = {
            onClick: () => (0, i.o)(o.Hw.ARTIST, n.extra.artist.external_id),
            ariaDescription: s.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format({ itemName: d })
        };
    return (
        u === r.p.SPOTIFY && (t = { type: a.kG.SPOTIFY }),
        {
            ...l,
            title: d,
            thumbnailUrl: c,
            titleClickable: E,
            subtitleClickable: _,
            thumbnailClickable: _,
            userDescription: s.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
            providerIconProps: t
        }
    );
}
