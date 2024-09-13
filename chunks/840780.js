n(47120);
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(512722),
    o = n.n(s),
    c = n(442837),
    u = n(704215),
    d = n(692547),
    h = n(481060),
    p = n(988298),
    _ = n(475179),
    f = n(925549),
    m = n(438139),
    g = n(730749),
    C = n(607070),
    I = n(566620),
    E = n(317381),
    N = n(620662),
    x = n(513202),
    S = n(835473),
    v = n(933557),
    Z = n(194082),
    T = n(311352),
    L = n(436774),
    A = n(730417),
    b = n(524347),
    M = n(853197),
    R = n(616360),
    O = n(858064),
    P = n(594190),
    y = n(925329),
    j = n(810568),
    D = n(168524),
    w = n(382182),
    G = n(74299),
    U = n(914923),
    k = n(165393),
    B = n(989941),
    V = n(803647),
    H = n(690221),
    F = n(231664),
    W = n(759198),
    z = n(131704),
    Y = n(199902),
    K = n(314897),
    q = n(592125),
    Q = n(984933),
    X = n(430824),
    J = n(131951),
    $ = n(496675),
    ee = n(158776),
    et = n(699516),
    en = n(944486),
    ei = n(594174),
    el = n(449224),
    er = n(626135),
    ea = n(358085),
    es = n(870569),
    eo = n(345243),
    ec = n(115530),
    eu = n(981631),
    ed = n(918559),
    eh = n(702512),
    ep = n(689938),
    e_ = n(168851);
