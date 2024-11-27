n.d(t, {
    J: function () {
        return M;
    },
    Ou: function () {
        return F;
    },
    R2: function () {
        return L;
    },
    T$: function () {
        return O;
    },
    Uu: function () {
        return Z;
    },
    Zm: function () {
        return R;
    },
    bK: function () {
        return b;
    },
    mx: function () {
        return U;
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
    o = n(442837),
    s = n(846027),
    d = n(607070),
    a = n(569545),
    c = n(199902),
    E = n(430824),
    S = n(131951),
    f = n(158776),
    _ = n(959457),
    p = n(594174),
    C = n(451478),
    T = n(626135),
    m = n(997323),
    I = n(120619),
    h = n(215339),
    v = n(578976),
    g = n(981631),
    N = n(37113);
let A = new l.Yd('HDStreamingConsumableModal'),
    O = (e) => {
        let t = (0, o.e7)([E.Z], () => E.Z.getGuild(null == e ? void 0 : e.guild_id)),
            n = (0, o.e7)([p.default], () => {
                var e;
                return null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            i = (0, o.Wu)([c.Z], () => (null == e ? [] : c.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n))),
            u = i.some((e) => {
                let t = p.default.getUser(e.ownerId);
                return null != t && f.Z.isMobileOnline(t.id);
            }),
            [l, s] = (0, r.useState)(null),
            [d, S] = (0, r.useState)([]);
        (0, o.e7)(
            [_.Z],
            () => {
                if (null == l || Date.now() - l > 10000) {
                    let e = i.map((e) => {
                        var t;
                        let n = (0, a.V9)(e),
                            r = _.Z.getRTCConnection(n);
                        return null == r ? void 0 : null === (t = r.getVideoStats()) || void 0 === t ? void 0 : t.inbound_bitrate_estimate_percentile99;
                    });
                    A.info('Setting bitrates', e), S(e), s(Date.now());
                }
            },
            [l, i]
        );
        let C = (0, r.useMemo)(() => 0 === d.length || (!d.some((e) => null == e || e < 3500000) && !0), [d]),
            T = (null == t ? void 0 : t.premiumTier) === g.Eu4.NONE || (null == t ? void 0 : t.premiumTier) === g.Eu4.TIER_1;
        return T && C && !u;
    },
    R = (e, t) => {
        let n = (0, o.e7)([p.default], () => {
                var e;
                return null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            r = (0, o.Wu)([c.Z], () => (null == e ? [] : c.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n))),
            i = (0, h.j)(t),
            u = O(e);
        return i && u && r.length > 0;
    };
function L(e) {
    let [t, n, i] = (0, o.Wu)([I.Z], () => [I.Z.isFetchingPrice(e), I.Z.getPrice(e), I.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            !t && null == n && !i && (0, m.Gq)(e);
        }, [t, n, i, e]),
        {
            price: n,
            fetchingPrice: t,
            error: i
        }
    );
}
function y(e) {
    let [t, n, i, u] = (0, o.Wu)([I.Z], () => [I.Z.isEntitlementFetched(e), I.Z.isEntitlementFetching(e), I.Z.getEntitlement(e), I.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            !t && !n && (0, m.gA)(e);
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
    M(e, () => {
        let t = c.Z.getCurrentUserActiveStream();
        if (null != t && t.channelId === e.id) {
            let e = S.Z.getState().goLiveSource;
            (0, m.x8)(null == e ? void 0 : e.quality);
            let t = (0, v.s)(N.LY.RESOLUTION_1440, N.ws.FPS_60, e);
            s.Z.setGoLiveSource(t);
        }
    });
}
function b() {
    var e;
    let t = (null !== (e = u().name) && void 0 !== e ? e : 'unknown').toLowerCase(),
        n = (0, o.e7)([C.Z], () => C.Z.isFocused()),
        r = (0, o.e7)([d.Z], () => d.Z.useReducedMotion);
    return 'safari' === t || !n || r;
}
function U(e) {
    T.default.track(g.rMx.CONSUMABLE_HD_STREAMING_ENTRYPOINT, { location: e });
}
function F(e) {
    let t = (0, o.e7)([E.Z], () => E.Z.getGuild(null == e ? void 0 : e.guild_id)),
        n = (0, h.j)('VoiceEffectsActionBar');
    return ((null == t ? void 0 : t.premiumTier) === g.Eu4.NONE || (null == t ? void 0 : t.premiumTier) === g.Eu4.TIER_1) && (null == e ? void 0 : e.type) === g.d4z.GUILD_VOICE && !(null == e ? void 0 : e.isHDStreamSplashed) && n;
}
