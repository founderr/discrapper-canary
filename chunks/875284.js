function r(e, t) {
    let n = window.getComputedStyle(e),
        r = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
    return r && t && (r = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), r;
}
n.d(t, {
    a: function () {
        return r;
    }
});
