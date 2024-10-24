n.d(t, {
    P: function () {
        return c;
    }
}),
    n(47120);
var r = n(192379),
    s = n(979554),
    a = n(442837),
    i = n(597688),
    l = n(365943),
    o = n(25251);
let c = () => {
    let e = (0, a.e7)([i.Z], () => i.Z.products);
    r.useEffect(() => {
        let t = [...e.values()]
            .filter((e) => e.type === s.Z.PROFILE_EFFECT)
            .some((e) => {
                let t = e.items[0].id;
                return null != t && null == o.Z.getProfileEffectById(t);
            });
        (0, l.z)(t);
    }, [e]);
};
