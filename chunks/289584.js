t.d(n, {
    Z: function () {
        return m;
    }
}),
    t(47120);
var l = t(192379),
    i = t(749210),
    a = t(287734),
    r = t(881052),
    o = t(142497),
    s = t(570188),
    c = t(471253),
    d = t(427679),
    u = t(190378);
function m(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        [m, x] = l.useState(!1),
        [h, f] = l.useState(null),
        g = l.useMemo(() => d.Z.getStageInstanceByChannel(null == e ? void 0 : e.id), [null == e ? void 0 : e.id]),
        v = (0, s.J)(e);
    return {
        loading: m,
        error: h,
        onSave: async (l) => {
            let { topic: s, privacyLevel: d, sendStartNotification: m } = l;
            if (null != e && '' !== s && null != d) {
                x(!0), f(null), null != t && (i.Z.selectGuild(t), a.default.selectVoiceChannel(e.id));
                try {
                    let t;
                    null != g ? (t = await c.Ef(e, s, d)) : ((t = await c.HO(e, s, d, null != m && m)), v && o.Kw(u.v.LIVE_STAGE_NOTIFICATION_BADGE)), n(t);
                } catch (e) {
                    f(new r.Hx(e)), x(!1);
                }
            }
        }
    };
}
