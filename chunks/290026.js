r.d(t, {
    P: function () {
        return c;
    }
}),
    r(47120);
var s = r(192379),
    n = r(979554),
    a = r(442837),
    i = r(597688),
    l = r(365943),
    o = r(25251);
let c = () => {
    let e = (0, a.e7)([i.Z], () => i.Z.products);
    s.useEffect(() => {
        let t = [...e.values()]
            .filter((e) => e.type === n.Z.PROFILE_EFFECT)
            .some((e) => {
                let t = e.items[0].id;
                return null != t && null == o.Z.getProfileEffectById(t);
            });
        (0, l.z)(t);
    }, [e]);
};
