n.d(t, {
    J: function () {
        return L;
    },
    R2: function () {
        return w;
    },
    T$: function () {
        return A;
    },
    Uu: function () {
        return Z;
    },
    Zm: function () {
        return N;
    },
    bK: function () {
        return M;
    },
    mx: function () {
        return j;
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
    u = n(607070),
    c = n(569545),
    d = n(199902),
    f = n(430824),
    _ = n(131951),
    p = n(158776),
    m = n(959457),
    h = n(594174),
    v = n(451478),
    E = n(626135),
    b = n(997323),
    g = n(120619),
    S = n(215339),
    C = n(578976),
    I = n(981631),
    x = n(37113);
let T = new a.Yd('HDStreamingConsumableModal'),
    A = (e) => {
        let t = (0, l.e7)([f.Z], () => f.Z.getGuild(e.guild_id)),
            n = (0, l.e7)([h.default], () => {
                var e;
                return null === (e = h.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            i = (0, l.Wu)([d.Z], () => d.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n)),
            o = i.some((e) => {
                let t = h.default.getUser(e.ownerId);
                return null != t && p.Z.isMobileOnline(t.id);
            }),
            [a, s] = (0, r.useState)(null),
            [u, _] = (0, r.useState)([]);
        (0, l.e7)(
            [m.Z],
            () => {
                if (null == a || Date.now() - a > 10000) {
                    let e = i.map((e) => {
                        var t;
                        let n = (0, c.V9)(e),
                            r = m.Z.getRTCConnection(n);
                        return null == r ? void 0 : null === (t = r.getVideoStats()) || void 0 === t ? void 0 : t.inbound_bitrate_estimate_percentile99;
                    });
                    T.info('Setting bitrates', e), _(e), s(Date.now());
                }
            },
            [a, i]
        );
        let v = (0, r.useMemo)(() => 0 === u.length || (!u.some((e) => null == e || e < 3500000) && !0), [u]);
        return null != t && 0 === t.premiumTier && v && !o;
    },
    N = (e, t) => {
        let n = (0, l.e7)([h.default], () => {
                var e;
                return null === (e = h.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            r = (0, l.Wu)([d.Z], () => d.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n)),
            i = (0, S.j)(t),
            o = A(e);
        return i && o && r.length > 0;
    };
function w(e) {
    let [t, n, i] = (0, l.Wu)([g.Z], () => [g.Z.isFetchingPrice(e), g.Z.getPrice(e), g.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            !t && null == n && !i && (0, b.Gq)(e);
        }, [t, n, i, e]),
        {
            price: n,
            fetchingPrice: t,
            error: i
        }
    );
}
function y(e) {
    let [t, n, i, o] = (0, l.Wu)([g.Z], () => [g.Z.isEntitlementFetched(e), g.Z.isEntitlementFetching(e), g.Z.getEntitlement(e), g.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            !t && !n && (0, b.gA)(e);
        }, [t, n, e]),
        {
            entitlement: i,
            fetchedEntitlement: t,
            error: o
        }
    );
}
function L(e, t) {
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
function Z(e) {
    L(e, () => {
        let t = d.Z.getCurrentUserActiveStream();
        if (null != t && t.channelId === e.id) {
            let e = _.Z.getState().goLiveSource;
            (0, b.x8)(null == e ? void 0 : e.quality);
            let t = (0, C.s)(x.LY.RESOLUTION_1440, x.ws.FPS_60, e);
            s.Z.setGoLiveSource(t);
        }
    });
}
function M() {
    var e;
    let t = (null !== (e = o().name) && void 0 !== e ? e : 'unknown').toLowerCase(),
        n = (0, l.e7)([v.Z], () => v.Z.isFocused()),
        r = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
    return 'safari' === t || !n || r;
}
function j(e) {
    E.default.track(I.rMx.CONSUMABLE_HD_STREAMING_ENTRYPOINT, { location: e });
}
