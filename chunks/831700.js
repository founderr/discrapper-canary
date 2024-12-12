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
    o = n(442837),
    a = n(846519),
    s = n(481060),
    c = n(475179),
    d = n(239091),
    u = n(146773),
    h = n(888651),
    p = n(619915),
    m = n(339340),
    f = n(201895),
    g = n(718589),
    C = n(933557),
    v = n(557135),
    _ = n(873696),
    x = n(215339),
    I = n(832382),
    b = n(446226),
    E = n(305325),
    S = n(281956),
    Z = n(66999),
    N = n(554747),
    y = n(378844),
    T = n(574176),
    j = n(359110),
    A = n(155409),
    P = n(695346),
    R = n(447564),
    M = n(592125),
    w = n(430824),
    L = n(607744),
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
    J = n(831746);
function X(e, t, n) {
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
        return (0, U.rY)(e, G.Z, w.Z);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return J.containerUserOver;
        if (null != t) return e > t ? J.containerDragAfter : J.containerDragBefore;
        return J.containerDefault;
    }
    renderSubtitle() {
        var e;
        let { channel: t, connected: n, enableHangStatus: l, allowChannelTopic: r } = this.props,
            o = null === (e = (0, _.D)(this.props.subtitle)) || void 0 === e ? void 0 : e.subtitle,
            { hovered: a } = this.state;
        return (0, i.jsx)(z.Z, {
            onClick: this.handleVoiceStatusClick,
            channel: t,
            connected: n,
            subtitle: o,
            hovered: a,
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
                  className: J.channelInfo,
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
                      let { onMouseEnter: n, onMouseLeave: l, onFocus: o, onBlur: a } = t;
                      return (0, i.jsx)(s.Clickable, {
                          className: r()(J.iconItem, J.alwaysShown),
                          onClick: () => {
                              (0, x.X)('VoiceChannel') ? (0, R.openHDPotionModal)(e, 'VoiceChannel') : window.open(B.Z.getArticleURL(K.BhN.HD_STREAMING_POTION), '_blank');
                          },
                          'aria-label': Q.intl.string(Q.t.gpF6QU),
                          onMouseEnter: n,
                          onMouseLeave: l,
                          onFocus: o,
                          onBlur: a,
                          children: (0, i.jsx)(s.PotionIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              className: J.actionIcon
                          })
                      });
                  }
              });
    }
    render() {
        let { channel: e, selected: t, connected: n, unread: l, resolvedUnreadSetting: o, mentionCount: a, locked: c, sorting: d, isUserOver: u, connectChannelDropTarget: h, connectChannelDragSource: p, connectUserDropTarget: m, connectDragPreview: C, canReorderChannel: v, canMoveMembers: _, showTutorial: x, hasActiveEvent: b, embeddedApps: E, isSubscriptionGated: S, isFavoriteSuggestion: Z, withGuildIcon: N } = this.props,
            { shouldShowActivities: y, shouldShowGuildVerificationPopout: T } = this.state,
            j = this.getVoiceStatesCount(),
            P = (0, i.jsxs)('li', {
                className: r()(this.getModeClass(), { [J.disabled]: this.isDisabled() }),
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
                            shouldShow: (y && !d && !u && !T) || T,
                            children: () =>
                                (0, i.jsx)(s.Tooltip, {
                                    text: this.getTooltipText(),
                                    children: (s) => {
                                        let { onClick: d, onContextMenu: u, ...h } = s;
                                        return (0, i.jsx)(I.Z, {
                                            channel: e,
                                            children: (0, i.jsxs)(F.Z, {
                                                className: J.iconVisibility,
                                                iconClassName: r()({ [J.iconLive]: b }),
                                                hasActiveEvent: b,
                                                channel: e,
                                                selected: !Z && t,
                                                connected: n,
                                                unread: n ? l : void 0,
                                                resolvedUnreadSetting: o,
                                                mentionCount: a,
                                                locked: c,
                                                subtitle: this.renderSubtitle(),
                                                onClick: () => {
                                                    this.handleClick(), null == d || d();
                                                },
                                                onContextMenu: (e) => {
                                                    this.handleContextMenu(e), null == u || u();
                                                },
                                                connectDragPreview: C,
                                                isFavoriteSuggestion: Z,
                                                'aria-label': (0, f.ZP)({
                                                    channel: e,
                                                    unread: l,
                                                    mentionCount: a,
                                                    userCount: j,
                                                    embeddedActivitiesCount: E.length,
                                                    isSubscriptionGated: S
                                                }),
                                                'aria-describedby': (0, g.Z)({
                                                    channel: e,
                                                    embeddedApps: E
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
            _ && (P = m(P)),
            v && (P = h(p(P))),
            x &&
                (P = (0, i.jsx)(A.Z, {
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
            X(this, 'state', {
                shouldShowActivities: !1,
                shouldShowGuildVerificationPopout: !1,
                hovered: !1
            }),
            X(this, 'activitiesHideTimeout', new a.V7()),
            X(this, 'closeGuildVerificationPopout', () => {
                this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            X(this, 'handleVoiceConnect', () => {
                let { locked: e, connected: t, channel: n, unverifiedAccount: i, needSubscriptionToAccess: l } = this.props;
                i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
                    v.Z.handleVoiceConnect({
                        channel: n,
                        connected: t,
                        needSubscriptionToAccess: l,
                        locked: e
                    });
            }),
            X(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    l = w.Z.getGuild(t.getGuildId());
                null != l &&
                    (0, d.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('83331')]).then(n.bind(n, 213202));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                channel: t,
                                guild: l
                            });
                    });
            }),
            X(this, 'handleMouseEnter', () => {
                this.activitiesHideTimeout.stop(),
                    this.setState({
                        shouldShowActivities: !0,
                        hovered: !0
                    });
            }),
            X(this, 'handleMouseLeave', () => {
                this.activitiesHideTimeout.start(100, () =>
                    this.setState({
                        shouldShowActivities: !1,
                        hovered: !1
                    })
                );
            }),
            X(this, 'closePopout', () => {
                this.activitiesHideTimeout.stop(), this.setState({ shouldShowActivities: !1 });
            }),
            X(this, 'handleClick', () => {
                let { channel: e } = this.props,
                    t = e.getGuildId();
                null != t && (0, S.n)(t) && (0, E.hk)(t), this.handleVoiceConnect();
            }),
            X(this, 'handleVoiceStatusClick', (e) => {
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
            X(this, 'renderPopout', () => {
                let { channel: e, voiceStates: t, sorting: n, isUserOver: l, selected: r, guild: o } = this.props,
                    { shouldShowActivities: a, shouldShowGuildVerificationPopout: s } = this.state;
                if (a && !n && !l && !s) {
                    let n = P.SE.getSetting().includes(o.id);
                    return (0, i.jsx)(W.Z, {
                        onAction: this.closePopout,
                        guild: o,
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
            X(this, 'renderOpenChatButton', () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, i.jsx)(s.Tooltip, {
                        text: Q.intl.string(Q.t.ZXxLQk),
                        children: (t) => {
                            let { onMouseEnter: l, onMouseLeave: o, onFocus: a, onBlur: d } = t;
                            return (0, i.jsx)(s.Clickable, {
                                className: r()(J.iconItem, n ? J.alwaysShown : null),
                                onClick: () => {
                                    c.Z.updateChatOpen(e.id, !0), (0, j.Kh)(e.id);
                                },
                                'aria-label': Q.intl.string(Q.t.ZXxLQk),
                                onMouseEnter: l,
                                onMouseLeave: o,
                                onFocus: a,
                                onBlur: d,
                                children: (0, i.jsx)(s.ChatIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: J.actionIcon
                                })
                            });
                        }
                    });
            }),
            X(this, 'getTooltipText', () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? Q.intl.string(Q.t.rZfiNj) : null;
            });
    }
}
let ee = (0, u.B)((0, h.Q)($));
function et(e) {
    let { guild: t, channel: n, disableSorting: l, isFavoriteCategory: r, selected: a, collapsed: s, voiceStates: c } = e,
        d = (0, o.cj)([O.ZP], () => ({
            unread: O.ZP.hasUnread(n.id),
            mentionCount: O.ZP.getMentionCount(n.id)
        })),
        u = (0, o.e7)([k.ZP], () => k.ZP.resolveUnreadSetting(n)),
        h = (0, o.cj)([M.Z, L.Z, D.Z], () => {
            let e = M.Z.getChannel(n.parent_id),
                i = L.Z.getCheck(n.guild_id);
            return {
                canManageChannel: D.Z.can(K.Plq.MANAGE_CHANNELS, n),
                canReorderChannel: !0 !== l && (t.id === q._ || (null != e ? D.Z.can(K.Plq.MANAGE_CHANNELS, e) : D.Z.can(K.Plq.MANAGE_CHANNELS, t))),
                canMoveMembers: D.Z.can(K.Plq.MOVE_MEMBERS, n),
                locked: !D.Z.can(K.Plq.CONNECT, n),
                bypassLimit: D.Z.can(K.Plq.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat
            };
        }),
        m = (0, o.e7)([G.Z], () => G.Z.hasVideo(n.id)),
        f = (0, p.ZP)(n),
        g = (0, C.ZP)(n),
        v = (0, N.qY)(n.id),
        { isSubscriptionGated: _, needSubscriptionToAccess: x } = (0, Z.Z)(n.id),
        I = (0, b.Z)(),
        E = (0, o.e7)([k.ZP], () => k.ZP.isFavorite(t.id, n.id)),
        S = e.connected || (null == I ? void 0 : I.channelId) === n.id,
        { enableHangStatus: y, allowChannelTopic: j } = T.n.useExperiment(
            {
                guildId: n.guild_id,
                location: 'VoiceChannel'
            },
            { autoTrackExposure: !1 }
        ),
        A = (0, V.Z)({
            channel: n,
            isChannelSelected: a,
            isChannelCollapsed: s,
            voiceStates: c,
            isSubscriptionGated: _,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: !0,
            enableActivities: !0
        }),
        P = S && null == A;
    return (0, i.jsx)(ee, {
        channelName: g,
        embeddedApps: f,
        embeddedActivityType: K.IIU.PLAYING,
        video: m,
        hasActiveEvent: null != v,
        isSubscriptionGated: _,
        needSubscriptionToAccess: x,
        ...d,
        ...h,
        ...e,
        connected: S,
        isFavoriteSuggestion: r && !E,
        forceShowButtons: P,
        channelInfo: A,
        enableHangStatus: y,
        allowChannelTopic: j,
        resolvedUnreadSetting: u
    });
}
