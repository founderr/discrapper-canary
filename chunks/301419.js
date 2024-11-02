t.d(n, {
    Z: function () {
        return s;
    }
});
var l = t(423875),
    i = t(740605),
    r = t(206583),
    a = t(616922),
    o = t(388032);
function s(e) {
    let n,
        { entry: t, baseEntryData: s } = e,
        { provider: c, image_url: u } = t.extra.media,
        d = t.extra.artist.name,
        m = {
            onClick: () => (0, i.o)(a.Hw.ALBUM, t.extra.media.external_parent_id),
            ariaDescription: o.intl.formatToPlainString(o.t.xTsar6, { itemName: t.extra.media.parent_title })
        },
        f = {
            onClick: () => (0, i.o)(a.Hw.ARTIST, t.extra.artist.external_id),
            ariaDescription: o.intl.formatToPlainString(o.t.xTsar6, { itemName: d })
        };
    return (
        c === l.p.SPOTIFY && (n = { type: r.kG.SPOTIFY }),
        {
            ...s,
            title: d,
            thumbnailUrl: u,
            titleClickable: f,
            subtitleClickable: m,
            thumbnailClickable: m,
            userDescription: o.t.CcVI1d,
            providerIconProps: n
        }
    );
}
