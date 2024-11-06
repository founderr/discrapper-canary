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
    a = n(120356),
    o = n.n(a),
    s = n(873546),
    c = n(442837),
    u = n(481060),
    d = n(239091),
    h = n(134616),
    p = n(714338),
    f = n(212819),
    m = n(14429),
    g = n(576855),
    C = n(313201),
    _ = n(592125),
    x = n(888369),
    v = n(430824),
    I = n(306680),
    b = n(944486),
    S = n(938475),
    Z = n(585483),
    N = n(63063),
    E = n(51596),
    y = n(823385),
    j = n(415795),
    T = n(670512),
    P = n(981631),
    A = n(388032),
    M = n(91475);
function w(e, t, n) {
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
    R = () =>
        (0, l.jsxs)('div', {
            className: M.emptyState,
            children: [
                (0, l.jsx)('div', {
                    className: M.emptyStateNote,
                    children: A.intl.string(A.t.bpbATE)
                }),
                (0, l.jsx)('div', {
                    className: M.emptyStateCTA,
                    children: (0, l.jsx)(u.Anchor, {
                        href: N.Z.getArticleURL(P.BhN.QUICK_SWITCHER_TUTORIAL),
                        children: A.intl.string(A.t['4iPfEB'])
                    })
                })
            ]
        });
class D extends (i = r.Component) {
    render() {
        let e = v.Z.getGuild(this.props.channel.guild_id);
        return (0, l.jsx)(j.$W, {
            ...this.props,
            children: (0, l.jsx)('div', {
                className: M.miscContainer,
                children: null != e ? e.name : null
            })
        });
    }
}
w(D, 'defaultProps', { unread: !1 });
let O = c.ZP.connectStores([I.ZP, _.Z], (e) => {
        let { channel: t } = e;
        return {
            unread: I.ZP.hasUnread(t.id),
            mentions: I.ZP.getMentionCount(t.id),
            category: _.Z.getChannel(t.parent_id)
        };
    })(D),
    k = c.ZP.connectStores([S.ZP], (e) => {
        let { channel: t } = e;
        if (null == t.guild_id) throw Error('ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...');
        return { voiceStates: S.ZP.getVoiceStates(t.guild_id)[t.id] };
    })(D),
    U = c.ZP.connectStores([x.default], (e) => {
        let { guild: t } = e;
        return { unread: x.default.hasUnread(t.id) };
    })(j.ic),
    G = c.ZP.connectStores([I.ZP], (e) => {
        let { channel: t } = e;
        return { mentions: I.ZP.getMentionCount(t.id) };
    })(j.PZ),
    B = c.ZP.connectStores([_.Z, I.ZP], (e) => {
        let { user: t } = e,
            n = _.Z.getDMFromUserId(t.id);
        return { mentions: null != n ? I.ZP.getMentionCount(n) : 0 };
    })(j.n5);
function V(e, t, n) {
    return (0, l.jsx)(
        u.Tooltip,
        {
            text: n,
            children: (e) =>
                (0, l.jsx)('span', {
                    ...e,
                    className: M.autocompleteQuerySymbol,
                    children: t
                })
        },
        e
    );
}
class H extends r.PureComponent {
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
        (0, E.Cp)();
    }
    search(e) {
        this.setState({ query: e }), (0, E.yC)(e);
    }
    renderInput() {
        let { selectedIndex: e, results: t } = this.props,
            { query: n } = this.state,
            i = t.length > 0 && '' !== n;
        return (0, l.jsx)(u.FocusRing, {
            children: (0, l.jsx)('input', {
                className: M.input,
                'aria-label': A.intl.string(A.t.ZvKwYW),
                ref: this.inputRef,
                type: 'text',
                role: 'combobox',
                'aria-controls': this._listId,
                'aria-expanded': i,
                'aria-activedescendant': i ? this.getRowId(e) : void 0,
                'aria-autocomplete': 'list',
                placeholder: A.intl.string(A.t.Vtvewc),
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
            ? (0, l.jsx)(R, {})
            : 0 === t.length
              ? null
              : (0, l.jsx)(u.ListAuto, {
                    innerId: this._listId,
                    innerRole: 'listbox',
                    'aria-label': A.intl.string(A.t.Wef5Dg),
                    ref: this.scrollerRef,
                    sectionHeight: 0,
                    rowHeight: 34,
                    paddingBottom: L,
                    sections: [t.length],
                    className: M.scroller,
                    renderRow: this.renderRow,
                    renderSection: this.renderSection
                });
    }
    focusNode(e) {
        Z.S.dispatch(P.CkL.QUICKSWITCHER_RESULT_FOCUS, { node: e });
    }
    getRowId(e) {
        return 'quick-switcher-'.concat(this._listId, '-item-').concat(e);
    }
    renderProtip() {
        return (0, l.jsx)(g.Z, {
            className: o()(M.protip, { [M.hasContent]: this.state.query.length > 0 }),
            type: g.Z.Types.INLINE,
            children: A.intl.format(A.t.wukqXV, {
                userSymbolHook: (e, t) => V(t, f.xQ.USER, A.intl.string(A.t.GQRCGh)),
                textChannelSymbolHook: (e, t) => V(t, f.xQ.TEXT_CHANNEL, A.intl.string(A.t.wrwhub)),
                voiceChannelSymbolHook: (e, t) => V(t, f.xQ.VOICE_CHANNEL, A.intl.string(A.t['jz+hJi'])),
                guildSymbolHook: (e, t) => V(t, f.xQ.GUILD, A.intl.string(A.t.WuwCWl)),
                helpdeskArticle: N.Z.getArticleURL(P.BhN.QUICK_SWITCHER_TUTORIAL)
            })
        });
    }
    renderTutorial() {
        let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
        return t ? null : (0, l.jsx)(T.Z, { hasQuery: e.length > 0 && n.length > 0 });
    }
    render() {
        return (0, l.jsx)(u.ModalRoot, {
            'aria-label': A.intl.string(A.t.ZvKwYW),
            size: u.ModalSize.DYNAMIC,
            transitionState: this.props.transitionState,
            className: o()(M.container, s.tq && M.mobileContainer),
            fullscreenOnMobile: !1,
            children: (0, l.jsxs)('div', {
                className: o()(M.quickswitcher, s.tq && M.mobileQuickswitcher),
                onMouseMove: this.handleMouseMove,
                children: [this.renderInput(), this.renderResults(), this.renderProtip(), this.renderTutorial()]
            })
        });
    }
    constructor(...e) {
        super(...e),
            w(this, 'scrollerRef', r.createRef()),
            w(this, 'inputRef', r.createRef()),
            w(this, '_listId', (0, C.hQ)()),
            w(this, 'state', {
                query: this.props.query,
                mouseFocusDisabled: !0
            }),
            w(this, 'handleInputChange', () => {
                let { current: e } = this.inputRef;
                null != e && this.search(e.value);
            }),
            w(this, 'handleMouseMove', () => {
                let { mouseFocusDisabled: e } = this.state;
                if (!1 !== e) this.setState({ mouseFocusDisabled: !1 });
            }),
            w(this, 'focusResult', (e) => {
                if (!this.state.mouseFocusDisabled) (0, E.tF)(this.props.results.indexOf(e));
            }),
            w(this, 'selectResult', (e) => {
                (0, E.Se)(e, this.props.queryMode === f.h8.TEXT_CHANNEL);
            }),
            w(this, 'handleContextMenu', (e) => {
                let t = this.props.results[this.props.selectedIndex];
                switch (t.type) {
                    case f.h8.GUILD:
                        return (0, d.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('33053'), n.e('15669'), n.e('7654'), n.e('29612'), n.e('44156'), n.e('44294'), n.e('85552'), n.e('58227'), n.e('28377'), n.e('65022'), n.e('33213'), n.e('18339')]).then(n.bind(n, 545135));
                            return (n) =>
                                (0, l.jsx)(e, {
                                    ...n,
                                    guild: t.record,
                                    onSelect: E.Cp,
                                    hideSettings: !0
                                });
                        });
                    case f.h8.TEXT_CHANNEL:
                    case f.h8.VOICE_CHANNEL:
                        let i = t.record,
                            r = v.Z.getGuild(i.getGuildId());
                        if (null == r) return;
                        switch (i.type) {
                            case P.d4z.GUILD_TEXT:
                            case P.d4z.GUILD_ANNOUNCEMENT:
                            case P.d4z.GUILD_FORUM:
                            case P.d4z.GUILD_MEDIA:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('54310')]).then(n.bind(n, 373651));
                                    return (t) =>
                                        (0, l.jsx)(e, {
                                            ...t,
                                            channel: i,
                                            guild: r,
                                            onSelect: E.Cp
                                        });
                                });
                            case P.d4z.GUILD_VOICE:
                            case P.d4z.GUILD_STAGE_VOICE:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('83331')]).then(n.bind(n, 213202));
                                    return (t) =>
                                        (0, l.jsx)(e, {
                                            ...t,
                                            channel: i,
                                            guild: r,
                                            onSelect: E.Cp
                                        });
                                });
                            case P.d4z.ANNOUNCEMENT_THREAD:
                            case P.d4z.PUBLIC_THREAD:
                            case P.d4z.PRIVATE_THREAD:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                                    return (t) =>
                                        (0, l.jsx)(e, {
                                            ...t,
                                            channel: i,
                                            onSelect: E.Cp
                                        });
                                });
                            case P.d4z.GUILD_STORE:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e('99905').then(n.bind(n, 649400));
                                    return (t) =>
                                        (0, l.jsx)(e, {
                                            ...t,
                                            channel: i,
                                            guild: r,
                                            onSelect: E.Cp
                                        });
                                });
                            case P.d4z.GUILD_DIRECTORY:
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
                    case f.h8.GROUP_DM:
                        return (0, d.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('25421')]).then(n.bind(n, 354741));
                            return (n) =>
                                (0, l.jsx)(e, {
                                    ...n,
                                    channel: t.record,
                                    selected: b.Z.getChannelId() === t.record.id,
                                    onSelect: E.Cp
                                });
                        });
                    case f.h8.USER:
                        return (0, d.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('5901')]).then(n.bind(n, 881351));
                            return (n) =>
                                (0, l.jsx)(e, {
                                    ...n,
                                    user: t.record,
                                    onSelect: E.Cp
                                });
                        });
                }
            }),
            w(this, 'handleKeyDown', (e) => {
                let { mouseFocusDisabled: t, query: n } = this.state,
                    { results: i } = this.props;
                !1 === t && this.setState({ mouseFocusDisabled: !0 });
                let l = e.key.toLowerCase(),
                    { selectedIndex: r } = this.props;
                switch (l) {
                    case 'escape':
                        e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search('') : (0, E.Cp)();
                        return;
                    case 'k':
                        (!0 === e.ctrlKey || !0 === e.metaKey) && (e.preventDefault(), e.stopPropagation(), (0, E.Cp)());
                        return;
                    case 'enter': {
                        if (-1 === r) return;
                        if ((e.preventDefault(), e.altKey)) return this.handleContextMenu(e);
                        let t = i[r];
                        null != t && this.selectResult(t);
                        return;
                    }
                    case 'arrowup':
                        r = (0, f.gJ)(f.a8.UP, r, i);
                        break;
                    case 'arrowdown':
                        r = (0, f.gJ)(f.a8.DOWN, r, i);
                        break;
                    case 'n':
                        if (!e.ctrlKey) return;
                        r = (0, f.gJ)(f.a8.DOWN, r, i);
                        break;
                    case 'p':
                        if (!e.ctrlKey) return;
                        r = (0, f.gJ)(f.a8.UP, r, i);
                        break;
                    default:
                        return;
                }
                e.preventDefault(), (0, E.tF)(r);
            }),
            w(this, 'renderRow', (e) => {
                let { row: t } = e,
                    n = this.props.results[t],
                    { selectedIndex: i } = this.props,
                    { showScores: r } = m.Z.getCurrentConfig({ location: '62f4be_1' }, { autoTrackExposure: !1 });
                switch (n.type) {
                    case f.h8.HEADER:
                        return (0, l.jsx)(j.h4, { children: n.record.text }, ''.concat(n.type, '-').concat(n.record.id));
                    case f.h8.TEXT_CHANNEL:
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
                    case f.h8.VOICE_CHANNEL:
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
                    case f.h8.GUILD:
                        return (0, l.jsx)(
                            U,
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
                    case f.h8.USER:
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
                    case f.h8.GROUP_DM:
                        return (0, l.jsx)(
                            G,
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
                    case f.h8.APPLICATION:
                        return (0, l.jsx)(
                            j.Mx,
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
                    case f.h8.LINK:
                        return (0, l.jsx)(
                            j.rU,
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
                    case f.h8.IN_APP_NAVIGATION:
                        return (0, l.jsx)(
                            j.s8,
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
    return (0, l.jsx)(H, {
        ...t,
        ...e
    });
}
