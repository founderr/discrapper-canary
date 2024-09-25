n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(169525),
    o = n(499376),
    s = n(611170),
    l = n(128854),
    u = n(884182),
    c = n(780088),
    d = n(592125),
    _ = n(52824),
    E = n(823379),
    f = n(970184),
    h = n(981631);
function p(e) {
    let { message: t } = (0, f.CJ)(),
        n = (0, i.e7)([d.Z], () => d.Z.getChannel(null == t ? void 0 : t.channel_id)),
        { shouldHideMediaOptions: p, shouldRedactExplicitContent: m, gifAutoPlay: I, getGifFavButton: T, getOnMediaItemContextMenu: g } = (0, l.c)();
    if (null == t || null == n) return null;
    let S = e.items.map((e) => (0, c.j0)(e.media, h.VqG, p, m)).filter(E.lm),
        A = {
            source: 'Media Mosaic',
            guild_id: n.guild_id,
            channel_id: n.id,
            channel_type: n.type
        },
        v = S.length > 1 ? (0, c.Cx)(S, A) : {};
    function N(e, t) {
        let n = e.originalItem;
        return (0, a.lK)(n.media, t, n.spoiler);
    }
    let O = e.items.map((e) => {
        let n = e.media,
            r = (e, t, n) => {},
            i = null == g ? void 0 : g(n),
            a = {
                message: t,
                item: {
                    uniqueId: n.proxyUrl,
                    originalItem: e,
                    type: (0, o.pU)(n, !0),
                    downloadUrl: n.url,
                    height: n.height,
                    width: n.width,
                    spoiler: e.spoiler,
                    contentType: n.contentType
                },
                onContextMenu: i,
                autoPlayGif: I,
                getObscureReason: N,
                renderImageComponent: s.a,
                renderVideoComponent: s.r,
                renderAudioComponent: h.dG4,
                renderPlaintextFilePreview: h.dG4,
                renderGenericFileComponent: h.dG4,
                renderMosaicItemFooter: h.dG4,
                gifFavoriteButton: T(n),
                onPlay: r,
                canRemoveItem: !1,
                onRemoveItem: h.dG4
            },
            l = (0, _.q)({
                proxyURL: n.proxyUrl,
                url: n.url
            });
        return l in v && (a.onClick = v[l]), a;
    });
    return (0, r.jsx)('div', { children: (0, r.jsx)(u.Z, { items: O }) });
}
