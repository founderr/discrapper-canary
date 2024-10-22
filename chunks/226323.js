n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(239091),
    d = n(586902),
    u = n(512384),
    _ = n(184301),
    E = n(347475),
    h = n(314897),
    m = n(131951),
    I = n(51144),
    p = n(524484),
    g = n(689938),
    T = n(497867);
let f = { offset: 2 },
    S = {
        serverDeaf: {
            icon: o.HeadphonesDenyIcon,
            colorize: !0,
            getStatus: () => g.Z.Messages.SERVER_DEAFENED
        },
        serverMute: {
            icon: o.MicrophoneDenyIcon,
            colorize: !0,
            getStatus: () => g.Z.Messages.SERVER_MUTED
        },
        deaf: {
            icon: o.HeadphonesSlashIcon,
            colorize: !1,
            getStatus: () => g.Z.Messages.VOICE_CHANNEL_DEAFENED
        },
        mute: {
            icon: o.MicrophoneSlashIcon,
            colorize: !1,
            getStatus: () => g.Z.Messages.VOICE_CHANNEL_MUTED
        },
        localMute: {
            icon: o.MicrophoneDenyIcon,
            colorize: !1,
            getStatus: () => g.Z.Messages.VOICE_CHANNEL_LOCAL_MUTED
        }
    };
function C(e) {
    var t, a;
    let { channel: s, user: h, nick: C, mute: N, deaf: A, serverMute: v, serverDeaf: Z } = e,
        L = (0, l.e7)([m.Z], () => m.Z.isLocalMute(h.id)),
        R = (0, d.Z)({
            userId: h.id,
            checkSoundSharing: !0
        }),
        O = null !== (t = s.getGuildId()) && void 0 !== t ? t : void 0,
        x = h.getAvatarURL(s.guild_id, 24),
        b = null != C ? C : I.ZP.getName(h),
        {
            icon: M,
            colorize: P,
            getStatus: D
        } = null !==
            (a = (function (e) {
                let { serverDeaf: t, deaf: n, serverMute: i, mute: a, localMute: s } = e;
                if (t) return S.serverDeaf;
                if (n) return S.deaf;
                if (i) return S.serverMute;
                else if (s) return S.localMute;
                else if (a) return S.mute;
            })({
                serverDeaf: Z,
                deaf: A,
                serverMute: v,
                mute: N,
                localMute: L
            })) && void 0 !== a
            ? a
            : {},
        y =
            null != D
                ? g.Z.Messages.VOICE_PANEL_USER_TOOLTIP.format({
                      userName: b,
                      status: D()
                  })
                : b;
    function j(e) {
        null != O
            ? (0, c.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('13125'), n.e('91864')]).then(n.bind(n, 757387));
                  return (t) =>
                      (0, i.jsx)(e, {
                          ...t,
                          user: h,
                          guildId: O,
                          channel: s,
                          showMediaItems: !0
                      });
              })
            : (0, c.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('5901')]).then(n.bind(n, 881351));
                  return (t) =>
                      (0, i.jsx)(e, {
                          ...t,
                          user: h,
                          showMediaItems: !0
                      });
              });
    }
    return (0, i.jsx)(o.Popout, {
        preload: () =>
            (0, _.Z)(h.id, h.getAvatarURL(O, 80), {
                guildId: O,
                channelId: s.id
            }),
        position: 'top',
        renderPopout: (e) =>
            (0, i.jsx)(E.Z, {
                userId: h.id,
                guildId: O,
                channelId: s.id,
                ...e
            }),
        children: (e) =>
            (0, i.jsx)(o.Tooltip, {
                text: y,
                children: (t) =>
                    (0, i.jsx)(o.Clickable, {
                        ...t,
                        ...e,
                        className: T.avatarContainer,
                        onContextMenu: j,
                        focusProps: f,
                        children: (0, i.jsx)(u.Z, {
                            shakeLocation: p.oZ.VOICE_USER,
                            isShaking: R,
                            children: (0, i.jsx)('div', {
                                className: r()(T.avatar, { [T.speaking]: R }),
                                style: { backgroundImage: 'url('.concat(x, ')') },
                                children:
                                    null != M
                                        ? (0, i.jsx)(M, {
                                              className: r()(T.avatarIconOverlay, { [T.avatarIconRed]: P }),
                                              color: 'currentColor',
                                              size: 'xs'
                                          })
                                        : null
                            })
                        })
                    })
            })
    });
}
function N(e) {
    let { voiceStates: t, channel: n, className: s } = e,
        [c, d] = a.useState(!1),
        u = c ? o.MinusIcon : o.PlusSmallIcon,
        _ = (0, i.jsx)(o.CircleIconButton, {
            className: T.expandButton,
            onClick: () => d(!c),
            color: o.CircleIconButtonColors.PRIMARY,
            size: o.CircleIconButtonSizes.SIZE_24,
            tooltip: c ? g.Z.Messages.VOICE_PANEL_HIDE_EXTRAS : g.Z.Messages.VOICE_PANEL_SHOW_EXTRAS,
            icon: (0, i.jsx)(u, {
                size: 'xs',
                color: 'currentColor'
            }),
            focusProps: f
        }),
        E = (0, l.e7)([h.default], () => h.default.getId(), []),
        [m, I] = (function (e, t) {
            let n = [];
            for (let i of e) {
                if (!(i.user.id === t || n.some((e) => e.user.id === i.user.id))) {
                    if (n.length >= 7) return [n, !0];
                    n.push(i);
                }
            }
            return [n, !1];
        })(t, E),
        p = I && c ? t : m;
    return p.length <= 0
        ? null
        : (0, i.jsx)(o.ScrollerThin, {
              className: r()(T.scroller, s),
              fade: !0,
              children: (0, i.jsxs)('div', {
                  className: T.voiceUsers,
                  role: 'group',
                  'aria-label': g.Z.Messages.VOICE_PANEL_USERS_A11Y_LABEL,
                  children: [
                      p.map((e) => {
                          let { user: t, nick: a, voiceState: s } = e;
                          return t.id !== E
                              ? (0, i.jsx)(
                                    C,
                                    {
                                        channel: n,
                                        user: t,
                                        nick: a,
                                        mute: s.isVoiceMuted(),
                                        deaf: s.isVoiceDeafened(),
                                        video: s.selfVideo,
                                        serverMute: s.mute,
                                        serverDeaf: s.deaf
                                    },
                                    t.id
                                )
                              : null;
                      }),
                      I ? _ : null
                  ]
              })
          });
}
