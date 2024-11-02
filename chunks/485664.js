e.d(n, {
    o: function () {
        return _;
    }
}),
    e(47120);
var i = e(192379),
    r = e(399606),
    l = e(823162),
    o = e(706454),
    E = e(914788),
    a = e(880257);
let u = new Set(['US']),
    s = new Set(['en-US', 'es-ES']),
    _ = () => {
        let t = (0, a.Z)(),
            n = (0, r.e7)([E.Z], () => E.Z.getUserCountry()),
            e = (0, r.e7)([o.default], () => o.default.locale);
        return (
            i.useEffect(() => {
                null == n && (0, l.hi)();
            }, [n]),
            !t && null != n && u.has(n.alpha2) && s.has(e)
        );
    };
