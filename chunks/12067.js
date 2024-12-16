t.d(n, {
    Z: function () {
        return h;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(768494),
    a = t(169525),
    o = t(499376),
    s = t(611170),
    c = t(128854),
    u = t(884182),
    d = t(94396),
    m = t(592125),
    f = t(52824),
    p = t(970184),
    x = t(981631);
function h(e) {
    let { message: n } = (0, p.CJ)(),
        t = (0, i.e7)([m.Z], () => m.Z.getChannel(null == n ? void 0 : n.channel_id)),
        { shouldHideMediaOptions: h, shouldRedactExplicitContent: v, gifAutoPlay: C, getGifFavButton: _, getOnMediaItemContextMenu: g } = (0, c.c)();
    if (null == n || null == t) return null;
    let I = e.items
            .map((e) => ({
                ...(0, r.y_)(e.media),
                original: e.media.url,
                srcIsAnimated: e.media.srcIsAnimated
            }))
            .filter((e) => 'INVALID' !== e.type),
        b = {
            source: 'Media Mosaic',
            guild_id: t.guild_id,
            channel_id: t.id,
            channel_type: t.type
        },
        j =
            I.length > 1
                ? (0, d._)(
                      I,
                      {
                          shouldHideMediaOptions: h,
                          shouldRedactExplicitContent: v
                      },
                      b
                  )
                : {};
    function S(e, n) {
        let t = e.originalItem;
        return (0, a.lK)(t.media, n, t.spoiler);
    }
    let N = e.items.map((e, t) => {
        let l = e.media,
            i = null == g ? void 0 : g(l),
            r = {
                message: n,
                item: {
                    uniqueId: ''.concat(l.proxyUrl, '--').concat(t),
                    originalItem: e,
                    type: (0, o.pU)(l),
                    downloadUrl: l.url,
                    height: l.height,
                    width: l.width,
                    spoiler: e.spoiler,
                    contentType: l.contentType,
                    srcIsAnimated: l.srcIsAnimated
                },
                onContextMenu: i,
                autoPlayGif: C,
                getObscureReason: S,
                renderImageComponent: s.aB,
                renderVideoComponent: s.rJ,
                renderVisualPlaceholderComponent: s.yF,
                renderAudioComponent: x.dG4,
                renderPlaintextFilePreview: x.dG4,
                renderGenericFileComponent: x.dG4,
                renderMosaicItemFooter: x.dG4,
                gifFavoriteButton: _(l),
                onPlay: (e, n, t) => {},
                canRemoveItem: !1,
                onRemoveItem: x.dG4
            },
            a = (0, f.q)({
                proxyURL: l.proxyUrl,
                url: l.url
            });
        return a in j && (r.onClick = j[a]), r;
    });
    return (0, l.jsx)('div', { children: (0, l.jsx)(u.Z, { items: N }) });
}
