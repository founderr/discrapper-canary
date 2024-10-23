n.d(t, {
    e: function () {
        return Z;
    }
}),
    n(653041),
    n(789020),
    n(47120);
var i,
    s = n(200651),
    a = n(192379),
    l = n(120356),
    r = n.n(l),
    o = n(481060),
    c = n(434650),
    u = n(657305),
    d = n(367907),
    h = n(194082),
    m = n(282256),
    p = n(925329),
    _ = n(833858),
    f = n(223135),
    E = n(374129),
    g = n(639351),
    C = n(630388),
    I = n(51144),
    T = n(981631),
    x = n(354459),
    S = n(927923),
    v = n(689938),
    N = n(557369);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let Z = (e) => {
        let { children: t, collapsed: n = !1, className: i } = e;
        return (0, s.jsx)('div', {
            className: r()(i, N.list, n ? N.listCollapse : N.listDefault),
            role: 'group',
            children: t
        });
    },
    M = (e) => {
        let { hangStatusActivity: t, iconClassName: n, isSelf: i } = e;
        return i && null == t
            ? (0, s.jsx)(
                  o.TooltipContainer,
                  {
                      className: N.iconSpacing,
                      text: v.Z.Messages.HANG_STATUS_VC_ROW_ADD,
                      children: (0, s.jsx)(o.PlusLargeIcon, { className: r()(N.icon, n) })
                  },
                  'add-status'
              )
            : (0, s.jsx)(
                  o.TooltipContainer,
                  {
                      className: N.iconSpacing,
                      text: (0, _.O8)(t),
                      children: (0, s.jsx)(f.Z, {
                          hangStatusActivity: t,
                          className: r()(N.hangStatusIcon, n)
                      })
                  },
                  'hang-status'
              );
    };
