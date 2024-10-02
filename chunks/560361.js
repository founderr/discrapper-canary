n.d(a, {
    Z: function () {
        return i;
    }
});
var t = n(470079);
function i(e) {
    let a = t.useRef();
    (a.current = e),
        t.useEffect(
            () => () => {
                var e;
                return null === (e = a.current) || void 0 === e ? void 0 : e.call(a);
            },
            []
        );
}
