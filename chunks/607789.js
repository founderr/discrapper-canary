var r = n(47120);
var i = n(724458);
var a = n(470079),
    o = n(442837),
    s = n(25251),
    l = n(731896);
let u = (e) => {
    let [t, n] = a.useState(e),
        [r, i] = a.useState(s.Z.getProfileEffectById(e));
    (0, l.V)(e);
    let u = (0, o.e7)([s.Z], () => s.Z.profileEffects),
        c = u.reduce((t, n, r) => (n.id === e && (t = r), t), 0),
        [, d] = a.useState(c),
        _ = a.useRef(c);
    return (
        a.useEffect(() => {
            n(e), i(s.Z.getProfileEffectById(e));
        }, [e, u]),
        {
            increment: () => {
                let e = (_.current + 1) % u.length;
                (_.current = e), d(e), n(u[e].id), i(u[e]);
            },
            decrement: () => {
                let e = 0 === _.current ? u.length - 1 : _.current - 1;
                (_.current = e), d(e), n(u[e].id), i(u[e]);
            },
            id: t,
            preset: r
        }
    );
};
t.Z = u;
