r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(192379),
    a = r(667397);
let s = [];
function o(e, n) {
    let r = (0, i.useRef)(),
        o = (0, i.useRef)(s);
    return o.current === s ? ((r.current = e()), (o.current = n)) : !(0, a.Z)(n, o.current) && ((r.current = e()), (o.current = n)), r.current;
}
