n.d(i, {
    Z: function () {
        return U;
    }
}),
    n(47120),
    n(773603);
var t = n(200651),
    a = n(192379),
    l = n(392711),
    s = n(442837),
    o = n(481060),
    r = n(640108),
    c = n(406432),
    d = n(169525),
    m = n(786761),
    u = n(499376),
    _ = n(3148),
    h = n(492593),
    A = n(219797),
    p = n(524444),
    I = n(884182),
    x = n(25015),
    T = n(963550),
    E = n(845080),
    C = n(594174),
    g = n(956664),
    f = n(709054),
    S = n(236289),
    v = n(788080),
    N = n(800530),
    L = n(981631),
    j = n(217702),
    y = n(530124);
let O = (e, i, n, t) => {
        let a = e.attachments.map((e) => {
            var n, t, a, l;
            let s = {
                ...e,
                filename: (0, v.eS)(e),
                size: 0,
                proxy_url: e.url
            };
            if (!((0, c.CO)(e.filename) || (0, c.NU)(e.filename))) return s;
            return {
                ...s,
                width: null !== (a = null === (n = i[e.id]) || void 0 === n ? void 0 : n.width) && void 0 !== a ? a : N.Sv,
                height: null !== (l = null === (t = i[e.id]) || void 0 === t ? void 0 : t.height) && void 0 !== l ? l : N.EY
            };
        });
        return (0, m.e5)({
            ...(0, _.ZP)({
                author:
                    null != n
                        ? n
                        : {
                              id: '',
                              avatar: void 0,
                              discriminator: '0000',
                              username: t
                          },
                nonce: e.id,
                content: e.content,
                type: L.uaV.DEFAULT,
                channelId: L.lds
            }),
            timestamp: new Date(f.default.extractTimestamp(e.id)).toISOString(),
            attachments: a,
            state: L.yb.SENT
        });
    },
    D = (e) => {
        let { message: i } = e,
            { attachments: n } = i;
        if (0 === n.length) return null;
        let a = (e, i, n) => {
                let a = N.Sv,
                    s = N.EY;
                if (null != i.width && null != i.height) {
                    let e = (0, g.Dc)({
                        width: i.width,
                        height: i.height,
                        maxWidth: N.Sv,
                        maxHeight: N.EY
                    });
                    (a = (0, l.clamp)(Math.round(i.width * e), 0, N.Sv)), (s = (0, l.clamp)(Math.round(i.height * e), 0, N.EY));
                }
                return (0, t.jsx)('div', {
                    style: {
                        width: n ? a : '100%',
                        height: n ? s : '100%'
                    },
                    children: (0, t.jsx)(r.ZP, {
                        className: e.className,
                        forceExternal: !1,
                        src: i.url,
                        width: n ? a : '100%',
                        height: n ? s : '100%',
                        responsive: !0,
                        volume: e.volume,
                        autoPlay: !1,
                        autoMute: !1,
                        type: r.ZP.Types.VIDEO,
                        mediaLayoutType: e.mediaLayoutType,
                        fileName: i.filename,
                        fileSize: null == i.size ? void 0 : i.size.toString(),
                        playable: !0,
                        renderLinkComponent: p.iT,
                        onClick: e.onClick,
                        onPlay: e.onPlay,
                        onEnded: e.onEnded,
                        onVolumeChange: e.onVolumeChange,
                        onMute: e.onMute,
                        downloadable: !1
                    })
                });
            },
            s = 1 === n.length;
        function o(e, i) {
            return (0, d.dn)(e.originalItem, i);
        }
        return (0, t.jsx)('div', {
            className: y.classificationEvidenceMessageAttachment,
            children: (0, t.jsx)(I.Z, {
                items: n.map((e) => ({
                    item: {
                        uniqueId: e.id,
                        originalItem: e,
                        type: (0, u.aw)(e, !0),
                        downloadUrl: e.proxy_url,
                        height: e.height,
                        width: e.width,
                        spoiler: e.spoiler,
                        contentType: e.content_type
                    },
                    message: i,
                    mediaLayoutType: j.hV.MOSAIC,
                    autoPlayGif: !1,
                    canRemoveItem: !1,
                    isSingleMosaicItem: s,
                    onRemoveItem: l.noop,
                    renderVideoComponent: (i) => a(i, e, s),
                    renderImageComponent: (e) =>
                        (0, t.jsx)(A.dS, {
                            ...e,
                            hiddenSpoilers: !0,
                            shouldHideMediaOptions: !0,
                            shouldLink: !1
                        }),
                    renderAudioComponent: A.q7,
                    renderPlaintextFilePreview: A.d4,
                    renderGenericFileComponent: A.ZK,
                    renderMosaicItemFooter: A.L9,
                    getObscureReason: o,
                    gifFavoriteButton: () => null
                }))
            })
        });
    };
function U(e) {
    var i;
    let { flaggedContent: n } = e,
        l = (0, s.e7)([C.default], () => C.default.getCurrentUser()),
        [r, d] = a.useState({}),
        [m, u] = a.useState(!0),
        _ = (0, s.e7)([S.Z], () => S.Z.getUsername()),
        A = n[0],
        p = O(A, r, l, _),
        I = (0, x.Z)(p, {
            hideSimpleEmbedContent: !1,
            allowList: !1,
            allowHeading: !1,
            allowLinks: !1,
            previewLinkTarget: !1
        });
    return (a.useEffect(() => {
        Promise.all(
            A.attachments
                .filter((e) => {
                    let { filename: i } = e;
                    return (0, c.CO)(i) || (0, c.NU)(i);
                })
                .map((e) => {
                    var i;
                    return ((i = e),
                    new Promise((e, n) => {
                        if ((0, c.CO)(i.filename)) {
                            let t = new Image();
                            (t.src = i.url),
                                (t.onload = () => {
                                    e(t);
                                }),
                                (t.onerror = () => {
                                    n();
                                });
                        } else if ((0, c.NU)(i.filename)) {
                            let t = document.createElement('video');
                            (t.src = i.url),
                                (t.onloadedmetadata = () => {
                                    let i = t.videoWidth;
                                    e({
                                        width: i,
                                        height: t.videoHeight
                                    });
                                }),
                                (t.onerror = () => {
                                    n();
                                });
                        } else
                            e({
                                width: 0,
                                height: 0
                            });
                    })).then((i) =>
                        d((n) => ({
                            ...n,
                            [e.id]: i
                        }))
                    );
                })
        ).finally(() => u(!1));
    }, [A.attachments]),
    '' === p.content && 0 === p.attachments.length)
        ? null
        : (0, t.jsx)('div', {
              className: y.classificationEvidenceCard,
              children: m
                  ? (0, t.jsx)(o.Spinner, {})
                  : (0, t.jsx)(h.Z, {
                        compact: !1,
                        childrenHeader: (0, E.Z)({
                            author: {
                                ...l,
                                colorString: '',
                                nick: null !== (i = null == l ? void 0 : l.username) && void 0 !== i ? i : _
                            },
                            message: p,
                            channel: void 0,
                            guildId: void 0,
                            compact: !1,
                            animateAvatar: !1,
                            isGroupStart: !0,
                            roleIcon: void 0,
                            hideTimestamp: !1
                        }),
                        childrenAccessories: (0, t.jsx)(D, { message: p }),
                        childrenMessageContent: (0, T.Z)({ message: p }, I.content),
                        hasThread: !1,
                        hasReply: !1
                    })
          });
}
