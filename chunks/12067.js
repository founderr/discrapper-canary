t.d(n, {
    Z: function () {
        return C;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    a = t(768494),
    r = t(169525),
    o = t(499376),
    s = t(611170),
    c = t(128854),
    u = t(884182),
    d = t(94396),
    m = t(592125),
    _ = t(52824),
    f = t(970184),
    p = t(981631);
function C(e) {
    let { message: n } = (0, f.CJ)(),
        t = (0, i.e7)([m.Z], () => m.Z.getChannel(null == n ? void 0 : n.channel_id)),
        { shouldHideMediaOptions: C, shouldRedactExplicitContent: h, gifAutoPlay: I, getGifFavButton: E, getOnMediaItemContextMenu: x } = (0, c.c)();
    if (null == n || null == t) return null;
    let v = e.items
            .map((e) => ({
                ...(0, a.y_)(e.media),
                original: e.media.url,
                srcIsAnimated: e.media.srcIsAnimated
            }))
            .filter((e) => 'INVALID' !== e.type),
        T = {
            source: 'Media Mosaic',
            guild_id: t.guild_id,
            channel_id: t.id,
            channel_type: t.type
        },
        N =
            v.length > 1
                ? (0, d._)(
                      v,
                      {
                          shouldHideMediaOptions: C,
                          shouldRedactExplicitContent: h
                      },
                      T
                  )
                : {};
    function b(e, n) {
        let t = e.originalItem;
        return (0, r.lK)(t.media, n, t.spoiler);
    }
    let g = e.items.map((e) => {
        let t = e.media,
            l = null == x ? void 0 : x(t),
            i = {
                message: n,
                item: {
                    uniqueId: t.proxyUrl,
                    originalItem: e,
                    type: (0, o.pU)(t, !0),
                    downloadUrl: t.url,
                    height: t.height,
                    width: t.width,
                    spoiler: e.spoiler,
                    contentType: t.contentType
                },
                onContextMenu: l,
                autoPlayGif: I,
                getObscureReason: b,
                renderImageComponent: s.a,
                renderVideoComponent: s.r,
                renderAudioComponent: p.dG4,
                renderPlaintextFilePreview: p.dG4,
                renderGenericFileComponent: p.dG4,
                renderMosaicItemFooter: p.dG4,
                gifFavoriteButton: E(t),
                onPlay: (e, n, t) => {},
                canRemoveItem: !1,
                onRemoveItem: p.dG4
            },
            a = (0, _.q)({
                proxyURL: t.proxyUrl,
                url: t.url
            });
        return a in N && (i.onClick = N[a]), i;
    });
    return (0, l.jsx)('div', { children: (0, l.jsx)(u.Z, { items: g }) });
}
