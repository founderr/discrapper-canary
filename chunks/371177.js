n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(192379),
    l = n(442837),
    a = n(902704),
    r = n(158776),
    o = n(561308),
    s = n(231338);
function u(e) {
    let t = i.useRef(new Set()),
        n = i.useMemo(() => {
            let n = new Set(null == e ? void 0 : e.map((e) => e.author_id));
            return !(0, a.E)([...t.current], [...n]) && (t.current = n), t.current;
        }, [e]),
        u = (0, l.Wu)([r.Z], () =>
            Array.from(n).filter((e) => {
                let t = r.Z.getStatus(e);
                return null !== t && [s.Sk.OFFLINE, s.Sk.INVISIBLE].includes(t);
            })
        );
    return i.useMemo(() => {
        let t = new Set(u);
        return null == e ? void 0 : e.filter((e) => !(0, o.kr)(e) || !t.has(e.author_id));
    }, [e, u]);
}
