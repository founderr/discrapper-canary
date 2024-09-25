n.d(t, {
    y6: function () {
        return m;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(442837),
    o = n(45114),
    s = n(733427),
    l = n(455199),
    u = n(833592),
    c = n(140155),
    d = n(774807),
    _ = n(490897);
let E = 100,
    f = 8,
    h = 20,
    p = (e) => {
        let { isFocused: t, navigatedAway: n, isDesktop: r, withMentions: p = !1, initialPageSize: m } = e,
            I = (0, a.e7)([d.Z], () => d.Z.shouldReload()),
            T = i.useRef(!1),
            [g, S] = i.useState(!1),
            {
                initialized: A,
                loading: v,
                items: N,
                hasMore: O,
                cursor: R,
                errored: C
            } = (0, a.cj)([c.Z], () => ({
                initialized: c.Z.initialized,
                loading: c.Z.loading,
                items: c.Z.items,
                hasMore: c.Z.hasMore,
                cursor: c.Z.cursor,
                errored: c.Z.errored
            })),
            { roleFilter: y, everyoneFilter: b } = (0, a.cj)([l.Z], () => ({
                everyoneFilter: l.Z.everyoneFilter,
                roleFilter: l.Z.roleFilter
            }));
        i.useEffect(() => ((0, u.Vk)(!0), () => (0, u.Vk)(!1)), []),
            i.useEffect(() => {
                A && t && (0, o.FT)(_.W.NOTIFICATION_CENTER);
            }, [t, A]);
        let L = (0, s.Z)();
        i.useEffect(
            () => () => {
                r ? !L() && (C || N.length > E) && (0, u.jF)() : n && N.length > E && (0, u.jF)();
            },
            [n, N, r, L, C]
        ),
            i.useEffect(() => {
                let e = I && t;
                (!A || e) &&
                    (0, u.jk)({
                        limit: null != m ? m : p ? f : h,
                        with_mentions: p,
                        roles_filter: y,
                        everyone_filter: b
                    });
            }, [A, I, t, p, y, b, m]);
        let D = i.useCallback(
            async (e) => {
                !T.current &&
                    A &&
                    O &&
                    null != R &&
                    (e || !C) &&
                    ((T.current = !0),
                    S(!0),
                    await (0, u.jk)(
                        {
                            after: R,
                            with_mentions: p,
                            roles_filter: y,
                            everyone_filter: b,
                            limit: p ? f : h
                        },
                        () => {
                            T.current = !1;
                        }
                    ),
                    S(!1));
            },
            [A, O, R, C, p, y, b]
        );
        return {
            initialized: A,
            loading: v,
            items: N,
            hasMore: O,
            loadMore: D,
            loadingMore: g,
            setReadNotifItemToAcked: (e) => {
                !e.acked && (e.acked = !0);
            },
            errored: C
        };
    },
    m = () => {
        let {
            initialized: e,
            loading: t,
            items: n,
            hasMore: r,
            loadMore: i
        } = p({
            isFocused: !0,
            isDesktop: !0
        });
        return {
            initialized: e,
            loading: t,
            items: n.filter((e) => 'notification-center-item' === e.kind),
            hasMore: r,
            loadMore: i
        };
    };
