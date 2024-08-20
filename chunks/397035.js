l.d(n, {
    Z: function () {
        return d;
    }
});
var t = l(470079),
    r = l(835473),
    i = l(81063),
    a = l(591759),
    s = l(561308),
    u = l(206583),
    o = l(701488),
    c = l(689938);
function d(e) {
    let n,
        { entry: l, baseEntryData: d } = e,
        m = (0, r.q)(l.extra.application_id),
        E = null == m ? void 0 : m.getIconURL(128),
        f = (0, i.getAssetImage)(l.extra.application_id, l.extra.media_assets_large_image, [o.Si.LARGE, o.Si.LARGE]),
        p = l.extra.media_title,
        C = l.extra.media_subtitle,
        N = (0, s.kr)(l) && !(0, s.n2)(l) ? c.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING : c.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED,
        _ = { type: u.kG.CRUNCHYROLL },
        v = t.useMemo(() => {
            if (null == l.extra.url) return;
            let e = a.Z.safeParseWithQuery(l.extra.url);
            if (null != e && null != e.protocol && null != e.hostname) return e;
        }, [l.extra.url]);
    return (
        null != v &&
            (n = {
                href: a.Z.format(v),
                ariaDescription: c.Z.Messages.CONTENT_INVENTORY_OPEN_CRUNCHYROLL_ITEM_A11Y_DESCRIPTION.format({ title: p })
            }),
        {
            ...d,
            thumbnailUrl: null != f ? f : E,
            title: p,
            titleClickable: n,
            thumbnailClickable: n,
            subtitle: C,
            userDescription: N,
            providerIconProps: _
        }
    );
}
