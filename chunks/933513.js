function i(e) {
    let n = null == e ? void 0 : e.activeElement;
    return ['INPUT', 'TEXTAREA'].includes(null == n ? void 0 : n.tagName) || (null == n ? void 0 : n.isContentEditable);
}
r.d(n, {
    Z: function () {
        return i;
    }
});
