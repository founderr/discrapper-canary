n.d(t, {
    II: function () {
        return p;
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
    r = n(192379),
    a = n(903797),
    s = n(782690),
    o = n(731965),
    c = n(570140),
    u = n(110924),
    d = n(840877),
    h = n(952537),
    m = n(981631);
let p = -1;
((l = i || (i = {})).MESSAGES = 'messages'), (l.LINKS = 'links'), (l.MEDIA = 'media'), (l.ALL_COUNTS = 'all_counts');
function f(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        r = JSON.stringify(i);
    return l ? 'guild_'.concat(t, '_search_tab_').concat(n, '_for_').concat(e, '_with_additonal_').concat(r) : 'guild_'.concat(t, '_search_').concat(n, '_for_').concat(e, '_with_additonal_').concat(r);
}
let g = {
        searchFetcher: null,
        searchTabFetcher: null,
        result: null,
        messageCount: p,
        lastMessage: null
    },
    C = (0, a.Z)(() => new Map()),
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
        let { addtionalQuery: l, shouldDispatch: a = !1 } = i,
            s = r.useMemo(() => f(e, t, n, l), [e, t, n, l]),
            o = v(s),
            C = (0, u.Z)(s),
            [I, E] = r.useState({});
        return (
            r.useEffect(() => {
                if (C !== s) {
                    let i = _(e, n, l),
                        r = new d.ZP(t, m.aib.GUILD, i);
                    x(s, {
                        searchFetcher: r,
                        messageCount: p,
                        lastMessage: null
                    }),
                        setTimeout(() => {
                            r.fetch(
                                (e) => {
                                    let n = e.body,
                                        i = n.messages[0];
                                    if (
                                        (x(s, {
                                            searchFetcher: r,
                                            result: n,
                                            messageCount: n.total_results,
                                            lastMessage: i
                                        }),
                                        E({}),
                                        a)
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
    let l = r.useMemo(() => f(e, t, n, i, !0), [e, t, n, i]),
        a = v(l),
        s = (0, u.Z)(l);
    return {
        key: l,
        previousKey: s,
        state: a
    };
}
function b(e, t, n) {
    var i, l, a;
    let { key: s, state: o } = E(e, t, 'messages', n),
        { key: c, state: u } = E(e, t, 'links', n),
        { key: h, state: f } = E(e, t, 'media', n),
        g = r.useMemo(() => _(e, 'all_counts', n), [e, n]),
        C = r.useMemo(
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
        v = r.useCallback(
            (e) => {
                let t = e.messages,
                    n = e.links,
                    i = e.media;
                x(s, t), x(c, n), x(h, i);
            },
            [c, h, s]
        ),
        I = r.useCallback(
            (e) => {
                v({
                    messages: e,
                    links: e,
                    media: e
                });
            },
            [v]
        );
    r.useEffect(() => {
        let e = new d.tJ(t, m.aib.GUILD, g, C);
        I({
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
                I({
                    messageCount: 0,
                    lastMessage: null
                });
            else {
                var n, i, l, r, a, s;
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
                        lastMessage: null !== (r = null == o ? void 0 : o.messages[0]) && void 0 !== r ? r : null
                    },
                    media: {
                        messageCount: null !== (a = null == c ? void 0 : c.total_results) && void 0 !== a ? a : 0,
                        lastMessage: null !== (s = null == c ? void 0 : c.messages[0]) && void 0 !== s ? s : null
                    }
                });
            }
            S({});
        });
        return () => {
            e.cancel(), clearTimeout(n);
        };
    }, [e, t, g, C, I, v]);
    let [b, S] = r.useState({});
    return {
        messagesCount: null !== (i = null == o ? void 0 : o.messageCount) && void 0 !== i ? i : p,
        linksCount: null !== (l = null == u ? void 0 : u.messageCount) && void 0 !== l ? l : p,
        mediaCount: null !== (a = null == f ? void 0 : f.messageCount) && void 0 !== a ? a : p
    };
}
