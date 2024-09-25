n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(47120);
var i = n(423875),
    a = n(740605),
    o = n(206583),
    s = n(616922),
    l = n(689938);
function u(e) {
    let t,
        { entry: n, baseEntryData: r } = e,
        u = n.extra.entries[0].media,
        c = u.artists[0],
        { title: d, provider: _, image_url: E } = u,
        f = c.name,
        h = {
            onClick: () => (0, a.o)(s.Hw.TRACK, u.external_id),
            ariaDescription: l.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format({ itemName: d })
        },
        p = {
            onClick: () => (0, a.o)(s.Hw.ARTIST, c.external_id),
            ariaDescription: l.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format({ itemName: f })
        };
    return (
        _ === i.p.SPOTIFY && (t = { type: o.kG.SPOTIFY }),
        {
            ...r,
            title: d,
            subtitle: f,
            thumbnailUrl: E,
            titleClickable: h,
            subtitleClickable: p,
            thumbnailClickable: h,
            userDescription: l.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
            providerIconProps: t
        }
    );
}
