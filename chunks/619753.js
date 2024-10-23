n.d(t, {
    Z: function () {
        return D;
    }
}),
    n(724458),
    n(653041),
    n(47120);
var i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    r = n(837969),
    o = n(481060),
    c = n(668781),
    u = n(904245),
    d = n(603263),
    h = n(963374),
    m = n(607070),
    p = n(933557),
    _ = n(471445),
    f = n(95398),
    E = n(905405),
    g = n(255269),
    C = n(937889),
    I = n(703656),
    T = n(359110),
    x = n(695346),
    S = n(131704),
    v = n(592125),
    N = n(430824),
    A = n(496675),
    Z = n(699516),
    M = n(768119),
    b = n(944486),
    R = n(594174),
    L = n(101695),
    j = n(683101),
    P = n(981631),
    O = n(689938),
    y = n(652553);
function D(e) {
    var t;
    let { search: n, searchId: a, renderEmbeds: l, scrollTo: p, searchResults: _, blockCount: f, onChangePage: E } = e,
        { offset: g, totalResults: C, isSearching: T, showBlockedResults: x } = n,
        S = s.useCallback(
            (e) => {
                if (T) return;
                let t = e - 1;
                null == E || E(t), d.oO(a, t);
            },
            [a, T, E]
        ),
        N = s.useCallback(
            (e) => {
                if (e.blocked)
                    c.Z.show({
                        title: O.Z.Messages.UNBLOCK_TO_JUMP_TITLE,
                        body: O.Z.Messages.UNBLOCK_TO_JUMP_BODY.format({ name: e.author.username }),
                        confirmText: O.Z.Messages.OKAY
                    });
                else {
                    let t = v.Z.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    u.Z.trackJump(e.channel_id, e.id, 'Search Results', { search_id: M.Z.getAnalyticsId(a) }), (0, I.uL)(P.Z5c.CHANNEL(n, e.channel_id, e.id));
                }
            },
            [a]
        ),
        A = s.useMemo(() => {
            let e;
            if (null == _) return [];
            let t = 0;
            return _.reduce((n, i) => {
                let s = i.find((e) => e.isSearchHit);
                if (!x && null != s && Z.Z.isBlockedForMessage(s)) return n;
                let a = v.Z.getChannel(i[0].channel_id);
                return null == a
                    ? n
                    : ((null == e || e !== a.id) &&
                          n.push({
                              channel: a,
                              results: [],
                              startIndex: t
                          }),
                      (t += 1),
                      n[n.length - 1].results.push(i),
                      (e = null == a ? void 0 : a.id),
                      n);
            }, []);
        }, [_, x]),
        b = s.useRef([]),
        R = A.reduce((e, t) => e + 1 + t.results.length, 0),
        j = s.useCallback(
            (e, t) => {
                if (!m.Z.keyboardModeEnabled) return;
                let n = b.current,
                    i = null != t ? n[t] : void 0;
                if (null == i || null == i.hitRef.current) return;
                let s = i.hitRef.current.getClientRects()[0];
                p(s.top - 0.5 * s.height, !1, () => {
                    var t;
                    null === (t = document.getElementById(e)) || void 0 === t || t.focus();
                });
            },
            [p]
        ),
        D = s.useCallback((e) => {
            let t = b.current[e];
            null == t || t.jumpTo();
        }, []),
        U = (0, r.ZP)({
            navId: 'search-results',
            itemCount: R,
            focusedIndex: 0,
            setFocus: j,
            onSelect: D
        }),
        w = M.Z.getQuery(a),
        B = M.Z.getSearchType(a) === P.aib.FAVORITES,
        H = (0, h.nC)(null !== (t = null == w ? void 0 : w.content) && void 0 !== t ? t : ''),
        G = A.map((e) => {
            let { channel: t, results: n, startIndex: s } = e;
            return (0, i.jsx)(
                k,
                {
                    channel: t,
                    results: n,
                    highlighter: H,
                    startIndex: s,
                    resultRefs: b,
                    totalResults: C,
                    scrollTo: p,
                    searchId: a,
                    renderEmbeds: l,
                    offset: g,
                    jumpToMessage: N,
                    listNavigator: U,
                    favoriteSearch: B
                },
                ''.concat(t.id, '-').concat(s)
            );
        });
    G.push();
    let V = s.useRef(null);
    s.useLayoutEffect(() => {
        var e;
        null === (e = V.current) || void 0 === e || e.focus();
    }, [_]);
    let F = (0, o.useFocusJumpSection)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                ref: V,
                ...U.getContainerProps(),
                ...F,
                'aria-busy': T,
                children: G
            }),
            f > 0
                ? (0, i.jsxs)(o.Clickable, {
                      tag: 'div',
                      className: y.resultsBlocked,
                      onClick: () => d.QY(a, !x),
                      children: [
                          (0, i.jsx)('div', { className: y.resultsBlockedImage }),
                          (0, i.jsx)('div', {
                              className: y.__invalid_resultsBlockedText,
                              children: x ? O.Z.Messages.SEARCH_HIDE_BLOCKED_MESSAGES.format({ count: f }) : O.Z.Messages.SEARCH_NUM_RESULTS_BLOCKED_NOT_SHOWN.format({ count: f })
                          })
                      ]
                  })
                : null,
            !T &&
                !B &&
                (0, i.jsx)(L.Z, {
                    changePage: S,
                    offset: g,
                    totalResults: C,
                    pageLength: P.vpv
                })
        ]
    });
}
function U(e) {
    let { parentChannel: t, onSelectChannel: n } = e;
    if ((null == t ? void 0 : t.name) == null) return null;
    let s = null != t ? (0, _.KS)(t) : null;
    if (null == s) return null;
    let a = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s, {
                className: y.parentChannelNameIcon,
                size: 'xxs',
                color: 'currentColor'
            }),
            (0, i.jsx)(o.Text, {
                className: y.parentChannelNameText,
                variant: 'text-xs/medium',
                color: 'header-secondary',
                children: t.name
            })
        ]
    });
    return (0, S.Em)(t.type)
        ? (0, i.jsx)(o.Clickable, {
              className: l()(y.parentChannelName, y.parentChannelNameClickable),
              onClick: (e) => {
                  e.stopPropagation(), n(t.id);
              },
              children: a
          })
        : (0, i.jsx)('div', {
              className: y.parentChannelName,
              children: a
          });
}
function k(e) {
    var t, n, a;
    let { channel: l, results: r, highlighter: c, startIndex: u, resultRefs: d, totalResults: h, scrollTo: m, searchId: I, renderEmbeds: S, offset: M, jumpToMessage: L, listNavigator: O, favoriteSearch: D } = e,
        k = x.cC.useSetting(),
        w = (0, E.p)(),
        B = s.useCallback((e) => {
            if (e === b.Z.getChannelId()) return;
            let t = v.Z.getChannel(e);
            if (null != t && !!A.Z.can(P.Plq.VIEW_CHANNEL, t)) (0, T.Kh)(t.id);
        }, []),
        H = null != l ? (0, p.F6)(l, R.default, Z.Z, !1) : '???',
        G = D && null != l.guild_id ? (null === (t = N.Z.getGuild(l.guild_id)) || void 0 === t ? void 0 : t.name) : null,
        V = (null == l ? void 0 : l.parent_id) != null ? v.Z.getChannel(l.parent_id) : null,
        F = null !== (n = null == V ? void 0 : V.name) && void 0 !== n ? n : null,
        W = null !== (a = (0, _.KS)(l)) && void 0 !== a ? a : o.TextIcon,
        z = A.Z.can(P.Plq.MANAGE_MESSAGES, l),
        { content: Y } = (0, C.ZP)(
            {
                content: H,
                embeds: []
            },
            {
                postProcessor: c,
                shouldFilterKeywords: w
            }
        ),
        K = s.useRef(null),
        [q, X] = s.useState(!1);
    s.useEffect(() => {
        let e = K.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && X(e.offsetWidth < e.scrollWidth);
    }, []);
    let J = [H, F, G].filter((e) => null != e).join(', ');
    return (0, i.jsx)(f.a.Provider, {
        value: (0, g.Z)(k, z),
        children: (0, i.jsxs)('ul', {
            role: 'group',
            className: y.searchResultGroup,
            'aria-label': J,
            children: [
                (0, i.jsx)(o.Clickable, {
                    onClick: () => B(l.id),
                    children: (0, i.jsxs)('div', {
                        className: y.channelNameContainer,
                        children: [
                            (0, i.jsx)(W, {
                                className: y.channelNameIcon,
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, i.jsx)(o.Tooltip, {
                                text: H,
                                shouldShow: q,
                                children: (e) =>
                                    (0, i.jsxs)('span', {
                                        ...e,
                                        ref: K,
                                        className: y.channelNameText,
                                        children: [D && null !== G && ''.concat(G, ' : '), Y]
                                    })
                            }),
                            (0, i.jsx)(U, {
                                parentChannel: V,
                                onSelectChannel: B
                            })
                        ]
                    })
                }),
                r.map((e, t) => {
                    let n = u + t;
                    return (0, i.jsx)(
                        j.Z,
                        {
                            ref: (e) => (d.current[n] = e),
                            totalResults: h,
                            scrollTo: m,
                            searchId: I,
                            renderEmbeds: S,
                            searchOffset: M,
                            pageResultsLength: r.length,
                            result: e,
                            index: n,
                            onJump: L,
                            listItemProps: O.getItemProps({ index: n })
                        },
                        'search-result-'.concat(n)
                    );
                })
            ]
        })
    });
}
