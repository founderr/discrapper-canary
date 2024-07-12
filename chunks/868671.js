n.d(t, {
    H: function () {
        return g;
    },
    T: function () {
        return C;
    }
}), n(47120), n(724458);
var i = n(470079), a = n(442837), s = n(570140), l = n(439170), r = n(592125), o = n(451478), c = n(626135), d = n(162461), u = n(146282), h = n(590026), p = n(178762), m = n(206583), _ = n(809017), f = n(981631), E = n(689938);
let C = 0;
function g(e) {
    let {
            memberStoreProps: {
                groups: t,
                rows: n,
                version: C
            },
            channelId: g,
            guildId: I
        } = e, [x, T] = i.useState(!1), {
            requestId: v,
            entries: N,
            impressionCappedEntryIds: S
        } = (0, h.Z)(g), Z = (0, a.e7)([u.Z], () => u.Z.hidden), A = (0, a.e7)([o.Z], () => o.Z.isFocused()), M = (0, a.e7)([r.Z], () => r.Z.getChannel(g)), b = (null == M ? void 0 : M.isForumChannel()) === !1, [R, j, L, P] = i.useMemo(() => {
            let e;
            if (null == N || 0 === N.length || null == v || !b)
                return [
                    t,
                    n,
                    C
                ];
            let i = x ? N.length : 3, a = N.slice(0, i);
            e = Z ? [{ type: l.so.HIDDEN_CONTENT_INVENTORY }] : a.map(e => ({
                type: l.so.CONTENT_INVENTORY,
                entry: e,
                requestId: v
            }));
            let s = {
                id: _.G,
                type: l.so.CONTENT_INVENTORY_GROUP,
                key: _.G,
                count: e.length,
                index: n.length,
                title: E.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_GROUP_TITLE,
                onToggleExpand: () => {
                    T(e => {
                        let t = !e;
                        return c.default.track(f.rMx.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                            channel_id: g,
                            guild_id: I,
                            expanded: t
                        }), t;
                    });
                },
                expanded: x,
                expandedCount: N.length,
                feedHeight: e.map(p.iZ).reduce((e, t) => e + t, 0)
            };
            return [
                [
                    s,
                    ...t
                ],
                [
                    ...n,
                    s,
                    ...e
                ],
                Math.random(),
                e
            ];
        }, [
            g,
            N,
            x,
            t,
            I,
            v,
            n,
            C,
            Z,
            b
        ]), O = i.useRef(0), y = i.useRef(N), D = i.useRef(), k = i.useRef({ impressionCappedEntryIds: S }), U = i.useCallback(e => {
            var t;
            let n = Math.floor(e / p.YN), i = Math.min(null !== (t = null == P ? void 0 : P.length) && void 0 !== t ? t : 0, n);
            O.current = Math.max(O.current, i);
        }, [P]);
    return i.useEffect(() => {
        y.current = N;
    }, [N]), i.useEffect(() => {
        k.current = { impressionCappedEntryIds: S };
    }, [S]), i.useEffect(() => (O.current = 0, D.current = Date.now(), () => {
        var e, t;
        if (null == v || null == D.current || Date.now() - D.current < 3000)
            return;
        let n = null !== (t = null === (e = y.current) || void 0 === e ? void 0 : e.map(e => e.id)) && void 0 !== t ? t : [], i = n.slice(0, O.current);
        if (!Z && !!A && !!b)
            c.default.track(f.rMx.RANKING_ITEMS_SEEN, {
                request_id: v,
                first_shown_at: D.current,
                item_ids: i,
                surface_type: m.Kd.GUILD_MEMBER_LIST,
                channel_id: g,
                guild_id: I,
                all_item_ids: n,
                impression_capped_item_ids: [...k.current.impressionCappedEntryIds]
            }), (0, d.wm)('useInjectContentInventoryFeed') && s.Z.dispatch({
                type: 'CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS',
                itemIds: i
            });
    }), [
        v,
        g,
        I,
        Z,
        A,
        b
    ]), {
        groups: R,
        rows: j,
        version: L,
        updateMaxRowSeen: U
    };
}
