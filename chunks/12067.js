l.d(n, {
    Z: function () {
        return v;
    }
});
var t = l(200651);
l(192379);
var i = l(442837),
    r = l(768494),
    a = l(169525),
    s = l(499376),
    o = l(611170),
    u = l(128854),
    c = l(884182),
    d = l(94396),
    m = l(592125),
    p = l(52824),
    f = l(970184),
    x = l(981631);
function v(e) {
    let { message: n } = (0, f.CJ)(),
        l = (0, i.e7)([m.Z], () => m.Z.getChannel(null == n ? void 0 : n.channel_id)),
        { shouldHideMediaOptions: v, shouldRedactExplicitContent: h, gifAutoPlay: C, getGifFavButton: g, getOnMediaItemContextMenu: j } = (0, u.c)();
    if (null == n || null == l) return null;
    let S = e.items
            .map((e) => ({
                ...(0, r.y_)(e.media),
                original: e.media.url,
                srcIsAnimated: e.media.srcIsAnimated
            }))
            .filter((e) => 'INVALID' !== e.type),
        I = {
            source: 'Media Mosaic',
            guild_id: l.guild_id,
            channel_id: l.id,
            channel_type: l.type
        },
        N =
            S.length > 1
                ? (0, d._)(
                      S,
                      {
                          shouldHideMediaOptions: v,
                          shouldRedactExplicitContent: h
                      },
                      I
                  )
                : {};
    function E(e, n) {
        let l = e.originalItem;
        return (0, a.lK)(l.media, n, l.spoiler);
    }
    let b = e.items.map((e) => {
        let l = e.media,
            t = null == j ? void 0 : j(l),
            i = {
                message: n,
                item: {
                    uniqueId: l.proxyUrl,
                    originalItem: e,
                    type: (0, s.pU)(l, !0),
                    downloadUrl: l.url,
                    height: l.height,
                    width: l.width,
                    spoiler: e.spoiler,
                    contentType: l.contentType
                },
                onContextMenu: t,
                autoPlayGif: C,
                getObscureReason: E,
                renderImageComponent: o.a,
                renderVideoComponent: o.r,
                renderAudioComponent: x.dG4,
                renderPlaintextFilePreview: x.dG4,
                renderGenericFileComponent: x.dG4,
                renderMosaicItemFooter: x.dG4,
                gifFavoriteButton: g(l),
                onPlay: (e, n, l) => {},
                canRemoveItem: !1,
                onRemoveItem: x.dG4
            },
            r = (0, p.q)({
                proxyURL: l.proxyUrl,
                url: l.url
            });
        return r in N && (i.onClick = N[r]), i;
    });
    return (0, t.jsx)('div', { children: (0, t.jsx)(c.Z, { items: b }) });
}
