n.d(e, {
    o: function () {
        return _;
    }
}),
    n(47120);
var i = n(192379),
    r = n(399606),
    l = n(823162),
    o = n(706454),
    E = n(914788),
    a = n(880257);
let u = new Set(['US']),
    s = new Set(['en-US', 'es-ES']),
    _ = () => {
        let t = (0, a.Z)(),
            e = (0, r.e7)([E.Z], () => E.Z.getUserCountry()),
            n = (0, r.e7)([o.default], () => o.default.locale);
        return (
            i.useEffect(() => {
                null == e && (0, l.hi)();
            }, [e]),
            !t && null != e && u.has(e.alpha2) && s.has(n)
        );
    };
