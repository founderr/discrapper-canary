function i(e) {
    var n, r;
    let i = null != e['aria-label'];
    return (e['aria-hidden'] = null !== (n = e['aria-hidden']) && void 0 !== n ? n : !i), (e.role = null !== (r = e.role) && void 0 !== r ? r : 'img'), e;
}
r.d(n, {
    Z: function () {
        return i;
    }
});
