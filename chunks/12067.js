l.d(n, {
    Z: function () {
        return f;
    }
});
var t = l(735250);
l(470079);
var r = l(442837),
    a = l(169525),
    i = l(611170),
    s = l(128854),
    u = l(884182),
    o = l(546432),
    c = l(780088),
    d = l(592125),
    m = l(52824),
    E = l(823379),
    p = l(970184),
    N = l(981631);
function f(e) {
    let { message: n } = (0, p.CJ)(),
        l = (0, r.e7)([d.Z], () => d.Z.getChannel(null == n ? void 0 : n.channel_id)),
        { shouldHideMediaOptions: f, shouldRedactExplicitContent: _, gifAutoPlay: C, getGifFavButton: T, getOnMediaItemContextMenu: v } = (0, s.c)();
    if (null == n || null == l) return null;
    let h = e.items.map((e) => (0, c.j0)(e.media, N.VqG, f, _)).filter(E.lm),
        x = {
            source: 'Media Mosaic',
            guild_id: l.guild_id,
            channel_id: l.id,
            channel_type: l.type
        },
        I = h.length > 1 ? (0, c.Cx)(h, x) : {};
    function S(e, n) {
        let l = e.originalItem;
        return (0, a.lK)(l.media, n, l.spoiler);
    }
    let O = e.items.map((e) => {
        let l = e.media,
            t = null == v ? void 0 : v(l),
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
                autoPlayGif: C,
                getObscureReason: S,
                renderImageComponent: i.a,
                renderVideoComponent: i.r,
                renderAudioComponent: N.dG4,
                renderPlaintextFilePreview: N.dG4,
                renderGenericFileComponent: N.dG4,
                renderMosaicItemFooter: N.dG4,
                gifFavoriteButton: T(l),
                onPlay: (e, n, l) => {},
                canRemoveItem: !1,
                onRemoveItem: N.dG4
            },
            a = (0, m.q)({
                proxyURL: l.proxyUrl,
                url: l.url
            });
        return a in I && (r.onClick = I[a]), r;
    });
    return (0, t.jsx)('div', { children: (0, t.jsx)(u.Z, { items: O }) });
}
