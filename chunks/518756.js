t.d(n, {
    Z: function () {
        return s;
    }
}),
    t(47120);
var a = t(442837),
    i = t(357156),
    r = t(984933),
    o = t(430824),
    c = t(496675),
    l = t(981631);
function s(e, n) {
    return (0, a.e7)(
        [o.Z, r.ZP, c.Z],
        () => {
            let t = o.Z.getGuild(e);
            if (c.Z.can(l.Plq.ADMINISTRATOR, t) || c.Z.can(l.Plq.CREATE_EVENTS, t)) return !0;
            for (let { channel: t } of r.ZP.getChannels(e)[r.Zb])
                if (null == n || t.type === n) {
                    let [e] = (0, i.Ob)(t);
                    if (c.Z.can(e, t)) return !0;
                }
            return !1;
        },
        [e, n]
    );
}
