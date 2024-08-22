t.d(n, {
    Z: function () {
        return E;
    }
});
var l = t(735250);
t(470079);
var a = t(442837),
    i = t(169525),
    r = t(611170),
    o = t(128854),
    s = t(884182),
    c = t(546432),
    u = t(780088),
    d = t(592125),
    m = t(52824),
    _ = t(823379),
    f = t(970184),
    p = t(981631);
function E(e) {
    let { message: n } = (0, f.CJ)(),
        t = (0, a.e7)([d.Z], () => d.Z.getChannel(null == n ? void 0 : n.channel_id)),
        { shouldHideMediaOptions: E, shouldRedactExplicitContent: I, gifAutoPlay: C, getGifFavButton: h, getOnMediaItemContextMenu: N } = (0, o.c)();
    if (null == n || null == t) return null;
    let T = e.items.map((e) => (0, u.j0)(e.media, p.VqG, E, I)).filter(_.lm),
        x = {
            source: 'Media Mosaic',
            guild_id: t.guild_id,
            channel_id: t.id,
            channel_type: t.type
        },
        v = T.length > 1 ? (0, u.Cx)(T, x) : {};
    function g(e, n) {
        let t = e.originalItem;
        return (0, i.lK)(t.media, n, t.spoiler);
    }
    let b = e.items.map((e) => {
        let t = e.media,
            l = null == N ? void 0 : N(t),
            a = {
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
                autoPlayGif: C,
                getObscureReason: g,
                renderImageComponent: r.a,
                renderVideoComponent: r.r,
                renderAudioComponent: p.dG4,
                renderPlaintextFilePreview: p.dG4,
                renderGenericFileComponent: p.dG4,
                renderMosaicItemFooter: p.dG4,
                gifFavoriteButton: h(t),
                onPlay: (e, n, t) => {},
                canRemoveItem: !1,
                onRemoveItem: p.dG4
            },
            i = (0, m.q)({
                proxyURL: t.proxyUrl,
                url: t.url
            });
        return i in v && (a.onClick = v[i]), a;
    });
    return (0, l.jsx)('div', { children: (0, l.jsx)(s.Z, { items: b }) });
}
