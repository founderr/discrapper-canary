n.d(t, {
    T: function () {
        return h;
    },
    Z: function () {
        return f;
    }
}),
    n(47120);
var i = n(192379),
    r = n(259443),
    l = n(442837),
    a = n(569545),
    o = n(199902),
    s = n(430824),
    c = n(959457),
    d = n(594174),
    u = n(215339);
let m = new r.Yd('HDStreamingConsumableModal'),
    h = (e) => {
        let t = (0, l.e7)([s.Z], () => s.Z.getGuild(e.guild_id)),
            n = (0, l.e7)([d.default], () => {
                var e;
                return null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            r = (0, l.e7)([o.Z], () => o.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n)),
            [u, h] = i.useState(null),
            [f, p] = i.useState([]);
        (0, l.e7)(
            [c.Z],
            () => {
                if (null == u || Date.now() - u > 10000) {
                    let e = r.map((e) => {
                        var t;
                        let n = (0, a.V9)(e),
                            i = c.Z.getRTCConnection(n);
                        return null == i ? void 0 : null === (t = i.getVideoStats()) || void 0 === t ? void 0 : t.inbound_bitrate_estimate_percentile99;
                    });
                    m.info('Setting bitrates', e), p(e), h(Date.now());
                }
            },
            [u, r]
        );
        let _ = i.useMemo(() => {
            if (0 === f.length) return !0;
            if (f.some((e) => null == e)) return !1;
            for (let e of f) if (null == e || e < 3500000) return !1;
            return !0;
        }, [f]);
        return null != t && 0 === t.premiumTier && _;
    },
    f = (e, t) => {
        let n = (0, l.e7)([d.default], () => {
                var e;
                return null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            i = (0, l.e7)([o.Z], () => o.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n)),
            r = (0, u.j)(t),
            a = h(e);
        return r && a && i.length > 0;
    };
