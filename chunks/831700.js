n.d(t, {
    Z: function () {
        return J;
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
    f = n(339340),
    m = n(201895),
    g = n(718589),
    C = n(933557),
    _ = n(557135),
    v = n(873696),
    x = n(446226),
    I = n(305325),
    b = n(281956),
    E = n(66999),
    S = n(554747),
    N = n(378844),
    Z = n(574176),
    y = n(359110),
    T = n(155409),
    j = n(695346),
    A = n(592125),
    P = n(430824),
    M = n(607744),
    R = n(496675),
    L = n(306680),
    w = n(9156),
    D = n(979651),
    O = n(934415),
    k = n(98597),
    G = n(648501),
    U = n(473403),
    B = n(830993),
    H = n(653577),
    V = n(207055),
    F = n(981631),
    W = n(647086),
    z = n(388032),
    Y = n(872356);
function K(e, t, n) {
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
class q extends k.ZP {
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
        return (0, O.rY)(e, D.Z, P.Z);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return Y.containerUserOver;
        if (null != t) return e > t ? Y.containerDragAfter : Y.containerDragBefore;
        return Y.containerDefault;
    }
    renderSubtitle() {
        var e;
        let { channel: t, connected: n, enableHangStatus: l, allowChannelTopic: r } = this.props,
            a = null === (e = (0, v.D)(this.props.subtitle)) || void 0 === e ? void 0 : e.subtitle,
            { hovered: o } = this.state;
        return (0, i.jsx)(H.Z, {
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
        return (0, i.jsx)(V.Z, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: l,
            tabIndex: r,
            location: F.Sbl.GUILD_CHANNEL_LIST
        });
    }
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e
            ? null
            : (0, i.jsx)('div', {
                  className: Y.channelInfo,
                  children: e
              });
    }
    render() {
        let { channel: e, selected: t, connected: n, unread: l, resolvedUnreadSetting: a, mentionCount: o, locked: c, sorting: u, isUserOver: d, connectChannelDropTarget: h, connectChannelDragSource: p, connectUserDropTarget: f, connectDragPreview: C, canReorderChannel: _, canMoveMembers: v, showTutorial: x, hasActiveEvent: I, embeddedApps: b, isSubscriptionGated: E, isFavoriteSuggestion: S, withGuildIcon: N } = this.props,
            { shouldShowActivities: Z, shouldShowGuildVerificationPopout: y } = this.state,
            j = this.getVoiceStatesCount(),
            A = (0, i.jsxs)('li', {
                className: r()(this.getModeClass(), { [Y.disabled]: this.isDisabled() }),
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
                            shouldShow: (Z && !u && !d && !y) || y,
                            children: () =>
                                (0, i.jsx)(s.Tooltip, {
                                    text: this.getTooltipText(),
                                    children: (s) => {
                                        let { onClick: u, onContextMenu: d, ...h } = s;
                                        return (0, i.jsxs)(U.Z, {
                                            className: Y.iconVisibility,
                                            iconClassName: r()({ [Y.iconLive]: I }),
                                            channel: e,
                                            selected: !S && t,
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
                                            isFavoriteSuggestion: S,
                                            'aria-label': (0, m.ZP)({
                                                channel: e,
                                                unread: l,
                                                mentionCount: o,
                                                userCount: j,
                                                embeddedActivitiesCount: b.length,
                                                isSubscriptionGated: E
                                            }),
                                            'aria-describedby': (0, g.Z)({
                                                channel: e,
                                                embeddedApps: b
                                            }),
                                            withGuildIcon: N,
                                            ...h,
                                            children: [S && this.renderAcceptSuggestionButton(), S && this.renderRemoveSuggestionButton(), !S && this.renderOpenChatButton(), !S && this.renderInviteButton(), !S && this.renderEditButton(), !S && this.renderChannelInfo()]
                                        });
                                    }
                                })
                        })
                    }),
                    this.renderVoiceUsers()
                ]
            });
        return (
            v && (A = f(A)),
            _ && (A = h(p(A))),
            x &&
                (A = (0, i.jsx)(T.Z, {
                    tutorialId: 'voice-conversations',
                    position: 'right',
                    offsetX: -20,
                    children: A
                })),
            A
        );
    }
    constructor(...e) {
        super(...e),
            K(this, 'state', {
                shouldShowActivities: !1,
                shouldShowGuildVerificationPopout: !1,
                hovered: !1
            }),
            K(this, 'activitiesHideTimeout', new o.V7()),
            K(this, 'closeGuildVerificationPopout', () => {
                this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            K(this, 'handleVoiceConnect', () => {
                let { locked: e, connected: t, channel: n, unverifiedAccount: i, needSubscriptionToAccess: l } = this.props;
                i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
                    _.Z.handleVoiceConnect({
                        channel: n,
                        connected: t,
                        needSubscriptionToAccess: l,
                        locked: e
                    });
            }),
            K(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    l = P.Z.getGuild(t.getGuildId());
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
            K(this, 'handleMouseEnter', () => {
                this.activitiesHideTimeout.stop(),
                    this.setState({
                        shouldShowActivities: !0,
                        hovered: !0
                    });
            }),
            K(this, 'handleMouseLeave', () => {
                this.activitiesHideTimeout.start(100, () =>
                    this.setState({
                        shouldShowActivities: !1,
                        hovered: !1
                    })
                );
            }),
            K(this, 'closePopout', () => {
                this.activitiesHideTimeout.stop(), this.setState({ shouldShowActivities: !1 });
            }),
            K(this, 'handleClick', () => {
                let { channel: e } = this.props,
                    t = e.getGuildId();
                null != t && (0, b.n)(t) && (0, I.hk)(t), this.handleVoiceConnect();
            }),
            K(this, 'handleVoiceStatusClick', (e) => {
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
                        { modalKey: f.VOICE_CHANNEL_STATUS_MODAL_KEY }
                    ));
            }),
            K(this, 'renderPopout', () => {
                let { channel: e, voiceStates: t, sorting: n, isUserOver: l, selected: r, guild: a } = this.props,
                    { shouldShowActivities: o, shouldShowGuildVerificationPopout: s } = this.state;
                if (o && !n && !l && !s) {
                    let n = j.SE.getSetting().includes(a.id);
                    return (0, i.jsx)(B.Z, {
                        onAction: this.closePopout,
                        guild: a,
                        channel: e,
                        voiceStates: t,
                        isChannelSelected: r,
                        shouldShowSettingNudge: n
                    });
                }
                if (s)
                    return (0, i.jsx)(N.Z, {
                        type: N.R.VOICE,
                        guildId: e.guild_id,
                        closePopout: this.closeGuildVerificationPopout
                    });
                throw Error('VoiceChannel.renderPopout: There must always be something to render');
            }),
            K(this, 'renderOpenChatButton', () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, i.jsx)(s.Tooltip, {
                        text: z.intl.string(z.t.ZXxLQk),
                        children: (t) => {
                            let { onMouseEnter: l, onMouseLeave: a, onFocus: o, onBlur: u } = t;
                            return (0, i.jsx)(s.Clickable, {
                                className: r()(Y.iconItem, n ? Y.alwaysShown : null),
                                onClick: () => {
                                    c.Z.updateChatOpen(e.id, !0), (0, y.Kh)(e.id);
                                },
                                'aria-label': z.intl.string(z.t.ZXxLQk),
                                onMouseEnter: l,
                                onMouseLeave: a,
                                onFocus: o,
                                onBlur: u,
                                children: (0, i.jsx)(s.ChatIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: Y.actionIcon
                                })
                            });
                        }
                    });
            }),
            K(this, 'getTooltipText', () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? z.intl.string(z.t.rZfiNj) : null;
            });
    }
}
let Q = (0, d.B)((0, h.Q)(q));
function J(e) {
    let { guild: t, channel: n, disableSorting: l, isFavoriteCategory: r, selected: o, collapsed: s, voiceStates: c } = e,
        u = (0, a.cj)([L.ZP], () => ({
            unread: L.ZP.hasUnread(n.id),
            mentionCount: L.ZP.getMentionCount(n.id)
        })),
        d = (0, a.e7)([w.ZP], () => w.ZP.resolveUnreadSetting(n)),
        h = (0, a.cj)([A.Z, M.Z, R.Z], () => {
            let e = A.Z.getChannel(n.parent_id),
                i = M.Z.getCheck(n.guild_id);
            return {
                canManageChannel: R.Z.can(F.Plq.MANAGE_CHANNELS, n),
                canReorderChannel: !0 !== l && (t.id === W._ || (null != e ? R.Z.can(F.Plq.MANAGE_CHANNELS, e) : R.Z.can(F.Plq.MANAGE_CHANNELS, t))),
                canMoveMembers: R.Z.can(F.Plq.MOVE_MEMBERS, n),
                locked: !R.Z.can(F.Plq.CONNECT, n),
                bypassLimit: R.Z.can(F.Plq.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat
            };
        }),
        f = (0, a.e7)([D.Z], () => D.Z.hasVideo(n.id)),
        m = (0, p.ZP)(n),
        g = (0, C.ZP)(n),
        _ = (0, S.qY)(n.id),
        { isSubscriptionGated: v, needSubscriptionToAccess: I } = (0, E.Z)(n.id),
        b = (0, x.Z)(),
        N = (0, a.e7)([w.ZP], () => w.ZP.isFavorite(t.id, n.id)),
        y = e.connected || (null == b ? void 0 : b.channelId) === n.id,
        { enableHangStatus: T, allowChannelTopic: j } = Z.n.useExperiment(
            {
                guildId: n.guild_id,
                location: 'VoiceChannel'
            },
            { autoTrackExposure: !1 }
        ),
        P = (0, G.Z)({
            channel: n,
            isChannelSelected: o,
            isChannelCollapsed: s,
            voiceStates: c,
            isSubscriptionGated: v,
            needSubscriptionToAccess: I,
            enableConnectedUserLimit: !0,
            enableActivities: !0
        }),
        O = y && null == P;
    return (0, i.jsx)(Q, {
        channelName: g,
        embeddedApps: m,
        embeddedActivityType: F.IIU.PLAYING,
        video: f,
        hasActiveEvent: null != _,
        isSubscriptionGated: v,
        needSubscriptionToAccess: I,
        ...u,
        ...h,
        ...e,
        connected: y,
        isFavoriteSuggestion: r && !N,
        forceShowButtons: O,
        channelInfo: P,
        enableHangStatus: T,
        allowChannelTopic: j,
        resolvedUnreadSetting: d
    });
}
