n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(512722),
    o = n.n(s),
    c = n(392711),
    d = n.n(c),
    u = n(512969),
    h = n(848246),
    p = n(442837),
    m = n(704215),
    f = n(952265),
    g = n(481060),
    C = n(475179),
    x = n(239091),
    _ = n(377993),
    v = n(457868),
    I = n(561472),
    E = n(36311),
    b = n(112724),
    Z = n(902840),
    N = n(110924),
    S = n(317381),
    T = n(82888),
    j = n(917107),
    A = n(296797),
    y = n(358221),
    P = n(677601),
    M = n(541716),
    R = n(236091),
    L = n(663993),
    k = n(252618),
    O = n(201493),
    D = n(605236),
    w = n(174130),
    B = n(588322),
    U = n(446226),
    H = n(517525),
    G = n(445384),
    F = n(613464),
    V = n(705563),
    z = n(730647),
    W = n(66999),
    K = n(826763),
    Y = n(180216),
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
    ea = n(180539),
    er = n(882378),
    es = n(207868),
    eo = n(246919),
    ec = n(754688),
    ed = n(41776),
    eu = n(6242),
    eh = n(757692),
    ep = n(933843),
    em = n(134483),
    ef = n(703656),
    eg = n(359110),
    eC = n(854709),
    ex = n(14091),
    e_ = n(6025),
    ev = n(897473),
    eI = n(922482),
    eE = n(504185),
    eb = n(657218),
    eZ = n(66556),
    eN = n(739830),
    eS = n(377929),
    eT = n(900157),
    ej = n(108427),
    eA = n(171368),
    ey = n(430670),
    eP = n(524329),
    eM = n(995532),
    eR = n(738643),
    eL = n(433355),
    ek = n(592125),
    eO = n(703558),
    eD = n(486472),
    ew = n(731290),
    eB = n(430824),
    eU = n(496675),
    eH = n(158776),
    eG = n(19780),
    eF = n(768119),
    eV = n(944486),
    ez = n(914010),
    eW = n(594174),
    eK = n(979651),
    eY = n(933557),
    eq = n(287746),
    eX = n(325708),
    eJ = n(335615),
    eQ = n(992744),
    e$ = n(923029),
    e0 = n(194082),
    e1 = n(176505),
    e2 = n(981631),
    e3 = n(918559),
    e4 = n(354459),
    e7 = n(921944),
    e6 = n(440493),
    e5 = n(157925),
    e9 = n(388032),
    e8 = n(784237);
