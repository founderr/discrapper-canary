n.d(e, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(192379),
    l = n(442837),
    r = n(902704),
    o = n(158776),
    a = n(561308),
    s = n(231338);
function u(t) {
    let e = i.useRef(new Set()),
        n = i.useMemo(() => {
            let n = new Set(null == t ? void 0 : t.map((t) => t.author_id));
            return !(0, r.E)([...e.current], [...n]) && (e.current = n), e.current;
        }, [t]),
        u = (0, l.Wu)([o.Z], () =>
            Array.from(n).filter((t) => {
                let e = o.Z.getStatus(t);
                return null !== e && [s.Sk.OFFLINE, s.Sk.INVISIBLE].includes(e);
            })
        );
    return i.useMemo(() => {
        let e = new Set(u);
        return null == t ? void 0 : t.filter((t) => !(0, a.kr)(t) || !e.has(t.author_id));
    }, [t, u]);
}
