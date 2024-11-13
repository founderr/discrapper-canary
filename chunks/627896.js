n.d(t, {
    x: function () {
        return o;
    }
}),
    n(47120);
var i = n(192379);
function o(e, t, n) {
    let o = i.useRef(null),
        [s, a] = i.useState(!1),
        l = i.useCallback(() => {
            if (e && null !== o.current) {
                var n;
                a((null === (n = o.current) || void 0 === n ? void 0 : n.offsetHeight) > 2.5 * t);
            }
        }, [a, e, t]);
    return (
        i.useLayoutEffect(() => {
            l();
        }, [l, e, n]),
        {
            postTitleRef: o,
            isNewBadgeOverflow: s
        }
    );
}
