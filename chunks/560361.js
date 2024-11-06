n.d(t, {
    Z: function () {
        return i;
    }
});
var r = n(192379);
function i(e) {
    let t = r.useRef();
    (t.current = e),
        r.useEffect(
            () => () => {
                var e;
                return null === (e = t.current) || void 0 === e ? void 0 : e.call(t);
            },
            []
        );
}
