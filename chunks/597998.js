n.d(t, {
    e: function () {
        return N;
    }
}),
    n(653041),
    n(789020),
    n(47120);
var i,
    l = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    o = n(481060),
    c = n(434650),
    u = n(657305),
    d = n(367907),
    h = n(194082),
    m = n(282256),
    p = n(925329),
    f = n(833858),
    g = n(223135),
    C = n(374129),
    x = n(639351),
    v = n(630388),
    _ = n(51144),
    I = n(981631),
    E = n(354459),
    b = n(927923),
    S = n(388032),
    Z = n(557369);
function T(e, t, n) {
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
let N = (e) => {
        let { children: t, collapsed: n = !1, className: i } = e;
        return (0, l.jsx)('div', {
            className: a()(i, Z.list, n ? Z.listCollapse : Z.listDefault),
            role: 'group',
            children: t
        });
    },
    j = (e) => {
        let { hangStatusActivity: t, iconClassName: n, isSelf: i } = e;
        return i && null == t
            ? (0, l.jsx)(
                  o.TooltipContainer,
                  {
                      className: Z.iconSpacing,
                      text: S.intl.string(S.t.qstQub),
                      children: (0, l.jsx)(o.PlusLargeIcon, { className: a()(Z.icon, n) })
                  },
                  'add-status'
              )
            : (0, l.jsx)(
                  o.TooltipContainer,
                  {
                      className: Z.iconSpacing,
                      text: (0, f.O8)(t),
                      children: (0, l.jsx)(g.Z, {
                          hangStatusActivity: t,
                          className: a()(Z.hangStatusIcon, n)
                      })
                  },
                  'hang-status'
              );
    };
class A extends (i = r.Component) {
    renderPrioritySpeaker() {
        let { speaking: e, priority: t, collapsed: n, mute: i, serverMute: r } = this.props;
        return t && !n
            ? (0, l.jsx)(o.Tooltip, {
                  text: S.intl.string(S.t.BVK71t),
                  children: (t) =>
                      (0, l.jsx)('div', {
                          className: a()(Z.iconPriortySpeaker, { [Z.iconPriortySpeakerSpeaking]: !i && !r && e }),
                          ...t
                      })
              })
            : null;
    }
    renderAvatar() {
        let { speaking: e, user: t, size: n, avatarContainerClass: i, guildId: r } = this.props;
        return (0, l.jsx)('div', {
            className: a()(i, Z.avatar, {
                [Z.avatarLarge]: n === I.ipw.LARGE,
                [Z.avatarSmall]: n === I.ipw.SMALL,
                [Z.avatarSpeaking]: e
            }),
            style: { backgroundImage: 'url('.concat(t.getAvatarURL(r, n === I.ipw.LARGE ? 38 : 24), ')') }
        });
    }
    renderName() {
        let { nick: e, user: t, collapsed: n, speaking: i, userNameClassName: r, mute: s, serverMute: o, isGuest: c, isOverlay: u, guildId: d } = this.props,
            h = (0, l.jsxs)('div', {
                className: a()(r, {
                    [Z.username]: !0,
                    [Z.usernameSpeaking]: !s && !o && i
                }),
                children: [
                    null != e ? e : _.ZP.getName(t),
                    c
                        ? (0, l.jsxs)('span', {
                              className: Z.guestSuffix,
                              children: ['\xA0', S.intl.string(S.t['pFO/Pj'])]
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
                className: a()(Z.clanTag, u && Z.isOverlay),
                profileViewedAnalytics: {
                    source: u ? I.jXE.OVERLAY : I.Sbl.VOICE_PANEL,
                    tagUserId: t.id
                }
            };
        return !n || u
            ? (0, l.jsx)(l.Fragment, {
                  children: (0, l.jsx)(m.Z, {
                      ...p,
                      children: h
                  })
              })
            : null;
    }
    renderIcons() {
        let { mute: e, localMute: t, localVideoDisabled: n, serverMute: i, deaf: r, serverDeaf: s, collapsed: c, video: d, isStreaming: m, disabled: p, isWatching: f, iconClassName: g, embeddedApplication: _, otherClientSessionType: T, voicePlatform: N, hangStatusActivity: A, showHangStatus: M, isSelf: R, application: L, guildId: k, channelId: O, user: w, handleHoverHangStatus: D, handleHoverIcons: U, disconnected: B } = this.props;
        if (c || p) return null;
        let H = [],
            F = (0, l.jsx)(P, {
                iconClassName: g,
                mute: e,
                localMute: t,
                serverMute: i,
                deaf: r,
                serverDeaf: s
            });
        d &&
            (n
                ? H.push(
                      (0, l.jsx)(
                          o.TooltipContainer,
                          {
                              className: Z.iconSpacing,
                              text: S.intl.string(S.t['PXMZ//']),
                              children: (0, l.jsx)(o.VideoSlashIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: a()(Z.icon, g),
                                  colorClass: Z.strikethrough
                              })
                          },
                          'video'
                      )
                  )
                : H.push(
                      (0, l.jsx)(
                          o.TooltipContainer,
                          {
                              className: Z.iconSpacing,
                              text: S.intl.string(S.t.FlNoSU),
                              children: (0, l.jsx)(o.VideoIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: a()(Z.icon, g)
                              })
                          },
                          'video'
                      )
                  )),
            B &&
                H.push(
                    (0, l.jsx)(
                        o.TooltipContainer,
                        {
                            className: Z.iconSpacing,
                            text: S.intl.string(S.t.HFwRpq),
                            children: (0, l.jsx)(o.CircleWarningIcon, {
                                className: a()(Z.icon, g),
                                color: o.tokens.colors.STATUS_WARNING_BACKGROUND
                            })
                        },
                        'disconnected'
                    )
                ),
            null != _ &&
                H.push(
                    (0, l.jsx)(
                        o.TooltipContainer,
                        {
                            text: (0, u.Z)(_.name),
                            className: Z.iconSpacing,
                            children: (0, l.jsx)(o.ActivitiesIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: a()(Z.icon, g)
                            })
                        },
                        'activity'
                    )
                ),
            T === b.YE.XBOX || N === E.wR.XBOX
                ? H.push(
                      (0, l.jsx)(
                          'div',
                          {
                              className: a()(Z.iconSpacing),
                              children: (0, l.jsx)(x.Z, { className: a()(Z.icon, g) })
                          },
                          'xbox'
                      )
                  )
                : (T === b.YE.PLAYSTATION || N === E.wR.PLAYSTATION) &&
                  H.push(
                      (0, l.jsx)(
                          'div',
                          {
                              className: a()(Z.iconSpacing),
                              children: (0, l.jsx)(C.Z, { className: a()(Z.icon, g) })
                          },
                          'playstation'
                      )
                  ),
            m
                ? H.push(
                      (0, l.jsx)(
                          'div',
                          {
                              className: a()(Z.iconSpacing, Z.liveIconSpacing),
                              children: (0, l.jsx)(h.ZP, { size: h.ZP.Sizes.SMALL })
                          },
                          'stream'
                      )
                  )
                : f &&
                  H.push(
                      (0, l.jsx)(
                          o.TooltipContainer,
                          {
                              className: Z.iconSpacing,
                              text: S.intl.string(S.t.JH1SJy),
                              children: (0, l.jsx)(o.EyeIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: a()(Z.icon, g)
                              })
                          },
                          'watch'
                      )
                  );
        let G = null != L && !(0, v.yE)(L.flags, I.udG.EMBEDDED),
            V = null == A && G;
        return 0 !== H.length || null != F || M || V
            ? (0, l.jsxs)('div', {
                  className: Z.icons,
                  children: [
                      (0, l.jsxs)('div', {
                          className: Z.iconGroup,
                          onMouseEnter: () => (null == U ? void 0 : U(!0)),
                          onMouseLeave: () => (null == U ? void 0 : U(!1)),
                          children: [F, H]
                      }),
                      M || V
                          ? (0, l.jsx)('div', {
                                className: Z.iconGroup,
                                onMouseEnter: () => (null == D ? void 0 : D(!0)),
                                onMouseLeave: () => (null == D ? void 0 : D(!1)),
                                children: V
                                    ? (0, l.jsx)(
                                          y,
                                          {
                                              application: L,
                                              iconClassName: g,
                                              guildId: k,
                                              channelId: O,
                                              userId: w.id
                                          },
                                          ''.concat(w.id, '-game')
                                      )
                                    : (0, l.jsx)(j, {
                                          hangStatusActivity: A,
                                          iconClassName: g,
                                          isSelf: R
                                      })
                            })
                          : null
                  ]
              })
            : null;
    }
    render() {
        let { onClick: e, onKeyDown: t, flipped: n, size: i, className: r, selected: s, disabled: c, overlap: u, 'aria-label': d, tabIndex: h } = this.props;
        return (0, l.jsx)(o.Clickable, {
            className: a()(r, {
                [Z.voiceUser]: !0,
                [Z.overlap]: u,
                [Z.selected]: s,
                [Z.clickable]: null != e,
                [Z.userSmall]: i === I.ipw.SMALL,
                [Z.userLarge]: i === I.ipw.LARGE,
                [Z.disabled]: !s && c
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
            children: (0, l.jsxs)('div', {
                className: a()(Z.content, { [Z.flipped]: n }),
                children: [this.renderPrioritySpeaker(), this.renderAvatar(), this.renderName(), this.renderIcons()]
            })
        });
    }
    constructor(...e) {
        super(...e),
            T(this, 'handleClick', (e) => {
                let { onClick: t, user: n } = this.props;
                null == t || t(e, n);
            }),
            T(this, 'handleDoubleClick', (e) => {
                let { onDoubleClick: t, user: n } = this.props;
                null == t || t(e, n);
            }),
            T(this, 'handleContextMenu', (e) => {
                let { onContextMenu: t, user: n } = this.props;
                null == t || t(e, n);
            }),
            T(this, 'handleMouseLeave', (e) => {
                let { onMouseLeave: t, user: n } = this.props;
                null == t || t(e, n);
            }),
            T(this, 'handleMouseEnter', (e) => {
                let { onMouseEnter: t, user: n } = this.props;
                null == t || t(e, n);
            }),
            T(this, 'handleMouseDown', (e) => {
                let { onMouseDown: t, user: n } = this.props;
                null == t || t(e, n);
            });
    }
}
function y(e) {
    let { application: t, iconClassName: n, guildId: i, channelId: s, userId: u } = e,
        [h, m] = r.useState(!1),
        f = (0, c.O)((e) => m(e));
    return (
        r.useEffect(() => {
            h &&
                d.ZP.trackWithMetadata(I.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: s,
                    guild_id: i,
                    user_id: u
                });
        }, [t.id, s, i, u, h]),
        (0, l.jsx)(o.TooltipContainer, {
            text: S.intl.formatToPlainString(S.t.Sq9xJy, { game: t.name }),
            'aria-label': S.intl.formatToPlainString(S.t.Sq9xJy, { game: t.name }),
            className: Z.iconSpacing,
            children: (0, l.jsx)('div', {
                ref: f,
                children: (0, l.jsx)(p.Z, {
                    className: a()(Z.icon, n),
                    game: t,
                    size: p.Z.Sizes.XSMALL,
                    onMouseEnter: () => {
                        d.ZP.trackWithMetadata(I.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
                            channel_id: s,
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
function P(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: r, deaf: s, serverDeaf: c } = e,
        u = (0, o.useRedesignIconContext)().enabled,
        d = [];
    if (n) {
        let e;
        if (u) {
            let n;
            (n = r ? o.MicrophoneDenyIcon : i ? o.MicrophoneDenyIcon : o.MicrophoneSlashIcon),
                (e = (0, l.jsx)(n, {
                    className: a()(Z.icon, t, { [Z.iconServer]: r }),
                    color: 'currentColor'
                }));
        } else
            e = (0, l.jsx)(o.MicrophoneSlashIcon, {
                size: 'md',
                color: 'currentColor',
                className: a()(Z.icon, t, { [Z.iconServer]: r }),
                colorClass: i ? Z.strikethrough : void 0
            });
        d.push(
            (0, l.jsx)(
                o.TooltipContainer,
                {
                    text: i ? S.intl.string(S.t.Q8Uzoa) : r ? S.intl.string(S.t.uLddbW) : S.intl.string(S.t.tjtv3N),
                    className: Z.iconSpacing,
                    children: e
                },
                'mute'
            )
        );
    }
    if (c || s) {
        let e;
        if (u) {
            let n = c ? o.HeadphonesDenyIcon : o.HeadphonesSlashIcon;
            e = (0, l.jsx)(n, {
                className: a()(Z.icon, t, { [Z.iconServer]: c }),
                color: 'currentColor'
            });
        } else
            e = (0, l.jsx)(o.HeadphonesSlashIcon, {
                size: 'md',
                color: 'currentColor',
                className: a()(Z.icon, t, { [Z.iconServer]: c })
            });
        d.push(
            (0, l.jsx)(
                o.TooltipContainer,
                {
                    className: Z.iconSpacing,
                    text: c ? S.intl.string(S.t.btxSdH) : S.intl.string(S.t.NjmiOD),
                    children: e
                },
                'deaf'
            )
        );
    }
    return 0 === d.length ? null : (0, l.jsx)(l.Fragment, { children: d });
}
T(A, 'defaultProps', {
    avatarContainerClass: Z.avatarContainer,
    userNameClassName: Z.usernameFont,
    size: I.ipw.SMALL,
    selected: !1,
    disabled: !1,
    isOverlay: !1
}),
    (t.Z = A);
