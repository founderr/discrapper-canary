n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(470079),
    i = n(835473),
    a = n(81063),
    o = n(591759),
    s = n(561308),
    l = n(206583),
    u = n(701488),
    c = n(689938);
function d(e) {
    let t,
        { entry: n, baseEntryData: d } = e,
        _ = (0, i.q)(n.extra.application_id),
        E = null == _ ? void 0 : _.getIconURL(128),
        f = (0, a.getAssetImage)(n.extra.application_id, n.extra.media_assets_large_image, [u.Si.LARGE, u.Si.LARGE]),
        h = n.extra.media_title,
        p = n.extra.media_subtitle,
        m = (0, s.kr)(n) && !(0, s.n2)(n) ? c.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING_V2 : c.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED_V2,
        I = { type: l.kG.CRUNCHYROLL },
        T = r.useMemo(() => {
            if (null == n.extra.url) return;
            let e = o.Z.safeParseWithQuery(n.extra.url);
            if (null != e && null != e.protocol && null != e.hostname) return e;
        }, [n.extra.url]);
    return (
        null != T &&
            (t = {
                href: o.Z.format(T),
                ariaDescription: c.Z.Messages.CONTENT_INVENTORY_OPEN_CRUNCHYROLL_ITEM_A11Y_DESCRIPTION.format({ title: h })
            }),
        {
            ...d,
            thumbnailUrl: null != f ? f : E,
            title: h,
            titleClickable: t,
            thumbnailClickable: t,
            subtitle: p,
            userDescription: m,
            providerIconProps: I
        }
    );
}
