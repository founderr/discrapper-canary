n.d(t, {
    Z: function () {
        return U;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    s = n(481060),
    u = n(239091),
    c = n(765250),
    d = n(13245),
    h = n(872810),
    f = n(586902),
    p = n(835473),
    m = n(415635),
    v = n(933557),
    g = n(701362),
    E = n(552282),
    _ = n(565799),
    C = n(501655),
    S = n(597998),
    Z = n(199902),
    I = n(314897),
    x = n(592125),
    N = n(355863),
    O = n(131951),
    T = n(944486),
    y = n(938475),
    b = n(237997),
    A = n(136015),
    L = n(51144),
    R = n(145597),
    k = n(388627),
    M = n(981631),
    w = n(65154),
    P = n(368430);
function j(e) {
    let { avatarSize: t, userId: n, channelId: l, guildId: r } = e,
        o = 2 * t,
        a = -(t / 2);
    return (0, i.jsx)('div', {
        className: P.effect,
        style: {
            top: a,
            left: a,
            width: o,
            height: o
        },
        children: (0, i.jsx)(m.Z, {
            userId: n,
            channelId: l,
            guildId: r,
            containerDimensions: {
                width: o,
                height: o
            }
        })
    });
}
function D(e) {
    let { channel: t, flipped: n = !1, locked: r = !1, user: u, nick: c, displayNameMode: d, displayUserMode: p, size: m = M.ipw.LARGE, onClick: v, onContextMenu: E, context: _, guildId: C, voiceState: x, showStreamPreview: N, onShowStreamPreview: T, onWatchStream: y } = e,
        b = (0, a.e7)([I.default], () => I.default.getId() === u.id, [u.id]),
        [A, L, R] = (0, a.Wu)([O.Z], () => (b ? [!O.Z.isSupported() || O.Z.isSelfMute() || O.Z.isSelfMutedTemporarily(), O.Z.isSelfDeaf(), !1] : [!O.Z.isSupported() || O.Z.isLocalMute(u.id), !1, O.Z.isLocalVideoDisabled(u.id)]), [b, u.id]),
        k = (0, a.e7)([Z.Z], () => Z.Z.getCurrentUserActiveStream()),
        w = (0, a.Wu)([Z.Z], () => (null != k ? Z.Z.getViewerIds(k) : [])),
        D = (0, f.Z)({
            userId: u.id,
            context: _
        }),
        z = (0, a.e7)([Z.Z], () => Z.Z.getStreamForUser(u.id, C)),
        U = null != z,
        V = l.useMemo(() => null != k && k.ownerId !== u.id && w.includes(u.id), [k, u.id, w]),
        G = l.useCallback(() => T(null), [T]),
        W = l.useCallback(
            () =>
                (0, i.jsx)(g.Z, {
                    user: u,
                    channel: t,
                    onWatch: () => {
                        (0, h.rn)(z, {
                            forceMultiple: !0,
                            noFocus: !0
                        }),
                            G(),
                            y();
                    },
                    onAction: y,
                    previewIsOpen: N,
                    location: M.Sbl.UNLOCKED_OVERLAY,
                    hideTip: !0
                }),
            [u, t, z, N, G, y]
        );
    if (p === M.OYC.ONLY_WHILE_SPEAKING && r && !D) return null;
    let { mute: F, suppress: B, deaf: H } = x,
        Y = m === M.ipw.LARGE ? 32 : 24;
    return (0, i.jsxs)(s.Clickable, {
        className: o()(P.voiceUser, {
            [P.speaking]: D,
            [P.interactive]: !r,
            [P.flipped]: n
        }),
        onClick: r ? void 0 : (e) => (null == v ? void 0 : v(e, u)),
        onContextMenu: r ? void 0 : (e) => (null == E ? void 0 : E(e, u)),
        onMouseEnter: () => T(u.id),
        onMouseLeave: G,
        children: [
            (0, i.jsx)(s.Avatar, {
                className: P.avatar,
                size: m === M.ipw.LARGE ? s.AvatarSizes.SIZE_32 : s.AvatarSizes.SIZE_24,
                src: u.getAvatarURL(C, Y),
                'aria-hidden': !0
            }),
            (0, i.jsx)(j, {
                avatarSize: Y,
                userId: u.id,
                channelId: t.id,
                guildId: t.getGuildId()
            }),
            r && (d === M.wC$.NEVER || (!D && d === M.wC$.ONLY_WHILE_SPEAKING))
                ? null
                : (0, i.jsx)(s.Popout, {
                      position: 'right',
                      renderPopout: W,
                      shouldShow: N,
                      onRequestClose: G,
                      spacing: 0,
                      children: () =>
                          (0, i.jsxs)(s.Clickable, {
                              className: P.username,
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: c
                                  }),
                                  (0, i.jsx)(S.nm, {
                                      guildId: C,
                                      user: u,
                                      video: x.selfVideo,
                                      isStreaming: U,
                                      className: P.voiceIcons,
                                      iconClassName: P.voiceIcon,
                                      isWatching: V,
                                      localMute: A && !b,
                                      localVideoDisabled: R,
                                      mute: F || A,
                                      deaf: H || L,
                                      serverMute: F || B,
                                      serverDeaf: H,
                                      disabled: !1
                                  })
                              ]
                          })
                  })
        ]
    });
}
function z(e) {
    let { id: t, context: r = w.Yn.DEFAULT, channel: o, sortedVoiceStates: a, displayNameMode: s, displayUserMode: h, locked: f, pinned: p, isPreviewingInGame: m, anchorLeft: v, avatarSizeMode: g } = e,
        [E, _] = l.useState(null),
        C = (e, t) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('44378')]).then(n.bind(n, 881351));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        user: t,
                        showMediaItems: !0,
                        mediaEngineContext: r
                    });
            });
        },
        S = a.length > 0 && null != r && null != o && (!f || p),
        Z = l.useCallback(() => {
            var e, n;
            let i = null === (e = N.Z.getWidget(t)) || void 0 === e ? void 0 : e.layoutId,
                l = null != i ? (null === (n = N.Z.getWidgetsForLayout(i)) || void 0 === n ? void 0 : n.find((e) => e.type === M.Odu.GO_LIVE)) : null;
            null != l &&
                !l.pinned &&
                ((0, c.xh)(l.id),
                d.Z.track(M.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: !0,
                    guild_id: null == o ? void 0 : o.guild_id,
                    channel_id: null == o ? void 0 : o.id,
                    channel_type: null == o ? void 0 : o.type,
                    widget_type: M.Odu.GO_LIVE
                }));
        }, [o, t]);
    return S
        ? (0, i.jsx)(i.Fragment, {
              children: a.map((e) => {
                  var t;
                  let { user: n, voiceState: l, member: a } = e;
                  return null == n
                      ? null
                      : (0, i.jsx)(
                            D,
                            {
                                guildId: null == o ? void 0 : o.guild_id,
                                user: n,
                                nick: null !== (t = null == a ? void 0 : a.nick) && void 0 !== t ? t : L.ZP.getName(n),
                                flipped: !v,
                                voiceState: l,
                                displayNameMode: s,
                                displayUserMode: h,
                                size: g,
                                locked: f || m,
                                onContextMenu: C,
                                onClick: C,
                                context: r,
                                channel: o,
                                showStreamPreview: n.id === E,
                                onShowStreamPreview: _,
                                onWatchStream: Z
                            },
                            n.id
                        );
              })
          })
        : null;
}
function U(e) {
    var t;
    let n = (0, a.e7)([T.Z, x.Z], () => x.Z.getChannel(T.Z.getVoiceChannelId())),
        l = (0, v.ZP)(n),
        r = (function () {
            let [e] = (0, a.e7)(
                [y.ZP, _.Z, T.Z, x.Z],
                () => {
                    let e = x.Z.getChannel(T.Z.getVoiceChannelId());
                    return null == e ? [[], -1] : e.isGuildStageVoice() ? [_.Z.getMutableParticipants(e.id, C.pV.SPEAKER), _.Z.getParticipantsVersion(e.id)] : [y.ZP.getVoiceStatesForChannel(e), y.ZP.getVoiceStateVersion(e.getGuildId())];
                },
                [],
                A.Q
            );
            return e;
        })(),
        o = (0, a.e7)([Z.Z], () => Z.Z.getStreamerActiveStreamMetadata()),
        s = (0, k.II)(),
        u = (0, p.q)(null == s ? void 0 : s.id),
        c = (0, a.cj)([Z.Z, b.Z], () => {
            let e = Z.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: b.Z.getDisplayUserMode(),
                displayNameMode: b.Z.getDisplayNameMode(),
                avatarSizeMode: b.Z.getAvatarSizeMode(),
                streamApplication: (null == o ? void 0 : o.pid) === (0, R.QF)() ? (0, E.Z)(s) : null,
                stream: e
            };
        });
    return (0, i.jsx)(z, {
        ...c,
        application: u,
        ...e,
        sortedVoiceStates: r,
        channel: n,
        title: null != l ? l : '',
        streamMetadata: o,
        streamApplication:
            null !== (t = c.streamApplication) && void 0 !== t
                ? t
                : {
                      id: null,
                      name: null == o ? void 0 : o.sourceName
                  }
    });
}
