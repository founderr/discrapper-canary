r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(175922);
function a(e) {
    var n = (0, i.Z)(e),
        r = e.offsetWidth,
        a = e.offsetHeight;
    return (
        1 >= Math.abs(n.width - r) && (r = n.width),
        1 >= Math.abs(n.height - a) && (a = n.height),
        {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: r,
            height: a
        }
    );
}
