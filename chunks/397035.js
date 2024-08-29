l.d(n, {
    Z: function () {
        return d;
    }
});
var t = l(470079),
    r = l(835473),
    a = l(81063),
    i = l(591759),
    s = l(561308),
    u = l(206583),
    o = l(701488),
    c = l(689938);
function d(e) {
    let n,
        { entry: l, baseEntryData: d } = e,
        m = (0, r.q)(l.extra.application_id),
        E = null == m ? void 0 : m.getIconURL(128),
        p = (0, a.getAssetImage)(l.extra.application_id, l.extra.media_assets_large_image, [o.Si.LARGE, o.Si.LARGE]),
        N = l.extra.media_title,
        f = l.extra.media_subtitle,
        _ = (0, s.kr)(l) && !(0, s.n2)(l) ? c.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING_V2 : c.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED_V2,
        C = { type: u.kG.CRUNCHYROLL },
        T = t.useMemo(() => {
            if (null == l.extra.url) return;
            let e = i.Z.safeParseWithQuery(l.extra.url);
            if (null != e && null != e.protocol && null != e.hostname) return e;
        }, [l.extra.url]);
    return (
        null != T &&
            (n = {
                href: i.Z.format(T),
                ariaDescription: c.Z.Messages.CONTENT_INVENTORY_OPEN_CRUNCHYROLL_ITEM_A11Y_DESCRIPTION.format({ title: N })
            }),
        {
            ...d,
            thumbnailUrl: null != p ? p : E,
            title: N,
            titleClickable: n,
            thumbnailClickable: n,
            subtitle: f,
            userDescription: _,
            providerIconProps: C
        }
    );
}
