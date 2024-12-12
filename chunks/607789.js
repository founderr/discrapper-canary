var i = r(47120);
var a = r(724458);
var s = r(192379),
    o = r(442837),
    l = r(25251),
    u = r(731896);
let c = (e) => {
    let [n, r] = s.useState(e),
        [i, a] = s.useState(l.Z.getProfileEffectById(e));
    (0, u.V)(e);
    let c = (0, o.e7)([l.Z], () => l.Z.profileEffects),
        d = c.reduce((n, r, i) => (r.id === e && (n = i), n), 0),
        [, f] = s.useState(d),
        _ = s.useRef(d);
    return (
        s.useEffect(() => {
            r(e), a(l.Z.getProfileEffectById(e));
        }, [e, c]),
        {
            increment: () => {
                let e = (_.current + 1) % c.length;
                (_.current = e), f(e), r(c[e].id), a(c[e]);
            },
            decrement: () => {
                let e = 0 === _.current ? c.length - 1 : _.current - 1;
                (_.current = e), f(e), r(c[e].id), a(c[e]);
            },
            id: n,
            preset: i
        }
    );
};
n.Z = c;
