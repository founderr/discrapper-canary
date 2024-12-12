r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(192379);
function a(e) {
    let n = (0, i.useRef)();
    return (
        (0, i.useEffect)(() => {
            n.current = e;
        }, [e]),
        n.current
    );
}
