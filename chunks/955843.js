t.d(n, {
    T: function () {
        return x;
    },
    Z: function () {
        return g;
    }
}),
    t(47120);
var l = t(192379),
    i = t(259443),
    r = t(442837),
    s = t(569545),
    a = t(199902),
    o = t(430824),
    d = t(158776),
    c = t(959457),
    u = t(594174),
    m = t(215339);
let h = new i.Yd('HDStreamingConsumableModal'),
    x = (e) => {
        let n = (0, r.e7)([o.Z], () => o.Z.getGuild(e.guild_id)),
            t = (0, r.e7)([u.default], () => {
                var e;
                return null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            i = (0, r.e7)([a.Z], () => a.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== t)),
            m = i.some((e) => {
                let n = u.default.getUser(e.ownerId);
                return null != n && d.Z.isMobileOnline(n.id);
            }),
            [x, g] = l.useState(null),
            [f, v] = l.useState([]);
        (0, r.e7)(
            [c.Z],
            () => {
                if (null == x || Date.now() - x > 10000) {
                    let e = i.map((e) => {
                        var n;
                        let t = (0, s.V9)(e),
                            l = c.Z.getRTCConnection(t);
                        return null == l ? void 0 : null === (n = l.getVideoStats()) || void 0 === n ? void 0 : n.inbound_bitrate_estimate_percentile99;
                    });
                    h.info('Setting bitrates', e), v(e), g(Date.now());
                }
            },
            [x, i]
        );
        let j = l.useMemo(() => {
            if (0 === f.length) return !0;
            if (f.some((e) => null == e)) return !1;
            for (let e of f) if (null == e || e < 3500000) return !1;
            return !0;
        }, [f]);
        return null != n && 0 === n.premiumTier && j && !m;
    },
    g = (e, n) => {
        let t = (0, r.e7)([u.default], () => {
                var e;
                return null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            l = (0, r.e7)([a.Z], () => a.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== t)),
            i = (0, m.j)(n),
            s = x(e);
        return i && s && l.length > 0;
    };
