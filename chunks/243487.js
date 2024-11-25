n.d(t, {
    Z: function () {
        return V;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    o = n(120356),
    r = n.n(o),
    s = n(442837),
    a = n(481060),
    u = n(239091),
    d = n(765250),
    c = n(13245),
    h = n(872810),
    f = n(586902),
    p = n(835473),
    m = n(415635),
    g = n(933557),
    v = n(701362),
    E = n(552282),
    Z = n(565799),
    C = n(501655),
    x = n(597998),
    S = n(199902),
    I = n(314897),
    _ = n(592125),
    O = n(355863),
    N = n(131951),
    y = n(944486),
    T = n(938475),
    j = n(237997),
    b = n(136015),
    L = n(51144),
    R = n(145597),
    w = n(388627),
    k = n(981631),
    A = n(65154),
    M = n(915990);
function z(e) {
    let { avatarSize: t, userId: n, channelId: l, guildId: o } = e,
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
            channelId: l,
            guildId: o,
            containerDimensions: {
                width: r,
                height: r
            }
        })
    });
}
function D(e) {
    let { channel: t, flipped: n = !1, locked: o = !1, user: u, nick: d, displayNameMode: c, displayUserMode: p, size: m = k.ipw.LARGE, onClick: g, onContextMenu: E, context: Z, guildId: C, voiceState: _, showStreamPreview: O, onShowStreamPreview: y, onWatchStream: T } = e,
        j = (0, s.e7)([I.default], () => I.default.getId() === u.id, [u.id]),
        [b, L, R] = (0, s.Wu)([N.Z], () => (j ? [!N.Z.isSupported() || N.Z.isSelfMute() || N.Z.isSelfMutedTemporarily(), N.Z.isSelfDeaf(), !1] : [!N.Z.isSupported() || N.Z.isLocalMute(u.id), !1, N.Z.isLocalVideoDisabled(u.id)]), [j, u.id]),
        w = (0, s.e7)([S.Z], () => S.Z.getCurrentUserActiveStream()),
        A = (0, s.Wu)([S.Z], () => (null != w ? S.Z.getViewerIds(w) : [])),
        D = (0, f.Z)({
            userId: u.id,
            context: Z
        }),
        P = (0, s.e7)([S.Z], () => S.Z.getStreamForUser(u.id, C)),
        V = null != P,
        U = l.useMemo(() => null != w && w.ownerId !== u.id && A.includes(u.id), [w, u.id, A]),
        W = l.useCallback(() => y(null), [y]),
        F = l.useCallback(
            () =>
                (0, i.jsx)(v.Z, {
                    user: u,
                    channel: t,
                    onWatch: () => {
                        (0, h.rn)(P, {
                            forceMultiple: !0,
                            noFocus: !0
                        }),
                            W(),
                            T();
                    },
                    onAction: T,
                    previewIsOpen: O,
                    location: k.Sbl.UNLOCKED_OVERLAY,
                    hideTip: !0
                }),
            [u, t, P, O, W, T]
        );
    if (p === k.OYC.ONLY_WHILE_SPEAKING && o && !D) return null;
    let { mute: H, suppress: Y, deaf: G } = _,
        B = m === k.ipw.LARGE ? 32 : 24;
    return (0, i.jsxs)(a.Clickable, {
        className: r()(M.voiceUser, {
            [M.speaking]: D,
            [M.interactive]: !o,
            [M.flipped]: n
        }),
        onClick: o ? void 0 : (e) => (null == g ? void 0 : g(e, u)),
        onContextMenu: o ? void 0 : (e) => (null == E ? void 0 : E(e, u)),
        onMouseEnter: () => y(u.id),
        onMouseLeave: W,
        children: [
            (0, i.jsx)(a.Avatar, {
                className: M.avatar,
                size: m === k.ipw.LARGE ? a.AvatarSizes.SIZE_32 : a.AvatarSizes.SIZE_24,
                src: u.getAvatarURL(C, B),
                'aria-hidden': !0
            }),
            (0, i.jsx)(z, {
                avatarSize: B,
                userId: u.id,
                channelId: t.id,
                guildId: t.getGuildId()
            }),
            o && (c === k.wC$.NEVER || (!D && c === k.wC$.ONLY_WHILE_SPEAKING))
                ? null
                : (0, i.jsx)(a.Popout, {
                      position: 'right',
                      renderPopout: F,
                      shouldShow: O,
                      onRequestClose: W,
                      spacing: 0,
                      children: () =>
                          (0, i.jsxs)(a.Clickable, {
                              className: M.username,
                              children: [
                                  (0, i.jsx)(a.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: d
                                  }),
                                  (0, i.jsx)(x.nm, {
                                      guildId: C,
                                      user: u,
                                      video: _.selfVideo,
                                      isStreaming: V,
                                      className: M.voiceIcons,
                                      iconClassName: M.voiceIcon,
                                      isWatching: U,
                                      localMute: b && !j,
                                      localVideoDisabled: R,
                                      mute: H || b,
                                      deaf: G || L,
                                      serverMute: H || Y,
                                      serverDeaf: G,
                                      disabled: !1
                                  })
                              ]
                          })
                  })
        ]
    });
}
function P(e) {
    let { id: t, context: o = A.Yn.DEFAULT, channel: r, sortedVoiceStates: s, displayNameMode: a, displayUserMode: h, locked: f, pinned: p, isPreviewingInGame: m, anchorLeft: g, avatarSizeMode: v } = e,
        [E, Z] = l.useState(null),
        C = (e, t) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('50261')]).then(n.bind(n, 881351));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        user: t,
                        showMediaItems: !0,
                        mediaEngineContext: o
                    });
            });
        },
        x = s.length > 0 && null != o && null != r && (!f || p),
        S = l.useCallback(() => {
            var e, n;
            let i = null === (e = O.Z.getWidget(t)) || void 0 === e ? void 0 : e.layoutId,
                l = null != i ? (null === (n = O.Z.getWidgetsForLayout(i)) || void 0 === n ? void 0 : n.find((e) => e.type === k.Odu.GO_LIVE)) : null;
            null != l &&
                !l.pinned &&
                ((0, d.xh)(l.id),
                c.Z.track(k.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: !0,
                    guild_id: null == r ? void 0 : r.guild_id,
                    channel_id: null == r ? void 0 : r.id,
                    channel_type: null == r ? void 0 : r.type,
                    widget_type: k.Odu.GO_LIVE
                }));
        }, [r, t]);
    return x
        ? (0, i.jsx)(i.Fragment, {
              children: s.map((e) => {
                  var t;
                  let { user: n, voiceState: l, member: s } = e;
                  return null == n
                      ? null
                      : (0, i.jsx)(
                            D,
                            {
                                guildId: null == r ? void 0 : r.guild_id,
                                user: n,
                                nick: null !== (t = null == s ? void 0 : s.nick) && void 0 !== t ? t : L.ZP.getName(n),
                                flipped: !g,
                                voiceState: l,
                                displayNameMode: a,
                                displayUserMode: h,
                                size: v,
                                locked: f || m,
                                onContextMenu: C,
                                onClick: C,
                                context: o,
                                channel: r,
                                showStreamPreview: n.id === E,
                                onShowStreamPreview: Z,
                                onWatchStream: S
                            },
                            n.id
                        );
              })
          })
        : null;
}
function V(e) {
    var t;
    let n = (0, s.e7)([y.Z, _.Z], () => _.Z.getChannel(y.Z.getVoiceChannelId())),
        l = (0, g.ZP)(n),
        o = (function () {
            let [e] = (0, s.e7)(
                [T.ZP, Z.Z, y.Z, _.Z],
                () => {
                    let e = _.Z.getChannel(y.Z.getVoiceChannelId());
                    return null == e ? [[], -1] : e.isGuildStageVoice() ? [Z.Z.getMutableParticipants(e.id, C.pV.SPEAKER), Z.Z.getParticipantsVersion(e.id)] : [T.ZP.getVoiceStatesForChannel(e), T.ZP.getVoiceStateVersion(e.getGuildId())];
                },
                [],
                b.Q
            );
            return e;
        })(),
        r = (0, s.e7)([S.Z], () => S.Z.getStreamerActiveStreamMetadata()),
        a = (0, w.II)(),
        u = (0, p.q)(null == a ? void 0 : a.id),
        d = (0, s.cj)([S.Z, j.Z], () => {
            let e = S.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: j.Z.getDisplayUserMode(),
                displayNameMode: j.Z.getDisplayNameMode(),
                avatarSizeMode: j.Z.getAvatarSizeMode(),
                streamApplication: (null == r ? void 0 : r.pid) === (0, R.QF)() ? (0, E.Z)(a) : null,
                stream: e
            };
        });
    return (0, i.jsx)(P, {
        ...d,
        application: u,
        ...e,
        sortedVoiceStates: o,
        channel: n,
        title: null != l ? l : '',
        streamMetadata: r,
        streamApplication:
            null !== (t = d.streamApplication) && void 0 !== t
                ? t
                : {
                      id: null,
                      name: null == r ? void 0 : r.sourceName
                  }
    });
}
