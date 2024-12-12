r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(192379),
    a = r(887490);
function s(e, n, r) {
    let s = i.useCallback(
            (e) => {
                if (n) return !0;
                if (!0 === e.defaultPrevented) return !1;
                let i = r(e);
                return i && (e.preventDefault(), e.stopPropagation()), i;
            },
            [n, r]
        ),
        o = i.useCallback(
            (n) => {
                let { event: r } = n;
                !s(r) && (r.preventDefault(), r.stopPropagation(), null != r.clipboardData && (e.insertData(r.clipboardData), a.bN.focus(e)));
            },
            [e, s]
        );
    return {
        handlePaste: s,
        handleGlobalPaste: o
    };
}
