n.d(s, {
    Z: function () {
        return l;
    }
});
var t = n(735250),
    o = n(470079);
let a = (e) => (s) => {
    null == s || s.stopPropagation(), e();
};
function l(e) {
    let { onClick: s, className: n, children: l } = e,
        r = o.useRef(null);
    return (0, t.jsx)('div', {
        onClick: s,
        ref: r,
        className: n,
        children: l({
            areaRef: r,
            handleStopPropagation: a
        })
    });
}
