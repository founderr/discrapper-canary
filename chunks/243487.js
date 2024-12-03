n.d(t, {
    Z: function () {
        return V;
    }
}),
    n(47120);
var i = n(200651),
    o = n(192379),
    l = n(120356),
    r = n.n(l),
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
    x = n(565799),
    C = n(501655),
    Z = n(597998),
    _ = n(199902),
    I = n(314897),
    S = n(592125),
    b = n(355863),
    N = n(131951),
    O = n(944486),
    y = n(938475),
    j = n(237997),
    T = n(136015),
    k = n(51144),
    L = n(145597),
    w = n(388627),
    A = n(981631),
    R = n(65154),
    M = n(882110);
function z(e) {
    let { avatarSize: t, userId: n, channelId: o, guildId: l } = e,
        r = 2 * t,
        s = -(t / 2);
    return (0, i.jsx)('div', {
        className: M.effect,
        style: {
            top: s,
            left: s,
            width: r,
            height: r
        },
        children: (0, i.jsx)(m.Z, {
            userId: n,
            channelId: o,
            guildId: l,
            containerDimensions: {
                width: r,
                height: r
            }
        })
    });
}
function D(e) {
    let { channel: t, flipped: n = !1, locked: l = !1, user: u, nick: c, displayNameMode: d, displayUserMode: p, size: m = A.ipw.LARGE, onClick: v, onContextMenu: E, context: x, guildId: C, voiceState: S, showStreamPreview: b, onShowStreamPreview: O, onWatchStream: y } = e,
        j = (0, s.e7)([I.default], () => I.default.getId() === u.id, [u.id]),
        [T, k, L] = (0, s.Wu)([N.Z], () => (j ? [!N.Z.isSupported() || N.Z.isSelfMute() || N.Z.isSelfMutedTemporarily(), N.Z.isSelfDeaf(), !1] : [!N.Z.isSupported() || N.Z.isLocalMute(u.id), !1, N.Z.isLocalVideoDisabled(u.id)]), [j, u.id]),
        w = (0, s.e7)([_.Z], () => _.Z.getCurrentUserActiveStream()),
        R = (0, s.Wu)([_.Z], () => (null != w ? _.Z.getViewerIds(w) : [])),
        D = (0, f.Z)({
            userId: u.id,
            context: x
        }),
        P = (0, s.e7)([_.Z], () => _.Z.getStreamForUser(u.id, C)),
        V = null != P,
        W = o.useMemo(() => null != w && w.ownerId !== u.id && R.includes(u.id), [w, u.id, R]),
        U = o.useCallback(() => O(null), [O]),
        F = o.useCallback(
            () =>
                (0, i.jsx)(g.Z, {
                    user: u,
                    channel: t,
                    onWatch: () => {
                        (0, h.rn)(P, {
                            forceMultiple: !0,
                            noFocus: !0
                        }),
                            U(),
                            y();
                    },
                    onAction: y,
                    previewIsOpen: b,
                    location: A.Sbl.UNLOCKED_OVERLAY,
                    hideTip: !0
                }),
            [u, t, P, b, U, y]
        );
    if (p === A.OYC.ONLY_WHILE_SPEAKING && l && !D) return null;
    let { mute: B, suppress: H, deaf: Y } = S,
        G = m === A.ipw.LARGE ? 32 : 24;
    return (0, i.jsxs)(a.Clickable, {
        className: r()(M.voiceUser, {
            [M.speaking]: D,
            [M.interactive]: !l,
            [M.flipped]: n
        }),
        onClick: l ? void 0 : (e) => (null == v ? void 0 : v(e, u)),
        onContextMenu: l ? void 0 : (e) => (null == E ? void 0 : E(e, u)),
        onMouseEnter: () => O(u.id),
        onMouseLeave: U,
        children: [
            (0, i.jsx)(a.Avatar, {
                className: M.avatar,
                size: m === A.ipw.LARGE ? a.AvatarSizes.SIZE_32 : a.AvatarSizes.SIZE_24,
                src: u.getAvatarURL(C, G),
                'aria-hidden': !0
            }),
            (0, i.jsx)(z, {
                avatarSize: G,
                userId: u.id,
                channelId: t.id,
                guildId: t.getGuildId()
            }),
            l && (d === A.wC$.NEVER || (!D && d === A.wC$.ONLY_WHILE_SPEAKING))
                ? null
                : (0, i.jsx)(a.Popout, {
                      position: 'right',
                      renderPopout: F,
                      shouldShow: b,
                      onRequestClose: U,
                      spacing: 0,
                      children: () =>
                          (0, i.jsxs)(a.Clickable, {
                              className: M.username,
                              children: [
                                  (0, i.jsx)(a.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: c
                                  }),
                                  (0, i.jsx)(Z.nm, {
                                      guildId: C,
                                      user: u,
                                      video: S.selfVideo,
                                      isStreaming: V,
                                      className: M.voiceIcons,
                                      iconClassName: M.voiceIcon,
                                      isWatching: W,
                                      localMute: T && !j,
                                      localVideoDisabled: L,
                                      mute: B || T,
                                      deaf: Y || k,
                                      serverMute: B || H,
                                      serverDeaf: Y,
                                      disabled: !1
                                  })
                              ]
                          })
                  })
        ]
    });
}
function P(e) {
    let { id: t, context: l = R.Yn.DEFAULT, channel: r, sortedVoiceStates: s, displayNameMode: a, displayUserMode: h, locked: f, pinned: p, isPreviewingInGame: m, anchorLeft: v, avatarSizeMode: g } = e,
        [E, x] = o.useState(null),
        C = (e, t) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('351')]).then(n.bind(n, 881351));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        user: t,
                        showMediaItems: !0,
                        mediaEngineContext: l
                    });
            });
        },
        Z = s.length > 0 && null != l && null != r && (!f || p),
        _ = o.useCallback(() => {
            var e, n;
            let i = null === (e = b.Z.getWidget(t)) || void 0 === e ? void 0 : e.layoutId,
                o = null != i ? (null === (n = b.Z.getWidgetsForLayout(i)) || void 0 === n ? void 0 : n.find((e) => e.type === A.Odu.GO_LIVE)) : null;
            null != o &&
                !o.pinned &&
                ((0, c.xh)(o.id),
                d.Z.track(A.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: !0,
                    guild_id: null == r ? void 0 : r.guild_id,
                    channel_id: null == r ? void 0 : r.id,
                    channel_type: null == r ? void 0 : r.type,
                    widget_type: A.Odu.GO_LIVE
                }));
        }, [r, t]);
    return Z
        ? (0, i.jsx)(i.Fragment, {
              children: s.map((e) => {
                  var t;
                  let { user: n, voiceState: o, member: s } = e;
                  return null == n
                      ? null
                      : (0, i.jsx)(
                            D,
                            {
                                guildId: null == r ? void 0 : r.guild_id,
                                user: n,
                                nick: null !== (t = null == s ? void 0 : s.nick) && void 0 !== t ? t : k.ZP.getName(n),
                                flipped: !v,
                                voiceState: o,
                                displayNameMode: a,
                                displayUserMode: h,
                                size: g,
                                locked: f || m,
                                onContextMenu: C,
                                onClick: C,
                                context: l,
                                channel: r,
                                showStreamPreview: n.id === E,
                                onShowStreamPreview: x,
                                onWatchStream: _
                            },
                            n.id
                        );
              })
          })
        : null;
}
function V(e) {
    var t;
    let n = (0, s.e7)([O.Z, S.Z], () => S.Z.getChannel(O.Z.getVoiceChannelId())),
        o = (0, v.ZP)(n),
        l = (function () {
            let [e] = (0, s.e7)(
                [y.ZP, x.Z, O.Z, S.Z],
                () => {
                    let e = S.Z.getChannel(O.Z.getVoiceChannelId());
                    return null == e ? [[], -1] : e.isGuildStageVoice() ? [x.Z.getMutableParticipants(e.id, C.pV.SPEAKER), x.Z.getParticipantsVersion(e.id)] : [y.ZP.getVoiceStatesForChannel(e), y.ZP.getVoiceStateVersion(e.getGuildId())];
                },
                [],
                T.Q
            );
            return e;
        })(),
        r = (0, s.e7)([_.Z], () => _.Z.getStreamerActiveStreamMetadata()),
        a = (0, w.II)(),
        u = (0, p.q)(null == a ? void 0 : a.id),
        c = (0, s.cj)([_.Z, j.Z], () => {
            let e = _.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: j.Z.getDisplayUserMode(),
                displayNameMode: j.Z.getDisplayNameMode(),
                avatarSizeMode: j.Z.getAvatarSizeMode(),
                streamApplication: (null == r ? void 0 : r.pid) === (0, L.QF)() ? (0, E.Z)(a) : null,
                stream: e
            };
        });
    return (0, i.jsx)(P, {
        ...c,
        application: u,
        ...e,
        sortedVoiceStates: l,
        channel: n,
        title: null != o ? o : '',
        streamMetadata: r,
        streamApplication:
            null !== (t = c.streamApplication) && void 0 !== t
                ? t
                : {
                      id: null,
                      name: null == r ? void 0 : r.sourceName
                  }
    });
}
