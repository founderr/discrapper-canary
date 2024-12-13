n.d(t, {
    E: function () {
        return em;
    },
    j: function () {
        return ep;
    }
}),
    n(47120),
    n(653041);
var i,
    l = n(200651),
    r = n(192379),
    o = n(392711),
    a = n.n(o),
    s = n(91192),
    c = n(924826),
    d = n(442837),
    u = n(481060),
    h = n(925549),
    p = n(260300),
    m = n(410575),
    f = n(607070),
    g = n(100527),
    C = n(906732),
    v = n(313201),
    _ = n(540059),
    x = n(362658),
    I = n(583962),
    b = n(915885),
    E = n(258871),
    S = n(216306),
    Z = n(398758),
    N = n(220444),
    y = n(31022),
    T = n(10401),
    j = n(131704),
    A = n(592125),
    P = n(796974),
    R = n(984933),
    M = n(914010),
    L = n(540126),
    w = n(734307),
    D = n(854444),
    O = n(761091),
    k = n(301342),
    G = n(906817),
    U = n(429122),
    B = n(285573),
    H = n(995993),
    V = n(910595),
    F = n(466935),
    W = n(120818),
    z = n(61642),
    Y = n(848442),
    K = n(53425),
    q = n(424785),
    Q = n(770202),
    J = n(79556),
    X = n(428127),
    $ = n(950969),
    ee = n(233657),
    et = n(831700),
    en = n(443063),
    ei = n(327530),
    el = n(981631),
    er = n(176505),
    eo = n(388032),
    ea = n(607686);
