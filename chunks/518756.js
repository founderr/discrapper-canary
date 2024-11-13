t.d(n, {
    Z: function () {
        return u;
    }
}),
    t(47120);
var i = t(442837),
    a = t(357156),
    r = t(984933),
    o = t(430824),
    l = t(496675),
    c = t(981631);
function u(e, n) {
    return (0, i.e7)(
        [o.Z, r.ZP, l.Z],
        () => {
            let t = o.Z.getGuild(e);
            if (l.Z.can(c.Plq.ADMINISTRATOR, t) || l.Z.can(c.Plq.CREATE_EVENTS, t)) return !0;
            for (let { channel: t } of r.ZP.getChannels(e)[r.Zb])
                if (null == n || t.type === n) {
                    let [e] = (0, a.Ob)(t);
                    if (l.Z.can(e, t)) return !0;
                }
            return !1;
        },
        [e, n]
    );
}
