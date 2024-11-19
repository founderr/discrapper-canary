a.d(t, {
    Z: function () {
        return d;
    }
}),
    a(47120);
var n = a(442837),
    r = a(357156),
    o = a(984933),
    i = a(430824),
    c = a(496675),
    l = a(981631);
function d(e, t) {
    return (0, n.e7)(
        [i.Z, o.ZP, c.Z],
        () => {
            let a = i.Z.getGuild(e);
            if (c.Z.can(l.Plq.ADMINISTRATOR, a) || c.Z.can(l.Plq.CREATE_EVENTS, a)) return !0;
            for (let { channel: a } of o.ZP.getChannels(e)[o.Zb])
                if (null == t || a.type === t) {
                    let [e] = (0, r.Ob)(a);
                    if (c.Z.can(e, a)) return !0;
                }
            return !1;
        },
        [e, t]
    );
}
