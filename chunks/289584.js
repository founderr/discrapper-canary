t.d(n, {
    Z: function () {
        return _;
    }
}),
    t(47120);
var s = t(470079),
    a = t(749210),
    l = t(287734),
    i = t(881052),
    r = t(142497),
    o = t(570188),
    c = t(471253),
    d = t(427679),
    u = t(190378);
function _(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        [_, E] = s.useState(!1),
        [x, m] = s.useState(null),
        h = s.useMemo(() => d.Z.getStageInstanceByChannel(null == e ? void 0 : e.id), [null == e ? void 0 : e.id]),
        I = (0, o.J)(e);
    return {
        loading: _,
        error: x,
        onSave: async (s) => {
            let { topic: o, privacyLevel: d, sendStartNotification: _ } = s;
            if (null != e && '' !== o && null != d) {
                E(!0), m(null), null != t && (a.Z.selectGuild(t), l.default.selectVoiceChannel(e.id));
                try {
                    let t;
                    null != h ? (t = await c.Ef(e, o, d)) : ((t = await c.HO(e, o, d, null != _ && _)), I && r.Kw(u.v.LIVE_STAGE_NOTIFICATION_BADGE)), n(t);
                } catch (e) {
                    m(new i.Hx(e)), E(!1);
                }
            }
        }
    };
}