function te(e, t, n) {
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
let tt = (0, L.Un)({
    createPromise: () => n.e('49131').then(n.bind(n, 434878)),
    webpackId: 434878,
    renderLoader: () =>
        (0, i.jsx)('div', {
            className: e8.loader,
            children: (0, i.jsx)(g.Spinner, {})
        }),
    name: 'ForumChannel'
});
class tn extends l.PureComponent {
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
        let l = eW.default.getUser(t.getRecipientId());
        o()(null != l, 'Missing user in Channel.openDMContextMenu'),
            (0, x.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('92453'), n.e('56826'), n.e('42517')]).then(n.bind(n, 131404));
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
            case e2.d4z.GUILD_STAGE_VOICE:
                return (0, i.jsx)(eE.Z, { channel: e }, e.id);
            case e2.d4z.GUILD_VOICE:
            case e2.d4z.DM:
            case e2.d4z.GROUP_DM:
            case e2.d4z.PUBLIC_THREAD:
            case e2.d4z.PRIVATE_THREAD:
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
        return (0, i.jsx)(T.Z, {
            maxHeight: n,
            renderExternalHeader: this.renderHeaderBar
        });
    }
    renderChat() {
        let { channel: e, nsfwAgree: t, guild: n, nsfwAllowed: l, needSubscriptionToAccess: a } = this.props;
        if ((o()(null != e, 'Missing channel in Channel.renderChat'), a))
            return (o()(null != n, 'premium channels must exist within a guild'), null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, i.jsx)(K.Z, { guildId: n.id })
                : (0, i.jsx)(z.l, {
                      guildId: n.id,
                      children: (0, i.jsx)(Y.Z, {
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
                tt,
                {
                    channel: e,
                    guild: n,
                    sidebarState: t
                },
                e.id
            );
        }
        return (0, i.jsx)(
            eq.Z,
            {
                channel: e,
                guild: n,
                chatInputType: M.I.NORMAL
            },
            null != n ? n.id : 'home'
        );
    }
    renderSidebar() {
        let { searchId: e, channel: t, parentChannel: n, guild: l, needSubscriptionToAccess: a, section: r, showCall: s, showActivityPanel: c } = this.props;
        if ((o()(null != t, 'Missing channel in Channel.renderSidebar'), __OVERLAY__ || a));
        else if (r === e2.ULH.PROFILE && t.isPrivate() && !s && !c) return (0, i.jsx)(ey.Z, { channel: t }, 'private-channel-profile-'.concat(t.id));
        else if (r === e2.ULH.MEMBERS)
            switch (t.type) {
                case e2.d4z.GROUP_DM:
                    return (0, i.jsx)(_.Z, { channel: t }, 'private-channel-recipients-'.concat(t.id));
                case e2.d4z.GUILD_DIRECTORY:
                case e2.d4z.GUILD_FORUM:
                case e2.d4z.GUILD_MEDIA:
                case e2.d4z.GUILD_ANNOUNCEMENT:
                case e2.d4z.GUILD_TEXT:
                    var d;
                    let u = !0 === e2.TPd.GUILD_THREADS_ONLY.has(t.type) ? t.id : null !== (d = t.guild_id) && void 0 !== d ? d : t.id;
                    return (0, i.jsx)(eJ.Z, { channel: t }, 'channel-members-'.concat(u));
                case e2.d4z.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, i.jsx)(eJ.Z, { channel: n }, 'channel-members-'.concat(n.id));
                    break;
                case e2.d4z.PUBLIC_THREAD:
                case e2.d4z.PRIVATE_THREAD:
                    if (!t.isArchivedThread() && null != l)
                        return (0, i.jsx)(
                            v.Z,
                            {
                                channel: t,
                                guild: l
                            },
                            'channel-members-'.concat(t.id)
                        );
            }
        else if (r === e2.ULH.SEARCH && null != e) return (0, i.jsx)(ex.Z, { searchId: e });
        return null;
    }
    openChannelModal() {
        let { channel: e, guildId: t, hasModalOpen: l, showWelcomeModal: a, isLurking: r, isUnavailable: s, showRealNameModal: o } = this.props;
        return null == e || null == t || s || l
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
                          onCloseCallback: () => G.Z.viewPrompt(e6.r.REAL_NAME_PROMPT, t),
                          modalKey: 'Guild Hub Real Name Modal'
                      }
                  ),
              a &&
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
                          onCloseCallback: () => (0, eP.y0)(t, r),
                          modalKey: 'Guild Welcome Screen Modal'
                      }
                  ),
              null);
    }
    renderThreadSidebar() {
        let e;
        let { channel: t, section: n, channelSidebarState: l, guildSidebarState: a, nsfwAgree: r, nsfwAllowed: s, width: o } = this.props;
        if (null == a && null == l) return null;
        if (n === e2.ULH.SIDEBAR_CHAT && null != l) {
            if ((null == t ? void 0 : t.isNSFW()) && (!s || !r)) return null;
            switch (l.type) {
                case ev.tI.CREATE_THREAD:
                    if (null == t ? void 0 : t.isForumLikeChannel()) return null;
                    e = (0, i.jsx)(eb.Z, {
                        parentChannelId: l.parentChannelId,
                        parentMessageId: l.parentMessageId,
                        location: l.location
                    });
                    break;
                case ev.tI.VIEW_THREAD:
                    let n = (null == t ? void 0 : t.isForumLikeChannel()) ? B.Z : eT.Z;
                    e = (0, i.jsx)(n, { channelId: l.channelId });
                    break;
                case ev.tI.VIEW_CHANNEL:
                case ev.tI.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != a && null == e) {
            if (a.type === ev.jL.GUILD_MEMBER_MOD_VIEW) {
                let { guildId: e, userId: t } = a.details;
                return (0, i.jsx)('div', {
                    style: { width: e2.$Y6 },
                    className: e8.guildSidebar,
                    children: (0, i.jsx)(F.Z, {
                        guildId: e,
                        userId: t,
                        onClose: () => e_.Z.closeGuildSidebar(e)
                    })
                });
            }
            return null;
        }
        if (null == e) return null;
        let c = (null == t ? void 0 : t.type) != null && e2.TPd.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            d = o - e2.PrS - c;
        return (0, i.jsx)(eX.Z, {
            sidebarType: (null == t ? void 0 : t.type) != null && e2.TPd.GUILD_THREADS_ONLY.has(t.type) ? eX.y.PostSidebar : eX.y.ThreadSidebar,
            maxWidth: d,
            onWidthChange: this.handleThreadSidebarResize,
            children: e
        });
    }
    render() {
        let { channel: e, guild: t, formattedChannelName: n, isUnavailable: l, layout: a, section: s, hasModalOpen: o, guildSidebarState: c, hasTextActivityInPanelMode: d, hasAccessToChannel: u } = this.props,
            { threadSidebarWidth: h, isThreadSidebarFloating: p } = this.state,
            m = this.shouldRenderCall();
        if (l) return (0, i.jsx)(eQ.Z, {});
        if (null == e || !u) return (0, i.jsx)(e$.Z, { channelId: this.props.channelId });
        let f = s === e2.ULH.SIDEBAR_CHAT,
            g = null != c && !f,
            C = !e.isForumLikeChannel() && !o,
            x = null == t ? void 0 : t.name;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(k.yY, {
                    location: x,
                    subsection: null != n ? n : void 0
                }),
                (0, i.jsxs)('div', {
                    className: r()(e8.chat, {
                        [e8.threadSidebarOpen]: f || g,
                        [e8.threadSidebarFloating]: f && p
                    }),
                    children: [
                        C
                            ? (0, i.jsx)(I.Z, {
                                  style: { right: f ? h : void 0 },
                                  className: e8.uploadArea,
                                  channel: e,
                                  draftType: eO.d.ChannelMessage
                              })
                            : null,
                        m || d ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, i.jsxs)('div', {
                            className: r()(e8.content, { [e8.noChat]: a === e2.AEg.NO_CHAT }),
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
            te(this, 'state', {
                topicExpanded: !1,
                threadSidebarWidth: void 0,
                isThreadSidebarFloating: !1
            }),
            te(this, 'handleTitleParentClick', () => {
                let { parentChannel: e } = this.props;
                if (null != e) (0, eg.Kh)(e.id);
            }),
            te(this, '_handleContextMenu', (e, t) => {
                switch (t.type) {
                    case e2.d4z.GUILD_VOICE:
                    case e2.d4z.GUILD_ANNOUNCEMENT:
                    case e2.d4z.GUILD_TEXT:
                    case e2.d4z.GUILD_FORUM:
                    case e2.d4z.GUILD_MEDIA:
                        this.openChannelContextMenu(e, t);
                        break;
                    case e2.d4z.ANNOUNCEMENT_THREAD:
                    case e2.d4z.PUBLIC_THREAD:
                    case e2.d4z.PRIVATE_THREAD:
                        this.openThreadContextMenu(e, t);
                        break;
                    case e2.d4z.DM:
                        this.openDMContextMenu(e, t);
                }
            }),
            te(this, 'handleContextMenu', (e) => {
                o()(null != this.props.channel, 'Missing channel in Channel.handleContextMenu'), this._handleContextMenu(e, this.props.channel);
            }),
            te(this, 'handleParentContextMenu', (e) => {
                o()(null != this.props.parentChannel, 'Missing parentChannel in Channel.handleParentContextMenu'), this._handleContextMenu(e, this.props.parentChannel);
            }),
            te(this, 'handleThreadSidebarResize', (e, t) => {
                this.setState({
                    threadSidebarWidth: e,
                    isThreadSidebarFloating: t
                });
            }),
            te(this, 'openUserProfile', () => {
                let { channel: e } = this.props;
                o()(null == e ? void 0 : e.isPrivate(), 'Missing private channel in Channel.openUserProfile'),
                    (0, eA.openUserProfileModal)({
                        userId: e.getRecipientId(),
                        guildId: e.guild_id,
                        channelId: e.id,
                        analyticsLocation: { section: e2.jXE.CHANNEL_HEADER }
                    });
            }),
            te(this, 'renderJoinRequestInterviewButtons', () => {
                let { channel: e } = this.props;
                return (null == e ? void 0 : e.hasFlag(e1.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL))
                    ? (0, i.jsx)(V.Z, {
                          channelId: e.id,
                          showTrailingDivider: !0
                      })
                    : null;
            }),
            te(this, 'renderClipsEnabledIndicatorToolbarItem', () => {
                let { inCall: e, voiceChannel: t } = this.props;
                return e ? (0, i.jsx)(R.Z, { channelId: null != t ? t.id : null }) : null;
            }),
            te(this, 'renderStreamQualityLiveIndicatorToolbarItem', () => {
                let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
                return (null == e ? void 0 : e.type) !== e4.fO.STREAM
                    ? null
                    : (0, i.jsx)(
                          H.Z,
                          {
                              size: e0.ZP.Sizes.LARGE,
                              participant: e,
                              showQuality: !0,
                              premiumIndicator: t
                          },
                          'live-indicator'
                      );
            }),
            te(this, 'renderHeaderToolbar', () => {
                let { channel: e, parentChannel: t, isLurking: n, showCall: l, showActivityPanel: a } = this.props;
                o()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let r = [];
                if (e.isSystemDM()) return r;
                switch (e.type) {
                    case e2.d4z.GUILD_STAGE_VOICE:
                    case e2.d4z.GUILD_VOICE:
                        break;
                    case e2.d4z.DM:
                        r.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            r.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            r.push((0, i.jsx)(ei.Z, { channel: e }, 'calls')),
                            r.push((0, i.jsx)(Q.Z, { channel: e }, 'pins')),
                            r.push(
                                (0, i.jsx)(
                                    el.Z,
                                    {
                                        channel: e,
                                        tooltip: e9.intl.string(e9.t.Xjlbvr)
                                    },
                                    'invite'
                                )
                            ),
                            r.push(
                                (0, i.jsx)(
                                    ea.Z,
                                    {
                                        channel: e,
                                        showCallOrActivityPanel: l || a
                                    },
                                    'profile'
                                )
                            ),
                            r.push((0, i.jsx)(er.Z, { channel: e }, 'safety_tools'));
                        break;
                    case e2.d4z.GROUP_DM:
                        if ((r.push(this.renderJoinRequestInterviewButtons()), r.push(this.renderClipsEnabledIndicatorToolbarItem()), r.push(this.renderStreamQualityLiveIndicatorToolbarItem()), r.push((0, i.jsx)(ei.Z, { channel: e }, 'calls')), r.push((0, i.jsx)(Q.Z, { channel: e }, 'pins')), !e.isManaged())) {
                            let t = e9.intl.string(e9.t.Xjlbvr);
                            r.push(
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
                        r.push((0, i.jsx)(X.Z, { channelId: e.id }, 'members'));
                        break;
                    case e2.d4z.ANNOUNCEMENT_THREAD:
                    case e2.d4z.PRIVATE_THREAD:
                    case e2.d4z.PUBLIC_THREAD:
                        null != t && !t.isForumLikeChannel() && r.push((0, i.jsx)(eZ.Z, { channel: t }, 'browser')), e.isVocalThread() && r.push((0, i.jsx)(es.Z, { channel: e }, 'thread-call')), r.push((0, i.jsx)(eN.Z, { channel: e }, 'notifications')), r.push((0, i.jsx)(Q.Z, { channel: e }, 'pins')), !e.isArchivedThread() && r.push((0, i.jsx)(X.Z, { channelId: e.id }, 'members')), null != t && (0, Z.Lp)(e) && r.push((0, i.jsx)($.Z, { channel: e }, 'summaries')), r.push((0, i.jsx)(eS.Z, { channel: e }, 'threads-overflow'));
                        break;
                    case e2.d4z.GUILD_ANNOUNCEMENT:
                    case e2.d4z.GUILD_TEXT:
                        r.push((0, i.jsx)(w.Z, { channel: e }, 'favorites')), r.push((0, i.jsx)(eZ.Z, { channel: e }, 'browser')), !n && r.push((0, i.jsx)(J.Z, { channel: e }, 'notifications')), r.push((0, i.jsx)(Q.Z, { channel: e }, 'pins')), r.push((0, i.jsx)(X.Z, { channelId: e.id }, 'members')), (0, Z.Lp)(e) && r.push((0, i.jsx)($.Z, { channel: e }, 'summaries'));
                        break;
                    case e2.d4z.GUILD_FORUM:
                    case e2.d4z.GUILD_MEDIA:
                        !n && (r.push((0, i.jsx)(ee.Z, { channel: e }, 'forum-onboarding')), r.push((0, i.jsx)(J.Z, { channel: e }, 'notifications'))), !__OVERLAY__ && r.push((0, i.jsx)(X.Z, { channelId: e.id }, 'members'));
                        break;
                    case e2.d4z.GUILD_DIRECTORY:
                        r.push((0, i.jsx)(X.Z, { channelId: e.id }, 'members'));
                }
                return r;
            }),
            te(this, 'renderMobileToolbar', () => {
                let { channel: e } = this.props;
                o()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let t = [];
                if (e.isSystemDM()) return t;
                switch (e.type) {
                    case e2.d4z.GUILD_STAGE_VOICE:
                    case e2.d4z.GUILD_VOICE:
                    case e2.d4z.DM:
                        break;
                    case e2.d4z.GROUP_DM:
                        t.push((0, i.jsx)(X.Z, { channelId: e.id }, 'members'));
                        break;
                    case e2.d4z.ANNOUNCEMENT_THREAD:
                    case e2.d4z.PRIVATE_THREAD:
                    case e2.d4z.PUBLIC_THREAD:
                        !e.isArchivedThread() && t.push((0, i.jsx)(X.Z, { channelId: e.id }, 'members'));
                        break;
                    case e2.d4z.GUILD_ANNOUNCEMENT:
                    case e2.d4z.GUILD_TEXT:
                    case e2.d4z.GUILD_FORUM:
                    case e2.d4z.GUILD_MEDIA:
                    case e2.d4z.GUILD_DIRECTORY:
                        t.push((0, i.jsx)(X.Z, { channelId: e.id }, 'members'));
                }
                return t;
            }),
            te(this, 'renderFollowButton', () => {
                let { showFollowButton: e, channel: t } = this.props;
                return e
                    ? (0, i.jsx)(g.Button, {
                          size: g.Button.Sizes.MIN,
                          color: g.Button.Colors.PRIMARY,
                          className: e8.followButton,
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
            te(this, 'renderHeaderBar', () => {
                let { channel: e, channelName: t, parentChannel: n, guild: l, guildId: a, showCall: s, showActivityPanel: c, hasVideo: d, headerGuildBreadcrumbPosition: u, isFavorites: h } = this.props;
                o()(null != e, 'Missing channel in Channel.renderHeaderBar'), o()(null != t, 'Should not be null if channel is not null.');
                let p = e.isDM() && !e.isSystemDM() ? this.openUserProfile : void 0,
                    m = (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null ? this.handleTitleParentClick : void 0;
                return (0, i.jsxs)('div', {
                    className: e8.subtitleContainer,
                    children: [
                        (0, i.jsx)(g.ThemeProvider, {
                            theme: d && s ? e2.BRd.DARK : void 0,
                            children: (o) =>
                                (0, i.jsxs)(
                                    et.Z,
                                    {
                                        guildId: a,
                                        channelId: e.id,
                                        channelType: e.type,
                                        hideSearch: e.isDirectory() || (h && !(0, eC.X)()),
                                        showDivider: h && !(0, eC.X)(),
                                        toolbar: this.renderHeaderToolbar(),
                                        mobileToolbar: this.renderMobileToolbar(),
                                        className: r()(e8.title, o),
                                        transparent: s || c,
                                        'aria-label': e9.intl.string(e9.t.BIYAqa),
                                        children: [
                                            'left' === u &&
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
                                                hasVideo: d,
                                                handleContextMenu: this.handleContextMenu,
                                                handleParentContextMenu: this.handleParentContextMenu,
                                                handleClick: p,
                                                handleParentClick: m,
                                                renderFollowButton: this.renderFollowButton
                                            }),
                                            'right' === u &&
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
                        (0, i.jsx)(em.Z, { channelId: e.id })
                    ]
                });
            });
    }
}
let ti = (0, b.Z)(tn);
t.Z = l.memo(function (e) {
    var t;
    let { providedChannel: n } = e,
        [a, r] = l.useState(null),
        s = (0, p.e7)([eV.Z], () => eV.Z.getChannelId()),
        o = (0, p.e7)([eV.Z], () => eV.Z.getVoiceChannelId()),
        c = (0, p.e7)([ek.Z], () => (null != n ? n : ek.Z.getChannel(s)), [s, n]),
        g = (0, p.e7)([ek.Z], () => ek.Z.getChannel(o), [o]),
        x = null == c ? void 0 : c.parent_id,
        _ = (0, p.e7)([ek.Z], () => ek.Z.getChannel(x), [x]),
        v = (0, p.e7)([eB.Z], () => eB.Z.getGuild(null == c ? void 0 : c.guild_id), [c]),
        { needSubscriptionToAccess: I } = (0, W.Z)(null !== (t = null == c ? void 0 : c.id) && void 0 !== t ? t : void 0),
        E = (0, p.e7)(
            [y.Z],
            () => {
                let e = null != s ? y.Z.getParticipants(s) : [],
                    t = null != s ? y.Z.getActivityParticipants(s) : [];
                return e.length - t.length > 0;
            },
            [s]
        ),
        b = (0, U.Z)(),
        T = (0, p.e7)([eV.Z], () => {
            var e;
            return (null !== (e = null == b ? void 0 : b.channelId) && void 0 !== e ? e : eV.Z.getVoiceChannelId()) === (null == c ? void 0 : c.id);
        }),
        P = (0, p.e7)([S.ZP], () => (null != c ? S.ZP.getSelfEmbeddedActivityForChannel(c.id) : null), [c]),
        M = (0, p.e7)([eG.Z], () => eG.Z.isConnected()),
        R = (0, N.Z)(M),
        L = M && !1 === R;
    l.useEffect(() => {
        T && L && null != P && null != c && C.Z.selectParticipant(c.id, P.applicationId);
    }, [L, c, T, P]);
    let k = (0, p.e7)([S.ZP], () => {
            var e;
            return S.ZP.getSelfEmbeddedActivityForChannel(null !== (e = null == c ? void 0 : c.id) && void 0 !== e ? e : e2.lds);
        }),
        O = (0, p.e7)([S.ZP], () => S.ZP.getActivityPanelMode()),
        w = null != k && !(0, j.Z)(null == c ? void 0 : c.id) && O === e3.Ez.PANEL,
        B = (0, p.e7)([eU.Z], () => eU.Z.can(e2.Plq.VIEW_CHANNEL, c)),
        H = (0, p.e7)([eK.Z], () => null != c && c.isVocalThread() && !d().isEmpty(eK.Z.getVoiceStatesForChannel(c.id)), [c]),
        G = null != c && c.isPrivate() && !w && E,
        F = (null == c ? void 0 : c.isGuildVocal()) || G || H,
        { welcomeModalChannelId: V } = (0, u.TH)(),
        z = (0, p.e7)([ed.Z], () => null != c && ed.Z.isLurking(c.guild_id), [c]),
        K = (0, p.e7)([eM.Z], () => eM.Z.hasSeen(null == c ? void 0 : c.guild_id, z), [c, z]),
        Y = (0, p.e7)([y.Z, S.ZP], () => (null != S.ZP.getConnectedActivityChannelId() && S.ZP.getActivityPanelMode() === e3.Ez.PANEL ? (S.ZP.getFocusedLayout() === e3.MI.NO_CHAT ? e2.AEg.NO_CHAT : e2.AEg.NORMAL) : null != s ? y.Z.getLayout(s) : e2.AEg.NORMAL), [s]),
        q = (0, p.e7)([y.Z], () => (null != c ? y.Z.getSelectedParticipant(c.id) : null)),
        X = (0, p.e7)([eW.default], () => eW.default.getCurrentUser()),
        J = (0, eo.Z)(v),
        Q = (0, eR.Z)(V, null == v ? void 0 : v.id),
        { section: $, channelSidebarState: ee } = (0, p.cj)(
            [eL.ZP],
            () => ({
                section: eL.ZP.getSection(s, null == c ? void 0 : c.isDM()),
                channelSidebarState: eL.ZP.getSidebarState(s)
            }),
            [s, c]
        ),
        et = null == v ? void 0 : v.id,
        en = (0, p.e7)([eL.ZP], () => eL.ZP.getGuildSidebarState(et), [et]),
        ei = (0, p.e7)([ez.Z], () => ez.Z.getGuildId()) === e2.I_8,
        el = (0, ep.So)(h.q.STREAM_HIGH_QUALITY),
        ea = (0, eh.o)(q, X),
        er = (0, eu.lL)('Channel', !0, X, ea),
        es = (0, eY.ZP)(c),
        em = (0, eY.ZP)(c, !0),
        eg = null != c && o === c.id,
        eC = null != c && c.isGuildStageVoice();
    (0, A.Z)({ onTransition: void 0 }),
        l.useEffect(() => {
            var e, t, n;
            let i = (0, ef.s1)();
            if ((null == i ? void 0 : null === (e = i.location) || void 0 === e ? void 0 : e.state) === e5.Df) {
                let { channelId: e } = null !== (n = (0, ec.Qj)(null == i ? void 0 : null === (t = i.location) || void 0 === t ? void 0 : t.pathname)) && void 0 !== n ? n : {};
                null != e && r(e);
            }
        }, []),
        l.useEffect(() => {
            null != a && null != c && eC && c.id === a && !eg && ((0, eI.Cq)(c), r(null));
        }, [a, eC]);
    let ex = (0, Z.ts)(c),
        e_ = null != c && c.isPrivate(),
        ev = (0, N.Z)(e_),
        eE = (0, N.Z)(null == c ? void 0 : c.id);
    l.useEffect(() => {
        let e = ev && !e_,
            t = ev && e_ && (null == c ? void 0 : c.id) !== eE;
        (e || t) && (0, D.EW)(m.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e7.L.AUTO });
    }, [null == c ? void 0 : c.id, eE, e_, ev]);
    let eb = (0, f.f9)();
    return (0, i.jsx)(ti, {
        guildId: null == c ? void 0 : c.guild_id,
        channelId: s,
        channel: c,
        channelName: es,
        formattedChannelName: em,
        parentChannel: _,
        voiceChannel: g,
        layout: Y,
        needSubscriptionToAccess: I,
        isLurking: z,
        hasModalOpen: eb,
        section: $,
        channelSidebarState: ee,
        guildSidebarState: en,
        guild: v,
        searchId: (0, p.e7)([eF.Z], () => eF.Z.getCurrentSearchId()),
        showCall: !I && F,
        showActivityPanel: w,
        nsfwAgree: (0, p.e7)([ew.Z], () => ew.Z.didAgree(null == c ? void 0 : c.guild_id)),
        isMobile: (0, p.e7)([eH.Z], () => (null == c ? void 0 : c.type) === e2.d4z.DM && eH.Z.isMobileOnline(c.getRecipientId()), [c]),
        isUnavailable: (0, p.e7)([eD.Z], () => (null == c ? void 0 : c.guild_id) != null && eD.Z.isUnavailable(c.guild_id), [c]),
        showRealNameModal: J,
        showWelcomeModal: !K && Q,
        showFollowButton: ((null == c ? void 0 : c.type) === e2.d4z.GUILD_ANNOUNCEMENT && (null == v ? void 0 : v.hasFeature(e2.oNc.NEWS))) || !1,
        ...(0, p.cj)([eK.Z], () => ({ hasVideo: null != c && eK.Z.hasVideo(c.id) }), [c]),
        inCall: eg,
        selectedParticipant: q,
        nsfwAllowed: (null == X ? void 0 : X.nsfwAllowed) === !0,
        showChannelSummaries: ex,
        isFavorites: ei,
        headerGuildBreadcrumbPosition: ei ? 'left' : 'right',
        premiumIndicatorEnabled: el || er.enabled,
        hasTextActivityInPanelMode: w,
        hasAccessToChannel: B
    });
});
