e.d(n, {
    Z: function () {
        return o;
    }
});
var i = e(200651),
    s = e(192379);
let l = (t) => (n) => {
    null == n || n.stopPropagation(), t();
};
function o(t) {
    let { onClick: n, className: e, children: o } = t,
        r = s.useRef(null);
    return (0, i.jsx)('div', {
        onClick: n,
        ref: r,
        className: e,
        children: o({
            areaRef: r,
            handleStopPropagation: l
        })
    });
}
