function i(e, n) {
    return e.classList ? !!n && e.classList.contains(n) : -1 !== (' ' + (e.className.baseVal || e.className) + ' ').indexOf(' ' + n + ' ');
}
r.d(n, {
    Z: function () {
        return i;
    }
});
