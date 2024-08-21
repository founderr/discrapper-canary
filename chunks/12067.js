t.d(n, {
    Z: function () {
        return C;
    }
});
var l = t(735250);
t(470079);
var i = t(442837),
    a = t(169525),
    r = t(611170),
    o = t(128854),
    s = t(884182),
    c = t(546432),
    u = t(780088),
    d = t(592125),
    m = t(52824),
    f = t(823379),
    _ = t(970184),
    p = t(981631);
function C(e) {
    let { message: n } = (0, _.CJ)(),
        t = (0, i.e7)([d.Z], () => d.Z.getChannel(null == n ? void 0 : n.channel_id)),
        { shouldHideMediaOptions: C, shouldRedactExplicitContent: h, gifAutoPlay: E, getGifFavButton: I, getOnMediaItemContextMenu: T } = (0, o.c)();
    if (null == n || null == t) return null;
    let x = e.items.map((e) => (0, u.j0)(e.media, p.VqG, C, h)).filter(f.lm),
        N = {
            source: 'Media Mosaic',
            guild_id: t.guild_id,
            channel_id: t.id,
            channel_type: t.type
        },
        v = x.length > 1 ? (0, u.Cx)(x, N) : {};
    function g(e, n) {
        let t = e.originalItem;
        return (0, a.lK)(t.media, n, t.spoiler);
    }
    let b = e.items.map((e) => {
        let t = e.media,
            l = null == T ? void 0 : T(t),
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
                autoPlayGif: E,
                getObscureReason: g,
                renderImageComponent: r.a,
                renderVideoComponent: r.r,
                renderAudioComponent: p.dG4,
                renderPlaintextFilePreview: p.dG4,
                renderGenericFileComponent: p.dG4,
                renderMosaicItemFooter: p.dG4,
                gifFavoriteButton: I(t),
                onPlay: (e, n, t) => {},
                canRemoveItem: !1,
                onRemoveItem: p.dG4
            },
            a = (0, m.q)({
                proxyURL: t.proxyUrl,
                url: t.url
            });
        return a in v && (i.onClick = v[a]), i;
    });
    return (0, l.jsx)('div', { children: (0, l.jsx)(s.Z, { items: b }) });
}
