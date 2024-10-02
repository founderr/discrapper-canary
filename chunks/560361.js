a.d(n, {
    Z: function () {
        return i;
    }
});
var t = a(470079);
function i(e) {
    let n = t.useRef();
    (n.current = e),
        t.useEffect(
            () => () => {
                var e;
                return null === (e = n.current) || void 0 === e ? void 0 : e.call(n);
            },
            []
        );
}
