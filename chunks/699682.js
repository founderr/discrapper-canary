r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(192379);
function a(e) {
    let n = (0, i.useRef)(null),
        r = (0, i.useRef)(null);
    return !Object.is(e, r.current) && ((n.current = r.current), (r.current = e)), n.current;
}
