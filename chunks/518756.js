e.d(t, {
    Z: function () {
        return u;
    }
}),
    e(47120);
var i = e(442837),
    r = e(357156),
    l = e(984933),
    a = e(430824),
    d = e(496675),
    c = e(981631);
function u(n, t) {
    return (0, i.e7)(
        [a.Z, l.ZP, d.Z],
        () => {
            let e = a.Z.getGuild(n);
            if (d.Z.can(c.Plq.ADMINISTRATOR, e) || d.Z.can(c.Plq.CREATE_EVENTS, e)) return !0;
            for (let { channel: e } of l.ZP.getChannels(n)[l.Zb])
                if (null == t || e.type === t) {
                    let [n] = (0, r.Ob)(e);
                    if (d.Z.can(n, e)) return !0;
                }
            return !1;
        },
        [n, t]
    );
}
