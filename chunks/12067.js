l.d(n, {
    Z: function () {
        return C;
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
    E = l(823379),
    f = l(970184),
    p = l(981631);
function C(e) {
    let { message: n } = (0, f.CJ)(),
        l = (0, r.e7)([d.Z], () => d.Z.getChannel(null == n ? void 0 : n.channel_id)),
        { shouldHideMediaOptions: C, shouldRedactExplicitContent: N, gifAutoPlay: _, getGifFavButton: v, getOnMediaItemContextMenu: T } = (0, s.c)();
    if (null == n || null == l) return null;
    let h = e.items.map((e) => (0, c.j0)(e.media, p.VqG, C, N)).filter(E.lm),
        I = {
            source: 'Media Mosaic',
            guild_id: l.guild_id,
            channel_id: l.id,
            channel_type: l.type
        },
        x = h.length > 1 ? (0, c.Cx)(h, I) : {};
    function O(e, n) {
        let l = e.originalItem;
        return (0, i.lK)(l.media, n, l.spoiler);
    }
    let S = e.items.map((e) => {
        let l = e.media,
            t = null == T ? void 0 : T(l),
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
                autoPlayGif: _,
                getObscureReason: O,
                renderImageComponent: a.a,
                renderVideoComponent: a.r,
                renderAudioComponent: p.dG4,
                renderPlaintextFilePreview: p.dG4,
                renderGenericFileComponent: p.dG4,
                renderMosaicItemFooter: p.dG4,
                gifFavoriteButton: v(l),
                onPlay: (e, n, l) => {},
                canRemoveItem: !1,
                onRemoveItem: p.dG4
            },
            i = (0, m.q)({
                proxyURL: l.proxyUrl,
                url: l.url
            });
        return i in x && (r.onClick = x[i]), r;
    });
    return (0, t.jsx)('div', { children: (0, t.jsx)(u.Z, { items: S }) });
}
