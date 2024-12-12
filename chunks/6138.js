function i(e) {
    return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height
    });
}
r.d(n, {
    Z: function () {
        return i;
    }
});
