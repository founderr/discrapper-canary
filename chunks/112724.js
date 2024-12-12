r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(259105);
function o(e) {
    return a.forwardRef(function (n, r) {
        let o = a.useRef();
        return (
            a.useImperativeHandle(r, () => ({
                triggerResize: () => {
                    var e;
                    null === (e = o.current) || void 0 === e || e.onResize();
                }
            })),
            (0, i.jsx)(s.default, {
                ref: o,
                children: (r) => {
                    let { width: a, height: s } = r;
                    return (0, i.jsx)(e, {
                        ...n,
                        width: a,
                        height: s
                    });
                }
            })
        );
    });
}
