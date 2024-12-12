r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(47120);
var a = r(191532);
function s(e, n, r, i) {
    let s = (0, a.Z)(e, n, i),
        o = (e, n) => r.computeScrollPosition(e, n);
    return {
        ...s,
        getScrollPosition: o,
        isItemVisible(e, r) {
            let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                [a, s] = o(e, r),
                l = n();
            return i ? a >= l.scrollTop && a + s <= l.scrollTop + l.offsetHeight : a + s >= l.scrollTop && a <= l.scrollTop + l.offsetHeight;
        },
        scrollToIndex(e) {
            let { section: n, row: r, animate: i, callback: a, padding: l = 0 } = e,
                [u, c] = o(n, r);
            s.scrollIntoViewRect({
                start: u,
                end: u + c,
                padding: l,
                animate: i,
                callback: a
            });
        }
    };
}
