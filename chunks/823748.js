n(47120), n(653041);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(512722),
    o = n.n(r),
    c = n(392711),
    u = n.n(c),
    d = n(266067),
    h = n(848246),
    p = n(442837),
    m = n(704215),
    _ = n(952265),
    f = n(481060),
    E = n(475179),
    C = n(239091),
    g = n(377993),
    I = n(457868),
    x = n(561472),
    T = n(36311),
    N = n(112724),
    S = n(902840),
    v = n(110924),
    Z = n(317381),
    A = n(82888),
    M = n(917107),
    b = n(296797),
    R = n(358221),
    L = n(677601),
    j = n(541716),
    O = n(236091),
    P = n(663993),
    y = n(252618),
    D = n(201493),
    k = n(605236),
    U = n(174130),
    w = n(588322),
    B = n(446226),
    H = n(517525),
    G = n(445384),
    V = n(613464),
    F = n(705563),
    W = n(730647),
    z = n(66999),
    Y = n(826763),
    K = n(180216),
    q = n(51486),
    X = n(168843),
    Q = n(442336),
    J = n(57304),
    $ = n(605953),
    ee = n(374306),
    et = n(984370),
    en = n(910611),
    ei = n(915718),
    ea = n(518311),
    es = n(180539),
    el = n(882378),
    er = n(207868),
    eo = n(246919),
    ec = n(754688),
    eu = n(41776),
    ed = n(6242),
    eh = n(757692),
    ep = n(933843),
    em = n(134483),
    e_ = n(703656),
    ef = n(359110),
    eE = n(854709),
    eC = n(14091),
    eg = n(6025),
    eI = n(897473),
    ex = n(922482),
    eT = n(504185),
    eN = n(657218),
    eS = n(66556),
    ev = n(739830),
    eZ = n(377929),
    eA = n(900157),
    eM = n(108427),
    eb = n(171368),
    eR = n(430670),
    eL = n(524329),
    ej = n(995532),
    eO = n(738643),
    eP = n(433355),
    ey = n(592125),
    eD = n(703558),
    ek = n(486472),
    eU = n(731290),
    ew = n(430824),
    eB = n(158776),
    eH = n(19780),
    eG = n(768119),
    eV = n(944486),
    eF = n(914010),
    eW = n(594174),
    ez = n(979651),
    eY = n(933557),
    eK = n(287746),
    eq = n(325708),
    eX = n(335615),
    eQ = n(992744),
    eJ = n(923029),
    e$ = n(194082),
    e0 = n(176505),
    e1 = n(981631),
    e2 = n(918559),
    e7 = n(354459),
    e4 = n(921944),
    e3 = n(440493),
    e5 = n(157925),
    e6 = n(689938),
    e9 = n(625032);
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
let te = (0, P.Un)({
    createPromise: () => n.e('49131').then(n.bind(n, 434878)),
    webpackId: 434878,
    renderLoader: () =>
        (0, i.jsx)('div', {
            className: e9.loader,
            children: (0, i.jsx)(f.Spinner, {})
        }),
    name: 'ForumChannel'
});
class tt extends a.PureComponent {
    componentDidMount() {
        (0, eM.e)('guild_channel');
    }
    componentDidUpdate(e) {
        null != this.props.channel && null != e.channel && this.props.channel.id !== e.channel.id && this.state.topicExpanded && this.setState({ topicExpanded: !1 }), this.openChannelModal();
    }
    openChannelContextMenu(e, t) {
        let { guild: a } = this.props;
        o()(null != t, 'Missing channel in Channel.openChannelContextMenu'),
            o()(null != a, 'Missing guild in Channel.openChannelContextMenu'),
            (0, C.jW)(e, async () => {
                let { default: e } = await n.e('24783').then(n.bind(n, 439635));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        channel: t,
                        guild: a
                    });
            });
    }
    openThreadContextMenu(e, t) {
        o()(null != t, 'Missing channel in Channel.openChannelContextMenu'),
            (0, C.jW)(e, async () => {
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
        let a = eW.default.getUser(t.getRecipientId());
        o()(null != a, 'Missing user in Channel.openDMContextMenu'),
            (0, C.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('90286'), n.e('22036'), n.e('56826'), n.e('30295')]).then(n.bind(n, 131404));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        user: a,
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
                return (0, i.jsx)(eT.Z, { channel: e }, e.id);
            case e1.d4z.GUILD_VOICE:
            case e1.d4z.DM:
            case e1.d4z.GROUP_DM:
            case e1.d4z.PUBLIC_THREAD:
            case e1.d4z.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, i.jsx)(
                    L.Z,
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
        return (0, i.jsx)(A.Z, {
            maxHeight: n,
            renderExternalHeader: this.renderHeaderBar
        });
    }
    renderChat() {
        let { channel: e, nsfwAgree: t, guild: n, nsfwAllowed: a, needSubscriptionToAccess: s } = this.props;
        if ((o()(null != e, 'Missing channel in Channel.renderChat'), s))
            return (o()(null != n, 'premium channels must exist within a guild'), null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, i.jsx)(Y.Z, { guildId: n.id })
                : (0, i.jsx)(W.l, {
                      guildId: n.id,
                      children: (0, i.jsx)(K.Z, {
                          channelId: e.id,
                          guildId: n.id
                      })
                  });
        if (e.isNSFW() && (!a || !t)) return (0, i.jsx)(T.Z, { guild: n });
        if (e.isGuildVocal()) return null;
        if (e.isDirectory())
            return (
                o()(null != n, 'directory channels must exist within a guild'),
                (0, i.jsx)(D.Z, {
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
                chatInputType: j.I.NORMAL
            },
            null != n ? n.id : 'home'
        );
    }
    renderSidebar() {
        let { searchId: e, channel: t, parentChannel: n, guild: a, needSubscriptionToAccess: s, section: l, showCall: r, showActivityPanel: c } = this.props;
        if ((o()(null != t, 'Missing channel in Channel.renderSidebar'), __OVERLAY__ || s));
        else if (l === e1.ULH.PROFILE && t.isPrivate() && !r && !c) return (0, i.jsx)(eR.Z, { channel: t }, 'private-channel-profile-'.concat(t.id));
        else if (l === e1.ULH.MEMBERS)
            switch (t.type) {
                case e1.d4z.GROUP_DM:
                    return (0, i.jsx)(g.Z, { channel: t }, 'private-channel-recipients-'.concat(t.id));
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
                    if (!t.isArchivedThread() && null != a)
                        return (0, i.jsx)(
                            I.Z,
                            {
                                channel: t,
                                guild: a
                            },
                            'channel-members-'.concat(t.id)
                        );
            }
        else if (l === e1.ULH.SEARCH && null != e) return (0, i.jsx)(eC.Z, { searchId: e });
        return null;
    }
    openChannelModal() {
        let { channel: e, guildId: t, hasModalOpen: a, showWelcomeModal: s, isLurking: l, isUnavailable: r, showRealNameModal: o } = this.props;
        return null == e || null == t || r || a
            ? null
            : (o &&
                  (0, f.openModalLazy)(
                      async () => {
                          let { default: e } = await n.e('53900').then(n.bind(n, 784280));
                          return (n) =>
                              (0, i.jsx)(e, {
                                  ...n,
                                  guildId: t
                              });
                      },
                      {
                          onCloseCallback: () => G.Z.viewPrompt(e3.r.REAL_NAME_PROMPT, t),
                          modalKey: 'Guild Hub Real Name Modal'
                      }
                  ),
              s &&
                  (0, f.openModalLazy)(
                      async () => {
                          let { default: e } = await n.e('77578').then(n.bind(n, 184782));
                          return (n) =>
                              (0, i.jsx)(e, {
                                  ...n,
                                  guildId: t
                              });
                      },
                      {
                          onCloseCallback: () => (0, eL.y0)(t, l),
                          modalKey: 'Guild Welcome Screen Modal'
                      }
                  ),
              null);
    }
    renderThreadSidebar() {
        let e;
        let { channel: t, section: n, channelSidebarState: a, guildSidebarState: s, nsfwAgree: l, nsfwAllowed: r, width: o } = this.props;
        if (null == s && null == a) return null;
        if (n === e1.ULH.SIDEBAR_CHAT && null != a) {
            if ((null == t ? void 0 : t.isNSFW()) && (!r || !l)) return null;
            switch (a.type) {
                case eI.tI.CREATE_THREAD:
                    if (null == t ? void 0 : t.isForumLikeChannel()) return null;
                    e = (0, i.jsx)(eN.Z, {
                        parentChannelId: a.parentChannelId,
                        parentMessageId: a.parentMessageId,
                        location: a.location
                    });
                    break;
                case eI.tI.VIEW_THREAD:
                    let n = (null == t ? void 0 : t.isForumLikeChannel()) ? w.Z : eA.Z;
                    e = (0, i.jsx)(n, { channelId: a.channelId });
                    break;
                case eI.tI.VIEW_CHANNEL:
                case eI.tI.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e) {
            if (s.type === eI.jL.GUILD_MEMBER_MOD_VIEW) {
                let { guildId: e, userId: t } = s.details;
                return (0, i.jsx)('div', {
                    style: { width: e1.$Y6 },
                    className: e9.guildSidebar,
                    children: (0, i.jsx)(V.Z, {
                        guildId: e,
                        userId: t,
                        onClose: () => eg.Z.closeGuildSidebar(e)
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
        let { channel: e, guild: t, formattedChannelName: n, isUnavailable: a, layout: s, section: r, hasModalOpen: o, guildSidebarState: c, hasTextActivityInPanelMode: u } = this.props,
            { threadSidebarWidth: d, isThreadSidebarFloating: h } = this.state,
            p = this.shouldRenderCall();
        if (a) return (0, i.jsx)(eQ.Z, {});
        if (null == e) return (0, i.jsx)(eJ.Z, { channelId: this.props.channelId });
        let m = r === e1.ULH.SIDEBAR_CHAT,
            _ = null != c && !m,
            f = !e.isForumLikeChannel() && !o,
            E = null == t ? void 0 : t.name;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(y.yY, {
                    location: E,
                    subsection: null != n ? n : void 0
                }),
                (0, i.jsxs)('div', {
                    className: l()(e9.chat, {
                        [e9.threadSidebarOpen]: m || _,
                        [e9.threadSidebarFloating]: m && h
                    }),
                    children: [
                        f
                            ? (0, i.jsx)(x.Z, {
                                  style: { right: m ? d : void 0 },
                                  className: e9.uploadArea,
                                  channel: e,
                                  draftType: eD.d.ChannelMessage
                              })
                            : null,
                        p || u ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, i.jsxs)('div', {
                            className: l()(e9.content, { [e9.noChat]: s === e1.AEg.NO_CHAT }),
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
                if (null != e) (0, ef.Kh)(e.id);
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
                    (0, eb.openUserProfileModal)({
                        userId: e.getRecipientId(),
                        guildId: e.guild_id,
                        channelId: e.id,
                        analyticsLocation: { section: e1.jXE.CHANNEL_HEADER }
                    });
            }),
            e8(this, 'renderJoinRequestInterviewButtons', () => {
                let { channel: e } = this.props;
                return (null == e ? void 0 : e.hasFlag(e0.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL))
                    ? (0, i.jsx)(F.Z, {
                          channelId: e.id,
                          showTrailingDivider: !0
                      })
                    : null;
            }),
            e8(this, 'renderClipsEnabledIndicatorToolbarItem', () => {
                let { inCall: e, voiceChannel: t } = this.props;
                return e ? (0, i.jsx)(O.Z, { channelId: null != t ? t.id : null }) : null;
            }),
            e8(this, 'renderStreamQualityLiveIndicatorToolbarItem', () => {
                let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
                return (null == e ? void 0 : e.type) !== e7.fO.STREAM
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
                let { channel: e, parentChannel: t, isLurking: n, showCall: a, showActivityPanel: s } = this.props;
                o()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let l = [];
                if (e.isSystemDM()) return l;
                switch (e.type) {
                    case e1.d4z.GUILD_STAGE_VOICE:
                    case e1.d4z.GUILD_VOICE:
                        break;
                    case e1.d4z.DM:
                        l.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            l.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            l.push((0, i.jsx)(ei.Z, { channel: e }, 'calls')),
                            l.push((0, i.jsx)(J.Z, { channel: e }, 'pins')),
                            l.push(
                                (0, i.jsx)(
                                    ea.Z,
                                    {
                                        channel: e,
                                        tooltip: e6.Z.Messages.GROUP_DM_ADD_FRIENDS
                                    },
                                    'invite'
                                )
                            ),
                            l.push(
                                (0, i.jsx)(
                                    es.Z,
                                    {
                                        channel: e,
                                        showCallOrActivityPanel: a || s
                                    },
                                    'profile'
                                )
                            ),
                            l.push((0, i.jsx)(el.Z, { channel: e }, 'safety_tools'));
                        break;
                    case e1.d4z.GROUP_DM:
                        if ((l.push(this.renderJoinRequestInterviewButtons()), l.push(this.renderClipsEnabledIndicatorToolbarItem()), l.push(this.renderStreamQualityLiveIndicatorToolbarItem()), l.push((0, i.jsx)(ei.Z, { channel: e }, 'calls')), l.push((0, i.jsx)(J.Z, { channel: e }, 'pins')), !e.isManaged())) {
                            let t = e6.Z.Messages.GROUP_DM_ADD_FRIENDS;
                            l.push(
                                (0, i.jsx)(
                                    ea.Z,
                                    {
                                        channel: e,
                                        tooltip: t
                                    },
                                    'invite'
                                )
                            );
                        }
                        l.push((0, i.jsx)(X.Z, { channelId: e.id }, 'members'));
                        break;
                    case e1.d4z.ANNOUNCEMENT_THREAD:
                    case e1.d4z.PRIVATE_THREAD:
                    case e1.d4z.PUBLIC_THREAD:
                        null != t && !t.isForumLikeChannel() && l.push((0, i.jsx)(eS.Z, { channel: t }, 'browser')), e.isVocalThread() && l.push((0, i.jsx)(er.Z, { channel: e }, 'thread-call')), l.push((0, i.jsx)(ev.Z, { channel: e }, 'notifications')), l.push((0, i.jsx)(J.Z, { channel: e }, 'pins')), !e.isArchivedThread() && l.push((0, i.jsx)(X.Z, { channelId: e.id }, 'members')), null != t && (0, S.Lp)(e) && l.push((0, i.jsx)($.Z, { channel: e }, 'summaries')), l.push((0, i.jsx)(eZ.Z, { channel: e }, 'threads-overflow'));
                        break;
                    case e1.d4z.GUILD_ANNOUNCEMENT:
                    case e1.d4z.GUILD_TEXT:
                        l.push((0, i.jsx)(U.Z, { channel: e }, 'favorites')), l.push((0, i.jsx)(eS.Z, { channel: e }, 'browser')), !n && l.push((0, i.jsx)(Q.Z, { channel: e }, 'notifications')), l.push((0, i.jsx)(J.Z, { channel: e }, 'pins')), l.push((0, i.jsx)(X.Z, { channelId: e.id }, 'members')), (0, S.Lp)(e) && l.push((0, i.jsx)($.Z, { channel: e }, 'summaries'));
                        break;
                    case e1.d4z.GUILD_FORUM:
                    case e1.d4z.GUILD_MEDIA:
                        !n && (l.push((0, i.jsx)(ee.Z, { channel: e }, 'forum-onboarding')), l.push((0, i.jsx)(Q.Z, { channel: e }, 'notifications'))), !__OVERLAY__ && l.push((0, i.jsx)(X.Z, { channelId: e.id }, 'members'));
                        break;
                    case e1.d4z.GUILD_DIRECTORY:
                        l.push((0, i.jsx)(X.Z, { channelId: e.id }, 'members'));
                }
                return l;
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
                    ? (0, i.jsx)(f.Button, {
                          size: f.Button.Sizes.MIN,
                          color: f.Button.Colors.PRIMARY,
                          className: e9.followButton,
                          onClick: () =>
                              (0, f.openModalLazy)(async () => {
                                  let { default: e } = await n.e('54642').then(n.bind(n, 720589));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          channel: t,
                                          ...n
                                      });
                              }),
                          children: e6.Z.Messages.FOLLOW
                      })
                    : null;
            }),
            e8(this, 'renderHeaderBar', () => {
                let { channel: e, channelName: t, parentChannel: n, guild: a, guildId: s, showCall: r, showActivityPanel: c, hasVideo: u, headerGuildBreadcrumbPosition: d, isFavorites: h } = this.props;
                o()(null != e, 'Missing channel in Channel.renderHeaderBar'), o()(null != t, 'Should not be null if channel is not null.');
                let p = e.isDM() && !e.isSystemDM() ? this.openUserProfile : void 0,
                    m = (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null ? this.handleTitleParentClick : void 0;
                return (0, i.jsxs)('div', {
                    className: e9.subtitleContainer,
                    children: [
                        (0, i.jsx)(f.ThemeProvider, {
                            theme: u && r ? e1.BRd.DARK : void 0,
                            children: (o) =>
                                (0, i.jsxs)(
                                    et.Z,
                                    {
                                        guildId: s,
                                        channelId: e.id,
                                        channelType: e.type,
                                        hideSearch: e.isDirectory() || (h && !(0, eE.X)()),
                                        showDivider: h && !(0, eE.X)(),
                                        toolbar: this.renderHeaderToolbar(),
                                        mobileToolbar: this.renderMobileToolbar(),
                                        className: l()(e9.title, o),
                                        transparent: r || c,
                                        'aria-label': e6.Z.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
                                        children: [
                                            'left' === d &&
                                                (0, i.jsx)(en.TS, {
                                                    channel: e,
                                                    guild: a,
                                                    caretPosition: 'right'
                                                }),
                                            (0, en.ud)({
                                                channel: e,
                                                channelName: t,
                                                parentChannel: n,
                                                guild: a,
                                                hasVideo: u,
                                                handleContextMenu: this.handleContextMenu,
                                                handleParentContextMenu: this.handleParentContextMenu,
                                                handleClick: p,
                                                handleParentClick: m,
                                                renderFollowButton: this.renderFollowButton
                                            }),
                                            'right' === d &&
                                                (0, i.jsx)(en.TS, {
                                                    channel: e,
                                                    guild: a,
                                                    caretPosition: 'left'
                                                }),
                                            (0, en.v0)(e, a)
                                        ]
                                    },
                                    'header-'.concat(e.id)
                                )
                        }),
                        (0, i.jsx)(em.Z, { channelId: e.id })
                    ]
                });
            });
    }
}
let tn = (0, N.Z)(tt);
t.Z = a.memo(function (e) {
    var t;
    let { providedChannel: n } = e,
        [s, l] = a.useState(null),
        r = (0, p.e7)([eV.Z], () => eV.Z.getChannelId()),
        o = (0, p.e7)([eV.Z], () => eV.Z.getVoiceChannelId()),
        c = (0, p.e7)([ey.Z], () => (null != n ? n : ey.Z.getChannel(r)), [r, n]),
        f = (0, p.e7)([ey.Z], () => ey.Z.getChannel(o), [o]),
        C = null == c ? void 0 : c.parent_id,
        g = (0, p.e7)([ey.Z], () => ey.Z.getChannel(C), [C]),
        I = (0, p.e7)([ew.Z], () => ew.Z.getGuild(null == c ? void 0 : c.guild_id), [c]),
        { needSubscriptionToAccess: x } = (0, z.Z)(null !== (t = null == c ? void 0 : c.id) && void 0 !== t ? t : void 0),
        T = (0, p.e7)(
            [R.Z],
            () => {
                let e = null != r ? R.Z.getParticipants(r) : [],
                    t = null != r ? R.Z.getActivityParticipants(r) : [];
                return e.length - t.length > 0;
            },
            [r]
        ),
        N = (0, B.Z)(),
        A = (0, p.e7)([eV.Z], () => {
            var e;
            return (null !== (e = null == N ? void 0 : N.channelId) && void 0 !== e ? e : eV.Z.getVoiceChannelId()) === (null == c ? void 0 : c.id);
        }),
        L = (0, p.e7)([Z.ZP], () => (null != c ? Z.ZP.getSelfEmbeddedActivityForChannel(c.id) : null), [c]),
        j = (0, p.e7)([eH.Z], () => eH.Z.isConnected()),
        O = (0, v.Z)(j),
        P = j && !1 === O;
    a.useEffect(() => {
        A && P && null != L && null != c && E.Z.selectParticipant(c.id, L.applicationId);
    }, [P, c, A, L]);
    let y = (0, p.e7)([Z.ZP], () => {
            var e;
            return Z.ZP.getSelfEmbeddedActivityForChannel(null !== (e = null == c ? void 0 : c.id) && void 0 !== e ? e : e1.lds);
        }),
        D = (0, p.e7)([Z.ZP], () => Z.ZP.getActivityPanelMode()),
        U = null != y && !(0, M.Z)(null == c ? void 0 : c.id) && D === e2.Ez.PANEL,
        w = (0, p.e7)([ez.Z], () => null != c && c.isVocalThread() && !u().isEmpty(ez.Z.getVoiceStatesForChannel(c.id)), [c]),
        H = null != c && c.isPrivate() && !U && T,
        G = (null == c ? void 0 : c.isGuildVocal()) || H || w,
        { welcomeModalChannelId: V } = (0, d.TH)(),
        F = (0, p.e7)([eu.Z], () => null != c && eu.Z.isLurking(c.guild_id), [c]),
        W = (0, p.e7)([ej.Z], () => ej.Z.hasSeen(null == c ? void 0 : c.guild_id, F), [c, F]),
        Y = (0, p.e7)([R.Z, Z.ZP], () => (null != Z.ZP.getConnectedActivityChannelId() && Z.ZP.getActivityPanelMode() === e2.Ez.PANEL ? (Z.ZP.getFocusedLayout() === e2.MI.NO_CHAT ? e1.AEg.NO_CHAT : e1.AEg.NORMAL) : null != r ? R.Z.getLayout(r) : e1.AEg.NORMAL), [r]),
        K = (0, p.e7)([R.Z], () => (null != c ? R.Z.getSelectedParticipant(c.id) : null)),
        q = (0, p.e7)([eW.default], () => eW.default.getCurrentUser()),
        X = (0, eo.Z)(I),
        Q = (0, eO.Z)(V, null == I ? void 0 : I.id),
        { section: J, channelSidebarState: $ } = (0, p.cj)(
            [eP.ZP],
            () => ({
                section: eP.ZP.getSection(r, null == c ? void 0 : c.isDM()),
                channelSidebarState: eP.ZP.getSidebarState(r)
            }),
            [r, c]
        ),
        ee = null == I ? void 0 : I.id,
        et = (0, p.e7)([eP.ZP], () => eP.ZP.getGuildSidebarState(ee), [ee]),
        en = (0, p.e7)([eF.Z], () => eF.Z.getGuildId()) === e1.I_8,
        ei = (0, ep.So)(h.q.STREAM_HIGH_QUALITY),
        ea = (0, eh.o)(K, q),
        es = (0, ed.lL)('Channel', !0, q, ea),
        el = (0, eY.ZP)(c),
        er = (0, eY.ZP)(c, !0),
        em = null != c && o === c.id,
        ef = null != c && c.isGuildStageVoice();
    (0, b.Z)({ onTransition: void 0 }),
        a.useEffect(() => {
            var e, t, n;
            let i = (0, e_.s1)();
            if ((null == i ? void 0 : null === (e = i.location) || void 0 === e ? void 0 : e.state) === e5.Df) {
                let { channelId: e } = null !== (n = (0, ec.Qj)(null == i ? void 0 : null === (t = i.location) || void 0 === t ? void 0 : t.pathname)) && void 0 !== n ? n : {};
                null != e && l(e);
            }
        }, []),
        a.useEffect(() => {
            null != s && null != c && ef && c.id === s && !em && ((0, ex.Cq)(c), l(null));
        }, [s, ef]);
    let eE = (0, S.ts)(c),
        eC = null != c && c.isPrivate(),
        eg = (0, v.Z)(eC),
        eI = (0, v.Z)(null == c ? void 0 : c.id);
    a.useEffect(() => {
        let e = eg && !eC,
            t = eg && eC && (null == c ? void 0 : c.id) !== eI;
        (e || t) && (0, k.EW)(m.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e4.L.AUTO });
    }, [null == c ? void 0 : c.id, eI, eC, eg]);
    let eT = (0, _.f9)();
    return (0, i.jsx)(tn, {
        guildId: null == c ? void 0 : c.guild_id,
        channelId: r,
        channel: c,
        channelName: el,
        formattedChannelName: er,
        parentChannel: g,
        voiceChannel: f,
        layout: Y,
        needSubscriptionToAccess: x,
        isLurking: F,
        hasModalOpen: eT,
        section: J,
        channelSidebarState: $,
        guildSidebarState: et,
        guild: I,
        searchId: (0, p.e7)([eG.Z], () => eG.Z.getCurrentSearchId()),
        showCall: !x && G,
        showActivityPanel: U,
        nsfwAgree: (0, p.e7)([eU.Z], () => eU.Z.didAgree(null == c ? void 0 : c.guild_id)),
        isMobile: (0, p.e7)([eB.Z], () => (null == c ? void 0 : c.type) === e1.d4z.DM && eB.Z.isMobileOnline(c.getRecipientId()), [c]),
        isUnavailable: (0, p.e7)([ek.Z], () => (null == c ? void 0 : c.guild_id) != null && ek.Z.isUnavailable(c.guild_id), [c]),
        showRealNameModal: X,
        showWelcomeModal: !W && Q,
        showFollowButton: ((null == c ? void 0 : c.type) === e1.d4z.GUILD_ANNOUNCEMENT && (null == I ? void 0 : I.hasFeature(e1.oNc.NEWS))) || !1,
        ...(0, p.cj)([ez.Z], () => ({ hasVideo: null != c && ez.Z.hasVideo(c.id) }), [c]),
        inCall: em,
        selectedParticipant: K,
        nsfwAllowed: (null == q ? void 0 : q.nsfwAllowed) === !0,
        showChannelSummaries: eE,
        isFavorites: en,
        headerGuildBreadcrumbPosition: en ? 'left' : 'right',
        premiumIndicatorEnabled: ei || es.enabled,
        hasTextActivityInPanelMode: U
    });
});
