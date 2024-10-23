t.d(n, {
    Z: function () {
        return r;
    }
});
var a = t(192379);
function r(e) {
    let n = a.useRef();
    (n.current = e),
        a.useEffect(
            () => () => {
                var e;
                return null === (e = n.current) || void 0 === e ? void 0 : e.call(n);
            },
            []
        );
}