class b extends (i = a.Component) {
    renderPrioritySpeaker() {
        let { speaking: e, priority: t, collapsed: n, mute: i, serverMute: a } = this.props;
        return t && !n
            ? (0, s.jsx)(o.Tooltip, {
                  text: v.Z.Messages.PRIORITY_SPEAKER,
                  children: (t) =>
                      (0, s.jsx)('div', {
                          className: r()(N.iconPriortySpeaker, { [N.iconPriortySpeakerSpeaking]: !i && !a && e }),
                          ...t
                      })
              })
            : null;
    }
    renderAvatar() {
        let { speaking: e, user: t, size: n, avatarContainerClass: i, guildId: a } = this.props;
        return (0, s.jsx)('div', {
            className: r()(i, N.avatar, {
                [N.avatarLarge]: n === T.ipw.LARGE,
                [N.avatarSmall]: n === T.ipw.SMALL,
                [N.avatarSpeaking]: e
            }),
            style: { backgroundImage: 'url('.concat(t.getAvatarURL(a, n === T.ipw.LARGE ? 38 : 24), ')') }
        });
    }
    renderName() {
        let { nick: e, user: t, collapsed: n, speaking: i, userNameClassName: a, mute: l, serverMute: o, isGuest: c, isOverlay: u, guildId: d } = this.props,
            h = (0, s.jsxs)('div', {
                className: r()(a, {
                    [N.username]: !0,
                    [N.usernameSpeaking]: !l && !o && i
                }),
                children: [
                    null != e ? e : I.ZP.getName(t),
                    c
                        ? (0, s.jsxs)('span', {
                              className: N.guestSuffix,
                              children: ['\xA0', v.Z.Messages.GUEST_NAME_SUFFIX]
                          })
                        : ''
                ]
            }),
            p = {
                clan: t.clan,
                userId: t.id,
                contextGuildId: d,
                isOverlay: u,
                disableTooltip: !0,
                className: r()(N.clanTag, u && N.isOverlay),
                profileViewedAnalytics: {
                    source: u ? T.jXE.OVERLAY : T.Sbl.VOICE_PANEL,
                    tagUserId: t.id
                }
            };
        return !n || u
            ? (0, s.jsx)(s.Fragment, {
                  children: (0, s.jsx)(m.Z, {
                      ...p,
                      children: h
                  })
              })
            : null;
    }
    renderIcons() {
        let { mute: e, localMute: t, localVideoDisabled: n, serverMute: i, deaf: a, serverDeaf: l, collapsed: c, video: d, isStreaming: m, disabled: p, isWatching: _, iconClassName: f, embeddedApplication: I, otherClientSessionType: A, voicePlatform: Z, hangStatusActivity: b, showHangStatus: j, isSelf: P, application: O, guildId: y, channelId: D, user: U, handleHoverHangStatus: k, handleHoverIcons: w, disconnected: B } = this.props;
        if (c || p) return null;
        let H = [],
            G = (0, s.jsx)(L, {
                iconClassName: f,
                mute: e,
                localMute: t,
                serverMute: i,
                deaf: a,
                serverDeaf: l
            });
        d &&
            (n
                ? H.push(
                      (0, s.jsx)(
                          o.TooltipContainer,
                          {
                              className: N.iconSpacing,
                              text: v.Z.Messages.LOCAL_VIDEO_DISABLED,
                              children: (0, s.jsx)(o.VideoSlashIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: r()(N.icon, f),
                                  colorClass: N.strikethrough
                              })
                          },
                          'video'
                      )
                  )
                : H.push(
                      (0, s.jsx)(
                          o.TooltipContainer,
                          {
                              className: N.iconSpacing,
                              text: v.Z.Messages.VIDEO,
                              children: (0, s.jsx)(o.VideoIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: r()(N.icon, f)
                              })
                          },
                          'video'
                      )
                  )),
            B &&
                H.push(
                    (0, s.jsx)(
                        o.TooltipContainer,
                        {
                            className: N.iconSpacing,
                            text: v.Z.Messages.NOTICE_USER_DISCONNECTED,
                            children: (0, s.jsx)(o.CircleWarningIcon, {
                                className: r()(N.icon, f),
                                color: o.tokens.colors.STATUS_WARNING_BACKGROUND
                            })
                        },
                        'disconnected'
                    )
                ),
            null != I &&
                H.push(
                    (0, s.jsx)(
                        o.TooltipContainer,
                        {
                            text: (0, u.Z)(I.name),
                            className: N.iconSpacing,
                            children: (0, s.jsx)(o.ActivitiesIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: r()(N.icon, f)
                            })
                        },
                        'activity'
                    )
                ),
            A === S.YE.XBOX || Z === x.wR.XBOX
                ? H.push(
                      (0, s.jsx)(
                          'div',
                          {
                              className: r()(N.iconSpacing),
                              children: (0, s.jsx)(g.Z, { className: r()(N.icon, f) })
                          },
                          'xbox'
                      )
                  )
                : (A === S.YE.PLAYSTATION || Z === x.wR.PLAYSTATION) &&
                  H.push(
                      (0, s.jsx)(
                          'div',
                          {
                              className: r()(N.iconSpacing),
                              children: (0, s.jsx)(E.Z, { className: r()(N.icon, f) })
                          },
                          'playstation'
                      )
                  ),
            m
                ? H.push(
                      (0, s.jsx)(
                          'div',
                          {
                              className: r()(N.iconSpacing, N.liveIconSpacing),
                              children: (0, s.jsx)(h.ZP, { size: h.ZP.Sizes.SMALL })
                          },
                          'stream'
                      )
                  )
                : _ &&
                  H.push(
                      (0, s.jsx)(
                          o.TooltipContainer,
                          {
                              className: N.iconSpacing,
                              text: v.Z.Messages.WATCH_STREAM_WATCHING,
                              children: (0, s.jsx)(o.EyeIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: r()(N.icon, f)
                              })
                          },
                          'watch'
                      )
                  );
        let V = null != O && !(0, C.yE)(O.flags, T.udG.EMBEDDED),
            F = null == b && V;
        return 0 !== H.length || null != G || j || F
            ? (0, s.jsxs)('div', {
                  className: N.icons,
                  children: [
                      (0, s.jsxs)('div', {
                          className: N.iconGroup,
                          onMouseEnter: () => (null == w ? void 0 : w(!0)),
                          onMouseLeave: () => (null == w ? void 0 : w(!1)),
                          children: [G, H]
                      }),
                      j || F
                          ? (0, s.jsx)('div', {
                                className: N.iconGroup,
                                onMouseEnter: () => (null == k ? void 0 : k(!0)),
                                onMouseLeave: () => (null == k ? void 0 : k(!1)),
                                children: F
                                    ? (0, s.jsx)(
                                          R,
                                          {
                                              application: O,
                                              iconClassName: f,
                                              guildId: y,
                                              channelId: D,
                                              userId: U.id
                                          },
                                          ''.concat(U.id, '-game')
                                      )
                                    : (0, s.jsx)(M, {
                                          hangStatusActivity: b,
                                          iconClassName: f,
                                          isSelf: P
                                      })
                            })
                          : null
                  ]
              })
            : null;
    }
    render() {
        let { onClick: e, onKeyDown: t, flipped: n, size: i, className: a, selected: l, disabled: c, overlap: u, 'aria-label': d, tabIndex: h } = this.props;
        return (0, s.jsx)(o.Clickable, {
            className: r()(a, {
                [N.voiceUser]: !0,
                [N.overlap]: u,
                [N.selected]: l,
                [N.clickable]: null != e,
                [N.userSmall]: i === T.ipw.SMALL,
                [N.userLarge]: i === T.ipw.LARGE,
                [N.disabled]: !l && c
            }),
            onClick: this.handleClick,
            onDoubleClick: this.handleDoubleClick,
            onContextMenu: this.handleContextMenu,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseDown: this.handleMouseDown,
            onKeyDown: t,
            'aria-label': d,
            tabIndex: h,
            children: (0, s.jsxs)('div', {
                className: r()(N.content, { [N.flipped]: n }),
                children: [this.renderPrioritySpeaker(), this.renderAvatar(), this.renderName(), this.renderIcons()]
            })
        });
    }
    constructor(...e) {
        super(...e),
            A(this, 'handleClick', (e) => {
                let { onClick: t, user: n } = this.props;
                null == t || t(e, n);
            }),
            A(this, 'handleDoubleClick', (e) => {
                let { onDoubleClick: t, user: n } = this.props;
                null == t || t(e, n);
            }),
            A(this, 'handleContextMenu', (e) => {
                let { onContextMenu: t, user: n } = this.props;
                null == t || t(e, n);
            }),
            A(this, 'handleMouseLeave', (e) => {
                let { onMouseLeave: t, user: n } = this.props;
                null == t || t(e, n);
            }),
            A(this, 'handleMouseEnter', (e) => {
                let { onMouseEnter: t, user: n } = this.props;
                null == t || t(e, n);
            }),
            A(this, 'handleMouseDown', (e) => {
                let { onMouseDown: t, user: n } = this.props;
                null == t || t(e, n);
            });
    }
}
function R(e) {
    let { application: t, iconClassName: n, guildId: i, channelId: l, userId: u } = e,
        [h, m] = a.useState(!1),
        _ = (0, c.O)((e) => m(e));
    return (
        a.useEffect(() => {
            h &&
                d.ZP.trackWithMetadata(T.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: l,
                    guild_id: i,
                    user_id: u
                });
        }, [t.id, l, i, u, h]),
        (0, s.jsx)(o.TooltipContainer, {
            text: v.Z.Messages.UNFORMATTED_PLAYING_GAME.format({ game: t.name }),
            'aria-label': v.Z.Messages.UNFORMATTED_PLAYING_GAME.format({ game: t.name }),
            className: N.iconSpacing,
            children: (0, s.jsx)('div', {
                ref: _,
                children: (0, s.jsx)(p.Z, {
                    className: r()(N.icon, n),
                    game: t,
                    size: p.Z.Sizes.XSMALL,
                    onMouseEnter: () => {
                        d.ZP.trackWithMetadata(T.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
                            channel_id: l,
                            guild_id: i,
                            game_name: t.name,
                            user_id: u
                        });
                    }
                })
            })
        })
    );
}
function L(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: a, deaf: l, serverDeaf: c } = e,
        u = (0, o.useRedesignIconContext)().enabled,
        d = [];
    if (n) {
        let e;
        if (u) {
            let n;
            (n = a ? o.MicrophoneDenyIcon : i ? o.MicrophoneDenyIcon : o.MicrophoneSlashIcon),
                (e = (0, s.jsx)(n, {
                    className: r()(N.icon, t, { [N.iconServer]: a }),
                    color: 'currentColor'
                }));
        } else
            e = (0, s.jsx)(o.MicrophoneSlashIcon, {
                size: 'md',
                color: 'currentColor',
                className: r()(N.icon, t, { [N.iconServer]: a }),
                colorClass: i ? N.strikethrough : void 0
            });
        d.push(
            (0, s.jsx)(
                o.TooltipContainer,
                {
                    text: i ? v.Z.Messages.LOCAL_MUTED : a ? v.Z.Messages.SERVER_MUTED : v.Z.Messages.VOICE_CHANNEL_MUTED,
                    className: N.iconSpacing,
                    children: e
                },
                'mute'
            )
        );
    }
    if (c || l) {
        let e;
        if (u) {
            let n = c ? o.HeadphonesDenyIcon : o.HeadphonesSlashIcon;
            e = (0, s.jsx)(n, {
                className: r()(N.icon, t, { [N.iconServer]: c }),
                color: 'currentColor'
            });
        } else
            e = (0, s.jsx)(o.HeadphonesSlashIcon, {
                size: 'md',
                color: 'currentColor',
                className: r()(N.icon, t, { [N.iconServer]: c })
            });
        d.push(
            (0, s.jsx)(
                o.TooltipContainer,
                {
                    className: N.iconSpacing,
                    text: c ? v.Z.Messages.SERVER_DEAFENED : v.Z.Messages.VOICE_CHANNEL_DEAFENED,
                    children: e
                },
                'deaf'
            )
        );
    }
    return 0 === d.length ? null : (0, s.jsx)(s.Fragment, { children: d });
}
A(b, 'defaultProps', {
    avatarContainerClass: N.avatarContainer,
    userNameClassName: N.usernameFont,
    size: T.ipw.SMALL,
    selected: !1,
    disabled: !1,
    isOverlay: !1
}),
    (t.Z = b);
