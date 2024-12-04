n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var r = n(192379),
    i = n(442837),
    a = n(902704),
    s = n(158776),
    o = n(561308),
    l = n(231338);
function u(e) {
    let t = r.useRef(new Set()),
        n = r.useMemo(() => {
            let n = new Set(null == e ? void 0 : e.map((e) => e.author_id));
            return !(0, a.E)([...t.current], [...n]) && (t.current = n), t.current;
        }, [e]),
        u = (0, i.Wu)([s.Z], () =>
            Array.from(n).filter((e) => {
                let t = s.Z.getStatus(e);
                return null !== t && [l.Sk.OFFLINE, l.Sk.INVISIBLE].includes(t);
            })
        );
    return r.useMemo(() => {
        let t = new Set(u);
        return null == e ? void 0 : e.filter((e) => !(0, o.kr)(e) || !t.has(e.author_id));
    }, [e, u]);
}
