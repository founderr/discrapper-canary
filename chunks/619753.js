n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(724458),
    n(653041),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(837969),
    o = n(481060),
    c = n(668781),
    d = n(904245),
    u = n(603263),
    h = n(963374),
    p = n(607070),
    m = n(933557),
    f = n(471445),
    g = n(95398),
    C = n(905405),
    x = n(255269),
    _ = n(937889),
    v = n(703656),
    I = n(359110),
    E = n(695346),
    b = n(131704),
    Z = n(592125),
    N = n(430824),
    S = n(496675),
    T = n(699516),
    j = n(768119),
    A = n(944486),
    y = n(594174),
    P = n(101695),
    M = n(683101),
    L = n(981631),
    R = n(388032),
    k = n(652553);
function O(e) {
    var t;
    let { search: n, searchId: r, renderEmbeds: a, scrollTo: m, searchResults: f, blockCount: g, onChangePage: C } = e,
        { offset: x, totalResults: _, isSearching: I, showBlockedResults: E } = n,
        b = l.useCallback(
            (e) => {
                if (I) return;
                let t = e - 1;
                null == C || C(t), u.oO(r, t);
            },
            [r, I, C]
        ),
        N = l.useCallback(
            (e) => {
                if (e.blocked)
                    c.Z.show({
                        title: R.intl.string(R.t['j7eA/v']),
                        body: R.intl.formatToPlainString(R.t.dTNNgo, { name: e.author.username }),
                        confirmText: R.intl.string(R.t.BddRzc)
                    });
                else {
                    let t = Z.Z.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    d.Z.trackJump(e.channel_id, e.id, 'Search Results', { search_id: j.Z.getAnalyticsId(r) }), (0, v.uL)(L.Z5c.CHANNEL(n, e.channel_id, e.id));
                }
            },
            [r]
        ),
        S = l.useMemo(() => {
            let e;
            if (null == f) return [];
            let t = 0;
            return f.reduce((n, i) => {
                let l = i.find((e) => e.isSearchHit);
                if (!E && null != l && T.Z.isBlockedForMessage(l)) return n;
                let r = Z.Z.getChannel(i[0].channel_id);
                return null == r
                    ? n
                    : ((null == e || e !== r.id) &&
                          n.push({
                              channel: r,
                              results: [],
                              startIndex: t
                          }),
                      (t += 1),
                      n[n.length - 1].results.push(i),
                      (e = null == r ? void 0 : r.id),
                      n);
            }, []);
        }, [f, E]),
        A = l.useRef([]),
        y = S.reduce((e, t) => e + 1 + t.results.length, 0),
        M = l.useCallback(
            (e, t) => {
                if (!p.Z.keyboardModeEnabled) return;
                let n = A.current,
                    i = null != t ? n[t] : void 0;
                if (null == i || null == i.hitRef.current) return;
                let l = i.hitRef.current.getClientRects()[0];
                m(l.top - 0.5 * l.height, !1, () => {
                    var t;
                    null === (t = document.getElementById(e)) || void 0 === t || t.focus();
                });
            },
            [m]
        ),
        O = l.useCallback((e) => {
            let t = A.current[e];
            null == t || t.jumpTo();
        }, []),
        D = (0, s.ZP)({
            navId: 'search-results',
            itemCount: y,
            focusedIndex: 0,
            setFocus: M,
            onSelect: O
        }),
        B = j.Z.getQuery(r),
        U = j.Z.getSearchType(r) === L.aib.FAVORITES,
        H = (0, h.nC)(null !== (t = null == B ? void 0 : B.content) && void 0 !== t ? t : ''),
        G = S.map((e) => {
            let { channel: t, results: n, startIndex: l } = e;
            return (0, i.jsx)(
                w,
                {
                    channel: t,
                    results: n,
                    highlighter: H,
                    startIndex: l,
                    resultRefs: A,
                    totalResults: _,
                    scrollTo: m,
                    searchId: r,
                    renderEmbeds: a,
                    offset: x,
                    jumpToMessage: N,
                    listNavigator: D,
                    favoriteSearch: U
                },
                ''.concat(t.id, '-').concat(l)
            );
        });
    G.push();
    let F = l.useRef(null);
    l.useLayoutEffect(() => {
        var e;
        null === (e = F.current) || void 0 === e || e.focus();
    }, [f]);
    let V = (0, o.useFocusJumpSection)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                ref: F,
                ...D.getContainerProps(),
                ...V,
                'aria-busy': I,
                children: G
            }),
            g > 0
                ? (0, i.jsxs)(o.Clickable, {
                      tag: 'div',
                      className: k.resultsBlocked,
                      onClick: () => u.QY(r, !E),
                      children: [
                          (0, i.jsx)('div', { className: k.resultsBlockedImage }),
                          (0, i.jsx)('div', {
                              className: k.__invalid_resultsBlockedText,
                              children: E ? R.intl.formatToPlainString(R.t['n/1QFR'], { count: g }) : R.intl.formatToPlainString(R.t.HTE8JC, { count: g })
                          })
                      ]
                  })
                : null,
            !I &&
                !U &&
                (0, i.jsx)(P.Z, {
                    changePage: b,
                    offset: x,
                    totalResults: _,
                    pageLength: L.vpv
                })
        ]
    });
}
function D(e) {
    let { parentChannel: t, onSelectChannel: n } = e;
    if ((null == t ? void 0 : t.name) == null) return null;
    let l = null != t ? (0, f.KS)(t) : null;
    if (null == l) return null;
    let r = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l, {
                className: k.parentChannelNameIcon,
                size: 'xxs',
                color: 'currentColor'
            }),
            (0, i.jsx)(o.Text, {
                className: k.parentChannelNameText,
                variant: 'text-xs/medium',
                color: 'header-secondary',
                children: t.name
            })
        ]
    });
    return (0, b.Em)(t.type)
        ? (0, i.jsx)(o.Clickable, {
              className: a()(k.parentChannelName, k.parentChannelNameClickable),
              onClick: (e) => {
                  e.stopPropagation(), n(t.id);
              },
              children: r
          })
        : (0, i.jsx)('div', {
              className: k.parentChannelName,
              children: r
          });
}
function w(e) {
    var t, n, r;
    let { channel: a, results: s, highlighter: c, startIndex: d, resultRefs: u, totalResults: h, scrollTo: p, searchId: v, renderEmbeds: b, offset: j, jumpToMessage: P, listNavigator: R, favoriteSearch: O } = e,
        w = E.cC.useSetting(),
        B = (0, C.p)(),
        U = l.useCallback((e) => {
            if (e === A.Z.getChannelId()) return;
            let t = Z.Z.getChannel(e);
            if (null != t && !!S.Z.can(L.Plq.VIEW_CHANNEL, t)) (0, I.Kh)(t.id);
        }, []),
        H = null != a ? (0, m.F6)(a, y.default, T.Z, !1) : '???',
        G = O && null != a.guild_id ? (null === (t = N.Z.getGuild(a.guild_id)) || void 0 === t ? void 0 : t.name) : null,
        F = (null == a ? void 0 : a.parent_id) != null ? Z.Z.getChannel(a.parent_id) : null,
        V = null !== (n = null == F ? void 0 : F.name) && void 0 !== n ? n : null,
        z = null !== (r = (0, f.KS)(a)) && void 0 !== r ? r : o.TextIcon,
        W = S.Z.can(L.Plq.MANAGE_MESSAGES, a),
        { content: K } = (0, _.ZP)(
            {
                content: H,
                embeds: []
            },
            {
                postProcessor: c,
                shouldFilterKeywords: B
            }
        ),
        Y = l.useRef(null),
        [q, X] = l.useState(!1);
    l.useEffect(() => {
        let e = Y.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && X(e.offsetWidth < e.scrollWidth);
    }, []);
    let J = [H, V, G].filter((e) => null != e).join(', ');
    return (0, i.jsx)(g.a.Provider, {
        value: (0, x.Z)(w, W),
        children: (0, i.jsxs)('ul', {
            role: 'group',
            className: k.searchResultGroup,
            'aria-label': J,
            children: [
                (0, i.jsx)(o.Clickable, {
                    onClick: () => U(a.id),
                    children: (0, i.jsxs)('div', {
                        className: k.channelNameContainer,
                        children: [
                            (0, i.jsx)(z, {
                                className: k.channelNameIcon,
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, i.jsx)(o.Tooltip, {
                                text: H,
                                shouldShow: q,
                                children: (e) =>
                                    (0, i.jsxs)('span', {
                                        ...e,
                                        ref: Y,
                                        className: k.channelNameText,
                                        children: [O && null !== G && ''.concat(G, ' : '), K]
                                    })
                            }),
                            (0, i.jsx)(D, {
                                parentChannel: F,
                                onSelectChannel: U
                            })
                        ]
                    })
                }),
                s.map((e, t) => {
                    let n = d + t;
                    return (0, i.jsx)(
                        M.Z,
                        {
                            ref: (e) => (u.current[n] = e),
                            totalResults: h,
                            scrollTo: p,
                            searchId: v,
                            renderEmbeds: b,
                            searchOffset: j,
                            pageResultsLength: s.length,
                            result: e,
                            index: n,
                            onJump: P,
                            listItemProps: R.getItemProps({ index: n })
                        },
                        'search-result-'.concat(n)
                    );
                })
            ]
        })
    });
}
