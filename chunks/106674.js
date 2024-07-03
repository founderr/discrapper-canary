n.d(t, {
    Z: function () {
        return O;
    }
}), n(47120);
var i = n(735250), s = n(470079), a = n(442837), r = n(692547), l = n(481060), o = n(287734), c = n(872810), d = n(367907), u = n(835473), _ = n(871118), h = n(543882), E = n(314897), I = n(944486), m = n(594174), g = n(366695), p = n(602623), T = n(51144), S = n(498058), f = n(158631), C = n(143614), N = n(981631), A = n(70722), Z = n(689938), L = n(106963);
function v(e) {
    let {users: t} = e;
    return (0, i.jsxs)('div', {
        className: L.viewers,
        children: [
            (0, i.jsx)(l.VoiceNormalIcon, {
                size: 'custom',
                width: 16,
                height: 16,
                color: r.Z.colors.HEADER_PRIMARY.css
            }),
            (0, i.jsx)(p.Z, {
                showUserPopout: !0,
                useFallbackUserForPopout: !0,
                users: t,
                max: 6,
                size: p.u.SIZE_24
            })
        ]
    });
}
function O(e) {
    var t;
    let {broadcast: n} = e, {
            userId: r,
            applicationId: p,
            channelId: O,
            streamKey: R
        } = n, [x, b] = s.useState(!1), P = (0, a.e7)([m.default], () => m.default.getUser(r)), [M] = (0, u.Z)([p]), D = null !== (t = T.ZP.getGlobalName(P)) && void 0 !== t ? t : T.ZP.getUserTag(P), y = (0, C.Z)(), j = (0, a.e7)([h.Z], () => h.Z.getPreviewURL(null, O, r)), U = (0, a.e7)([I.Z], () => I.Z.getVoiceChannelId()), G = (0, f.ZP)(), k = (0, S.Z)(O);
    if (s.useEffect(() => {
            x && U === O && b(!1);
        }, [
            U,
            x,
            O
        ]), null == P || null == D)
        return null;
    let {
        buttonColor: w,
        buttonCTA: B,
        disabled: H
    } = function (e, t) {
        let n = E.default.getId(), i = t.some(e => e.id === n) || e === n, s = t.length >= N.keq;
        return {
            buttonColor: s ? l.ButtonColors.RED : l.ButtonColors.GREEN,
            buttonCTA: s ? Z.Z.Messages.BROADCAST_FULL : i ? Z.Z.Messages.VIEW_BROADCAST : Z.Z.Messages.JOIN_BROADCAST,
            disabled: s
        };
    }(r, k);
    return (0, i.jsxs)('div', {
        className: L.container,
        children: [
            (0, i.jsx)(l.Avatar, {
                size: l.AvatarSizes.SIZE_32,
                src: P.getAvatarURL(null, 32),
                'aria-label': D
            }),
            (0, i.jsxs)('div', {
                className: L.details,
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/semibold',
                        children: D
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: null != M ? Z.Z.Messages.STREAMING.format({ name: M.name }) : Z.Z.Messages.STREAMING_A_GAME
                    }),
                    (0, i.jsxs)('div', {
                        className: L.activity,
                        children: [
                            k.length > 0 && (0, i.jsx)(v, { users: k }),
                            (0, i.jsxs)(l.Button, {
                                onClick: () => {
                                    if (U === O) {
                                        o.default.selectPrivateChannel(O);
                                        return;
                                    }
                                    b(!0), (0, c.W1)(O, R), d.ZP.trackWithMetadata(N.rMx.BROADCAST_VIEWED, {
                                        num_active_broadcasts: y.length,
                                        broadcast_position: y.findIndex(e => e.userId === r) + 1,
                                        is_broadcasting: G,
                                        broadcast_channel_id: O
                                    });
                                },
                                color: w,
                                size: l.ButtonSizes.SMALL,
                                className: L.button,
                                disabled: H,
                                innerClassName: L.innerButton,
                                children: [
                                    (0, i.jsx)(l.MicrophoneArrowRightIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 16,
                                        height: 16
                                    }),
                                    B
                                ]
                            })
                        ]
                    })
                ]
            }),
            null != j ? (0, i.jsx)(_.Z, {
                className: L.stream,
                stream: {
                    streamType: A.lo.CALL,
                    ownerId: r,
                    channelId: O
                }
            }) : (0, i.jsx)(g.Z, {
                game: M,
                size: g.Z.Sizes.LARGE,
                className: L.gameIcon
            })
        ]
    });
}
