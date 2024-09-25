n(47120);
var r = n(735250),
    i = n(470079),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    u = n(392711),
    c = n.n(u),
    d = n(913527),
    h = n.n(d),
    _ = n(608787),
    f = n(442837),
    E = n(481060),
    p = n(603263),
    m = n(542051),
    C = n(349033),
    S = n(999650),
    I = n(933557),
    g = n(471445),
    T = n(592125),
    R = n(271383),
    N = n(699516),
    v = n(250758),
    x = n(944486),
    A = n(914010),
    L = n(246946),
    b = n(594174),
    O = n(585483),
    Z = n(63063),
    P = n(405656),
    M = n(51144),
    y = n(854709),
    j = n(981631),
    U = n(689938),
    D = n(973050);
function B(e, t, n) {
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
let k = h()('2015-05-15').local(),
    F = (0, _.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 547800)),
        webpackId: 547800
    }),
    H = (e, t, n) => {
        var i, l, s;
        let { user: a, text: o } = n;
        if (null == a) return (0, r.jsx)('strong', { children: o });
        let u = b.default.getUser(a.id),
            c = T.Z.getChannel(e),
            d = (null == c ? void 0 : c.isPrivate()) ? N.Z.getNickname(a.id) : null,
            h = null !== (l = null !== (i = R.ZP.getNick(e, a.id)) && void 0 !== i ? i : d) && void 0 !== l ? l : M.ZP.getName(a),
            _ = null !== (s = null == u ? void 0 : u.getAvatarURL(e, 20)) && void 0 !== s ? s : a.getAvatarURL(null == c ? void 0 : c.guild_id, 20);
        return [
            (0, r.jsx)(
                'img',
                {
                    alt: '',
                    className: D.displayAvatar,
                    src: _
                },
                'avatar-'.concat(t, '-').concat(a.id)
            ),
            (0, r.jsx)(
                'span',
                {
                    className: D.displayedNick,
                    children: h
                },
                'display-nick-'.concat(t, '-').concat(a.id)
            ),
            (0, r.jsx)(
                'span',
                {
                    className: D.displayUsername,
                    children: M.ZP.getUserTag(a, { identifiable: L.Z.enabled && L.Z.hidePersonalInformation ? 'never' : 'always' })
                },
                'display-username-'.concat(t, '-').concat(a.id)
            )
        ];
    },
    w = (e, t, n) => {
        let { channel: i, text: l } = n;
        if (null == i) return (0, r.jsx)('strong', { children: l });
        let s = T.Z.getChannel(i.parent_id),
            a = (0, g.KS)(i);
        return (0, r.jsxs)('div', {
            className: D.resultChannel,
            children: [
                null != a ? (0, r.jsx)(a, { className: D.searchResultChannelIcon }) : null,
                (0, r.jsx)('strong', { children: (0, I.F6)(i, b.default, N.Z) }),
                null != s
                    ? (0, r.jsx)('span', {
                          className: D.searchResultChannelCategory,
                          children: (0, I.F6)(s, b.default, N.Z)
                      })
                    : null
            ]
        });
    },
    G = (e) => {
        let t,
            n,
            { id: i, searchId: l, result: a, group: o, className: u, role: c, tabIndex: d, 'aria-selected': h, onSelect: _, onFocus: f, showFilter: p, renderResult: m } = e;
        if (p) {
            var C, I;
            t = (0, r.jsx)('span', {
                className: D.filter,
                children: null !== (I = null === (C = S.ZP[o]) || void 0 === C ? void 0 : C.key) && void 0 !== I ? I : 'addme:'
            });
        }
        return (
            (n = null != m ? m(l, o, a) : (0, r.jsx)('strong', { children: a.text })),
            (0, r.jsxs)(E.Clickable, {
                tag: 'li',
                className: s()(D.option, u),
                onClick: _,
                onFocus: f,
                id: i,
                role: c,
                tabIndex: d,
                'aria-selected': h,
                children: [
                    t,
                    n,
                    (0, r.jsx)(E.PlusSmallIcon, {
                        size: 'sm',
                        color: 'currentColor',
                        className: D.plusIcon
                    })
                ]
            })
        );
    },
    z = (e) =>
        (0, r.jsx)(G, {
            ...e,
            className: D.user,
            renderResult: H
        }),
    Q = {
        [j.dCx.FILTER_FROM]: {
            titleText: () => U.Z.Messages.SEARCH_GROUP_HEADER_FROM,
            component: z
        },
        [j.dCx.FILTER_MENTIONS]: {
            titleText: () => U.Z.Messages.SEARCH_GROUP_HEADER_MENTIONS,
            component: z
        },
        [j.dCx.FILTER_HAS]: { titleText: () => U.Z.Messages.SEARCH_GROUP_HEADER_HAS },
        [j.dCx.FILTER_FILE_TYPE]: { titleText: () => U.Z.Messages.SEARCH_GROUP_HEADER_FILE_TYPE },
        [j.dCx.FILTER_IN]: {
            titleText: () => U.Z.Messages.SEARCH_GROUP_HEADER_CHANNELS,
            component: (e) =>
                (0, r.jsx)(G, {
                    ...e,
                    renderResult: w
                })
        },
        [j.rtL.DATES]: { titleText: () => U.Z.Messages.SEARCH_GROUP_HEADER_DATES },
        [j.rtL.HISTORY]: {
            titleText: () => U.Z.Messages.SEARCH_GROUP_HEADER_HISTORY,
            groupTip(e) {
                let { searchId: t } = e;
                return (0, r.jsx)(E.Tooltip, {
                    text: U.Z.Messages.SEARCH_CLEAR_HISTORY,
                    position: 'left',
                    children: (e) => {
                        let { onMouseEnter: n, onMouseLeave: i } = e;
                        return (0, r.jsx)(E.Clickable, {
                            onClick: () => (0, p.QQ)(t),
                            onMouseEnter: n,
                            onMouseLeave: i,
                            className: D.searchClearHistory,
                            title: U.Z.Messages.SEARCH_CLEAR_HISTORY,
                            'aria-label': U.Z.Messages.SEARCH_CLEAR_HISTORY,
                            children: (0, r.jsx)(E.TrashIcon, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        });
                    }
                });
            },
            component: function (e) {
                let { onSelect: t, onFocus: n, result: l, showFilter: a, searchId: o, renderResult: u, group: c, ...d } = e,
                    h = '',
                    _ = i
                        .useMemo(() => {
                            var e;
                            return (e = l.text), P.kG(e).map((e, t, n) => (P.Fr(e, n[t + 1]) ? e : new C.WU(e.getFullMatch(), C.Xe)));
                        }, [l.text])
                        .map((e) => {
                            let t = e.getFullMatch();
                            if ('' === t.trim()) return null;
                            let n = j.TNx.test(e.type),
                                i = j.KA4.test(e.type);
                            return (
                                (h += t),
                                (0, r.jsx)(
                                    'span',
                                    {
                                        className: s()({
                                            [D.filter]: n,
                                            [D.answer]: i,
                                            [D.nonText]: !n && !i
                                        }),
                                        children: t
                                    },
                                    e.type + t
                                )
                            );
                        });
                return (0, r.jsxs)(E.Clickable, {
                    className: s()(D.option, D.__invalid_history),
                    onClick: t,
                    onFocus: n,
                    ...d,
                    'aria-label': U.Z.Messages.SEARCH_FROM_SUGGESTIONS.format({ suggestion: h }),
                    children: [
                        _,
                        (0, r.jsx)(E.PlusSmallIcon, {
                            size: 'sm',
                            color: 'currentColor',
                            className: D.plusIcon
                        })
                    ]
                });
            }
        },
        [j.rtL.SEARCH_OPTIONS]: {
            titleText: () => U.Z.Messages.SEARCH_GROUP_HEADER_SEARCH_OPTIONS,
            groupTip: () =>
                (0, r.jsx)(E.Tooltip, {
                    text: U.Z.Messages.LEARN_MORE,
                    position: 'left',
                    children: (e) =>
                        (0, r.jsx)('div', {
                            className: D.searchLearnMore,
                            ...e,
                            children: (0, r.jsx)(E.Anchor, {
                                href: Z.Z.getArticleURL(j.BhN.USING_SEARCH),
                                title: U.Z.Messages.LEARN_MORE,
                                children: (0, r.jsx)(E.CircleQuestionIcon, {
                                    size: 'md',
                                    color: 'currentColor'
                                })
                            })
                        })
                }),
            component: function (e) {
                var t;
                let { result: n, onSelect: i, onFocus: l, showFilter: a, searchId: o, ...u } = e,
                    c = P.Ko(null !== (t = n.token) && void 0 !== t ? t : '');
                return (0, r.jsxs)(E.Clickable, {
                    className: s()(D.option, D.searchOption),
                    onClick: i,
                    onFocus: l,
                    ...u,
                    children: [
                        (0, r.jsx)('span', {
                            className: D.filter,
                            children: n.text
                        }),
                        (0, r.jsx)('span', {
                            className: s()({ [D.answer]: c }),
                            children: c
                        }),
                        (0, r.jsx)(E.PlusSmallIcon, {
                            size: 'sm',
                            color: 'currentColor',
                            className: D.plusIcon
                        })
                    ]
                });
            }
        }
    };
class V extends i.PureComponent {
    componentDidUpdate(e, t) {
        let { resultsState: n, totalResults: r } = this.props,
            { mode: i } = n,
            { resultsState: l } = e;
        null != i.filter && null == l.mode.filter && r > 0 ? this.setSelectedIndex(0) : i.type === j.Sap.FILTER_ALL && l.mode.type !== i.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t);
    }
    setSelectedIndex(e) {
        this.setState({ selectedIndex: e }, () => this.props.onSelectedIndexChanged(e));
    }
    render() {
        let { selectedIndex: e } = this.state,
            { navId: t, resultsState: n, totalResults: i, searchId: l } = this.props;
        return (0, r.jsx)(m.Z, {
            numResults: i,
            query: n.query,
            navId: t,
            hideQuery: !this.shouldShowSearchQuery(),
            focusedIndex: e,
            renderCustomResults: this.renderAutocompletes,
            renderInitialState: this.renderAutocompletes,
            onHighlightQuery: () => this.focusOption(-1),
            onSelectQuery: this.performSearch,
            onSelectSearchEverywhere: () => this.performSearch({ searchEverywhere: !0 }),
            renderNoResults: () => null,
            searchFavorites: l === j.I_8 && (0, y.X)()
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            B(this, 'state', {
                dateHint: (0, S.Pr)(),
                selectedIndex: -1
            }),
            B(this, 'handleDateChange', (e) => {
                this.setSearchQuery(e.format(j.b2L) + ' ', !0);
            }),
            B(this, 'keepCurrentOptionSelected', (e, t) => {
                let { selectedIndex: n } = this.state,
                    { resultsState: r, totalResults: i } = this.props,
                    { mode: l, autocompletes: s } = r,
                    { resultsState: a } = e;
                if (l.type !== a.mode.type) this.setSelectedIndex(-1);
                else if (t.selectedIndex >= 0 && (t.selectedIndex === n || a.autocompletes.length !== s.length)) {
                    let e = P.zV(a.autocompletes, a.mode.type)[t.selectedIndex - 1],
                        n = P.zV(s, l.type).indexOf(e);
                    -1 !== n ? this.setSelectedIndex(n) : t.selectedIndex >= i && this.setSelectedIndex(i - 1);
                }
            }),
            B(this, 'focusNextOption', () => {
                this.focusOtherOption(1);
            }),
            B(this, 'focusPreviousOption', () => {
                this.focusOtherOption(-1);
            }),
            B(this, 'focusOtherOption', (e) => {
                let { selectedIndex: t } = this.state,
                    { resultsState: n } = this.props;
                if (!P.Fz(n.mode.filter)) this.focusOption(t + e);
            }),
            B(this, 'focusOption', (e) => {
                let t = e,
                    { autocompletes: n } = this.props.resultsState,
                    r = this.shouldShowSearchQuery();
                t < -1 || (!r && t < 0) ? (t = P.BU(n) - 1) : r && t >= P.BU(n) ? (t = -1) : !r && t >= P.BU(n) && (t = 0), this.setSelectedIndex(t);
            }),
            B(this, 'selectOption', (e) => {
                let t = e;
                if ((null == t && (t = this.state.selectedIndex), t < 0)) return !1;
                let { autocompletes: n, mode: r } = this.props.resultsState;
                if (P.Fz(r.filter)) return;
                let i = P.zV(n, r.type);
                if (t >= i.length) return !1;
                let l = i[t],
                    s = (function (e) {
                        let t = !0,
                            n = e.trim();
                        return (
                            c()(S.ZP).forOwn((e) => {
                                '' !== e.key && null != e.key && n === e.key && (t = !1);
                            }),
                            t
                        );
                    })(l);
                return this.setSearchQuery(l, s), !0;
            }),
            B(this, 'setSearchQuery', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    { mode: r, cursorScope: i } = t.props.resultsState,
                    l = 0;
                null != r.token ? (l = r.token.start) : (null == i ? void 0 : i.currentToken) != null && (l = i.currentToken.end);
                let s = null != r.token ? r.token.end : l;
                O.S.dispatch(j.CkL.SET_SEARCH_QUERY, {
                    query: e,
                    anchor: l,
                    focus: s,
                    performSearch: n
                }),
                    t.setSelectedIndex(-1);
            }),
            B(this, 'shouldShowSearchQuery', () => {
                let { mode: e } = this.props.resultsState;
                return e.type !== j.Sap.FILTER && e.type !== j.Sap.EMPTY && !P.Fz(e.filter);
            }),
            B(this, 'renderDatePicker', () =>
                (0, r.jsxs)('div', {
                    className: D.datePicker,
                    children: [
                        (0, r.jsx)(F, {
                            onSelect: this.handleDateChange,
                            maxDate: h()().local(),
                            minDate: k
                        }),
                        (0, r.jsxs)('div', {
                            className: D.datePickerHint,
                            children: [
                                (0, r.jsxs)('span', {
                                    className: D.hint,
                                    children: [U.Z.Messages.SEARCH_DATE_PICKER_HINT, '\xA0']
                                }),
                                (0, r.jsx)(E.Clickable, {
                                    tag: 'span',
                                    className: D.hintValue,
                                    onClick: this.handleHintClick,
                                    children: this.state.dateHint
                                })
                            ]
                        })
                    ]
                })
            ),
            B(this, 'handleHintClick', () => {
                this.setSearchQuery(this.state.dateHint, !0);
            }),
            B(this, 'performSearch', (e) => {
                O.S.dispatch(j.CkL.PERFORM_SEARCH, null != e ? e : {});
            }),
            B(this, 'renderAutocompletes', () => {
                let { selectedIndex: e } = this.state,
                    { navId: t, searchId: n } = this.props,
                    { autocompletes: i, mode: l } = this.props.resultsState;
                if (P.Fz(l.filter)) return this.renderDatePicker();
                let s = -1;
                return i.map((i) => {
                    var a, o, u;
                    let c, d;
                    if (null == i || 0 === i.results.length) return null;
                    let h = null !== (a = Q[i.group]) && void 0 !== a ? a : {};
                    null != h.titleText &&
                        ((d = ''.concat(i.group, '-header')),
                        (c = (0, r.jsx)('div', {
                            id: d,
                            className: D.header,
                            children: h.titleText()
                        })));
                    let _ = null !== (o = h.groupTip) && void 0 !== o ? o : null,
                        f = null != _ ? (0, r.jsx)(_, { searchId: n }) : null,
                        E = null !== (u = h.component) && void 0 !== u ? u : G,
                        p = l.type === j.Sap.FILTER_ALL;
                    return (0, r.jsxs)(
                        'ul',
                        {
                            role: 'group',
                            'aria-labelledby': d,
                            className: D.resultsGroup,
                            children: [
                                c,
                                f,
                                i.results.map((l) => {
                                    var a, o;
                                    if (null == l || null == i) return null;
                                    let u = e === (s += 1);
                                    return (0, r.jsx)(
                                        E,
                                        {
                                            searchId: n,
                                            group: null !== (a = l.group) && void 0 !== a ? a : i.group,
                                            result: l,
                                            showFilter: p,
                                            onSelect: this.selectOption.bind(null, s),
                                            onFocus: this.focusOption.bind(null, s),
                                            ...(0, m.M)(t, s, u)
                                        },
                                        ''
                                            .concat(i.group, '-')
                                            .concat(l.text, '-')
                                            .concat(null !== (o = l.key) && void 0 !== o ? o : '')
                                    );
                                })
                            ]
                        },
                        i.group
                    );
                });
            });
    }
}
t.ZP = i.forwardRef((e, t) => {
    let [n, i, l] = (0, f.Wu)([A.Z, x.Z, v.Z], () => {
        let e = A.Z.getGuildId(),
            t = x.Z.getChannelId(),
            n = null != e ? e : t;
        o()(null != n, 'SearchPopout.getStateFromStores - invalid searchId');
        let r = v.Z.getState(n),
            i = P.BU(r.autocompletes);
        return [n, r, i];
    });
    return (0, r.jsx)(V, {
        ...e,
        searchId: n,
        resultsState: i,
        totalResults: l,
        ref: t
    });
});
