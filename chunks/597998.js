n.d(t, {
    e: function () {
        return A;
    }
}),
    n(653041),
    n(789020),
    n(47120);
var i,
    a = n(735250),
    s = n(470079),
    l = n(120356),
    r = n.n(l),
    o = n(481060),
    c = n(434650),
    u = n(657305),
    d = n(367907),
    h = n(194082),
    p = n(282256),
    m = n(925329),
    _ = n(833858),
    f = n(223135),
    E = n(374129),
    C = n(639351),
    g = n(630388),
    I = n(51144),
    x = n(981631),
    T = n(354459),
    N = n(927923),
    S = n(689938),
    v = n(164952);
function Z(e, t, n) {
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
let A = (e) => {
        let { children: t, collapsed: n = !1, className: i } = e;
        return (0, a.jsx)('div', {
            className: r()(i, v.list, n ? v.listCollapse : v.listDefault),
            role: 'group',
            children: t
        });
    },
    M = (e) => {
        let { hangStatusActivity: t, iconClassName: n, isSelf: i } = e;
        return i && null == t
            ? (0, a.jsx)(
                  o.TooltipContainer,
                  {
                      className: v.iconSpacing,
                      text: S.Z.Messages.HANG_STATUS_VC_ROW_ADD,
                      children: (0, a.jsx)(o.PlusLargeIcon, { className: r()(v.icon, n) })
                  },
                  'add-status'
              )
            : (0, a.jsx)(
                  o.TooltipContainer,
                  {
                      className: v.iconSpacing,
                      text: (0, _.O8)(t),
                      children: (0, a.jsx)(f.Z, {
                          hangStatusActivity: t,
                          className: r()(v.hangStatusIcon, n)
                      })
                  },
                  'hang-status'
              );
    };
class b extends (i = s.Component) {
    renderPrioritySpeaker() {
        let { speaking: e, priority: t, collapsed: n, mute: i, serverMute: s } = this.props;
        return t && !n
            ? (0, a.jsx)(o.Tooltip, {
                  text: S.Z.Messages.PRIORITY_SPEAKER,
                  children: (t) =>
                      (0, a.jsx)('div', {
                          className: r()(v.iconPriortySpeaker, { [v.iconPriortySpeakerSpeaking]: !i && !s && e }),
                          ...t
                      })
              })
            : null;
    }
    renderAvatar() {
        let { speaking: e, user: t, size: n, avatarContainerClass: i, guildId: s } = this.props;
        return (0, a.jsx)('div', {
            className: r()(i, v.avatar, {
                [v.avatarLarge]: n === x.ipw.LARGE,
                [v.avatarSmall]: n === x.ipw.SMALL,
                [v.avatarSpeaking]: e
            }),
            style: { backgroundImage: 'url('.concat(t.getAvatarURL(s, n === x.ipw.LARGE ? 38 : 24), ')') }
        });
    }
    renderName() {
        let { nick: e, user: t, collapsed: n, speaking: i, userNameClassName: s, mute: l, serverMute: o, isGuest: c, isOverlay: u, guildId: d } = this.props,
            h = (0, a.jsxs)('div', {
                className: r()(s, {
                    [v.username]: !0,
                    [v.usernameSpeaking]: !l && !o && i
                }),
                children: [
                    null != e ? e : I.ZP.getName(t),
                    c
                        ? (0, a.jsxs)('span', {
                              className: v.guestSuffix,
                              children: ['\xA0', S.Z.Messages.GUEST_NAME_SUFFIX]
                          })
                        : ''
                ]
            }),
            m = {
                clan: t.clan,
                userId: t.id,
                contextGuildId: d,
                isOverlay: u,
                disableTooltip: !0,
                className: r()(v.clanTag, u && v.isOverlay),
                profileViewedAnalytics: {
                    source: u ? x.jXE.OVERLAY : x.Sbl.VOICE_PANEL,
                    tagUserId: t.id
                }
            };
        return !n || u
            ? (0, a.jsx)(a.Fragment, {
                  children: (0, a.jsx)(p.Z, {
                      ...m,
                      children: h
                  })
              })
            : null;
    }
    renderIcons() {
        let { mute: e, localMute: t, localVideoDisabled: n, serverMute: i, deaf: s, serverDeaf: l, collapsed: c, video: d, isStreaming: p, disabled: m, isWatching: _, iconClassName: f, embeddedApplication: I, otherClientSessionType: Z, voicePlatform: A, hangStatusActivity: b, showHangStatus: j, isSelf: O, application: P, guildId: y, channelId: D, user: k, handleHoverHangStatus: U, handleHoverIcons: w, disconnected: B } = this.props;
        if (c || m) return null;
        let H = [],
            G = (0, a.jsx)(L, {
                iconClassName: f,
                mute: e,
                localMute: t,
                serverMute: i,
                deaf: s,
                serverDeaf: l
            });
        d &&
            (n
                ? H.push(
                      (0, a.jsx)(
                          o.TooltipContainer,
                          {
                              className: v.iconSpacing,
                              text: S.Z.Messages.LOCAL_VIDEO_DISABLED,
                              children: (0, a.jsx)(o.VideoSlashIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: r()(v.icon, f),
                                  colorClass: v.strikethrough
                              })
                          },
                          'video'
                      )
                  )
                : H.push(
                      (0, a.jsx)(
                          o.TooltipContainer,
                          {
                              className: v.iconSpacing,
                              text: S.Z.Messages.VIDEO,
                              children: (0, a.jsx)(o.VideoIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: r()(v.icon, f)
                              })
                          },
                          'video'
                      )
                  )),
            B &&
                H.push(
                    (0, a.jsx)(
                        o.TooltipContainer,
                        {
                            className: v.iconSpacing,
                            text: S.Z.Messages.NOTICE_USER_DISCONNECTED,
                            children: (0, a.jsx)(o.CircleWarningIcon, {
                                className: r()(v.icon, f),
                                color: o.tokens.colors.STATUS_WARNING_BACKGROUND
                            })
                        },
                        'disconnected'
                    )
                ),
            null != I &&
                H.push(
                    (0, a.jsx)(
                        o.TooltipContainer,
                        {
                            text: (0, u.Z)(I.name),
                            className: v.iconSpacing,
                            children: (0, a.jsx)(o.ActivitiesIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: r()(v.icon, f)
                            })
                        },
                        'activity'
                    )
                ),
            Z === N.YE.XBOX || A === T.wR.XBOX
                ? H.push(
                      (0, a.jsx)(
                          'div',
                          {
                              className: r()(v.iconSpacing),
                              children: (0, a.jsx)(C.Z, { className: r()(v.icon, f) })
                          },
                          'xbox'
                      )
                  )
                : (Z === N.YE.PLAYSTATION || A === T.wR.PLAYSTATION) &&
                  H.push(
                      (0, a.jsx)(
                          'div',
                          {
                              className: r()(v.iconSpacing),
                              children: (0, a.jsx)(E.Z, { className: r()(v.icon, f) })
                          },
                          'playstation'
                      )
                  ),
            p
                ? H.push(
                      (0, a.jsx)(
                          'div',
                          {
                              className: r()(v.iconSpacing, v.liveIconSpacing),
                              children: (0, a.jsx)(h.ZP, { size: h.ZP.Sizes.SMALL })
                          },
                          'stream'
                      )
                  )
                : _ &&
                  H.push(
                      (0, a.jsx)(
                          o.TooltipContainer,
                          {
                              className: v.iconSpacing,
                              text: S.Z.Messages.WATCH_STREAM_WATCHING,
                              children: (0, a.jsx)(o.EyeIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: r()(v.icon, f)
                              })
                          },
                          'watch'
                      )
                  );
        let V = null != P && !(0, g.yE)(P.flags, x.udG.EMBEDDED),
            F = null == b && V;
        return 0 !== H.length || null != G || j || F
            ? (0, a.jsxs)('div', {
                  className: v.icons,
                  children: [
                      (0, a.jsxs)('div', {
                          className: v.iconGroup,
                          onMouseEnter: () => (null == w ? void 0 : w(!0)),
                          onMouseLeave: () => (null == w ? void 0 : w(!1)),
                          children: [G, H]
                      }),
                      j || F
                          ? (0, a.jsx)('div', {
                                className: v.iconGroup,
                                onMouseEnter: () => (null == U ? void 0 : U(!0)),
                                onMouseLeave: () => (null == U ? void 0 : U(!1)),
                                children: F
                                    ? (0, a.jsx)(
                                          R,
                                          {
                                              application: P,
                                              iconClassName: f,
                                              guildId: y,
                                              channelId: D,
                                              userId: k.id
                                          },
                                          ''.concat(k.id, '-game')
                                      )
                                    : (0, a.jsx)(M, {
                                          hangStatusActivity: b,
                                          iconClassName: f,
                                          isSelf: O
                                      })
                            })
                          : null
                  ]
              })
            : null;
    }
    render() {
        let { onClick: e, onKeyDown: t, flipped: n, size: i, className: s, selected: l, disabled: c, overlap: u, 'aria-label': d, tabIndex: h } = this.props;
        return (0, a.jsx)(o.Clickable, {
            className: r()(s, {
                [v.voiceUser]: !0,
                [v.overlap]: u,
                [v.selected]: l,
                [v.clickable]: null != e,
                [v.userSmall]: i === x.ipw.SMALL,
                [v.userLarge]: i === x.ipw.LARGE,
                [v.disabled]: !l && c
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
            children: (0, a.jsxs)('div', {
                className: r()(v.content, { [v.flipped]: n }),
                children: [this.renderPrioritySpeaker(), this.renderAvatar(), this.renderName(), this.renderIcons()]
            })
        });
    }
    constructor(...e) {
        super(...e),
            Z(this, 'handleClick', (e) => {
                let { onClick: t, user: n } = this.props;
                null == t || t(e, n);
            }),
            Z(this, 'handleDoubleClick', (e) => {
                let { onDoubleClick: t, user: n } = this.props;
                null == t || t(e, n);
            }),
            Z(this, 'handleContextMenu', (e) => {
                let { onContextMenu: t, user: n } = this.props;
                null == t || t(e, n);
            }),
            Z(this, 'handleMouseLeave', (e) => {
                let { onMouseLeave: t, user: n } = this.props;
                null == t || t(e, n);
            }),
            Z(this, 'handleMouseEnter', (e) => {
                let { onMouseEnter: t, user: n } = this.props;
                null == t || t(e, n);
            }),
            Z(this, 'handleMouseDown', (e) => {
                let { onMouseDown: t, user: n } = this.props;
                null == t || t(e, n);
            });
    }
}
function R(e) {
    let { application: t, iconClassName: n, guildId: i, channelId: l, userId: u } = e,
        [h, p] = s.useState(!1),
        _ = (0, c.O)((e) => p(e));
    return (
        s.useEffect(() => {
            h &&
                d.ZP.trackWithMetadata(x.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: l,
                    guild_id: i,
                    user_id: u
                });
        }, [t.id, l, i, u, h]),
        (0, a.jsx)(o.TooltipContainer, {
            text: S.Z.Messages.UNFORMATTED_PLAYING_GAME.format({ game: t.name }),
            'aria-label': S.Z.Messages.UNFORMATTED_PLAYING_GAME.format({ game: t.name }),
            className: v.iconSpacing,
            children: (0, a.jsx)('div', {
                ref: _,
                children: (0, a.jsx)(m.Z, {
                    className: r()(v.icon, n),
                    game: t,
                    size: m.Z.Sizes.XSMALL,
                    onMouseEnter: () => {
                        d.ZP.trackWithMetadata(x.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
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
    let { iconClassName: t, mute: n, localMute: i, serverMute: s, deaf: l, serverDeaf: c } = e,
        u = (0, o.useRedesignIconContext)().enabled,
        d = [];
    if (n) {
        let e;
        if (u) {
            let n;
            (n = s ? o.MicrophoneDenyIcon : i ? o.MicrophoneDenyIcon : o.MicrophoneSlashIcon),
                (e = (0, a.jsx)(n, {
                    className: r()(v.icon, t, { [v.iconServer]: s }),
                    color: 'currentColor'
                }));
        } else
            e = (0, a.jsx)(o.MicrophoneSlashIcon, {
                size: 'md',
                color: 'currentColor',
                className: r()(v.icon, t, { [v.iconServer]: s }),
                colorClass: i ? v.strikethrough : void 0
            });
        d.push(
            (0, a.jsx)(
                o.TooltipContainer,
                {
                    text: i ? S.Z.Messages.LOCAL_MUTED : s ? S.Z.Messages.SERVER_MUTED : S.Z.Messages.VOICE_CHANNEL_MUTED,
                    className: v.iconSpacing,
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
            e = (0, a.jsx)(n, {
                className: r()(v.icon, t, { [v.iconServer]: c }),
                color: 'currentColor'
            });
        } else
            e = (0, a.jsx)(o.HeadphonesSlashIcon, {
                size: 'md',
                color: 'currentColor',
                className: r()(v.icon, t, { [v.iconServer]: c })
            });
        d.push(
            (0, a.jsx)(
                o.TooltipContainer,
                {
                    className: v.iconSpacing,
                    text: c ? S.Z.Messages.SERVER_DEAFENED : S.Z.Messages.VOICE_CHANNEL_DEAFENED,
                    children: e
                },
                'deaf'
            )
        );
    }
    return 0 === d.length ? null : (0, a.jsx)(a.Fragment, { children: d });
}
Z(b, 'defaultProps', {
    avatarContainerClass: v.avatarContainer,
    userNameClassName: v.usernameFont,
    size: x.ipw.SMALL,
    selected: !1,
    disabled: !1,
    isOverlay: !1
}),
    (t.Z = b);
