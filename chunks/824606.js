Object.defineProperty(t, '__esModule', { value: !0 }), (t.Swatch = void 0);
var r =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    i = l(n(470079)),
    a = l(n(844303)),
    o = n(207545),
    s = l(n(263081));
function l(e) {
    return e && e.__esModule ? e : { default: e };
}
var u = 13,
    c = (t.Swatch = function (e) {
        var t = e.color,
            n = e.style,
            o = e.onClick,
            l = void 0 === o ? function () {} : o,
            c = e.onHover,
            d = e.title,
            _ = void 0 === d ? t : d,
            E = e.children,
            f = e.focus,
            h = e.focusStyle,
            p = void 0 === h ? {} : h,
            m = 'transparent' === t,
            I = (0, a.default)({
                default: {
                    swatch: r(
                        {
                            background: t,
                            height: '100%',
                            width: '100%',
                            cursor: 'pointer',
                            position: 'relative',
                            outline: 'none'
                        },
                        n,
                        f ? p : {}
                    )
                }
            }),
            T = function (e) {
                return l(t, e);
            },
            g = function (e) {
                return e.keyCode === u && l(t, e);
            },
            S = function (e) {
                return c(t, e);
            },
            A = {};
        return (
            c && (A.onMouseOver = S),
            i.default.createElement(
                'div',
                r(
                    {
                        style: I.swatch,
                        onClick: T,
                        title: _,
                        tabIndex: 0,
                        onKeyDown: g
                    },
                    A
                ),
                E,
                m &&
                    i.default.createElement(s.default, {
                        borderRadius: I.swatch.borderRadius,
                        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
                    })
            )
        );
    });
t.default = (0, o.handleFocus)(c);
