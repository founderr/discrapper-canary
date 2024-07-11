t.d(n, {
    Z: function () {
        return r;
    }
});
var i = t(470079), l = t(434650);
function r(e) {
    let {
            onVisible: n,
            threshold: t
        } = e, r = i.useRef(!1);
    return (0, l.O)(e => {
        if (!!e && !0 !== r.current)
            n(), r.current = !0;
    }, t);
}
