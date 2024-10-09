t.d(n, {
    Z: function () {
        return C;
    }
});
var l = t(735250);
t(470079);
var i = t(442837),
    a = t(169525),
    r = t(499376),
    o = t(611170),
    s = t(128854),
    c = t(884182),
    u = t(780088),
    d = t(592125),
    m = t(52824),
    f = t(823379),
    _ = t(970184),
    p = t(981631);
function C(e) {
    let { message: n } = (0, _.CJ)(),
        t = (0, i.e7)([d.Z], () => d.Z.getChannel(null == n ? void 0 : n.channel_id)),
        { shouldHideMediaOptions: C, shouldRedactExplicitContent: h, gifAutoPlay: I, getGifFavButton: x, getOnMediaItemContextMenu: E } = (0, s.c)();
    if (null == n || null == t) return null;
    let v = e.items.map((e) => (0, u.j0)(e.media, p.VqG, C, h)).filter(f.lm),
        T = {
            source: 'Media Mosaic',
            guild_id: t.guild_id,
            channel_id: t.id,
            channel_type: t.type
        },
        N = v.length > 1 ? (0, u.Cx)(v, T) : {};
    function b(e, n) {
        let t = e.originalItem;
        return (0, a.lK)(t.media, n, t.spoiler);
    }
    let g = e.items.map((e) => {
        let t = e.media,
            l = null == E ? void 0 : E(t),
            i = {
                message: n,
                item: {
                    uniqueId: t.proxyUrl,
                    originalItem: e,
                    type: (0, r.pU)(t, !0),
                    downloadUrl: t.url,
                    height: t.height,
                    width: t.width,
                    spoiler: e.spoiler,
                    contentType: t.contentType
                },
                onContextMenu: l,
                autoPlayGif: I,
                getObscureReason: b,
                renderImageComponent: o.a,
                renderVideoComponent: o.r,
                renderAudioComponent: p.dG4,
                renderPlaintextFilePreview: p.dG4,
                renderGenericFileComponent: p.dG4,
                renderMosaicItemFooter: p.dG4,
                gifFavoriteButton: x(t),
                onPlay: (e, n, t) => {},
                canRemoveItem: !1,
                onRemoveItem: p.dG4
            },
            a = (0, m.q)({
                proxyURL: t.proxyUrl,
                url: t.url
            });
        return a in N && (i.onClick = N[a]), i;
    });
    return (0, l.jsx)('div', { children: (0, l.jsx)(c.Z, { items: g }) });
}
