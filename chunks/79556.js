n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(47120);
var i = n(735250);
n(470079);
var l = n(120356),
    r = n.n(l),
    a = n(442837),
    s = n(481060),
    o = n(493683),
    c = n(239091),
    u = n(146773),
    d = n(595519),
    h = n(619915),
    p = n(201895),
    f = n(873696),
    _ = n(66999),
    m = n(22082),
    g = n(665906),
    C = n(592125),
    I = n(430824),
    E = n(496675),
    N = n(306680),
    S = n(9156),
    x = n(594174),
    v = n(109446),
    Z = n(98597),
    T = n(648501),
    b = n(473403),
    A = n(304471),
    R = n(981631),
    M = n(647086),
    L = n(872356);
function P(e, t, n) {
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
class y extends Z.ZP {
    componentWillUnmount() {
        this.resetTextChannelPopoutTimers();
    }
    resetTextChannelPopoutTimers() {
        clearTimeout(this.enterTimer), clearTimeout(this.exitTimer);
    }
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e
            ? null
            : (0, i.jsx)('div', {
                  className: L.channelInfo,
                  children: e
              });
    }
    render() {
        let { channel: e, guild: t, selected: n, muted: l, unread: a, hasActiveThreads: o, hasMoreActiveThreads: c, mentionCount: u, connectChannelDropTarget: d, connectChannelDragSource: h, connectDragPreview: _, canReorderChannel: m, isSubscriptionGated: g, isFavoriteSuggestion: C, subtitle: I, forceTopLevelThread: E, embeddedApps: N, resolvedUnreadSetting: S, withGuildIcon: x, enableActivities: v } = this.props,
            Z = v && null != N && N.length > 0,
            T = (0, f.D)(I),
            A = (0, i.jsx)('li', {
                className: r()(this.getClassName(), {
                    [L.disabled]: this.isDisabled(),
                    [L.selected]: n
                }),
                'data-dnd-name': e.name,
                onMouseEnter: c || Z ? this.handleMouseEnter : void 0,
                onMouseLeave: c || Z ? this.handleMouseLeave : void 0,
                children: (0, i.jsx)(s.Popout, {
                    position: 'right',
                    renderPopout: this.renderPopout,
                    spacing: 0,
                    onRequestClose: this.handleClosePopout,
                    shouldShow: (c && this.state.shouldShowThreadsPopout) || (Z && this.state.shouldShowActivities),
                    children: () =>
                        (0, i.jsxs)(b.Z, {
                            className: L.iconVisibility,
                            channel: e,
                            guild: t,
                            selected: !C && n,
                            muted: l,
                            unread: a,
                            mentionCount: u,
                            hasActiveThreads: o,
                            subtitle: null == T ? void 0 : T.subtitle,
                            subtitleColor: null == T ? void 0 : T.color,
                            onMouseDown: this.handleMouseDown,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: m ? _ : null,
                            isFavoriteSuggestion: C,
                            channelTypeOverride: E ? R.d4z.GUILD_TEXT : void 0,
                            resolvedUnreadSetting: S,
                            withGuildIcon: x,
                            'aria-label': (0, p.ZP)({
                                channel: e,
                                unread: a,
                                mentionCount: u,
                                isSubscriptionGated: g
                            }),
                            children: [C && this.renderAcceptSuggestionButton(), C && this.renderRemoveSuggestionButton(), !C && this.renderInviteButton(), !C && this.renderEditButton(), !C && this.renderChannelInfo()]
                        })
                })
            });
        return m ? d(h(A)) : A;
    }
    constructor(...e) {
        super(...e),
            P(this, 'state', {
                shouldShowThreadsPopout: !1,
                shouldShowActivities: !1
            }),
            P(this, 'enterTimer', 0),
            P(this, 'exitTimer', 0),
            P(this, 'handleMouseEnter', () => {
                if (!!this.props.canShowThreadPreviewForUser || null != this.props.embeddedApps)
                    this.resetTextChannelPopoutTimers(),
                        (this.enterTimer = setTimeout(() => {
                            null != this.props.embeddedApps && this.props.embeddedApps.length > 0 ? this.setState({ shouldShowActivities: !0 }) : this.props.canShowThreadPreviewForUser && this.setState({ shouldShowThreadsPopout: !0 });
                        }, 200));
            }),
            P(this, 'handleMouseLeave', () => {
                this.resetTextChannelPopoutTimers(),
                    (this.exitTimer = setTimeout(() => {
                        this.state.shouldShowActivities && this.setState({ shouldShowActivities: !1 }), this.state.shouldShowThreadsPopout && this.setState({ shouldShowThreadsPopout: !1 });
                    }, 250));
            }),
            P(this, 'handleThreadsPopoutClose', () => {
                this.resetTextChannelPopoutTimers(), this.setState({ shouldShowThreadsPopout: !1 });
            }),
            P(this, 'handleActivitiesPopoutClose', () => {
                this.resetTextChannelPopoutTimers(), this.setState({ shouldShowActivities: !1 });
            }),
            P(this, 'handleClosePopout', () => {
                this.state.shouldShowActivities && this.handleActivitiesPopoutClose(), this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose();
            }),
            P(this, 'handleMouseDown', () => {
                this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose();
                let { channel: e } = this.props,
                    t = e.getGuildId();
                o.Z.preload(null != t ? t : R.ME, e.id);
            }),
            P(this, 'renderPopout', (e) => {
                let { channel: t, sorting: n, embeddedApps: l } = this.props,
                    { shouldShowActivities: r } = this.state;
                return null != l && l.length > 0 && r && !n
                    ? (0, i.jsx)(A.Z, {
                          onAction: this.handleActivitiesPopoutClose,
                          channel: t
                      })
                    : (0, i.jsx)(v.Z, {
                          ...e,
                          channel: this.props.channel
                      });
            }),
            P(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props;
                if (t.type === R.d4z.GROUP_DM) {
                    (0, c.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('25421')]).then(n.bind(n, 354741));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                channel: t,
                                selected: !0
                            });
                    });
                    return;
                }
                if (t.type === R.d4z.DM) {
                    let l = x.default.getUser(t.getRecipientId());
                    null != l &&
                        (0, c.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('56826'), n.e('29212')]).then(n.bind(n, 131404));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    user: l,
                                    channel: t,
                                    showModalItems: !1
                                });
                        });
                    return;
                }
                let l = I.Z.getGuild(t.getGuildId());
                null != l &&
                    (0, c.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('54310')]).then(n.bind(n, 373651));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                channel: t,
                                guild: l
                            });
                    });
            });
    }
}
let O = (0, u.B)(y);
function j(e) {
    let { channel: t, guild: n, disableSorting: l, isFavoriteCategory: r, muted: s, selected: o } = e,
        { hasActiveThreads: c, hasMoreActiveThreads: u } = (0, g.JQ)(t),
        p = (0, a.cj)([N.ZP], () => ({
            unread: N.ZP.hasUnread(t.id),
            ackMessageId: N.ZP.ackMessageId(t.id),
            mentionCount: N.ZP.getMentionCount(t.id)
        })),
        f = (0, a.e7)([S.ZP], () => S.ZP.resolveUnreadSetting(t)),
        I = (0, a.cj)([C.Z, E.Z], () => {
            let e = C.Z.getChannel(t.parent_id);
            return {
                canManageChannel: E.Z.can(R.Plq.MANAGE_CHANNELS, t),
                canReorderChannel: !0 !== l && (n.id === M._ || (null != e ? E.Z.can(R.Plq.MANAGE_CHANNELS, e) : E.Z.can(R.Plq.MANAGE_CHANNELS, n)))
            };
        }),
        v = (0, a.e7)([m.Z], () => m.Z.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: Z, isSubscriptionGated: b } = (0, _.Z)(t.id),
        A = (0, a.e7)([S.ZP], () => S.ZP.isFavorite(n.id, t.id)),
        L = (0, a.e7)(
            [x.default],
            () => {
                let e = x.default.getCurrentUser();
                return null != e && (!t.isNSFW() || e.nsfwAllowed);
            },
            [t]
        ),
        P = (0, d.NX)(t.id),
        y = (0, T.Z)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: o,
            isSubscriptionGated: b,
            needSubscriptionToAccess: Z,
            isNewChannel: v,
            muted: s,
            enableActivities: P,
            resolvedUnreadSetting: f
        }),
        j = (0, h.ZP)(t);
    return (0, i.jsx)(O, {
        ...p,
        ...I,
        ...e,
        hasActiveThreads: c,
        hasMoreActiveThreads: u,
        isSubscriptionGated: b,
        needSubscriptionToAccess: Z,
        isNewChannel: v && e.canBeNewChannel,
        isFavoriteSuggestion: r && !A,
        canShowThreadPreviewForUser: L,
        channelInfo: y,
        embeddedApps: j,
        resolvedUnreadSetting: f,
        hasChannelInfo: null != y,
        enableActivities: P
    });
}
