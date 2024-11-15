n.d(t, {
    Z: function () {
        return i;
    }
});
var l = n(192379);
function i(e) {
    let t = l.useRef();
    (t.current = e),
        l.useEffect(
            () => () => {
                var e;
                return null === (e = t.current) || void 0 === e ? void 0 : e.call(t);
            },
            []
        );
}
