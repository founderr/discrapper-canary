Object.defineProperty(n, '__esModule', { value: !0 }), (n.hover = void 0);
var i =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        },
    a = s(r(192379));
function s(e) {
    return e && e.__esModule ? e : { default: e };
}
function o(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function l(e, n) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n && ('object' == typeof n || 'function' == typeof n) ? n : e;
}
function u(e, n) {
    if ('function' != typeof n && null !== n) throw TypeError('Super expression must either be null or a function, not ' + typeof n);
    (e.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    })),
        n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
}
var c = (n.hover = function (e) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'span';
    return (function (r) {
        function s() {
            o(this, s);
            for (var r, u, c, d = arguments.length, f = Array(d), _ = 0; _ < d; _++) f[_] = arguments[_];
            return (
                (u = c = l(this, (r = s.__proto__ || Object.getPrototypeOf(s)).call.apply(r, [this].concat(f)))),
                (c.state = { hover: !1 }),
                (c.handleMouseOver = function () {
                    return c.setState({ hover: !0 });
                }),
                (c.handleMouseOut = function () {
                    return c.setState({ hover: !1 });
                }),
                (c.render = function () {
                    return a.default.createElement(
                        n,
                        {
                            onMouseOver: c.handleMouseOver,
                            onMouseOut: c.handleMouseOut
                        },
                        a.default.createElement(e, i({}, c.props, c.state))
                    );
                }),
                l(c, u)
            );
        }
        return u(s, r), s;
    })(a.default.Component);
});
n.default = c;
