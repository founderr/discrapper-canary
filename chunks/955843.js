n.d(t, {
    J: function () {
        return T;
    },
    QC: function () {
        return y;
    },
    R2: function () {
        return x;
    },
    T$: function () {
        return S;
    },
    Uu: function () {
        return N;
    },
    Z7: function () {
        return w;
    },
    Zm: function () {
        return I;
    },
    t6: function () {
        return A;
    }
}),
    n(47120);
var r = n(192379),
    i = n(525654),
    o = n.n(i),
    a = n(259443),
    l = n(442837),
    s = n(846027),
    c = n(569545),
    u = n(199902),
    d = n(430824),
    f = n(131951),
    p = n(158776),
    h = n(959457),
    v = n(594174),
    _ = n(997323),
    m = n(120619),
    b = n(215339),
    g = n(578976),
    E = n(37113);
let C = new a.Yd('HDStreamingConsumableModal'),
    S = (e) => {
        let t = (0, l.e7)([d.Z], () => d.Z.getGuild(e.guild_id)),
            n = (0, l.e7)([v.default], () => {
                var e;
                return null === (e = v.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            i = (0, l.Wu)([u.Z], () => u.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n)),
            o = i.some((e) => {
                let t = v.default.getUser(e.ownerId);
                return null != t && p.Z.isMobileOnline(t.id);
            }),
            [a, s] = (0, r.useState)(null),
            [f, _] = (0, r.useState)([]);
        (0, l.e7)(
            [h.Z],
            () => {
                if (null == a || Date.now() - a > 10000) {
                    let e = i.map((e) => {
                        var t;
                        let n = (0, c.V9)(e),
                            r = h.Z.getRTCConnection(n);
                        return null == r ? void 0 : null === (t = r.getVideoStats()) || void 0 === t ? void 0 : t.inbound_bitrate_estimate_percentile99;
                    });
                    C.info('Setting bitrates', e), _(e), s(Date.now());
                }
            },
            [a, i]
        );
        let m = (0, r.useMemo)(() => 0 === f.length || (!f.some((e) => null == e || e < 3500000) && !0), [f]);
        return null != t && 0 === t.premiumTier && m && !o;
    },
    I = (e, t) => {
        let n = (0, l.e7)([v.default], () => {
                var e;
                return null === (e = v.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            r = (0, l.Wu)([u.Z], () => u.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n)),
            i = (0, b.j)(t),
            o = S(e);
        return i && o && r.length > 0;
    };
function x(e) {
    let [t, n, i] = (0, l.Wu)([m.Z], () => [m.Z.isFetchingPrice(e), m.Z.getPrice(e), m.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            !t && null == n && !i && (0, _.Gq)(e);
        }, [t, n, i, e]),
        {
            price: n,
            fetchingPrice: t,
            error: i
        }
    );
}
function A(e) {
    let [t, n, i, o] = (0, l.Wu)([m.Z], () => [m.Z.isEntitlementFetched(e), m.Z.isEntitlementFetching(e), m.Z.getEntitlement(e), m.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            !t && !n && (0, _.gA)(e);
        }, [t, n, e]),
        {
            entitlement: i,
            fetchedEntitlement: t,
            error: o
        }
    );
}
function T(e, t) {
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
function N(e) {
    T(e, () => {
        let t = u.Z.getCurrentUserActiveStream();
        if (null != t && t.channelId === e.id) {
            let e = f.Z.getState().goLiveSource;
            (0, _.x8)(null == e ? void 0 : e.quality);
            let t = (0, g.s)(E.LY.RESOLUTION_1440, E.ws.FPS_60, e);
            s.Z.setGoLiveSource(t);
        }
    });
}
function w(e) {
    let t = (0, l.e7)([m.Z], () => m.Z.getPlayedAnimation());
    (0, r.useEffect)(() => {
        t && (e(), (0, _.LE)());
    }, [t, e]);
}
function y() {
    var e;
    return 'safari' === (null !== (e = o().name) && void 0 !== e ? e : 'unknown').toLowerCase();
}
