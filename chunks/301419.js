l.d(n, {
    Z: function () {
        return u;
    }
});
var t = l(423875),
    r = l(740605),
    a = l(206583),
    i = l(616922),
    s = l(689938);
function u(e) {
    let n,
        { entry: l, baseEntryData: u } = e,
        { provider: o, image_url: c } = l.extra.media,
        d = l.extra.artist.name,
        m = {
            onClick: () => (0, r.o)(i.Hw.ALBUM, l.extra.media.external_parent_id),
            ariaDescription: s.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format({ itemName: l.extra.media.parent_title })
        },
        E = {
            onClick: () => (0, r.o)(i.Hw.ARTIST, l.extra.artist.external_id),
            ariaDescription: s.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format({ itemName: d })
        };
    return (
        o === t.p.SPOTIFY && (n = { type: a.kG.SPOTIFY }),
        {
            ...u,
            title: d,
            thumbnailUrl: c,
            titleClickable: E,
            subtitleClickable: m,
            thumbnailClickable: m,
            userDescription: s.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
            providerIconProps: n
        }
    );
}
