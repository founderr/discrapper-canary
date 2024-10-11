t.d(n, {
    Z: function () {
        return i;
    }
});
function i(e) {
    if (null != e.title && null != e.filename) {
        let n = e.filename.lastIndexOf('.'),
            t = n > 0 ? e.filename.substr(n) : '';
        return e.title + t;
    }
    return e.filename;
}
