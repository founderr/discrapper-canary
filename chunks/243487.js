n.d(t, {
    Z: function () {
        return V;
    }
}),
    n(47120);
var i = n(200651),
    o = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(442837),
    a = n(481060),
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
    I = n(199902),
    x = n(314897),
    Z = n(592125),
    y = n(355863),
    N = n(131951),
    b = n(944486),
    O = n(938475),
    T = n(237997),
    A = n(136015),
    L = n(51144),
    R = n(145597),
    k = n(658785),
    w = n(388627),
    M = n(981631),
    j = n(65154),
    P = n(368430);
function D(e) {
    let { avatarSize: t, userId: n, channelId: o, guildId: r } = e,
        l = 2 * t,
        s = -(t / 2);
    return (0, i.jsx)('div', {
        className: P.effect,
        style: {
            top: s,
            left: s,
            width: l,
            height: l
        },
        children: (0, i.jsx)(m.Z, {
            userId: n,
            channelId: o,
            guildId: r,
            containerDimensions: {
                width: l,
                height: l
            }
        })
    });
}
function z(e) {
    let { channel: t, flipped: n = !1, locked: r = !1, user: u, nick: c, displayNameMode: d, displayUserMode: p, size: m = M.ipw.LARGE, onClick: v, onContextMenu: E, context: _, guildId: C, voiceState: Z, showStreamPreview: y, onShowStreamPreview: b, onWatchStream: O } = e,
        T = (0, s.e7)([x.default], () => x.default.getId() === u.id, [u.id]),
        [A, L, R] = (0, s.Wu)([N.Z], () => (T ? [!N.Z.isSupported() || N.Z.isSelfMute() || N.Z.isSelfMutedTemporarily(), N.Z.isSelfDeaf(), !1] : [!N.Z.isSupported() || N.Z.isLocalMute(u.id), !1, N.Z.isLocalVideoDisabled(u.id)]), [T, u.id]),
        k = (0, s.e7)([I.Z], () => I.Z.getCurrentUserActiveStream()),
        w = (0, s.Wu)([I.Z], () => (null != k ? I.Z.getViewerIds(k) : [])),
        j = (0, f.Z)({
            userId: u.id,
            context: _
        }),
        z = (0, s.e7)([I.Z], () => I.Z.getStreamForUser(u.id, C)),
        U = null != z,
        V = o.useMemo(() => null != k && k.ownerId !== u.id && w.includes(u.id), [k, u.id, w]),
        F = o.useCallback(() => b(null), [b]),
        B = o.useCallback(
            () =>
                (0, i.jsx)(g.Z, {
                    user: u,
                    channel: t,
                    onWatch: () => {
                        (0, h.rn)(z, {
                            forceMultiple: !0,
                            noFocus: !0
                        }),
                            F(),
                            O();
                    },
                    onAction: O,
                    previewIsOpen: y,
                    location: M.Sbl.UNLOCKED_OVERLAY
                }),
            [u, t, z, y, F, O]
        );
    if (p === M.OYC.ONLY_WHILE_SPEAKING && r && !j) return null;
    let { mute: W, suppress: H, deaf: G } = Z,
        Y = m === M.ipw.LARGE ? 32 : 24;
    return (0, i.jsxs)(a.Clickable, {
        className: l()(P.voiceUser, {
            [P.speaking]: j,
            [P.interactive]: !r,
            [P.flipped]: n
        }),
        onClick: r ? void 0 : (e) => (null == v ? void 0 : v(e, u)),
        onContextMenu: r ? void 0 : (e) => (null == E ? void 0 : E(e, u)),
        onMouseEnter: () => b(u.id),
        onMouseLeave: F,
        children: [
            (0, i.jsx)(a.Avatar, {
                className: P.avatar,
                size: m === M.ipw.LARGE ? a.AvatarSizes.SIZE_32 : a.AvatarSizes.SIZE_24,
                src: u.getAvatarURL(C, Y),
                'aria-hidden': !0
            }),
            (0, i.jsx)(D, {
                avatarSize: Y,
                userId: u.id,
                channelId: t.id,
                guildId: t.getGuildId()
            }),
            r && (d === M.wC$.NEVER || (!j && d === M.wC$.ONLY_WHILE_SPEAKING))
                ? null
                : (0, i.jsx)(a.Popout, {
                      position: 'right',
                      renderPopout: B,
                      shouldShow: y,
                      onRequestClose: F,
                      spacing: 0,
                      children: () =>
                          (0, i.jsxs)(a.Clickable, {
                              className: P.username,
                              children: [
                                  (0, i.jsx)(a.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: c
                                  }),
                                  (0, i.jsx)(S.nm, {
                                      guildId: C,
                                      user: u,
                                      video: Z.selfVideo,
                                      isStreaming: U,
                                      className: P.voiceIcons,
                                      iconClassName: P.voiceIcon,
                                      isWatching: V,
                                      localMute: A && !T,
                                      localVideoDisabled: R,
                                      mute: W || A,
                                      deaf: G || L,
                                      serverMute: W || H,
                                      serverDeaf: G,
                                      disabled: !1
                                  })
                              ]
                          })
                  })
        ]
    });
}
function U(e) {
    let { id: t, context: r = j.Yn.DEFAULT, channel: l, sortedVoiceStates: s, displayNameMode: a, displayUserMode: h, locked: f, pinned: p, isPreviewingInGame: m, anchorLeft: v, avatarSizeMode: g } = e,
        [E, _] = o.useState(null),
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
        S = s.length > 0 && null != r && null != l && (!f || p),
        I = o.useCallback(() => {
            var e, n;
            let i = null === (e = y.Z.getWidget(t)) || void 0 === e ? void 0 : e.layoutId,
                o = null != i ? (null === (n = y.Z.getWidgetsForLayout(i)) || void 0 === n ? void 0 : n.find((e) => e.type === M.Odu.GO_LIVE)) : null;
            null != o &&
                !o.pinned &&
                ((0, c.xh)(o.id),
                d.Z.track(M.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: !0,
                    guild_id: null == l ? void 0 : l.guild_id,
                    channel_id: null == l ? void 0 : l.id,
                    channel_type: null == l ? void 0 : l.type,
                    widget_type: M.Odu.GO_LIVE
                }));
        }, [l, t]);
    return S
        ? (0, i.jsx)(i.Fragment, {
              children: s.map((e) => {
                  var t;
                  let { user: n, voiceState: o, member: s } = e;
                  return null == n
                      ? null
                      : (0, i.jsx)(
                            z,
                            {
                                guildId: null == l ? void 0 : l.guild_id,
                                user: n,
                                nick: null !== (t = null == s ? void 0 : s.nick) && void 0 !== t ? t : L.ZP.getName(n),
                                flipped: !v,
                                voiceState: o,
                                displayNameMode: a,
                                displayUserMode: h,
                                size: g,
                                locked: f || m,
                                onContextMenu: C,
                                onClick: C,
                                context: r,
                                channel: l,
                                showStreamPreview: n.id === E,
                                onShowStreamPreview: _,
                                onWatchStream: I
                            },
                            n.id
                        );
              })
          })
        : null;
}
function V(e) {
    var t;
    let n = (0, s.e7)([b.Z, Z.Z], () => Z.Z.getChannel(b.Z.getVoiceChannelId())),
        r = (0, v.ZP)(n),
        l = (function () {
            let [e] = (0, s.e7)(
                    [O.ZP, _.Z, b.Z, Z.Z],
                    () => {
                        let e = Z.Z.getChannel(b.Z.getVoiceChannelId());
                        return null == e ? [[], -1] : e.isGuildStageVoice() ? [_.Z.getMutableParticipants(e.id, C.pV.SPEAKER), _.Z.getParticipantsVersion(e.id)] : [O.ZP.getVoiceStatesForChannel(e), O.ZP.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    A.Q
                ),
                t = (0, s.e7)([x.default], () => x.default.getId()),
                { showKeybindIndicators: n } = k.Z.useExperiment({ location: 'voice_widget' });
            return o.useMemo(() => (n ? [...e].sort((e, n) => (e.user.id === t ? -1 : n.user.id === t ? 1 : 0)) : e), [e, t, n]);
        })(),
        a = (0, s.e7)([I.Z], () => I.Z.getStreamerActiveStreamMetadata()),
        u = (0, w.II)(),
        c = (0, p.q)(null == u ? void 0 : u.id),
        d = (0, s.cj)([I.Z, T.Z], () => {
            let e = I.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: T.Z.getDisplayUserMode(),
                displayNameMode: T.Z.getDisplayNameMode(),
                avatarSizeMode: T.Z.getAvatarSizeMode(),
                streamApplication: (null == a ? void 0 : a.pid) === (0, R.QF)() ? (0, E.Z)(u) : null,
                stream: e
            };
        });
    return (0, i.jsx)(U, {
        ...d,
        application: c,
        ...e,
        sortedVoiceStates: l,
        channel: n,
        title: null != r ? r : '',
        streamMetadata: a,
        streamApplication:
            null !== (t = d.streamApplication) && void 0 !== t
                ? t
                : {
                      id: null,
                      name: null == a ? void 0 : a.sourceName
                  }
    });
}
