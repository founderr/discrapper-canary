n.d(t, {
    J: function () {
        return M;
    },
    QC: function () {
        return O;
    },
    R2: function () {
        return L;
    },
    T$: function () {
        return v;
    },
    Uu: function () {
        return R;
    },
    Zm: function () {
        return A;
    },
    mx: function () {
        return b;
    },
    t6: function () {
        return y;
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
    p = n(626135),
    C = n(997323),
    T = n(120619),
    h = n(215339),
    m = n(578976),
    I = n(981631),
    g = n(37113);
let N = new l.Yd('HDStreamingConsumableModal'),
    v = (e) => {
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
                    N.info('Setting bitrates', e), p(e), o(Date.now());
                }
            },
            [l, i]
        );
        let C = (0, r.useMemo)(() => 0 === E.length || (!E.some((e) => null == e || e < 3500000) && !0), [E]);
        return null != t && 0 === t.premiumTier && C && !u;
    },
    A = (e, t) => {
        let n = (0, s.e7)([_.default], () => {
                var e;
                return null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            r = (0, s.Wu)([d.Z], () => d.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n)),
            i = (0, h.j)(t),
            u = v(e);
        return i && u && r.length > 0;
    };
function L(e) {
    let [t, n, i] = (0, s.Wu)([T.Z], () => [T.Z.isFetchingPrice(e), T.Z.getPrice(e), T.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            !t && null == n && !i && (0, C.Gq)(e);
        }, [t, n, i, e]),
        {
            price: n,
            fetchingPrice: t,
            error: i
        }
    );
}
function y(e) {
    let [t, n, i, u] = (0, s.Wu)([T.Z], () => [T.Z.isEntitlementFetched(e), T.Z.isEntitlementFetching(e), T.Z.getEntitlement(e), T.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            !t && !n && (0, C.gA)(e);
        }, [t, n, e]),
        {
            entitlement: i,
            fetchedEntitlement: t,
            error: u
        }
    );
}
function M(e, t) {
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
function R(e) {
    M(e, () => {
        let t = d.Z.getCurrentUserActiveStream();
        if (null != t && t.channelId === e.id) {
            let e = E.Z.getState().goLiveSource;
            (0, C.x8)(null == e ? void 0 : e.quality);
            let t = (0, m.s)(g.LY.RESOLUTION_1440, g.ws.FPS_60, e);
            o.Z.setGoLiveSource(t);
        }
    });
}
function O() {
    var e;
    return 'safari' === (null !== (e = u().name) && void 0 !== e ? e : 'unknown').toLowerCase();
}
function b(e) {
    p.default.track(I.rMx.CONSUMABLE_HD_STREAMING_ENTRYPOINT, { location: e });
}
