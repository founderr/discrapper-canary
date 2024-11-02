n.d(t, {
    Z: function () {
        return w;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    s = n(493683),
    c = n(239091),
    u = n(146773),
    d = n(595519),
    h = n(619915),
    p = n(201895),
    f = n(873696),
    m = n(66999),
    g = n(22082),
    C = n(665906),
    _ = n(592125),
    x = n(430824),
    v = n(496675),
    I = n(306680),
    b = n(9156),
    N = n(594174),
    E = n(109446),
    S = n(98597),
    Z = n(648501),
    y = n(473403),
    T = n(304471),
    j = n(981631),
    A = n(647086),
    P = n(872356);
function R(e, t, n) {
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
class M extends S.ZP {
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
                  className: P.channelInfo,
                  children: e
              });
    }
    render() {
        let { channel: e, guild: t, selected: n, muted: l, unread: a, hasActiveThreads: s, hasMoreActiveThreads: c, mentionCount: u, connectChannelDropTarget: d, connectChannelDragSource: h, connectDragPreview: m, canReorderChannel: g, isSubscriptionGated: C, isFavoriteSuggestion: _, subtitle: x, forceTopLevelThread: v, embeddedApps: I, resolvedUnreadSetting: b, withGuildIcon: N, enableActivities: E } = this.props,
            S = E && null != I && I.length > 0,
            Z = (0, f.D)(x),
            T = (0, i.jsx)('li', {
                className: r()(this.getClassName(), {
                    [P.disabled]: this.isDisabled(),
                    [P.selected]: n
                }),
                'data-dnd-name': e.name,
                onMouseEnter: c || S ? this.handleMouseEnter : void 0,
                onMouseLeave: c || S ? this.handleMouseLeave : void 0,
                children: (0, i.jsx)(o.Popout, {
                    position: 'right',
                    renderPopout: this.renderPopout,
                    spacing: 0,
                    onRequestClose: this.handleClosePopout,
                    shouldShow: (c && this.state.shouldShowThreadsPopout) || (S && this.state.shouldShowActivities),
                    children: () =>
                        (0, i.jsxs)(y.Z, {
                            className: P.iconVisibility,
                            channel: e,
                            guild: t,
                            selected: !_ && n,
                            muted: l,
                            unread: a,
                            mentionCount: u,
                            hasActiveThreads: s,
                            subtitle: null == Z ? void 0 : Z.subtitle,
                            subtitleColor: null == Z ? void 0 : Z.color,
                            onMouseDown: this.handleMouseDown,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: g ? m : null,
                            isFavoriteSuggestion: _,
                            channelTypeOverride: v ? j.d4z.GUILD_TEXT : void 0,
                            resolvedUnreadSetting: b,
                            withGuildIcon: N,
                            'aria-label': (0, p.ZP)({
                                channel: e,
                                unread: a,
                                mentionCount: u,
                                isSubscriptionGated: C
                            }),
                            children: [_ && this.renderAcceptSuggestionButton(), _ && this.renderRemoveSuggestionButton(), !_ && this.renderInviteButton(), !_ && this.renderEditButton(), !_ && this.renderChannelInfo()]
                        })
                })
            });
        return g ? d(h(T)) : T;
    }
    constructor(...e) {
        super(...e),
            R(this, 'state', {
                shouldShowThreadsPopout: !1,
                shouldShowActivities: !1
            }),
            R(this, 'enterTimer', 0),
            R(this, 'exitTimer', 0),
            R(this, 'handleMouseEnter', () => {
                if (!!this.props.canShowThreadPreviewForUser || null != this.props.embeddedApps)
                    this.resetTextChannelPopoutTimers(),
                        (this.enterTimer = setTimeout(() => {
                            null != this.props.embeddedApps && this.props.embeddedApps.length > 0 ? this.setState({ shouldShowActivities: !0 }) : this.props.canShowThreadPreviewForUser && this.setState({ shouldShowThreadsPopout: !0 });
                        }, 200));
            }),
            R(this, 'handleMouseLeave', () => {
                this.resetTextChannelPopoutTimers(),
                    (this.exitTimer = setTimeout(() => {
                        this.state.shouldShowActivities && this.setState({ shouldShowActivities: !1 }), this.state.shouldShowThreadsPopout && this.setState({ shouldShowThreadsPopout: !1 });
                    }, 250));
            }),
            R(this, 'handleThreadsPopoutClose', () => {
                this.resetTextChannelPopoutTimers(), this.setState({ shouldShowThreadsPopout: !1 });
            }),
            R(this, 'handleActivitiesPopoutClose', () => {
                this.resetTextChannelPopoutTimers(), this.setState({ shouldShowActivities: !1 });
            }),
            R(this, 'handleClosePopout', () => {
                this.state.shouldShowActivities && this.handleActivitiesPopoutClose(), this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose();
            }),
            R(this, 'handleMouseDown', () => {
                this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose();
                let { channel: e } = this.props,
                    t = e.getGuildId();
                s.Z.preload(null != t ? t : j.ME, e.id);
            }),
            R(this, 'renderPopout', (e) => {
                let { channel: t, sorting: n, embeddedApps: l } = this.props,
                    { shouldShowActivities: r } = this.state;
                return null != l && l.length > 0 && r && !n
                    ? (0, i.jsx)(T.Z, {
                          onAction: this.handleActivitiesPopoutClose,
                          channel: t
                      })
                    : (0, i.jsx)(E.Z, {
                          ...e,
                          channel: this.props.channel
                      });
            }),
            R(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props;
                if (t.type === j.d4z.GROUP_DM) {
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
                if (t.type === j.d4z.DM) {
                    let l = N.default.getUser(t.getRecipientId());
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
                let l = x.Z.getGuild(t.getGuildId());
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
let L = (0, u.B)(M);
function w(e) {
    let { channel: t, guild: n, disableSorting: l, isFavoriteCategory: r, muted: o, selected: s } = e,
        { hasActiveThreads: c, hasMoreActiveThreads: u } = (0, C.JQ)(t),
        p = (0, a.cj)([I.ZP], () => ({
            unread: I.ZP.hasUnread(t.id),
            ackMessageId: I.ZP.ackMessageId(t.id),
            mentionCount: I.ZP.getMentionCount(t.id)
        })),
        f = (0, a.e7)([b.ZP], () => b.ZP.resolveUnreadSetting(t)),
        x = (0, a.cj)([_.Z, v.Z], () => {
            let e = _.Z.getChannel(t.parent_id);
            return {
                canManageChannel: v.Z.can(j.Plq.MANAGE_CHANNELS, t),
                canReorderChannel: !0 !== l && (n.id === A._ || (null != e ? v.Z.can(j.Plq.MANAGE_CHANNELS, e) : v.Z.can(j.Plq.MANAGE_CHANNELS, n)))
            };
        }),
        E = (0, a.e7)([g.Z], () => g.Z.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: S, isSubscriptionGated: y } = (0, m.Z)(t.id),
        T = (0, a.e7)([b.ZP], () => b.ZP.isFavorite(n.id, t.id)),
        P = (0, a.e7)(
            [N.default],
            () => {
                let e = N.default.getCurrentUser();
                return null != e && (!t.isNSFW() || e.nsfwAllowed);
            },
            [t]
        ),
        R = (0, d.NX)(t.id),
        M = (0, Z.Z)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: s,
            isSubscriptionGated: y,
            needSubscriptionToAccess: S,
            isNewChannel: E,
            muted: o,
            enableActivities: R,
            resolvedUnreadSetting: f
        }),
        w = (0, h.ZP)(t);
    return (0, i.jsx)(L, {
        ...p,
        ...x,
        ...e,
        hasActiveThreads: c,
        hasMoreActiveThreads: u,
        isSubscriptionGated: y,
        needSubscriptionToAccess: S,
        isNewChannel: E && e.canBeNewChannel,
        isFavoriteSuggestion: r && !T,
        canShowThreadPreviewForUser: P,
        channelInfo: M,
        embeddedApps: w,
        resolvedUnreadSetting: f,
        hasChannelInfo: null != M,
        enableActivities: R
    });
}
