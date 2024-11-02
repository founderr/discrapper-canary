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
    u = n(904245),
    d = n(603263),
    h = n(963374),
    m = n(607070),
    p = n(933557),
    f = n(471445),
    g = n(95398),
    C = n(905405),
    x = n(255269),
    v = n(937889),
    _ = n(703656),
    I = n(359110),
    E = n(695346),
    b = n(131704),
    S = n(592125),
    Z = n(430824),
    T = n(496675),
    N = n(699516),
    j = n(768119),
    A = n(944486),
    y = n(594174),
    P = n(101695),
    M = n(683101),
    R = n(981631),
    L = n(388032),
    k = n(652553);
function O(e) {
    var t;
    let { search: n, searchId: r, renderEmbeds: a, scrollTo: p, searchResults: f, blockCount: g, onChangePage: C } = e,
        { offset: x, totalResults: v, isSearching: I, showBlockedResults: E } = n,
        b = l.useCallback(
            (e) => {
                if (I) return;
                let t = e - 1;
                null == C || C(t), d.oO(r, t);
            },
            [r, I, C]
        ),
        Z = l.useCallback(
            (e) => {
                if (e.blocked)
                    c.Z.show({
                        title: L.intl.string(L.t['j7eA/v']),
                        body: L.intl.formatToPlainString(L.t.dTNNgo, { name: e.author.username }),
                        confirmText: L.intl.string(L.t.BddRzc)
                    });
                else {
                    let t = S.Z.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    u.Z.trackJump(e.channel_id, e.id, 'Search Results', { search_id: j.Z.getAnalyticsId(r) }), (0, _.uL)(R.Z5c.CHANNEL(n, e.channel_id, e.id));
                }
            },
            [r]
        ),
        T = l.useMemo(() => {
            let e;
            if (null == f) return [];
            let t = 0;
            return f.reduce((n, i) => {
                let l = i.find((e) => e.isSearchHit);
                if (!E && null != l && N.Z.isBlockedForMessage(l)) return n;
                let r = S.Z.getChannel(i[0].channel_id);
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
        y = T.reduce((e, t) => e + 1 + t.results.length, 0),
        M = l.useCallback(
            (e, t) => {
                if (!m.Z.keyboardModeEnabled) return;
                let n = A.current,
                    i = null != t ? n[t] : void 0;
                if (null == i || null == i.hitRef.current) return;
                let l = i.hitRef.current.getClientRects()[0];
                p(l.top - 0.5 * l.height, !1, () => {
                    var t;
                    null === (t = document.getElementById(e)) || void 0 === t || t.focus();
                });
            },
            [p]
        ),
        O = l.useCallback((e) => {
            let t = A.current[e];
            null == t || t.jumpTo();
        }, []),
        w = (0, s.ZP)({
            navId: 'search-results',
            itemCount: y,
            focusedIndex: 0,
            setFocus: M,
            onSelect: O
        }),
        U = j.Z.getQuery(r),
        B = j.Z.getSearchType(r) === R.aib.FAVORITES,
        H = (0, h.nC)(null !== (t = null == U ? void 0 : U.content) && void 0 !== t ? t : ''),
        F = T.map((e) => {
            let { channel: t, results: n, startIndex: l } = e;
            return (0, i.jsx)(
                D,
                {
                    channel: t,
                    results: n,
                    highlighter: H,
                    startIndex: l,
                    resultRefs: A,
                    totalResults: v,
                    scrollTo: p,
                    searchId: r,
                    renderEmbeds: a,
                    offset: x,
                    jumpToMessage: Z,
                    listNavigator: w,
                    favoriteSearch: B
                },
                ''.concat(t.id, '-').concat(l)
            );
        });
    F.push();
    let G = l.useRef(null);
    l.useLayoutEffect(() => {
        var e;
        null === (e = G.current) || void 0 === e || e.focus();
    }, [f]);
    let V = (0, o.useFocusJumpSection)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                ref: G,
                ...w.getContainerProps(),
                ...V,
                'aria-busy': I,
                children: F
            }),
            g > 0
                ? (0, i.jsxs)(o.Clickable, {
                      tag: 'div',
                      className: k.resultsBlocked,
                      onClick: () => d.QY(r, !E),
                      children: [
                          (0, i.jsx)('div', { className: k.resultsBlockedImage }),
                          (0, i.jsx)('div', {
                              className: k.__invalid_resultsBlockedText,
                              children: E ? L.intl.formatToPlainString(L.t['n/1QFR'], { count: g }) : L.intl.formatToPlainString(L.t.HTE8JC, { count: g })
                          })
                      ]
                  })
                : null,
            !I &&
                !B &&
                (0, i.jsx)(P.Z, {
                    changePage: b,
                    offset: x,
                    totalResults: v,
                    pageLength: R.vpv
                })
        ]
    });
}
function w(e) {
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
function D(e) {
    var t, n, r;
    let { channel: a, results: s, highlighter: c, startIndex: u, resultRefs: d, totalResults: h, scrollTo: m, searchId: _, renderEmbeds: b, offset: j, jumpToMessage: P, listNavigator: L, favoriteSearch: O } = e,
        D = E.cC.useSetting(),
        U = (0, C.p)(),
        B = l.useCallback((e) => {
            if (e === A.Z.getChannelId()) return;
            let t = S.Z.getChannel(e);
            if (null != t && !!T.Z.can(R.Plq.VIEW_CHANNEL, t)) (0, I.Kh)(t.id);
        }, []),
        H = null != a ? (0, p.F6)(a, y.default, N.Z, !1) : '???',
        F = O && null != a.guild_id ? (null === (t = Z.Z.getGuild(a.guild_id)) || void 0 === t ? void 0 : t.name) : null,
        G = (null == a ? void 0 : a.parent_id) != null ? S.Z.getChannel(a.parent_id) : null,
        V = null !== (n = null == G ? void 0 : G.name) && void 0 !== n ? n : null,
        z = null !== (r = (0, f.KS)(a)) && void 0 !== r ? r : o.TextIcon,
        W = T.Z.can(R.Plq.MANAGE_MESSAGES, a),
        { content: Y } = (0, v.ZP)(
            {
                content: H,
                embeds: []
            },
            {
                postProcessor: c,
                shouldFilterKeywords: U
            }
        ),
        K = l.useRef(null),
        [q, X] = l.useState(!1);
    l.useEffect(() => {
        let e = K.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && X(e.offsetWidth < e.scrollWidth);
    }, []);
    let J = [H, V, F].filter((e) => null != e).join(', ');
    return (0, i.jsx)(g.a.Provider, {
        value: (0, x.Z)(D, W),
        children: (0, i.jsxs)('ul', {
            role: 'group',
            className: k.searchResultGroup,
            'aria-label': J,
            children: [
                (0, i.jsx)(o.Clickable, {
                    onClick: () => B(a.id),
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
                                        ref: K,
                                        className: k.channelNameText,
                                        children: [O && null !== F && ''.concat(F, ' : '), Y]
                                    })
                            }),
                            (0, i.jsx)(w, {
                                parentChannel: G,
                                onSelectChannel: B
                            })
                        ]
                    })
                }),
                s.map((e, t) => {
                    let n = u + t;
                    return (0, i.jsx)(
                        M.Z,
                        {
                            ref: (e) => (d.current[n] = e),
                            totalResults: h,
                            scrollTo: m,
                            searchId: _,
                            renderEmbeds: b,
                            searchOffset: j,
                            pageResultsLength: s.length,
                            result: e,
                            index: n,
                            onJump: P,
                            listItemProps: L.getItemProps({ index: n })
                        },
                        'search-result-'.concat(n)
                    );
                })
            ]
        })
    });
}
