l.d(n, {
    Z: function () {
        return u;
    }
});
var t = l(423875),
    r = l(740605),
    i = l(206583),
    a = l(616922),
    s = l(689938);
function u(e) {
    let n,
        { entry: l, baseEntryData: u } = e,
        { provider: o, image_url: c } = l.extra.media,
        d = l.extra.artist.name,
        m = {
            onClick: () => (0, r.o)(a.Hw.ALBUM, l.extra.media.external_parent_id),
            ariaDescription: s.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format({ itemName: l.extra.media.parent_title })
        },
        f = {
            onClick: () => (0, r.o)(a.Hw.ARTIST, l.extra.artist.external_id),
            ariaDescription: s.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format({ itemName: d })
        };
    return (
        o === t.p.SPOTIFY && (n = { type: i.kG.SPOTIFY }),
        {
            ...u,
            title: d,
            thumbnailUrl: c,
            titleClickable: f,
            subtitleClickable: m,
            thumbnailClickable: m,
            userDescription: s.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
            providerIconProps: n
        }
    );
}
