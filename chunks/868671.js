n.d(t, {
    H: function () {
        return E;
    },
    T: function () {
        return I;
    }
}),
    n(47120),
    n(724458);
var i = n(192379),
    l = n(442837),
    r = n(570140),
    a = n(439170),
    s = n(592125),
    o = n(430824),
    c = n(451478),
    u = n(626135),
    d = n(162461),
    h = n(71585),
    m = n(34586),
    p = n(69259),
    f = n(590026),
    g = n(178762),
    C = n(206583),
    x = n(809017),
    v = n(981631),
    _ = n(388032);
let I = 0;
function E(e) {
    let {
            memberStoreProps: { groups: t, rows: n, version: I },
            channelId: E,
            guildId: b
        } = e,
        [S, Z] = i.useState(!1),
        { requestId: T, entries: N, impressionCappedEntryIds: j, hasLeaderboardEntry: A } = (0, f.Z)(E),
        y = (0, l.e7)([h.Z], () => h.Z.hidden),
        P = (0, l.e7)([c.Z], () => c.Z.isFocused()),
        M = (0, l.e7)([s.Z], () => s.Z.getChannel(E)),
        R = (0, l.e7)([o.Z], () => o.Z.getGuild(b), [b]),
        L = (0, m.E)(R),
        k = null != L && L && (null == M ? void 0 : M.isForumChannel()) === !1,
        [O, w, D, U] = i.useMemo(() => {
            let e;
            if (null == N || 0 === N.length || null == T || !k) return [t, n, I];
            let i = S ? N.length : A ? 4 : 3,
                l = N.slice(0, i);
            e = y
                ? [{ type: a.so.HIDDEN_CONTENT_INVENTORY }]
                : l.map((e) => ({
                      type: a.so.CONTENT_INVENTORY,
                      entry: e,
                      requestId: T
                  }));
            let r = {
                id: x.G,
                type: a.so.CONTENT_INVENTORY_GROUP,
                key: x.G,
                count: e.length,
                index: n.length,
                title: _.intl.string(_.t['6gwSFR']),
                onToggleExpand: () => {
                    Z((e) => {
                        let t = !e;
                        return (
                            u.default.track(v.rMx.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                channel_id: E,
                                guild_id: b,
                                expanded: t
                            }),
                            t
                        );
                    });
                },
                expanded: S,
                expandedCount: N.length,
                feedHeight: e.map(g.iZ).reduce((e, t) => e + t, 0)
            };
            return [[r, ...t], [...n, r, ...e], Math.random(), e];
        }, [E, N, S, t, b, T, n, I, y, k, A]),
        B = i.useRef(0),
        H = i.useRef(N),
        F = i.useRef(),
        G = i.useRef({ impressionCappedEntryIds: j }),
        V = i.useCallback(
            (e) => {
                var t;
                let n = Math.floor(e / g.YN),
                    i = Math.min(null !== (t = null == U ? void 0 : U.length) && void 0 !== t ? t : 0, n);
                B.current = Math.max(B.current, i);
            },
            [U]
        );
    return (
        i.useEffect(() => {
            H.current = N;
        }, [N]),
        i.useEffect(() => {
            G.current = { impressionCappedEntryIds: j };
        }, [j]),
        i.useEffect(
            () => (
                (B.current = 0),
                (F.current = Date.now()),
                () => {
                    var e, t;
                    if (null == T || null == F.current || Date.now() - F.current < 3000) return;
                    let n = null !== (t = null === (e = H.current) || void 0 === e ? void 0 : e.map((e) => e.id)) && void 0 !== t ? t : [],
                        i = n.slice(0, B.current);
                    if (!y && !!P && !!k)
                        (0, p.e)(v.rMx.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                            request_id: T,
                            first_shown_at: F.current,
                            item_ids: i,
                            surface_type: C.Kd.GUILD_MEMBER_LIST,
                            channel_id: E,
                            guild_id: b,
                            all_item_ids: n,
                            impression_capped_item_ids: [...G.current.impressionCappedEntryIds]
                        }),
                            (0, d.wm)('useInjectContentInventoryFeed') &&
                                r.Z.dispatch({
                                    type: 'CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS',
                                    itemIds: i
                                });
                }
            ),
            [T, E, b, y, P, k]
        ),
        {
            groups: O,
            rows: w,
            version: D,
            updateMaxRowSeen: V
        }
    );
}
