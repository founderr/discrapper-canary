n.d(t, {
    y6: function () {
        return E;
    }
}),
    n(47120);
var i = n(192379),
    a = n(442837),
    s = n(45114),
    r = n(733427),
    l = n(455199),
    o = n(833592),
    c = n(140155),
    u = n(774807),
    d = n(490897);
let _ = (e) => {
        let { isFocused: t, navigatedAway: n, isDesktop: _, withMentions: E = !1, initialPageSize: I } = e,
            m = (0, a.e7)([u.Z], () => u.Z.shouldReload()),
            f = i.useRef(!1),
            [T, h] = i.useState(!1),
            {
                initialized: N,
                loading: p,
                items: C,
                hasMore: g,
                cursor: S,
                errored: A
            } = (0, a.cj)([c.Z], () => ({
                initialized: c.Z.initialized,
                loading: c.Z.loading,
                items: c.Z.items,
                hasMore: c.Z.hasMore,
                cursor: c.Z.cursor,
                errored: c.Z.errored
            })),
            { roleFilter: x, everyoneFilter: R } = (0, a.cj)([l.Z], () => ({
                everyoneFilter: l.Z.everyoneFilter,
                roleFilter: l.Z.roleFilter
            }));
        i.useEffect(() => ((0, o.Vk)(!0), () => (0, o.Vk)(!1)), []),
            i.useEffect(() => {
                N && t && (0, s.FT)(d.W.NOTIFICATION_CENTER);
            }, [t, N]);
        let v = (0, r.Z)();
        i.useEffect(
            () => () => {
                _ ? !v() && (A || C.length > 100) && (0, o.jF)() : n && C.length > 100 && (0, o.jF)();
            },
            [n, C, _, v, A]
        ),
            i.useEffect(() => {
                let e = m && t;
                (!N || e) &&
                    (0, o.jk)({
                        limit: null != I ? I : E ? 8 : 20,
                        with_mentions: E,
                        roles_filter: x,
                        everyone_filter: R
                    });
            }, [N, m, t, E, x, R, I]);
        let O = i.useCallback(
            async (e) => {
                !f.current &&
                    N &&
                    g &&
                    null != S &&
                    (e || !A) &&
                    ((f.current = !0),
                    h(!0),
                    await (0, o.jk)(
                        {
                            after: S,
                            with_mentions: E,
                            roles_filter: x,
                            everyone_filter: R,
                            limit: E ? 8 : 20
                        },
                        () => {
                            f.current = !1;
                        }
                    ),
                    h(!1));
            },
            [N, g, S, A, E, x, R]
        );
        return {
            initialized: N,
            loading: p,
            items: C,
            hasMore: g,
            loadMore: O,
            loadingMore: T,
            setReadNotifItemToAcked: (e) => {
                !e.acked && (e.acked = !0);
            },
            errored: A
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
