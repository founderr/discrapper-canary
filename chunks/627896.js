n.d(t, {
    x: function () {
        return a;
    }
});
var r = n(47120);
var i = n(470079);
function a(e, t, n) {
    let r = i.useRef(null),
        [a, o] = i.useState(!1),
        s = i.useCallback(() => {
            if (e && null !== r.current) {
                var n;
                o((null === (n = r.current) || void 0 === n ? void 0 : n.offsetHeight) > 2.5 * t);
            }
        }, [o, e, t]);
    return (
        i.useLayoutEffect(() => {
            s();
        }, [s, e, n]),
        {
            postTitleRef: r,
            isNewBadgeOverflow: a
        }
    );
}
