n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(47120);
var i = n(191532);
function a(e, t, n, r) {
    let a = (0, i.Z)(e, t, r),
        o = (e, t) => n.computeScrollPosition(e, t);
    return {
        ...a,
        getScrollPosition: o,
        isItemVisible(e, n) {
            let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                [i, a] = o(e, n),
                s = t();
            return r ? i >= s.scrollTop && i + a <= s.scrollTop + s.offsetHeight : i + a >= s.scrollTop && i <= s.scrollTop + s.offsetHeight;
        },
        scrollToIndex(e) {
            let { section: t, row: n, animate: r, callback: i, padding: s = 0 } = e,
                [l, u] = o(t, n);
            a.scrollIntoViewRect({
                start: l,
                end: l + u,
                padding: s,
                animate: r,
                callback: i
            });
        }
    };
}
