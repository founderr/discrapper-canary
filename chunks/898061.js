r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(586168);
function a(e, n) {
    e.classList ? e.classList.add(n) : !(0, i.Z)(e, n) && ('string' == typeof e.className ? (e.className = e.className + ' ' + n) : e.setAttribute('class', ((e.className && e.className.baseVal) || '') + ' ' + n));
}
