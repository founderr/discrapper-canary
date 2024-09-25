r = { value: !0 };
var r,
    i =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    a = (function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    })(),
    o = n(470079),
    s = _(o),
    l = _(n(476400)),
    u = _(n(699581)),
    c = _(n(726351)),
    d = _(n(512722));
function _(e) {
    return e && e.__esModule ? e : { default: e };
}
function E(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function f(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
function h(e, t) {
    if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function, not ' + typeof t);
    (e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    })),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var p = (function (e) {
    function t() {
        E(this, t);
        var e = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (e.state = { initiated: !1 }), (e.onResize = e.onResize.bind(e)), e;
    }
    return (
        h(t, e),
        a(t, null, [
            {
                key: 'getDomNodeDimensions',
                value: function (e) {
                    var t = e.getBoundingClientRect();
                    return {
                        top: t.top,
                        right: t.right,
                        bottom: t.bottom,
                        left: t.left,
                        width: t.width,
                        height: t.height
                    };
                }
            }
        ]),
        a(t, [
            {
                key: 'componentDidMount',
                value: function () {
                    (this.parentNode = u.default.findDOMNode(this).parentNode),
                        (this.elementResizeDetector = (0, c.default)({
                            strategy: 'scroll',
                            callOnAdd: !1
                        })),
                        this.elementResizeDetector.listenTo(this.parentNode, this.onResize),
                        (this.componentIsMounted = !0),
                        this.onResize();
                }
            },
            {
                key: 'componentWillUnmount',
                value: function () {
                    (this.componentIsMounted = !1), this.elementResizeDetector.uninstall(this.parentNode);
                }
            },
            {
                key: 'onResize',
                value: function () {
                    var e = t.getDomNodeDimensions(this.parentNode);
                    this.componentIsMounted && this.setState(i({ initiated: !0 }, e));
                }
            },
            {
                key: 'render',
                value: function () {
                    if (((0, d.default)(this.props.children, 'Expected children to be one of function or React.Element'), !this.state.initiated)) return s.default.createElement('div', null);
                    if ('function' == typeof this.props.children) {
                        var e = this.props.children(this.state);
                        return e && o.Children.only(e);
                    }
                    return o.Children.only(s.default.cloneElement(this.props.children, this.state));
                }
            }
        ]),
        t
    );
})(o.Component);
(p.propTypes = {
    children: l.default.oneOfType([l.default.element, l.default.func]).isRequired
}),
    (t.default = p);
