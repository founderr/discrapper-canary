l.d(n, {
    Z: function () {
        return N;
    }
});
var t = l(735250);
l(470079);
var r = l(442837),
    i = l(169525),
    a = l(611170),
    s = l(128854),
    u = l(884182),
    o = l(546432),
    c = l(780088),
    d = l(592125),
    m = l(52824),
    p = l(823379),
    f = l(970184),
    E = l(981631);
function N(e) {
    let { message: n } = (0, f.CJ)(),
        l = (0, r.e7)([d.Z], () => d.Z.getChannel(null == n ? void 0 : n.channel_id)),
        { shouldHideMediaOptions: N, shouldRedactExplicitContent: C, gifAutoPlay: v, getGifFavButton: _, getOnMediaItemContextMenu: h } = (0, s.c)();
    if (null == n || null == l) return null;
    let x = e.items.map((e) => (0, c.j0)(e.media, E.VqG, N, C)).filter(p.lm),
        T = {
            source: 'Media Mosaic',
            guild_id: l.guild_id,
            channel_id: l.id,
            channel_type: l.type
        },
        I = x.length > 1 ? (0, c.Cx)(x, T) : {};
    function g(e, n) {
        let l = e.originalItem;
        return (0, i.lK)(l.media, n, l.spoiler);
    }
    let S = e.items.map((e) => {
        let l = e.media,
            t = null == h ? void 0 : h(l),
            r = {
                message: n,
                item: {
                    uniqueId: l.proxyUrl,
                    originalItem: e,
                    type: (0, o.pU)(l, !0),
                    downloadUrl: l.url,
                    height: l.height,
                    width: l.width,
                    spoiler: e.spoiler,
                    contentType: l.contentType
                },
                onContextMenu: t,
                autoPlayGif: v,
                getObscureReason: g,
                renderImageComponent: a.a,
                renderVideoComponent: a.r,
                renderAudioComponent: E.dG4,
                renderPlaintextFilePreview: E.dG4,
                renderGenericFileComponent: E.dG4,
                renderMosaicItemFooter: E.dG4,
                gifFavoriteButton: _(l),
                onPlay: (e, n, l) => {},
                canRemoveItem: !1,
                onRemoveItem: E.dG4
            },
            i = (0, m.q)({
                proxyURL: l.proxyUrl,
                url: l.url
            });
        return i in I && (r.onClick = I[i]), r;
    });
    return (0, t.jsx)('div', { children: (0, t.jsx)(u.Z, { items: S }) });
}
