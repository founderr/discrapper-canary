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
    o = t(388032);
function s(e) {
    let n,
        { entry: t, baseEntryData: s } = e,
        c = t.extra.entries[0].media,
        u = c.artists[0],
        { title: d, provider: m, image_url: f } = c,
        p = u.name,
        h = {
            onClick: () => (0, i.o)(a.Hw.TRACK, c.external_id),
            ariaDescription: o.intl.formatToPlainString(o.t.xTsar6, { itemName: d })
        },
        _ = {
            onClick: () => (0, i.o)(a.Hw.ARTIST, u.external_id),
            ariaDescription: o.intl.formatToPlainString(o.t.xTsar6, { itemName: p })
        };
    return (
        m === l.p.SPOTIFY && (n = { type: r.kG.SPOTIFY }),
        {
            ...s,
            title: d,
            subtitle: p,
            thumbnailUrl: f,
            titleClickable: h,
            subtitleClickable: _,
            thumbnailClickable: h,
            userDescription: o.t.CcVI1d,
            providerIconProps: n
        }
    );
}
