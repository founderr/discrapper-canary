n.d(t, {
    M: function () {
        return d;
    }
});
var s = n(470079),
    i = n(392711),
    a = n(399606),
    r = n(986197),
    o = n(654344),
    l = n(135200),
    u = n(346585);
let d = function (e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        c = (0, a.e7)([l.Z], () => l.Z.validate(e), [e]),
        E = (0, a.e7)([l.Z], () => l.Z.isRateLimited()),
        _ = (0, o.c)(),
        m = s.useMemo(() => (0, i.debounce)((e) => r.Z.attemptPomelo(e, n ? 'registration' : 'modal', n, d), _), [_, n, d]);
    return (
        s.useEffect(() => {
            t && !E && null == c && '' !== e && m(e);
        }, [t, E, c, e, m]),
        s.useMemo(() => (null != c ? (0, u.ti)(c) : void 0), [c])
    );
};
