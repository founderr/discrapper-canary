r.d(t, {
    P: function () {
        return c;
    }
}),
    r(47120);
var a = r(470079),
    n = r(979554),
    s = r(442837),
    i = r(597688),
    o = r(365943),
    l = r(25251);
let c = () => {
    let e = (0, s.e7)([i.Z], () => i.Z.products);
    a.useEffect(() => {
        let t = [...e.values()]
            .filter((e) => e.type === n.Z.PROFILE_EFFECT)
            .some((e) => {
                let t = e.items[0].id;
                return null != t && null == l.Z.getProfileEffectById(t);
            });
        (0, o.z)(t);
    }, [e]);
};
