r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(192379);
function a(e) {
    let n = null == e ? void 0 : e.getBoundingClientRect(),
        r = null == n ? void 0 : n.left,
        a = null == n ? void 0 : n.top;
    return (0, i.useMemo)(
        () =>
            null != r && null != a
                ? {
                      x: r,
                      y: a
                  }
                : null,
        [r, a]
    );
}
