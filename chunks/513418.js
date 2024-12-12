r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(512722),
    a = r.n(i),
    s = r(709054);
function o(e) {
    a()(e.length <= 2 || s.default.compare(e[0].id, e[e.length - 1].id) >= 0, 'messages must be sorted in descending order.');
}
