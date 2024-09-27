n.d(t, {
    H: function () {
        return x;
    },
    T: function () {
        return T;
    }
}),
    n(47120),
    n(724458);
var i = n(470079),
    s = n(442837),
    a = n(570140),
    l = n(439170),
    r = n(592125),
    o = n(430824),
    c = n(451478),
    u = n(626135),
    d = n(162461),
    h = n(71585),
    m = n(34586),
    p = n(69259),
    _ = n(590026),
    f = n(178762),
    E = n(206583),
    g = n(809017),
    C = n(981631),
    I = n(689938);
let T = 0;
function x(e) {
    let {
            memberStoreProps: { groups: t, rows: n, version: T },
            channelId: x,
            guildId: S
        } = e,
        [v, N] = i.useState(!1),
        { requestId: A, entries: Z, impressionCappedEntryIds: M, hasLeaderboardEntry: b } = (0, _.Z)(x),
        R = (0, s.e7)([h.Z], () => h.Z.hidden),
        L = (0, s.e7)([c.Z], () => c.Z.isFocused()),
        j = (0, s.e7)([r.Z], () => r.Z.getChannel(x)),
        O = (0, s.e7)([o.Z], () => o.Z.getGuild(S), [S]),
        P = (0, m.E)(O),
        y = null != P && P && (null == j ? void 0 : j.isForumChannel()) === !1,
        [D, U, k, w] = i.useMemo(() => {
            let e;
            if (null == Z || 0 === Z.length || null == A || !y) return [t, n, T];
            let i = v ? Z.length : b ? 4 : 3,
                s = Z.slice(0, i);
            e = R
                ? [{ type: l.so.HIDDEN_CONTENT_INVENTORY }]
                : s.map((e) => ({
                      type: l.so.CONTENT_INVENTORY,
                      entry: e,
                      requestId: A
                  }));
            let a = {
                id: g.G,
                type: l.so.CONTENT_INVENTORY_GROUP,
                key: g.G,
                count: e.length,
                index: n.length,
                title: I.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_GROUP_TITLE,
                onToggleExpand: () => {
                    N((e) => {
                        let t = !e;
                        return (
                            u.default.track(C.rMx.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                channel_id: x,
                                guild_id: S,
                                expanded: t
                            }),
                            t
                        );
                    });
                },
                expanded: v,
                expandedCount: Z.length,
                feedHeight: e.map(f.iZ).reduce((e, t) => e + t, 0)
            };
            return [[a, ...t], [...n, a, ...e], Math.random(), e];
        }, [x, Z, v, t, S, A, n, T, R, y, b]),
        B = i.useRef(0),
        H = i.useRef(Z),
        G = i.useRef(),
        V = i.useRef({ impressionCappedEntryIds: M }),
        F = i.useCallback(
            (e) => {
                var t;
                let n = Math.floor(e / f.YN),
                    i = Math.min(null !== (t = null == w ? void 0 : w.length) && void 0 !== t ? t : 0, n);
                B.current = Math.max(B.current, i);
            },
            [w]
        );
    return (
        i.useEffect(() => {
            H.current = Z;
        }, [Z]),
        i.useEffect(() => {
            V.current = { impressionCappedEntryIds: M };
        }, [M]),
        i.useEffect(
            () => (
                (B.current = 0),
                (G.current = Date.now()),
                () => {
                    var e, t;
                    if (null == A || null == G.current || Date.now() - G.current < 3000) return;
                    let n = null !== (t = null === (e = H.current) || void 0 === e ? void 0 : e.map((e) => e.id)) && void 0 !== t ? t : [],
                        i = n.slice(0, B.current);
                    if (!R && !!L && !!y)
                        (0, p.e)(C.rMx.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                            request_id: A,
                            first_shown_at: G.current,
                            item_ids: i,
                            surface_type: E.Kd.GUILD_MEMBER_LIST,
                            channel_id: x,
                            guild_id: S,
                            all_item_ids: n,
                            impression_capped_item_ids: [...V.current.impressionCappedEntryIds]
                        }),
                            (0, d.wm)('useInjectContentInventoryFeed') &&
                                a.Z.dispatch({
                                    type: 'CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS',
                                    itemIds: i
                                });
                }
            ),
            [A, x, S, R, L, y]
        ),
        {
            groups: D,
            rows: U,
            version: k,
            updateMaxRowSeen: F
        }
    );
}
