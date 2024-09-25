var r =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    i = 'src/createAnimatedComponent.js',
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
    })();
function o(e, t) {
    var n = {};
    for (var r in e) {
        if (!(t.indexOf(r) >= 0)) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
}
function s(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function l(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
function u(e, t) {
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
var c = n(470079),
    d = n(214438),
    _ = n(752934);
function E(e) {
    var t = 'node',
        n = (function (n) {
            function E() {
                return s(this, E), l(this, (E.__proto__ || Object.getPrototypeOf(E)).apply(this, arguments));
            }
            return (
                u(E, n),
                a(E, [
                    {
                        key: 'componentWillUnmount',
                        value: function () {
                            this._propsAnimated && this._propsAnimated.__detach();
                        }
                    },
                    {
                        key: 'setNativeProps',
                        value: function (e) {
                            !1 === _.current(this.refs[t], e, this) && this.forceUpdate();
                        }
                    },
                    {
                        key: 'componentWillMount',
                        value: function () {
                            this.attachProps(this.props);
                        }
                    },
                    {
                        key: 'attachProps',
                        value: function (e) {
                            var n = this,
                                r = this._propsAnimated,
                                i = function () {
                                    !1 === _.current(n.refs[t], n._propsAnimated.__getAnimatedValue(), n) && n.forceUpdate();
                                };
                            (this._propsAnimated = new d(e, i)), r && r.__detach();
                        }
                    },
                    {
                        key: 'componentWillReceiveProps',
                        value: function (e) {
                            this.attachProps(e);
                        }
                    },
                    {
                        key: 'render',
                        value: function () {
                            var n = this._propsAnimated.__getValue(),
                                a = n.style,
                                s = o(n, ['style']);
                            return c.createElement(
                                e,
                                r({}, s, {
                                    style: _.transformStyles(a),
                                    ref: t,
                                    __source: {
                                        fileName: i,
                                        lineNumber: 78
                                    }
                                })
                            );
                        }
                    }
                ]),
                E
            );
        })(c.Component);
    return (
        (n.propTypes = {
            style: function (t, n, r) {
                if (!e.propTypes) return;
            }
        }),
        n
    );
}
e.exports = E;
