n.d(t, {
    Z: function () {
        return z;
    }
}),
    n(47120),
    n(411104);
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    s = n(475179),
    c = n(239091),
    u = n(146773),
    d = n(888651),
    h = n(201895),
    p = n(111028),
    m = n(305325),
    f = n(281956),
    g = n(66999),
    C = n(378844),
    _ = n(359110),
    v = n(922482),
    x = n(431328),
    I = n(501655),
    b = n(427679),
    E = n(368442),
    S = n(201469),
    Z = n(680089),
    N = n(592125),
    y = n(430824),
    T = n(607744),
    j = n(496675),
    A = n(306680),
    P = n(9156),
    M = n(979651),
    R = n(934415),
    w = n(98597),
    L = n(648501),
    D = n(473403),
    O = n(207055),
    k = n(981631),
    U = n(647086),
    G = n(388032),
    B = n(766075),
    H = n(718963);
function V(e, t, n) {
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
class F extends w.ZP {
    getVoiceStatesCount() {
        var e;
        let { voiceStates: t } = this.props;
        return null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, R.rY)(e, M.Z, y.Z);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return B.containerUserOver;
        if (null != t) return e > t ? B.containerDragAfter : B.containerDragBefore;
        return B.containerDefault;
    }
    renderVoiceUsers() {
        let { channel: e, collapsed: t, tabIndex: n, speakerVoiceStates: l, numAudience: r } = this.props;
        return (0, i.jsx)(O.Z, {
            channel: e,
            voiceStates: l,
            collapsed: t,
            tabIndex: n,
            location: k.Sbl.GUILD_CHANNEL_LIST,
            numAudience: r
        });
    }
    renderChannelInfo() {
        return this.props.channelInfo;
    }
    render() {
        let { channel: e, selected: t, connected: n, locked: l, connectChannelDropTarget: a, connectChannelDragSource: s, connectUserDropTarget: c, connectDragPreview: u, canReorderChannel: d, canMoveMembers: p, stageInstance: m, isSubscriptionGated: f, needSubscriptionToAccess: g, unread: C, resolvedUnreadSetting: _, mentionCount: v, isFavoriteSuggestion: x } = this.props,
            { shouldShowGuildVerificationPopout: I } = this.state,
            b = this.getVoiceStatesCount(),
            E = (0, i.jsxs)('li', {
                className: r()(this.getModeClass(), { [B.disabled]: this.isDisabled() }),
                'data-dnd-name': e.name,
                children: [
                    (0, i.jsx)(o.Popout, {
                        position: 'right',
                        renderPopout: this.renderPopout,
                        spacing: 0,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: I,
                        children: () =>
                            (0, i.jsx)(o.Tooltip, {
                                text: this.getTooltipText(),
                                children: (a) => {
                                    let { onClick: o, onContextMenu: s, ...c } = a;
                                    return (0, i.jsxs)(D.Z, {
                                        className: B.iconVisibility,
                                        iconClassName: r()({ [H.iconLive]: null != m }),
                                        channel: e,
                                        selected: !x && t,
                                        connected: n,
                                        unread: n ? C : void 0,
                                        resolvedUnreadSetting: _,
                                        mentionCount: v,
                                        locked: l,
                                        onClick: () => {
                                            this.handleClick(), null == o || o();
                                        },
                                        onContextMenu: (e) => {
                                            this.handleContextMenu(e), null == s || s();
                                        },
                                        connectDragPreview: u,
                                        subtitle: this.renderSubtitle(),
                                        isFavoriteSuggestion: x,
                                        'aria-label': (0, h.ZP)({
                                            channel: e,
                                            unread: C,
                                            mentionCount: v,
                                            userCount: b,
                                            isSubscriptionGated: f,
                                            needSubscriptionToAccess: g
                                        }),
                                        ...c,
                                        children: [x && this.renderAcceptSuggestionButton(), x && this.renderRemoveSuggestionButton(), !x && this.renderOpenChatButton(), !x && this.renderInviteButton(), !x && this.renderEditButton(), !x && this.renderChannelInfo()]
                                    });
                                }
                            })
                    }),
                    this.renderVoiceUsers()
                ]
            });
        return p && (E = c(E)), d && (E = a(s(E))), E;
    }
    constructor(...e) {
        super(...e),
            V(this, 'state', { shouldShowGuildVerificationPopout: !1 }),
            V(this, 'closeGuildVerificationPopout', () => {
                this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            V(this, 'handleClick', () => {
                let { channel: e, locked: t, connected: n, unverifiedAccount: i } = this.props,
                    l = e.getGuildId();
                null != l && (0, f.n)(l) && (0, m.hk)(l), i && this.setState({ shouldShowGuildVerificationPopout: !0 }), !t && !n && !e.isRoleSubscriptionTemplatePreviewChannel() && (0, v.Cq)(e), !__OVERLAY__ && (0, _.Kh)(e.id);
            }),
            V(this, 'handleClickChat', () => {
                let { channel: e, locked: t } = this.props;
                !__OVERLAY__ && !t && (0, _.Kh)(e.id);
            }),
            V(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    l = y.Z.getGuild(t.getGuildId());
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
            V(this, 'renderPopout', () => {
                let { channel: e } = this.props,
                    { shouldShowGuildVerificationPopout: t } = this.state;
                if (t)
                    return (0, i.jsx)(C.Z, {
                        type: C.R.VOICE,
                        guildId: e.guild_id,
                        closePopout: this.closeGuildVerificationPopout
                    });
                throw Error('VoiceChannel.renderPopout: There must always be something to render');
            }),
            V(this, 'renderOpenChatButton', () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, i.jsx)(o.Tooltip, {
                        text: G.intl.string(G.t.ZXxLQk),
                        children: (t) => {
                            let { onMouseEnter: l, onMouseLeave: a, onFocus: c, onBlur: u } = t;
                            return (0, i.jsx)(o.Clickable, {
                                className: r()(B.iconItem, n ? B.alwaysShown : null),
                                onClick: () => {
                                    s.Z.updateChatOpen(e.id, !0), this.handleClickChat();
                                },
                                'aria-label': G.intl.string(G.t.ZXxLQk),
                                onMouseEnter: l,
                                onMouseLeave: a,
                                onFocus: c,
                                onBlur: u,
                                children: (0, i.jsx)(o.ChatIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: B.actionIcon
                                })
                            });
                        }
                    });
            }),
            V(this, 'getTooltipText', () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? G.intl.string(G.t.rZfiNj) : null;
            }),
            V(this, 'renderSubtitle', () => {
                var e;
                let t = null === (e = this.props.stageInstance) || void 0 === e ? void 0 : e.topic;
                return null == t ? null : (0, i.jsx)(p.Z, { children: t });
            });
    }
}
let W = (0, u.B)((0, d.Q)(F));
function z(e) {
    let { guild: t, channel: n, disableSorting: l, isFavoriteCategory: r, collapsed: o, voiceStates: s } = e,
        c = (0, a.cj)([A.ZP], () => ({
            unread: A.ZP.hasUnread(n.id),
            mentionCount: A.ZP.getMentionCount(n.id)
        })),
        u = (0, a.e7)([P.ZP], () => P.ZP.resolveUnreadSetting(n)),
        d = (0, a.cj)([N.Z, T.Z, j.Z], () => {
            let e = N.Z.getChannel(n.parent_id),
                i = T.Z.getCheck(n.guild_id);
            return {
                canManageChannel: null != t && j.Z.can(k.Plq.MANAGE_CHANNELS, n),
                canReorderChannel: !0 !== l && (t.id === U._ || (null != e ? j.Z.can(k.Plq.MANAGE_CHANNELS, e) : j.Z.can(k.Plq.MANAGE_CHANNELS, t))),
                canMoveMembers: j.Z.can(k.Plq.MOVE_MEMBERS, n),
                locked: !j.Z.can(k.Plq.CONNECT, n),
                bypassLimit: j.Z.can(k.Plq.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat
            };
        }),
        h = (0, a.e7)([Z.Z], () => Z.Z.isCollapsed(n.parent_id)),
        p = (0, S.ZP)(n.id),
        m = (0, a.e7)([b.Z], () => b.Z.getStageInstanceByChannel(n.id), [n.id]),
        f = (0, x.Rk)(n.id, I.pV.AUDIENCE),
        { isSubscriptionGated: C, needSubscriptionToAccess: _ } = (0, g.Z)(n.id),
        v = (0, a.e7)([P.ZP], () => P.ZP.isFavorite(t.id, n.id)),
        y = (0, E.xJ)(n.id),
        M = (0, L.Z)({
            channel: n,
            isChannelSelected: !1,
            isChannelCollapsed: o,
            voiceStates: s,
            isSubscriptionGated: C,
            needSubscriptionToAccess: _,
            enableConnectedUserLimit: y || (n.userLimit > 0 && n.userLimit < k.xGv)
        }),
        R = e.connected && null == M;
    return (0, i.jsx)(W, {
        categoryCollapsed: h,
        connectAction: p,
        numAudience: f,
        stageInstance: m,
        isSubscriptionGated: C,
        needSubscriptionToAccess: _,
        ...c,
        ...d,
        ...e,
        isFavoriteSuggestion: r && !v,
        forceShowButtons: R,
        channelInfo: M,
        resolvedUnreadSetting: u
    });
}
