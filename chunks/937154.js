n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var i = n(192379);
function r() {
    return 'undefined' == typeof document || 'visible' === document.visibilityState;
}
function s() {
    let [e, t] = (0, i.useState)(r());
    return (
        (0, i.useEffect)(() => {
            function e() {
                t(r());
            }
            return (
                window.addEventListener('visibilitychange', e),
                () => {
                    window.removeEventListener('visibilitychange', e);
                }
            );
        }, [t]),
        e
    );
}
