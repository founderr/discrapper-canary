n.d(t, {
    Y0: function () {
        return u.Y0;
    },
    hz: function () {
        return u.hz;
    },
    mz: function () {
        return u.mz;
    },
    u_: function () {
        return c;
    },
    xB: function () {
        return u.xB;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(97613),
    o = n.n(a),
    s = n(952265),
    l = n(307616),
    u = n(466377);
function c(e) {
    let { renderModal: t, onCloseRequest: n, onCloseCallback: r } = e,
        [a] = i.useState(() => o()()),
        u = (0, l.v)();
    i.useLayoutEffect(
        () => (
            (0, s.h7)(
                t,
                {
                    modalKey: a,
                    onCloseRequest: n,
                    onCloseCallback: r
                },
                u
            ),
            () => {
                (0, s.Mr)(a, u);
            }
        ),
        []
    );
    let c = i.useRef(!0);
    return (
        i.useLayoutEffect(() => {
            !c.current && (0, s.o)(a, t, n, r, u), (c.current = !1);
        }, [t, n]),
        null
    );
}
