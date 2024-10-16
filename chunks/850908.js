n.d(i, {
    Z: function () {
        return t;
    }
});
function t(e) {
    if (null != e.title && null != e.filename) {
        let i = e.filename.lastIndexOf('.'),
            n = i > 0 ? e.filename.substr(i) : '';
        return e.title + n;
    }
    return e.filename;
}
