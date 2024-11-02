e.d(n, {
    X: function () {
        return r;
    },
    h: function () {
        return a;
    }
}),
    e(757143),
    e(47120);
var o = e(192379),
    l = e(902676);
function a(t) {
    let { protocol: n, hostname: e } = o.useMemo(
            () => ({
                protocol: (0, l.E)(t),
                hostname: (0, l.F)(t)
            }),
            [t]
        ),
        a = ''.concat(n, '//').concat(e);
    return {
        protocol: n,
        hostname: e,
        theRestOfTheUrl: t.replace(a, '')
    };
}
function r(t) {
    let { url: n, trustUrl: e, onConfirm: l, onClose: r } = t,
        [i, s] = o.useState(!1),
        { protocol: c, hostname: d, theRestOfTheUrl: x } = a(n),
        u = o.useCallback(() => {
            i && e(n), null == r || r(), l();
        }, [n, i, e, l, r]);
    return {
        protocol: c,
        hostname: d,
        theRestOfTheUrl: x,
        shouldTrustUrl: i,
        setShouldTrustUrl: s,
        handleConfirm: u
    };
}
