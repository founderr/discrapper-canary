n.d(t, {
    Z: function () {
        return $;
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
    x = n(832382),
    I = n(446226),
    b = n(305325),
    S = n(281956),
    E = n(66999),
    Z = n(554747),
    N = n(378844),
    y = n(574176),
    T = n(359110),
    A = n(155409),
    P = n(695346),
    j = n(592125),
    R = n(430824),
    M = n(607744),
    L = n(496675),
    w = n(306680),
    D = n(9156),
    O = n(979651),
    k = n(934415),
    U = n(63063),
    G = n(98597),
    B = n(648501),
    H = n(473403),
    V = n(830993),
    F = n(653577),
    W = n(207055),
    z = n(981631),
    Y = n(647086),
    K = n(388032),
    q = n(766075);
function Q(e, t, n) {
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
class X extends G.ZP {
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
        return (0, k.rY)(e, O.Z, R.Z);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return q.containerUserOver;
        if (null != t) return e > t ? q.containerDragAfter : q.containerDragBefore;
        return q.containerDefault;
    }
    renderSubtitle() {
        var e;
        let { channel: t, connected: n, enableHangStatus: l, allowChannelTopic: r } = this.props,
            a = null === (e = (0, v.D)(this.props.subtitle)) || void 0 === e ? void 0 : e.subtitle,
            { hovered: o } = this.state;
        return (0, i.jsx)(F.Z, {
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
        return (0, i.jsx)(W.Z, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: l,
            tabIndex: r,
            location: z.Sbl.GUILD_CHANNEL_LIST
        });
    }
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e
            ? null
            : (0, i.jsx)('div', {
                  className: q.channelInfo,
                  children: e
              });
    }
    renderHDSplashedIcon() {
        let { channel: e, locked: t } = this.props;
        return t || !e.isHDStreamSplashed
            ? null
            : (0, i.jsx)(s.Tooltip, {
                  text: K.intl.string(K.t.gpF6QU),
                  children: (e) => {
                      let { onMouseEnter: t, onMouseLeave: n, onFocus: l, onBlur: a } = e;
                      return (0, i.jsx)(s.Clickable, {
                          className: r()(q.iconItem, q.alwaysShown),
                          onClick: () => {
                              window.open(U.Z.getArticleURL(z.BhN.HD_STREAMING_POTION), '_blank');
                          },
                          'aria-label': K.intl.string(K.t.gpF6QU),
                          onMouseEnter: t,
                          onMouseLeave: n,
                          onFocus: l,
                          onBlur: a,
                          children: (0, i.jsx)(s.PotionIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              className: q.actionIcon
                          })
                      });
                  }
              });
    }
    render() {
        let { channel: e, selected: t, connected: n, unread: l, resolvedUnreadSetting: a, mentionCount: o, locked: c, sorting: u, isUserOver: d, connectChannelDropTarget: h, connectChannelDragSource: p, connectUserDropTarget: m, connectDragPreview: C, canReorderChannel: _, canMoveMembers: v, showTutorial: I, hasActiveEvent: b, embeddedApps: S, isSubscriptionGated: E, isFavoriteSuggestion: Z, withGuildIcon: N } = this.props,
            { shouldShowActivities: y, shouldShowGuildVerificationPopout: T } = this.state,
            P = this.getVoiceStatesCount(),
            j = (0, i.jsxs)('li', {
                className: r()(this.getModeClass(), { [q.disabled]: this.isDisabled() }),
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
                                        return (0, i.jsx)(x.Z, {
                                            channel: e,
                                            children: (0, i.jsxs)(H.Z, {
                                                className: q.iconVisibility,
                                                iconClassName: r()({ [q.iconLive]: b }),
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
                                                    userCount: P,
                                                    embeddedActivitiesCount: S.length,
                                                    isSubscriptionGated: E
                                                }),
                                                'aria-describedby': (0, g.Z)({
                                                    channel: e,
                                                    embeddedApps: S
                                                }),
                                                withGuildIcon: N,
                                                ...h,
                                                children: [Z && this.renderAcceptSuggestionButton(), Z && this.renderRemoveSuggestionButton(), !Z && this.renderOpenChatButton(), !Z && this.renderInviteButton(), !Z && this.renderEditButton(), !Z && this.renderHDSplashedIcon()]
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
            v && (j = m(j)),
            _ && (j = h(p(j))),
            I &&
                (j = (0, i.jsx)(A.Z, {
                    tutorialId: 'voice-conversations',
                    position: 'right',
                    offsetX: -20,
                    children: j
                })),
            j
        );
    }
    constructor(...e) {
        super(...e),
            Q(this, 'state', {
                shouldShowActivities: !1,
                shouldShowGuildVerificationPopout: !1,
                hovered: !1
            }),
            Q(this, 'activitiesHideTimeout', new o.V7()),
            Q(this, 'closeGuildVerificationPopout', () => {
                this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            Q(this, 'handleVoiceConnect', () => {
                let { locked: e, connected: t, channel: n, unverifiedAccount: i, needSubscriptionToAccess: l } = this.props;
                i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
                    _.Z.handleVoiceConnect({
                        channel: n,
                        connected: t,
                        needSubscriptionToAccess: l,
                        locked: e
                    });
            }),
            Q(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    l = R.Z.getGuild(t.getGuildId());
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
            Q(this, 'handleMouseEnter', () => {
                this.activitiesHideTimeout.stop(),
                    this.setState({
                        shouldShowActivities: !0,
                        hovered: !0
                    });
            }),
            Q(this, 'handleMouseLeave', () => {
                this.activitiesHideTimeout.start(100, () =>
                    this.setState({
                        shouldShowActivities: !1,
                        hovered: !1
                    })
                );
            }),
            Q(this, 'closePopout', () => {
                this.activitiesHideTimeout.stop(), this.setState({ shouldShowActivities: !1 });
            }),
            Q(this, 'handleClick', () => {
                let { channel: e } = this.props,
                    t = e.getGuildId();
                null != t && (0, S.n)(t) && (0, b.hk)(t), this.handleVoiceConnect();
            }),
            Q(this, 'handleVoiceStatusClick', (e) => {
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
            Q(this, 'renderPopout', () => {
                let { channel: e, voiceStates: t, sorting: n, isUserOver: l, selected: r, guild: a } = this.props,
                    { shouldShowActivities: o, shouldShowGuildVerificationPopout: s } = this.state;
                if (o && !n && !l && !s) {
                    let n = P.SE.getSetting().includes(a.id);
                    return (0, i.jsx)(V.Z, {
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
            Q(this, 'renderOpenChatButton', () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, i.jsx)(s.Tooltip, {
                        text: K.intl.string(K.t.ZXxLQk),
                        children: (t) => {
                            let { onMouseEnter: l, onMouseLeave: a, onFocus: o, onBlur: u } = t;
                            return (0, i.jsx)(s.Clickable, {
                                className: r()(q.iconItem, n ? q.alwaysShown : null),
                                onClick: () => {
                                    c.Z.updateChatOpen(e.id, !0), (0, T.Kh)(e.id);
                                },
                                'aria-label': K.intl.string(K.t.ZXxLQk),
                                onMouseEnter: l,
                                onMouseLeave: a,
                                onFocus: o,
                                onBlur: u,
                                children: (0, i.jsx)(s.ChatIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: q.actionIcon
                                })
                            });
                        }
                    });
            }),
            Q(this, 'getTooltipText', () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? K.intl.string(K.t.rZfiNj) : null;
            });
    }
}
let J = (0, d.B)((0, h.Q)(X));
function $(e) {
    let { guild: t, channel: n, disableSorting: l, isFavoriteCategory: r, selected: o, collapsed: s, voiceStates: c } = e,
        u = (0, a.cj)([w.ZP], () => ({
            unread: w.ZP.hasUnread(n.id),
            mentionCount: w.ZP.getMentionCount(n.id)
        })),
        d = (0, a.e7)([D.ZP], () => D.ZP.resolveUnreadSetting(n)),
        h = (0, a.cj)([j.Z, M.Z, L.Z], () => {
            let e = j.Z.getChannel(n.parent_id),
                i = M.Z.getCheck(n.guild_id);
            return {
                canManageChannel: L.Z.can(z.Plq.MANAGE_CHANNELS, n),
                canReorderChannel: !0 !== l && (t.id === Y._ || (null != e ? L.Z.can(z.Plq.MANAGE_CHANNELS, e) : L.Z.can(z.Plq.MANAGE_CHANNELS, t))),
                canMoveMembers: L.Z.can(z.Plq.MOVE_MEMBERS, n),
                locked: !L.Z.can(z.Plq.CONNECT, n),
                bypassLimit: L.Z.can(z.Plq.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat
            };
        }),
        m = (0, a.e7)([O.Z], () => O.Z.hasVideo(n.id)),
        f = (0, p.ZP)(n),
        g = (0, C.ZP)(n),
        _ = (0, Z.qY)(n.id),
        { isSubscriptionGated: v, needSubscriptionToAccess: x } = (0, E.Z)(n.id),
        b = (0, I.Z)(),
        S = (0, a.e7)([D.ZP], () => D.ZP.isFavorite(t.id, n.id)),
        N = e.connected || (null == b ? void 0 : b.channelId) === n.id,
        { enableHangStatus: T, allowChannelTopic: A } = y.n.useExperiment(
            {
                guildId: n.guild_id,
                location: 'VoiceChannel'
            },
            { autoTrackExposure: !1 }
        ),
        P = (0, B.Z)({
            channel: n,
            isChannelSelected: o,
            isChannelCollapsed: s,
            voiceStates: c,
            isSubscriptionGated: v,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: !0,
            enableActivities: !0
        }),
        R = N && null == P;
    return (0, i.jsx)(J, {
        channelName: g,
        embeddedApps: f,
        embeddedActivityType: z.IIU.PLAYING,
        video: m,
        hasActiveEvent: null != _,
        isSubscriptionGated: v,
        needSubscriptionToAccess: x,
        ...u,
        ...h,
        ...e,
        connected: N,
        isFavoriteSuggestion: r && !S,
        forceShowButtons: R,
        channelInfo: P,
        enableHangStatus: T,
        allowChannelTopic: A,
        resolvedUnreadSetting: d
    });
}
