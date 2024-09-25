n.d(t, {
    r: function () {
        return c;
    }
});
var r = n(470079),
    i = n(234366),
    a = n(705942),
    o = n(566833),
    s = function () {},
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
        m = e.children,
        I = r.useContext(i.C8),
        T = r.useState(null),
        g = T[0],
        S = T[1],
        A = r.useState(null),
        v = A[0],
        N = A[1];
    r.useEffect(
        function () {
            (0, a.k$)(p, g);
        },
        [p, g]
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
                            enabled: null != v,
                            options: { element: v }
                        }
                    ])
                };
            },
            [n, d, h, E, v]
        ),
        R = (0, o.D)(f || I, g, O),
        C = R.state,
        y = R.styles,
        b = R.forceUpdate,
        L = R.update,
        D = r.useMemo(
            function () {
                return {
                    ref: S,
                    style: y.popper,
                    placement: C ? C.placement : n,
                    hasPopperEscaped: C && C.modifiersData.hide ? C.modifiersData.hide.hasPopperEscaped : null,
                    isReferenceHidden: C && C.modifiersData.hide ? C.modifiersData.hide.isReferenceHidden : null,
                    arrowProps: {
                        style: y.arrow,
                        ref: N
                    },
                    forceUpdate: b || s,
                    update: L || l
                };
            },
            [S, N, n, C, y, L, b]
        );
    return (0, a.$p)(m)(D);
}
