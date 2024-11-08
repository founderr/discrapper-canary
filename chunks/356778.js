n.d(t, {
    II: function () {
        return m;
    },
    Ow: function () {
        return _;
    },
    P2: function () {
        return b;
    },
    mw: function () {
        return i;
    },
    z0: function () {
        return I;
    }
}),
    n(47120);
var i,
    l,
    a = n(192379),
    r = n(903797),
    s = n(782690),
    o = n(731965),
    c = n(570140),
    d = n(110924),
    u = n(840877),
    h = n(952537),
    p = n(981631);
let m = -1;
((l = i || (i = {})).MESSAGES = 'messages'), (l.LINKS = 'links'), (l.MEDIA = 'media'), (l.ALL_COUNTS = 'all_counts');
function f(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = JSON.stringify(i);
    return l ? 'guild_'.concat(t, '_search_tab_').concat(n, '_for_').concat(e, '_with_additonal_').concat(a) : 'guild_'.concat(t, '_search_').concat(n, '_for_').concat(e, '_with_additonal_').concat(a);
}
let g = {
        searchFetcher: null,
        searchTabFetcher: null,
        result: null,
        messageCount: m,
        lastMessage: null
    },
    C = (0, r.Z)(() => new Map()),
    x = (e, t) => {
        (0, o.j)(() => {
            C.setState((n) => {
                let i = n.get(e);
                return (
                    null == i
                        ? n.set(e, {
                              ...g,
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
    v = (e) => C((t) => t.get(e), s.Z);
function _(e, t, n) {
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
                attachment_extension: ['png', 'jpg', 'webp', 'mov', 'mp4', 'gif', 'mp3', 'wav', 'flac', 'ogg', 'opus'],
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
function I(e, t, n) {
    return (function (e, t, n, i) {
        let { addtionalQuery: l, shouldDispatch: r = !1 } = i,
            s = a.useMemo(() => f(e, t, n, l), [e, t, n, l]),
            o = v(s),
            C = (0, d.Z)(s),
            [I, E] = a.useState({});
        return (
            a.useEffect(() => {
                if (C !== s) {
                    let i = _(e, n, l),
                        a = new u.ZP(t, p.aib.GUILD, i);
                    x(s, {
                        searchFetcher: a,
                        messageCount: m,
                        lastMessage: null
                    }),
                        setTimeout(() => {
                            a.fetch(
                                (e) => {
                                    let n = e.body,
                                        i = n.messages[0];
                                    if (
                                        (x(s, {
                                            searchFetcher: a,
                                            result: n,
                                            messageCount: n.total_results,
                                            lastMessage: i
                                        }),
                                        E({}),
                                        r)
                                    ) {
                                        var l, o;
                                        c.Z.dispatch({
                                            type: 'MOD_VIEW_SEARCH_FINISH',
                                            searchId: t,
                                            guildId: t,
                                            analyticsId: n.analytics_id,
                                            totalResults: n.total_results,
                                            channels: n.channels,
                                            messages: n.messages,
                                            threads: null !== (l = n.threads) && void 0 !== l ? l : [],
                                            members: (null !== (o = n.members) && void 0 !== o ? o : []).map((e) => (0, h.Z)(e)),
                                            hasError: !1,
                                            doingHistoricalIndex: n.doing_deep_historical_index,
                                            documentsIndexed: n.documents_indexed
                                        });
                                    }
                                },
                                (e) => {},
                                (e) => {
                                    x(s, {
                                        messageCount: 0,
                                        lastMessage: null
                                    }),
                                        E({});
                                }
                            );
                        });
                }
                return () => {};
            }, [e, t, o, s, n, l]),
            null != o ? o : g
        );
    })(e, t, 'messages', n);
}
function E(e, t, n, i) {
    let l = a.useMemo(() => f(e, t, n, i, !0), [e, t, n, i]),
        r = v(l),
        s = (0, d.Z)(l);
    return {
        key: l,
        previousKey: s,
        state: r
    };
}
function b(e, t, n) {
    var i, l, r;
    let { key: s, state: o } = E(e, t, 'messages', n),
        { key: c, state: d } = E(e, t, 'links', n),
        { key: h, state: f } = E(e, t, 'media', n),
        g = a.useMemo(() => _(e, 'all_counts', n), [e, n]),
        C = a.useMemo(
            () => ({
                tabs: {
                    messages: _(e, 'messages', g),
                    links: _(e, 'links', g),
                    media: _(e, 'media', g)
                },
                track_exact_total_hits: !0
            }),
            [e, g]
        ),
        v = a.useCallback(
            (e) => {
                let t = e.messages,
                    n = e.links,
                    i = e.media;
                x(s, t), x(c, n), x(h, i);
            },
            [c, h, s]
        ),
        I = a.useCallback(
            (e) => {
                v({
                    messages: e,
                    links: e,
                    media: e
                });
            },
            [v]
        );
    a.useEffect(() => {
        let e = new u.tJ(t, p.aib.GUILD, g, C);
        I({
            searchTabFetcher: e,
            messageCount: m,
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
                I({
                    messageCount: 0,
                    lastMessage: null
                });
            else {
                var n, i, l, a, r, s;
                let e = t.tabs.messages,
                    o = t.tabs.links,
                    c = t.tabs.media;
                v({
                    messages: {
                        messageCount: null !== (n = null == e ? void 0 : e.total_results) && void 0 !== n ? n : 0,
                        lastMessage: null !== (i = null == e ? void 0 : e.messages[0]) && void 0 !== i ? i : null
                    },
                    links: {
                        messageCount: null !== (l = null == o ? void 0 : o.total_results) && void 0 !== l ? l : 0,
                        lastMessage: null !== (a = null == o ? void 0 : o.messages[0]) && void 0 !== a ? a : null
                    },
                    media: {
                        messageCount: null !== (r = null == c ? void 0 : c.total_results) && void 0 !== r ? r : 0,
                        lastMessage: null !== (s = null == c ? void 0 : c.messages[0]) && void 0 !== s ? s : null
                    }
                });
            }
            N({});
        });
        return () => {
            e.cancel(), clearTimeout(n);
        };
    }, [e, t, g, C, I, v]);
    let [b, N] = a.useState({});
    return {
        messagesCount: null !== (i = null == o ? void 0 : o.messageCount) && void 0 !== i ? i : m,
        linksCount: null !== (l = null == d ? void 0 : d.messageCount) && void 0 !== l ? l : m,
        mediaCount: null !== (r = null == f ? void 0 : f.messageCount) && void 0 !== r ? r : m
    };
}
