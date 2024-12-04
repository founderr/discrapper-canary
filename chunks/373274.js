n.d(t, {
    E: function () {
        return ed;
    },
    j: function () {
        return eu;
    }
}),
    n(47120),
    n(653041);
var i,
    l = n(200651),
    r = n(192379),
    a = n(392711),
    o = n.n(a),
    s = n(91192),
    c = n(924826),
    u = n(442837),
    d = n(481060),
    h = n(925549),
    p = n(260300),
    m = n(410575),
    f = n(607070),
    g = n(100527),
    C = n(906732),
    _ = n(313201),
    v = n(362658),
    x = n(583962),
    I = n(915885),
    b = n(258871),
    S = n(216306),
    E = n(398758),
    Z = n(220444),
    N = n(31022),
    y = n(10401),
    T = n(131704),
    A = n(592125),
    j = n(796974),
    P = n(984933),
    R = n(914010),
    M = n(540126),
    L = n(734307),
    w = n(854444),
    D = n(761091),
    O = n(301342),
    k = n(906817),
    G = n(429122),
    U = n(285573),
    B = n(995993),
    H = n(910595),
    V = n(466935),
    F = n(120818),
    W = n(61642),
    z = n(848442),
    Y = n(53425),
    K = n(424785),
    q = n(770202),
    Q = n(79556),
    X = n(428127),
    J = n(950969),
    $ = n(233657),
    ee = n(831700),
    et = n(443063),
    en = n(327530),
    ei = n(981631),
    el = n(176505),
    er = n(388032),
    ea = n(607686);
