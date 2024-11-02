n.d(t, {
    M: function () {
        return c;
    }
});
var i = n(192379),
    s = n(392711),
    r = n(399606),
    a = n(986197),
    l = n(654344),
    o = n(135200),
    u = n(346585);
let c = function (e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        d = (0, r.e7)([o.Z], () => o.Z.validate(e), [e]),
        m = (0, r.e7)([o.Z], () => o.Z.isRateLimited()),
        g = (0, l.c)(),
        E = i.useMemo(() => (0, s.debounce)((e) => a.Z.attemptPomelo(e, n ? 'registration' : 'modal', n, c), g), [g, n, c]);
    return (
        i.useEffect(() => {
            t && !m && null == d && '' !== e && E(e);
        }, [t, m, d, e, E]),
        i.useMemo(() => (null != d ? (0, u.ti)(d) : void 0), [d])
    );
};
