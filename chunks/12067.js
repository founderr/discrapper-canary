t.d(n, {
    Z: function () {
        return h;
    }
});
var l = t(735250);
t(470079);
var i = t(442837),
    r = t(169525),
    a = t(611170),
    o = t(128854),
    s = t(884182),
    c = t(546432),
    u = t(780088),
    d = t(592125),
    m = t(52824),
    f = t(823379),
    _ = t(970184),
    p = t(981631);
function h(e) {
    let { message: n } = (0, _.CJ)(),
        t = (0, i.e7)([d.Z], () => d.Z.getChannel(null == n ? void 0 : n.channel_id)),
        { shouldHideMediaOptions: h, shouldRedactExplicitContent: C, gifAutoPlay: v, getGifFavButton: x, getOnMediaItemContextMenu: E } = (0, o.c)();
    if (null == n || null == t) return null;
    let I = e.items.map((e) => (0, u.j0)(e.media, p.VqG, h, C)).filter(f.lm),
        T = {
            source: 'Media Mosaic',
            guild_id: t.guild_id,
            channel_id: t.id,
            channel_type: t.type
        },
        g = I.length > 1 ? (0, u.Cx)(I, T) : {};
    function N(e, n) {
        let t = e.originalItem;
        return (0, r.lK)(t.media, n, t.spoiler);
    }
    let b = e.items.map((e) => {
        let t = e.media,
            l = null == E ? void 0 : E(t),
            i = {
                message: n,
                item: {
                    uniqueId: t.proxyUrl,
                    originalItem: e,
                    type: (0, c.pU)(t, !0),
                    downloadUrl: t.url,
                    height: t.height,
                    width: t.width,
                    spoiler: e.spoiler,
                    contentType: t.contentType
                },
                onContextMenu: l,
                autoPlayGif: v,
                getObscureReason: N,
                renderImageComponent: a.a,
                renderVideoComponent: a.r,
                renderAudioComponent: p.dG4,
                renderPlaintextFilePreview: p.dG4,
                renderGenericFileComponent: p.dG4,
                renderMosaicItemFooter: p.dG4,
                gifFavoriteButton: x(t),
                onPlay: (e, n, t) => {},
                canRemoveItem: !1,
                onRemoveItem: p.dG4
            },
            r = (0, m.q)({
                proxyURL: t.proxyUrl,
                url: t.url
            });
        return r in g && (i.onClick = g[r]), i;
    });
    return (0, l.jsx)('div', { children: (0, l.jsx)(s.Z, { items: b }) });
}
