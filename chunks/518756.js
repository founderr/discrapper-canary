n.d(e, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var i = n(442837),
    l = n(357156),
    u = n(984933),
    a = n(430824),
    r = n(496675),
    o = n(981631);
function d(t, e) {
    return (0, i.e7)(
        [a.Z, u.ZP, r.Z],
        () => {
            let n = a.Z.getGuild(t);
            if (r.Z.can(o.Plq.ADMINISTRATOR, n) || r.Z.can(o.Plq.CREATE_EVENTS, n)) return !0;
            for (let { channel: n } of u.ZP.getChannels(t)[u.Zb])
                if (null == e || n.type === e) {
                    let [t] = (0, l.Ob)(n);
                    if (r.Z.can(t, n)) return !0;
                }
            return !1;
        },
        [t, e]
    );
}