function es(e, t, n) {
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
function ec(e, t) {
    return e ? ('cozy' === t ? 42 : 34) : ei.Vf;
}
function ed(e) {
    return e ? 32 : ei.Hb;
}
class eu extends (i = r.PureComponent) {
    componentDidMount() {
        this.setState({ initialized: !0 });
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: i, selectedChannelId: l } = this.props,
            { initialized: r } = this.state,
            { scrollTop: o } = P.Z.getGuildDimensions(i);
        null != n ? (this.scrollToChannel(n), h.Z.clearChannelListScrollTo(i)) : i !== e.guildId ? null != o && this.scrollTo(o) : l !== e.selectedChannelId ? this.scrollToChannel(l) : !t.initialized && r && (null == o && null != l ? this.scrollToChannel(l, !1, ei.yE, this.handleListScroll) : this.scrollTo(null != o ? o : 0, this.handleListScroll)), this.testShouldSkipTutorial();
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ei.yE,
            i = arguments.length > 3 ? arguments[3] : void 0,
            l = this._list,
            r = this.getSectionRowsFromChannel(e)[0];
        if (null != r && null != l) {
            if (null != r.threadOffset) {
                let [e] = l.getScrollPosition(r.section, r.row),
                    o = r.threadOffset * ec(this.props.isRefreshEnabled, this.props.density);
                l.scrollIntoViewRect({
                    start: e + o,
                    end: e + o + ec(this.props.isRefreshEnabled, this.props.density),
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
                if (i < L.wd || e.isPlaceholderRow(i, l)) return !1;
                let r = e.getChannelFromSectionRow(i, l);
                if (null == r) return !1;
                let { channel: o, category: a } = r;
                return !!(0, j.vc)(o.record.type) && (!a.isCollapsed || !a.isMuted) && !o.isMuted && !!t.isItemVisible(i, l, !0) && (0, N.d)(o.record);
            })
        );
    }
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: i } = this.state,
            { guildId: r, guildChannels: o, guildChannelsVersion: a } = this.props;
        return (0, l.jsx)('div', {
            className: ea.positionedContainer,
            children: (0, l.jsx)($.Z, {
                ref: this.unreadTopRef,
                textUnread: eo.intl.string(eo.t.FCRiT0),
                textMention: eo.intl.string(eo.t['8zH0LC']),
                hide: null == e && (i || null != t || null != n),
                className: ea.unreadTop,
                barClassName: ea.unreadBar,
                guildId: r,
                guildChannels: o,
                guildChannelsVersion: a,
                isVisible: this.isChannelVisible,
                onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
                onCalculate: this.handleUnreadCalculate
            })
        });
    }
    renderBottomUnread() {
        let { guildId: e, guildChannels: t, guildChannelsVersion: n } = this.props,
            { bottomMention: i, isUnreadVisible: r } = this.state;
        return (0, l.jsx)($.Z, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: eo.intl.string(eo.t.FCRiT0),
            textMention: eo.intl.string(eo.t['8zH0LC']),
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
        let { guildChannels: e, guild: t, guildBanner: n, hasGuildSubheader: i, selectedGuildId: r, isRefreshEnabled: o } = this.props,
            a = {};
        r === el.I_8 && (a['data-favorites'] = !0);
        let { ref: s, ...c } = this.context,
            d = 0;
        return (
            null != n ? (d = o ? ei.hl : ei.Q0) : t.hasCommunityInfoSubheader() && !i && (d = ei.JD),
            (0, l.jsx)(u.FocusJumpSection, {
                children: (t) =>
                    (0, l.jsx)(
                        u.List,
                        {
                            ref: this.setListRef,
                            className: ea.scroller,
                            fade: !0,
                            customTheme: !0,
                            sectionHeight: this.getSectionHeight,
                            footerHeight: this.getSectionFooterHeight,
                            rowHeight: this.getRowHeight,
                            paddingTop: d,
                            paddingBottom: ei.$k,
                            renderSection: this.renderSection,
                            renderFooter: this.renderSectionFooter,
                            renderRow: this.renderRow,
                            onScroll: this.handleListScroll,
                            onResize: this.handleResize,
                            onContentResize: this.handleResize,
                            sections: e.getSections(!0),
                            innerAriaLabel: eo.intl.string(eo.t.OGiMXF),
                            innerTag: 'ul',
                            getAnchorId: this.getAnchorId,
                            ...c,
                            ...t,
                            ...a
                        },
                        'guild-channels'
                    )
            })
        );
    }
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, l.jsx)(r.Fragment, {
            children: (0, l.jsx)(v.FG, {
                children: (i) =>
                    (0, l.jsx)(u.HeadingLevel, {
                        component: (0, l.jsx)(u.HiddenVisually, {
                            children: (0, l.jsx)(u.H, {
                                id: i,
                                children: eo.intl.string(eo.t.OGiMXF)
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
            es(this, '_list', null),
            es(this, 'unreadTopRef', r.createRef()),
            es(this, 'unreadBottomRef', r.createRef()),
            es(this, 'state', {
                initialized: !1,
                isUnreadVisible: !0,
                topUnread: null,
                topMention: null,
                bottomUnread: null,
                bottomMention: null
            }),
            es(this, 'setListRef', (e) => {
                var t;
                let { ref: n } = this.context;
                (n.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null), (this._list = e);
            }),
            es(this, 'jumpToVoiceChannels', () => {
                var e, t, n, i;
                let { guildChannels: l, voiceStates: r } = this.props,
                    o = 0,
                    a = null !== (n = null === (e = l.getCategoryFromSection(l.voiceChannelsSectionNumber)) || void 0 === e ? void 0 : e.getShownChannelIds()) && void 0 !== n ? n : [];
                for (let e = 0; e < a.length - 1; e++)
                    if ((null !== (i = r[a[e]]) && void 0 !== i ? i : []).length > 0) {
                        o = e + 1;
                        break;
                    }
                null === (t = this._list) ||
                    void 0 === t ||
                    t.scrollToIndex({
                        section: l.voiceChannelsSectionNumber,
                        row: o,
                        animate: !0,
                        padding: ei.yE
                    });
            }),
            es(this, 'jumpToChannel', (e) => this.scrollToChannel(e, !0, ei.Q1)),
            es(this, 'jumpToChannelWithMentionsAndUnreads', (e, t) => {
                let [n, i] = t;
                return this.scrollToChannel(e, !0, null != n && null != i ? ei.Q1 : ei.yE);
            }),
            es(this, 'isChannelVisible', (e, t) => {
                let n = this.getSectionRowsFromChannel(e),
                    i = this._list;
                if (null == i) return !1;
                for (let { row: e, section: l } of n) {
                    let [n, r] = i.getScrollPosition(l, e),
                        o = i.getScrollerState();
                    if (t && n + r < o.scrollTop + o.offsetHeight) return !0;
                    if (!t && n > o.scrollTop) return !0;
                }
                return !1;
            }),
            es(this, 'getVisibleChannels', () => {
                let e = this._list;
                if (null == e) return [];
                let t = e.getItems(),
                    n = e.getScrollerState(),
                    i = [];
                for (var l = 0; l < t.length; l++) {
                    let r = t[l];
                    if ((0, u.isListItemRow)(r) && r.section >= this.props.guildChannels.favoritesSectionNumber) {
                        let t = this.props.guildChannels.getChannelFromSectionRow(r.section, r.row),
                            [l, o] = e.getScrollPosition(r.section, r.row);
                        null != t && l + o < n.scrollTop + n.offsetHeight && l > n.scrollTop && i.push(t.channel.id);
                    }
                }
                return i;
            }),
            es(this, 'handleResize', () => {
                var e, t;
                let { showNewUnreadsBar: n } = this.props,
                    i = null !== (t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : null;
                if ((this.setState({ isUnreadVisible: this.isUnreadVisible() }), n && null != i)) {
                    let { scrollTop: e } = i;
                    this.updateChannelListScroll(e);
                }
            }),
            es(this, 'handleListScroll', () => {
                var e, t;
                let { onScroll: n } = this.props,
                    i = null !== (t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : null;
                if (null != i) {
                    let { scrollTop: e } = i;
                    null != n && n(i), this.updateChannelListScroll(e);
                }
                null != this.unreadTopRef.current && this.unreadTopRef.current.calculateState(), null != this.unreadBottomRef.current && this.unreadBottomRef.current.calculateState();
            }),
            es(this, 'handleUnreadCalculate', (e, t, n) => {
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
            es(
                this,
                'updateChannelListScroll',
                a().throttle((e) => {
                    h.Z.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
                }, 100)
            ),
            es(this, 'getSectionHeight', (e) => {
                let { guild: t, guildChannels: n, isRefreshEnabled: i } = this.props;
                return (0, G.EM)(e, t, n, !!i);
            }),
            es(this, 'getSectionFooterHeight', (e) => {
                let { guildChannels: t, voiceStates: n, selectedVoiceChannelId: i, selectedChannelId: l, optInEnabled: r, guildChannelsVersion: o } = this.props;
                return (0, U.dt)({
                    sectionIndex: e,
                    guildChannels: t,
                    guildChannelsVersion: o,
                    voiceStates: n,
                    selectedChannelId: l,
                    selectedVoiceChannelId: i,
                    optInEnabled: r,
                    visualRefreshEnabled: this.props.isRefreshEnabled,
                    density: this.props.density
                });
            }),
            es(this, 'getRowHeight', (e, t) => {
                let { guildChannels: n, voiceStates: i, stageChannelSpeakerVoiceStates: l, selectedVoiceChannelId: r, selectedGuildId: o } = this.props,
                    a = ec(this.props.isRefreshEnabled, this.props.density);
                if (e === L.wZ) {
                    let e = n.getGuildActionSection();
                    return e.isEmpty() ? 0 : e.getRow(t) === en.z.GUILD_PREMIUM_PROGRESS_BAR ? (e.getRows().length > 1 ? I.aR : I.PD) : a;
                }
                if (n.isPlaceholderRow(e, t)) return 0;
                let s = n.getChannelFromSectionRow(e, t);
                if (null == s) return 0;
                let { channel: c, category: d } = s;
                if (c.record.type === el.d4z.GUILD_CATEGORY) return 40;
                let { isFavoritesPerk: u } = x.Z.getCurrentConfig({ location: 'channel_list' }, { autoTrackExposure: !0 });
                if (u && o === el.I_8 && !c.record.isDM() && !c.record.isGroupDM() && !c.record.isGuildStageVoice()) a = this.props.isRefreshEnabled ? 46 : ei.GQ;
                for (let e of c.threadIds) {
                    a += ec(this.props.isRefreshEnabled, this.props.density);
                    let t = i[c.id];
                    null != t && t.length > 0 && (a += (r === e ? t.length * ed(this.props.isRefreshEnabled) : ed(this.props.isRefreshEnabled)) + ei.cx);
                }
                if (c.record.isGuildVoice()) {
                    let e = i[c.id];
                    if (null != e && e.length > 0) {
                        let t = e.length * ed(this.props.isRefreshEnabled);
                        (c.isCollapsed || d.isCollapsed) && (t = ed(this.props.isRefreshEnabled)), (a += t + ei.cx);
                    }
                    c.id === this.props.rtcConnectedChannelId && (a += this.props.rtcDesyncedVoiceStatesCount * ed(this.props.isRefreshEnabled));
                }
                if ((null != c.subtitle && (a += ei.NY), c.record.isGuildStageVoice())) {
                    var h, p;
                    let e = null !== (h = i[c.id]) && void 0 !== h ? h : [],
                        t = null !== (p = l[c.id]) && void 0 !== p ? p : [];
                    if (null != e && e.length > 0) {
                        let e = t.length * ed(this.props.isRefreshEnabled);
                        c.isCollapsed || d.isCollapsed ? (e = Math.ceil(e / ei.VE)) : (e += ed(this.props.isRefreshEnabled)), (a += e + ei.cx);
                    }
                }
                return a;
            }),
            es(this, 'dismissRecents', () => {
                let { guild: e, guildChannels: t, selectedChannelId: n } = this.props,
                    i = t.getCategoryFromSection(t.recentsSectionNumber);
                if (null == i) return;
                let l = null,
                    r = i.getShownChannelAndThreadIds();
                null != n && r.includes(n) && (l = (0, S.KY)(t)), (0, S.Uo)(e.id, r, l);
            }),
            es(this, 'renderSection', (e) => {
                let { section: t } = e,
                    { guildChannels: n, guildChannelsVersion: i, guild: r, selectedChannelId: o, disableManageChannels: a } = this.props;
                return (0, l.jsx)(
                    G.ZP,
                    {
                        sectionIndex: t,
                        guild: r,
                        guildChannels: n,
                        guildChannelsVersion: i,
                        selectedChannelId: o,
                        disableManageChannels: a
                    },
                    (0, G.WW)(t, n)
                );
            }),
            es(this, 'renderRow', (e) => {
                let { section: t, row: n } = e,
                    { guild: i, selectedChannel: o, selectedChannelId: a, selectedVoiceChannel: s, selectedVoiceChannelId: c, guildChannels: d, voiceStates: u, disableManageChannels: h, stageChannelSpeakerVoiceStates: p, optInEnabled: m, withGuildIcon: f } = this.props;
                if (t === L.wZ) {
                    let e = d.getGuildActionSection(),
                        t = e.getRow(n);
                    if (null == t) return null;
                    switch (t) {
                        case en.z.GUILD_HUB_HEADER_OPTIONS:
                            return (0, l.jsx)(
                                E.Z,
                                {
                                    guild: i,
                                    channel: R.ZP.getDefaultChannel(i.id)
                                },
                                en.z.GUILD_HUB_HEADER_OPTIONS
                            );
                        case en.z.GUILD_PREMIUM_PROGRESS_BAR:
                            let r = e.getRows();
                            return (0, l.jsx)(
                                I.ZP,
                                {
                                    guild: i,
                                    withMargin: r.length > 1
                                },
                                en.z.GUILD_PREMIUM_PROGRESS_BAR
                            );
                        case en.z.GUILD_HOME:
                            return (0, l.jsx)(
                                V.Z,
                                {
                                    guild: i,
                                    selected: a === er.oC.GUILD_HOME
                                },
                                en.z.GUILD_HOME
                            );
                        case en.z.GUILD_SCHEDULED_EVENTS:
                            return (0, l.jsx)(
                                ee.Z,
                                {
                                    guild: i,
                                    selected: a === en.z.GUILD_SCHEDULED_EVENTS
                                },
                                en.z.GUILD_SCHEDULED_EVENTS
                            );
                        case en.z.GUILD_ROLE_SUBSCRIPTIONS:
                            return (0, l.jsx)(
                                z.Z,
                                {
                                    guild: i,
                                    selected: a === er.oC.ROLE_SUBSCRIPTIONS
                                },
                                en.z.GUILD_ROLE_SUBSCRIPTIONS
                            );
                        case en.z.GUILD_SHOP:
                            return (0, l.jsx)(
                                Y.Z,
                                {
                                    guild: i,
                                    selected: a === er.oC.GUILD_SHOP
                                },
                                en.z.GUILD_SHOP
                            );
                        case en.z.GUILD_MEMBER_APPLICATIONS:
                            return (0, l.jsx)(
                                F.Z,
                                {
                                    guild: i,
                                    selected: a === er.oC.MEMBER_APPLICATIONS
                                },
                                en.z.GUILD_MEMBER_APPLICATIONS
                            );
                        case en.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                            return (0, l.jsx)(W.T, { guild: i });
                        case en.z.CHANNELS_AND_ROLES:
                            return (0, l.jsx)(
                                H.m,
                                {
                                    guild: i,
                                    selected: a === er.oC.CHANNEL_BROWSER || a === er.oC.CUSTOMIZE_COMMUNITY
                                },
                                en.z.CHANNELS_AND_ROLES
                            );
                        case en.z.GUILD_DIRECTORY:
                            return (0, l.jsx)(
                                B.Z,
                                {
                                    guild: i,
                                    selectedChannelId: a,
                                    disableManageChannels: h
                                },
                                en.z.GUILD_DIRECTORY
                            );
                        case en.z.GUILD_MOD_DASH_MEMBER_SAFETY:
                            return (0, l.jsx)(
                                b.Z,
                                {
                                    guild: i,
                                    selected: a === er.oC.MEMBER_SAFETY
                                },
                                en.z.GUILD_MOD_DASH_MEMBER_SAFETY
                            );
                        default:
                            return null;
                    }
                }
                if (d.isPlaceholderRow(t, n)) return null;
                let g = d.getChannelFromSectionRow(t, n);
                if (null == g) return null;
                let { category: C, channel: v } = g,
                    _ = C instanceof L.VR,
                    x = v.record,
                    S = ''.concat(t).concat(v.id);
                switch (x.type) {
                    case el.d4z.GUILD_ANNOUNCEMENT:
                    case el.d4z.GUILD_TEXT:
                    case el.d4z.GUILD_FORUM:
                    case el.d4z.GUILD_MEDIA:
                    case el.d4z.DM:
                    case el.d4z.GROUP_DM:
                        return (0, l.jsxs)(
                            r.Fragment,
                            {
                                children: [
                                    (0, l.jsx)(J.Z, {
                                        channel: x,
                                        guild: i,
                                        position: v.position,
                                        selected: a === v.id,
                                        muted: v.isMuted,
                                        subtitle: v.subtitle,
                                        disableManageChannels: h,
                                        canBeNewChannel: m && t === d.recentsSectionNumber,
                                        isFavoriteCategory: _,
                                        withGuildIcon: f
                                    }),
                                    v.threadCount > 0
                                        ? (0, l.jsx)(K.Z, {
                                              withGuildIcon: f,
                                              channel: x,
                                              sortedThreadIds: v.threadIds,
                                              selectedChannel: null != o && (o.id === v.id || o.parent_id === x.id) ? o : null,
                                              selectedVoiceChannelId: (null == s ? void 0 : s.parent_id) === x.id ? c : null
                                          })
                                        : null
                                ]
                            },
                            S
                        );
                    case el.d4z.GUILD_STAGE_VOICE:
                        var Z, N;
                        return (0, l.jsx)(
                            q.Z,
                            {
                                channel: x,
                                guild: i,
                                position: v.position,
                                selected: a === v.id,
                                connected: c === v.id,
                                collapsed: v.isCollapsed || C.isCollapsed,
                                voiceStates: null !== (Z = u[v.id]) && void 0 !== Z ? Z : [],
                                speakerVoiceStates: null !== (N = p[v.id]) && void 0 !== N ? N : [],
                                disableManageChannels: h,
                                isFavoriteCategory: _
                            },
                            S
                        );
                    case el.d4z.GUILD_VOICE:
                        return (0, l.jsx)(
                            et.Z,
                            {
                                channel: x,
                                guild: i,
                                position: v.position,
                                selected: a === v.id,
                                connected: c === v.id,
                                collapsed: v.isCollapsed || C.isCollapsed,
                                voiceStates: u[v.id],
                                subtitle: v.subtitle,
                                disableManageChannels: h,
                                showTutorial: v.isFirstVoiceChannel,
                                isFavoriteCategory: _,
                                withGuildIcon: f
                            },
                            S
                        );
                    case el.d4z.GUILD_STORE:
                        return (0, l.jsx)(
                            Q.Z,
                            {
                                channel: x,
                                guild: i,
                                position: v.position,
                                selected: a === v.id
                            },
                            S
                        );
                    case el.d4z.GUILD_CATEGORY:
                        if (t !== d.voiceChannelsSectionNumber) return null;
                        return (0, l.jsx)(k.kw, { channel: x }, 'readonly-'.concat(x.id));
                    case el.d4z.PUBLIC_THREAD:
                    case el.d4z.PRIVATE_THREAD:
                        return (0, l.jsx)(
                            J.Z,
                            {
                                channel: x,
                                guild: i,
                                position: v.position,
                                selected: a === v.id,
                                muted: v.isMuted,
                                subtitle: v.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: !1,
                                isFavoriteCategory: !1,
                                forceTopLevelThread: !0
                            },
                            S
                        );
                    default:
                        return null;
                }
            }),
            es(this, 'renderSectionFooter', (e) => {
                let { section: t } = e,
                    { guildChannels: n, guildChannelsVersion: i, voiceStates: r, selectedChannelId: o, selectedVoiceChannelId: a, optInEnabled: s, guildId: c } = this.props;
                return (0, l.jsx)(
                    U.ZP,
                    {
                        guildId: c,
                        guildChannels: n,
                        guildChannelsVersion: i,
                        sectionIndex: t,
                        voiceStates: r,
                        selectedChannelId: o,
                        selectedVoiceChannelId: a,
                        optInEnabled: s
                    },
                    (0, U.eo)(t, n, s)
                );
            }),
            es(this, 'getAnchorId', (e, t) => {
                var n, i, l;
                let { guildChannels: r } = this.props;
                if (e !== L.wZ) {
                    if (null == t) return e === L.p2 ? 'favorites-header' : e === r.recentsSectionNumber ? 'recents-header' : e === r.voiceChannelsSectionNumber ? 'voice-channels' : e === L.wd ? 'uncategorized-header' : null === (l = r.getNamedCategoryFromSection(e)) || void 0 === l ? void 0 : l.id;
                    if (!r.isPlaceholderRow(e, t)) return null === (i = r.getChannelFromSectionRow(e, t)) || void 0 === i ? void 0 : null === (n = i.channel) || void 0 === n ? void 0 : n.id;
                }
            }),
            es(this, 'testShouldSkipTutorial', () => {
                if (!T.Z.shouldShow('voice-conversations')) return;
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
es(eu, 'contextType', s.qB);
let eh = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: i } = e,
        o = (0, d.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        { analyticsLocations: a } = (0, C.ZP)(g.Z.GUILD_CHANNEL_LIST),
        u = (0, d.e7)([A.Z], () => A.Z.getChannel(n)),
        h = (0, d.e7)([A.Z], () => A.Z.getChannel(i)),
        p = (0, d.e7)([M.Z], () => M.Z.getGuildId()),
        v = (0, Z.DM)(t),
        x = r.useRef(null),
        I = r.useCallback((e, t) => {
            let n = x.current;
            if (null != n) {
                if (el.Xyh.test(t) || (0, er.AB)(t))
                    n.scrollToChannel(t, !1, 2 * ei.yE, () => {
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
        b = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = x.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            []
        ),
        E = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = x.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
                }),
            []
        ),
        S = (0, c.ZP)({
            id: 'channels',
            defaultFocused: null != n ? n : void 0,
            isEnabled: o,
            setFocus: I,
            scrollToStart: b,
            scrollToEnd: E
        }),
        N = S.setFocus;
    r.useEffect(() => {
        null != n && N(n);
    }, [n, N]);
    let T = (0, y.Z)(t),
        j = (0, _.Q3)('NavigableChannels');
    return (0, l.jsx)(C.Gt, {
        value: a,
        children: (0, l.jsx)(m.Z, {
            section: el.jXE.GUILD_CHANNEL_LIST,
            children: (0, l.jsx)(s.bG, {
                navigator: S,
                children: (0, l.jsx)(eu, {
                    ...e,
                    listNavigator: S,
                    ref: x,
                    selectedChannel: u,
                    selectedVoiceChannel: h,
                    stageChannelSpeakerVoiceStates: T,
                    selectedGuildId: p,
                    optInEnabled: v,
                    isRefreshEnabled: j
                })
            })
        })
    });
};
function ep(e) {
    let t = (0, D.o)(),
        { isFavoritesPerk: n } = (0, x.z)('favorites-channel-list'),
        { density: i } = (0, u.useThemeContext)();
    return (0, l.jsx)(eh, {
        ...e,
        guildChannels: t,
        guildChannelsVersion: 0,
        withGuildIcon: n,
        density: i
    });
}
function em(e) {
    let t = (0, O.Z)(e.guild),
        n = (0, d.cj)([w.Z], () => w.Z.getGuild(e.guildId, { guildActionRows: t })),
        i = (0, _.Q3)('GuildChannelList'),
        { density: r } = (0, u.useThemeContext)();
    return (0, l.jsx)(eh, {
        ...e,
        ...n,
        isRefreshEnabled: i,
        density: r
    });
}
