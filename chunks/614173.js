n.d(t, {
    h: function () {
        return c;
    }
}),
    n(47120);
var i = n(192379),
    s = n(442837),
    a = n(592125),
    l = n(700785),
    r = n(471253),
    o = n(981631);
function c(e) {
    let t = (0, s.e7)([a.Z], () => a.Z.getChannel(e), [e]),
        n = l.Uu(o.Plq.REQUEST_TO_SPEAK, t),
        [c, u] = i.useState(n);
    return (
        i.useEffect(() => {
            n !== c && u(n);
        }, [n]),
        [
            c,
            (e) => {
                null != t && (u(e), (0, r.Pq)(t, o.Plq.REQUEST_TO_SPEAK, e));
            }
        ]
    );
}
