n.d(t, {
    y6: function () {
        return h;
    }
}),
    n(47120);
var i = n(192379),
    r = n(442837),
    l = n(45114),
    a = n(733427),
    o = n(455199),
    s = n(833592),
    c = n(140155),
    d = n(774807),
    u = n(490897);
let m = (e) => {
        let { isFocused: t, navigatedAway: n, isDesktop: m, withMentions: h = !1, initialPageSize: f } = e,
            p = (0, r.e7)([d.Z], () => d.Z.shouldReload()),
            g = i.useRef(!1),
            [_, C] = i.useState(!1),
            {
                initialized: E,
                loading: I,
                items: x,
                hasMore: v,
                cursor: N,
                errored: T
            } = (0, r.cj)([c.Z], () => ({
                initialized: c.Z.initialized,
                loading: c.Z.loading,
                items: c.Z.items,
                hasMore: c.Z.hasMore,
                cursor: c.Z.cursor,
                errored: c.Z.errored
            })),
            { roleFilter: S, everyoneFilter: b } = (0, r.cj)([o.Z], () => ({
                everyoneFilter: o.Z.everyoneFilter,
                roleFilter: o.Z.roleFilter
            }));
        i.useEffect(() => ((0, s.Vk)(!0), () => (0, s.Vk)(!1)), []),
            i.useEffect(() => {
                E && t && (0, l.FT)(u.W.NOTIFICATION_CENTER);
            }, [t, E]);
        let A = (0, a.Z)();
        i.useEffect(
            () => () => {
                m ? !A() && (T || x.length > 100) && (0, s.jF)() : n && x.length > 100 && (0, s.jF)();
            },
            [n, x, m, A, T]
        ),
            i.useEffect(() => {
                let e = p && t;
                (!E || e) &&
                    (0, s.jk)({
                        limit: null != f ? f : h ? 8 : 20,
                        with_mentions: h,
                        roles_filter: S,
                        everyone_filter: b
                    });
            }, [E, p, t, h, S, b, f]);
        let j = i.useCallback(
            async (e) => {
                !g.current &&
                    E &&
                    v &&
                    null != N &&
                    (e || !T) &&
                    ((g.current = !0),
                    C(!0),
                    await (0, s.jk)(
                        {
                            after: N,
                            with_mentions: h,
                            roles_filter: S,
                            everyone_filter: b,
                            limit: h ? 8 : 20
                        },
                        () => {
                            g.current = !1;
                        }
                    ),
                    C(!1));
            },
            [E, v, N, T, h, S, b]
        );
        return {
            initialized: E,
            loading: I,
            items: x,
            hasMore: v,
            loadMore: j,
            loadingMore: _,
            setReadNotifItemToAcked: (e) => {
                !e.acked && (e.acked = !0);
            },
            errored: T
        };
    },
    h = () => {
        let {
            initialized: e,
            loading: t,
            items: n,
            hasMore: i,
            loadMore: r
        } = m({
            isFocused: !0,
            isDesktop: !0
        });
        return {
            initialized: e,
            loading: t,
            items: n.filter((e) => 'notification-center-item' === e.kind),
            hasMore: i,
            loadMore: r
        };
    };
