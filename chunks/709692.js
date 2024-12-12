r.d(n, {
    Y0: function () {
        return c.Y0;
    },
    hz: function () {
        return c.hz;
    },
    mz: function () {
        return c.mz;
    },
    u_: function () {
        return d;
    },
    xB: function () {
        return c.xB;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(97613),
    o = r.n(s),
    l = r(952265),
    u = r(307616),
    c = r(466377);
function d(e) {
    let { renderModal: n, onCloseRequest: r, onCloseCallback: i } = e,
        [s] = a.useState(() => o()()),
        c = (0, u.v)();
    a.useLayoutEffect(
        () => (
            (0, l.h7)(
                n,
                {
                    modalKey: s,
                    onCloseRequest: r,
                    onCloseCallback: i
                },
                c
            ),
            () => {
                (0, l.Mr)(s, c);
            }
        ),
        []
    );
    let d = a.useRef(!0);
    return (
        a.useLayoutEffect(() => {
            !d.current && (0, l.o)(s, n, r, i, c), (d.current = !1);
        }, [n, r]),
        null
    );
}
