n.d(t, {
    P: function () {
        return c;
    }
}),
    n(47120);
var r = n(192379),
    a = n(979554),
    i = n(442837),
    l = n(597688),
    s = n(365943),
    o = n(25251);
let c = () => {
    let e = (0, i.e7)([l.Z], () => l.Z.products);
    r.useEffect(() => {
        let t = [...e.values()]
            .filter((e) => e.type === a.Z.PROFILE_EFFECT)
            .some((e) => {
                let t = e.items[0].id;
                return null != t && null == o.Z.getProfileEffectById(t);
            });
        (0, s.z)(t);
    }, [e]);
};
