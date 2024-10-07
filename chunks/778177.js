n(47120);
var r = n(735250),
    i = n(470079),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(392711),
    u = n.n(c),
    d = n(913527),
    h = n.n(d),
    _ = n(608787),
    f = n(442837),
    E = n(481060),
    p = n(603263),
    m = n(542051),
    I = n(349033),
    C = n(999650),
    S = n(933557),
    g = n(471445),
    R = n(592125),
    T = n(271383),
    N = n(699516),
    x = n(250758),
    v = n(944486),
    L = n(914010),
    b = n(246946),
    O = n(594174),
    A = n(585483),
    P = n(63063),
    Z = n(405656),
    y = n(51144),
    M = n(854709),
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
let F = h()('2015-05-15').local(),
    k = (0, _.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 547800)),
        webpackId: 547800
    }),
    H = (e, t, n) => {
        var i, l, s;
        let { user: a, text: o } = n;
        if (null == a) return (0, r.jsx)('strong', { children: o });
        let c = O.default.getUser(a.id),
            u = R.Z.getChannel(e),
            d = (null == u ? void 0 : u.isPrivate()) ? N.Z.getNickname(a.id) : null,
            h = null !== (l = null !== (i = T.ZP.getNick(e, a.id)) && void 0 !== i ? i : d) && void 0 !== l ? l : y.ZP.getName(a),
            _ = null !== (s = null == c ? void 0 : c.getAvatarURL(e, 20)) && void 0 !== s ? s : a.getAvatarURL(null == u ? void 0 : u.guild_id, 20);
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
                    children: y.ZP.getUserTag(a, { identifiable: b.Z.enabled && b.Z.hidePersonalInformation ? 'never' : 'always' })
                },
                'display-username-'.concat(t, '-').concat(a.id)
            )
        ];
    },
    w = (e, t, n) => {
        let { channel: i, text: l } = n;
        if (null == i) return (0, r.jsx)('strong', { children: l });
        let s = R.Z.getChannel(i.parent_id),
            a = (0, g.KS)(i);
        return (0, r.jsxs)('div', {
            className: D.resultChannel,
            children: [
                null != a ? (0, r.jsx)(a, { className: D.searchResultChannelIcon }) : null,
                (0, r.jsx)('strong', { children: (0, S.F6)(i, O.default, N.Z) }),
                null != s
                    ? (0, r.jsx)('span', {
                          className: D.searchResultChannelCategory,
                          children: (0, S.F6)(s, O.default, N.Z)
                      })
                    : null
            ]
        });
    },
    G = (e) => {
        let t,
            n,
            { id: i, searchId: l, result: a, group: o, className: c, role: u, tabIndex: d, 'aria-selected': h, onSelect: _, onFocus: f, showFilter: p, renderResult: m } = e;
        if (p) {
            var I, S;
            t = (0, r.jsx)('span', {
                className: D.filter,
                children: null !== (S = null === (I = C.ZP[o]) || void 0 === I ? void 0 : I.key) && void 0 !== S ? S : 'addme:'
            });
        }
        return (
            (n = null != m ? m(l, o, a) : (0, r.jsx)('strong', { children: a.text })),
            (0, r.jsxs)(E.Clickable, {
                tag: 'li',
                className: s()(D.option, c),
                onClick: _,
                onFocus: f,
                id: i,
                role: u,
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
    W = {
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
                let { onSelect: t, onFocus: n, result: l, showFilter: a, searchId: o, renderResult: c, group: u, ...d } = e,
                    h = '',
                    _ = i
                        .useMemo(() => {
                            var e;
                            return (e = l.text), Z.kG(e).map((e, t, n) => (Z.Fr(e, n[t + 1]) ? e : new I.WU(e.getFullMatch(), I.Xe)));
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
                                href: P.Z.getArticleURL(j.BhN.USING_SEARCH),
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
                let { result: n, onSelect: i, onFocus: l, showFilter: a, searchId: o, ...c } = e,
                    u = Z.Ko(null !== (t = n.token) && void 0 !== t ? t : '');
                return (0, r.jsxs)(E.Clickable, {
                    className: s()(D.option, D.searchOption),
                    onClick: i,
                    onFocus: l,
                    ...c,
                    children: [
                        (0, r.jsx)('span', {
                            className: D.filter,
                            children: n.text
                        }),
                        (0, r.jsx)('span', {
                            className: s()({ [D.answer]: u }),
                            children: u
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
            searchFavorites: l === j.I_8 && (0, M.X)()
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            B(this, 'state', {
                dateHint: (0, C.Pr)(),
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
                    let e = Z.zV(a.autocompletes, a.mode.type)[t.selectedIndex - 1],
                        n = Z.zV(s, l.type).indexOf(e);
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
                if (!Z.Fz(n.mode.filter)) this.focusOption(t + e);
            }),
            B(this, 'focusOption', (e) => {
                let t = e,
                    { autocompletes: n } = this.props.resultsState,
                    r = this.shouldShowSearchQuery();
                t < -1 || (!r && t < 0) ? (t = Z.BU(n) - 1) : r && t >= Z.BU(n) ? (t = -1) : !r && t >= Z.BU(n) && (t = 0), this.setSelectedIndex(t);
            }),
            B(this, 'selectOption', (e) => {
                let t = e;
                if ((null == t && (t = this.state.selectedIndex), t < 0)) return !1;
                let { autocompletes: n, mode: r } = this.props.resultsState;
                if (Z.Fz(r.filter)) return;
                let i = Z.zV(n, r.type);
                if (t >= i.length) return !1;
                let l = i[t],
                    s = (function (e) {
                        let t = !0,
                            n = e.trim();
                        return (
                            u()(C.ZP).forOwn((e) => {
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
                A.S.dispatch(j.CkL.SET_SEARCH_QUERY, {
                    query: e,
                    anchor: l,
                    focus: s,
                    performSearch: n
                }),
                    t.setSelectedIndex(-1);
            }),
            B(this, 'shouldShowSearchQuery', () => {
                let { mode: e } = this.props.resultsState;
                return e.type !== j.Sap.FILTER && e.type !== j.Sap.EMPTY && !Z.Fz(e.filter);
            }),
            B(this, 'renderDatePicker', () =>
                (0, r.jsxs)('div', {
                    className: D.datePicker,
                    children: [
                        (0, r.jsx)(k, {
                            onSelect: this.handleDateChange,
                            maxDate: h()().local(),
                            minDate: F
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
                A.S.dispatch(j.CkL.PERFORM_SEARCH, null != e ? e : {});
            }),
            B(this, 'renderAutocompletes', () => {
                let { selectedIndex: e } = this.state,
                    { navId: t, searchId: n } = this.props,
                    { autocompletes: i, mode: l } = this.props.resultsState;
                if (Z.Fz(l.filter)) return this.renderDatePicker();
                let s = -1;
                return i.map((i) => {
                    var a, o, c;
                    let u, d;
                    if (null == i || 0 === i.results.length) return null;
                    let h = null !== (a = W[i.group]) && void 0 !== a ? a : {};
                    null != h.titleText &&
                        ((d = ''.concat(i.group, '-header')),
                        (u = (0, r.jsx)('div', {
                            id: d,
                            className: D.header,
                            children: h.titleText()
                        })));
                    let _ = null !== (o = h.groupTip) && void 0 !== o ? o : null,
                        f = null != _ ? (0, r.jsx)(_, { searchId: n }) : null,
                        E = null !== (c = h.component) && void 0 !== c ? c : G,
                        p = l.type === j.Sap.FILTER_ALL;
                    return (0, r.jsxs)(
                        'ul',
                        {
                            role: 'group',
                            'aria-labelledby': d,
                            className: D.resultsGroup,
                            children: [
                                u,
                                f,
                                i.results.map((l) => {
                                    var a, o;
                                    if (null == l || null == i) return null;
                                    let c = e === (s += 1);
                                    return (0, r.jsx)(
                                        E,
                                        {
                                            searchId: n,
                                            group: null !== (a = l.group) && void 0 !== a ? a : i.group,
                                            result: l,
                                            showFilter: p,
                                            onSelect: this.selectOption.bind(null, s),
                                            onFocus: this.focusOption.bind(null, s),
                                            ...(0, m.M)(t, s, c)
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
    let [n, i, l] = (0, f.Wu)([L.Z, v.Z, x.Z], () => {
        let e = L.Z.getGuildId(),
            t = v.Z.getChannelId(),
            n = null != e ? e : t;
        o()(null != n, 'SearchPopout.getStateFromStores - invalid searchId');
        let r = x.Z.getState(n),
            i = Z.BU(r.autocompletes);
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
