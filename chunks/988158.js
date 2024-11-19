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
    let { url: n, trustUrl: e, onConfirm: l, onCancel: r, onClose: i } = t,
        [c, s] = o.useState(!1),
        { protocol: d, hostname: u, theRestOfTheUrl: x } = a(n),
        h = o.useCallback(() => {
            c && e(n), null == i || i(), l();
        }, [n, c, e, l, i]);
    return {
        protocol: d,
        hostname: u,
        theRestOfTheUrl: x,
        shouldTrustUrl: c,
        setShouldTrustUrl: s,
        handleConfirm: h,
        handleCancel: o.useCallback(() => {
            null == i || i(), r();
        }, [r, i])
    };
}
