r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(192379);
function a() {
    let e = i.useRef(null);
    return (
        null === e.current && (e.current = new AbortController()),
        i.useEffect(
            () => () => {
                var n;
                null === (n = e.current) || void 0 === n || n.abort();
            },
            []
        ),
        e.current.signal
    );
}
