n.d(t, {
    Z: function () {
        return F;
    }
}),
    n(411104),
    n(47120);
var i,
    l = n(200651),
    r = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(873546),
    c = n(442837),
    u = n(481060),
    d = n(239091),
    h = n(134616),
    p = n(714338),
    m = n(212819),
    f = n(14429),
    g = n(576855),
    C = n(313201),
    v = n(592125),
    _ = n(888369),
    x = n(430824),
    I = n(306680),
    b = n(944486),
    E = n(938475),
    S = n(585483),
    Z = n(63063),
    N = n(51596),
    y = n(823385),
    T = n(415795),
    j = n(670512),
    A = n(981631),
    P = n(388032),
    R = n(449532);
function M(e, t, n) {
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
let L = 10,
    w = () =>
        (0, l.jsxs)('div', {
            className: R.emptyState,
            children: [
                (0, l.jsx)('div', {
                    className: R.emptyStateNote,
                    children: P.intl.string(P.t.bpbATE)
                }),
                (0, l.jsx)('div', {
                    className: R.emptyStateCTA,
                    children: (0, l.jsx)(u.Anchor, {
                        href: Z.Z.getArticleURL(A.BhN.QUICK_SWITCHER_TUTORIAL),
                        children: P.intl.string(P.t['4iPfEB'])
                    })
                })
            ]
        });
class D extends (i = r.Component) {
    render() {
        let e = x.Z.getGuild(this.props.channel.guild_id);
        return (0, l.jsx)(T.$W, {
            ...this.props,
            children: (0, l.jsx)('div', {
                className: R.miscContainer,
                children: null != e ? e.name : null
            })
        });
    }
}
M(D, 'defaultProps', { unread: !1 });
let O = c.ZP.connectStores([I.ZP, v.Z], (e) => {
        let { channel: t } = e;
        return {
            unread: I.ZP.hasUnread(t.id),
            mentions: I.ZP.getMentionCount(t.id),
            isMentionLowImportance: I.ZP.getIsMentionLowImportance(t.id),
            category: v.Z.getChannel(t.parent_id)
        };
    })(D),
    k = c.ZP.connectStores([E.ZP], (e) => {
        let { channel: t } = e;
        if (null == t.guild_id) throw Error('ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...');
        return { voiceStates: E.ZP.getVoiceStates(t.guild_id)[t.id] };
    })(D),
    G = c.ZP.connectStores([_.default], (e) => {
        let { guild: t } = e;
        return { unread: _.default.hasUnread(t.id) };
    })(T.ic),
    U = c.ZP.connectStores([I.ZP], (e) => {
        let { channel: t } = e;
        return { mentions: I.ZP.getMentionCount(t.id) };
    })(T.PZ),
    B = c.ZP.connectStores([v.Z, I.ZP], (e) => {
        let { user: t } = e,
            n = v.Z.getDMFromUserId(t.id);
        return { mentions: null != n ? I.ZP.getMentionCount(n) : 0 };
    })(T.n5);
function H(e, t, n) {
    return (0, l.jsx)(
        u.Tooltip,
        {
            text: n,
            children: (e) =>
                (0, l.jsx)('span', {
                    ...e,
                    className: R.autocompleteQuerySymbol,
                    children: t
                })
        },
        e
    );
}
class V extends r.PureComponent {
    componentDidMount() {
        p.Z.disable(), p.Z.enableTemp(h.u);
    }
    componentWillUnmount() {
        p.Z.disableTemp(), p.Z.enable();
    }
    componentDidUpdate(e, t) {
        let { mouseFocusDisabled: n, query: i } = this.state,
            { selectedIndex: l } = this.props,
            { current: r } = this.scrollerRef;
        if (null != r)
            i !== t.query
                ? r.scrollTo({ to: 0 })
                : n &&
                  l >= 0 &&
                  r.scrollToIndex({
                      section: 0,
                      row: l,
                      padding: 10
                  });
    }
    close() {
        (0, N.Cp)();
    }
    search(e) {
        this.setState({ query: e }), (0, N.yC)(e);
    }
    renderInput() {
        let { selectedIndex: e, results: t } = this.props,
            { query: n } = this.state,
            i = t.length > 0 && '' !== n;
        return (0, l.jsx)(u.FocusRing, {
            children: (0, l.jsx)('input', {
                className: R.input,
                'aria-label': P.intl.string(P.t.ZvKwYW),
                ref: this.inputRef,
                type: 'text',
                role: 'combobox',
                'aria-controls': this._listId,
                'aria-expanded': i,
                'aria-activedescendant': i ? this.getRowId(e) : void 0,
                'aria-autocomplete': 'list',
                placeholder: P.intl.string(P.t.Vtvewc),
                onChange: this.handleInputChange,
                onKeyDown: this.handleKeyDown,
                value: this.state.query,
                spellCheck: !1,
                autoFocus: !0
            })
        });
    }
    renderSection() {
        return null;
    }
    renderResults() {
        let { query: e } = this.state,
            { results: t } = this.props;
        return 0 === t.length && e.length > 0
            ? (0, l.jsx)(w, {})
            : 0 === t.length
              ? null
              : (0, l.jsx)(u.ListAuto, {
                    innerId: this._listId,
                    innerRole: 'listbox',
                    'aria-label': P.intl.string(P.t.Wef5Dg),
                    ref: this.scrollerRef,
                    sectionHeight: 0,
                    rowHeight: 34,
                    paddingBottom: L,
                    sections: [t.length],
                    className: R.scroller,
                    renderRow: this.renderRow,
                    renderSection: this.renderSection
                });
    }
    focusNode(e) {
        S.S.dispatch(A.CkL.QUICKSWITCHER_RESULT_FOCUS, { node: e });
    }
    getRowId(e) {
        return 'quick-switcher-'.concat(this._listId, '-item-').concat(e);
    }
    renderProtip() {
        return (0, l.jsx)(g.Z, {
            className: a()(R.protip, { [R.hasContent]: this.state.query.length > 0 }),
            type: g.Z.Types.INLINE,
            children: P.intl.format(P.t.wukqXV, {
                userSymbolHook: (e, t) => H(t, m.xQ.USER, P.intl.string(P.t.GQRCGh)),
                textChannelSymbolHook: (e, t) => H(t, m.xQ.TEXT_CHANNEL, P.intl.string(P.t.wrwhub)),
                voiceChannelSymbolHook: (e, t) => H(t, m.xQ.VOICE_CHANNEL, P.intl.string(P.t['jz+hJi'])),
                guildSymbolHook: (e, t) => H(t, m.xQ.GUILD, P.intl.string(P.t.WuwCWl)),
                helpdeskArticle: Z.Z.getArticleURL(A.BhN.QUICK_SWITCHER_TUTORIAL)
            })
        });
    }
    renderTutorial() {
        let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
        return t ? null : (0, l.jsx)(j.Z, { hasQuery: e.length > 0 && n.length > 0 });
    }
    render() {
        return (0, l.jsx)(u.ModalRoot, {
            'aria-label': P.intl.string(P.t.ZvKwYW),
            size: u.ModalSize.DYNAMIC,
            transitionState: this.props.transitionState,
            className: a()(R.container, s.tq && R.mobileContainer),
            fullscreenOnMobile: !1,
            children: (0, l.jsxs)('div', {
                className: a()(R.quickswitcher, s.tq && R.mobileQuickswitcher),
                onMouseMove: this.handleMouseMove,
                children: [this.renderInput(), this.renderResults(), this.renderProtip(), this.renderTutorial()]
            })
        });
    }
    constructor(...e) {
        super(...e),
            M(this, 'scrollerRef', r.createRef()),
            M(this, 'inputRef', r.createRef()),
            M(this, '_listId', (0, C.hQ)()),
            M(this, 'state', {
                query: this.props.query,
                mouseFocusDisabled: !0
            }),
            M(this, 'handleInputChange', () => {
                let { current: e } = this.inputRef;
                null != e && this.search(e.value);
            }),
            M(this, 'handleMouseMove', () => {
                let { mouseFocusDisabled: e } = this.state;
                if (!1 !== e) this.setState({ mouseFocusDisabled: !1 });
            }),
            M(this, 'focusResult', (e) => {
                if (!this.state.mouseFocusDisabled) (0, N.tF)(this.props.results.indexOf(e));
            }),
            M(this, 'selectResult', (e) => {
                (0, N.Se)(e, this.props.queryMode === m.h8.TEXT_CHANNEL);
            }),
            M(this, 'handleContextMenu', (e) => {
                let t = this.props.results[this.props.selectedIndex];
                switch (t.type) {
                    case m.h8.GUILD:
                        return (0, d.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('63288'), n.e('33053'), n.e('17298'), n.e('7654'), n.e('42309'), n.e('98479'), n.e('31113'), n.e('60696'), n.e('58227'), n.e('16114'), n.e('72514'), n.e('62278'), n.e('21881'), n.e('33213'), n.e('22179')]).then(n.bind(n, 545135));
                            return (n) =>
                                (0, l.jsx)(e, {
                                    ...n,
                                    guild: t.record,
                                    onSelect: N.Cp,
                                    hideSettings: !0
                                });
                        });
                    case m.h8.TEXT_CHANNEL:
                    case m.h8.VOICE_CHANNEL:
                        let i = t.record,
                            r = x.Z.getGuild(i.getGuildId());
                        if (null == r) return;
                        switch (i.type) {
                            case A.d4z.GUILD_TEXT:
                            case A.d4z.GUILD_ANNOUNCEMENT:
                            case A.d4z.GUILD_FORUM:
                            case A.d4z.GUILD_MEDIA:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('54310')]).then(n.bind(n, 373651));
                                    return (t) =>
                                        (0, l.jsx)(e, {
                                            ...t,
                                            channel: i,
                                            guild: r,
                                            onSelect: N.Cp
                                        });
                                });
                            case A.d4z.GUILD_VOICE:
                            case A.d4z.GUILD_STAGE_VOICE:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('83331')]).then(n.bind(n, 213202));
                                    return (t) =>
                                        (0, l.jsx)(e, {
                                            ...t,
                                            channel: i,
                                            guild: r,
                                            onSelect: N.Cp
                                        });
                                });
                            case A.d4z.ANNOUNCEMENT_THREAD:
                            case A.d4z.PUBLIC_THREAD:
                            case A.d4z.PRIVATE_THREAD:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                                    return (t) =>
                                        (0, l.jsx)(e, {
                                            ...t,
                                            channel: i,
                                            onSelect: N.Cp
                                        });
                                });
                            case A.d4z.GUILD_STORE:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e('99905').then(n.bind(n, 649400));
                                    return (t) =>
                                        (0, l.jsx)(e, {
                                            ...t,
                                            channel: i,
                                            guild: r,
                                            onSelect: N.Cp
                                        });
                                });
                            case A.d4z.GUILD_DIRECTORY:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e('70623').then(n.bind(n, 99334));
                                    return (t) =>
                                        (0, l.jsx)(e, {
                                            ...t,
                                            channel: i
                                        });
                                });
                        }
                        break;
                    case m.h8.GROUP_DM:
                        return (0, d.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('25421')]).then(n.bind(n, 354741));
                            return (n) =>
                                (0, l.jsx)(e, {
                                    ...n,
                                    channel: t.record,
                                    selected: b.Z.getChannelId() === t.record.id,
                                    onSelect: N.Cp
                                });
                        });
                    case m.h8.USER:
                        return (0, d.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('95052')]).then(n.bind(n, 881351));
                            return (n) =>
                                (0, l.jsx)(e, {
                                    ...n,
                                    user: t.record,
                                    onSelect: N.Cp
                                });
                        });
                }
            }),
            M(this, 'handleKeyDown', (e) => {
                let { mouseFocusDisabled: t, query: n } = this.state,
                    { results: i } = this.props;
                !1 === t && this.setState({ mouseFocusDisabled: !0 });
                let l = e.key.toLowerCase(),
                    { selectedIndex: r } = this.props;
                switch (l) {
                    case 'escape':
                        e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search('') : (0, N.Cp)();
                        return;
                    case 'k':
                        (!0 === e.ctrlKey || !0 === e.metaKey) && (e.preventDefault(), e.stopPropagation(), (0, N.Cp)());
                        return;
                    case 'enter': {
                        if (-1 === r) return;
                        if ((e.preventDefault(), e.altKey)) return this.handleContextMenu(e);
                        let t = i[r];
                        null != t && this.selectResult(t);
                        return;
                    }
                    case 'arrowup':
                        r = (0, m.gJ)(m.a8.UP, r, i);
                        break;
                    case 'arrowdown':
                        r = (0, m.gJ)(m.a8.DOWN, r, i);
                        break;
                    case 'n':
                        if (!e.ctrlKey) return;
                        r = (0, m.gJ)(m.a8.DOWN, r, i);
                        break;
                    case 'p':
                        if (!e.ctrlKey) return;
                        r = (0, m.gJ)(m.a8.UP, r, i);
                        break;
                    default:
                        return;
                }
                e.preventDefault(), (0, N.tF)(r);
            }),
            M(this, 'renderRow', (e) => {
                let { row: t } = e,
                    n = this.props.results[t],
                    { selectedIndex: i } = this.props,
                    { showScores: r } = f.Z.getCurrentConfig({ location: '62f4be_1' }, { autoTrackExposure: !1 });
                switch (n.type) {
                    case m.h8.HEADER:
                        return (0, l.jsx)(T.h4, { children: n.record.text }, ''.concat(n.type, '-').concat(n.record.id));
                    case m.h8.TEXT_CHANNEL:
                        return (0, l.jsx)(
                            O,
                            {
                                id: this.getRowId(t),
                                focused: i >= 0 && t === i,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                channel: n.record,
                                score: r ? n.score : void 0
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case m.h8.VOICE_CHANNEL:
                        return (0, l.jsx)(
                            k,
                            {
                                id: this.getRowId(t),
                                focused: i >= 0 && t === i,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                channel: n.record,
                                score: r ? n.score : void 0
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case m.h8.GUILD:
                        return (0, l.jsx)(
                            G,
                            {
                                id: this.getRowId(t),
                                focused: i >= 0 && t === i,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                guild: n.record,
                                score: r ? n.score : void 0
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case m.h8.USER:
                        return (0, l.jsx)(
                            B,
                            {
                                id: this.getRowId(t),
                                focused: i >= 0 && t === i,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                user: n.record,
                                comparator: n.comparator,
                                score: r ? n.score : void 0
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case m.h8.GROUP_DM:
                        return (0, l.jsx)(
                            U,
                            {
                                id: this.getRowId(t),
                                focused: i >= 0 && t === i,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                channel: n.record,
                                score: r ? n.score : void 0
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case m.h8.APPLICATION:
                        return (0, l.jsx)(
                            T.Mx,
                            {
                                id: this.getRowId(t),
                                focused: i >= 0 && t === i,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                application: n.record
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case m.h8.LINK:
                        return (0, l.jsx)(
                            T.rU,
                            {
                                focused: i >= 0 && t === i,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                link: n.record,
                                score: r ? n.score : void 0,
                                id: this.getRowId(t)
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case m.h8.IN_APP_NAVIGATION:
                        return (0, l.jsx)(
                            T.s8,
                            {
                                focused: i >= 0 && t === i,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                navigationRecord: n.record,
                                score: r ? n.score : void 0,
                                id: this.getRowId(t)
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    default:
                        return null;
                }
            });
    }
}
function F(e) {
    let t = (0, c.cj)([y.Z], () => y.Z.getProps());
    return (0, l.jsx)(V, {
        ...t,
        ...e
    });
}
