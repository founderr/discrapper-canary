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
        f = e.modifiers,
        _ = void 0 === f ? u : f,
        p = e.referenceElement,
        h = e.onFirstUpdate,
        m = e.innerRef,
        g = e.children,
        E = r.useContext(i.C8),
        v = r.useState(null),
        b = v[0],
        I = v[1],
        S = r.useState(null),
        T = S[0],
        y = S[1];
    r.useEffect(
        function () {
            (0, a.k$)(m, b);
        },
        [m, b]
    );
    var A = r.useMemo(
            function () {
                return {
                    placement: n,
                    strategy: d,
                    onFirstUpdate: h,
                    modifiers: [].concat(_, [
                        {
                            name: 'arrow',
                            enabled: null != T,
                            options: { element: T }
                        }
                    ])
                };
            },
            [n, d, h, _, T]
        ),
        N = (0, s.D)(p || E, b, A),
        C = N.state,
        R = N.styles,
        O = N.forceUpdate,
        D = N.update,
        L = r.useMemo(
            function () {
                return {
                    ref: I,
                    style: R.popper,
                    placement: C ? C.placement : n,
                    hasPopperEscaped: C && C.modifiersData.hide ? C.modifiersData.hide.hasPopperEscaped : null,
                    isReferenceHidden: C && C.modifiersData.hide ? C.modifiersData.hide.isReferenceHidden : null,
                    arrowProps: {
                        style: R.arrow,
                        ref: y
                    },
                    forceUpdate: O || o,
                    update: D || l
                };
            },
            [I, y, n, C, R, D, O]
        );
    return (0, a.$p)(g)(L);
}
