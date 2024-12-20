n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(239091),
    d = n(586902),
    u = n(512384),
    h = n(184301),
    m = n(347475),
    p = n(314897),
    g = n(131951),
    f = n(51144),
    _ = n(524484),
    E = n(388032),
    I = n(525270);
let C = { offset: 2 },
    v = {
        serverDeaf: {
            icon: s.HeadphonesDenyIcon,
            colorize: !0,
            getStatus: () => E.intl.string(E.t.btxSdH)
        },
        serverMute: {
            icon: s.MicrophoneDenyIcon,
            colorize: !0,
            getStatus: () => E.intl.string(E.t.uLddbW)
        },
        deaf: {
            icon: s.HeadphonesSlashIcon,
            colorize: !1,
            getStatus: () => E.intl.string(E.t.NjmiOD)
        },
        mute: {
            icon: s.MicrophoneSlashIcon,
            colorize: !1,
            getStatus: () => E.intl.string(E.t.tjtv3N)
        },
        localMute: {
            icon: s.MicrophoneDenyIcon,
            colorize: !1,
            getStatus: () => E.intl.string(E.t['9F+xJS'])
        }
    };
function S(e) {
    var t, r;
    let { channel: l, user: p, nick: S, mute: N, deaf: T, serverMute: b, serverDeaf: x } = e,
        A = (0, o.e7)([g.Z], () => g.Z.isLocalMute(p.id)),
        Z = (0, d.Z)({
            userId: p.id,
            checkSoundSharing: !0
        }),
        L = null !== (t = l.getGuildId()) && void 0 !== t ? t : void 0,
        P = p.getAvatarURL(l.guild_id, 24),
        y = null != S ? S : f.ZP.getName(p),
        {
            icon: O,
            colorize: R,
            getStatus: j
        } = null !==
            (r = (function (e) {
                let { serverDeaf: t, deaf: n, serverMute: i, mute: r, localMute: l } = e;
                if (t) return v.serverDeaf;
                if (n) return v.deaf;
                if (i) return v.serverMute;
                else if (l) return v.localMute;
                else if (r) return v.mute;
            })({
                serverDeaf: x,
                deaf: T,
                serverMute: b,
                mute: N,
                localMute: A
            })) && void 0 !== r
            ? r
            : {},
        D =
            null != j
                ? E.intl.formatToPlainString(E.t['1+MVBA'], {
                      userName: y,
                      status: j()
                  })
                : y;
    function M(e) {
        null != L
            ? (0, c.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('13125'), n.e('64899')]).then(n.bind(n, 757387));
                  return (t) =>
                      (0, i.jsx)(e, {
                          ...t,
                          user: p,
                          guildId: L,
                          channel: l,
                          showMediaItems: !0
                      });
              })
            : (0, c.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('95052')]).then(n.bind(n, 881351));
                  return (t) =>
                      (0, i.jsx)(e, {
                          ...t,
                          user: p,
                          showMediaItems: !0
                      });
              });
    }
    return (0, i.jsx)(s.Popout, {
        preload: () =>
            (0, h.Z)(p.id, p.getAvatarURL(L, 80), {
                guildId: L,
                channelId: l.id
            }),
        position: 'top',
        renderPopout: (e) =>
            (0, i.jsx)(m.Z, {
                userId: p.id,
                guildId: L,
                channelId: l.id,
                ...e
            }),
        children: (e) =>
            (0, i.jsx)(s.Tooltip, {
                text: D,
                children: (t) =>
                    (0, i.jsx)(s.Clickable, {
                        ...t,
                        ...e,
                        className: I.avatarContainer,
                        onContextMenu: M,
                        focusProps: C,
                        children: (0, i.jsx)(u.Z, {
                            shakeLocation: _.oZ.VOICE_USER,
                            isShaking: Z,
                            children: (0, i.jsx)('div', {
                                className: a()(I.avatar, { [I.speaking]: Z }),
                                style: { backgroundImage: 'url('.concat(P, ')') },
                                children:
                                    null != O
                                        ? (0, i.jsx)(O, {
                                              className: a()(I.avatarIconOverlay, { [I.avatarIconRed]: R }),
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
    let { voiceStates: t, channel: n, className: l } = e,
        [c, d] = r.useState(!1),
        u = c ? s.MinusIcon : s.PlusSmallIcon,
        h = (0, i.jsx)(s.CircleIconButton, {
            className: I.expandButton,
            onClick: () => d(!c),
            color: s.CircleIconButtonColors.PRIMARY,
            size: s.CircleIconButtonSizes.SIZE_24,
            tooltip: c ? E.intl.string(E.t['Z/Tya2']) : E.intl.string(E.t.XR5BAQ),
            icon: (0, i.jsx)(u, {
                size: 'xs',
                color: 'currentColor'
            }),
            focusProps: C
        }),
        m = (0, o.e7)([p.default], () => p.default.getId(), []),
        [g, f] = (function (e, t) {
            let n = [];
            for (let i of e) {
                if (!(i.user.id === t || n.some((e) => e.user.id === i.user.id))) {
                    if (n.length >= 7) return [n, !0];
                    n.push(i);
                }
            }
            return [n, !1];
        })(t, m),
        _ = f && c ? t : g;
    return _.length <= 0
        ? null
        : (0, i.jsx)(s.ScrollerThin, {
              className: a()(I.scroller, l),
              fade: !0,
              children: (0, i.jsxs)('div', {
                  className: I.voiceUsers,
                  role: 'group',
                  'aria-label': E.intl.string(E.t['/ZgaVV']),
                  children: [
                      _.map((e) => {
                          let { user: t, nick: r, voiceState: l } = e;
                          return t.id !== m
                              ? (0, i.jsx)(
                                    S,
                                    {
                                        channel: n,
                                        user: t,
                                        nick: r,
                                        mute: l.isVoiceMuted(),
                                        deaf: l.isVoiceDeafened(),
                                        video: l.selfVideo,
                                        serverMute: l.mute,
                                        serverDeaf: l.deaf
                                    },
                                    t.id
                                )
                              : null;
                      }),
                      f ? h : null
                  ]
              })
          });
}
