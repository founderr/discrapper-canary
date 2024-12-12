Object.defineProperty(n, '__esModule', { value: !0 }), (n.Checkboard = void 0);
var i =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        },
    a = r(192379),
    s = c(a),
    o = c(r(723184)),
    l = u(r(292346));
function u(e) {
    if (e && e.__esModule) return e;
    var n = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    return (n.default = e), n;
}
function c(e) {
    return e && e.__esModule ? e : { default: e };
}
var d = (n.Checkboard = function (e) {
    var n = e.white,
        r = e.grey,
        u = e.size,
        c = e.renderers,
        d = e.borderRadius,
        f = e.boxShadow,
        _ = e.children,
        h = (0, o.default)({
            default: {
                grid: {
                    borderRadius: d,
                    boxShadow: f,
                    absolute: '0px 0px 0px 0px',
                    background: 'url(' + l.get(n, r, u, c.canvas) + ') center left'
                }
            }
        });
    return (0, a.isValidElement)(_) ? s.default.cloneElement(_, i({}, _.props, { style: i({}, _.props.style, h.grid) })) : s.default.createElement('div', { style: h.grid });
});
(d.defaultProps = {
    size: 8,
    white: 'transparent',
    grey: 'rgba(0,0,0,.08)',
    renderers: {}
}),
    (n.default = d);
