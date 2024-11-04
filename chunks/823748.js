n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(512722),
    o = n.n(a),
    c = n(392711),
    u = n.n(c),
    d = n(512969),
    h = n(848246),
    m = n(442837),
    p = n(704215),
    f = n(952265),
    g = n(481060),
    C = n(475179),
    x = n(239091),
    v = n(377993),
    _ = n(457868),
    I = n(561472),
    E = n(36311),
    b = n(112724),
    S = n(902840),
    Z = n(110924),
    T = n(317381),
    N = n(82888),
    j = n(917107),
    A = n(296797),
    y = n(358221),
    P = n(677601),
    M = n(541716),
    R = n(236091),
    L = n(663993),
    k = n(252618),
    O = n(201493),
    w = n(605236),
    D = n(174130),
    U = n(588322),
    B = n(446226),
    H = n(517525),
    F = n(445384),
    G = n(613464),
    V = n(705563),
    z = n(730647),
    W = n(66999),
    Y = n(826763),
    K = n(180216),
    q = n(51486),
    X = n(168843),
    J = n(442336),
    Q = n(57304),
    $ = n(605953),
    ee = n(374306),
    et = n(984370),
    en = n(910611),
    ei = n(915718),
    el = n(518311),
    er = n(180539),
    es = n(882378),
    ea = n(207868),
    eo = n(246919),
    ec = n(754688),
    eu = n(41776),
    ed = n(6242),
    eh = n(757692),
    em = n(933843),
    ep = n(134483),
    ef = n(703656),
    eg = n(359110),
    eC = n(854709),
    ex = n(14091),
    ev = n(6025),
    e_ = n(897473),
    eI = n(922482),
    eE = n(504185),
    eb = n(657218),
    eS = n(66556),
    eZ = n(739830),
    eT = n(377929),
    eN = n(900157),
    ej = n(108427),
    eA = n(171368),
    ey = n(430670),
    eP = n(524329),
    eM = n(995532),
    eR = n(738643),
    eL = n(433355),
    ek = n(592125),
    eO = n(703558),
    ew = n(486472),
    eD = n(731290),
    eU = n(430824),
    eB = n(158776),
    eH = n(19780),
    eF = n(768119),
    eG = n(944486),
    eV = n(914010),
    ez = n(594174),
    eW = n(979651),
    eY = n(933557),
    eK = n(287746),
    eq = n(325708),
    eX = n(335615),
    eJ = n(992744),
    eQ = n(923029),
    e$ = n(194082),
    e0 = n(176505),
    e1 = n(981631),
    e2 = n(918559),
    e3 = n(354459),
    e4 = n(921944),
    e7 = n(440493),
    e6 = n(157925),
    e9 = n(388032),
    e5 = n(784237);
