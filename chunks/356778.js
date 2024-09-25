n.d(t, {
    II: function () {
        return p;
    },
    Ow: function () {
        return I;
    },
    P2: function () {
        return v;
    },
    mw: function () {
        return i;
    },
    z0: function () {
        return T;
    }
}),
    n(47120);
var i,
    s,
    a = n(470079),
    l = n(652874),
    r = n(143927),
    o = n(731965),
    c = n(570140),
    u = n(110924),
    d = n(840877),
    h = n(952537),
    m = n(981631);
let p = -1;
((s = i || (i = {})).MESSAGES = 'messages'), (s.LINKS = 'links'), (s.MEDIA = 'media'), (s.ALL_COUNTS = 'all_counts');
function _(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = JSON.stringify(i);
    return s ? 'guild_'.concat(t, '_search_tab_').concat(n, '_for_').concat(e, '_with_additonal_').concat(a) : 'guild_'.concat(t, '_search_').concat(n, '_for_').concat(e, '_with_additonal_').concat(a);
}
let f = {
        searchFetcher: null,
        searchTabFetcher: null,
        result: null,
        messageCount: p,
        lastMessage: null
    },
    E = (0, l.Z)(() => new Map()),
    g = (e, t) => {
        (0, o.j)(() => {
            E.setState((n) => {
                let i = n.get(e);
                return (
                    null == i
                        ? n.set(e, {
                              ...f,
                              ...t
                          })
                        : n.set(e, {
                              ...i,
                              ...t
                          }),
                    n
                );
            });
        });
    },
    C = (e) => E((t) => t.get(e), r.Z);
function I(e, t, n) {
    let i = null != n ? n : {};
    switch (t) {
        case 'links':
            return {
                author_id: e,
                has: ['link'],
                ...i
            };
        case 'media':
            return {
                author_id: e,
                attachment_extension: ['png', 'jpg', 'webp', 'mov', 'mp4', 'gif', 'mp3', 'wav', 'flac', 'ogg'],
                ...i
            };
        case 'all_counts':
            return {
                author_id: [e],
                limit: 1,
                cursor: null,
                ...i
            };
        default:
            return {
                author_id: e,
                ...i
            };
    }
}
function T(e, t, n) {
    return (function (e, t, n, i) {
        let { addtionalQuery: s, shouldDispatch: l = !1 } = i,
            r = a.useMemo(() => _(e, t, n, s), [e, t, n, s]),
            o = C(r),
            E = (0, u.Z)(r),
            [T, x] = a.useState({});
        return (
            a.useEffect(() => {
                if (E !== r) {
                    let i = I(e, n, s),
                        a = new d.ZP(t, m.aib.GUILD, i);
                    g(r, {
                        searchFetcher: a,
                        messageCount: p,
                        lastMessage: null
                    }),
                        setTimeout(() => {
                            a.fetch(
                                (e) => {
                                    let n = e.body,
                                        i = n.messages[0];
                                    if (
                                        (g(r, {
                                            searchFetcher: a,
                                            result: n,
                                            messageCount: n.total_results,
                                            lastMessage: i
                                        }),
                                        x({}),
                                        l)
                                    ) {
                                        var s, o;
                                        c.Z.dispatch({
                                            type: 'MOD_VIEW_SEARCH_FINISH',
                                            searchId: t,
                                            guildId: t,
                                            analyticsId: n.analytics_id,
                                            totalResults: n.total_results,
                                            channels: n.channels,
                                            messages: n.messages,
                                            threads: null !== (s = n.threads) && void 0 !== s ? s : [],
                                            members: (null !== (o = n.members) && void 0 !== o ? o : []).map((e) => (0, h.Z)(e)),
                                            hasError: !1,
                                            doingHistoricalIndex: n.doing_deep_historical_index,
                                            documentsIndexed: n.documents_indexed
                                        });
                                    }
                                },
                                (e) => {},
                                (e) => {
                                    g(r, {
                                        messageCount: 0,
                                        lastMessage: null
                                    }),
                                        x({});
                                }
                            );
                        });
                }
                return () => {};
            }, [e, t, o, r, n, s]),
            null != o ? o : f
        );
    })(e, t, 'messages', n);
}
function x(e, t, n, i) {
    let s = a.useMemo(() => _(e, t, n, i, !0), [e, t, n, i]),
        l = C(s),
        r = (0, u.Z)(s);
    return {
        key: s,
        previousKey: r,
        state: l
    };
}
function v(e, t, n) {
    var i, s, l;
    let { key: r, state: o } = x(e, t, 'messages', n),
        { key: c, state: u } = x(e, t, 'links', n),
        { key: h, state: _ } = x(e, t, 'media', n),
        f = a.useMemo(() => I(e, 'all_counts', n), [e, n]),
        E = a.useMemo(
            () => ({
                tabs: {
                    messages: I(e, 'messages', f),
                    links: I(e, 'links', f),
                    media: I(e, 'media', f)
                },
                track_exact_total_hits: !0
            }),
            [e, f]
        ),
        C = a.useCallback(
            (e) => {
                let t = e.messages,
                    n = e.links,
                    i = e.media;
                g(r, t), g(c, n), g(h, i);
            },
            [c, h, r]
        ),
        T = a.useCallback(
            (e) => {
                C({
                    messages: e,
                    links: e,
                    media: e
                });
            },
            [C]
        );
    a.useEffect(() => {
        let e = new d.tJ(t, m.aib.GUILD, f, E);
        T({
            searchTabFetcher: e,
            messageCount: p,
            lastMessage: null
        });
        let n = setTimeout(async () => {
            let t = null;
            try {
                let n = await e.makeRequest();
                t = null == n ? void 0 : n.body;
            } catch (e) {
                t = null;
            }
            if (null == t)
                T({
                    messageCount: 0,
                    lastMessage: null
                });
            else {
                var n, i, s, a, l, r;
                let e = t.tabs.messages,
                    o = t.tabs.links,
                    c = t.tabs.media;
                C({
                    messages: {
                        messageCount: null !== (n = null == e ? void 0 : e.total_results) && void 0 !== n ? n : 0,
                        lastMessage: null !== (i = null == e ? void 0 : e.messages[0]) && void 0 !== i ? i : null
                    },
                    links: {
                        messageCount: null !== (s = null == o ? void 0 : o.total_results) && void 0 !== s ? s : 0,
                        lastMessage: null !== (a = null == o ? void 0 : o.messages[0]) && void 0 !== a ? a : null
                    },
                    media: {
                        messageCount: null !== (l = null == c ? void 0 : c.total_results) && void 0 !== l ? l : 0,
                        lastMessage: null !== (r = null == c ? void 0 : c.messages[0]) && void 0 !== r ? r : null
                    }
                });
            }
            S({});
        });
        return () => {
            e.cancel(), clearTimeout(n);
        };
    }, [e, t, f, E, T, C]);
    let [v, S] = a.useState({});
    return {
        messagesCount: null !== (i = null == o ? void 0 : o.messageCount) && void 0 !== i ? i : p,
        linksCount: null !== (s = null == u ? void 0 : u.messageCount) && void 0 !== s ? s : p,
        mediaCount: null !== (l = null == _ ? void 0 : _.messageCount) && void 0 !== l ? l : p
    };
}
