n.d(t, {
    P: function () {
        return l;
    }
}),
    n(47120);
var r = n(470079),
    a = n(979554),
    s = n(442837),
    o = n(597688),
    i = n(365943),
    c = n(25251);
let l = () => {
    let e = (0, s.e7)([o.Z], () => o.Z.products);
    r.useEffect(() => {
        let t = [...e.values()]
            .filter((e) => e.type === a.Z.PROFILE_EFFECT)
            .some((e) => {
                let t = e.items[0].id;
                return null != t && null == c.Z.getProfileEffectById(t);
            });
        (0, i.z)(t);
    }, [e]);
};
