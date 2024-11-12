n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var a = n(442837),
    l = n(357156),
    o = n(984933),
    r = n(430824),
    u = n(496675),
    i = n(981631);
function c(e, t) {
    return (0, a.e7)(
        [r.Z, o.ZP, u.Z],
        () => {
            let n = r.Z.getGuild(e);
            if (u.Z.can(i.Plq.ADMINISTRATOR, n) || u.Z.can(i.Plq.CREATE_EVENTS, n)) return !0;
            for (let { channel: n } of o.ZP.getChannels(e)[o.Zb])
                if (null == t || n.type === t) {
                    let [e] = (0, l.Ob)(n);
                    if (u.Z.can(e, n)) return !0;
                }
            return !1;
        },
        [e, t]
    );
}
