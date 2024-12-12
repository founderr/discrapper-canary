r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(192379);
function a(e) {
    let n = i.useRef(null),
        r = i.useCallback(
            (r) => {
                null != e && ('function' == typeof e ? e(r) : (e.current = r), (n.current = r));
            },
            [e]
        );
    return [n, r];
}
