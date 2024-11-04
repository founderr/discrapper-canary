n.d(t, {
    h: function () {
        return c;
    }
}),
    n(47120);
var i = n(192379),
    l = n(442837),
    r = n(592125),
    s = n(700785),
    a = n(471253),
    o = n(981631);
function c(e) {
    let t = (0, l.e7)([r.Z], () => r.Z.getChannel(e), [e]),
        n = s.Uu(o.Plq.REQUEST_TO_SPEAK, t),
        [c, u] = i.useState(n);
    return (
        i.useEffect(() => {
            n !== c && u(n);
        }, [n]),
        [
            c,
            (e) => {
                null != t && (u(e), (0, a.Pq)(t, o.Plq.REQUEST_TO_SPEAK, e));
            }
        ]
    );
}