function ef(e, t, n) {
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
let em = (0, m.Z)(function (e) {
    let { message: t } = e;
    return (0, i.jsx)(eo.Z, { children: t });
});
class eg extends l.PureComponent {
    componentDidUpdate(e) {
        !e.dropsActivityPanelExperienceBlocked && this.props.dropsActivityPanelExperienceBlocked && this.setState({ isDropsActivityPanelTooltipOpen: !1 });
    }
    isJoinableActivity() {
        let { application: e, activity: t, embeddedActivity: n } = this.props;
        return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === eu.IIU.PLAYING && (0, N.Z)(t, eu.xjy.JOIN));
    }
    renderGoLiveButton() {
        let e, t, n, l;
        let { canGoLive: r, guildId: a, isStreaming: s, channel: o, canStream: c, runningGame: u, embeddedActivity: d } = this.props;
        return (null != u || null == d) && (s || (r && null != u))
            ? (s ? ((e = !1), (t = this.handleClickStopStreamingButton), (n = h.ScreenXIcon), (l = ep.Z.Messages.STOP_STREAMING)) : c ? ((e = !1), (t = this.handleClickGoLiveButton), (n = h.ScreenArrowIcon), (l = null != u ? ep.Z.Messages.ACTIVITY_PANEL_GO_LIVE_STREAM_GAME.format({ game: u.name }) : ep.Z.Messages.ACTIVITY_PANEL_GO_LIVE)) : ((e = !0), (t = null), (n = h.ScreenArrowIcon), (l = null != o && (0, z.vd)(o.type) ? ep.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE : null != a ? ep.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_GUILD : ep.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NOT_IN_GUILD)),
              (0, i.jsx)('div', {
                  className: e_.panelButtonContainer,
                  children: (0, i.jsx)(es.Z, {
                      tooltipText: l,
                      disabled: e,
                      onClick: t,
                      icon: n
                  })
              }))
            : null;
    }
    renderInviteButton() {
        let { embeddedActivity: e } = this.props;
        return this.isJoinableActivity() && null == e
            ? (0, i.jsx)(es.Z, {
                  tooltipText: ep.Z.Messages.INVITE_EMBED_INVITE_TO_JOIN,
                  onClick: this.handleClickInviteButton,
                  icon: h.GroupPlusIcon,
                  iconForeground: e_.__invalid_actionIcon
              })
            : null;
    }
    renderDropsButton() {
        let { dropsTooltipAction: e, dropsPartnerGame: t } = this.props;
        if (null == t) return null;
        let n = this.state.isDropsActivityPanelTooltipOpen,
            l = () => this.setState({ isDropsActivityPanelTooltipOpen: !1 });
        return (0, i.jsx)(h.Popout, {
            shouldShow: n,
            position: 'top',
            align: 'center',
            onRequestClose: l,
            renderPopout: () =>
                (0, i.jsx)(O.Z, {
                    partnerGame: t,
                    tooltipAction: e,
                    onClose: l
                }),
            children: () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        this.state.showDropsSparkles && this.renderSparkles(),
                        (0, i.jsx)(es.Z, {
                            'aria-label': ep.Z.Messages.DROPS_ENABLED,
                            tooltipText: n ? null : ep.Z.Messages.DROPS_ENABLED,
                            onClick: this.handleClickDropsButton,
                            icon: R.Z
                        })
                    ]
                })
        });
    }
    renderLeaveEmbeddedActivityButton() {
        let { embeddedActivity: e, channel: t } = this.props;
        return null == e || null == t
            ? null
            : (0, i.jsx)(es.Z, {
                  tooltipText: ep.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY,
                  onClick: this.handleClickLeaveEmbeddedActivityButton(e.applicationId, t),
                  icon: h.DoorExitIcon,
                  iconForeground: e_.__invalid_actionIcon
              });
    }
    renderSparkles() {
        let { useReducedMotion: e } = this.props;
        async function t() {
            let { default: e } = await n.e('5217').then(n.t.bind(n, 801048, 19));
            return e;
        }
        return (0, i.jsx)('div', {
            className: e_.sparkleContainer,
            children: (0, i.jsx)(h.LottieAnimation, {
                importData: t,
                shouldAnimate: !e,
                className: e_.sparkles
            })
        });
    }
    renderActions() {
        let e = this.renderGoLiveButton(),
            t = this.renderDropsButton(),
            n = this.renderInviteButton(),
            l = this.renderLeaveEmbeddedActivityButton(),
            r = this.renderClipsButton();
        return null == e && null == n && null == l
            ? null
            : (0, i.jsxs)('div', {
                  className: e_.actions,
                  children: [e, n, null == e ? l : r, t]
              });
    }
    getGameName() {
        let { runningGame: e, application: t } = this.props;
        return null != t ? t.name : null != e ? e.name : ep.Z.Messages.STATUS_UNKNOWN;
    }
    renderGame() {
        let { isStreaming: e, dropsPartnerGame: t, application: n, runningGame: l } = this.props,
            r = this.getGameName();
        return (0, i.jsxs)('div', {
            className: e_.gameWrapper,
            children: [
                (0, i.jsxs)('div', {
                    className: e_.gameIconWrapper,
                    children: [
                        (0, i.jsx)(y.Z, {
                            className: e_.gameIcon,
                            game: n,
                            pid: null == l ? void 0 : l.pid
                        }),
                        e
                            ? (0, i.jsx)(h.VideoIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: e_.liveBadge
                              })
                            : null
                    ]
                }),
                (0, i.jsx)('div', {
                    className: a()(e_.info, { [e_.infoWithDrops]: null != t }),
                    children:
                        null != r
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(eC, {
                                          name: r,
                                          applicationId: null == n ? void 0 : n.id
                                      }),
                                      null != t &&
                                          (0, i.jsx)('div', {
                                              className: e_.dropsBadgeWrapper,
                                              children: (0, i.jsx)(h.TextBadge, {
                                                  text: ep.Z.Messages.DROPS_AVAILABLE,
                                                  color: d.Z.unsafe_rawColors.BRAND_500.css,
                                                  className: e_.dropsBadge
                                              })
                                          })
                                  ]
                              })
                            : null
                })
            ]
        });
    }
    renderScreenshare() {
        let { isStreaming: e, dropsPartnerGame: t, streamMetadata: n, streamQualityIndicator: l } = this.props,
            { title: r, sanitizedTitle: s } = (0, U.Z)(n);
        return (0, i.jsxs)('div', {
            className: e_.gameWrapper,
            children: [
                e
                    ? (0, i.jsx)(k.Z, { title: s })
                    : (0, i.jsx)(Z.ZP, {
                          look: Z.ZP.Looks.GRAY,
                          size: Z.ZP.Sizes.SMALL,
                          className: e_.liveIndicator
                      }),
                (0, i.jsxs)('div', {
                    className: a()(e_.info, { [e_.infoWithDrops]: null != t }),
                    children: [
                        (0, i.jsx)(ec.Z, { children: r }),
                        null != l &&
                            (0, i.jsxs)('div', {
                                className: e_.perksDemoContainer,
                                children: [
                                    (0, i.jsx)(h.NitroWheelIcon, {
                                        size: 'xxs',
                                        color: L.JX.PREMIUM_TIER_2
                                    }),
                                    (0, i.jsx)(W.Z, {
                                        className: e_.perksDemoText,
                                        variant: 'text-xxs/semibold',
                                        children: l
                                    })
                                ]
                            }),
                        null != t &&
                            (0, i.jsx)('div', {
                                className: e_.dropsBadgeWrapper,
                                children: (0, i.jsx)(h.TextBadge, {
                                    text: ep.Z.Messages.DROPS_AVAILABLE,
                                    color: d.Z.unsafe_rawColors.BRAND_500.css,
                                    className: e_.dropsBadge
                                })
                            })
                    ]
                })
            ]
        });
    }
    renderEmbeddedActivity() {
        let e;
        let { application: t, embeddedActivity: n, channel: l, channelName: r, guildForConnectedChannel: a } = this.props;
        if (null == n || null == l || null == t) return null;
        let s = { start: n.connectedSince },
            o = r;
        null != a ? ((e = eu.Z5c.CHANNEL(a.id, l.id)), (o = ''.concat(o, ' / ').concat(a.name))) : (e = eu.Z5c.CHANNEL(eu.ME, l.id));
        let c = (0, i.jsx)(H.Z, {
            href: e,
            onClick: this.handleApplicationLinkClick,
            children: (0, i.jsx)(eo.Z, {
                className: e_.channel,
                children: o
            })
        });
        return (0, i.jsxs)('div', {
            className: e_.gameWrapper,
            children: [
                (0, i.jsx)(y.Z, {
                    className: e_.gameIcon,
                    game: t,
                    size: y.Z.Sizes.SMALL
                }),
                (0, i.jsxs)('div', {
                    className: e_.info,
                    children: [
                        (0, i.jsx)(H.Z, {
                            href: e,
                            onClick: this.handleApplicationLinkClick,
                            children: (0, i.jsx)(ec.Z, {
                                className: e_.activityName,
                                children: t.name
                            })
                        }),
                        (0, z.Qm)(l.type) ? c : (0, i.jsx)(em, { timestamps: s })
                    ]
                })
            ]
        });
    }
    render() {
        let { canGoLive: e, embeddedActivity: t, runningGame: n, isStreaming: l, streamMetadata: r, className: s } = this.props;
        return l || ((this.isJoinableActivity() || e) && (null != n || null != t))
            ? (0, i.jsx)('div', {
                  className: a()(e_.panel, s),
                  children: (0, i.jsxs)('div', {
                      className: e_.body,
                      children: [(() => (null == n || (l && (null == r ? void 0 : r.pid) == null) ? (null != t ? this.renderEmbeddedActivity() : this.renderScreenshare()) : this.renderGame()))(), this.renderActions()]
                  })
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            ef(this, 'modalKey', void 0),
            ef(this, 'state', {
                isDropsActivityPanelTooltipOpen: !1,
                showDropsSparkles: this.props.showDropsSparkles
            }),
            ef(this, 'handleClickGoLiveButton', () => {
                let { guildId: e, channel: t } = this.props,
                    l = null != t && (0, z.vd)(t.type) ? t : null,
                    r = null != l ? l.getGuildId() : e;
                (0, h.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('46746'), n.e('41720')]).then(n.bind(n, 60594));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            selectSource: !1,
                            guildId: r,
                            analyticsLocation: eu.Sbl.ACTIVITY_PANEL
                        });
                }).then((e) => {
                    null != e && (this.modalKey = e);
                });
            }),
            ef(this, 'handleClickStopStreamingButton', () => {
                let { stream: e } = this.props;
                (0, V.Z)(e);
            }),
            ef(this, 'handleClickInviteButton', () => {
                let { activity: e, analyticsContext: t } = this.props;
                o()(null != e, 'Received null activity'),
                    er.default.track(eu.rMx.OPEN_MODAL, {
                        type: 'Send Join Invite',
                        application_id: e.application_id,
                        location: t.location
                    }),
                    (0, p.h7)(e, !1);
            }),
            ef(this, 'handleClickDropsButton', () => {
                let { dropsPartnerGame: e, dropsTooltipAction: t, userId: n } = this.props;
                if (null == e) return;
                let i = (0, M.BS)(e);
                null != i &&
                    (er.default.track(eu.rMx.DROPS_ACTIVITY_PANEL_BUTTON_CLICK, {
                        user_id: n,
                        drops_quest_id: i.dropsQuestId,
                        game_id: i.dropsGameId,
                        game_name: i.title.toLowerCase(),
                        show_sparkles: this.state.showDropsSparkles,
                        tooltip_action: t
                    }),
                    this.setState({
                        isDropsActivityPanelTooltipOpen: !this.state.isDropsActivityPanelTooltipOpen,
                        showDropsSparkles: !1
                    }));
            }),
            ef(this, 'handleClickLeaveEmbeddedActivityButton', (e, t) => () => {
                x.Z.leaveActivity({
                    channelId: t.id,
                    applicationId: e,
                    showFeedback: !0
                });
            }),
            ef(this, 'renderClipsButton', () => {
                let { stream: e } = this.props;
                return null == e ? null : (0, i.jsx)(T.Z, {});
            }),
            ef(this, 'handleApplicationLinkClick', () => {
                var e;
                let { channel: t, embeddedActivity: n } = this.props;
                o()(null != t, 'Channel is null during navigation click'), o()(null != n, 'Activity null during navigation click'), (0, z.vd)(t.type) && _.Z.selectParticipant(t.id, n.applicationId), f.Z.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : eu.ME, t.id), (0, z.Qm)(t.type) && (0, I.tg)(ed.Ez.PANEL);
            });
    }
}
function eC(e) {
    let { name: t, applicationId: n } = e,
        l = (0, D.Z)({
            location: 'ActivityPanelGameCard',
            applicationId: n,
            source: j.m1.RtcPanel,
            trackEntryPointImpression: !0
        });
    return (0, i.jsx)(h.Clickable, {
        onClick: l,
        className: a()(null != l && e_.clickableGameName),
        children: (0, i.jsx)(ec.Z, {
            className: e_.gameName,
            children: t
        })
    });
}
t.Z = (0, g.Z)(function (e) {
    var t;
    let { guildId: n, ...l } = e,
        r = (0, c.e7)([K.default], () => K.default.getId()),
        a = (0, c.e7)([P.ZP, el.Z], () => (0, B.Z)(P.ZP, el.Z)),
        s = (0, c.e7)([en.Z, q.Z], () => q.Z.getChannel(en.Z.getVoiceChannelId())),
        o = (0, c.e7)([E.ZP], () => E.ZP.getConnectedActivityChannelId()),
        d = (0, c.e7)([q.Z], () => q.Z.getChannel(o)),
        h = (0, c.e7)([X.Z], () => X.Z.getGuild(null == d ? void 0 : d.guild_id)),
        [p, _] = (0, c.Wu)([Y.Z], () => [Y.Z.getCurrentUserActiveStream(), Y.Z.getStreamerActiveStreamMetadata()]),
        f = (0, c.e7)([C.Z], () => C.Z.useReducedMotion),
        m = (0, c.e7)([b.Z], () => b.Z.getActivityPanelTooltipAction()),
        { partnerGame: g, dropsActivityPanelExperienceBlocked: I, showDropsSparkles: N } = (0, A.c)(eh.X2.FORTNITE, a, u.z.QUEST_2_ENROLLMENT_TOOLTIP, u.z.QUEST_2_COMPLETION_TOOLTIP),
        x = (0, c.e7)([E.ZP], () => (null != d ? E.ZP.getSelfEmbeddedActivityForChannel(d.id) : null)),
        Z = (0, c.e7)([X.Z, $.Z, Q.ZP], () => (null != s ? w.JL(s, X.Z, $.Z, !1) : null != n && w.h_(Q.ZP.getChannels(n), X.Z, $.Z).length > 0)),
        [T] = (0, S.Z)([
            null !==
                (t = (function () {
                    if (null != _ && null != _.id) return _.id;
                    if (null != a && null != a.id) return a.id;
                    if (null != x) return x.applicationId;
                })()) && void 0 !== t
                ? t
                : ''
        ]),
        L = (0, c.e7)([J.Z], () => (0, G.Z)(J.Z) && (0, ea.isWindows)()),
        M = (0, c.e7)([ee.Z], () => (null != r ? ee.Z.findActivity(r, (e) => e.type === eu.IIU.PLAYING) : null)),
        R = null != p && p.ownerId === r && p.state !== eu.jm8.ENDED,
        O = (0, c.e7)([ei.default, et.Z], () => (null != d ? (0, v.F6)(d, ei.default, et.Z) : void 0)),
        y = (0, F.Z)();
    return (0, i.jsx)(eg, {
        ...l,
        guildId: n,
        canGoLive: L,
        activity: M,
        embeddedActivity: x,
        showDropsSparkles: N,
        dropsPartnerGame: g,
        dropsActivityPanelExperienceBlocked: I,
        userId: r,
        runningGame: a,
        application: T,
        useReducedMotion: f,
        isStreaming: R,
        channel: d,
        canStream: Z,
        dropsTooltipAction: m,
        stream: p,
        streamMetadata: _,
        channelName: O,
        guildForConnectedChannel: h,
        streamQualityIndicator: y
    });
});
