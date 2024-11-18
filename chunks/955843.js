n.d(t, {
    R2: function () {
        return T;
    },
    T$: function () {
        return f;
    },
    Zm: function () {
        return x;
    },
    t6: function () {
        return _;
    }
}),
    n(47120);
var r = n(192379),
    l = n(259443),
    i = n(442837),
    a = n(569545),
    s = n(199902),
    o = n(430824),
    c = n(158776),
    d = n(959457),
    u = n(594174),
    E = n(997323),
    m = n(120619),
    h = n(215339);
let p = new l.Yd('HDStreamingConsumableModal'),
    f = (e) => {
        let t = (0, i.e7)([o.Z], () => o.Z.getGuild(e.guild_id)),
            n = (0, i.e7)([u.default], () => {
                var e;
                return null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            l = (0, i.Wu)([s.Z], () => s.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n)),
            E = l.some((e) => {
                let t = u.default.getUser(e.ownerId);
                return null != t && c.Z.isMobileOnline(t.id);
            }),
            [m, h] = (0, r.useState)(null),
            [f, x] = (0, r.useState)([]);
        (0, i.e7)(
            [d.Z],
            () => {
                if (null == m || Date.now() - m > 10000) {
                    let e = l.map((e) => {
                        var t;
                        let n = (0, a.V9)(e),
                            r = d.Z.getRTCConnection(n);
                        return null == r ? void 0 : null === (t = r.getVideoStats()) || void 0 === t ? void 0 : t.inbound_bitrate_estimate_percentile99;
                    });
                    p.info('Setting bitrates', e), x(e), h(Date.now());
                }
            },
            [m, l]
        );
        let T = (0, r.useMemo)(() => 0 === f.length || (!f.some((e) => null == e || e < 3500000) && !0), [f]);
        return null != t && 0 === t.premiumTier && T && !E;
    },
    x = (e, t) => {
        let n = (0, i.e7)([u.default], () => {
                var e;
                return null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            r = (0, i.Wu)([s.Z], () => s.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n)),
            l = (0, h.j)(t),
            a = f(e);
        return l && a && r.length > 0;
    };
function T(e) {
    let [t, n, l] = (0, i.Wu)([m.Z], () => [m.Z.isFetchingPrice(e), m.Z.getPrice(e), m.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            !t && null == n && !l && (0, E.Gq)(e);
        }, [t, n, l, e]),
        {
            price: n,
            fetchingPrice: t,
            error: l
        }
    );
}
function _(e) {
    let [t, n, l, a] = (0, i.Wu)([m.Z], () => [m.Z.isEntitlementFetched(e), m.Z.isEntitlementFetching(e), m.Z.getEntitlement(e), m.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            !t && !n && (0, E.gA)(e);
        }, [t, n, e]),
        {
            entitlement: l,
            fetchedEntitlement: t,
            error: a
        }
    );
}
