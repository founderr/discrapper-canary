i.d(t, {
    Z: function () {
        return U;
    }
}),
    i(47120),
    i(773603);
var n = i(200651),
    a = i(192379),
    l = i(392711),
    o = i(442837),
    s = i(481060),
    r = i(640108),
    c = i(406432),
    d = i(169525),
    u = i(786761),
    m = i(499376),
    h = i(3148),
    p = i(492593),
    x = i(219797),
    f = i(524444),
    g = i(884182),
    v = i(25015),
    _ = i(963550),
    A = i(845080),
    E = i(594174),
    T = i(956664),
    C = i(709054),
    j = i(236289),
    N = i(788080),
    y = i(800530),
    S = i(981631),
    I = i(217702),
    L = i(453486);
let w = (e, t, i, n) => {
        let a = e.attachments.map((e) => {
            var i, n, a, l;
            let o = {
                ...e,
                filename: (0, N.eS)(e),
                size: 0,
                proxy_url: e.url
            };
            if (!((0, c.CO)(e.filename) || (0, c.NU)(e.filename))) return o;
            return {
                ...o,
                width: null !== (a = null === (i = t[e.id]) || void 0 === i ? void 0 : i.width) && void 0 !== a ? a : y.Sv,
                height: null !== (l = null === (n = t[e.id]) || void 0 === n ? void 0 : n.height) && void 0 !== l ? l : y.EY
            };
        });
        return (0, u.e5)({
            ...(0, h.ZP)({
                author:
                    null != i
                        ? i
                        : {
                              id: '',
                              avatar: void 0,
                              discriminator: '0000',
                              username: n
                          },
                nonce: e.id,
                content: e.content,
                type: S.uaV.DEFAULT,
                channelId: S.lds
            }),
            timestamp: new Date(C.default.extractTimestamp(e.id)).toISOString(),
            attachments: a,
            state: S.yb.SENT
        });
    },
    P = (e) => {
        let { message: t } = e,
            { attachments: i } = t;
        if (0 === i.length) return null;
        let a = (e, t, i) => {
                let a = y.Sv,
                    o = y.EY;
                if (null != t.width && null != t.height) {
                    let e = (0, T.Dc)({
                        width: t.width,
                        height: t.height,
                        maxWidth: y.Sv,
                        maxHeight: y.EY
                    });
                    (a = (0, l.clamp)(Math.round(t.width * e), 0, y.Sv)), (o = (0, l.clamp)(Math.round(t.height * e), 0, y.EY));
                }
                return (0, n.jsx)('div', {
                    style: {
                        width: i ? a : '100%',
                        height: i ? o : '100%'
                    },
                    children: (0, n.jsx)(r.ZP, {
                        className: e.className,
                        forceExternal: !1,
                        src: t.url,
                        width: i ? a : '100%',
                        height: i ? o : '100%',
                        responsive: !0,
                        volume: e.volume,
                        autoPlay: !1,
                        autoMute: !1,
                        type: r.ZP.Types.VIDEO,
                        mediaLayoutType: e.mediaLayoutType,
                        fileName: t.filename,
                        fileSize: null == t.size ? void 0 : t.size.toString(),
                        playable: !0,
                        renderLinkComponent: f.iT,
                        onClick: e.onClick,
                        onPlay: e.onPlay,
                        onEnded: e.onEnded,
                        onVolumeChange: e.onVolumeChange,
                        onMute: e.onMute,
                        downloadable: !1
                    })
                });
            },
            o = 1 === i.length;
        function s(e, t) {
            return (0, d.dn)(e.originalItem, t);
        }
        return (0, n.jsx)('div', {
            className: L.classificationEvidenceMessageAttachment,
            children: (0, n.jsx)(g.Z, {
                items: i.map((e) => ({
                    item: {
                        uniqueId: e.id,
                        originalItem: e,
                        type: (0, m.aw)(e, !0),
                        downloadUrl: e.proxy_url,
                        height: e.height,
                        width: e.width,
                        spoiler: e.spoiler,
                        contentType: e.content_type
                    },
                    message: t,
                    mediaLayoutType: I.hV.MOSAIC,
                    autoPlayGif: !1,
                    canRemoveItem: !1,
                    isSingleMosaicItem: o,
                    onRemoveItem: l.noop,
                    renderVideoComponent: (t) => a(t, e, o),
                    renderImageComponent: (e) =>
                        (0, n.jsx)(x.dS, {
                            ...e,
                            hiddenSpoilers: !0,
                            shouldHideMediaOptions: !0,
                            shouldLink: !1
                        }),
                    renderAudioComponent: x.q7,
                    renderPlaintextFilePreview: x.d4,
                    renderGenericFileComponent: x.ZK,
                    renderMosaicItemFooter: x.L9,
                    getObscureReason: s,
                    gifFavoriteButton: () => null
                }))
            })
        });
    };
function U(e) {
    var t;
    let { flaggedContent: i } = e,
        l = (0, o.e7)([E.default], () => E.default.getCurrentUser()),
        [r, d] = a.useState({}),
        [u, m] = a.useState(!0),
        h = (0, o.e7)([j.Z], () => j.Z.getUsername()),
        x = i[0],
        f = w(x, r, l, h),
        g = (0, v.Z)(f, {
            hideSimpleEmbedContent: !1,
            allowList: !1,
            allowHeading: !1,
            allowLinks: !1,
            previewLinkTarget: !1
        });
    return (a.useEffect(() => {
        Promise.all(
            x.attachments
                .filter((e) => {
                    let { filename: t } = e;
                    return (0, c.CO)(t) || (0, c.NU)(t);
                })
                .map((e) => {
                    var t;
                    return ((t = e),
                    new Promise((e, i) => {
                        if ((0, c.CO)(t.filename)) {
                            let n = new Image();
                            (n.src = t.url),
                                (n.onload = () => {
                                    e(n);
                                }),
                                (n.onerror = () => {
                                    i();
                                });
                        } else if ((0, c.NU)(t.filename)) {
                            let n = document.createElement('video');
                            (n.src = t.url),
                                (n.onloadedmetadata = () => {
                                    let t = n.videoWidth;
                                    e({
                                        width: t,
                                        height: n.videoHeight
                                    });
                                }),
                                (n.onerror = () => {
                                    i();
                                });
                        } else
                            e({
                                width: 0,
                                height: 0
                            });
                    })).then((t) =>
                        d((i) => ({
                            ...i,
                            [e.id]: t
                        }))
                    );
                })
        ).finally(() => m(!1));
    }, [x.attachments]),
    '' === f.content && 0 === f.attachments.length)
        ? null
        : (0, n.jsx)('div', {
              className: L.classificationEvidenceCard,
              children: u
                  ? (0, n.jsx)(s.Spinner, {})
                  : (0, n.jsx)(p.Z, {
                        compact: !1,
                        childrenHeader: (0, A.Z)({
                            author: {
                                ...l,
                                colorString: '',
                                nick: null !== (t = null == l ? void 0 : l.username) && void 0 !== t ? t : h
                            },
                            message: f,
                            channel: void 0,
                            guildId: void 0,
                            compact: !1,
                            animateAvatar: !1,
                            isGroupStart: !0,
                            roleIcon: void 0,
                            hideTimestamp: !1
                        }),
                        childrenAccessories: (0, n.jsx)(P, { message: f }),
                        childrenMessageContent: (0, _.Z)({ message: f }, g.content),
                        hasThread: !1,
                        hasReply: !1
                    })
          });
}
