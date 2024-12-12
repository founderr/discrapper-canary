r.d(n, {
    r: function () {
        return d;
    }
});
var i = r(192379),
    a = r(298503),
    s = r(632590),
    o = r(283209),
    l = function () {},
    u = function () {
        return Promise.resolve(null);
    },
    c = [];
function d(e) {
    var n = e.placement,
        r = void 0 === n ? 'bottom' : n,
        d = e.strategy,
        f = void 0 === d ? 'absolute' : d,
        _ = e.modifiers,
        h = void 0 === _ ? c : _,
        p = e.referenceElement,
        m = e.onFirstUpdate,
        g = e.innerRef,
        E = e.children,
        v = i.useContext(a.C8),
        I = i.useState(null),
        T = I[0],
        b = I[1],
        y = i.useState(null),
        S = y[0],
        A = y[1];
    i.useEffect(
        function () {
            (0, s.k$)(g, T);
        },
        [g, T]
    );
    var N = i.useMemo(
            function () {
                return {
                    placement: r,
                    strategy: f,
                    onFirstUpdate: m,
                    modifiers: [].concat(h, [
                        {
                            name: 'arrow',
                            enabled: null != S,
                            options: { element: S }
                        }
                    ])
                };
            },
            [r, f, m, h, S]
        ),
        C = (0, o.D)(p || v, T, N),
        R = C.state,
        O = C.styles,
        D = C.forceUpdate,
        L = C.update,
        x = i.useMemo(
            function () {
                return {
                    ref: b,
                    style: O.popper,
                    placement: R ? R.placement : r,
                    hasPopperEscaped: R && R.modifiersData.hide ? R.modifiersData.hide.hasPopperEscaped : null,
                    isReferenceHidden: R && R.modifiersData.hide ? R.modifiersData.hide.isReferenceHidden : null,
                    arrowProps: {
                        style: O.arrow,
                        ref: A
                    },
                    forceUpdate: D || l,
                    update: L || u
                };
            },
            [b, A, r, R, O, L, D]
        );
    return (0, s.$p)(E)(x);
}
