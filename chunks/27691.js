n.d(t, {
    B: function () {
        return i;
    }
});
var r = n(192379);
function i(e) {
    let t = (0, r.useRef)(null);
    return (0, r.useMemo)(
        () => ({
            get current() {
                return t.current;
            },
            set current(value) {
                (t.current = value), 'function' == typeof e ? e(value) : e && (e.current = value);
            }
        }),
        [e]
    );
}
