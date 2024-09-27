n.d(t, {
    Z: function () {
        return z;
    }
}),
    n(47120),
    n(411104);
var i = n(735250);
n(470079);
var l = n(120356),
    r = n.n(l),
    a = n(442837),
    s = n(481060),
    o = n(475179),
    c = n(239091),
    u = n(146773),
    d = n(888651),
    h = n(201895),
    p = n(111028),
    f = n(305325),
    _ = n(281956),
    m = n(66999),
    g = n(506936),
    C = n(359110),
    I = n(922482),
    E = n(431328),
    N = n(501655),
    x = n(427679),
    S = n(71275),
    v = n(201469),
    Z = n(680089),
    T = n(592125),
    b = n(430824),
    A = n(607744),
    M = n(496675),
    R = n(306680),
    L = n(9156),
    y = n(979651),
    P = n(934415),
    O = n(98597),
    j = n(648501),
    D = n(473403),
    w = n(207055),
    G = n(981631),
    U = n(647086),
    k = n(689938),
    B = n(872356),
    V = n(411740);
function H(e, t, n) {
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
class F extends O.ZP {
    getVoiceStatesCount() {
        var e;
        let { voiceStates: t } = this.props;
        return null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, P.rY)(e, y.Z, b.Z);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return B.containerUserOver;
        if (null != t) return e > t ? B.containerDragAfter : B.containerDragBefore;
        return B.containerDefault;
    }
    renderVoiceUsers() {
        let { channel: e, collapsed: t, tabIndex: n, speakerVoiceStates: l, numAudience: r } = this.props;
        return (0, i.jsx)(w.Z, {
            channel: e,
            voiceStates: l,
            collapsed: t,
            tabIndex: n,
            location: G.Sbl.GUILD_CHANNEL_LIST,
            numAudience: r
        });
    }
    renderChannelInfo() {
        return this.props.channelInfo;
    }
    render() {
        let { channel: e, selected: t, connected: n, locked: l, connectChannelDropTarget: a, connectChannelDragSource: o, connectUserDropTarget: c, connectDragPreview: u, canReorderChannel: d, canMoveMembers: p, stageInstance: f, isSubscriptionGated: _, needSubscriptionToAccess: m, unread: g, resolvedUnreadSetting: C, mentionCount: I, isFavoriteSuggestion: E } = this.props,
            { shouldShowGuildVerificationPopout: N } = this.state,
            x = this.getVoiceStatesCount(),
            S = (0, i.jsxs)('li', {
                className: r()(this.getModeClass(), { [B.disabled]: this.isDisabled() }),
                'data-dnd-name': e.name,
                children: [
                    (0, i.jsx)(s.Popout, {
                        position: 'right',
                        renderPopout: this.renderPopout,
                        spacing: 0,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: N,
                        children: () =>
                            (0, i.jsx)(s.Tooltip, {
                                text: this.getTooltipText(),
                                children: (a) => {
                                    let { onClick: s, onContextMenu: o, ...c } = a;
                                    return (0, i.jsxs)(D.Z, {
                                        className: B.iconVisibility,
                                        iconClassName: r()({ [V.iconLive]: null != f }),
                                        channel: e,
                                        selected: !E && t,
                                        connected: n,
                                        unread: n ? g : void 0,
                                        resolvedUnreadSetting: C,
                                        mentionCount: I,
                                        locked: l,
                                        onClick: () => {
                                            this.handleClick(), null == s || s();
                                        },
                                        onContextMenu: (e) => {
                                            this.handleContextMenu(e), null == o || o();
                                        },
                                        connectDragPreview: u,
                                        subtitle: this.renderSubtitle(),
                                        isFavoriteSuggestion: E,
                                        'aria-label': (0, h.ZP)({
                                            channel: e,
                                            unread: g,
                                            mentionCount: I,
                                            userCount: x,
                                            isSubscriptionGated: _,
                                            needSubscriptionToAccess: m
                                        }),
                                        ...c,
                                        children: [E && this.renderAcceptSuggestionButton(), E && this.renderRemoveSuggestionButton(), !E && this.renderOpenChatButton(), !E && this.renderInviteButton(), !E && this.renderEditButton(), !E && this.renderChannelInfo()]
                                    });
                                }
                            })
                    }),
                    this.renderVoiceUsers()
                ]
            });
        return p && (S = c(S)), d && (S = a(o(S))), S;
    }
    constructor(...e) {
        super(...e),
            H(this, 'state', { shouldShowGuildVerificationPopout: !1 }),
            H(this, 'closeGuildVerificationPopout', () => {
                this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            H(this, 'handleClick', () => {
                let { channel: e, locked: t, connected: n, unverifiedAccount: i } = this.props,
                    l = e.getGuildId();
                null != l && (0, _.n)(l) && (0, f.hk)(l), i && this.setState({ shouldShowGuildVerificationPopout: !0 }), !t && !n && !e.isRoleSubscriptionTemplatePreviewChannel() && (0, I.Cq)(e), !__OVERLAY__ && (0, C.Kh)(e.id);
            }),
            H(this, 'handleClickChat', () => {
                let { channel: e, locked: t } = this.props;
                !__OVERLAY__ && !t && (0, C.Kh)(e.id);
            }),
            H(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    l = b.Z.getGuild(t.getGuildId());
                if (null != l)
                    (0, c.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('83331')]).then(n.bind(n, 213202));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                channel: t,
                                guild: l
                            });
                    });
            }),
            H(this, 'renderPopout', () => {
                let { channel: e } = this.props,
                    { shouldShowGuildVerificationPopout: t } = this.state;
                if (t)
                    return (0, i.jsx)(g.Z, {
                        type: g.R.VOICE,
                        guildId: e.guild_id,
                        closePopout: this.closeGuildVerificationPopout
                    });
                throw Error('VoiceChannel.renderPopout: There must always be something to render');
            }),
            H(this, 'renderOpenChatButton', () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, i.jsx)(s.Tooltip, {
                        text: k.Z.Messages.OPEN_CHAT,
                        children: (t) => {
                            let { onMouseEnter: l, onMouseLeave: a, onFocus: c, onBlur: u } = t;
                            return (0, i.jsx)(s.Clickable, {
                                className: r()(B.iconItem, n ? B.alwaysShown : null),
                                onClick: () => {
                                    o.Z.updateChatOpen(e.id, !0), this.handleClickChat();
                                },
                                'aria-label': k.Z.Messages.OPEN_CHAT,
                                onMouseEnter: l,
                                onMouseLeave: a,
                                onFocus: c,
                                onBlur: u,
                                children: (0, i.jsx)(s.ChatIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: B.actionIcon
                                })
                            });
                        }
                    });
            }),
            H(this, 'getTooltipText', () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? k.Z.Messages.UNABLE_TO_JOIN_CHANNEL_FULL : null;
            }),
            H(this, 'renderSubtitle', () => {
                var e;
                let t = null === (e = this.props.stageInstance) || void 0 === e ? void 0 : e.topic;
                return null == t ? null : (0, i.jsx)(p.Z, { children: t });
            });
    }
}
let W = (0, u.B)((0, d.Q)(F));
function z(e) {
    let { guild: t, channel: n, disableSorting: l, isFavoriteCategory: r, collapsed: s, voiceStates: o } = e,
        c = (0, a.cj)([R.ZP], () => ({
            unread: R.ZP.hasUnread(n.id),
            mentionCount: R.ZP.getMentionCount(n.id)
        })),
        u = (0, a.e7)([L.ZP], () => L.ZP.resolveUnreadSetting(n)),
        d = (0, a.cj)([T.Z, A.Z, M.Z], () => {
            let e = T.Z.getChannel(n.parent_id),
                i = A.Z.getCheck(n.guild_id);
            return {
                canManageChannel: null != t && M.Z.can(G.Plq.MANAGE_CHANNELS, n),
                canReorderChannel: !0 !== l && (t.id === U._ || (null != e ? M.Z.can(G.Plq.MANAGE_CHANNELS, e) : M.Z.can(G.Plq.MANAGE_CHANNELS, t))),
                canMoveMembers: M.Z.can(G.Plq.MOVE_MEMBERS, n),
                locked: !M.Z.can(G.Plq.CONNECT, n),
                bypassLimit: M.Z.can(G.Plq.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat
            };
        }),
        h = (0, a.e7)([Z.Z], () => Z.Z.isCollapsed(n.parent_id)),
        p = (0, v.ZP)(n.id),
        f = (0, a.e7)([x.Z], () => x.Z.getStageInstanceByChannel(n.id), [n.id]),
        _ = (0, E.Rk)(n.id, N.pV.AUDIENCE),
        { isSubscriptionGated: g, needSubscriptionToAccess: C } = (0, m.Z)(n.id),
        I = (0, a.e7)([L.ZP], () => L.ZP.isFavorite(t.id, n.id)),
        b = (0, S.xJ)(n.id),
        y = (0, j.Z)({
            channel: n,
            isChannelSelected: !1,
            isChannelCollapsed: s,
            voiceStates: o,
            isSubscriptionGated: g,
            needSubscriptionToAccess: C,
            enableConnectedUserLimit: b || (n.userLimit > 0 && n.userLimit < G.xGv)
        }),
        P = e.connected && null == y;
    return (0, i.jsx)(W, {
        categoryCollapsed: h,
        connectAction: p,
        numAudience: _,
        stageInstance: f,
        isSubscriptionGated: g,
        needSubscriptionToAccess: C,
        ...c,
        ...d,
        ...e,
        isFavoriteSuggestion: r && !I,
        forceShowButtons: P,
        channelInfo: y,
        resolvedUnreadSetting: u
    });
}
