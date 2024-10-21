t.d(s, {
    Z: function () {
        return i;
    }
});
var n = t(192379);
function i(e, s) {
    let t = n.useRef(e);
    n.useEffect(() => {
        e.length > t.current.length && s(), (t.current = e);
    }, [e, s]);
}
