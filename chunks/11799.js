n.d(t, {
    y6: function () {
        return E;
    }
}),
    n(47120);
var i = n(470079),
    a = n(442837),
    s = n(45114),
    l = n(733427),
    r = n(455199),
    o = n(833592),
    c = n(140155),
    d = n(774807),
    u = n(490897);
let _ = (e) => {
        let { isFocused: t, navigatedAway: n, isDesktop: _, withMentions: E = !1, initialPageSize: I } = e,
            m = (0, a.e7)([d.Z], () => d.Z.shouldReload()),
            T = i.useRef(!1),
            [N, h] = i.useState(!1),
            {
                initialized: C,
                loading: p,
                items: f,
                hasMore: A,
                cursor: g,
                errored: S
            } = (0, a.cj)([c.Z], () => ({
                initialized: c.Z.initialized,
                loading: c.Z.loading,
                items: c.Z.items,
                hasMore: c.Z.hasMore,
                cursor: c.Z.cursor,
                errored: c.Z.errored
            })),
            { roleFilter: M, everyoneFilter: O } = (0, a.cj)([r.Z], () => ({
                everyoneFilter: r.Z.everyoneFilter,
                roleFilter: r.Z.roleFilter
            }));
        i.useEffect(() => ((0, o.Vk)(!0), () => (0, o.Vk)(!1)), []),
            i.useEffect(() => {
                C && t && (0, s.FT)(u.W.NOTIFICATION_CENTER);
            }, [t, C]);
        let x = (0, l.Z)();
        i.useEffect(
            () => () => {
                _ ? !x() && (S || f.length > 100) && (0, o.jF)() : n && f.length > 100 && (0, o.jF)();
            },
            [n, f, _, x, S]
        ),
            i.useEffect(() => {
                let e = m && t;
                (!C || e) &&
                    (0, o.jk)({
                        limit: null != I ? I : E ? 8 : 20,
                        with_mentions: E,
                        roles_filter: M,
                        everyone_filter: O
                    });
            }, [C, m, t, E, M, O, I]);
        let R = i.useCallback(
            async (e) => {
                !T.current &&
                    C &&
                    A &&
                    null != g &&
                    (e || !S) &&
                    ((T.current = !0),
                    h(!0),
                    await (0, o.jk)(
                        {
                            after: g,
                            with_mentions: E,
                            roles_filter: M,
                            everyone_filter: O,
                            limit: E ? 8 : 20
                        },
                        () => {
                            T.current = !1;
                        }
                    ),
                    h(!1));
            },
            [C, A, g, S, E, M, O]
        );
        return {
            initialized: C,
            loading: p,
            items: f,
            hasMore: A,
            loadMore: R,
            loadingMore: N,
            setReadNotifItemToAcked: (e) => {
                !e.acked && (e.acked = !0);
            },
            errored: S
        };
    },
    E = () => {
        let {
            initialized: e,
            loading: t,
            items: n,
            hasMore: i,
            loadMore: a
        } = _({
            isFocused: !0,
            isDesktop: !0
        });
        return {
            initialized: e,
            loading: t,
            items: n.filter((e) => 'notification-center-item' === e.kind),
            hasMore: i,
            loadMore: a
        };
    };
