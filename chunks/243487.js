n.d(t, {
    Z: function () {
        return U;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    u = n(239091),
    c = n(765250),
    d = n(13245),
    h = n(872810),
    f = n(586902),
    p = n(835473),
    m = n(415635),
    E = n(933557),
    v = n(701362),
    g = n(552282),
    _ = n(565799),
    C = n(501655),
    S = n(597998),
    I = n(199902),
    Z = n(314897),
    N = n(592125),
    x = n(355863),
    O = n(131951),
    T = n(944486),
    A = n(938475),
    y = n(237997),
    b = n(136015),
    R = n(51144),
    L = n(145597),
    k = n(388627),
    M = n(981631),
    P = n(65154),
    w = n(915990);
function j(e) {
    let { avatarSize: t, userId: n, channelId: r, guildId: l } = e,
        o = 2 * t,
        a = -(t / 2);
    return (0, i.jsx)('div', {
        className: w.effect,
        style: {
            top: a,
            left: a,
            width: o,
            height: o
        },
        children: (0, i.jsx)(m.Z, {
            userId: n,
            channelId: r,
            guildId: l,
            containerDimensions: {
                width: o,
                height: o
            }
        })
    });
}
function D(e) {
    let { channel: t, flipped: n = !1, locked: l = !1, user: u, nick: c, displayNameMode: d, displayUserMode: p, size: m = M.ipw.LARGE, onClick: E, onContextMenu: g, context: _, guildId: C, voiceState: N, showStreamPreview: x, onShowStreamPreview: T, onWatchStream: A } = e,
        y = (0, a.e7)([Z.default], () => Z.default.getId() === u.id, [u.id]),
        [b, R, L] = (0, a.Wu)([O.Z], () => (y ? [!O.Z.isSupported() || O.Z.isSelfMute() || O.Z.isSelfMutedTemporarily(), O.Z.isSelfDeaf(), !1] : [!O.Z.isSupported() || O.Z.isLocalMute(u.id), !1, O.Z.isLocalVideoDisabled(u.id)]), [y, u.id]),
        k = (0, a.e7)([I.Z], () => I.Z.getCurrentUserActiveStream()),
        P = (0, a.Wu)([I.Z], () => (null != k ? I.Z.getViewerIds(k) : [])),
        D = (0, f.Z)({
            userId: u.id,
            context: _
        }),
        z = (0, a.e7)([I.Z], () => I.Z.getStreamForUser(u.id, C)),
        U = null != z,
        V = r.useMemo(() => null != k && k.ownerId !== u.id && P.includes(u.id), [k, u.id, P]),
        G = r.useCallback(() => T(null), [T]),
        F = r.useCallback(
            () =>
                (0, i.jsx)(v.Z, {
                    user: u,
                    channel: t,
                    onWatch: () => {
                        (0, h.rn)(z, {
                            forceMultiple: !0,
                            noFocus: !0
                        }),
                            G(),
                            A();
                    },
                    onAction: A,
                    previewIsOpen: x,
                    location: M.Sbl.UNLOCKED_OVERLAY,
                    hideTip: !0
                }),
            [u, t, z, x, G, A]
        );
    if (p === M.OYC.ONLY_WHILE_SPEAKING && l && !D) return null;
    let { mute: B, suppress: W, deaf: H } = N,
        Y = m === M.ipw.LARGE ? 32 : 24;
    return (0, i.jsxs)(s.Clickable, {
        className: o()(w.voiceUser, {
            [w.speaking]: D,
            [w.interactive]: !l,
            [w.flipped]: n
        }),
        onClick: l ? void 0 : (e) => (null == E ? void 0 : E(e, u)),
        onContextMenu: l ? void 0 : (e) => (null == g ? void 0 : g(e, u)),
        onMouseEnter: () => T(u.id),
        onMouseLeave: G,
        children: [
            (0, i.jsx)(s.Avatar, {
                className: w.avatar,
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
            l && (d === M.wC$.NEVER || (!D && d === M.wC$.ONLY_WHILE_SPEAKING))
                ? null
                : (0, i.jsx)(s.Popout, {
                      position: 'right',
                      renderPopout: F,
                      shouldShow: x,
                      onRequestClose: G,
                      spacing: 0,
                      children: () =>
                          (0, i.jsxs)(s.Clickable, {
                              className: w.username,
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: c
                                  }),
                                  (0, i.jsx)(S.nm, {
                                      guildId: C,
                                      user: u,
                                      video: N.selfVideo,
                                      isStreaming: U,
                                      className: w.voiceIcons,
                                      iconClassName: w.voiceIcon,
                                      isWatching: V,
                                      localMute: b && !y,
                                      localVideoDisabled: L,
                                      mute: B || b,
                                      deaf: H || R,
                                      serverMute: B || W,
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
    let { id: t, context: l = P.Yn.DEFAULT, channel: o, sortedVoiceStates: a, displayNameMode: s, displayUserMode: h, locked: f, pinned: p, isPreviewingInGame: m, anchorLeft: E, avatarSizeMode: v } = e,
        [g, _] = r.useState(null),
        C = (e, t) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('50261')]).then(n.bind(n, 881351));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        user: t,
                        showMediaItems: !0,
                        mediaEngineContext: l
                    });
            });
        },
        S = a.length > 0 && null != l && null != o && (!f || p),
        I = r.useCallback(() => {
            var e, n;
            let i = null === (e = x.Z.getWidget(t)) || void 0 === e ? void 0 : e.layoutId,
                r = null != i ? (null === (n = x.Z.getWidgetsForLayout(i)) || void 0 === n ? void 0 : n.find((e) => e.type === M.Odu.GO_LIVE)) : null;
            null != r &&
                !r.pinned &&
                ((0, c.xh)(r.id),
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
                  let { user: n, voiceState: r, member: a } = e;
                  return null == n
                      ? null
                      : (0, i.jsx)(
                            D,
                            {
                                guildId: null == o ? void 0 : o.guild_id,
                                user: n,
                                nick: null !== (t = null == a ? void 0 : a.nick) && void 0 !== t ? t : R.ZP.getName(n),
                                flipped: !E,
                                voiceState: r,
                                displayNameMode: s,
                                displayUserMode: h,
                                size: v,
                                locked: f || m,
                                onContextMenu: C,
                                onClick: C,
                                context: l,
                                channel: o,
                                showStreamPreview: n.id === g,
                                onShowStreamPreview: _,
                                onWatchStream: I
                            },
                            n.id
                        );
              })
          })
        : null;
}
function U(e) {
    var t;
    let n = (0, a.e7)([T.Z, N.Z], () => N.Z.getChannel(T.Z.getVoiceChannelId())),
        r = (0, E.ZP)(n),
        l = (function () {
            let [e] = (0, a.e7)(
                [A.ZP, _.Z, T.Z, N.Z],
                () => {
                    let e = N.Z.getChannel(T.Z.getVoiceChannelId());
                    return null == e ? [[], -1] : e.isGuildStageVoice() ? [_.Z.getMutableParticipants(e.id, C.pV.SPEAKER), _.Z.getParticipantsVersion(e.id)] : [A.ZP.getVoiceStatesForChannel(e), A.ZP.getVoiceStateVersion(e.getGuildId())];
                },
                [],
                b.Q
            );
            return e;
        })(),
        o = (0, a.e7)([I.Z], () => I.Z.getStreamerActiveStreamMetadata()),
        s = (0, k.II)(),
        u = (0, p.q)(null == s ? void 0 : s.id),
        c = (0, a.cj)([I.Z, y.Z], () => {
            let e = I.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: y.Z.getDisplayUserMode(),
                displayNameMode: y.Z.getDisplayNameMode(),
                avatarSizeMode: y.Z.getAvatarSizeMode(),
                streamApplication: (null == o ? void 0 : o.pid) === (0, L.QF)() ? (0, g.Z)(s) : null,
                stream: e
            };
        });
    return (0, i.jsx)(z, {
        ...c,
        application: u,
        ...e,
        sortedVoiceStates: l,
        channel: n,
        title: null != r ? r : '',
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
