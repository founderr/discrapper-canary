n.d(t, {
    P: function () {
        return c;
    }
}),
    n(47120);
var a = n(470079),
    r = n(979554),
    s = n(442837),
    o = n(597688),
    i = n(365943),
    l = n(25251);
let c = () => {
    let e = (0, s.e7)([o.Z], () => o.Z.products);
    a.useEffect(() => {
        let t = [...e.values()]
            .filter((e) => e.type === r.Z.PROFILE_EFFECT)
            .some((e) => {
                let t = e.items[0].id;
                return null != t && null == l.Z.getProfileEffectById(t);
            });
        (0, i.z)(t);
    }, [e]);
};
