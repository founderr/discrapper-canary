Object.defineProperty(n, '__esModule', { value: !0 }), (n.Swatch = void 0);
var i =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        },
    a = u(r(192379)),
    s = u(r(723184)),
    o = r(425980),
    l = u(r(122024));
function u(e) {
    return e && e.__esModule ? e : { default: e };
}
var c = 13,
    d = (n.Swatch = function (e) {
        var n = e.color,
            r = e.style,
            o = e.onClick,
            u = void 0 === o ? function () {} : o,
            d = e.onHover,
            f = e.title,
            _ = void 0 === f ? n : f,
            h = e.children,
            p = e.focus,
            m = e.focusStyle,
            g = void 0 === m ? {} : m,
            E = 'transparent' === n,
            v = (0, s.default)({
                default: {
                    swatch: i(
                        {
                            background: n,
                            height: '100%',
                            width: '100%',
                            cursor: 'pointer',
                            position: 'relative',
                            outline: 'none'
                        },
                        r,
                        p ? g : {}
                    )
                }
            }),
            I = function (e) {
                return u(n, e);
            },
            T = function (e) {
                return e.keyCode === c && u(n, e);
            },
            b = function (e) {
                return d(n, e);
            },
            y = {};
        return (
            d && (y.onMouseOver = b),
            a.default.createElement(
                'div',
                i(
                    {
                        style: v.swatch,
                        onClick: I,
                        title: _,
                        tabIndex: 0,
                        onKeyDown: T
                    },
                    y
                ),
                h,
                E &&
                    a.default.createElement(l.default, {
                        borderRadius: v.swatch.borderRadius,
                        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
                    })
            )
        );
    });
n.default = (0, o.handleFocus)(d);
