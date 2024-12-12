r.d(n, {
    b: function () {
        return s;
    }
});
var i = r(47120);
var a = r(192379);
function s(e, n) {
    let [r, i] = (0, a.useState)(!1),
        s = (0, a.useCallback)(
            (n) => {
                (n.target === n.currentTarget || n.currentTarget.contains(document.activeElement)) && i(!0), null != e && e(n);
            },
            [e]
        );
    return {
        handleFocus: s,
        handleBlur: (0, a.useCallback)(
            (e) => {
                (e.target === e.currentTarget || !e.currentTarget.contains(document.activeElement)) && i(!1), null != n && n(e);
            },
            [n]
        ),
        isFocused: r
    };
}
