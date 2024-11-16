n.d(t, {
    T: function () {
        return h;
    },
    Z: function () {
        return f;
    }
}),
    n(47120);
var r = n(192379),
    i = n(259443),
    l = n(442837),
    a = n(569545),
    s = n(199902),
    o = n(430824),
    c = n(158776),
    d = n(959457),
    u = n(594174),
    E = n(215339);
let m = new i.Yd('HDStreamingConsumableModal'),
    h = (e) => {
        let t = (0, l.e7)([o.Z], () => o.Z.getGuild(e.guild_id)),
            n = (0, l.e7)([u.default], () => {
                var e;
                return null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            i = (0, l.e7)([s.Z], () => s.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n)),
            E = i.some((e) => {
                let t = u.default.getUser(e.ownerId);
                return null != t && c.Z.isMobileOnline(t.id);
            }),
            [h, f] = r.useState(null),
            [p, _] = r.useState([]);
        (0, l.e7)(
            [d.Z],
            () => {
                if (null == h || Date.now() - h > 10000) {
                    let e = i.map((e) => {
                        var t;
                        let n = (0, a.V9)(e),
                            r = d.Z.getRTCConnection(n);
                        return null == r ? void 0 : null === (t = r.getVideoStats()) || void 0 === t ? void 0 : t.inbound_bitrate_estimate_percentile99;
                    });
                    m.info('Setting bitrates', e), _(e), f(Date.now());
                }
            },
            [h, i]
        );
        let T = r.useMemo(() => {
            if (0 === p.length) return !0;
            if (p.some((e) => null == e)) return !1;
            for (let e of p) if (null == e || e < 3500000) return !1;
            return !0;
        }, [p]);
        return null != t && 0 === t.premiumTier && T && !E;
    },
    f = (e, t) => {
        let n = (0, l.e7)([u.default], () => {
                var e;
                return null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            r = (0, l.e7)([s.Z], () => s.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n)),
            i = (0, E.j)(t),
            a = h(e);
        return i && a && r.length > 0;
    };
