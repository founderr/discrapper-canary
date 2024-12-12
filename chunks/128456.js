r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(192379),
    a = r(335218),
    s = r.n(a),
    o = {};
function l(e, n) {
    void 0 === n && (n = s());
    var r = (0, i.useRef)(o),
        a = r.current;
    return (
        (0, i.useEffect)(function () {
            r.current = a;
        }),
        (r.current !== o && n(e, r.current)) || (a = e),
        a
    );
}
