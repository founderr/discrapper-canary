e.d(n, {
    Q: function () {
        return c;
    },
    T: function () {
        return a;
    }
});
var l = e(442837),
    i = e(592125),
    o = e(700785),
    s = e(924301),
    r = e(765305),
    u = e(981631);
function c(t, n) {
    return o.Uu(u.Plq.VIEW_CHANNEL, t) || n === r.WX.EXTERNAL;
}
function a(t, n) {
    return (0, l.e7)(
        [i.Z, s.ZP],
        () => {
            let e = i.Z.getChannel(t),
                l = s.ZP.getGuildScheduledEvent(n);
            return c(e, null == l ? void 0 : l.entity_type);
        },
        [t, n]
    );
}
