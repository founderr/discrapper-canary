function i(e, n) {
    let r = e.parentElement;
    for (; null != r; ) {
        if (r.classList.contains(n)) return r;
        r = r.parentElement;
    }
    return null;
}
r.d(n, {
    Z: function () {
        return i;
    }
});