function e8(e, t, n) {
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
let te = (0, L.Un)({
    createPromise: () => n.e('49131').then(n.bind(n, 434878)),
    webpackId: 434878,
    renderLoader: () =>
        (0, i.jsx)('div', {
            className: e5.loader,
            children: (0, i.jsx)(g.Spinner, {})
        }),
    name: 'ForumChannel'
});
class tt extends l.PureComponent {
    componentDidMount() {
        (0, ej.e)('guild_channel');
    }
    componentDidUpdate(e) {
        null != this.props.channel && null != e.channel && this.props.channel.id !== e.channel.id && this.state.topicExpanded && this.setState({ topicExpanded: !1 }), this.openChannelModal();
    }
    openChannelContextMenu(e, t) {
        let { guild: l } = this.props;
        o()(null != t, 'Missing channel in Channel.openChannelContextMenu'),
            o()(null != l, 'Missing guild in Channel.openChannelContextMenu'),
            (0, x.jW)(e, async () => {
                let { default: e } = await n.e('24783').then(n.bind(n, 439635));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        channel: t,
                        guild: l
                    });
            });
    }
    openThreadContextMenu(e, t) {
        o()(null != t, 'Missing channel in Channel.openChannelContextMenu'),
            (0, x.jW)(e, async () => {
                let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        channel: t
                    });
            });
    }
    openDMContextMenu(e, t) {
        o()(null != t, 'Missing channel in Channel.openDMContextMenu');
        let l = ez.default.getUser(t.getRecipientId());
        o()(null != l, 'Missing user in Channel.openDMContextMenu'),
            (0, x.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('22036'), n.e('56826'), n.e('97741')]).then(n.bind(n, 131404));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        user: l,
                        channelSelected: !0,
                        channel: t
                    });
            });
    }
    shouldRenderCall() {
        let { channel: e, showCall: t, nsfwAllowed: n, nsfwAgree: i } = this.props;
        return (!(null == e ? void 0 : e.isNSFW()) || (n && i)) && t;
    }
    renderCall() {
        let { channel: e } = this.props;
        if ((o()(null != e, 'Missing channel in Channel.renderCall'), !this.shouldRenderCall())) return null;
        switch (e.type) {
            case e1.d4z.GUILD_STAGE_VOICE:
                return (0, i.jsx)(eE.Z, { channel: e }, e.id);
            case e1.d4z.GUILD_VOICE:
            case e1.d4z.DM:
            case e1.d4z.GROUP_DM:
            case e1.d4z.PUBLIC_THREAD:
            case e1.d4z.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, i.jsx)(
                    P.Z,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: t
                    },
                    'call-'.concat(e.id)
                );
            default:
                return null;
        }
    }
    renderEmbeddedActivityPanel() {
        let { channel: e } = this.props,
            t = this.shouldRenderCall();
        if ((o()(null != e, 'Missing channel in Channel.renderEmbeddedActivityPanel'), t)) return null;
        let n = this.props.height - 200;
        return (0, i.jsx)(N.Z, {
            maxHeight: n,
            renderExternalHeader: this.renderHeaderBar
        });
    }
    renderChat() {
        let { channel: e, nsfwAgree: t, guild: n, nsfwAllowed: l, needSubscriptionToAccess: r } = this.props;
        if ((o()(null != e, 'Missing channel in Channel.renderChat'), r))
            return (o()(null != n, 'premium channels must exist within a guild'), null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, i.jsx)(Y.Z, { guildId: n.id })
                : (0, i.jsx)(z.l, {
                      guildId: n.id,
                      children: (0, i.jsx)(K.Z, {
                          channelId: e.id,
                          guildId: n.id
                      })
                  });
        if (e.isNSFW() && (!l || !t)) return (0, i.jsx)(E.Z, { guild: n });
        if (e.isGuildVocal()) return null;
        if (e.isDirectory())
            return (
                o()(null != n, 'directory channels must exist within a guild'),
                (0, i.jsx)(O.Z, {
                    channel: e,
                    guild: n
                })
            );
        if (e.isForumLikeChannel()) {
            o()(null != n, 'forum channels must exist within a guild');
            let t = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth
            };
            return (0, i.jsx)(
                te,
                {
                    channel: e,
                    guild: n,
                    sidebarState: t
                },
                e.id
            );
        }
        return (0, i.jsx)(
            eK.Z,
            {
                channel: e,
                guild: n,
                chatInputType: M.I.NORMAL
            },
            null != n ? n.id : 'home'
        );
    }
    renderSidebar() {
        let { searchId: e, channel: t, parentChannel: n, guild: l, needSubscriptionToAccess: r, section: s, showCall: a, showActivityPanel: c } = this.props;
        if ((o()(null != t, 'Missing channel in Channel.renderSidebar'), __OVERLAY__ || r));
        else if (s === e1.ULH.PROFILE && t.isPrivate() && !a && !c) return (0, i.jsx)(ey.Z, { channel: t }, 'private-channel-profile-'.concat(t.id));
        else if (s === e1.ULH.MEMBERS)
            switch (t.type) {
                case e1.d4z.GROUP_DM:
                    return (0, i.jsx)(v.Z, { channel: t }, 'private-channel-recipients-'.concat(t.id));
                case e1.d4z.GUILD_DIRECTORY:
                case e1.d4z.GUILD_FORUM:
                case e1.d4z.GUILD_MEDIA:
                case e1.d4z.GUILD_ANNOUNCEMENT:
                case e1.d4z.GUILD_TEXT:
                    var u;
                    let d = !0 === e1.TPd.GUILD_THREADS_ONLY.has(t.type) ? t.id : null !== (u = t.guild_id) && void 0 !== u ? u : t.id;
                    return (0, i.jsx)(eX.Z, { channel: t }, 'channel-members-'.concat(d));
                case e1.d4z.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, i.jsx)(eX.Z, { channel: n }, 'channel-members-'.concat(n.id));
                    break;
                case e1.d4z.PUBLIC_THREAD:
                case e1.d4z.PRIVATE_THREAD:
                    if (!t.isArchivedThread() && null != l)
                        return (0, i.jsx)(
                            _.Z,
                            {
                                channel: t,
                                guild: l
                            },
                            'channel-members-'.concat(t.id)
                        );
            }
        else if (s === e1.ULH.SEARCH && null != e) return (0, i.jsx)(ex.Z, { searchId: e });
        return null;
    }
    openChannelModal() {
        let { channel: e, guildId: t, hasModalOpen: l, showWelcomeModal: r, isLurking: s, isUnavailable: a, showRealNameModal: o } = this.props;
        return null == e || null == t || a || l
            ? null
            : (o &&
                  (0, g.openModalLazy)(
                      async () => {
                          let { default: e } = await n.e('53900').then(n.bind(n, 784280));
                          return (n) =>
                              (0, i.jsx)(e, {
                                  ...n,
                                  guildId: t
                              });
                      },
                      {
                          onCloseCallback: () => F.Z.viewPrompt(e7.r.REAL_NAME_PROMPT, t),
                          modalKey: 'Guild Hub Real Name Modal'
                      }
                  ),
              r &&
                  (0, g.openModalLazy)(
                      async () => {
                          let { default: e } = await n.e('77578').then(n.bind(n, 184782));
                          return (n) =>
                              (0, i.jsx)(e, {
                                  ...n,
                                  guildId: t
                              });
                      },
                      {
                          onCloseCallback: () => (0, eP.y0)(t, s),
                          modalKey: 'Guild Welcome Screen Modal'
                      }
                  ),
              null);
    }
    renderThreadSidebar() {
        let e;
        let { channel: t, section: n, channelSidebarState: l, guildSidebarState: r, nsfwAgree: s, nsfwAllowed: a, width: o } = this.props;
        if (null == r && null == l) return null;
        if (n === e1.ULH.SIDEBAR_CHAT && null != l) {
            if ((null == t ? void 0 : t.isNSFW()) && (!a || !s)) return null;
            switch (l.type) {
                case e_.tI.CREATE_THREAD:
                    if (null == t ? void 0 : t.isForumLikeChannel()) return null;
                    e = (0, i.jsx)(eb.Z, {
                        parentChannelId: l.parentChannelId,
                        parentMessageId: l.parentMessageId,
                        location: l.location
                    });
                    break;
                case e_.tI.VIEW_THREAD:
                    let n = (null == t ? void 0 : t.isForumLikeChannel()) ? U.Z : eN.Z;
                    e = (0, i.jsx)(n, { channelId: l.channelId });
                    break;
                case e_.tI.VIEW_CHANNEL:
                case e_.tI.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != r && null == e) {
            if (r.type === e_.jL.GUILD_MEMBER_MOD_VIEW) {
                let { guildId: e, userId: t } = r.details;
                return (0, i.jsx)('div', {
                    style: { width: e1.$Y6 },
                    className: e5.guildSidebar,
                    children: (0, i.jsx)(G.Z, {
                        guildId: e,
                        userId: t,
                        onClose: () => ev.Z.closeGuildSidebar(e)
                    })
                });
            }
            return null;
        }
        if (null == e) return null;
        let c = (null == t ? void 0 : t.type) != null && e1.TPd.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            u = o - e1.PrS - c;
        return (0, i.jsx)(eq.Z, {
            sidebarType: (null == t ? void 0 : t.type) != null && e1.TPd.GUILD_THREADS_ONLY.has(t.type) ? eq.y.PostSidebar : eq.y.ThreadSidebar,
            maxWidth: u,
            onWidthChange: this.handleThreadSidebarResize,
            children: e
        });
    }
    render() {
        let { channel: e, guild: t, formattedChannelName: n, isUnavailable: l, layout: r, section: a, hasModalOpen: o, guildSidebarState: c, hasTextActivityInPanelMode: u } = this.props,
            { threadSidebarWidth: d, isThreadSidebarFloating: h } = this.state,
            m = this.shouldRenderCall();
        if (l) return (0, i.jsx)(eJ.Z, {});
        if (null == e) return (0, i.jsx)(eQ.Z, { channelId: this.props.channelId });
        let p = a === e1.ULH.SIDEBAR_CHAT,
            f = null != c && !p,
            g = !e.isForumLikeChannel() && !o,
            C = null == t ? void 0 : t.name;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(k.yY, {
                    location: C,
                    subsection: null != n ? n : void 0
                }),
                (0, i.jsxs)('div', {
                    className: s()(e5.chat, {
                        [e5.threadSidebarOpen]: p || f,
                        [e5.threadSidebarFloating]: p && h
                    }),
                    children: [
                        g
                            ? (0, i.jsx)(I.Z, {
                                  style: { right: p ? d : void 0 },
                                  className: e5.uploadArea,
                                  channel: e,
                                  draftType: eO.d.ChannelMessage
                              })
                            : null,
                        m || u ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, i.jsxs)('div', {
                            className: s()(e5.content, { [e5.noChat]: r === e1.AEg.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()]
                        })
                    ]
                }),
                this.renderThreadSidebar(),
                (0, i.jsx)(q.Z, {})
            ]
        });
    }
    constructor(...e) {
        super(...e),
            e8(this, 'state', {
                topicExpanded: !1,
                threadSidebarWidth: void 0,
                isThreadSidebarFloating: !1
            }),
            e8(this, 'handleTitleParentClick', () => {
                let { parentChannel: e } = this.props;
                if (null != e) (0, eg.Kh)(e.id);
            }),
            e8(this, '_handleContextMenu', (e, t) => {
                switch (t.type) {
                    case e1.d4z.GUILD_VOICE:
                    case e1.d4z.GUILD_ANNOUNCEMENT:
                    case e1.d4z.GUILD_TEXT:
                    case e1.d4z.GUILD_FORUM:
                    case e1.d4z.GUILD_MEDIA:
                        this.openChannelContextMenu(e, t);
                        break;
                    case e1.d4z.ANNOUNCEMENT_THREAD:
                    case e1.d4z.PUBLIC_THREAD:
                    case e1.d4z.PRIVATE_THREAD:
                        this.openThreadContextMenu(e, t);
                        break;
                    case e1.d4z.DM:
                        this.openDMContextMenu(e, t);
                }
            }),
            e8(this, 'handleContextMenu', (e) => {
                o()(null != this.props.channel, 'Missing channel in Channel.handleContextMenu'), this._handleContextMenu(e, this.props.channel);
            }),
            e8(this, 'handleParentContextMenu', (e) => {
                o()(null != this.props.parentChannel, 'Missing parentChannel in Channel.handleParentContextMenu'), this._handleContextMenu(e, this.props.parentChannel);
            }),
            e8(this, 'handleThreadSidebarResize', (e, t) => {
                this.setState({
                    threadSidebarWidth: e,
                    isThreadSidebarFloating: t
                });
            }),
            e8(this, 'openUserProfile', () => {
                let { channel: e } = this.props;
                o()(null == e ? void 0 : e.isPrivate(), 'Missing private channel in Channel.openUserProfile'),
                    (0, eA.openUserProfileModal)({
                        userId: e.getRecipientId(),
                        guildId: e.guild_id,
                        channelId: e.id,
                        analyticsLocation: { section: e1.jXE.CHANNEL_HEADER }
                    });
            }),
            e8(this, 'renderJoinRequestInterviewButtons', () => {
                let { channel: e } = this.props;
                return (null == e ? void 0 : e.hasFlag(e0.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL))
                    ? (0, i.jsx)(V.Z, {
                          channelId: e.id,
                          showTrailingDivider: !0
                      })
                    : null;
            }),
            e8(this, 'renderClipsEnabledIndicatorToolbarItem', () => {
                let { inCall: e, voiceChannel: t } = this.props;
                return e ? (0, i.jsx)(R.Z, { channelId: null != t ? t.id : null }) : null;
            }),
            e8(this, 'renderStreamQualityLiveIndicatorToolbarItem', () => {
                let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
                return (null == e ? void 0 : e.type) !== e3.fO.STREAM
                    ? null
                    : (0, i.jsx)(
                          H.Z,
                          {
                              size: e$.ZP.Sizes.LARGE,
                              participant: e,
                              showQuality: !0,
                              premiumIndicator: t
                          },
                          'live-indicator'
                      );
            }),
            e8(this, 'renderHeaderToolbar', () => {
                let { channel: e, parentChannel: t, isLurking: n, showCall: l, showActivityPanel: r } = this.props;
                o()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let s = [];
                if (e.isSystemDM()) return s;
                switch (e.type) {
                    case e1.d4z.GUILD_STAGE_VOICE:
                    case e1.d4z.GUILD_VOICE:
                        break;
                    case e1.d4z.DM:
                        s.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            s.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            s.push((0, i.jsx)(ei.Z, { channel: e }, 'calls')),
                            s.push((0, i.jsx)(Q.Z, { channel: e }, 'pins')),
                            s.push(
                                (0, i.jsx)(
                                    el.Z,
                                    {
                                        channel: e,
                                        tooltip: e9.intl.string(e9.t.Xjlbvr)
                                    },
                                    'invite'
                                )
                            ),
                            s.push(
                                (0, i.jsx)(
                                    er.Z,
                                    {
                                        channel: e,
                                        showCallOrActivityPanel: l || r
                                    },
                                    'profile'
                                )
                            ),
                            s.push((0, i.jsx)(es.Z, { channel: e }, 'safety_tools'));
                        break;
                    case e1.d4z.GROUP_DM:
                        if ((s.push(this.renderJoinRequestInterviewButtons()), s.push(this.renderClipsEnabledIndicatorToolbarItem()), s.push(this.renderStreamQualityLiveIndicatorToolbarItem()), s.push((0, i.jsx)(ei.Z, { channel: e }, 'calls')), s.push((0, i.jsx)(Q.Z, { channel: e }, 'pins')), !e.isManaged())) {
                            let t = e9.intl.string(e9.t.Xjlbvr);
                            s.push(
                                (0, i.jsx)(
                                    el.Z,
                                    {
                                        channel: e,
                                        tooltip: t
                                    },
                                    'invite'
                                )
                            );
                        }
                        s.push((0, i.jsx)(X.Z, { channelId: e.id }, 'members'));
                        break;
                    case e1.d4z.ANNOUNCEMENT_THREAD:
                    case e1.d4z.PRIVATE_THREAD:
                    case e1.d4z.PUBLIC_THREAD:
                        null != t && !t.isForumLikeChannel() && s.push((0, i.jsx)(eS.Z, { channel: t }, 'browser')), e.isVocalThread() && s.push((0, i.jsx)(ea.Z, { channel: e }, 'thread-call')), s.push((0, i.jsx)(eZ.Z, { channel: e }, 'notifications')), s.push((0, i.jsx)(Q.Z, { channel: e }, 'pins')), !e.isArchivedThread() && s.push((0, i.jsx)(X.Z, { channelId: e.id }, 'members')), null != t && (0, S.Lp)(e) && s.push((0, i.jsx)($.Z, { channel: e }, 'summaries')), s.push((0, i.jsx)(eT.Z, { channel: e }, 'threads-overflow'));
                        break;
                    case e1.d4z.GUILD_ANNOUNCEMENT:
                    case e1.d4z.GUILD_TEXT:
                        s.push((0, i.jsx)(D.Z, { channel: e }, 'favorites')), s.push((0, i.jsx)(eS.Z, { channel: e }, 'browser')), !n && s.push((0, i.jsx)(J.Z, { channel: e }, 'notifications')), s.push((0, i.jsx)(Q.Z, { channel: e }, 'pins')), s.push((0, i.jsx)(X.Z, { channelId: e.id }, 'members')), (0, S.Lp)(e) && s.push((0, i.jsx)($.Z, { channel: e }, 'summaries'));
                        break;
                    case e1.d4z.GUILD_FORUM:
                    case e1.d4z.GUILD_MEDIA:
                        !n && (s.push((0, i.jsx)(ee.Z, { channel: e }, 'forum-onboarding')), s.push((0, i.jsx)(J.Z, { channel: e }, 'notifications'))), !__OVERLAY__ && s.push((0, i.jsx)(X.Z, { channelId: e.id }, 'members'));
                        break;
                    case e1.d4z.GUILD_DIRECTORY:
                        s.push((0, i.jsx)(X.Z, { channelId: e.id }, 'members'));
                }
                return s;
            }),
            e8(this, 'renderMobileToolbar', () => {
                let { channel: e } = this.props;
                o()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let t = [];
                if (e.isSystemDM()) return t;
                switch (e.type) {
                    case e1.d4z.GUILD_STAGE_VOICE:
                    case e1.d4z.GUILD_VOICE:
                    case e1.d4z.DM:
                        break;
                    case e1.d4z.GROUP_DM:
                        t.push((0, i.jsx)(X.Z, { channelId: e.id }, 'members'));
                        break;
                    case e1.d4z.ANNOUNCEMENT_THREAD:
                    case e1.d4z.PRIVATE_THREAD:
                    case e1.d4z.PUBLIC_THREAD:
                        !e.isArchivedThread() && t.push((0, i.jsx)(X.Z, { channelId: e.id }, 'members'));
                        break;
                    case e1.d4z.GUILD_ANNOUNCEMENT:
                    case e1.d4z.GUILD_TEXT:
                    case e1.d4z.GUILD_FORUM:
                    case e1.d4z.GUILD_MEDIA:
                    case e1.d4z.GUILD_DIRECTORY:
                        t.push((0, i.jsx)(X.Z, { channelId: e.id }, 'members'));
                }
                return t;
            }),
            e8(this, 'renderFollowButton', () => {
                let { showFollowButton: e, channel: t } = this.props;
                return e
                    ? (0, i.jsx)(g.Button, {
                          size: g.Button.Sizes.MIN,
                          color: g.Button.Colors.PRIMARY,
                          className: e5.followButton,
                          onClick: () =>
                              (0, g.openModalLazy)(async () => {
                                  let { default: e } = await n.e('54642').then(n.bind(n, 720589));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          channel: t,
                                          ...n
                                      });
                              }),
                          children: e9.intl.string(e9.t['3aOv+v'])
                      })
                    : null;
            }),
            e8(this, 'renderHeaderBar', () => {
                let { channel: e, channelName: t, parentChannel: n, guild: l, guildId: r, showCall: a, showActivityPanel: c, hasVideo: u, headerGuildBreadcrumbPosition: d, isFavorites: h } = this.props;
                o()(null != e, 'Missing channel in Channel.renderHeaderBar'), o()(null != t, 'Should not be null if channel is not null.');
                let m = e.isDM() && !e.isSystemDM() ? this.openUserProfile : void 0,
                    p = (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null ? this.handleTitleParentClick : void 0;
                return (0, i.jsxs)('div', {
                    className: e5.subtitleContainer,
                    children: [
                        (0, i.jsx)(g.ThemeProvider, {
                            theme: u && a ? e1.BRd.DARK : void 0,
                            children: (o) =>
                                (0, i.jsxs)(
                                    et.Z,
                                    {
                                        guildId: r,
                                        channelId: e.id,
                                        channelType: e.type,
                                        hideSearch: e.isDirectory() || (h && !(0, eC.X)()),
                                        showDivider: h && !(0, eC.X)(),
                                        toolbar: this.renderHeaderToolbar(),
                                        mobileToolbar: this.renderMobileToolbar(),
                                        className: s()(e5.title, o),
                                        transparent: a || c,
                                        'aria-label': e9.intl.string(e9.t.BIYAqa),
                                        children: [
                                            'left' === d &&
                                                (0, i.jsx)(en.TS, {
                                                    channel: e,
                                                    guild: l,
                                                    caretPosition: 'right'
                                                }),
                                            (0, en.ud)({
                                                channel: e,
                                                channelName: t,
                                                parentChannel: n,
                                                guild: l,
                                                hasVideo: u,
                                                handleContextMenu: this.handleContextMenu,
                                                handleParentContextMenu: this.handleParentContextMenu,
                                                handleClick: m,
                                                handleParentClick: p,
                                                renderFollowButton: this.renderFollowButton
                                            }),
                                            'right' === d &&
                                                (0, i.jsx)(en.TS, {
                                                    channel: e,
                                                    guild: l,
                                                    caretPosition: 'left'
                                                }),
                                            (0, en.v0)(e, l)
                                        ]
                                    },
                                    'header-'.concat(e.id)
                                )
                        }),
                        (0, i.jsx)(ep.Z, { channelId: e.id })
                    ]
                });
            });
    }
}
let tn = (0, b.Z)(tt);
t.Z = l.memo(function (e) {
    var t;
    let { providedChannel: n } = e,
        [r, s] = l.useState(null),
        a = (0, m.e7)([eG.Z], () => eG.Z.getChannelId()),
        o = (0, m.e7)([eG.Z], () => eG.Z.getVoiceChannelId()),
        c = (0, m.e7)([ek.Z], () => (null != n ? n : ek.Z.getChannel(a)), [a, n]),
        g = (0, m.e7)([ek.Z], () => ek.Z.getChannel(o), [o]),
        x = null == c ? void 0 : c.parent_id,
        v = (0, m.e7)([ek.Z], () => ek.Z.getChannel(x), [x]),
        _ = (0, m.e7)([eU.Z], () => eU.Z.getGuild(null == c ? void 0 : c.guild_id), [c]),
        { needSubscriptionToAccess: I } = (0, W.Z)(null !== (t = null == c ? void 0 : c.id) && void 0 !== t ? t : void 0),
        E = (0, m.e7)(
            [y.Z],
            () => {
                let e = null != a ? y.Z.getParticipants(a) : [],
                    t = null != a ? y.Z.getActivityParticipants(a) : [];
                return e.length - t.length > 0;
            },
            [a]
        ),
        b = (0, B.Z)(),
        N = (0, m.e7)([eG.Z], () => {
            var e;
            return (null !== (e = null == b ? void 0 : b.channelId) && void 0 !== e ? e : eG.Z.getVoiceChannelId()) === (null == c ? void 0 : c.id);
        }),
        P = (0, m.e7)([T.ZP], () => (null != c ? T.ZP.getSelfEmbeddedActivityForChannel(c.id) : null), [c]),
        M = (0, m.e7)([eH.Z], () => eH.Z.isConnected()),
        R = (0, Z.Z)(M),
        L = M && !1 === R;
    l.useEffect(() => {
        N && L && null != P && null != c && C.Z.selectParticipant(c.id, P.applicationId);
    }, [L, c, N, P]);
    let k = (0, m.e7)([T.ZP], () => {
            var e;
            return T.ZP.getSelfEmbeddedActivityForChannel(null !== (e = null == c ? void 0 : c.id) && void 0 !== e ? e : e1.lds);
        }),
        O = (0, m.e7)([T.ZP], () => T.ZP.getActivityPanelMode()),
        D = null != k && !(0, j.Z)(null == c ? void 0 : c.id) && O === e2.Ez.PANEL,
        U = (0, m.e7)([eW.Z], () => null != c && c.isVocalThread() && !u().isEmpty(eW.Z.getVoiceStatesForChannel(c.id)), [c]),
        H = null != c && c.isPrivate() && !D && E,
        F = (null == c ? void 0 : c.isGuildVocal()) || H || U,
        { welcomeModalChannelId: G } = (0, d.TH)(),
        V = (0, m.e7)([eu.Z], () => null != c && eu.Z.isLurking(c.guild_id), [c]),
        z = (0, m.e7)([eM.Z], () => eM.Z.hasSeen(null == c ? void 0 : c.guild_id, V), [c, V]),
        Y = (0, m.e7)([y.Z, T.ZP], () => (null != T.ZP.getConnectedActivityChannelId() && T.ZP.getActivityPanelMode() === e2.Ez.PANEL ? (T.ZP.getFocusedLayout() === e2.MI.NO_CHAT ? e1.AEg.NO_CHAT : e1.AEg.NORMAL) : null != a ? y.Z.getLayout(a) : e1.AEg.NORMAL), [a]),
        K = (0, m.e7)([y.Z], () => (null != c ? y.Z.getSelectedParticipant(c.id) : null)),
        q = (0, m.e7)([ez.default], () => ez.default.getCurrentUser()),
        X = (0, eo.Z)(_),
        J = (0, eR.Z)(G, null == _ ? void 0 : _.id),
        { section: Q, channelSidebarState: $ } = (0, m.cj)(
            [eL.ZP],
            () => ({
                section: eL.ZP.getSection(a, null == c ? void 0 : c.isDM()),
                channelSidebarState: eL.ZP.getSidebarState(a)
            }),
            [a, c]
        ),
        ee = null == _ ? void 0 : _.id,
        et = (0, m.e7)([eL.ZP], () => eL.ZP.getGuildSidebarState(ee), [ee]),
        en = (0, m.e7)([eV.Z], () => eV.Z.getGuildId()) === e1.I_8,
        ei = (0, em.So)(h.q.STREAM_HIGH_QUALITY),
        el = (0, eh.o)(K, q),
        er = (0, ed.lL)('Channel', !0, q, el),
        es = (0, eY.ZP)(c),
        ea = (0, eY.ZP)(c, !0),
        ep = null != c && o === c.id,
        eg = null != c && c.isGuildStageVoice();
    (0, A.Z)({ onTransition: void 0 }),
        l.useEffect(() => {
            var e, t, n;
            let i = (0, ef.s1)();
            if ((null == i ? void 0 : null === (e = i.location) || void 0 === e ? void 0 : e.state) === e6.Df) {
                let { channelId: e } = null !== (n = (0, ec.Qj)(null == i ? void 0 : null === (t = i.location) || void 0 === t ? void 0 : t.pathname)) && void 0 !== n ? n : {};
                null != e && s(e);
            }
        }, []),
        l.useEffect(() => {
            null != r && null != c && eg && c.id === r && !ep && ((0, eI.Cq)(c), s(null));
        }, [r, eg]);
    let eC = (0, S.ts)(c),
        ex = null != c && c.isPrivate(),
        ev = (0, Z.Z)(ex),
        e_ = (0, Z.Z)(null == c ? void 0 : c.id);
    l.useEffect(() => {
        let e = ev && !ex,
            t = ev && ex && (null == c ? void 0 : c.id) !== e_;
        (e || t) && (0, w.EW)(p.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e4.L.AUTO });
    }, [null == c ? void 0 : c.id, e_, ex, ev]);
    let eE = (0, f.f9)();
    return (0, i.jsx)(tn, {
        guildId: null == c ? void 0 : c.guild_id,
        channelId: a,
        channel: c,
        channelName: es,
        formattedChannelName: ea,
        parentChannel: v,
        voiceChannel: g,
        layout: Y,
        needSubscriptionToAccess: I,
        isLurking: V,
        hasModalOpen: eE,
        section: Q,
        channelSidebarState: $,
        guildSidebarState: et,
        guild: _,
        searchId: (0, m.e7)([eF.Z], () => eF.Z.getCurrentSearchId()),
        showCall: !I && F,
        showActivityPanel: D,
        nsfwAgree: (0, m.e7)([eD.Z], () => eD.Z.didAgree(null == c ? void 0 : c.guild_id)),
        isMobile: (0, m.e7)([eB.Z], () => (null == c ? void 0 : c.type) === e1.d4z.DM && eB.Z.isMobileOnline(c.getRecipientId()), [c]),
        isUnavailable: (0, m.e7)([ew.Z], () => (null == c ? void 0 : c.guild_id) != null && ew.Z.isUnavailable(c.guild_id), [c]),
        showRealNameModal: X,
        showWelcomeModal: !z && J,
        showFollowButton: ((null == c ? void 0 : c.type) === e1.d4z.GUILD_ANNOUNCEMENT && (null == _ ? void 0 : _.hasFeature(e1.oNc.NEWS))) || !1,
        ...(0, m.cj)([eW.Z], () => ({ hasVideo: null != c && eW.Z.hasVideo(c.id) }), [c]),
        inCall: ep,
        selectedParticipant: K,
        nsfwAllowed: (null == q ? void 0 : q.nsfwAllowed) === !0,
        showChannelSummaries: eC,
        isFavorites: en,
        headerGuildBreadcrumbPosition: en ? 'left' : 'right',
        premiumIndicatorEnabled: ei || er.enabled,
        hasTextActivityInPanelMode: D
    });
});
