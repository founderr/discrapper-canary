s.d(t, {
    P: function () {
        return c;
    }
}),
    s(47120);
var a = s(470079),
    r = s(979554),
    n = s(442837),
    i = s(597688),
    l = s(365943),
    o = s(25251);
let c = () => {
    let e = (0, n.e7)([i.Z], () => i.Z.products);
    a.useEffect(() => {
        let t = [...e.values()]
            .filter((e) => e.type === r.Z.PROFILE_EFFECT)
            .some((e) => {
                let t = e.items[0].id;
                return null != t && null == o.Z.getProfileEffectById(t);
            });
        (0, l.z)(t);
    }, [e]);
};
