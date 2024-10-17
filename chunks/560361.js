n.d(t, {
    Z: function () {
        return r;
    }
});
var a = n(470079);
function r(e) {
    let t = a.useRef();
    (t.current = e),
        a.useEffect(
            () => () => {
                var e;
                return null === (e = t.current) || void 0 === e ? void 0 : e.call(t);
            },
            []
        );
}
