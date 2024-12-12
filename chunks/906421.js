r.d(n, {
    d: function () {
        return s;
    }
});
var i = r(192379),
    a = r(239700);
function s(e) {
    let [n, r] = (0, a.zk)(e.isOpen, e.defaultOpen || !1, e.onOpenChange),
        s = (0, i.useCallback)(() => {
            r(!0);
        }, [r]),
        o = (0, i.useCallback)(() => {
            r(!1);
        }, [r]),
        l = (0, i.useCallback)(() => {
            r(!n);
        }, [r, n]);
    return {
        isOpen: n,
        setOpen: r,
        open: s,
        close: o,
        toggle: l
    };
}
