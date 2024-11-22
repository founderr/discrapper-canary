n.d(t, {
    J: function () {
        return M;
    },
    R2: function () {
        return w;
    },
    T$: function () {
        return A;
    },
    Uu: function () {
        return O;
    },
    Zm: function () {
        return N;
    },
    bK: function () {
        return R;
    },
    mx: function () {
        return L;
    },
    t6: function () {
        return y;
    }
}),
    n(47120);
var r = n(192379),
    i = n(525654),
    o = n.n(i),
    a = n(259443),
    l = n(442837),
    s = n(846027),
    c = n(607070),
    u = n(569545),
    d = n(199902),
    f = n(430824),
    p = n(131951),
    h = n(158776),
    v = n(959457),
    _ = n(594174),
    m = n(451478),
    b = n(626135),
    g = n(997323),
    E = n(120619),
    C = n(215339),
    S = n(578976),
    I = n(981631),
    x = n(37113);
let T = new a.Yd('HDStreamingConsumableModal'),
    A = (e) => {
        let t = (0, l.e7)([f.Z], () => f.Z.getGuild(e.guild_id)),
            n = (0, l.e7)([_.default], () => {
                var e;
                return null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            i = (0, l.Wu)([d.Z], () => d.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n)),
            o = i.some((e) => {
                let t = _.default.getUser(e.ownerId);
                return null != t && h.Z.isMobileOnline(t.id);
            }),
            [a, s] = (0, r.useState)(null),
            [c, p] = (0, r.useState)([]);
        (0, l.e7)(
            [v.Z],
            () => {
                if (null == a || Date.now() - a > 10000) {
                    let e = i.map((e) => {
                        var t;
                        let n = (0, u.V9)(e),
                            r = v.Z.getRTCConnection(n);
                        return null == r ? void 0 : null === (t = r.getVideoStats()) || void 0 === t ? void 0 : t.inbound_bitrate_estimate_percentile99;
                    });
                    T.info('Setting bitrates', e), p(e), s(Date.now());
                }
            },
            [a, i]
        );
        let m = (0, r.useMemo)(() => 0 === c.length || (!c.some((e) => null == e || e < 3500000) && !0), [c]);
        return null != t && 0 === t.premiumTier && m && !o;
    },
    N = (e, t) => {
        let n = (0, l.e7)([_.default], () => {
                var e;
                return null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            r = (0, l.Wu)([d.Z], () => d.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n)),
            i = (0, C.j)(t),
            o = A(e);
        return i && o && r.length > 0;
    };
function w(e) {
    let [t, n, i] = (0, l.Wu)([E.Z], () => [E.Z.isFetchingPrice(e), E.Z.getPrice(e), E.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            !t && null == n && !i && (0, g.Gq)(e);
        }, [t, n, i, e]),
        {
            price: n,
            fetchingPrice: t,
            error: i
        }
    );
}
function y(e) {
    let [t, n, i, o] = (0, l.Wu)([E.Z], () => [E.Z.isEntitlementFetched(e), E.Z.isEntitlementFetching(e), E.Z.getEntitlement(e), E.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            !t && !n && (0, g.gA)(e);
        }, [t, n, e]),
        {
            entitlement: i,
            fetchedEntitlement: t,
            error: o
        }
    );
}
function M(e, t) {
    let n = (0, r.useRef)(!0),
        i = null == e ? void 0 : e.hdStreamingUntil;
    (0, r.useEffect)(() => {
        if (n.current) {
            n.current = !1;
            return;
        }
        if (null != i && new Date(i) > new Date()) return t();
    }, [i]);
}
function O(e) {
    M(e, () => {
        let t = d.Z.getCurrentUserActiveStream();
        if (null != t && t.channelId === e.id) {
            let e = p.Z.getState().goLiveSource;
            (0, g.x8)(null == e ? void 0 : e.quality);
            let t = (0, S.s)(x.LY.RESOLUTION_1440, x.ws.FPS_60, e);
            s.Z.setGoLiveSource(t);
        }
    });
}
function R() {
    var e;
    let t = (null !== (e = o().name) && void 0 !== e ? e : 'unknown').toLowerCase(),
        n = (0, l.e7)([m.Z], () => m.Z.isFocused()),
        r = (0, l.e7)([c.Z], () => c.Z.useReducedMotion);
    return 'safari' === t || !n || r;
}
function L(e) {
    b.default.track(I.rMx.CONSUMABLE_HD_STREAMING_ENTRYPOINT, { location: e });
}
