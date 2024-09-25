n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(40851);
function o(e) {
    let { renderWindow: t } = (0, i.useContext)(a.ZP),
        [n, r] = (0, i.useState)(() => t.matchMedia(e).matches);
    return (
        (0, i.useEffect)(() => {
            let n = t.matchMedia(e),
                i = (e) => {
                    r(null == e ? void 0 : e.matches);
                };
            return i(n), n.addListener(i), () => n.removeListener(i);
        }, [e, t]),
        n
    );
}
