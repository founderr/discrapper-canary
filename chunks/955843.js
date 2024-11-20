n.d(t, {
    J: function () {
        return y;
    },
    QC: function () {
        return R;
    },
    R2: function () {
        return N;
    },
    T$: function () {
        return g;
    },
    Uu: function () {
        return L;
    },
    Zm: function () {
        return v;
    },
    t6: function () {
        return A;
    }
}),
    n(47120);
var r = n(192379),
    i = n(525654),
    u = n.n(i),
    l = n(259443),
    s = n(442837),
    o = n(846027),
    a = n(569545),
    d = n(199902),
    c = n(430824),
    E = n(131951),
    S = n(158776),
    f = n(959457),
    _ = n(594174),
    p = n(997323),
    C = n(120619),
    T = n(215339),
    h = n(578976),
    m = n(37113);
let I = new l.Yd('HDStreamingConsumableModal'),
    g = (e) => {
        let t = (0, s.e7)([c.Z], () => c.Z.getGuild(e.guild_id)),
            n = (0, s.e7)([_.default], () => {
                var e;
                return null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            i = (0, s.Wu)([d.Z], () => d.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n)),
            u = i.some((e) => {
                let t = _.default.getUser(e.ownerId);
                return null != t && S.Z.isMobileOnline(t.id);
            }),
            [l, o] = (0, r.useState)(null),
            [E, p] = (0, r.useState)([]);
        (0, s.e7)(
            [f.Z],
            () => {
                if (null == l || Date.now() - l > 10000) {
                    let e = i.map((e) => {
                        var t;
                        let n = (0, a.V9)(e),
                            r = f.Z.getRTCConnection(n);
                        return null == r ? void 0 : null === (t = r.getVideoStats()) || void 0 === t ? void 0 : t.inbound_bitrate_estimate_percentile99;
                    });
                    I.info('Setting bitrates', e), p(e), o(Date.now());
                }
            },
            [l, i]
        );
        let C = (0, r.useMemo)(() => 0 === E.length || (!E.some((e) => null == e || e < 3500000) && !0), [E]);
        return null != t && 0 === t.premiumTier && C && !u;
    },
    v = (e, t) => {
        let n = (0, s.e7)([_.default], () => {
                var e;
                return null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            r = (0, s.Wu)([d.Z], () => d.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n)),
            i = (0, T.j)(t),
            u = g(e);
        return i && u && r.length > 0;
    };
function N(e) {
    let [t, n, i] = (0, s.Wu)([C.Z], () => [C.Z.isFetchingPrice(e), C.Z.getPrice(e), C.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            !t && null == n && !i && (0, p.Gq)(e);
        }, [t, n, i, e]),
        {
            price: n,
            fetchingPrice: t,
            error: i
        }
    );
}
function A(e) {
    let [t, n, i, u] = (0, s.Wu)([C.Z], () => [C.Z.isEntitlementFetched(e), C.Z.isEntitlementFetching(e), C.Z.getEntitlement(e), C.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            !t && !n && (0, p.gA)(e);
        }, [t, n, e]),
        {
            entitlement: i,
            fetchedEntitlement: t,
            error: u
        }
    );
}
function y(e, t) {
    let n = (0, r.useRef)(!0),
        i = e.hdStreamingUntil;
    (0, r.useEffect)(() => {
        if (n.current) {
            n.current = !1;
            return;
        }
        if (null != i && new Date(i) > new Date()) return t();
    }, [i]);
}
function L(e) {
    y(e, () => {
        let t = d.Z.getCurrentUserActiveStream();
        if (null != t && t.channelId === e.id) {
            let e = E.Z.getState().goLiveSource;
            (0, p.x8)(null == e ? void 0 : e.quality);
            let t = (0, h.s)(m.LY.RESOLUTION_1440, m.ws.FPS_60, e);
            o.Z.setGoLiveSource(t);
        }
    });
}
function R() {
    var e;
    return 'safari' === (null !== (e = u().name) && void 0 !== e ? e : 'unknown').toLowerCase();
}