function eo(e, t, n) {
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
class es extends (i = r.PureComponent) {
    componentDidMount() {
        this.setState({ initialized: !0 });
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: i, selectedChannelId: l } = this.props,
            { initialized: r } = this.state,
            { scrollTop: a } = j.Z.getGuildDimensions(i);
        null != n ? (this.scrollToChannel(n), h.Z.clearChannelListScrollTo(i)) : i !== e.guildId ? null != a && this.scrollTo(a) : l !== e.selectedChannelId ? this.scrollToChannel(l) : !t.initialized && r && (null == a && null != l ? this.scrollToChannel(l, !1, en.yE, this.handleListScroll) : this.scrollTo(null != a ? a : 0, this.handleListScroll)), this.testShouldSkipTutorial();
    }
    getSectionRowsFromChannel(e) {
        return this.props.guildChannels.getSectionRowsFromChannel(e);
    }
    scrollTo(e, t) {
        var n;
        null === (n = this._list) ||
            void 0 === n ||
            n.scrollTo({
                to: e,
                animate: !1,
                callback: t
            });
    }
    scrollToChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : en.yE,
            i = arguments.length > 3 ? arguments[3] : void 0,
            l = this._list,
            r = this.getSectionRowsFromChannel(e)[0];
        if (null != r && null != l) {
            if (null != r.threadOffset) {
                let [e] = l.getScrollPosition(r.section, r.row),
                    a = r.threadOffset * en.Vf;
                l.scrollIntoViewRect({
                    start: e + a,
                    end: e + a + en.Vf,
                    padding: n,
                    animate: t,
                    callback: i
                });
            } else
                l.scrollToIndex({
                    section: r.section,
                    row: r.row,
                    animate: t,
                    padding: n,
                    callback: i
                });
        } else null == i || i();
    }
    isUnreadVisible() {
        let { guildChannels: e } = this.props,
            t = this._list;
        return (
            null != t &&
            t.getItems().some((n) => {
                if ('row' !== n.type) return !1;
                let { section: i, row: l } = n;
                if (i < M.wd || e.isPlaceholderRow(i, l)) return !1;
                let r = e.getChannelFromSectionRow(i, l);
                if (null == r) return !1;
                let { channel: a, category: o } = r;
                return !!(0, T.vc)(a.record.type) && (!o.isCollapsed || !o.isMuted) && !a.isMuted && !!t.isItemVisible(i, l, !0) && (0, Z.d)(a.record);
            })
        );
    }
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: i } = this.state,
            { guildId: r, guildChannels: a, guildChannelsVersion: o } = this.props;
        return (0, l.jsx)('div', {
            className: ea.positionedContainer,
            children: (0, l.jsx)(J.Z, {
                ref: this.unreadTopRef,
                textUnread: er.intl.string(er.t.FCRiT0),
                textMention: er.intl.string(er.t['8zH0LC']),
                hide: null == e && (i || null != t || null != n),
                className: ea.unreadTop,
                barClassName: ea.unreadBar,
                guildId: r,
                guildChannels: a,
                guildChannelsVersion: o,
                isVisible: this.isChannelVisible,
                onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
                onCalculate: this.handleUnreadCalculate
            })
        });
    }
    renderBottomUnread() {
        let { guildId: e, guildChannels: t, guildChannelsVersion: n } = this.props,
            { bottomMention: i, isUnreadVisible: r } = this.state;
        return (0, l.jsx)(J.Z, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: er.intl.string(er.t.FCRiT0),
            textMention: er.intl.string(er.t['8zH0LC']),
            hide: null == i && r,
            className: ea.unreadBottom,
            barClassName: ea.unreadBar,
            guildId: e,
            guildChannels: t,
            guildChannelsVersion: n,
            isVisible: this.isChannelVisible,
            onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
            onCalculate: this.handleUnreadCalculate
        });
    }
    renderList() {
        let { guildChannels: e, guild: t, guildBanner: n, hasGuildSubheader: i, isRefreshEnabled: r = !1 } = this.props,
            { ref: a, ...o } = this.context,
            s = 0;
        return (
            null != n ? (s = r ? en.hl : en.Q0) : t.hasCommunityInfoSubheader() && !i && (s = en.JD),
            (0, l.jsx)(d.FocusJumpSection, {
                children: (t) =>
                    (0, l.jsx)(
                        d.List,
                        {
                            ref: this.setListRef,
                            className: ea.scroller,
                            fade: !0,
                            customTheme: !0,
                            sectionHeight: this.getSectionHeight,
                            footerHeight: this.getSectionFooterHeight,
                            rowHeight: this.getRowHeight,
                            paddingTop: s,
                            paddingBottom: en.$k,
                            renderSection: this.renderSection,
                            renderFooter: this.renderSectionFooter,
                            renderRow: this.renderRow,
                            onScroll: this.handleListScroll,
                            onResize: this.handleResize,
                            onContentResize: this.handleResize,
                            sections: e.getSections(!0),
                            innerAriaLabel: er.intl.string(er.t.OGiMXF),
                            innerTag: 'ul',
                            getAnchorId: this.getAnchorId,
                            ...o,
                            ...t
                        },
                        'guild-channels'
                    )
            })
        );
    }
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, l.jsx)(r.Fragment, {
            children: (0, l.jsx)(_.FG, {
                children: (i) =>
                    (0, l.jsx)(d.HeadingLevel, {
                        component: (0, l.jsx)(d.HiddenVisually, {
                            children: (0, l.jsx)(d.H, {
                                id: i,
                                children: er.intl.string(er.t.OGiMXF)
                            })
                        }),
                        children: n
                            ? (0, l.jsxs)(r.Fragment, {
                                  children: [
                                      (0, l.jsx)('div', {
                                          className: ea.positionedContainer,
                                          children: (0, l.jsx)(X.Z, {
                                              position: 'top',
                                              guildChannels: e,
                                              guildChannelsVersion: t,
                                              jumpToVoiceChannels: this.jumpToVoiceChannels,
                                              jumpToChannel: this.jumpToChannel
                                          })
                                      }),
                                      this.renderList(),
                                      (0, l.jsx)(X.Z, {
                                          position: 'bottom',
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel
                                      })
                                  ]
                              })
                            : (0, l.jsxs)(r.Fragment, {
                                  children: [this.renderTopUnread(), this.renderList(), this.renderBottomUnread()]
                              })
                    })
            })
        });
    }
    constructor(...e) {
        super(...e),
            eo(this, '_list', null),
            eo(this, 'unreadTopRef', r.createRef()),
            eo(this, 'unreadBottomRef', r.createRef()),
            eo(this, 'state', {
                initialized: !1,
                isUnreadVisible: !0,
                topUnread: null,
                topMention: null,
                bottomUnread: null,
                bottomMention: null
            }),
            eo(this, 'setListRef', (e) => {
                var t;
                let { ref: n } = this.context;
                (n.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null), (this._list = e);
            }),
            eo(this, 'jumpToVoiceChannels', () => {
                var e, t, n, i;
                let { guildChannels: l, voiceStates: r } = this.props,
                    a = 0,
                    o = null !== (n = null === (e = l.getCategoryFromSection(l.voiceChannelsSectionNumber)) || void 0 === e ? void 0 : e.getShownChannelIds()) && void 0 !== n ? n : [];
                for (let e = 0; e < o.length - 1; e++)
                    if ((null !== (i = r[o[e]]) && void 0 !== i ? i : []).length > 0) {
                        a = e + 1;
                        break;
                    }
                null === (t = this._list) ||
                    void 0 === t ||
                    t.scrollToIndex({
                        section: l.voiceChannelsSectionNumber,
                        row: a,
                        animate: !0,
                        padding: en.yE
                    });
            }),
            eo(this, 'jumpToChannel', (e) => this.scrollToChannel(e, !0, en.Q1)),
            eo(this, 'jumpToChannelWithMentionsAndUnreads', (e, t) => {
                let [n, i] = t;
                return this.scrollToChannel(e, !0, null != n && null != i ? en.Q1 : en.yE);
            }),
            eo(this, 'isChannelVisible', (e, t) => {
                let n = this.getSectionRowsFromChannel(e),
                    i = this._list;
                if (null == i) return !1;
                for (let { row: e, section: l } of n) {
                    let [n, r] = i.getScrollPosition(l, e),
                        a = i.getScrollerState();
                    if (t && n + r < a.scrollTop + a.offsetHeight) return !0;
                    if (!t && n > a.scrollTop) return !0;
                }
                return !1;
            }),
            eo(this, 'getVisibleChannels', () => {
                let e = this._list;
                if (null == e) return [];
                let t = e.getItems(),
                    n = e.getScrollerState(),
                    i = [];
                for (var l = 0; l < t.length; l++) {
                    let r = t[l];
                    if ((0, d.isListItemRow)(r) && r.section >= this.props.guildChannels.favoritesSectionNumber) {
                        let t = this.props.guildChannels.getChannelFromSectionRow(r.section, r.row),
                            [l, a] = e.getScrollPosition(r.section, r.row);
                        null != t && l + a < n.scrollTop + n.offsetHeight && l > n.scrollTop && i.push(t.channel.id);
                    }
                }
                return i;
            }),
            eo(this, 'handleResize', () => {
                var e, t;
                let { showNewUnreadsBar: n } = this.props,
                    i = null !== (t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : null;
                if ((this.setState({ isUnreadVisible: this.isUnreadVisible() }), n && null != i)) {
                    let { scrollTop: e } = i;
                    this.updateChannelListScroll(e);
                }
            }),
            eo(this, 'handleListScroll', () => {
                var e, t;
                let { onScroll: n } = this.props,
                    i = null !== (t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : null;
                if (null != i) {
                    let { scrollTop: e } = i;
                    null != n && n(i), this.updateChannelListScroll(e);
                }
                null != this.unreadTopRef.current && this.unreadTopRef.current.calculateState(), null != this.unreadBottomRef.current && this.unreadBottomRef.current.calculateState();
            }),
            eo(this, 'handleUnreadCalculate', (e, t, n) => {
                let i = this.isUnreadVisible();
                n
                    ? this.setState({
                          isUnreadVisible: i,
                          bottomUnread: t,
                          bottomMention: e
                      })
                    : this.setState({
                          isUnreadVisible: i,
                          topUnread: t,
                          topMention: e
                      });
            }),
            eo(
                this,
                'updateChannelListScroll',
                o().throttle((e) => {
                    h.Z.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
                }, 100)
            ),
            eo(this, 'getSectionHeight', (e) => {
                let { guild: t, guildChannels: n } = this.props;
                return (0, k.EM)(e, t, n);
            }),
            eo(this, 'getSectionFooterHeight', (e) => {
                let { guildChannels: t, voiceStates: n, selectedVoiceChannelId: i, selectedChannelId: l, optInEnabled: r, guildChannelsVersion: a } = this.props;
                return (0, G.dt)({
                    sectionIndex: e,
                    guildChannels: t,
                    guildChannelsVersion: a,
                    voiceStates: n,
                    selectedChannelId: l,
                    selectedVoiceChannelId: i,
                    optInEnabled: r
                });
            }),
            eo(this, 'getRowHeight', (e, t) => {
                let { guildChannels: n, voiceStates: i, stageChannelSpeakerVoiceStates: l, selectedVoiceChannelId: r, selectedGuildId: a } = this.props,
                    o = en.Vf;
                if (e === M.wZ) {
                    let e = n.getGuildActionSection();
                    return e.isEmpty() ? 0 : e.getRow(t) === et.z.GUILD_PREMIUM_PROGRESS_BAR ? (e.getRows().length > 1 ? x.aR : x.PD) : o;
                }
                if (n.isPlaceholderRow(e, t)) return 0;
                let s = n.getChannelFromSectionRow(e, t);
                if (null == s) return 0;
                let { channel: c, category: u } = s;
                if (c.record.type === ei.d4z.GUILD_CATEGORY) return 40;
                let { isFavoritesPerk: d } = v.Z.getCurrentConfig({ location: 'channel_list' }, { autoTrackExposure: !0 });
                for (let e of (d && a === ei.I_8 && !c.record.isDM() && !c.record.isGroupDM() && !c.record.isGuildStageVoice() && (o = en.GQ), c.threadIds)) {
                    o += en.Vf;
                    let t = i[c.id];
                    null != t && t.length > 0 && (o += (r === e ? t.length * en.Hb : en.Hb) + en.cx);
                }
                if (c.record.isGuildVoice()) {
                    let e = i[c.id];
                    if (null != e && e.length > 0) {
                        let t = e.length * en.Hb;
                        (c.isCollapsed || u.isCollapsed) && (t = en.Hb), (o += t + en.cx);
                    }
                    c.id === this.props.rtcConnectedChannelId && (o += this.props.rtcDesyncedVoiceStatesCount * en.Hb);
                }
                if ((null != c.subtitle && (o += en.NY), c.record.isGuildStageVoice())) {
                    var h, p;
                    let e = null !== (h = i[c.id]) && void 0 !== h ? h : [],
                        t = null !== (p = l[c.id]) && void 0 !== p ? p : [];
                    if (null != e && e.length > 0) {
                        let e = t.length * en.Hb;
                        c.isCollapsed || u.isCollapsed ? (e = Math.ceil(e / en.VE)) : (e += en.Hb), (o += e + en.cx);
                    }
                }
                return o;
            }),
            eo(this, 'dismissRecents', () => {
                let { guild: e, guildChannels: t, selectedChannelId: n } = this.props,
                    i = t.getCategoryFromSection(t.recentsSectionNumber);
                if (null == i) return;
                let l = null,
                    r = i.getShownChannelAndThreadIds();
                null != n && r.includes(n) && (l = (0, S.KY)(t)), (0, S.Uo)(e.id, r, l);
            }),
            eo(this, 'renderSection', (e) => {
                let { section: t } = e,
                    { guildChannels: n, guildChannelsVersion: i, guild: r, selectedChannelId: a, disableManageChannels: o } = this.props;
                return (0, l.jsx)(
                    k.ZP,
                    {
                        sectionIndex: t,
                        guild: r,
                        guildChannels: n,
                        guildChannelsVersion: i,
                        selectedChannelId: a,
                        disableManageChannels: o
                    },
                    (0, k.WW)(t, n)
                );
            }),
            eo(this, 'renderRow', (e) => {
                let { section: t, row: n } = e,
                    { guild: i, selectedChannel: a, selectedChannelId: o, selectedVoiceChannel: s, selectedVoiceChannelId: c, guildChannels: u, voiceStates: d, disableManageChannels: h, stageChannelSpeakerVoiceStates: p, optInEnabled: m, withGuildIcon: f, isRefreshEnabled: g } = this.props;
                if (t === M.wZ) {
                    let e = u.getGuildActionSection(),
                        t = e.getRow(n);
                    if (null == t) return null;
                    switch (t) {
                        case et.z.GUILD_HUB_HEADER_OPTIONS:
                            return (0, l.jsx)(
                                b.Z,
                                {
                                    guild: i,
                                    channel: P.ZP.getDefaultChannel(i.id)
                                },
                                et.z.GUILD_HUB_HEADER_OPTIONS
                            );
                        case et.z.GUILD_PREMIUM_PROGRESS_BAR:
                            let r = e.getRows();
                            return (0, l.jsx)(
                                x.ZP,
                                {
                                    guild: i,
                                    withMargin: r.length > 1
                                },
                                et.z.GUILD_PREMIUM_PROGRESS_BAR
                            );
                        case et.z.GUILD_HOME:
                            return (0, l.jsx)(
                                H.Z,
                                {
                                    guild: i,
                                    selected: o === el.oC.GUILD_HOME
                                },
                                et.z.GUILD_HOME
                            );
                        case et.z.GUILD_SCHEDULED_EVENTS:
                            if (g) return null;
                            return (0, l.jsx)(
                                $.Z,
                                {
                                    guild: i,
                                    selected: o === et.z.GUILD_SCHEDULED_EVENTS
                                },
                                et.z.GUILD_SCHEDULED_EVENTS
                            );
                        case et.z.GUILD_ROLE_SUBSCRIPTIONS:
                            return (0, l.jsx)(
                                W.Z,
                                {
                                    guild: i,
                                    selected: o === el.oC.ROLE_SUBSCRIPTIONS
                                },
                                et.z.GUILD_ROLE_SUBSCRIPTIONS
                            );
                        case et.z.GUILD_SHOP:
                            return (0, l.jsx)(
                                z.Z,
                                {
                                    guild: i,
                                    selected: o === el.oC.GUILD_SHOP
                                },
                                et.z.GUILD_SHOP
                            );
                        case et.z.GUILD_MEMBER_APPLICATIONS:
                            return (0, l.jsx)(
                                V.Z,
                                {
                                    guild: i,
                                    selected: o === el.oC.MEMBER_APPLICATIONS
                                },
                                et.z.GUILD_MEMBER_APPLICATIONS
                            );
                        case et.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                            return (0, l.jsx)(F.T, { guild: i });
                        case et.z.CHANNELS_AND_ROLES:
                            if (g) return null;
                            return (0, l.jsx)(
                                B.m,
                                {
                                    guild: i,
                                    selected: o === el.oC.CHANNEL_BROWSER || o === el.oC.CUSTOMIZE_COMMUNITY
                                },
                                et.z.CHANNELS_AND_ROLES
                            );
                        case et.z.GUILD_DIRECTORY:
                            return (0, l.jsx)(
                                U.Z,
                                {
                                    guild: i,
                                    selectedChannelId: o,
                                    disableManageChannels: h
                                },
                                et.z.GUILD_DIRECTORY
                            );
                        case et.z.GUILD_MOD_DASH_MEMBER_SAFETY:
                            if (g) return null;
                            return (0, l.jsx)(
                                I.Z,
                                {
                                    guild: i,
                                    selected: o === el.oC.MEMBER_SAFETY
                                },
                                et.z.GUILD_MOD_DASH_MEMBER_SAFETY
                            );
                        default:
                            return null;
                    }
                }
                if (u.isPlaceholderRow(t, n)) return null;
                let C = u.getChannelFromSectionRow(t, n);
                if (null == C) return null;
                let { category: _, channel: v } = C,
                    S = _ instanceof M.VR,
                    E = v.record,
                    Z = ''.concat(t).concat(v.id);
                switch (E.type) {
                    case ei.d4z.GUILD_ANNOUNCEMENT:
                    case ei.d4z.GUILD_TEXT:
                    case ei.d4z.GUILD_FORUM:
                    case ei.d4z.GUILD_MEDIA:
                    case ei.d4z.DM:
                    case ei.d4z.GROUP_DM:
                        return (0, l.jsxs)(
                            r.Fragment,
                            {
                                children: [
                                    (0, l.jsx)(Q.Z, {
                                        channel: E,
                                        guild: i,
                                        position: v.position,
                                        selected: o === v.id,
                                        muted: v.isMuted,
                                        subtitle: v.subtitle,
                                        disableManageChannels: h,
                                        canBeNewChannel: m && t === u.recentsSectionNumber,
                                        isFavoriteCategory: S,
                                        withGuildIcon: f
                                    }),
                                    v.threadCount > 0
                                        ? (0, l.jsx)(Y.Z, {
                                              withGuildIcon: f,
                                              channel: E,
                                              sortedThreadIds: v.threadIds,
                                              selectedChannel: null != a && (a.id === v.id || a.parent_id === E.id) ? a : null,
                                              selectedVoiceChannelId: (null == s ? void 0 : s.parent_id) === E.id ? c : null
                                          })
                                        : null
                                ]
                            },
                            Z
                        );
                    case ei.d4z.GUILD_STAGE_VOICE:
                        var N, y;
                        return (0, l.jsx)(
                            K.Z,
                            {
                                channel: E,
                                guild: i,
                                position: v.position,
                                selected: o === v.id,
                                connected: c === v.id,
                                collapsed: v.isCollapsed || _.isCollapsed,
                                voiceStates: null !== (N = d[v.id]) && void 0 !== N ? N : [],
                                speakerVoiceStates: null !== (y = p[v.id]) && void 0 !== y ? y : [],
                                disableManageChannels: h,
                                isFavoriteCategory: S
                            },
                            Z
                        );
                    case ei.d4z.GUILD_VOICE:
                        return (0, l.jsx)(
                            ee.Z,
                            {
                                channel: E,
                                guild: i,
                                position: v.position,
                                selected: o === v.id,
                                connected: c === v.id,
                                collapsed: v.isCollapsed || _.isCollapsed,
                                voiceStates: d[v.id],
                                subtitle: v.subtitle,
                                disableManageChannels: h,
                                showTutorial: v.isFirstVoiceChannel,
                                isFavoriteCategory: S,
                                withGuildIcon: f
                            },
                            Z
                        );
                    case ei.d4z.GUILD_STORE:
                        return (0, l.jsx)(
                            q.Z,
                            {
                                channel: E,
                                guild: i,
                                position: v.position,
                                selected: o === v.id
                            },
                            Z
                        );
                    case ei.d4z.GUILD_CATEGORY:
                        if (t !== u.voiceChannelsSectionNumber) return null;
                        return (0, l.jsx)(O.kw, { channel: E }, 'readonly-'.concat(E.id));
                    case ei.d4z.PUBLIC_THREAD:
                    case ei.d4z.PRIVATE_THREAD:
                        return (0, l.jsx)(
                            Q.Z,
                            {
                                channel: E,
                                guild: i,
                                position: v.position,
                                selected: o === v.id,
                                muted: v.isMuted,
                                subtitle: v.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: !1,
                                isFavoriteCategory: !1,
                                forceTopLevelThread: !0
                            },
                            Z
                        );
                    default:
                        return null;
                }
            }),
            eo(this, 'renderSectionFooter', (e) => {
                let { section: t } = e,
                    { guildChannels: n, guildChannelsVersion: i, voiceStates: r, selectedChannelId: a, selectedVoiceChannelId: o, optInEnabled: s, guildId: c } = this.props;
                return (0, l.jsx)(
                    G.ZP,
                    {
                        guildId: c,
                        guildChannels: n,
                        guildChannelsVersion: i,
                        sectionIndex: t,
                        voiceStates: r,
                        selectedChannelId: a,
                        selectedVoiceChannelId: o,
                        optInEnabled: s
                    },
                    (0, G.eo)(t, n, s)
                );
            }),
            eo(this, 'getAnchorId', (e, t) => {
                var n, i, l;
                let { guildChannels: r } = this.props;
                if (e !== M.wZ) {
                    if (null == t) return e === M.p2 ? 'favorites-header' : e === r.recentsSectionNumber ? 'recents-header' : e === r.voiceChannelsSectionNumber ? 'voice-channels' : e === M.wd ? 'uncategorized-header' : null === (l = r.getNamedCategoryFromSection(e)) || void 0 === l ? void 0 : l.id;
                    if (!r.isPlaceholderRow(e, t)) return null === (i = r.getChannelFromSectionRow(e, t)) || void 0 === i ? void 0 : null === (n = i.channel) || void 0 === n ? void 0 : n.id;
                }
            }),
            eo(this, 'testShouldSkipTutorial', () => {
                if (!y.Z.shouldShow('voice-conversations')) return;
                let { guildChannels: e } = this.props,
                    t = e.getFirstVoiceChannel();
                if (null == t) {
                    p.Z.dismiss('voice-conversations');
                    return;
                }
                let n = this._list;
                if (null != n) for (let { section: e, row: i } of this.getSectionRowsFromChannel(t.id)) !n.isItemVisible(e, i) && p.Z.dismiss('voice-conversations');
            });
    }
}
eo(es, 'contextType', s.qB);
let ec = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: i } = e,
        a = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        { analyticsLocations: o } = (0, C.ZP)(g.Z.GUILD_CHANNEL_LIST),
        d = (0, u.e7)([A.Z], () => A.Z.getChannel(n)),
        h = (0, u.e7)([A.Z], () => A.Z.getChannel(i)),
        p = (0, u.e7)([R.Z], () => R.Z.getGuildId()),
        _ = (0, E.DM)(t),
        v = r.useRef(null),
        x = r.useCallback((e, t) => {
            let n = v.current;
            if (null != n) {
                if (ei.Xyh.test(t) || (0, el.AB)(t))
                    n.scrollToChannel(t, !1, 2 * en.yE, () => {
                        requestAnimationFrame(() => {
                            var t;
                            return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus();
                        });
                    });
                else {
                    var i;
                    null === (i = document.querySelector(e)) || void 0 === i || i.focus();
                }
            }
        }, []),
        I = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = v.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            []
        ),
        b = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = v.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
                }),
            []
        ),
        S = (0, c.ZP)({
            id: 'channels',
            defaultFocused: null != n ? n : void 0,
            isEnabled: a,
            setFocus: x,
            scrollToStart: I,
            scrollToEnd: b
        }),
        Z = S.setFocus;
    r.useEffect(() => {
        null != n && Z(n);
    }, [n, Z]);
    let y = (0, N.Z)(t);
    return (0, l.jsx)(C.Gt, {
        value: o,
        children: (0, l.jsx)(m.Z, {
            section: ei.jXE.GUILD_CHANNEL_LIST,
            children: (0, l.jsx)(s.bG, {
                navigator: S,
                children: (0, l.jsx)(es, {
                    ...e,
                    listNavigator: S,
                    ref: v,
                    selectedChannel: d,
                    selectedVoiceChannel: h,
                    stageChannelSpeakerVoiceStates: y,
                    selectedGuildId: p,
                    optInEnabled: _
                })
            })
        })
    });
};
function eu(e) {
    let t = (0, w.o)(),
        { isFavoritesPerk: n } = (0, v.z)('favorites-channel-list');
    return (0, l.jsx)(ec, {
        ...e,
        guildChannels: t,
        guildChannelsVersion: 0,
        withGuildIcon: n
    });
}
function ed(e) {
    let t = (0, D.Z)(e.guild),
        n = (0, u.cj)([L.Z], () => L.Z.getGuild(e.guildId, { guildActionRows: t }));
    return (0, l.jsx)(ec, {
        ...e,
        ...n
    });
}
