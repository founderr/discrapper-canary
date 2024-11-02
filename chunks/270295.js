n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120);
var i = n(192379),
    l = n(442837),
    r = n(314897),
    a = n(471253),
    s = n(590415);
function o(e) {
    let t = (0, l.e7)([r.default], () => r.default.getId()),
        n = (0, s.ZP)(t, e.id),
        o = n === s.xO.REQUESTED_TO_SPEAK || n === s.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
        [c, u] = i.useState(o);
    return (
        i.useEffect(() => {
            u(o);
        }, [o]),
        [
            c,
            function () {
                n === s.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ? (0, a.RK)(e, !0) : (0, a.Q1)(e, !c), u(!c);
            }
        ]
    );
}
