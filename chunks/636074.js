n.d(t, {
    r: function () {
        return c;
    }
});
var r = n(192379),
    i = n(298503),
    a = n(632590),
    s = n(283209),
    o = function () {},
    l = function () {
        return Promise.resolve(null);
    },
    u = [];
function c(e) {
    var t = e.placement,
        n = void 0 === t ? 'bottom' : t,
        c = e.strategy,
        d = void 0 === c ? 'absolute' : c,
        _ = e.modifiers,
        E = void 0 === _ ? u : _,
        f = e.referenceElement,
        h = e.onFirstUpdate,
        p = e.innerRef,
        I = e.children,
        m = r.useContext(i.C8),
        T = r.useState(null),
        S = T[0],
        g = T[1],
        A = r.useState(null),
        N = A[0],
        R = A[1];
    r.useEffect(
        function () {
            (0, a.k$)(p, S);
        },
        [p, S]
    );
    var O = r.useMemo(
            function () {
                return {
                    placement: n,
                    strategy: d,
                    onFirstUpdate: h,
                    modifiers: [].concat(E, [
                        {
                            name: 'arrow',
                            enabled: null != N,
                            options: { element: N }
                        }
                    ])
                };
            },
            [n, d, h, E, N]
        ),
        v = (0, s.D)(f || m, S, O),
        C = v.state,
        L = v.styles,
        D = v.forceUpdate,
        y = v.update,
        b = r.useMemo(
            function () {
                return {
                    ref: g,
                    style: L.popper,
                    placement: C ? C.placement : n,
                    hasPopperEscaped: C && C.modifiersData.hide ? C.modifiersData.hide.hasPopperEscaped : null,
                    isReferenceHidden: C && C.modifiersData.hide ? C.modifiersData.hide.isReferenceHidden : null,
                    arrowProps: {
                        style: L.arrow,
                        ref: R
                    },
                    forceUpdate: D || o,
                    update: y || l
                };
            },
            [g, R, n, C, L, y, D]
        );
    return (0, a.$p)(I)(b);
}
