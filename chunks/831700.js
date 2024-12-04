n.d(t, {
    Z: function () {
        return et;
    }
}),
    n(47120),
    n(411104);
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(846519),
    s = n(481060),
    c = n(475179),
    u = n(239091),
    d = n(146773),
    h = n(888651),
    p = n(619915),
    m = n(339340),
    f = n(201895),
    g = n(718589),
    C = n(933557),
    _ = n(557135),
    v = n(873696),
    x = n(215339),
    I = n(832382),
    b = n(446226),
    S = n(305325),
    E = n(281956),
    Z = n(66999),
    N = n(554747),
    y = n(378844),
    T = n(574176),
    A = n(359110),
    j = n(155409),
    P = n(695346),
    R = n(447564),
    M = n(592125),
    L = n(430824),
    w = n(607744),
    D = n(496675),
    O = n(306680),
    k = n(9156),
    G = n(979651),
    U = n(934415),
    B = n(63063),
    H = n(98597),
    V = n(648501),
    F = n(473403),
    W = n(830993),
    z = n(653577),
    Y = n(207055),
    K = n(981631),
    q = n(647086),
    Q = n(388032),
    X = n(831746);
function J(e, t, n) {
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
class $ extends H.ZP {
    componentWillUnmount() {
        this.activitiesHideTimeout.stop();
    }
    getVoiceStatesCount() {
        var e;
        let { voiceStates: t } = this.props;
        return null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, U.rY)(e, G.Z, L.Z);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return X.containerUserOver;
        if (null != t) return e > t ? X.containerDragAfter : X.containerDragBefore;
        return X.containerDefault;
    }
    renderSubtitle() {
        var e;
        let { channel: t, connected: n, enableHangStatus: l, allowChannelTopic: r } = this.props,
            a = null === (e = (0, v.D)(this.props.subtitle)) || void 0 === e ? void 0 : e.subtitle,
            { hovered: o } = this.state;
        return (0, i.jsx)(z.Z, {
            onClick: this.handleVoiceStatusClick,
            channel: t,
            connected: n,
            subtitle: a,
            hovered: o,
            enableHangStatus: l,
            allowChannelTopic: r
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: l, tabIndex: r } = this.props;
        return (0, i.jsx)(Y.Z, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: l,
            tabIndex: r,
            location: K.Sbl.GUILD_CHANNEL_LIST
        });
    }
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e
            ? null
            : (0, i.jsx)('div', {
                  className: X.channelInfo,
                  children: e
              });
    }
    renderHDSplashedIcon() {
        let { channel: e, locked: t } = this.props;
        return t || !e.isHDStreamSplashed
            ? null
            : (0, i.jsx)(s.Tooltip, {
                  text: Q.intl.string(Q.t.gpF6QU),
                  children: (t) => {
                      let { onMouseEnter: n, onMouseLeave: l, onFocus: a, onBlur: o } = t;
                      return (0, i.jsx)(s.Clickable, {
                          className: r()(X.iconItem, X.alwaysShown),
                          onClick: () => {
                              (0, x.X)('VoiceChannel') ? (0, R.openHDPotionModal)(e, 'VoiceChannel') : window.open(B.Z.getArticleURL(K.BhN.HD_STREAMING_POTION), '_blank');
                          },
                          'aria-label': Q.intl.string(Q.t.gpF6QU),
                          onMouseEnter: n,
                          onMouseLeave: l,
                          onFocus: a,
                          onBlur: o,
                          children: (0, i.jsx)(s.PotionIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              className: X.actionIcon
                          })
                      });
                  }
              });
    }
    render() {
        let { channel: e, selected: t, connected: n, unread: l, resolvedUnreadSetting: a, mentionCount: o, locked: c, sorting: u, isUserOver: d, connectChannelDropTarget: h, connectChannelDragSource: p, connectUserDropTarget: m, connectDragPreview: C, canReorderChannel: _, canMoveMembers: v, showTutorial: x, hasActiveEvent: b, embeddedApps: S, isSubscriptionGated: E, isFavoriteSuggestion: Z, withGuildIcon: N } = this.props,
            { shouldShowActivities: y, shouldShowGuildVerificationPopout: T } = this.state,
            A = this.getVoiceStatesCount(),
            P = (0, i.jsxs)('li', {
                className: r()(this.getModeClass(), { [X.disabled]: this.isDisabled() }),
                'data-dnd-name': e.name,
                children: [
                    (0, i.jsx)('div', {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, i.jsx)(s.Popout, {
                            position: 'right',
                            renderPopout: this.renderPopout,
                            spacing: 0,
                            onRequestClose: this.closeGuildVerificationPopout,
                            shouldShow: (y && !u && !d && !T) || T,
                            children: () =>
                                (0, i.jsx)(s.Tooltip, {
                                    text: this.getTooltipText(),
                                    children: (s) => {
                                        let { onClick: u, onContextMenu: d, ...h } = s;
                                        return (0, i.jsx)(I.Z, {
                                            channel: e,
                                            children: (0, i.jsxs)(F.Z, {
                                                className: X.iconVisibility,
                                                iconClassName: r()({ [X.iconLive]: b }),
                                                channel: e,
                                                selected: !Z && t,
                                                connected: n,
                                                unread: n ? l : void 0,
                                                resolvedUnreadSetting: a,
                                                mentionCount: o,
                                                locked: c,
                                                subtitle: this.renderSubtitle(),
                                                onClick: () => {
                                                    this.handleClick(), null == u || u();
                                                },
                                                onContextMenu: (e) => {
                                                    this.handleContextMenu(e), null == d || d();
                                                },
                                                connectDragPreview: C,
                                                isFavoriteSuggestion: Z,
                                                'aria-label': (0, f.ZP)({
                                                    channel: e,
                                                    unread: l,
                                                    mentionCount: o,
                                                    userCount: A,
                                                    embeddedActivitiesCount: S.length,
                                                    isSubscriptionGated: E
                                                }),
                                                'aria-describedby': (0, g.Z)({
                                                    channel: e,
                                                    embeddedApps: S
                                                }),
                                                withGuildIcon: N,
                                                ...h,
                                                children: [Z && this.renderAcceptSuggestionButton(), Z && this.renderRemoveSuggestionButton(), !Z && this.renderOpenChatButton(), !Z && this.renderInviteButton(), !Z && this.renderEditButton(), !Z && this.renderChannelInfo(), !Z && this.renderHDSplashedIcon()]
                                            })
                                        });
                                    }
                                })
                        })
                    }),
                    this.renderVoiceUsers()
                ]
            });
        return (
            v && (P = m(P)),
            _ && (P = h(p(P))),
            x &&
                (P = (0, i.jsx)(j.Z, {
                    tutorialId: 'voice-conversations',
                    position: 'right',
                    offsetX: -20,
                    children: P
                })),
            P
        );
    }
    constructor(...e) {
        super(...e),
            J(this, 'state', {
                shouldShowActivities: !1,
                shouldShowGuildVerificationPopout: !1,
                hovered: !1
            }),
            J(this, 'activitiesHideTimeout', new o.V7()),
            J(this, 'closeGuildVerificationPopout', () => {
                this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            J(this, 'handleVoiceConnect', () => {
                let { locked: e, connected: t, channel: n, unverifiedAccount: i, needSubscriptionToAccess: l } = this.props;
                i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
                    _.Z.handleVoiceConnect({
                        channel: n,
                        connected: t,
                        needSubscriptionToAccess: l,
                        locked: e
                    });
            }),
            J(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    l = L.Z.getGuild(t.getGuildId());
                null != l &&
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('83331')]).then(n.bind(n, 213202));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                channel: t,
                                guild: l
                            });
                    });
            }),
            J(this, 'handleMouseEnter', () => {
                this.activitiesHideTimeout.stop(),
                    this.setState({
                        shouldShowActivities: !0,
                        hovered: !0
                    });
            }),
            J(this, 'handleMouseLeave', () => {
                this.activitiesHideTimeout.start(100, () =>
                    this.setState({
                        shouldShowActivities: !1,
                        hovered: !1
                    })
                );
            }),
            J(this, 'closePopout', () => {
                this.activitiesHideTimeout.stop(), this.setState({ shouldShowActivities: !1 });
            }),
            J(this, 'handleClick', () => {
                let { channel: e } = this.props,
                    t = e.getGuildId();
                null != t && (0, E.n)(t) && (0, S.hk)(t), this.handleVoiceConnect();
            }),
            J(this, 'handleVoiceStatusClick', (e) => {
                let { connected: t, channel: l } = this.props;
                t &&
                    (e.stopPropagation(),
                    (0, s.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 339340));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    channel: l,
                                    ...t
                                });
                        },
                        { modalKey: m.VOICE_CHANNEL_STATUS_MODAL_KEY }
                    ));
            }),
            J(this, 'renderPopout', () => {
                let { channel: e, voiceStates: t, sorting: n, isUserOver: l, selected: r, guild: a } = this.props,
                    { shouldShowActivities: o, shouldShowGuildVerificationPopout: s } = this.state;
                if (o && !n && !l && !s) {
                    let n = P.SE.getSetting().includes(a.id);
                    return (0, i.jsx)(W.Z, {
                        onAction: this.closePopout,
                        guild: a,
                        channel: e,
                        voiceStates: t,
                        isChannelSelected: r,
                        shouldShowSettingNudge: n
                    });
                }
                if (s)
                    return (0, i.jsx)(y.Z, {
                        type: y.R.VOICE,
                        guildId: e.guild_id,
                        closePopout: this.closeGuildVerificationPopout
                    });
                throw Error('VoiceChannel.renderPopout: There must always be something to render');
            }),
            J(this, 'renderOpenChatButton', () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, i.jsx)(s.Tooltip, {
                        text: Q.intl.string(Q.t.ZXxLQk),
                        children: (t) => {
                            let { onMouseEnter: l, onMouseLeave: a, onFocus: o, onBlur: u } = t;
                            return (0, i.jsx)(s.Clickable, {
                                className: r()(X.iconItem, n ? X.alwaysShown : null),
                                onClick: () => {
                                    c.Z.updateChatOpen(e.id, !0), (0, A.Kh)(e.id);
                                },
                                'aria-label': Q.intl.string(Q.t.ZXxLQk),
                                onMouseEnter: l,
                                onMouseLeave: a,
                                onFocus: o,
                                onBlur: u,
                                children: (0, i.jsx)(s.ChatIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: X.actionIcon
                                })
                            });
                        }
                    });
            }),
            J(this, 'getTooltipText', () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? Q.intl.string(Q.t.rZfiNj) : null;
            });
    }
}
let ee = (0, d.B)((0, h.Q)($));
function et(e) {
    let { guild: t, channel: n, disableSorting: l, isFavoriteCategory: r, selected: o, collapsed: s, voiceStates: c } = e,
        u = (0, a.cj)([O.ZP], () => ({
            unread: O.ZP.hasUnread(n.id),
            mentionCount: O.ZP.getMentionCount(n.id)
        })),
        d = (0, a.e7)([k.ZP], () => k.ZP.resolveUnreadSetting(n)),
        h = (0, a.cj)([M.Z, w.Z, D.Z], () => {
            let e = M.Z.getChannel(n.parent_id),
                i = w.Z.getCheck(n.guild_id);
            return {
                canManageChannel: D.Z.can(K.Plq.MANAGE_CHANNELS, n),
                canReorderChannel: !0 !== l && (t.id === q._ || (null != e ? D.Z.can(K.Plq.MANAGE_CHANNELS, e) : D.Z.can(K.Plq.MANAGE_CHANNELS, t))),
                canMoveMembers: D.Z.can(K.Plq.MOVE_MEMBERS, n),
                locked: !D.Z.can(K.Plq.CONNECT, n),
                bypassLimit: D.Z.can(K.Plq.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat
            };
        }),
        m = (0, a.e7)([G.Z], () => G.Z.hasVideo(n.id)),
        f = (0, p.ZP)(n),
        g = (0, C.ZP)(n),
        _ = (0, N.qY)(n.id),
        { isSubscriptionGated: v, needSubscriptionToAccess: x } = (0, Z.Z)(n.id),
        I = (0, b.Z)(),
        S = (0, a.e7)([k.ZP], () => k.ZP.isFavorite(t.id, n.id)),
        E = e.connected || (null == I ? void 0 : I.channelId) === n.id,
        { enableHangStatus: y, allowChannelTopic: A } = T.n.useExperiment(
            {
                guildId: n.guild_id,
                location: 'VoiceChannel'
            },
            { autoTrackExposure: !1 }
        ),
        j = (0, V.Z)({
            channel: n,
            isChannelSelected: o,
            isChannelCollapsed: s,
            voiceStates: c,
            isSubscriptionGated: v,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: !0,
            enableActivities: !0
        }),
        P = E && null == j;
    return (0, i.jsx)(ee, {
        channelName: g,
        embeddedApps: f,
        embeddedActivityType: K.IIU.PLAYING,
        video: m,
        hasActiveEvent: null != _,
        isSubscriptionGated: v,
        needSubscriptionToAccess: x,
        ...u,
        ...h,
        ...e,
        connected: E,
        isFavoriteSuggestion: r && !S,
        forceShowButtons: P,
        channelInfo: j,
        enableHangStatus: y,
        allowChannelTopic: A,
        resolvedUnreadSetting: d
    });
}
