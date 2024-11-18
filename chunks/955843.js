n.d(t, {
    J: function () {
        return x;
    },
    R2: function () {
        return C;
    },
    T$: function () {
        return E;
    },
    Uu: function () {
        return A;
    },
    Z7: function () {
        return T;
    },
    Zm: function () {
        return S;
    },
    t6: function () {
        return I;
    }
}),
    n(47120);
var r = n(192379),
    i = n(259443),
    o = n(442837),
    a = n(846027),
    l = n(569545),
    s = n(199902),
    c = n(430824),
    u = n(131951),
    d = n(158776),
    f = n(959457),
    p = n(594174),
    h = n(997323),
    _ = n(120619),
    v = n(215339),
    m = n(578976),
    b = n(37113);
let g = new i.Yd('HDStreamingConsumableModal'),
    E = (e) => {
        let t = (0, o.e7)([c.Z], () => c.Z.getGuild(e.guild_id)),
            n = (0, o.e7)([p.default], () => {
                var e;
                return null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            i = (0, o.Wu)([s.Z], () => s.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n)),
            a = i.some((e) => {
                let t = p.default.getUser(e.ownerId);
                return null != t && d.Z.isMobileOnline(t.id);
            }),
            [u, h] = (0, r.useState)(null),
            [_, v] = (0, r.useState)([]);
        (0, o.e7)(
            [f.Z],
            () => {
                if (null == u || Date.now() - u > 10000) {
                    let e = i.map((e) => {
                        var t;
                        let n = (0, l.V9)(e),
                            r = f.Z.getRTCConnection(n);
                        return null == r ? void 0 : null === (t = r.getVideoStats()) || void 0 === t ? void 0 : t.inbound_bitrate_estimate_percentile99;
                    });
                    g.info('Setting bitrates', e), v(e), h(Date.now());
                }
            },
            [u, i]
        );
        let m = (0, r.useMemo)(() => 0 === _.length || (!_.some((e) => null == e || e < 3500000) && !0), [_]);
        return null != t && 0 === t.premiumTier && m && !a;
    },
    S = (e, t) => {
        let n = (0, o.e7)([p.default], () => {
                var e;
                return null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            r = (0, o.Wu)([s.Z], () => s.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n)),
            i = (0, v.j)(t),
            a = E(e);
        return i && a && r.length > 0;
    };
function C(e) {
    let [t, n, i] = (0, o.Wu)([_.Z], () => [_.Z.isFetchingPrice(e), _.Z.getPrice(e), _.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            !t && null == n && !i && (0, h.Gq)(e);
        }, [t, n, i, e]),
        {
            price: n,
            fetchingPrice: t,
            error: i
        }
    );
}
function I(e) {
    let [t, n, i, a] = (0, o.Wu)([_.Z], () => [_.Z.isEntitlementFetched(e), _.Z.isEntitlementFetching(e), _.Z.getEntitlement(e), _.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            !t && !n && (0, h.gA)(e);
        }, [t, n, e]),
        {
            entitlement: i,
            fetchedEntitlement: t,
            error: a
        }
    );
}
function x(e, t) {
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
function A(e) {
    x(e, () => {
        let t = s.Z.getCurrentUserActiveStream();
        if (null != t && t.channelId === e.id) {
            let e = u.Z.getState().goLiveSource;
            (0, h.x8)(null == e ? void 0 : e.quality);
            let t = (0, m.s)(b.LY.RESOLUTION_1440, b.ws.FPS_60, e);
            a.Z.setGoLiveSource(t);
        }
    });
}
function T(e) {
    let t = (0, o.e7)([_.Z], () => _.Z.getPlayedAnimation());
    (0, r.useEffect)(() => {
        t && (e(), (0, h.LE)());
    }, [t, e]);
}
